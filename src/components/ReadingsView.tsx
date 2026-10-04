import React, { useEffect, useRef, useState } from 'react';
import { Bookmark, BookmarkCheck, BookOpen, X, Printer, SearchX } from 'lucide-react';
import { COURSE_MODULES, SupplementalReading, BookmarkItem } from '../data/courseData';

interface ReadingsViewProps {
  bookmarks: BookmarkItem[];
  toggleBookmark: (item: BookmarkItem) => void;
  darkMode: boolean;
  searchQuery: string;
  setSearchQuery?: (q: string) => void;
}

const scrollBehavior = (): ScrollBehavior =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ? 'auto'
    : 'smooth';

// Static collection across all modules (module scope so the deep-link effect stays stable)
const ALL_READINGS: SupplementalReading[] = COURSE_MODULES.flatMap(m => m.readings);

export const ReadingsView: React.FC<ReadingsViewProps> = ({
  bookmarks,
  toggleBookmark,
  darkMode,
  searchQuery,
  setSearchQuery
}) => {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [activeReading, setActiveReading] = useState<SupplementalReading | null>(null);
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const highlightTimersRef = useRef<number[]>([]);

  // Collect all readings across modules
  const allReadings = ALL_READINGS;

  const types = ['All', 'Standard', 'Article', 'Whitepaper', 'Case Study'];

  const filteredReadings = allReadings.filter(r => {
    if (selectedType !== 'All' && r.type !== selectedType) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return r.title.toLowerCase().includes(q) || r.author.toLowerCase().includes(q) || r.abstract.toLowerCase().includes(q);
    }
    return true;
  });

  const openReading = (reading: SupplementalReading, trigger: HTMLElement | null) => {
    triggerRef.current = trigger;
    setActiveReading(reading);
  };

  const closeReading = () => {
    setActiveReading(null);
  };

  // Modal: focus close button on open, restore focus to the triggering card on close
  useEffect(() => {
    if (activeReading) {
      closeBtnRef.current?.focus();
    } else if (triggerRef.current) {
      const el = triggerRef.current;
      triggerRef.current = null;
      el.focus();
    }
  }, [activeReading]);

  // Modal: Escape closes
  useEffect(() => {
    if (!activeReading) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeReading();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeReading]);

  // Cross-view deep link: open/highlight a specific reading from other views
  useEffect(() => {
    const handleOpenReading = (event: Event) => {
      const detail = (event as CustomEvent<{ readingId: string }>).detail;
      if (!detail?.readingId) return;

      const exists = allReadings.some(r => r.id === detail.readingId);
      if (!exists) return;

      setSelectedType('All');
      setSearchQuery?.('');

      highlightTimersRef.current.forEach(t => window.clearTimeout(t));
      highlightTimersRef.current = [];

      const focusCard = (attempt: number) => {
        const card = cardRefs.current[detail.readingId];
        if (!card) {
          if (attempt < 5) {
            highlightTimersRef.current.push(window.setTimeout(() => focusCard(attempt + 1), 150));
          }
          return;
        }
        card.scrollIntoView({ behavior: scrollBehavior(), block: 'center' });
        setHighlightedId(detail.readingId);
        highlightTimersRef.current.push(window.setTimeout(() => setHighlightedId(null), 2000));
      };

      highlightTimersRef.current.push(window.setTimeout(() => focusCard(0), 100));
    };

    window.addEventListener('indexmaster:open-reading', handleOpenReading);
    return () => {
      window.removeEventListener('indexmaster:open-reading', handleOpenReading);
      highlightTimersRef.current.forEach(t => window.clearTimeout(t));
    };
  }, [setSearchQuery]);

  const handleShowAll = () => {
    setSelectedType('All');
    setSearchQuery?.('');
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="p-6 sm:p-8 rounded-3xl border border-line bg-panel shadow-sm">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent-50 text-accent-700 border border-accent-100 dark:bg-accent-950/50 dark:text-accent-300 dark:border-accent-900">
            Supplemental Material Repository
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
            Recommended Readings &amp; <span className="text-accent-600">Standards</span>
          </h1>
          <p className="text-sm font-medium text-ink-muted">
            Explore foundational standards (ANSI/NISO Z39.19, Z39.14), peer-reviewed journal articles, and whitepapers on information retrieval and taxonomy design.
          </p>
        </div>

        {/* Type Filter Tabs */}
        <div className="flex flex-wrap gap-2 pt-6" role="group" aria-label="Filter readings by type">
          {types.map(type => (
            <button
              key={type}
              type="button"
              aria-pressed={selectedType === type}
              onClick={() => setSelectedType(type)}
              className={`rounded-full px-4 py-2 text-xs font-bold min-h-11 transition-all ${
                selectedType === type
                  ? 'bg-accent-600 text-white shadow-sm hover:bg-accent-700'
                  : 'rounded-full border border-line bg-panel text-ink hover:border-accent-300'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Readings Grid */}
      {filteredReadings.length === 0 ? (
        <div className="p-10 sm:p-12 rounded-3xl border border-dashed border-line bg-panel shadow-sm text-center space-y-4">
          <SearchX className="w-12 h-12 mx-auto text-ink-muted" aria-hidden="true" />
          <div className="space-y-1.5 max-w-md mx-auto">
            <h2 className="text-lg font-extrabold text-ink">No readings found</h2>
            <p className="text-sm font-medium text-ink-muted">
              {searchQuery && selectedType !== 'All' ? (
                <>No readings match &ldquo;{searchQuery}&rdquo; in the {selectedType} filter.</>
              ) : searchQuery ? (
                <>No readings match &ldquo;{searchQuery}&rdquo;.</>
              ) : (
                <>No {selectedType} readings are available yet. Try another category.</>
              )}
            </p>
          </div>
          <button
            type="button"
            onClick={handleShowAll}
            className="rounded-full bg-accent-600 text-white font-bold px-5 py-2.5 min-h-11 hover:bg-accent-700 transition-all shadow-sm"
          >
            Show all readings
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReadings.map(reading => {
            const isBookmarked = bookmarks.some(b => b.id === reading.id);
            const mod = COURSE_MODULES.find(m => m.id === reading.moduleId);

            return (
              <div
                key={reading.id}
                ref={el => { cardRefs.current[reading.id] = el; }}
                className={`p-6 rounded-2xl border bg-panel flex flex-col justify-between space-y-6 transition-all hover:shadow-xl hover:border-accent-300 ${
                  highlightedId === reading.id
                    ? 'border-accent-500 ring-2 ring-accent-500'
                    : 'border-line shadow-sm'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-accent-50 text-accent-700 border border-accent-100 dark:bg-accent-950/50 dark:text-accent-300 dark:border-accent-900">
                        {reading.type}
                      </span>
                      {mod && (
                        <span className="text-xs font-bold text-ink-muted">
                          Module {mod.number}
                        </span>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleBookmark({
                        id: reading.id,
                        type: 'reading',
                        title: reading.title,
                        subtitle: reading.author,
                        path: 'readings'
                      })}
                      aria-pressed={isBookmarked}
                      aria-label={isBookmarked ? `Remove bookmark for ${reading.title}` : `Bookmark ${reading.title}`}
                      className={`p-2 min-h-11 min-w-11 rounded-xl transition-colors ${
                        isBookmarked
                          ? 'bg-accent-50 text-accent-600 border border-accent-100 dark:bg-accent-950/50 dark:text-accent-300 dark:border-accent-900'
                          : 'bg-panel-2 text-ink border border-line hover:border-accent-300'
                      }`}
                    >
                      {isBookmarked ? <BookmarkCheck className="w-4 h-4" aria-hidden="true" /> : <Bookmark className="w-4 h-4" aria-hidden="true" />}
                    </button>
                  </div>

                  <div>
                    <h2 className="text-lg font-bold leading-snug text-ink">{reading.title}</h2>
                    <p className="text-xs font-bold text-accent-600 mt-1">
                      {reading.author} &bull; <span className="text-ink-muted">{reading.source}</span>
                    </p>
                  </div>

                  <p className="text-sm font-medium leading-relaxed text-ink-muted max-w-prose">
                    {reading.abstract}
                  </p>
                </div>

                <div className="pt-4 border-t border-line flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-semibold text-ink-muted">Peer-Reviewed / Standard</span>
                  <button
                    type="button"
                    onClick={(e) => openReading(reading, e.currentTarget)}
                    className="rounded-full bg-accent-600 text-white font-bold px-5 py-2.5 min-h-11 hover:bg-accent-700 transition-all shadow-sm flex items-center space-x-1.5 text-xs"
                  >
                    <BookOpen className="w-4 h-4" aria-hidden="true" />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Full Text Modal */}
      {activeReading && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeReading();
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="reading-modal-title"
            className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-line bg-panel text-ink p-6 sm:p-10 space-y-6 relative shadow-2xl"
          >
            <button
              type="button"
              ref={closeBtnRef}
              onClick={closeReading}
              aria-label="Close reading"
              className="absolute top-6 right-6 p-2 min-h-11 min-w-11 rounded-xl bg-panel-2 border border-line hover:border-accent-300 transition-colors"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>

            <div className="space-y-3 border-b border-line pb-6 pr-12">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent-50 text-accent-700 border border-accent-100 dark:bg-accent-950/50 dark:text-accent-300 dark:border-accent-900">
                {activeReading.type} &bull; Study Overview
              </span>
              <h2 id="reading-modal-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
                {activeReading.title}
              </h2>
              <p className="text-sm font-bold text-accent-600">
                Author: {activeReading.author} &bull; Source: <span className="text-ink-muted">{activeReading.source}</span>
              </p>
            </div>

            <div className="max-w-prose space-y-6 text-base font-medium leading-relaxed text-ink">
              <div className="p-4 rounded-2xl border-l-4 border-accent-600 bg-accent-50 dark:bg-accent-950/40">
                <strong>Official Abstract:</strong> {activeReading.abstract}
              </div>

              <h3 className="text-lg font-bold text-accent-600 pt-2">About This Reading</h3>

              <p>
                This study overview is provided for LIS 814 revision purposes. The complete
                document is available directly from {activeReading.source}.
              </p>

              <p>
                When you read it, pay particular attention to how it treats controlled
                vocabulary &mdash; equivalence (USE/UF), hierarchical (BT/NT) and associative
                (RT) relationships &mdash; and to any discussion of exhaustivity and
                specificity, since these themes recur across the MCQ and theory assessments.
              </p>
            </div>

            <div className="pt-6 border-t border-line flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => window.print()}
                className="rounded-full bg-accent-600 text-white font-bold px-5 py-2.5 min-h-11 hover:bg-accent-700 transition-all shadow-sm flex items-center space-x-2 text-xs"
              >
                <Printer className="w-4 h-4" aria-hidden="true" />
                <span>Print / Save PDF</span>
              </button>

              <button
                type="button"
                onClick={closeReading}
                className="rounded-full border border-line bg-panel text-ink font-bold px-5 py-2.5 min-h-11 hover:border-accent-300 transition-all text-xs"
              >
                Close Reading
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
