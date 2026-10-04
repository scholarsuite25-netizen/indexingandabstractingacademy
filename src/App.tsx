import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomeDashboard } from './components/HomeDashboard';
import { FacilitatorView } from './components/FacilitatorView';
import { LecturesView } from './components/LecturesView';
import { ReadingsView } from './components/ReadingsView';
import { McqView } from './components/McqView';
import { FlashcardsView } from './components/FlashcardsView';
import { TheoryView } from './components/TheoryView';
import { SandboxView } from './components/SandboxView';
import { BibliographicExplorer } from './components/BibliographicExplorer';
import { AiTutorView } from './components/AiTutorView';
import { EbookDownloadView } from './components/EbookDownloadView';
import { BookmarksProgressView } from './components/BookmarksProgressView';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';
import { BookmarkItem } from './data/courseData';

export default function App() {
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
