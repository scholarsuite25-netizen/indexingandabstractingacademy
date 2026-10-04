import React, { useState, useEffect, useRef } from 'react';
import { 
  BookOpen, 
  FileText, 
  HelpCircle, 
  Layers, 
  Bookmark, 
  Search, 
  Sun, 
  Moon, 
  GraduationCap, 
  Sparkles, 
  Menu, 
  X, 
  Download, 
  Cpu,
  ChevronDown,
  Database,
  ArrowRight,
  MessageCircle,
  Phone,
  UserCheck
} from 'lucide-react';
import { MCQ_QUESTIONS } from './McqView';
import { FLASHCARDS } from './FlashcardsView';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  bookmarkCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  darkMode,
  setDarkMode,
  bookmarkCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setToolsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setToolsDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (activeTab !== 'lectures' && activeTab !== 'readings') {
      setActiveTab('lectures');
    }
  };

  const toolItems = [
    { 
      id: 'sandbox', 
      label: 'AI Subject Sandbox', 
      desc: 'Automatic descriptor extraction & abstracting', 
      icon: Cpu 
    },
    { 
      id: 'explorer', 
      label: 'Bibliographic Explorer', 
      desc: 'Search LOC, Crossref & arXiv authorities', 
      icon: Database 
    },
    { 
      id: 'tutor', 
      label: 'AI Study Professor', 
      desc: 'Grounding in ANSI/NISO LIS standards', 
      icon: Sparkles 
    },
    { 
      id: 'ebook', 
      label: 'Master E-Book (28 Ch)', 
      desc: 'Complete textbook with Markdown export', 
      icon: Download 
    }
  ];

  const isToolActive = toolItems.some(t => t.id === activeTab);

  const primaryItems = [
    { id: 'home', label: 'Dashboard', icon: GraduationCap },
    { id: 'facilitator', label: 'Facilitator', icon: UserCheck, title: 'Profile of the Facilitator: Dr. Uzoamaka Ogwo (Ph.D)' },
    { id: 'lectures', label: 'Lectures', icon: BookOpen },
    { id: 'readings', label: 'Readings', icon: FileText },
    { id: 'mcqs', label: `MCQs (${MCQ_QUESTIONS.length})`, icon: HelpCircle },
    { id: 'flashcards', label: 'Flashcards', icon: Layers },
    { id: 'theory', label: 'Theory', icon: FileText }
  ];

  const desktopNavItem = (id: string, label: string, Icon: React.ComponentType<{ className?: string }>, title?: string) => {
    const isActive = activeTab === id;
    return (
      <button
        key={id}
        onClick={() => setActiveTab(id)}
        title={title}
        aria-current={isActive ? 'page' : undefined}
        className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
          isActive
            ? 'bg-accent-600 text-white shadow-md shadow-accent-600/30'
            : 'text-white/70 hover:bg-white/10 hover:text-white'
        }`}
      >
        <Icon className="w-3.5 h-3.5" />
        <span>{label}</span>
      </button>
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-band text-white border-b border-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <button
            type="button"
            onClick={() => setActiveTab('home')}
            className="flex items-center space-x-3 select-none group rounded-lg px-1 py-1"
            aria-label="IndexMaster dashboard"
          >
            <span className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent-600 to-accent-400 flex items-center justify-center text-white shadow-lg shadow-accent-600/30 font-bold text-lg group-hover:scale-105 transition-transform">
              IM
            </span>
            <span className="text-left">
              <span className="block font-extrabold text-lg tracking-tight text-white">
                IndexMaster
              </span>
              <span className="hidden sm:block text-[11px] font-semibold text-white/60">LIS 814</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1" aria-label="Main Navigation">
            {primaryItems.map(item => desktopNavItem(item.id, item.label, item.icon, item.title))}

            {/* Tools Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setToolsDropdownOpen(!toolsDropdownOpen)}
                aria-haspopup="menu"
                aria-expanded={toolsDropdownOpen}
                className={`flex items-center space-x-1 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  isToolActive
                    ? 'bg-accent-600 text-white shadow-md shadow-accent-600/30'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>Labs & Tools</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${toolsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {toolsDropdownOpen && (
                <div className="absolute right-0 mt-2 w-72 rounded-2xl border border-line bg-panel p-2 shadow-2xl z-50 space-y-1 text-ink">
                  <div className="px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-accent-600">
                    Advanced Academic Labs
                  </div>
                  {toolItems.map(tool => {
                    const Icon = tool.icon;
                    const isSelected = activeTab === tool.id;
                    return (
                      <button
                        key={tool.id}
                        onClick={() => {
                          setActiveTab(tool.id);
                          setToolsDropdownOpen(false);
                        }}
                        aria-current={isSelected ? 'page' : undefined}
                        className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start space-x-2.5 ${
                          isSelected
                            ? 'bg-accent-50 text-accent-700 border border-accent-200'
                            : 'hover:bg-panel-2 text-ink'
                        }`}
                      >
                        <span className="p-1.5 rounded-lg bg-accent-50 text-accent-600 shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </span>
                        <span className="min-w-0">
                          <span className="text-xs font-bold leading-tight block">{tool.label}</span>
                          <span className="text-[11px] text-ink-muted truncate block">{tool.desc}</span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Saved Bookmarks */}
            <button
              onClick={() => setActiveTab('bookmarks')}
              aria-current={activeTab === 'bookmarks' ? 'page' : undefined}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all relative ${
                activeTab === 'bookmarks'
                  ? 'bg-accent-600 text-white shadow-md shadow-accent-600/30'
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>Saved</span>
              {bookmarkCount > 0 && (
                <span className="bg-white text-accent-700 text-xs font-extrabold px-1.5 py-0.2 rounded-full min-w-4 text-center">
                  {bookmarkCount}
                </span>
              )}
            </button>
          </nav>

          {/* Desktop Right Utilities (Search + Theme) */}
          <div className="hidden lg:flex items-center space-x-2">
            <form onSubmit={handleSearchSubmit} className="relative" role="search">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/50" />
              <input
                type="text"
                placeholder="Search course content..."
                aria-label="Search course content"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 pr-3 py-1.5 text-xs rounded-full border border-white/15 bg-white/10 text-white placeholder-white/50 transition-all w-36 focus:w-48 focus:outline-none focus:ring-2 focus:ring-accent-500"
              />
            </form>

            {/* Dark mode toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl transition-all bg-white/10 text-amber-300 border border-white/10 hover:bg-white/20"
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile Menu & Theme Trigger */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl bg-white/10 text-amber-300 border border-white/10"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/10 text-white border border-white/10"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Backdrop & Drawer */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 top-16 bg-navy-950/70 backdrop-blur-sm z-40 xl:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className="w-full max-h-[85vh] overflow-y-auto border-b border-line bg-panel text-ink px-5 py-6 space-y-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input */}
            <form onSubmit={(e) => { handleSearchSubmit(e); setMobileMenuOpen(false); }} className="relative" role="search">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-muted" />
              <input
                type="text"
                placeholder="Search lectures, readings, definitions..."
                aria-label="Search lectures, readings, definitions"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-line bg-panel-2 text-ink placeholder-ink-muted focus:outline-none focus:ring-2 focus:ring-accent-500"
              />
            </form>

            {/* Categorized Mobile Navigation */}
            <div className="space-y-5">
              {/* Category 1: Curriculum */}
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-accent-600 block mb-2">
                  Curriculum & Readings
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'home', label: 'Dashboard', icon: GraduationCap },
                    { id: 'facilitator', label: 'Facilitator', icon: UserCheck },
                    { id: 'lectures', label: 'Lectures', icon: BookOpen },
                    { id: 'readings', label: 'Readings', icon: FileText },
                    { id: 'theory', label: 'Theory Exams', icon: FileText }
                  ].map(item => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => { setActiveTab(item.id); setMobileMenuOpen(false); }}
                        aria-current={isActive ? 'page' : undefined}
                        className={`flex items-center space-x-2 px-3 py-2.5 rounded-xl text-xs font-bold text-left transition-all ${
                          isActive
                            ? 'bg-accent-600 text-white shadow-md shadow-accent-600/25'
                            : 'bg-panel-2 text-ink hover:bg-line border border-line'
                        }`}
                      >
                        <Icon className="w-4 h-4 shrink-0" />
                        <span className="truncate">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Category 2: Practice & Assessments */}
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-accent-600 block mb-2">
                  Assessment & Practice
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'mcqs', label: `${MCQ_QUESTIONS.length} MCQs`, icon: HelpCircle },
                    { id: 'flashcards', label: `${FLASHCARDS.length} Flashcards`, icon: Layers }
                  ].map(item => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => { setActiveTab(item.id); setMobileMenuOpen(false); }}
                        aria-current={isActive ? 'page' : undefined}
                        className={`flex items-center space-x-2 px-3 py-2.5 rounded-xl text-xs font-bold text-left transition-all ${
                          isActive
                            ? 'bg-accent-600 text-white shadow-md shadow-accent-600/25'
                            : 'bg-panel-2 text-ink hover:bg-line border border-line'
                        }`}
                      >
                        <Icon className="w-4 h-4 shrink-0" />
                        <span className="truncate">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Category 3: Research Tools & AI */}
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-accent-600 block mb-2">
                  Labs & Research Tools
                </span>
                <div className="space-y-1.5">
                  {toolItems.map(tool => {
                    const Icon = tool.icon;
                    const isActive = activeTab === tool.id;
                    return (
                      <button
                        key={tool.id}
                        onClick={() => { setActiveTab(tool.id); setMobileMenuOpen(false); }}
                        aria-current={isActive ? 'page' : undefined}
                        className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-all ${
                          isActive
                            ? 'bg-accent-600 text-white shadow-md shadow-accent-600/25'
                            : 'bg-panel-2 text-ink hover:bg-line border border-line'
                        }`}
                      >
                        <span className="flex items-center space-x-2.5 min-w-0">
                          <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-accent-600'}`} />
                          <span className="min-w-0">
                            <span className="text-xs font-bold block">{tool.label}</span>
                            <span className={`text-[11px] block truncate ${isActive ? 'text-white/80' : 'text-ink-muted'}`}>
                              {tool.desc}
                            </span>
                          </span>
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 shrink-0 opacity-70 ml-2" />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Category 4: Direct Academic Support */}
              <div className="p-4 rounded-2xl border border-accent-200 bg-accent-50 dark:border-accent-900 dark:bg-accent-950/40 space-y-3">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-accent-700 dark:text-accent-300">
                    IndexMaster &bull; LIS - Indexing &amp; Abstracting
                  </span>
                  <h4 className="text-sm font-bold text-ink">
                    Academic Support &amp; Enquiries
                  </h4>
                  <p className="text-sm font-semibold text-ink-muted mt-0.5">
                    +234 803 947 3344
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="https://wa.me/2348039473344?text=Hello%20IndexMaster%20LIS%20-%20Indexing%20%26%20Abstracting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-1.5 px-3 py-2.5 rounded-xl text-xs font-bold bg-[#25D366] text-white shadow-sm hover:brightness-105 transition-all min-h-11"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="tel:+2348039473344"
                    className="flex items-center justify-center space-x-1.5 px-3 py-2.5 rounded-xl text-xs font-bold bg-accent-600 text-white shadow-sm hover:bg-accent-700 transition-all min-h-11"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>

              {/* Category 5: Personal Workspace */}
              <div className="pt-2 border-t border-line flex items-center justify-between">
                <button
                  onClick={() => { setActiveTab('bookmarks'); setMobileMenuOpen(false); }}
                  className="flex items-center space-x-2 text-xs font-bold text-accent-600 min-h-11"
                >
                  <Bookmark className="w-4 h-4" />
                  <span>View Saved Items ({bookmarkCount})</span>
                </button>
                <span className="text-[11px] text-ink-muted">LIS 814 IndexMaster</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
