import React, { useState, useEffect, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { HomeDashboard } from './components/HomeDashboard';
import { AccessGate } from './components/AccessGate';
import {
  ACCESS_STORAGE_KEY,
  isValidAccessCode,
  storeAccessCode,
} from '../lib/access';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';
import { BookmarkItem } from './data/courseData';

// Code-split heavy views (question banks, textbook, tools) so the initial
// bundle stays small; Navbar/HomeDashboard use src/data/counts.ts instead.
const FacilitatorView = React.lazy(() =>
  import('./components/FacilitatorView').then(m => ({ default: m.FacilitatorView })));
const LecturesView = React.lazy(() =>
  import('./components/LecturesView').then(m => ({ default: m.LecturesView })));
const ReadingsView = React.lazy(() =>
  import('./components/ReadingsView').then(m => ({ default: m.ReadingsView })));
const McqView = React.lazy(() =>
  import('./components/McqView').then(m => ({ default: m.McqView })));
const FlashcardsView = React.lazy(() =>
  import('./components/FlashcardsView').then(m => ({ default: m.FlashcardsView })));
const TheoryView = React.lazy(() =>
  import('./components/TheoryView').then(m => ({ default: m.TheoryView })));
const SandboxView = React.lazy(() =>
  import('./components/SandboxView').then(m => ({ default: m.SandboxView })));
const BibliographicExplorer = React.lazy(() =>
  import('./components/BibliographicExplorer').then(m => ({ default: m.BibliographicExplorer })));
const AiTutorView = React.lazy(() =>
  import('./components/AiTutorView').then(m => ({ default: m.AiTutorView })));
const EbookDownloadView = React.lazy(() =>
  import('./components/EbookDownloadView').then(m => ({ default: m.EbookDownloadView })));
const BookmarksProgressView = React.lazy(() =>
  import('./components/BookmarksProgressView').then(m => ({ default: m.BookmarksProgressView })));

export default function App() {
  const [accessCode, setAccessCode] = useState<string | null>(() => {
    try {
      const saved = localStorage.getItem(ACCESS_STORAGE_KEY);
      return saved && isValidAccessCode(saved) ? saved : null;
    } catch {
      return null;
    }
  });
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('indexmaster_theme');
      if (saved) return saved === 'dark';
    } catch {
      /* ignore */
    }
    return false;
  });

  // Bookmarks state with localStorage persistence
  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>(() => {
    try {
      const saved = localStorage.getItem('indexmaster_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('indexmaster_bookmarks', JSON.stringify(bookmarks));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarks]);

  // Apply dark mode class to html root and persist the choice
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    try {
      localStorage.setItem('indexmaster_theme', darkMode ? 'dark' : 'light');
    } catch {
      /* ignore */
    }
  }, [darkMode]);

  // Reset scroll position when switching sections
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [activeTab]);

  const toggleBookmark = (item: BookmarkItem) => {
    setBookmarks(prev => {
      const exists = prev.some(b => b.id === item.id);
      if (exists) {
        return prev.filter(b => b.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  const removeBookmark = (id: string) => {
    setBookmarks(prev => prev.filter(b => b.id !== id));
  };

  // Access gate: nothing renders until the visitor enters the
  // shared course code (remembered on this device afterwards).
  if (!accessCode) {
    return (
      <AccessGate
        darkMode={darkMode}
        onUnlock={(code) => {
          storeAccessCode(code);
          setAccessCode(code);
        }}
      />
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-200 flex flex-col bg-surface text-ink`}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-xl focus:bg-accent-600 focus:px-4 focus:py-2.5 focus:text-sm focus:font-bold focus:text-white focus:shadow-lg"
      >
        Skip to content
      </a>
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        bookmarkCount={bookmarks.length}
      />

      <main id="main" tabIndex={-1} className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <Suspense
          fallback={
            <div className="py-24 text-center text-ink/60" role="status">
              Loading…
            </div>
          }
        >
        {activeTab === 'home' && (
          <HomeDashboard
            setActiveTab={setActiveTab}
            selectedModuleId={selectedModuleId}
            setSelectedModuleId={setSelectedModuleId}
            darkMode={darkMode}
          />
        )}
        {activeTab === 'facilitator' && (
          <FacilitatorView
            darkMode={darkMode}
            setActiveTab={setActiveTab}
          />
        )}
        {activeTab === 'lectures' && (
          <LecturesView
            selectedModuleId={selectedModuleId}
            setSelectedModuleId={setSelectedModuleId}
            bookmarks={bookmarks}
            toggleBookmark={toggleBookmark}
            darkMode={darkMode}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        )}
        {activeTab === 'readings' && (
          <ReadingsView
            bookmarks={bookmarks}
            toggleBookmark={toggleBookmark}
            darkMode={darkMode}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        )}
        {activeTab === 'mcqs' && (
          <McqView darkMode={darkMode} />
        )}
        {activeTab === 'flashcards' && (
          <FlashcardsView darkMode={darkMode} />
        )}
        {activeTab === 'theory' && (
          <TheoryView darkMode={darkMode} />
        )}
        {activeTab === 'sandbox' && (
          <SandboxView darkMode={darkMode} />
        )}
        {activeTab === 'explorer' && (
          <BibliographicExplorer darkMode={darkMode} />
        )}
        {activeTab === 'tutor' && (
          <AiTutorView darkMode={darkMode} />
        )}
        {activeTab === 'ebook' && (
          <EbookDownloadView
            darkMode={darkMode}
            bookmarks={bookmarks}
            toggleBookmark={toggleBookmark}
          />
        )}
        {activeTab === 'bookmarks' && (
          <BookmarksProgressView
            bookmarks={bookmarks}
            removeBookmark={removeBookmark}
            setActiveTab={setActiveTab}
            setSelectedModuleId={setSelectedModuleId}
            darkMode={darkMode}
          />
        )}
        </Suspense>
      </main>

      {/* Academic Multi-Column Footer */}
      <Footer
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setSelectedModuleId={setSelectedModuleId}
        darkMode={darkMode}
        bookmarkCount={bookmarks.length}
      />

      {/* Floating Direct Contact: WhatsApp & Call */}
      <FloatingContact darkMode={darkMode} />
    </div>
  );
}
