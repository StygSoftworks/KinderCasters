export interface Flashcard {
  id: string;
  letter: string;
  word: string;
  rhyme: string;
  definition: string;
  color: string;
  imageUrl?: string;
}

export const creaturesCards: Flashcard[] = [
  { id: 'c-a', letter: 'A', word: 'Angel', rhyme: 'Angels soar up high, watching from the sky', definition: 'A helpful creature with wings that protects others', color: 'from-yellow-200 to-orange-300', imageUrl: '/art_webp/c-a_angel.webp' },
  { id: 'c-b', letter: 'B', word: 'Beast', rhyme: 'Beasts are big and strong, stomping all day long', definition: 'A wild animal with great power', color: 'from-green-300 to-emerald-400', imageUrl: '/art_webp/c-b_beast.webp' },
  { id: 'c-c', letter: 'C', word: 'Cat', rhyme: 'Clever cats can pounce, quick as they announce', definition: 'A swift and sneaky feline friend', color: 'from-amber-200 to-yellow-300', imageUrl: '/art_webp/c-c_cat.webp' },
  { id: 'c-d', letter: 'D', word: 'Dragon', rhyme: 'Dragons breathe out flame, flying is their game', definition: 'A magical flying lizard that breathes fire', color: 'from-red-400 to-orange-500', imageUrl: '/art_webp/c-d_dragon.webp' },
  { id: 'c-e', letter: 'E', word: 'Elf', rhyme: 'Elves live in the trees, dancing in the breeze', definition: 'A graceful forest creature with pointy ears', color: 'from-green-200 to-lime-300', imageUrl: '/art_webp/c-e_elf.webp' },
  { id: 'c-f', letter: 'F', word: 'Faerie', rhyme: 'Faeries fly so light, sparkling in the night', definition: 'A tiny magical being with shimmering wings', color: 'from-blue-200 to-cyan-300', imageUrl: '/art_webp/c-f_faerie.webp' },
  { id: 'c-g', letter: 'G', word: 'Giant', rhyme: 'Giants stand so tall, biggest of them all', definition: 'An enormous person who towers above', color: 'from-stone-300 to-gray-400', imageUrl: '/art_webp/c-g_giant.webp' },
  { id: 'c-h', letter: 'H', word: 'Hydra', rhyme: 'Hydras grow more heads, from their water beds', definition: 'A creature with many snake-like heads', color: 'from-teal-300 to-emerald-400', imageUrl: '/art_webp/c-h_hydra.webp' },
  { id: 'c-i', letter: 'I', word: 'Imp', rhyme: 'Imps are small and sly, zooming as they fly', definition: 'A mischievous little creature', color: 'from-purple-300 to-pink-300', imageUrl: '/art_webp/c-i_imp.webp' },
  { id: 'c-j', letter: 'J', word: 'Jellyfish', rhyme: 'Jellyfish drift and glow, floating to and fro', definition: 'A see-through water creature that floats', color: 'from-cyan-200 to-blue-300', imageUrl: '/art_webp/c-j_jellyfish.webp' },
  { id: 'c-k', letter: 'K', word: 'Knight', rhyme: 'Knights in armor bright, ready for a fight', definition: 'A brave warrior who protects others', color: 'from-slate-300 to-zinc-400', imageUrl: '/art_webp/c-k_knight.webp' },
  { id: 'c-l', letter: 'L', word: 'Lion', rhyme: 'Lions roar with pride, walking side by side', definition: 'A powerful cat with a golden mane', color: 'from-amber-300 to-orange-400', imageUrl: '/art_webp/c-l_lion.webp' },
  { id: 'c-m', letter: 'M', word: 'Merfolk', rhyme: 'Merfolk swim and play, in the waves all day', definition: 'People who live in the ocean with fish tails', color: 'from-blue-300 to-teal-400', imageUrl: '/art_webp/c-m_merfolk.webp' },
  { id: 'c-n', letter: 'N', word: 'Nighthawk', rhyme: 'Nighthawks swoop and dive, keeping dreams alive', definition: 'A bird that flies in the dark', color: 'from-slate-400 to-gray-500', imageUrl: '/art_webp/c-n_nighthawk.webp' },
  { id: 'c-o', letter: 'O', word: 'Ox', rhyme: 'Oxen plow the ground, making not a sound', definition: 'A strong animal that helps with work', color: 'from-stone-300 to-amber-400', imageUrl: '/art_webp/c-o_ox.webp' },
  { id: 'c-p', letter: 'P', word: 'Phoenix', rhyme: 'Phoenix burns so bright, rising in new light', definition: 'A magical bird that comes back to life from fire', color: 'from-orange-400 to-red-500', imageUrl: '/art_webp/c-p_phoenix.webp' },
  { id: 'c-q', letter: 'Q', word: 'Quetzal', rhyme: 'Quetzals shine and gleam, like a rainbow dream', definition: 'A beautiful bird with colorful feathers', color: 'from-emerald-300 to-teal-400' },
  { id: 'c-r', letter: 'R', word: 'Rat', rhyme: 'Rats are quick and small, scurrying through the hall', definition: 'A clever little creature with a long tail', color: 'from-gray-300 to-stone-400', imageUrl: '/art_webp/c-r_rat.webp' },
  { id: 'c-s', letter: 'S', word: 'Spider', rhyme: 'Spiders spin their webs, on their silky threads', definition: 'A creature with eight legs that makes webs', color: 'from-slate-400 to-zinc-500', imageUrl: '/art_webp/c-s_spider.webp' },
  { id: 'c-t', letter: 'T', word: 'Turtle', rhyme: 'Turtles take their time, in their shells so fine', definition: 'A slow creature with a hard shell home', color: 'from-green-300 to-teal-400', imageUrl: '/art_webp/c-t_turtle.webp' },
  { id: 'c-u', letter: 'U', word: 'Unicorn', rhyme: 'Unicorns are rare, with magic in the air', definition: 'A beautiful horse with a magical horn', color: 'from-pink-200 to-purple-300', imageUrl: '/art_webp/c-u_unicorn.webp' },
  { id: 'c-v', letter: 'V', word: 'Vampire', rhyme: 'Vampires fly at night, gone by morning light', definition: 'A creature that sleeps during the day', color: 'from-red-300 to-rose-400', imageUrl: '/art_webp/c-v_vampire.webp' },
  { id: 'c-w', letter: 'W', word: 'Wolf', rhyme: 'Wolves run in a pack, through forests dark and black', definition: 'A wild dog that hunts with friends', color: 'from-gray-400 to-slate-500', imageUrl: '/art_webp/c-w_wolf.webp' },
  { id: 'c-x', letter: 'X', word: 'Xantid', rhyme: 'Xantids buzz around, without a single sound', definition: 'A magical insect that flies quietly', color: 'from-lime-300 to-green-400', imageUrl: '/art_webp/c-x_xantid.webp' },
  { id: 'c-y', letter: 'Y', word: 'Yeti', rhyme: 'Yetis in the snow, where cold winds blow', definition: 'A big furry creature from snowy mountains', color: 'from-cyan-200 to-blue-300', imageUrl: '/art_webp/c-y_yeti.webp' },
  { id: 'c-z', letter: 'Z', word: 'Zombie', rhyme: 'Zombies walk so slow, shambling to and fro', definition: 'A creature that moves in a sleepy way', color: 'from-gray-400 to-stone-500', imageUrl: '/art_webp/c-z_zombie.webp' },
];

