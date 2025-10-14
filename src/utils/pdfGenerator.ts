import jsPDF from 'jspdf';
import { Flashcard } from '../data/flashcards';

const CARD_WIDTH_INCHES = 2.5;
const CARD_HEIGHT_INCHES = 3.5;
const MM_PER_INCH = 25.4;
const CARD_WIDTH_MM = CARD_WIDTH_INCHES * MM_PER_INCH;
const CARD_HEIGHT_MM = CARD_HEIGHT_INCHES * MM_PER_INCH;
const MARGIN_MM = 10;
const SPACING_MM = 5;
const BACK_OFFSET_X_MM = 6;
const BACK_OFFSET_Y_MM = 2;

interface CardData {
  displayText: string;
  word: string;
  rhyme: string;
  definition: string;
  color: string;
}

function parseGradientColor(gradientClass: string): { r: number; g: number; b: number } {
  const colorMap: { [key: string]: { r: number; g: number; b: number } } = {
    'yellow': { r: 254, g: 249, b: 195 },
    'orange': { r: 254, g: 215, b: 170 },
    'red': { r: 254, g: 202, b: 202 },
    'green': { r: 187, g: 247, b: 208 },
    'emerald': { r: 167, g: 243, b: 208 },
    'teal': { r: 153, g: 246, b: 228 },
    'blue': { r: 191, g: 219, b: 254 },
    'cyan': { r: 165, g: 243, b: 252 },
    'sky': { r: 186, g: 230, b: 253 },
    'purple': { r: 233, g: 213, b: 255 },
    'violet': { r: 221, g: 214, b: 254 },
    'pink': { r: 251, g: 207, b: 232 },
    'rose': { r: 254, g: 205, b: 211 },
    'amber': { r: 253, g: 230, b: 138 },
    'lime': { r: 217, g: 249, b: 157 },
    'gray': { r: 229, g: 231, b: 235 },
    'slate': { r: 226, g: 232, b: 240 },
    'stone': { r: 231, g: 229, b: 228 },
    'zinc': { r: 228, g: 228, b: 231 }
  };

  for (const colorName in colorMap) {
    if (gradientClass.includes(colorName)) {
      return colorMap[colorName];
    }
  }

  return { r: 240, g: 240, b: 245 };
}

export async function generateFlashcardPDF(cards: Flashcard[], categoryTitle: string, useColor: boolean = true) {
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'letter'
  });

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  const cardsPerRow = Math.floor((pageWidth - 2 * MARGIN_MM + SPACING_MM) / (CARD_WIDTH_MM + SPACING_MM));
  const cardsPerColumn = Math.floor((pageHeight - 2 * MARGIN_MM + SPACING_MM) / (CARD_HEIGHT_MM + SPACING_MM));
  const cardsPerPage = cardsPerRow * cardsPerColumn;

  const drawCardFront = (x: number, y: number, cardData: CardData) => {
    pdf.setDrawColor(0, 0, 0);
    pdf.setLineWidth(0.3);
    pdf.rect(x, y, CARD_WIDTH_MM, CARD_HEIGHT_MM);

    if (useColor) {
      const bgColor = parseGradientColor(cardData.color);
      pdf.setFillColor(bgColor.r, bgColor.g, bgColor.b);
    } else {
      pdf.setFillColor(255, 255, 255);
    }
    pdf.rect(x, y, CARD_WIDTH_MM, CARD_HEIGHT_MM, 'F');
    pdf.setDrawColor(0, 0, 0);
    pdf.setLineWidth(0.3);
    pdf.rect(x, y, CARD_WIDTH_MM, CARD_HEIGHT_MM, 'S');

    pdf.setFontSize(52);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(60, 60, 60);
    pdf.text(cardData.displayText, x + CARD_WIDTH_MM / 2, y + CARD_HEIGHT_MM / 2 - 8, {
      align: 'center',
      baseline: 'middle'
    });

    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(40, 40, 40);
    pdf.text(cardData.word, x + CARD_WIDTH_MM / 2, y + CARD_HEIGHT_MM / 2 + 18, {
      align: 'center',
      baseline: 'middle'
    });
  };

  const drawCardBack = (x: number, y: number, cardData: CardData) => {
    pdf.setDrawColor(0, 0, 0);
    pdf.setLineWidth(0.3);
    pdf.rect(x, y, CARD_WIDTH_MM, CARD_HEIGHT_MM);

    pdf.setFillColor(255, 255, 255);
    pdf.rect(x, y, CARD_WIDTH_MM, CARD_HEIGHT_MM, 'F');
    pdf.setDrawColor(0, 0, 0);
    pdf.setLineWidth(0.3);
    pdf.rect(x, y, CARD_WIDTH_MM, CARD_HEIGHT_MM, 'S');

    pdf.setFontSize(18);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(60, 60, 60);
    pdf.text(cardData.displayText, x + 5, y + 12);

    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(40, 40, 40);
    pdf.text(cardData.word, x + 5, y + 24);

    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'italic');
    pdf.setTextColor(80, 80, 80);
    const rhymeLines = pdf.splitTextToSize(`"${cardData.rhyme}"`, CARD_WIDTH_MM - 10);
    pdf.text(rhymeLines, x + 5, y + 36);

    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(60, 60, 60);
    const defLines = pdf.splitTextToSize(cardData.definition, CARD_WIDTH_MM - 10);
    const rhymeHeight = rhymeLines.length * 4;
    pdf.text(defLines, x + 5, y + 40 + rhymeHeight);
  };

  const totalPages = Math.ceil(cards.length / cardsPerPage);
  let isFirstPage = true;

  for (let pageNum = 0; pageNum < totalPages; pageNum++) {
    if (!isFirstPage) {
      pdf.addPage();
    }
    isFirstPage = false;

    const startIdx = pageNum * cardsPerPage;
    const endIdx = Math.min(startIdx + cardsPerPage, cards.length);

    for (let i = startIdx; i < endIdx; i++) {
      const card = cards[i];
      const displayText = 'letter' in card ? card.letter : (card as any).number;
      const cardData: CardData = {
        displayText,
        word: card.word,
        rhyme: card.rhyme,
        definition: card.definition,
        color: card.color
      };

      const positionOnPage = i - startIdx;
      const row = Math.floor(positionOnPage / cardsPerRow);
      const col = positionOnPage % cardsPerRow;

      const x = MARGIN_MM + col * (CARD_WIDTH_MM + SPACING_MM);
      const y = MARGIN_MM + row * (CARD_HEIGHT_MM + SPACING_MM);

      drawCardFront(x, y, cardData);
    }

    pdf.addPage();

    for (let i = startIdx; i < endIdx; i++) {
      const card = cards[i];
      const displayText = 'letter' in card ? card.letter : (card as any).number;
      const cardData: CardData = {
        displayText,
        word: card.word,
        rhyme: card.rhyme,
        definition: card.definition,
        color: card.color
      };

      const positionOnPage = i - startIdx;
      const row = Math.floor(positionOnPage / cardsPerRow);
      const originalCol = positionOnPage % cardsPerRow;
      const col = cardsPerRow - 1 - originalCol;

      const x = MARGIN_MM + col * (CARD_WIDTH_MM + SPACING_MM) + BACK_OFFSET_X_MM;
      const y = MARGIN_MM + row * (CARD_HEIGHT_MM + SPACING_MM) + BACK_OFFSET_Y_MM;

      drawCardBack(x, y, cardData);
    }
  }

  pdf.save(`${categoryTitle.replace(/\s+/g, '_')}_Flashcards.pdf`);
}
