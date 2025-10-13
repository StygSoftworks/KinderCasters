import { Volume2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface AccessibleFlashcardProps {
  id: string;
  displayText: string;
  word: string;
  rhyme: string;
  definition: string;
  color: string;
  imageUrl?: string;
}

export default function AccessibleFlashcard({
  id,
  displayText,
  word,
  rhyme,
  definition,
  color,
  imageUrl
}: AccessibleFlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleFlip = () => {
    setIsFlipped(prev => !prev);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFlip();
    }
  };

  const speak = (text: string, e: React.MouseEvent | React.KeyboardEvent) => {
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

  const handleSpeakKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      speak(word, e);
    }
  };

  const transitionClass = prefersReducedMotion ? '' : 'transition-transform duration-600';

  return (
    <div className="perspective" role="region" aria-label={`Flashcard for ${word}`}>
      <div
        ref={cardRef}
        className={`flashcard ${isFlipped ? 'flipped' : ''} ${transitionClass}`}
        onClick={toggleFlip}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-pressed={isFlipped}
        aria-label={`Flashcard showing ${displayText}. Press Enter or Space to flip. ${isFlipped ? 'Back side visible' : 'Front side visible'}`}
      >
        <div className="flashcard-inner">
          <div
            className={`flashcard-front bg-gradient-to-br ${color} rounded-2xl shadow-xl overflow-hidden cursor-pointer border-4 border-white relative`}
            aria-hidden={isFlipped}
          >
            {imageUrl ? (
              <div className="relative w-full h-full flex flex-col">
                <div className="flex-1 relative overflow-hidden">
                  <img
                    src={imageUrl}
                    alt={`Illustration of ${word}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="bg-gradient-to-t from-black/80 via-black/50 to-transparent absolute inset-0 flex flex-col items-center justify-end p-4 sm:p-6">
                  <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-lg mb-2 break-words text-center" aria-hidden="true">
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
                <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-lg mb-2 break-words text-center" aria-hidden="true">
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

          <div
            className="flashcard-back bg-white rounded-2xl shadow-xl p-4 sm:p-6 cursor-pointer border-4 border-gray-200 overflow-hidden"
            aria-hidden={!isFlipped}
          >
            <div className="h-full flex flex-col">
              <div className="flex items-start justify-between mb-2 sm:mb-3 gap-2">
                <div className={`text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-br ${color} bg-clip-text text-transparent break-words flex-1`}>
                  {displayText}
                </div>
                <button
                  onClick={(e) => speak(word, e)}
                  onKeyDown={handleSpeakKeyDown}
                  className="p-1.5 sm:p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-400 flex-shrink-0"
                  aria-label={`Hear pronunciation of ${word}`}
                  tabIndex={0}
                >
                  <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" aria-hidden="true" />
                </button>
              </div>

              <div className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2 break-words">
                {word}
              </div>

              <div className="text-xs sm:text-sm text-gray-600 italic mb-2 sm:mb-3 leading-relaxed break-words">
                <span className="sr-only">Rhyme: </span>"{rhyme}"
              </div>

              <div className="text-xs sm:text-sm text-gray-700 leading-relaxed mt-auto break-words">
                <span className="sr-only">Definition: </span>
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
