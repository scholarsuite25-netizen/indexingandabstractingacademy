import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  FileText, 
  HelpCircle, 
  Layers, 
  Sparkles, 
  Cpu, 
  Download, 
  Bookmark, 
  ArrowUp, 
  ShieldCheck,
  Database,
  Award,
  UserCheck
} from 'lucide-react';
import { COURSE_MODULES } from '../data/courseData';

interface FooterProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  setSelectedModuleId: (id: string | null) => void;
  darkMode: boolean;
  bookmarkCount: number;
}

const smoothBehavior = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches ? ('auto' as const) : ('smooth' as const);

export const Footer: React.FC<FooterProps> = ({
  setActiveTab,
  setSelectedModuleId,
  bookmarkCount
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: smoothBehavior() });
  };

  const handleModuleClick = (modId: string) => {
    setSelectedModuleId(modId);
    setActiveTab('lectures');
    window.scrollTo({ top: 0, behavior: smoothBehavior() });
  };

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: smoothBehavior() });
  };

  const columnHeading = 'text-[11px] font-extrabold uppercase tracking-wider text-accent-400';
  const link = 'flex items-center space-x-1.5 text-left text-white/70 hover:text-white transition-colors';

  return (
    <footer className="bg-band text-white border-t border-white/10 mt-20 print:hidden">
      {/* Top Banner: Academic Standards Ribbon */}
      <div className="border-b border-white/10 bg-band-2 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center space-x-2 font-semibold text-white/75">
            <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
            <span className="font-bold text-accent-400">LIS 814 Curriculum Standard:</span>
            <span>ANSI/NISO Z39.19 (Thesauri) &middot; ANSI/NISO Z39.14 (Abstracting) &middot; ISO 25964-1</span>
          </div>
          <div className="flex items-center space-x-3 font-medium text-white/75">
            <span className="flex items-center space-x-1">
              <ShieldCheck className="w-3.5 h-3.5 text-accent-400" />
              <span>Verified Academic Model</span>
            </span>
            <span aria-hidden="true">&middot;</span>
            <span className="flex items-center space-x-1">
              <Sparkles className="w-3.5 h-3.5 text-accent-400" />
              <span>Gemini 3.8 Flash Connected</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 pb-32 sm:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Mission Statement */}
          <div className="lg:col-span-2 space-y-4">
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-3 group w-fit rounded-lg text-left"
            >
              <span className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent-600 to-accent-400 flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
                IM
              </span>
              <span>
                <span className="block font-extrabold text-xl tracking-tight text-white">
                  IndexMaster
                </span>
                <span className="block text-xs font-bold text-white/50">LIS 814 &bull; Information Science</span>
              </span>
            </button>

            <p className="text-sm leading-relaxed font-medium text-white/70">
              An accredited, university-grade study portal dedicated to the theory and practical application of subject indexing, controlled vocabulary architecture, abstracting standards, and modern vector information retrieval.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold">
              <button 
                onClick={() => handleNavClick('bookmarks')}
                className="flex items-center space-x-1.5 px-3 py-2 rounded-lg border border-white/15 bg-white/5 text-white/80 hover:border-accent-400 hover:text-white transition-all min-h-11"
              >
                <Bookmark className="w-3.5 h-3.5 text-accent-400" />
                <span>Saved Workspace ({bookmarkCount})</span>
              </button>

              <button 
                onClick={() => handleNavClick('ebook')}
                className="flex items-center space-x-1.5 px-3 py-2 rounded-lg border border-white/15 bg-white/5 text-white/80 hover:border-accent-400 hover:text-white transition-all min-h-11"
              >
                <Download className="w-3.5 h-3.5 text-accent-400" />
                <span>Master E-Book (28 Ch)</span>
              </button>
            </div>
          </div>

          {/* Column 2: Curriculum Modules */}
          <div className="space-y-3">
            <h2 className={columnHeading}>
              Curriculum Modules
            </h2>
            <ul className="space-y-2 text-xs font-medium">
              {COURSE_MODULES.map(m => (
                <li key={m.id}>
                  <button 
                    onClick={() => handleModuleClick(m.id)}
                    className={`${link} truncate max-w-full`}
                  >
                    Module {m.number}: {m.title}
                  </button>
                </li>
              ))}
              <li className="pt-1">
                <button 
                  onClick={() => handleNavClick('facilitator')}
                  className={link}
                >
                  <Award className="w-3.5 h-3.5 text-accent-400" />
                  <span>Facilitator: Dr. Uzoamaka Ogwo (Ph.D)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('readings')}
                  className={link}
                >
                  <FileText className="w-3 h-3" />
                  <span>Supplemental Readings</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Interactive Practice & Labs */}
          <div className="space-y-3">
            <h2 className={columnHeading}>
              Practice & Exams
            </h2>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <button onClick={() => handleNavClick('mcqs')} className={link}>
                  <HelpCircle className="w-3.5 h-3.5 opacity-70" />
                  <span>100-Question MCQ Exam</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('flashcards')} className={link}>
                  <Layers className="w-3.5 h-3.5 opacity-70" />
                  <span>70 Academic Flashcards</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('theory')} className={link}>
                  <GraduationCap className="w-3.5 h-3.5 opacity-70" />
                  <span>35 Theory Essay Prompts</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('sandbox')} className={link}>
                  <Cpu className="w-3.5 h-3.5 opacity-70" />
                  <span>Practical Indexing Sandbox</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('tutor')} className={link}>
                  <Sparkles className="w-3.5 h-3.5 opacity-70" />
                  <span>AI Professor Q&A Tutor</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Standards & Bibliographic Tools */}
          <div className="space-y-3">
            <h2 className={columnHeading}>
              Authority & Standards
            </h2>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <button onClick={() => handleNavClick('explorer')} className={link}>
                  <Database className="w-3.5 h-3.5 opacity-70" />
                  <span>Bibliographic Explorer</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('readings')} className={`${link} items-start`}>
                  <span>ANSI/NISO Z39.19 Thesauri <span className="text-white/40">(Readings)</span></span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('readings')} className={`${link} items-start`}>
                  <span>ANSI/NISO Z39.14 Abstracting <span className="text-white/40">(Readings)</span></span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('lectures')} className={`${link} items-start`}>
                  <span>Cranfield Evaluation Paradigm <span className="text-white/40">(Lectures)</span></span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('lectures')} className={`${link} items-start`}>
                  <span>PRECIS &amp; Chain Indexing <span className="text-white/40">(Lectures)</span></span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Utility Bar */}
        <div className="pt-10 mt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/60">
            <span>&copy; {new Date().getFullYear()} IndexMaster &bull; LIS 814.</span>
            <span>All rights reserved.</span>
            <span>Academic open curriculum.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 px-4 py-2.5 rounded-lg border border-white/15 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white text-xs font-semibold transition-all min-h-11"
            title="Scroll to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
