import React, { useEffect, useState } from 'react';
import { Bookmark, BookOpen, FileText, Trash2, ArrowRight, Gauge, TrendingUp, Layers } from 'lucide-react';
import { BookmarkItem, COURSE_MODULES } from '../data/courseData';

interface BookmarksProgressViewProps {
  bookmarks: BookmarkItem[];
  removeBookmark: (id: string) => void;
  setActiveTab: (tab: string) => void;
  setSelectedModuleId: (id: string | null) => void;
  darkMode: boolean;
}

interface McqProgress {
  answered?: number;
  total?: number;
  correct?: number;
  finished?: boolean;
  updatedAt?: string;
}

interface FlashcardsProgress {
  mastered?: number;
  total?: number;
  updatedAt?: string;
}

interface TheoryProgress {
  answered?: number;
  total?: number;
  updatedAt?: string;
}

const readProgress = <T,>(key: string): T | null => {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? (parsed as T) : null;
  } catch {
    return null;
  }
};

const percentOf = (value: number | undefined, total: number | undefined): number | null => {
  if (typeof value !== 'number' || typeof total !== 'number' || !Number.isFinite(total) || total <= 0) return null;
  return Math.max(0, Math.min(100, Math.round((value / total) * 100)));
};

const dispatchDeepLink = (name: string, detail: unknown) => {
  window.dispatchEvent(new CustomEvent(name, { detail }));
};

const openWithFallback = (name: string, detail: unknown) => {
  // Immediate dispatch (view may already be mounted) + delayed dispatch (covers tab switch)
  dispatchDeepLink(name, detail);
  window.setTimeout(() => dispatchDeepLink(name, detail), 150);
};

