import React, { useEffect, useRef, useState } from 'react';
import { 
  BookOpen, 
  Bookmark, 
  BookmarkCheck, 
  Volume2, 
  VolumeX, 
  Printer, 
  CheckCircle, 
  ChevronRight,
  SearchX
} from 'lucide-react';
import { COURSE_MODULES, BookmarkItem } from '../data/courseData';
import { DiagramFigure } from './diagrams/registry';

interface LecturesViewProps {
  selectedModuleId: string | null;
  setSelectedModuleId: (id: string | null) => void;
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

const isSpeechSupported = (): boolean =>
  typeof window !== 'undefined' && 'speechSynthesis' in window;

export const LecturesView: React.FC<LecturesViewProps> = ({
  selectedModuleId,
  setSelectedModuleId,
  bookmarks,
  toggleBookmark,
  darkMode,
  searchQuery,
  setSearchQuery
}) => {
  const currentModId = selectedModuleId || COURSE_MODULES[0].id;
  const activeModule = COURSE_MODULES.find(m => m.id === currentModId) || COURSE_MODULES[0];
  const [selectedLectureId, setSelectedLectureId] = useState<string>(activeModule.lectures[0]?.id || '');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [ttsNotice, setTtsNotice] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const lectureHeadingRef = useRef<HTMLHeadingElement>(null);
  const statusTimerRef = useRef<number | null>(null);
  const ttsTimerRef = useRef<number | null>(null);

  const activeLecture = activeModule.lectures.find(l => l.id === selectedLectureId) || activeModule.lectures[0];

  const flashStatus = (message: string) => {
    setStatusMessage(message);
    if (statusTimerRef.current) window.clearTimeout(statusTimerRef.current);
    statusTimerRef.current = window.setTimeout(() => setStatusMessage(null), 3000);
  };

  // Handle TTS reading
  const handleToggleSpeech = () => {
    const speechSupported = isSpeechSupported();
    if (!speechSupported) {
      setTtsNotice('Text-to-speech is not supported by your browser.');
      if (ttsTimerRef.current) window.clearTimeout(ttsTimerRef.current);
      ttsTimerRef.current = window.setTimeout(() => setTtsNotice(null), 5000);
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setTtsNotice('Stopped reading aloud.');
    } else {
      const textToRead = `${activeLecture.title}. ${activeLecture.summary}. ${activeLecture.content.join(' ')}`;
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.rate = 1.0;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => {
        setIsSpeaking(false);
        setTtsNotice('Unable to read this lecture aloud.');
      };
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
      setTtsNotice('Reading lecture aloud...');
    }
    if (ttsTimerRef.current) window.clearTimeout(ttsTimerRef.current);
    ttsTimerRef.current = window.setTimeout(() => setTtsNotice(null), 4000);
  };

  // Cleanup speech on unmount
  React.useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      if (statusTimerRef.current) window.clearTimeout(statusTimerRef.current);
      if (ttsTimerRef.current) window.clearTimeout(ttsTimerRef.current);
    };
  }, [activeLecture]);

  // Cross-view deep link: open a specific lecture from other views (e.g. bookmarks)
  useEffect(() => {
    const handleOpenLecture = (event: Event) => {
      const detail = (event as CustomEvent<{ moduleId: string; lectureId: string }>).detail;
      if (!detail) return;

      const targetModule =
        COURSE_MODULES.find(m => m.id === detail.moduleId) ||
        (detail.lectureId ? COURSE_MODULES.find(m => m.lectures.some(l => l.id === detail.lectureId)) : undefined);

      if (!targetModule) {
        flashStatus('That lecture is no longer available in the curriculum.');
        return;
      }

      setSelectedModuleId(targetModule.id);
      const lectureExists = detail.lectureId
        ? targetModule.lectures.some(l => l.id === detail.lectureId)
        : false;
      setSelectedLectureId(lectureExists ? detail.lectureId : targetModule.lectures[0]?.id || '');
      setSelectedTag(null);
      setSearchQuery?.('');

      window.setTimeout(() => {
        lectureHeadingRef.current?.scrollIntoView({ behavior: scrollBehavior(), block: 'start' });
      }, 90);
    };

    window.addEventListener('indexmaster:open-lecture', handleOpenLecture);
    return () => window.removeEventListener('indexmaster:open-lecture', handleOpenLecture);
  }, [setSelectedModuleId, setSearchQuery]);

  const isBookmarked = bookmarks.some(b => b.id === activeLecture.id);

  const handleToggleBookmark = (lecture: { id: string; title: string }) => {
    const wasSaved = bookmarks.some(b => b.id === lecture.id);
    toggleBookmark({
      id: lecture.id,
      type: 'lecture',
      title: lecture.title,
      subtitle: activeModule.title,
      path: 'lectures'
    });
    flashStatus(wasSaved ? 'Bookmark removed' : 'Bookmark added');
  };

  // Get all unique tags across lectures
  const allTags = Array.from(new Set(activeModule.lectures.flatMap(l => l.tags)));

  const filteredLectures = activeModule.lectures.filter(l => {
    if (selectedTag && !l.tags.includes(selectedTag)) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return l.title.toLowerCase().includes(q) || l.summary.toLowerCase().includes(q) || l.content.some(c => c.toLowerCase().includes(q));
    }
    return true;
  });

  const handleClearFilters = () => {
    setSearchQuery?.('');
    setSelectedTag(null);
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Module Selector Header */}
      <div className="p-6 rounded-2xl border border-line bg-panel shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="min-w-0">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent-50 text-accent-700 border border-accent-100 dark:bg-accent-950/50 dark:text-accent-300 dark:border-accent-900">
              Module {activeModule.number} Curriculum
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-2 tracking-tight text-ink">
              {activeModule.title}
            </h2>
            <p className="text-sm font-medium mt-1 max-w-2xl text-ink-muted">
              {activeModule.description}
            </p>
          </div>

          {/* Module switch tabs */}
          <div className="flex flex-wrap gap-2" role="group" aria-label="Switch module">
            {COURSE_MODULES.map(mod => (
              <button
                key={mod.id}
                type="button"
                aria-pressed={mod.id === activeModule.id}
                onClick={() => {
                  setSelectedModuleId(mod.id);
                  setSelectedLectureId(mod.lectures[0]?.id || '');
                  setSelectedTag(null);
                }}
                className={`rounded-full px-3.5 py-2 text-xs font-bold min-h-11 transition-all ${
                  mod.id === activeModule.id
                    ? 'bg-accent-600 text-white shadow-sm hover:bg-accent-700'
                    : 'rounded-full border border-line bg-panel text-ink hover:border-accent-300'
                }`}
              >
                Module {mod.number}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Sidebar: Lecture Navigation */}
        <div className="lg:col-span-1 space-y-4">
          <div className="p-4 rounded-2xl border border-line bg-panel shadow-sm sticky top-24 space-y-4">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-ink-muted px-2">
              Lectures in this Module
            </h2>

            {/* Tags filter */}
            {allTags.length > 0 && (
              <div className="px-2 space-y-2">
                <span className="text-xs font-bold text-ink-muted">Filter by Tag:</span>
                <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter lectures by tag">
                  <button
                    type="button"
                    aria-pressed={selectedTag === null}
                    onClick={() => setSelectedTag(null)}
                    className={`text-xs px-2.5 py-1 min-h-8 rounded-full font-bold transition-colors ${
                      selectedTag === null
                        ? 'bg-accent-600 text-white'
                        : 'rounded-full border border-line bg-panel text-ink hover:border-accent-300'
                    }`}
                  >
                    All
                  </button>
                  {allTags.map(tag => (
                    <button
                      type="button"
                      key={tag}
                      aria-pressed={selectedTag === tag}
                      onClick={() => setSelectedTag(tag)}
                      className={`text-xs px-2.5 py-1 min-h-8 rounded-full font-bold transition-colors ${
                        selectedTag === tag
                          ? 'bg-accent-600 text-white'
                          : 'rounded-full border border-line bg-panel text-ink hover:border-accent-300'
                      }`}
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {filteredLectures.length === 0 ? (
              <div className="rounded-xl border border-dashed border-line bg-panel-2 p-4 text-center space-y-3">
                <SearchX className="w-8 h-8 mx-auto text-ink-muted" aria-hidden="true" />
                <p className="text-xs font-semibold text-ink-muted">
                  {searchQuery ? (
                    <>No lectures match &ldquo;{searchQuery}&rdquo;</>
                  ) : (
                    <>No lectures match the &ldquo;{selectedTag}&rdquo; tag</>
                  )}
                </p>
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="rounded-full border border-line bg-panel text-ink font-bold px-4 py-2 text-xs min-h-11 hover:border-accent-300 transition-all"
                >
                  Clear search
                </button>
              </div>
            ) : (
              <div className="space-y-1.5 pt-2">
                {filteredLectures.map(lec => {
                  const isSelected = lec.id === activeLecture?.id;
                  const lecSaved = bookmarks.some(b => b.id === lec.id);
                  return (
                    <div
                      key={lec.id}
                      className={`flex items-start rounded-xl transition-all ${
                        isSelected
                          ? 'bg-accent-50 border border-accent-200 dark:bg-accent-950/50 dark:border-accent-900'
                          : 'border border-transparent hover:bg-panel-2'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setSelectedLectureId(lec.id)}
                        aria-current={isSelected ? 'true' : undefined}
                        className={`flex-1 min-w-0 text-left p-3 rounded-xl flex items-start space-x-2.5 transition-all ${
                          isSelected
                            ? 'text-accent-700 dark:text-accent-300 font-bold'
                            : 'text-ink'
                        }`}
                      >
                        <BookOpen className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
                        <span className="flex-1 min-w-0">
                          <span className="text-xs font-semibold line-clamp-2 block">{lec.title}</span>
                          <span className="text-xs text-ink-muted block">{lec.readTime}</span>
                        </span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleToggleBookmark(lec)}
                        aria-pressed={lecSaved}
                        aria-label={lecSaved ? `Remove bookmark for ${lec.title}` : `Bookmark ${lec.title}`}
                        className={`shrink-0 m-1.5 p-2 min-h-11 min-w-11 flex items-center justify-center rounded-lg transition-colors ${
                          lecSaved
                            ? 'text-accent-600 bg-accent-50 dark:bg-accent-950/50 dark:text-accent-300'
                            : 'text-ink-muted hover:text-accent-600 hover:bg-panel'
                        }`}
                      >
                        {lecSaved ? (
                          <BookmarkCheck className="w-4 h-4" aria-hidden="true" />
                        ) : (
                          <Bookmark className="w-4 h-4" aria-hidden="true" />
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Right Content Area: Lecture Reader */}
        <div className="lg:col-span-3 space-y-6 min-w-0">
          {activeLecture ? (
            <div className="p-6 sm:p-10 rounded-3xl border border-line bg-panel shadow-xl space-y-8">
              {/* Lecture Header */}
              <div className="space-y-4 border-b border-line pb-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-2">
                    {activeLecture.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs font-bold px-2.5 py-1 rounded-full bg-accent-50 text-accent-700 border border-accent-100 dark:bg-accent-950/50 dark:text-accent-300 dark:border-accent-900"
                      >
                        #{tag}
                      </span>
                    ))}
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-panel-2 text-ink-muted border border-line">
                      {activeLecture.readTime}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={handleToggleSpeech}
                      aria-label={isSpeaking ? 'Stop reading lecture aloud' : 'Listen to lecture'}
                      className={`inline-flex items-center space-x-1.5 rounded-full px-4 py-2 text-xs font-bold min-h-11 transition-all ${
                        isSpeaking
                          ? 'bg-accent-600 text-white animate-pulse hover:bg-accent-700'
                          : 'border border-line bg-panel text-ink hover:border-accent-300'
                      }`}
                      title="Listen to Lecture"
                    >
                      {isSpeaking ? <VolumeX className="w-4 h-4" aria-hidden="true" /> : <Volume2 className="w-4 h-4" aria-hidden="true" />}
                      <span>{isSpeaking ? 'Stop Audio' : 'Listen'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleToggleBookmark(activeLecture)}
                      aria-pressed={isBookmarked}
                      aria-label={isBookmarked ? 'Remove bookmark for this lecture' : 'Bookmark this lecture'}
                      className={`p-2.5 min-h-11 min-w-11 rounded-xl text-xs font-bold transition-colors ${
                        isBookmarked
                          ? 'bg-accent-50 text-accent-600 border border-accent-100 dark:bg-accent-950/50 dark:text-accent-300 dark:border-accent-900'
                          : 'bg-panel-2 text-ink border border-line hover:border-accent-300'
                      }`}
                      title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Lecture'}
                    >
                      {isBookmarked ? <BookmarkCheck className="w-4 h-4" aria-hidden="true" /> : <Bookmark className="w-4 h-4" aria-hidden="true" />}
                    </button>

                    <button
                      type="button"
                      onClick={() => window.print()}
                      aria-label="Print lecture or save as PDF"
                      className="p-2.5 min-h-11 min-w-11 rounded-xl bg-panel-2 text-ink border border-line hover:border-accent-300 transition-colors"
                      title="Print / Save PDF"
                    >
                      <Printer className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                <div
                  role="status"
                  aria-live="polite"
                  className={statusMessage || ttsNotice ? 'space-y-1' : undefined}
                >
                  {statusMessage && (
                    <p className="text-xs font-bold text-accent-600">{statusMessage}</p>
                  )}
                  {ttsNotice && (
                    <p className="text-xs font-medium text-ink-muted">{ttsNotice}</p>
                  )}
                </div>

                <h1 ref={lectureHeadingRef} className="text-3xl sm:text-4xl font-black tracking-tight text-ink scroll-mt-28">
                  {activeLecture.title}
                </h1>
                <p className="text-lg font-semibold text-ink-muted">
                  {activeLecture.subtitle}
                </p>
                <p className="text-sm sm:text-base font-medium italic p-4 rounded-xl border-l-4 border-accent-600 bg-accent-50/80 text-ink dark:bg-accent-950/40">
                  <strong>Executive Summary:</strong> {activeLecture.summary}
                </p>
              </div>

              {/* Lecture Content Paragraphs */}
              <div className="max-w-prose space-y-6 text-base sm:text-lg font-medium leading-relaxed text-ink">
                {activeLecture.content.map((paragraph, idx) => (
                  <p key={idx}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Concept Diagram */}
              {activeLecture.diagramId && <DiagramFigure id={activeLecture.diagramId} />}

              {/* Key Takeaways Box */}
              <div className="p-6 rounded-2xl border border-line bg-panel-2 space-y-4">
                <h2 className="text-lg font-bold flex items-center space-x-2 text-accent-600">
                  <CheckCircle className="w-5 h-5" aria-hidden="true" />
                  <span>Key Takeaways</span>
                </h2>
                <ul className="space-y-2">
                  {activeLecture.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-sm sm:text-base font-medium">
                      <ChevronRight className="w-5 h-5 text-accent-600 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="text-center py-16 rounded-2xl border border-dashed border-line bg-panel text-ink-muted">
              Select a lecture from the sidebar to begin reading.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
