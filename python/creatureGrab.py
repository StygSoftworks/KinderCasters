#!/usr/bin/env python3
"""
Fetch art-crops from the Scryfall API for a given list of words.
- Tries exact card name first (cards/named?exact=).
- If no exact match, searches for the first card whose NAME contains the word (case-insensitive).
- Saves the original downloaded image in ./art_raw/
- Converts and saves a compressed .webp version in ./art_webp/

Requires: requests, pillow
pip install requests pillow

Run: python scryfall_art_fetcher.py
"""
from __future__ import annotations

import os
import re
import time
import json
import logging
from io import BytesIO
from typing import Dict, List, Optional

import requests
from PIL import Image

logging.basicConfig(level=logging.INFO, format="%(levelname)s: %(message)s")

# --- Flashcards (subset needed for fetching) ---------------------------------
# Source: Provided TypeScript array (id, word)
FLASHCARDS: List[Dict[str, str]] = [
#      {"id": "c-a", "word": "Angel"},
#      {"id": "c-b", "word": "Beast"},
#      {"id": "c-c", "word": "Cat"},
#      {"id": "c-d", "word": "Dragon"},
#      {"id": "c-e", "word": "Elf"},
#      {"id": "c-f", "word": "Faerie"},
#      {"id": "c-g", "word": "Giant"},
#      {"id": "c-h", "word": "Hydra"},
#      {"id": "c-i", "word": "Imp"},
#      {"id": "c-j", "word": "Jellyfish"},
#      {"id": "c-k", "word": "Knight"},
#      {"id": "c-l", "word": "Lion"},
#      {"id": "c-m", "word": "Merfolk"},
#      {"id": "c-n", "word": "Nighthawk"},
#      {"id": "c-o", "word": "Ox"},
#      {"id": "c-p", "word": "Phoenix"},

#      {"id": "c-r", "word": "Rat"},
#      {"id": "c-s", "word": "Spider"},
#      {"id": "c-t", "word": "Turtle"},
#      {"id": "c-u", "word": "Unicorn"},
#      {"id": "c-v", "word": "Vampire"},
#      {"id": "c-w", "word": "Wolf"},
#      {"id": "c-x", "word": "Xantid"},
#      {"id": "c-y", "word": "Yeti"},
#      {"id": "c-z", "word": "Zombie"},
#      {"id": "c-k", "word": "Kavu"},
#      {"id": "c-g", "word": "Goblin"},
#      {"id": "c-q", "word": "qu"},
# {"id": "c-n", "word": "Noggle"},
{"id": "c-q", "word": "Quina, Qu Gourmet"},
]

# Optional: nudge ambiguous words to a well-known exact card to improve art results
PREFERRED_EXACT: Dict[str, str] = {
    # Angels
    "Angel": "Serra Angel",  # The most iconic angel ever
    
    # Beasts
    "Beast": "Ravenous Baloth",  # Or "Thragtusk" for modern players
    
    # Cats
    "Cat": "Savannah Lions",  # Classic 2/1 for W
    
    # Dragons
    "Dragon": "Shivan Dragon",  # The original iconic dragon
    
    # Elves
    "Elf": "Llanowar Elves",  # Most iconic mana dork
    
    # Faeries
    "Faerie": "Spellstutter Sprite",  # Iconic from Lorwyn
    
    # Giants
    "Giant": "Borderland Behemoth",  # Or "Hammerfist Giant"
    
    # Hydras
    "Hydra": "Primordial Hydra",  # Classic hydra with X cost
    
    # Imps
    "Imp": "Bog Imp",  # Simple classic imp
    
    # Jellyfish
    "Jellyfish": "Man-o'-War",  # THE iconic jellyfish
    
    # Knights
    "Knight": "White Knight",  # Or "Black Knight" - mirror classics
    
    # Lions
    "Lion": "Savannah Lions",  # Same as Cat - it's a lion specifically
    
    # Merfolk
    "Merfolk": "Lord of Atlantis",  # Iconic merfolk lord
    
    # Nighthawks
    "Nighthawk": "Vampire Nighthawk",  # Perfect
    
    # Oxen
    "Ox": "Yoked Ox",  # Not many options here
    
    # Phoenix
    "Phoenix": "Rekindling Phoenix",  # Or "Chandra's Phoenix"
    
    # Rats
    "Rat": "Pack Rat",  # Extremely iconic and powerful
    
    # Spiders
    "Spider": "Giant Spider",  # Classic core set staple
    
    # Turtles
    "Turtle": "Meandering Towershell",  # Meme-tier iconic
    
    # Unicorns
    "Unicorn": "Pearled Unicorn",  # Classic alpha card
    
    # Vampires
    "Vampire": "Vampire Nighthawk",  # Or "Bloodghast"
    
    # Wolves
    "Wolf": "Young Wolf",  # Iconic undying wolf
    
    # Xantids
    "Xantid": "Xantid Swarm",  # Perfect
    
    # Yetis
    "Yeti": "Ohran Yeti",  # Not many iconic yetis
    
    # Zombies
    "Zombie": "Gravecrawler",  # Iconic recursive zombie
    
    # Kavu
    "Kavu": "Flametongue Kavu",  # THE most iconic kavu
    
    # Goblins
    "Goblin": "Goblin Guide",  # Or "Goblin Lackey" for vintage vibes
    
    # Noggles
    "Noggle": "Noggle Bandit",  # Shadowmoor's weird horse people
}