export const BookmarksProgressView: React.FC<BookmarksProgressViewProps> = ({
  bookmarks,
  removeBookmark,
  setActiveTab,
  setSelectedModuleId,
  darkMode
}) => {
  const [mcq, setMcq] = useState<McqProgress | null>(null);
  const [flashcards, setFlashcards] = useState<FlashcardsProgress | null>(null);
  const [theory, setTheory] = useState<TheoryProgress | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    setMcq(readProgress<McqProgress>('indexmaster_mcq'));
    setFlashcards(readProgress<FlashcardsProgress>('indexmaster_flashcards'));
    setTheory(readProgress<TheoryProgress>('indexmaster_theory'));
  }, []);

  useEffect(() => {
    if (!notice) return;
    const t = window.setTimeout(() => setNotice(null), 4000);
    return () => window.clearTimeout(t);
  }, [notice]);

  const mcqPct = percentOf(mcq?.answered, mcq?.total);
  const flashcardsPct = percentOf(flashcards?.mastered, flashcards?.total);
  const theoryPct = percentOf(theory?.answered, theory?.total);

  const trackedPercents = [mcqPct, flashcardsPct, theoryPct].filter((p): p is number => p !== null);
  const overallPct =
    trackedPercents.length > 0
      ? Math.round(trackedPercents.reduce((sum, p) => sum + p, 0) / trackedPercents.length)
      : null;

  const bars = [
    {
      key: 'mcq',
      label: 'Multiple-Choice Quizzes',
      percent: mcqPct,
      detail:
        mcqPct !== null && typeof mcq?.answered === 'number'
          ? `${mcq.answered} of ${mcq.total} answered${typeof mcq.correct === 'number' ? ` \u00b7 ${mcq.correct} correct` : ''}`
          : null,
      empty: 'No quiz attempts yet'
    },
    {
      key: 'flashcards',
      label: 'Flashcards Mastered',
      percent: flashcardsPct,
      detail:
        flashcardsPct !== null && typeof flashcards?.mastered === 'number'
          ? `${flashcards.mastered} of ${flashcards.total} cards mastered`
          : null,
      empty: 'No flashcard sessions yet'
    },
    {
      key: 'theory',
      label: 'Theory Questions Answered',
      percent: theoryPct,
      detail:
        theoryPct !== null && typeof theory?.answered === 'number'
          ? `${theory.answered} of ${theory.total} answered`
          : null,
      empty: 'No theory answers yet'
    }
  ];

  const handleOpenBookmark = (item: BookmarkItem) => {
    if (item.type === 'lecture') {
      const parentMod = COURSE_MODULES.find(m => m.lectures.some(l => l.id === item.id));
      if (!parentMod) {
        setActiveTab('lectures');
        setNotice('That lecture is no longer available in the curriculum.');
        return;
      }
      setSelectedModuleId(parentMod.id);
      setActiveTab('lectures');
      openWithFallback('indexmaster:open-lecture', { moduleId: parentMod.id, lectureId: item.id });
      return;
    }

    if (item.type === 'reading') {
      setActiveTab('readings');
      openWithFallback('indexmaster:open-reading', { readingId: item.id });
      return;
    }

    // Textbook chapter bookmarks (written by EbookDownloadView)
    if (item.id.startsWith('ebook-chapter-')) {
      setActiveTab('ebook');
      const chapterNumber = Number.parseInt(item.id.replace('ebook-chapter-', ''), 10);
      if (!Number.isNaN(chapterNumber)) {
        openWithFallback('indexmaster:open-chapter', { chapterNumber });
      }
      return;
    }

    const parentMod = COURSE_MODULES.find(m => m.id === item.id);
    if (parentMod) {
      setSelectedModuleId(parentMod.id);
      setActiveTab('lectures');
      openWithFallback('indexmaster:open-lecture', {
        moduleId: parentMod.id,
        lectureId: parentMod.lectures[0]?.id || ''
      });
      return;
    }

    setActiveTab(item.path);
    setNotice('This bookmark could not be opened \u2014 it may no longer exist.');
  };

  const handleRemove = (item: BookmarkItem) => {
    if (!window.confirm(`Remove "${item.title}" from your bookmarks?`)) return;
    removeBookmark(item.id);
    setNotice('Bookmark removed.');
  };

  return (
    <div className="space-y-8 pb-16 max-w-4xl mx-auto">
      {/* Header */}
      <div className="p-6 sm:p-8 rounded-3xl border border-line bg-panel shadow-sm">
        <div className="space-y-2">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent-50 text-accent-700 border border-accent-100 dark:bg-accent-950/50 dark:text-accent-300 dark:border-accent-900">
            Personal Workspace
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
            Saved Bookmarks &amp; Study <span className="text-accent-600">Progress</span>
          </h1>
          <p className="text-sm font-medium text-ink-muted">
            Access your saved lectures and supplemental reading materials quickly across sessions, and track your practice progress.
          </p>
        </div>
        <p role="status" aria-live="polite" className={notice ? 'mt-3 text-xs font-bold text-accent-600' : undefined}>
          {notice}
        </p>
      </div>

      {/* Overall Study Progress */}
      <section className="rounded-2xl border border-white/10 bg-band text-white p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-1">
            <span className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-wider text-accent-400">
              <Gauge className="w-4 h-4" aria-hidden="true" />
              <span>Overall Study Progress</span>
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
              Practice performance at a glance
            </h2>
          </div>
          <div className="text-right">
            <span className="block text-3xl font-black text-white">
              {overallPct !== null ? `${overallPct}%` : '\u2014'}
            </span>
            <span className="text-xs font-semibold text-white/70">
              {overallPct !== null ? 'Overall completion' : 'No activity yet'}
            </span>
          </div>
        </div>

        <div className="space-y-5">
          {bars.map(bar => (
            <div key={bar.key} className="space-y-1.5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <h3 className="text-sm font-bold text-white">{bar.label}</h3>
                <span className="text-xs font-bold text-white/70">
                  {bar.percent !== null ? `${bar.percent}%` : bar.empty}
                </span>
              </div>
              {bar.percent !== null ? (
                <>
                  <div
                    role="progressbar"
                    aria-valuenow={bar.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${bar.label} progress`}
                    className="h-2.5 w-full rounded-full bg-white/15 overflow-hidden"
                  >
                    <div
                      className="h-full rounded-full bg-accent-500 transition-all duration-500"
                      style={{ width: `${bar.percent}%` }}
                    />
                  </div>
                  <p className="text-xs text-white/70">{bar.detail}</p>
                </>
              ) : (
                <div
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${bar.label} progress`}
                  className="h-2.5 w-full rounded-full bg-white/10 border border-dashed border-white/20"
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Bookmarks List */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 border-b border-line pb-3">
          <TrendingUp className="w-5 h-5 text-accent-600" aria-hidden="true" />
          <h2 className="text-xl font-extrabold tracking-tight text-ink">Bookmarks ({bookmarks.length})</h2>
        </div>

        {bookmarks.length === 0 ? (
          <div className="p-10 sm:p-12 rounded-3xl border border-dashed border-line bg-panel text-center space-y-4">
            <Bookmark className="w-12 h-12 mx-auto text-ink-muted" aria-hidden="true" />
            <p className="text-sm font-semibold text-ink-muted max-w-md mx-auto">
              No bookmarks saved yet. Click the bookmark icon on any lecture or reading to save it here!
            </p>
            <button
              type="button"
              onClick={() => setActiveTab('lectures')}
              className="rounded-full bg-accent-600 text-white font-bold px-5 py-2.5 min-h-11 hover:bg-accent-700 transition-all shadow-sm"
            >
              Browse Lectures
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {bookmarks.map((item) => (
              <div
                key={item.id}
                className="p-5 sm:p-6 rounded-2xl border border-line bg-panel shadow-sm flex flex-wrap items-center justify-between gap-4 transition-all hover:shadow-xl hover:border-accent-300"
              >
                <div className="flex items-center gap-4 min-w-0 flex-1">
                  <div className="w-12 h-12 rounded-xl bg-accent-50 text-accent-600 border border-accent-100 dark:bg-accent-950/50 dark:text-accent-300 dark:border-accent-900 flex items-center justify-center shrink-0">
                    {item.type === 'lecture' ? (
                      <BookOpen className="w-6 h-6" aria-hidden="true" />
                    ) : item.type === 'module' ? (
                      <Layers className="w-6 h-6" aria-hidden="true" />
                    ) : (
                      <FileText className="w-6 h-6" aria-hidden="true" />
                    )}
                  </div>
                  <div className="min-w-0 break-words">
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wider bg-navy-800 text-white inline-block">
                      {item.type}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold mt-1 text-ink break-words">{item.title}</h3>
                    <p className="text-xs font-semibold text-ink-muted break-words">{item.subtitle}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => handleOpenBookmark(item)}
                    className="flex items-center space-x-1 rounded-full bg-accent-600 text-white font-bold px-5 py-2.5 min-h-11 text-xs hover:bg-accent-700 transition-all shadow-sm"
                  >
                    <span>Open</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRemove(item)}
                    aria-label="Remove bookmark"
                    className="p-2.5 min-h-11 min-w-11 rounded-xl text-accent-600 border border-line bg-panel hover:bg-accent-50 hover:border-accent-200 transition-colors"
                    title="Remove bookmark"
                  >
                    <Trash2 className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
