import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { creaturesCards, magicWordsCards, heroesVillainsCards, numberCards } from '../data/flashcards';
import Navigation from '../components/Navigation';
import FlashcardItem from '../components/FlashcardItem';

export default function Flashcards() {
  const { category } = useParams<{ category: string }>();

  const categoryData = getCategoryData(category);

  if (!categoryData) {
    return <Navigate to="/portal" replace />;
  }

  const { title, cards, bgGradient } = categoryData;

  return (
    <div className={`min-h-screen bg-gradient-to-br ${bgGradient}`}>
      <Navigation />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <Link
            to="/portal"
            className="flex items-center gap-2 px-6 py-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400 text-gray-700 font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Portal
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            {title}
          </h1>

          <div className="text-sm text-gray-600 bg-white px-4 py-2 rounded-lg shadow">
            {cards.length} cards
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {cards.map((card) => {
            const displayLetter = 'letter' in card ? card.letter : card.number;
            const imageUrl = 'imageUrl' in card ? card.imageUrl : undefined;
            console.log(card);

           

            return (
              <FlashcardItem
                key={card.id}
                id={card.id}
                displayText={displayLetter}
                word={card.word}
                rhyme={card.rhyme}
                definition={card.definition}
                color={card.color}
                imageUrl={imageUrl}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function getCategoryData(category: string | undefined) {
  switch (category) {
    case 'creatures':
      return {
        title: 'Magical Creatures',
        cards: creaturesCards,
        bgGradient: 'from-green-50 via-emerald-50 to-teal-50'
      };
    case 'magic-words':
      return {
        title: 'Magic Words',
        cards: magicWordsCards,
        bgGradient: 'from-blue-50 via-cyan-50 to-sky-50'
      };
    case 'heroes-villains':
      return {
        title: 'Heroes, Villains & Numbers',
        cards: [...heroesVillainsCards, ...numberCards],
        bgGradient: 'from-orange-50 via-red-50 to-rose-50'
      };
    default:
      return null;
  }
}