export const magicWordsCards: Flashcard[] = [
  { id: 'mw-a', letter: 'A', word: 'Arcane', rhyme: 'Arcane means magic old, mysteries untold', definition: 'Something mysterious and magical', color: 'from-violet-300 to-purple-400' },
  { id: 'mw-b', letter: 'B', word: 'Brave', rhyme: 'Brave means not afraid, helping others in the shade', definition: 'Having courage to do hard things', color: 'from-orange-300 to-amber-400' },
  { id: 'mw-c', letter: 'C', word: 'Conjure', rhyme: 'Conjure makes things new, magic through and through', definition: 'To make something appear by magic', color: 'from-blue-300 to-cyan-400' },
  { id: 'mw-d', letter: 'D', word: 'Defend', rhyme: 'Defend means to guard, trying very hard', definition: 'To protect yourself or others', color: 'from-slate-300 to-gray-400' },
  { id: 'mw-e', letter: 'E', word: 'Enchant', rhyme: 'Enchant adds magic power, blooming like a flower', definition: 'To add special magic to something', color: 'from-pink-300 to-rose-400' },
  { id: 'mw-f', letter: 'F', word: 'Flying', rhyme: 'Flying through the air, without a single care', definition: 'Moving through the sky like a bird', color: 'from-sky-300 to-blue-400' },
  { id: 'mw-g', letter: 'G', word: 'Guard', rhyme: 'Guard means watch with care, being always there', definition: 'To watch over and keep safe', color: 'from-yellow-300 to-amber-400' },
  { id: 'mw-h', letter: 'H', word: 'Heal', rhyme: 'Heal makes hurt go away, feeling good today', definition: 'To make someone feel better', color: 'from-green-300 to-emerald-400' },
  { id: 'mw-i', letter: 'I', word: 'Inspire', rhyme: 'Inspire helps us try, reaching for the sky', definition: 'To encourage someone to do their best', color: 'from-amber-300 to-yellow-400' },
  { id: 'mw-j', letter: 'J', word: 'Journey', rhyme: 'Journey means to go, fast or very slow', definition: 'An adventure to somewhere new', color: 'from-teal-300 to-cyan-400' },
  { id: 'mw-k', letter: 'K', word: 'Kindness', rhyme: 'Kindness warms the heart, a very special art', definition: 'Being nice and helpful to others', color: 'from-rose-300 to-pink-400' },
  { id: 'mw-l', letter: 'L', word: 'Light', rhyme: 'Light shines bright and clear, chasing away fear', definition: 'What helps us see in the dark', color: 'from-yellow-200 to-amber-300' },
  { id: 'mw-m', letter: 'M', word: 'Mana', rhyme: 'Mana is magic power, growing by the hour', definition: 'Energy used to cast spells', color: 'from-purple-300 to-violet-400' },
  { id: 'mw-n', letter: 'N', word: 'Noble', rhyme: 'Noble means doing right, like a shining knight', definition: 'Acting with honor and goodness', color: 'from-blue-300 to-indigo-400' },
  { id: 'mw-o', letter: 'O', word: 'Oath', rhyme: 'Oath is a promise true, something you will do', definition: 'A special promise you keep', color: 'from-slate-300 to-zinc-400' },
  { id: 'mw-p', letter: 'P', word: 'Power', rhyme: 'Power makes you strong, helping all day long', definition: 'Strength to do important things', color: 'from-red-300 to-orange-400' },
  { id: 'mw-q', letter: 'Q', word: 'Quest', rhyme: 'Quest means searching far, following your star', definition: 'An important mission or journey', color: 'from-amber-300 to-orange-400' },
  { id: 'mw-r', letter: 'R', word: 'Restore', rhyme: 'Restore makes things whole, that is its goal', definition: 'To fix or bring something back', color: 'from-green-300 to-lime-400' },
  { id: 'mw-s', letter: 'S', word: 'Shield', rhyme: 'Shield keeps you safe, from danger you escape', definition: 'Something that protects you', color: 'from-gray-300 to-slate-400' },
  { id: 'mw-t', letter: 'T', word: 'Transform', rhyme: 'Transform means to change, looking very strange', definition: 'To turn into something different', color: 'from-teal-300 to-cyan-400' },
  { id: 'mw-u', letter: 'U', word: 'Unite', rhyme: 'Unite means join as one, working til we are done', definition: 'To come together as friends', color: 'from-blue-300 to-sky-400' },
  { id: 'mw-v', letter: 'V', word: 'Vigilant', rhyme: 'Vigilant means alert, stopping any hurt', definition: 'Always watching and ready to help', color: 'from-yellow-300 to-orange-400' },
  { id: 'mw-w', letter: 'W', word: 'Wisdom', rhyme: 'Wisdom helps you know, which way you should go', definition: 'Being smart and making good choices', color: 'from-cyan-300 to-teal-400' },
  { id: 'mw-x', letter: 'X', word: 'eXalt', rhyme: 'Exalt makes things grow, stronger as they go', definition: 'To make something greater and better', color: 'from-amber-300 to-yellow-400' },
  { id: 'mw-y', letter: 'Y', word: 'Yearn', rhyme: 'Yearn means hope and wish, for something delish', definition: 'To want something very much', color: 'from-pink-300 to-rose-400' },
  { id: 'mw-z', letter: 'Z', word: 'Zeal', rhyme: 'Zeal means trying hard, being on your guard', definition: 'Great energy and excitement', color: 'from-orange-300 to-red-400' },
];