# --- Config ------------------------------------------------------------------
API_BASE = "https://api.scryfall.com"
HEADERS = {
    "User-Agent": "Kindercasters Art Fetcher (+https://scryfall.com/docs/api)"
}
RATE_LIMIT_DELAY = 0.12  # ~8-9 req/s to be polite
RAW_DIR = "art_raw"
WEBP_DIR = "art_webp"
WEBP_QUALITY = 80  # adjust as desired

os.makedirs(RAW_DIR, exist_ok=True)
os.makedirs(WEBP_DIR, exist_ok=True)

# --- Helpers -----------------------------------------------------------------

def safe_filename(text: str) -> str:
    text = text.strip().lower()
    text = re.sub(r"[^a-z0-9\-_.]+", "-", text)
    text = re.sub(r"-+", "-", text).strip("-")
    return text or "file"


def get_json(url: str, params: Optional[dict] = None) -> Optional[dict]:
    resp = requests.get(url, params=params, headers=HEADERS, timeout=20)
    if resp.status_code == 200:
        return resp.json()
    return None


def pick_art_uri(card: dict) -> Optional[str]:
    # Prefer art_crop when available (art only)
    iu = card.get("image_uris")
    if iu and iu.get("art_crop"):
        return iu["art_crop"]

    # Double-faced / split cards
    faces = card.get("card_faces") or []
    for face in faces:
        iu2 = face.get("image_uris")
        if iu2 and iu2.get("art_crop"):
            return iu2["art_crop"]

    # Fallback to a reasonably large single image if art_crop missing
    for key in ("large", "normal"):
        if iu and iu.get(key):
            return iu[key]
        for face in faces:
            iu2 = face.get("image_uris")
            if iu2 and iu2.get(key):
                return iu2[key]

    return None


def find_card_for_word(word: str) -> Optional[dict]:
    # 1) Preferred exact override
    override = PREFERRED_EXACT.get(word)
    if override:
        url = f"{API_BASE}/cards/named"
        data = get_json(url, params={"exact": override})
        if data:
            return data
        time.sleep(RATE_LIMIT_DELAY)

    # 2) Exact match on the word itself
    url = f"{API_BASE}/cards/named"
    data = get_json(url, params={"exact": word})
    if data:
        return data
    time.sleep(RATE_LIMIT_DELAY)

    # 3) Search by name containing the word (first match)
    # Use name: filter to require the substring in the card name
    # Reference: https://scryfall.com/docs/syntax
    q = f"name:{word}"
    url = f"{API_BASE}/cards/search"
    data = get_json(url, params={"q": q, "unique": "cards"})
    if data and data.get("data"):
        # Prefer the first item whose printed or oracle NAME contains the word substring
        for card in data["data"]:
            name = card.get("name", "")
            if re.search(rf"\b{re.escape(word)}\b", name, flags=re.IGNORECASE):
                return card
        # Otherwise, just return the first result
        return data["data"][0]

    return None


def download_image(url: str) -> Optional[bytes]:
    logging.info(f"Downloading: {url}")
    r = requests.get(url, headers=HEADERS, timeout=30)
    if r.status_code == 200:
        return r.content
    return None


def save_webp(image_bytes: bytes, out_path: str, quality: int = WEBP_QUALITY) -> None:
    with Image.open(BytesIO(image_bytes)) as im:
        if im.mode in ("RGBA", "P"):
            im = im.convert("RGB")
        im.save(out_path, format="WEBP", quality=quality, method=6)


def main():
    report: List[Dict[str, str]] = []

    for card in FLASHCARDS:
        cid = card["id"]
        word = card["word"]
        logging.info(f"\n=== Processing {cid}: {word} ===")

        data = find_card_for_word(word)
        time.sleep(RATE_LIMIT_DELAY)

        if not data:
            logging.warning(f"No card found for '{word}'. Skipping.")
            report.append({"id": cid, "word": word, "status": "not_found"})
            continue

        art_url = pick_art_uri(data)
        if not art_url:
            logging.warning(f"No image URI for '{word}'. Skipping.")
            report.append({"id": cid, "word": word, "status": "no_image"})
            continue

        img_bytes = download_image(art_url)
        time.sleep(RATE_LIMIT_DELAY)

        if not img_bytes:
            logging.warning(f"Failed to download image for '{word}'.")
            report.append({"id": cid, "word": word, "status": "download_failed"})
            continue

        base = f"{cid}_{safe_filename(word)}".lower()
        raw_path = os.path.join(RAW_DIR, base + os.path.splitext(art_url.split('?')[0])[-1])
        webp_path = os.path.join(WEBP_DIR, base + ".webp")

        # Save original bytes
        with open(raw_path, "wb") as f:
            f.write(img_bytes)

        # Save compressed WEBP
        try:
            save_webp(img_bytes, webp_path, WEBP_QUALITY)
            status = "ok"
        except Exception as e:
            logging.error(f"WEBP conversion failed for '{word}': {e}")
            status = "webp_failed"

        # Record useful metadata
        report.append({
            "id": cid,
            "word": word,
            "card_name": data.get("name", ""),
            "scryfall_uri": data.get("scryfall_uri", ""),
            "art_url": art_url,
            "raw_path": raw_path,
            "webp_path": webp_path.lower(),
            "status": status,
        })

    # Write a JSON report so you can see what matched what
    with open("art_fetch_report.json", "w", encoding="utf-8") as f:
        json.dump(report, f, ensure_ascii=False, indent=2)

    logging.info("\nDone. See art_raw/, art_webp/, and art_fetch_report.json")


if __name__ == "__main__":
    main()
