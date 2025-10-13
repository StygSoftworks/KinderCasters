import { Volume2 } from 'lucide-react';
import { useState } from 'react';

interface FlashcardItemProps {
  id: string;
  displayText: string;
  word: string;
  rhyme: string;
  definition: string;
  color: string;
  imageUrl?: string;
}

export default function FlashcardItem({ id, displayText, word, rhyme, definition, color, imageUrl }: FlashcardItemProps) {
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
          <div className={`flashcard-front bg-gradient-to-br ${color} rounded-2xl shadow-xl overflow-hidden cursor-pointer border-4 border-white relative`}>
            {imageUrl ? (
              <div className="relative w-full h-full flex flex-col">
                <div className="flex-1 relative overflow-hidden">
                  <img
                    src={imageUrl}
                    alt={word}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="bg-gradient-to-t from-black/80 via-black/50 to-transparent absolute inset-0 flex flex-col items-center justify-end p-4 sm:p-6">
                  <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-lg mb-2 break-words text-center">
                    {displayText}
                  </div>
                  <div className="text-lg sm:text-xl md:text-2xl font-semibold text-white drop-shadow text-center break-words px-2">
                    {word}
                  </div>
                  <div className="mt-2 sm:mt-4 text-xs sm:text-sm text-white opacity-90 font-medium">
                    Tap to flip
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full h-full p-4 sm:p-6 flex flex-col items-center justify-center">
                <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-lg mb-2 break-words text-center">
                  {displayText}
                </div>
                <div className="text-lg sm:text-xl md:text-2xl font-semibold text-white drop-shadow text-center break-words px-2">
                  {word}
                </div>
                <div className="mt-2 sm:mt-4 text-xs sm:text-sm text-white opacity-75 font-medium">
                  Tap to flip
                </div>
              </div>
            )}
          </div>

          <div className="flashcard-back bg-white rounded-2xl shadow-xl p-4 sm:p-6 cursor-pointer border-4 border-gray-200 overflow-hidden">
            <div className="h-full flex flex-col">
              <div className="flex items-start justify-between mb-2 sm:mb-3 gap-2">
                <div className={`text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-br ${color} bg-clip-text text-transparent break-words flex-1`}>
                  {displayText}
                </div>
                <button
                  onClick={(e) => speak(word, e)}
                  className="p-1.5 sm:p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 flex-shrink-0"
                  aria-label={`Hear ${word}`}
                >
                  <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                </button>
              </div>

              <div className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2 break-words">
                {word}
              </div>

              <div className="text-xs sm:text-sm text-gray-600 italic mb-2 sm:mb-3 leading-relaxed break-words">
                "{rhyme}"
              </div>

              <div className="text-xs sm:text-sm text-gray-700 leading-relaxed mt-auto break-words">
                {definition}
              </div>

              <div className="mt-2 sm:mt-4 text-xs text-gray-400 text-center">
                Tap to flip back
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