export const heroesVillainsCards: Flashcard[] = [
  { id: 'hv-a', letter: 'A', word: 'Ajani', rhyme: 'Ajani the lion white, protecting with his might', definition: 'A brave lion hero who heals friends', color: 'from-yellow-200 to-amber-300' },
  { id: 'hv-b', letter: 'B', word: 'Basri', rhyme: 'Basri leads the way, fighting for the day', definition: 'A soldier hero who protects others', color: 'from-orange-300 to-yellow-400' },
  { id: 'hv-c', letter: 'C', word: 'Chandra', rhyme: 'Chandra makes fire bright, burning with her light', definition: 'A hero with the power of fire', color: 'from-red-400 to-orange-500' },
  { id: 'hv-d', letter: 'D', word: 'Davriel', rhyme: 'Davriel walks in shadow, through every vale and meadow', definition: 'A mysterious hero of darkness', color: 'from-gray-500 to-slate-600' },
  { id: 'hv-e', letter: 'E', word: 'Elspeth', rhyme: 'Elspeth brave and true, helps both me and you', definition: 'A knight hero who never gives up', color: 'from-slate-300 to-zinc-400' },
  { id: 'hv-f', letter: 'F', word: 'Fblthp', rhyme: 'Fblthp gets lost a lot, in every single spot', definition: 'A small creature who goes on adventures', color: 'from-blue-300 to-cyan-400' },
  { id: 'hv-g', letter: 'G', word: 'Garruk', rhyme: 'Garruk loves the wild, nature is his child', definition: 'A hero friend to all beasts', color: 'from-green-400 to-emerald-500' },
  { id: 'hv-h', letter: 'H', word: 'Huatli', rhyme: 'Huatli rides on dinosaurs, from tropical shores', definition: 'A hero who befriends giant creatures', color: 'from-lime-300 to-green-400' },
  { id: 'hv-i', letter: 'I', word: 'Isperia', rhyme: 'Isperia is wise and fair, ruling with great care', definition: 'A hero who makes good laws', color: 'from-blue-300 to-sky-400' },
  { id: 'hv-j', letter: 'J', word: 'Jace', rhyme: 'Jace reads every mind, secrets he will find', definition: 'A hero who solves mysteries', color: 'from-blue-400 to-cyan-500' },
  { id: 'hv-k', letter: 'K', word: 'Karn', rhyme: 'Karn is made of steel, time is what he heals', definition: 'A hero made of metal who travels through time', color: 'from-slate-400 to-gray-500' },
  { id: 'hv-l', letter: 'L', word: 'Liliana', rhyme: 'Liliana knows dark spells, and many tales she tells', definition: 'A powerful hero who controls darkness', color: 'from-purple-400 to-violet-500' },
  { id: 'hv-m', letter: 'M', word: 'Teferi', rhyme: 'Teferi bends time slow, forward, back they go', definition: 'A wise hero who controls time', color: 'from-cyan-300 to-blue-400' },
  { id: 'hv-n', letter: 'N', word: 'Nahiri', rhyme: 'Nahiri shapes the stone, power all her own', definition: 'A hero who moves rocks and mountains', color: 'from-stone-400 to-orange-500' },
  { id: 'hv-o', letter: 'O', word: 'Ob Nixilis', rhyme: 'Ob Nixilis demon lord, chaos is his sword', definition: 'A villain with powerful dark magic', color: 'from-red-500 to-gray-600' },
  { id: 'hv-p', letter: 'P', word: 'Sorin', rhyme: 'Sorin vampire old, his story must be told', definition: 'An ancient hero who protects worlds', color: 'from-gray-400 to-slate-500' },
  { id: 'hv-q', letter: 'Q', word: 'Quintorius', rhyme: 'Quintorius digs for treasure, ancient beyond measure', definition: 'A hero who discovers old things', color: 'from-amber-300 to-orange-400' },
  { id: 'hv-r', letter: 'R', word: 'Rowan', rhyme: 'Rowan casts fire bright, twin with magic might', definition: 'A young hero learning fire magic', color: 'from-red-400 to-rose-500' },
  { id: 'hv-s', letter: 'S', word: 'Saheeli', rhyme: 'Saheeli makes machines, greatest ever seen', definition: 'A hero who invents amazing things', color: 'from-orange-400 to-amber-500' },
  { id: 'hv-t', letter: 'T', word: 'Tamiyo', rhyme: 'Tamiyo writes it down, wearing wisdom is her crown', definition: 'A hero who records important stories', color: 'from-blue-300 to-cyan-400' },
  { id: 'hv-u', letter: 'U', word: 'Urza', rhyme: 'Urza is so smart, magic is his art', definition: 'A legendary hero who makes powerful items', color: 'from-slate-400 to-blue-500' },
  { id: 'hv-v', letter: 'V', word: 'Vivien', rhyme: 'Vivien calls the beast, from greatest to the least', definition: 'A hero who speaks to animals', color: 'from-green-400 to-lime-500' },
  { id: 'hv-w', letter: 'W', word: 'Will', rhyme: 'Will learns magic new, twin to his sister true', definition: 'A young hero learning ice magic', color: 'from-cyan-300 to-blue-400' },
  { id: 'hv-x', letter: 'X', word: 'Xira', rhyme: 'Xira has a sting, insect is her thing', definition: 'A hero who commands flying insects', color: 'from-lime-300 to-green-400' },
  { id: 'hv-y', letter: 'Y', word: 'Yawgmoth', rhyme: 'Yawgmoth villain old, his heart is dark and cold', definition: 'An ancient villain from long ago', color: 'from-gray-600 to-slate-700' },
  { id: 'hv-z', letter: 'Z', word: 'Zariel', rhyme: 'Zariel warrior strong, battles all day long', definition: 'A powerful hero who loves to fight', color: 'from-red-400 to-orange-500' },
];

