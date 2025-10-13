import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Grid, List } from 'lucide-react';

interface Card {
  id: string;
  [key: string]: unknown;
}

interface AccessibleCardGridProps<T extends Card> {
  cards: T[];
  renderCard: (card: T) => React.ReactNode;
  cardsPerPage?: number;
  title: string;
}

export default function AccessibleCardGrid<T extends Card>({
  cards,
  renderCard,
  cardsPerPage = 10,
  title
}: AccessibleCardGridProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<'paginated' | 'all'>('paginated');
  const [announceText, setAnnounceText] = useState('');

  const totalPages = Math.ceil(cards.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const visibleCards = viewMode === 'paginated' ? cards.slice(startIndex, endIndex) : cards;

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      setAnnounceText(`Showing page ${page} of ${totalPages}`);

      const mainContent = document.getElementById('card-grid');
      if (mainContent) {
        mainContent.focus();
        mainContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const toggleViewMode = () => {
    const newMode = viewMode === 'paginated' ? 'all' : 'paginated';
    setViewMode(newMode);
    setAnnounceText(newMode === 'all' ? `Showing all ${cards.length} cards` : 'Showing paginated view');
    if (newMode === 'paginated') {
      setCurrentPage(1);
    }
  };

  useEffect(() => {
    if (announceText) {
      const timer = setTimeout(() => setAnnounceText(''), 1000);
      return () => clearTimeout(timer);
    }
  }, [announceText]);

  return (
    <div className="space-y-6">
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {announceText}
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-4 rounded-lg shadow">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            {title}
          </h2>
          <p className="text-sm text-gray-600">
            {viewMode === 'paginated'
              ? `Showing ${startIndex + 1}-${Math.min(endIndex, cards.length)} of ${cards.length} cards`
              : `Showing all ${cards.length} cards`
            }
          </p>
        </div>

        <button
          onClick={toggleViewMode}
          className="flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition-colors focus:outline-none focus:ring-4 focus:ring-orange-400"
          aria-label={viewMode === 'paginated' ? 'Show all cards' : 'Show paginated view'}
        >
          {viewMode === 'paginated' ? (
            <>
              <List className="w-4 h-4" aria-hidden="true" />
              <span>Show All</span>
            </>
          ) : (
            <>
              <Grid className="w-4 h-4" aria-hidden="true" />
              <span>Show Pages</span>
            </>
          )}
        </button>
      </div>

      <div
        id="card-grid"
        className="flex flex-col gap-6"
        tabIndex={-1}
        aria-label={`${title} grid`}
      >
        {visibleCards.map((card) => (
          <div key={card.id}>
            {renderCard(card)}
          </div>
        ))}
      </div>

      {viewMode === 'paginated' && totalPages > 1 && (
        <nav
          aria-label="Card pagination"
          className="flex items-center justify-center gap-2 bg-white p-4 rounded-lg shadow"
        >
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-4 focus:ring-orange-400"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-5 h-5" aria-hidden="true" />
          </button>

          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              const isCurrentPage = page === currentPage;
              const showPage =
                page === 1 ||
                page === totalPages ||
                Math.abs(page - currentPage) <= 1;

              if (!showPage) {
                if (page === currentPage - 2 || page === currentPage + 2) {
                  return <span key={page} className="px-2 text-gray-400" aria-hidden="true">...</span>;
                }
                return null;
              }

              return (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`min-w-[2.5rem] px-3 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-4 focus:ring-orange-400 ${
                    isCurrentPage
                      ? 'bg-orange-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                  aria-label={`Page ${page}`}
                  aria-current={isCurrentPage ? 'page' : undefined}
                >
                  {page}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-4 focus:ring-orange-400"
            aria-label="Next page"
          >
            <ChevronRight className="w-5 h-5" aria-hidden="true" />
          </button>
        </nav>
      )}
    </div>
  );
}
