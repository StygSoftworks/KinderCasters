import { Volume2 } from 'lucide-react';
import { useState } from 'react';

interface FlashcardItemProps {
  id: string;
  displayText: string;
  word: string;
  rhyme: string;
  definition: string;
  color: string;
}

export default function FlashcardItem({ id, displayText, word, rhyme, definition, color }: FlashcardItemProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(prev => !prev);
  };

  const speak = (text: string, e: React.MouseEvent) => {
    e.stopPropagation();

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;
      utterance.pitch = 1.1;
      utterance.volume = 1.0;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="perspective">
      <div
        className={`flashcard ${isFlipped ? 'flipped' : ''}`}
        onClick={toggleFlip}
      >
        <div className="flashcard-inner">
          <div className={`flashcard-front bg-gradient-to-br ${color} rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center cursor-pointer border-4 border-white`}>
            <div className="text-8xl font-bold text-white drop-shadow-lg mb-2">
              {displayText}
            </div>
            <div className="text-2xl font-semibold text-white drop-shadow text-center">
              {word}
            </div>
            <div className="mt-4 text-sm text-white opacity-75 font-medium">
              Tap to flip
            </div>
          </div>

          <div className="flashcard-back bg-white rounded-2xl shadow-xl p-6 cursor-pointer border-4 border-gray-200">
            <div className="h-full flex flex-col">
              <div className="flex items-start justify-between mb-3">
                <div className={`text-4xl font-bold bg-gradient-to-br ${color} bg-clip-text text-transparent`}>
                  {displayText}
                </div>
                <button
                  onClick={(e) => speak(word, e)}
                  className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                  aria-label={`Hear ${word}`}
                >
                  <Volume2 className="w-5 h-5 text-blue-600" />
                </button>
              </div>

              <div className="text-xl font-bold text-gray-800 mb-2">
                {word}
              </div>

              <div className="text-sm text-gray-600 italic mb-3 leading-relaxed">
                "{rhyme}"
              </div>

              <div className="text-sm text-gray-700 leading-relaxed mt-auto">
                {definition}
              </div>

              <div className="mt-4 text-xs text-gray-400 text-center">
                Tap to flip back
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
