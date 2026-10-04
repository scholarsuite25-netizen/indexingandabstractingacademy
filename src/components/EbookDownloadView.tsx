import React, { useEffect, useState } from 'react';
import { BookOpen, Search, ChevronRight, ChevronLeft, Bookmark, BookmarkCheck, Sparkles, Type, Download, Printer, SearchX } from 'lucide-react';
import { BookmarkItem } from '../data/courseData';
import { BOOK_CHAPTERS } from '../data/bookChapters';
import { RichText } from './RichText';

interface EbookDownloadViewProps {
  darkMode: boolean;
  bookmarks?: BookmarkItem[];
  toggleBookmark?: (item: BookmarkItem) => void;
}

export const EbookDownloadView: React.FC<EbookDownloadViewProps> = ({ darkMode, bookmarks, toggleBookmark }) => {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>('base');
  const [bookmarkedChapters, setBookmarkedChapters] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const handleDownloadTextbook = () => {
    const formattedChapters = chapters.map(ch => {
      const objectives = ch.objectives.map(o => `- ${o}`).join('\n');
      const body = ch.content.replace(
        /^\[\[diagram:([a-z0-9-]+)\]\]$/gm,
        '> *Concept diagram available in the app — see figure for this chapter.*'
      );
      const keyTerms = ch.keyTerms.map(k => `- **${k.term}** — ${k.definition}`).join('\n');
      const questions = ch.reviewQuestions.map((q, i) => `${i + 1}. ${q}`).join('\n');
      const reading = ch.furtherReading.map(r => `- ${r}`).join('\n');
      return `# Chapter ${ch.number}: ${ch.title}
Module: ${ch.module}

## Learning Objectives
${objectives}

${body}

${keyTerms ? `## Key Terms\n${keyTerms}\n\n` : ''}${questions ? `## Review Questions\n${questions}\n\n` : ''}${reading ? `## Further Reading\n${reading}` : ''}`;
    }).join('\n\n---\n\n');

    const header = `# IndexMaster: LIS 814 Indexing & Abstracting
Complete Master's Curriculum Textbook (All 28 Chapters)
Accredited Standards: ANSI/NISO Z39.19, ANSI/NISO Z39.14, ISO 25964-1
Compiled: ${new Date().toLocaleDateString()}

================================================================================

`;
    const blob = new Blob([header + formattedChapters], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'LIS_814_Indexing_and_Abstracting_Complete_Textbook.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setDownloadNotice('Complete textbook downloaded as Markdown!');
    setTimeout(() => setDownloadNotice(null), 3500);
  };

  const chapters = BOOK_CHAPTERS;

  const currentChapter = chapters[activeChapterIndex];

  const chapterBookmarkId = (num: number) => `ebook-chapter-${num}`;
  const usingGlobalBookmarks = bookmarks !== undefined;

  const isChapterBookmarked = (num: number) =>
    usingGlobalBookmarks
      ? bookmarks.some(b => b.id === chapterBookmarkId(num))
      : bookmarkedChapters.includes(num);

  const toggleChapterBookmark = (chapter: (typeof chapters)[number]) => {
    if (usingGlobalBookmarks && toggleBookmark) {
      toggleBookmark({
        id: chapterBookmarkId(chapter.number),
        type: 'module',
        title: `Chapter ${chapter.number}: ${chapter.title}`,
        subtitle: chapter.module,
        path: 'ebook'
      });
      return;
    }
    setBookmarkedChapters(prev =>
      prev.includes(chapter.number) ? prev.filter(n => n !== chapter.number) : [...prev, chapter.number]
    );
  };

  // Deep link from other views (e.g. bookmarks): jump to a specific chapter
  useEffect(() => {
    const handleOpenChapter = (event: Event) => {
      const detail = (event as CustomEvent<{ chapterNumber?: number; chapterId?: string }>).detail;
      if (!detail) return;
      const idx =
        typeof detail.chapterNumber === 'number'
          ? chapters.findIndex(c => c.number === detail.chapterNumber)
          : detail.chapterId
            ? chapters.findIndex(c => chapterBookmarkId(c.number) === detail.chapterId)
            : -1;
      if (idx >= 0) setActiveChapterIndex(idx);
    };
    window.addEventListener('indexmaster:open-chapter', handleOpenChapter);
    return () => window.removeEventListener('indexmaster:open-chapter', handleOpenChapter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fontClass = fontSize === 'sm' ? 'text-sm' : fontSize === 'lg' ? 'text-lg' : 'text-base';

  const filteredChapters = chapters.filter(ch => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const haystack = [
      ch.title,
      ch.module,
      ch.content,
      ch.objectives.join(' '),
      ch.keyTerms.map(k => `${k.term} ${k.definition}`).join(' '),
      ch.reviewQuestions.join(' '),
    ]
      .join(' ')
      .toLowerCase();
    return haystack.includes(q);
  });

  return (
    <div className="space-y-8 pb-16 max-w-6xl mx-auto">
      {/* Header */}
      <div className="p-6 sm:p-8 rounded-3xl border border-line bg-panel shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2 min-w-0">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent-50 text-accent-700 border border-accent-100 dark:bg-accent-950/50 dark:text-accent-300 dark:border-accent-900">
              Online Interactive Digital E-Book &bull; All 28 Master's Chapters Enhanced
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
              Indexing &amp; Abstracting <span className="text-accent-600">Master Textbook</span>
            </h1>
            <p className="text-sm font-medium text-ink-muted max-w-prose">
              Read online exclusively. Enhanced with ANSI/NISO standards, PRECIS role operators, Cranfield evaluation methodologies, and AI digital indexing frameworks across all 28 chapters.
            </p>
          </div>

          {/* Reader Controls & Export */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="flex items-center space-x-1 p-1 rounded-xl border border-line bg-panel-2">
              <Type className="w-4 h-4 ml-2 text-ink-muted" aria-hidden="true" />
              <button
                type="button"
                onClick={() => setFontSize('sm')}
                aria-pressed={fontSize === 'sm'}
                aria-label="Small text size"
                className={`min-h-11 px-3 rounded-lg text-xs font-bold transition-colors ${fontSize === 'sm' ? 'bg-accent-600 text-white' : 'text-ink hover:bg-panel'}`}
              >
                A-
              </button>
              <button
                type="button"
                onClick={() => setFontSize('base')}
                aria-pressed={fontSize === 'base'}
                aria-label="Normal text size"
                className={`min-h-11 px-3 rounded-lg text-xs font-bold transition-colors ${fontSize === 'base' ? 'bg-accent-600 text-white' : 'text-ink hover:bg-panel'}`}
              >
                A
              </button>
              <button
                type="button"
                onClick={() => setFontSize('lg')}
                aria-pressed={fontSize === 'lg'}
                aria-label="Large text size"
                className={`min-h-11 px-3 rounded-lg text-xs font-bold transition-colors ${fontSize === 'lg' ? 'bg-accent-600 text-white' : 'text-ink hover:bg-panel'}`}
              >
                A+
              </button>
            </div>

            <button
              type="button"
              onClick={handleDownloadTextbook}
              className="flex items-center space-x-1.5 rounded-full bg-accent-600 text-white font-bold px-5 py-2.5 min-h-11 hover:bg-accent-700 transition-all shadow-sm text-xs"
              title="Download entire 28 chapters as Markdown study guide"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              <span>Download (.md)</span>
            </button>

            <button
              type="button"
              onClick={() => window.print()}
              aria-label="Print textbook or save as PDF"
              title="Print / Save as PDF"
              className="p-2.5 min-h-11 min-w-11 rounded-xl border border-line bg-panel text-ink hover:border-accent-300 transition-all"
            >
              <Printer className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div role="status" aria-live="polite">
          {downloadNotice && (
            <div className="mt-3 p-2.5 rounded-xl border border-accent-100 bg-accent-50 text-accent-700 dark:bg-accent-950/50 dark:text-accent-300 dark:border-accent-900 text-xs font-bold flex items-center space-x-2">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{downloadNotice}</span>
            </div>
          )}
        </div>
      </div>

      {/* Reader Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Table of Contents Sidebar */}
        <div className="lg:col-span-1 p-6 rounded-3xl border border-line bg-panel space-y-4 h-fit shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-accent-600 flex items-center space-x-2">
              <BookOpen className="w-4 h-4" aria-hidden="true" />
              <span>Table of Contents (28 Ch)</span>
            </h2>
          </div>

          {/* Search within book */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-ink-muted" aria-hidden="true" />
            <input
              type="text"
              aria-label="Search chapters"
              placeholder="Search chapters..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-line bg-panel text-ink placeholder-ink-muted focus:outline-none focus:ring-2 focus:ring-accent-500"
            />
          </div>

          {filteredChapters.length === 0 ? (
            <div className="rounded-xl border border-dashed border-line bg-panel-2 p-4 text-center space-y-3">
              <SearchX className="w-8 h-8 mx-auto text-ink-muted" aria-hidden="true" />
              <p className="text-xs font-semibold text-ink-muted">
                No chapters match &ldquo;{searchQuery}&rdquo;
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="rounded-full border border-line bg-panel text-ink font-bold px-4 py-2 text-xs min-h-11 hover:border-accent-300 transition-all"
              >
                Clear search
              </button>
            </div>
          ) : (
          <div className="space-y-1.5 max-h-[500px] overflow-y-auto pr-1">
            {filteredChapters.map((ch) => {
              const originalIndex = chapters.findIndex(c => c.number === ch.number);
              const isActive = activeChapterIndex === originalIndex;
              const isBookmarked = isChapterBookmarked(ch.number);
              return (
                <button
                  key={ch.number}
                  type="button"
                  onClick={() => setActiveChapterIndex(originalIndex)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`w-full text-left p-2.5 min-h-11 rounded-xl text-xs font-bold transition-all flex items-center justify-between gap-2 ${
                    isActive
                      ? 'bg-accent-600 text-white shadow-sm font-extrabold'
                      : 'bg-panel-2 hover:bg-panel text-ink border border-transparent hover:border-line'
                  }`}
                >
                  <span className="flex items-center space-x-2 min-w-0">
                    <span className={`w-5 h-5 rounded-md flex items-center justify-center text-xs shrink-0 ${
                      isActive ? 'bg-white text-accent-700' : 'bg-panel text-ink-muted border border-line'
                    }`}>
                      {ch.number}
                    </span>
                    <span className="truncate">{ch.title}</span>
                  </span>
                  {isBookmarked && <BookmarkCheck className="w-3.5 h-3.5 shrink-0 ml-1 text-accent-500" aria-hidden="true" />}
                </button>
              );
            })}
          </div>
          )}
        </div>

        {/* Main Reading Canvas */}
        <div className="lg:col-span-3 p-6 sm:p-12 rounded-3xl border border-line bg-panel space-y-8 shadow-sm min-w-0">
          {/* Chapter Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-line pb-6">
            <div className="space-y-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent-50 text-accent-700 border border-accent-100 dark:bg-accent-950/50 dark:text-accent-300 dark:border-accent-900">
                  {currentChapter.module}
                </span>
                <span className="text-xs font-bold text-ink-muted">
                  Chapter {currentChapter.number} of {chapters.length}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
                {currentChapter.title}
              </h2>
            </div>

            <button
              type="button"
              onClick={() => toggleChapterBookmark(currentChapter)}
              aria-pressed={isChapterBookmarked(currentChapter.number)}
              aria-label={isChapterBookmarked(currentChapter.number) ? 'Remove chapter bookmark' : 'Bookmark chapter'}
              className={`p-2.5 min-h-11 min-w-11 rounded-xl border transition-all shrink-0 ${
                isChapterBookmarked(currentChapter.number)
                  ? 'bg-accent-50 border-accent-100 text-accent-600 dark:bg-accent-950/50 dark:border-accent-900 dark:text-accent-300'
                  : 'bg-panel-2 border-line text-ink hover:border-accent-300'
              }`}
              title="Bookmark Chapter"
            >
              {isChapterBookmarked(currentChapter.number) ? <BookmarkCheck className="w-5 h-5" aria-hidden="true" /> : <Bookmark className="w-5 h-5" aria-hidden="true" />}
            </button>
          </div>

          {/* Learning Objectives */}
          {currentChapter.objectives.length > 0 && (
            <div className="rounded-2xl border border-accent-200 bg-accent-50/60 dark:border-accent-900 dark:bg-accent-950/40 p-5 sm:p-6 space-y-3">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-accent-700 dark:text-accent-300">
                Learning Objectives
              </h3>
              <ul className="list-disc pl-5 space-y-1.5 text-sm font-medium text-ink marker:text-accent-500">
                {currentChapter.objectives.map((obj, oIdx) => (
                  <li key={oIdx}>{obj}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Chapter Body Content */}
          <RichText
            text={currentChapter.content}
            className={`max-w-prose space-y-4 leading-relaxed font-medium text-ink ${fontClass}`}
          />

          {/* Key Terms */}
          {currentChapter.keyTerms.length > 0 && (
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-accent-600">Key Terms</h3>
              <dl className="grid sm:grid-cols-2 gap-2.5">
                {currentChapter.keyTerms.map((kt, ktIdx) => (
                  <div
                    key={ktIdx}
                    className="rounded-xl border border-line bg-panel-2 p-3.5 space-y-1"
                  >
                    <dt className="text-sm font-extrabold text-ink">{kt.term}</dt>
                    <dd className="text-xs font-medium leading-relaxed text-ink-muted">{kt.definition}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {/* Review Questions */}
          {currentChapter.reviewQuestions.length > 0 && (
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-accent-600">Review Questions</h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm font-medium text-ink marker:text-accent-500 marker:font-bold">
                {currentChapter.reviewQuestions.map((rq, rqIdx) => (
                  <li key={rqIdx}>{rq}</li>
                ))}
              </ol>
            </div>
          )}

          {/* Further Reading */}
          {currentChapter.furtherReading.length > 0 && (
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-accent-600">Further Reading</h3>
              <ul className="list-disc pl-5 space-y-1.5 text-sm font-medium text-ink-muted marker:text-accent-400">
                {currentChapter.furtherReading.map((fr, frIdx) => (
                  <li key={frIdx}>{fr}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Chapter Navigation Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-line">
            <button
              type="button"
              onClick={() => {
                if (activeChapterIndex > 0) setActiveChapterIndex(prev => prev - 1);
              }}
              disabled={activeChapterIndex === 0}
              className={`flex items-center space-x-2 rounded-full border font-bold px-5 py-2.5 min-h-11 transition-all text-xs ${
                activeChapterIndex === 0
                  ? 'opacity-50 cursor-not-allowed bg-panel-2 border-line text-ink-muted'
                  : 'border-line bg-panel text-ink hover:border-accent-300'
              }`}
            >
              <ChevronLeft className="w-4 h-4" aria-hidden="true" />
              <span>Previous Chapter</span>
            </button>

            <span className="text-xs font-bold text-ink-muted" role="status" aria-live="polite">
              Chapter {activeChapterIndex + 1} of {chapters.length}
            </span>

            <button
              type="button"
              onClick={() => {
                if (activeChapterIndex < chapters.length - 1) setActiveChapterIndex(prev => prev + 1);
              }}
              disabled={activeChapterIndex === chapters.length - 1}
              className={`flex items-center space-x-2 rounded-full font-bold px-5 py-2.5 min-h-11 transition-all text-xs ${
                activeChapterIndex === chapters.length - 1
                  ? 'bg-panel-2 text-ink-muted cursor-not-allowed'
                  : 'bg-accent-600 text-white shadow-sm hover:bg-accent-700'
              }`}
            >
              <span>Next Chapter</span>
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