export interface NumberCard {
  id: string;
  number: string;
  word: string;
  rhyme: string;
  definition: string;
  color: string;
}

export const numberCards: NumberCard[] = [
  { id: 'n-0', number: '0', word: 'Zero', rhyme: 'Zero means there is none, before we have begun', definition: 'Nothing at all, an empty amount', color: 'from-gray-300 to-slate-400' },
  { id: 'n-1', number: '1', word: 'One', rhyme: 'One is all alone, standing on its own', definition: 'A single thing by itself', color: 'from-blue-300 to-cyan-400' },
  { id: 'n-2', number: '2', word: 'Two', rhyme: 'Two make a perfect pair, friends who like to share', definition: 'A couple of things together', color: 'from-green-300 to-emerald-400' },
  { id: 'n-3', number: '3', word: 'Three', rhyme: 'Three points make a spell, casting very well', definition: 'Three things in a group', color: 'from-purple-300 to-violet-400' },
  { id: 'n-4', number: '4', word: 'Four', rhyme: 'Four legs on a beast, running to the feast', definition: 'Four things all together', color: 'from-amber-300 to-orange-400' },
  { id: 'n-5', number: '5', word: 'Five', rhyme: 'Five fingers on each hand, helping you to stand', definition: 'Five things in a set', color: 'from-pink-300 to-rose-400' },
  { id: 'n-6', number: '6', word: 'Six', rhyme: 'Six mana to cast, spells that really last', definition: 'Six things counted out', color: 'from-teal-300 to-cyan-400' },
  { id: 'n-7', number: '7', word: 'Seven', rhyme: 'Seven cards in hand, ready to command', definition: 'Seven things in a row', color: 'from-yellow-300 to-amber-400' },
  { id: 'n-8', number: '8', word: 'Eight', rhyme: 'Eight legs on a spider, sneaky little hider', definition: 'Eight things all around', color: 'from-slate-400 to-gray-500' },
  { id: 'n-9', number: '9', word: 'Nine', rhyme: 'Nine mighty dragons fly, soaring through the sky', definition: 'Nine things in a collection', color: 'from-red-400 to-orange-500' },
];
