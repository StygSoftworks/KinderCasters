import jsPDF from 'jspdf';
import { Flashcard } from '../data/flashcards';

const CARD_WIDTH_INCHES = 2.5;
const CARD_HEIGHT_INCHES = 3.5;
const MM_PER_INCH = 25.4;
const CARD_WIDTH_MM = CARD_WIDTH_INCHES * MM_PER_INCH;
const CARD_HEIGHT_MM = CARD_HEIGHT_INCHES * MM_PER_INCH;
const MARGIN_MM = 10;
const SPACING_MM = 5;

interface CardData {
  displayText: string;
  word: string;
  rhyme: string;
  definition: string;
}

export async function generateFlashcardPDF(cards: Flashcard[], categoryTitle: string) {
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

  let cardIndex = 0;

  const drawCard = (x: number, y: number, cardData: CardData, isFront: boolean) => {
    pdf.setDrawColor(200, 200, 200);
    pdf.setLineWidth(0.5);
    pdf.rect(x, y, CARD_WIDTH_MM, CARD_HEIGHT_MM);

    if (isFront) {
      pdf.setFillColor(240, 240, 245);
      pdf.rect(x, y, CARD_WIDTH_MM, CARD_HEIGHT_MM, 'F');

      pdf.setFontSize(48);
      pdf.setFont('helvetica', 'bold');
      pdf.text(cardData.displayText, x + CARD_WIDTH_MM / 2, y + CARD_HEIGHT_MM / 2 - 10, {
        align: 'center',
        baseline: 'middle'
      });

      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.text(cardData.word, x + CARD_WIDTH_MM / 2, y + CARD_HEIGHT_MM / 2 + 15, {
        align: 'center',
        baseline: 'middle'
      });

      pdf.setFontSize(8);
      pdf.setFont('helvetica', 'normal');
      pdf.text('Tap to flip', x + CARD_WIDTH_MM / 2, y + CARD_HEIGHT_MM - 8, {
        align: 'center'
      });
    } else {
      pdf.setFillColor(255, 255, 255);
      pdf.rect(x, y, CARD_WIDTH_MM, CARD_HEIGHT_MM, 'F');

      pdf.setFontSize(16);
      pdf.setFont('helvetica', 'bold');
      pdf.text(cardData.displayText, x + 5, y + 10);

      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.text(cardData.word, x + 5, y + 20);

      pdf.setFontSize(9);
      pdf.setFont('helvetica', 'italic');
      const rhymeLines = pdf.splitTextToSize(`"${cardData.rhyme}"`, CARD_WIDTH_MM - 10);
      pdf.text(rhymeLines, x + 5, y + 30);

      pdf.setFontSize(9);
      pdf.setFont('helvetica', 'normal');
      const defLines = pdf.splitTextToSize(cardData.definition, CARD_WIDTH_MM - 10);
      pdf.text(defLines, x + 5, y + 50);
    }
  };

  for (let isFront of [true, false]) {
    cardIndex = 0;

    for (const card of cards) {
      if (cardIndex > 0 && cardIndex % cardsPerPage === 0) {
        pdf.addPage();
      }

      const positionOnPage = cardIndex % cardsPerPage;
      const row = Math.floor(positionOnPage / cardsPerRow);
      const col = positionOnPage % cardsPerRow;

      const x = MARGIN_MM + col * (CARD_WIDTH_MM + SPACING_MM);
      const y = MARGIN_MM + row * (CARD_HEIGHT_MM + SPACING_MM);

      const displayText = 'letter' in card ? card.letter : (card as any).number;
      const cardData: CardData = {
        displayText,
        word: card.word,
        rhyme: card.rhyme,
        definition: card.definition
      };

      drawCard(x, y, cardData, isFront);
      cardIndex++;
    }

    if (!isFront && cards.length > 0) {
      break;
    }

    if (isFront && cards.length > 0) {
      pdf.addPage();
    }
  }

  pdf.save(`${categoryTitle.replace(/\s+/g, '_')}_Flashcards.pdf`);
}
