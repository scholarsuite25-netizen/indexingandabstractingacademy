import React from 'react';
import { 
  BookOpen, 
  HelpCircle, 
  Layers, 
  FileText, 
  Sparkles, 
  ArrowRight, 
  Clock,
  Cpu,
  Database,
  Download,
  MessageCircle,
  Phone,
  UserCheck,
  PlayCircle,
  GraduationCap
} from 'lucide-react';
import { COURSE_MODULES } from '../data/courseData';
import { MCQ_QUESTIONS } from '../data/mcqQuestions';
import { FLASHCARDS } from '../data/flashcards';
import { DiagramFigure } from './diagrams/registry';

interface HomeDashboardProps {
  setActiveTab: (tab: string) => void;
  selectedModuleId: string | null;
  setSelectedModuleId: (id: string | null) => void;
  darkMode: boolean;
}

export const HomeDashboard: React.FC<HomeDashboardProps> = ({
  setActiveTab,
  setSelectedModuleId
}) => {
  const totalLectures = COURSE_MODULES.reduce((sum, m) => sum + m.lectures.length, 0);
  const totalMcqs = MCQ_QUESTIONS.length;
  const totalCards = FLASHCARDS.length;
  const mcqCountFor = (mod: (typeof COURSE_MODULES)[number]) =>
    MCQ_QUESTIONS.filter(q => q.module.startsWith(`Module ${mod.number}:`)).length;
  const cardCountFor = (mod: (typeof COURSE_MODULES)[number]) =>
    FLASHCARDS.filter(f => f.module === `Module ${mod.number}`).length;

  const stats = [
    { value: `${COURSE_MODULES.length}`, label: 'Study Modules' },
    { value: `${totalLectures}`, label: 'Video-style Lectures' },
    { value: `${totalMcqs}`, label: 'Practice MCQs' },
    { value: `${totalCards}`, label: 'Academic Flashcards' }
  ];

  const quickAccess = [
    {
      title: 'Lectures & Notes',
      desc: `${COURSE_MODULES.length} comprehensive modules covering IR, indexing & abstracting principles.`,
      icon: BookOpen,
      tab: 'lectures',
      chip: 'bg-accent-600 text-white',
      cta: 'Start Learning'
    },
    {
      title: 'Interactive MCQs',
      desc: 'Self-assessment quizzes with instant explanations for every module.',
      icon: HelpCircle,
      tab: 'mcqs',
      chip: 'bg-navy-800 text-white',
      cta: 'Take a Quiz'
    },
    {
      title: 'Smart Flashcards',
      desc: 'Flip cards for key concepts, terminology, and standards.',
      icon: Layers,
      tab: 'flashcards',
      chip: 'bg-amber-500 text-white',
      cta: 'Revise Cards'
    },
    {
      title: 'Theory Questions',
      desc: 'Essay and short-answer prompts with model grading guides.',
      icon: FileText,
      tab: 'theory',
      chip: 'bg-sky-600 text-white',
      cta: 'Write Essays'
    }
  ];

  const labs = [
    {
      title: 'AI Indexing Sandbox',
      desc: 'Paste research abstracts to automatically extract controlled descriptors, assess exhaustivity, and generate ANSI/NISO Z39.14 abstracts.',
      icon: Cpu,
      tab: 'sandbox',
      cta: 'Open Practical Sandbox',
      chip: 'bg-accent-50 text-accent-600'
    },
    {
      title: 'Bibliographic Explorer',
      desc: 'Query live authority files from Library of Congress (LOC Authorities), Crossref DOI registry, and arXiv preprint classifications.',
      icon: Database,
      tab: 'explorer',
      cta: 'Search Authority Files',
      chip: 'bg-navy-800/10 text-navy-800 dark:bg-white/10 dark:text-accent-400'
    },
    {
      title: 'Master E-Book (28 Ch)',
      desc: 'Complete, unabridged 28-chapter textbook covering all topics from aboutness and PRECIS to modern transformer embeddings, downloadable as Markdown.',
      icon: Download,
      tab: 'ebook',
      cta: 'Read & Download Textbook',
      chip: 'bg-sky-500/15 text-sky-600 dark:text-sky-400'
    }
  ];

  const sectionHeading = (
    title: string,
    highlight: string,
    subtitle: string,
    action?: React.ReactNode
  ) => (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
      <div className="max-w-2xl">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
          {title} <span className="text-accent-600">{highlight}</span>
        </h2>
        <p className="text-sm font-medium text-ink-muted mt-1.5">{subtitle}</p>
      </div>
      {action}
    </div>
  );

  return (
    <div className="space-y-14 pb-4">
      {/* Hero Section — dark band like the reference */}
      <section className="relative overflow-hidden rounded-3xl bg-band text-white border border-white/10 shadow-xl">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-96 h-96 bg-accent-600/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 -mb-24 w-72 h-72 bg-navy-600/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-10 p-8 sm:p-12">
          <div className="lg:col-span-3 space-y-6">
            <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/10 border border-white/15 text-white/90">
              <GraduationCap className="w-3.5 h-3.5 text-accent-400" />
              <span>LIS 814 &bull; Master Information Organization &amp; Retrieval</span>
            </span>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Indexing and{' '}
              <span className="text-accent-500">Abstracting Academy</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed text-white/75 max-w-2xl">
              A comprehensive, interactive study platform uniting lectures, study notes, supplemental readings, multiple-choice questions, flashcards, theory questions, and AI-powered tutoring into a single unified workspace.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <button
                onClick={() => setActiveTab('lectures')}
                className="flex items-center space-x-2 px-6 py-3 rounded-full bg-accent-600 text-white font-bold shadow-lg shadow-accent-600/30 hover:bg-accent-700 transition-all min-h-11"
              >
                <PlayCircle className="w-4 h-4" />
                <span>Explore Lectures</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveTab('facilitator')}
                className="flex items-center space-x-2 px-5 py-3 rounded-full font-bold border border-white/20 bg-white/5 text-white hover:bg-white/15 transition-all min-h-11"
              >
                <UserCheck className="w-4 h-4 text-accent-400" />
                <span>Meet Facilitator</span>
              </button>
              <button
                onClick={() => setActiveTab('tutor')}
                className="flex items-center space-x-2 px-5 py-3 rounded-full font-bold border border-white/20 bg-white/5 text-white hover:bg-white/15 transition-all min-h-11"
              >
                <Sparkles className="w-4 h-4 text-accent-400" />
                <span>Ask AI Study Tutor</span>
              </button>
            </div>
          </div>

          {/* Stats strip — reference "30k+ / 120k+" band */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-3 self-center">
            {stats.map(stat => (
              <div
                key={stat.label}
                className="rounded-2xl bg-white/5 border border-white/10 p-4 sm:p-5 backdrop-blur-sm"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-accent-500">{stat.value}+</div>
                <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-wide text-white/60 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Course concept map */}
        <div className="relative z-10 px-8 sm:px-12 pb-10">
          <DiagramFigure id="home-hero" />
        </div>
      </section>

      {/* Quick Access Grid */}
      <section className="space-y-6">
        {sectionHeading(
          'Most Popular',
          'Study Tools',
          'Jump straight into the practice formats students use most to prepare for LIS 814 assessments.'
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickAccess.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveTab(item.tab)}
                className="group text-left cursor-pointer p-6 rounded-2xl border border-line bg-panel shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-accent-300"
              >
                <span className={`w-12 h-12 rounded-xl ${item.chip} flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </span>
                <h3 className="text-lg font-bold mb-1 text-ink group-hover:text-accent-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm font-medium leading-relaxed text-ink-muted">
                  {item.desc}
                </p>
                <span className="mt-4 inline-flex items-center space-x-1 text-xs font-bold text-accent-600">
                  <span>{item.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Course Modules Showcase */}
      <section className="space-y-6">
        {sectionHeading(
          'Explore Our',
          'Courses Categories',
          'Structured learning path modeled after professional information science standards.',
          <button
            onClick={() => setActiveTab('lectures')}
            className="text-sm font-bold text-accent-600 flex items-center space-x-1 hover:underline self-start sm:self-auto shrink-0 min-h-11"
          >
            <span>View All Modules</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COURSE_MODULES.map((mod) => (
            <button
              key={mod.id}
              type="button"
              onClick={() => {
                setSelectedModuleId(mod.id);
                setActiveTab('lectures');
              }}
              className="group text-left cursor-pointer rounded-2xl p-6 border border-line bg-panel shadow-sm transition-all duration-300 hover:shadow-xl hover:border-accent-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent-50 text-accent-700 border border-accent-100 dark:bg-accent-950/50 dark:text-accent-300 dark:border-accent-900">
                    Module {mod.number}
                  </span>
                  <span className="flex items-center space-x-1 text-xs font-semibold text-ink-muted">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{mod.lectures.length} Lectures</span>
                  </span>
                </div>
                <h3 className="text-lg font-bold text-ink group-hover:text-accent-600 transition-colors">
                  {mod.title}
                </h3>
                <p className="text-sm font-medium line-clamp-2 leading-relaxed text-ink-muted">
                  {mod.description}
                </p>
              </div>

              <span className="pt-6 mt-6 border-t border-line flex items-center justify-between text-xs font-bold w-full">
                <span className="text-accent-600 flex items-center space-x-1">
                  <span>Study Module</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-ink-muted">{mcqCountFor(mod)} MCQs &middot; {cardCountFor(mod)} Cards</span>
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Advanced Research Labs & Semantic Tools */}
      <section className="space-y-6">
        {sectionHeading(
          'Specialized Research',
          'Labs & Tools',
          'Live bibliographic data retrieval, automated metadata indexing sandbox, and interactive academic tutoring.'
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {labs.map((lab) => {
            const Icon = lab.icon;
            return (
              <button
                key={lab.title}
                type="button"
                onClick={() => setActiveTab(lab.tab)}
                className="group text-left cursor-pointer rounded-2xl p-6 border border-line bg-panel shadow-sm transition-all duration-300 hover:shadow-xl hover:border-accent-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className={`w-10 h-10 rounded-xl ${lab.chip} flex items-center justify-center font-bold`}>
                    <Icon className="w-5 h-5" />
                  </span>
                  <h3 className="text-lg font-bold text-ink group-hover:text-accent-600 transition-colors">
                    {lab.title}
                  </h3>
                  <p className="text-sm font-medium leading-relaxed text-ink-muted">
                    {lab.desc}
                  </p>
                </div>
                <span className="pt-4 mt-4 border-t border-line text-xs font-bold text-accent-600 flex items-center space-x-1">
                  <span>{lab.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Academic Support & Contact Helpline — dark band */}
      <section className="p-6 sm:p-10 rounded-3xl bg-band text-white border border-white/10 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-accent-600 text-white">
              IndexMaster &bull; LIS - Indexing &amp; Abstracting
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight mt-2">
              Have Questions or Need <span className="text-accent-500">Academic Guidance?</span>
            </h2>
            <p className="text-sm font-medium text-white/70">
              Connect directly with our team for study clarifications, curriculum guidance, or research assistance via WhatsApp or phone.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://wa.me/2348039473344?text=Hello%20IndexMaster%20LIS%20-%20Indexing%20%26%20Abstracting"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-5 py-3 rounded-xl font-bold bg-[#25D366] text-white shadow-lg hover:brightness-105 transition-all text-xs sm:text-sm min-h-11"
              title="Click to WhatsApp +2348039473344"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href="tel:+2348039473344"
              className="flex items-center space-x-2 px-5 py-3 rounded-xl font-bold bg-accent-600 text-white shadow-lg hover:bg-accent-700 transition-all text-xs sm:text-sm min-h-11"
              title="Click to Call +2348039473344"
            >
              <Phone className="w-4 h-4" />
              <span>Call: +234 803 947 3344</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
