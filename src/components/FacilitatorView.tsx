import React, { useState } from 'react';
import { 
  GraduationCap, 
  Mail, 
  ExternalLink, 
  Award, 
  BookOpen, 
  Sparkles, 
  Cpu, 
  Cloud, 
  Share2, 
  Archive, 
  Headphones, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  Building2, 
  ShieldCheck,
  Copy,
  Check,
  Layers,
  FileText,
  ArrowRight
} from 'lucide-react';

interface FacilitatorViewProps {
  darkMode: boolean;
  setActiveTab: (tab: string) => void;
}

export const FacilitatorView: React.FC<FacilitatorViewProps> = ({ darkMode, setActiveTab }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('Uzoamaka.ogwo@unn.edu.ng');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const researchSpecializations = [
    {
      title: 'ICT in Libraries',
      category: 'Infrastructure',
      icon: Cpu,
      desc: 'Architecting integrated library management systems, automated cataloging workflows, and scalable digital information infrastructure.'
    },
    {
      title: 'Artificial Intelligence (AI)',
      category: 'Machine Intelligence',
      icon: Sparkles,
      desc: 'Automated indexing algorithms, semantic text processing, neural retrieval architectures, and generative knowledge classification.'
    },
    {
      title: 'Cloud Computing',
      category: 'Cloud Systems',
      icon: Cloud,
      desc: 'Distributed academic repositories, elastic cloud hosting for institutional archives, and remote multi-campus library services.'
    },
    {
      title: 'Social Networking',
      category: 'Scholarly Web',
      icon: Share2,
      desc: 'Academic social networks, scholarly communication channels, and interactive collaborative spaces for modern research communities.'
    },
    {
      title: 'Digital Preservation',
      category: 'Curation',
      icon: Archive,
      desc: 'Long-term digital curation, bitstream preservation protocols, OAIS reference architectures, and institutional memory stewardship.'
    },
    {
      title: 'Digital Reference Services',
      category: 'Advisory',
      icon: Headphones,
      desc: 'Virtual reference desks, synchronous inquiry platforms, selective dissemination of information (SDI), and remote scholarly advisory.'
    },
    {
      title: 'Emerging Library Technologies',
      category: 'Next-Gen KOS',
      icon: BookOpen,
      desc: 'Linked Open Data (LOD), semantic web ontologies, next-generation knowledge organization systems, and modern indexing standards.'
    }
  ];

  const credentials = [
    {
      label: 'Doctorate Degree',
      value: 'Ph.D in Library & Information Science',
      institution: 'University of Nigeria, Nsukka',
      icon: GraduationCap
    },
    {
      label: 'Current Executive Post',
      value: 'University Librarian',
      institution: 'Enugu State Univ. of Science & Technology (ESUT)',
      icon: Award
    },
    {
      label: 'Academic Appointment',
      value: 'Lecturer & Researcher',
      institution: 'Department of LIS, University of Nigeria (UNN)',
      icon: Building2
    },
    {
      label: 'Professional Certification',
      value: 'Certified Librarian of Nigeria (CLN)',
      institution: 'Librarians’ Registration Council of Nigeria (LRCN)',
      icon: ShieldCheck
    }
  ];

  return (
    <div className="space-y-12 pb-24 max-w-5xl mx-auto px-1 sm:px-0">
      {/* Sleek Executive Header (Zero Image Placeholders) */}
      <div className="rounded-3xl border border-line overflow-hidden transition-all shadow-xl bg-panel">
        {/* Subtle accent bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-accent-600 via-accent-400 to-navy-700" />

        <div className="p-8 sm:p-12 space-y-8">
          {/* Top Metadata Badges */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-accent-50 text-accent-700 border border-accent-100 dark:bg-accent-950/50 dark:text-accent-300 dark:border-accent-900">
                <span className="w-2 h-2 rounded-full bg-accent-600 animate-pulse" aria-hidden="true" />
                <span>Course Facilitator</span>
              </span>
              <span className="hidden sm:inline text-xs font-semibold text-ink-muted">
                &bull; LIS 814: Indexing &amp; Abstracting
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-panel-2 text-ink border border-line">
                <ShieldCheck className="w-3.5 h-3.5 text-accent-600" aria-hidden="true" />
                <span>Certified Librarian (CLN)</span>
              </span>
            </div>
          </div>

          {/* Primary Name & Executive Title */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-ink">
              Dr. Uzoamaka Ogwo
              <span className="text-accent-600 font-extrabold text-2xl sm:text-3xl ml-3">
                Ph.D
              </span>
            </h1>

            <p className="text-base sm:text-lg font-medium text-ink-muted max-w-3xl leading-relaxed">
              University Librarian at <strong className="text-ink">Enugu State University of Science and Technology (ESUT)</strong> and Lecturer at the <strong className="text-ink">Department of Library and Information Science, University of Nigeria, Nsukka (UNN)</strong>.
            </p>
          </div>

          {/* Academic Dossier Quick Contact Pill Bar */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            {/* Verified ORCID Badge */}
            <a
              href="https://orcid.org/0000-0002-6477-1248"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-[#A6CE39]/10 text-[#547306] dark:text-[#A6CE39] border border-[#A6CE39]/30 hover:bg-[#A6CE39]/20 transition-all group"
              title="Verified ORCID Profile"
            >
              <span className="w-4 h-4 rounded-full bg-[#A6CE39] text-white flex items-center justify-center text-xs font-black shrink-0">iD</span>
              <span>ORCID: 0000-0002-6477-1248</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Official Academic Email with Copy & Mail */}
            <div className="inline-flex flex-wrap items-center rounded-xl border border-line bg-panel text-xs font-bold overflow-hidden shadow-sm">
              <a
                href="mailto:Uzoamaka.ogwo@unn.edu.ng"
                className="inline-flex items-center space-x-2 px-4 py-2.5 min-h-11 text-ink hover:text-accent-600 transition-colors"
                title="Send academic email"
              >
                <Mail className="w-4 h-4 text-accent-600" aria-hidden="true" />
                <span>Uzoamaka.ogwo@unn.edu.ng</span>
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-3 py-2.5 min-h-11 border-l border-line text-ink-muted hover:text-ink hover:bg-panel-2 transition-colors"
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-accent-600" aria-hidden="true" /> : <Copy className="w-3.5 h-3.5" aria-hidden="true" />}
              </button>
              <span role="status" aria-live="polite" className="px-3 py-2.5 text-xs font-bold text-accent-600">
                {copied ? 'Email copied' : ''}
              </span>
            </div>

            {/* WhatsApp Direct Action */}
            <a
              href="https://wa.me/2348039473344?text=Hello%20Dr.%20Ogwo%2C%20I%20am%20reaching%20out%20regarding%20LIS%20814%20Indexing%20%26%20Abstracting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2.5 min-h-11 rounded-xl text-xs font-bold bg-[#25D366] text-white shadow-sm hover:brightness-105 transition-all"
              title="Chat directly on WhatsApp (opens in new tab)"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>WhatsApp Inquiries</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              <span className="sr-only">(opens in new tab)</span>
            </a>

            {/* Phone Call Direct Action */}
            <a
              href="tel:+2348039473344"
              className="inline-flex items-center space-x-2 px-4 py-2.5 min-h-11 rounded-xl text-xs font-bold bg-accent-600 text-white shadow-sm hover:bg-accent-700 transition-all"
              title="Direct call"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>+234 803 947 3344</span>
            </a>
          </div>
        </div>

        {/* Credentials & Appointments Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-line divide-y sm:divide-y-0 sm:divide-x divide-line bg-panel-2">
          {credentials.map((cred, i) => {
            const Icon = cred.icon;
            return (
              <div key={i} className="p-5 flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-xl bg-accent-50 text-accent-600 border border-accent-100 dark:bg-accent-950/50 dark:text-accent-300 dark:border-accent-900 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-ink-muted block">
                    {cred.label}
                  </span>
                  <span className="text-xs font-bold text-ink block mt-0.5">
                    {cred.value}
                  </span>
                  <span className="text-xs text-ink-muted block mt-0.5">
                    {cred.institution}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Academic Profile & Scholarly Trajectory */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Biography Column (Span 2) */}
        <div className="md:col-span-2 space-y-6">
          <div className="p-8 sm:p-10 rounded-3xl border border-line bg-panel space-y-6 shadow-sm">
            <div className="space-y-1">
              <span className="text-xs font-extrabold uppercase tracking-wider text-accent-600">
                Academic Profile
              </span>
              <h2 className="text-2xl font-black tracking-tight text-ink">
                Scholarly Leadership &amp; Administration
              </h2>
            </div>

            <div className="max-w-prose space-y-4 text-sm sm:text-base leading-relaxed font-medium text-ink-muted">
              <p>
                <strong>Dr. Ogwo, Uzoamaka</strong> is a distinguished lecturer, researcher, and certified librarian (CLN) with extensive administrative and pedagogical experience spanning library governance, digital librarianship, scholarly communication, and emerging technologies in Library and Information Science.
              </p>

              <p>
                She currently serves as the <strong>University Librarian at Enugu State University of Science and Technology (ESUT)</strong>, Agbani, Enugu State, Nigeria. In this administrative role, she directs institutional information architecture, oversees multi-campus digital library systems, and champions open-access institutional repositories.
              </p>

              <p>
                An active member of leading academic and professional bodies including the <strong>Nigerian Library Association (NLA)</strong>, Dr. Ogwo has authored multiple academic books and authored numerous peer-reviewed papers published in reputable national and international journals. Her research continually bridges classical indexing and classification theories with modern computational information retrieval frameworks.
              </p>
            </div>
          </div>

          {/* LIS 814 Course Scope Callout */}
          <div className="p-8 rounded-3xl border border-accent-100 bg-accent-50/70 transition-all dark:border-accent-900 dark:bg-accent-950/30">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-2xl bg-accent-600 text-white flex items-center justify-center shrink-0 mt-1">
                <BookOpen className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="space-y-2 min-w-0">
                <span className="text-xs font-extrabold uppercase tracking-wider text-accent-600">
                  Pedagogical Focus &bull; LIS 814
                </span>
                <h3 className="text-lg font-bold text-ink">
                  Theoretical Rigor Meets Practical Competency
                </h3>
                <p className="text-xs sm:text-sm font-medium leading-relaxed text-ink-muted">
                  Under Dr. Ogwo's curriculum direction, LIS 814 equips scholars with deep foundational mastery in concept extraction, ANSI/NISO Z39.19 vocabulary control, abstracting typologies, and emerging semantic web architectures.
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => { setActiveTab('lectures'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="inline-flex items-center space-x-1.5 rounded-full bg-accent-600 text-white font-bold px-5 py-2.5 min-h-11 hover:bg-accent-700 transition-all shadow-sm text-xs"
                  >
                    <span>View Curriculum Modules</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => { setActiveTab('sandbox'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="inline-flex items-center space-x-1.5 rounded-full border border-line bg-panel text-ink font-bold px-5 py-2.5 min-h-11 hover:border-accent-300 transition-all text-xs"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-accent-600" aria-hidden="true" />
                    <span>Try Indexing Sandbox</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Info Column (Span 1) */}
        <div className="space-y-6">
          {/* Institutional Affiliations Card */}
          <div className="p-6 rounded-3xl border border-line bg-panel space-y-4 shadow-sm">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-accent-600">
              Institutional Affiliations
            </h3>

            <div className="space-y-4">
              <div className="pb-3 border-b border-line">
                <span className="text-xs font-bold text-ink-muted uppercase tracking-wider block">
                  Current Leadership
                </span>
                <p className="text-xs font-bold text-ink mt-0.5">
                  University Librarian
                </p>
                <p className="text-xs text-ink-muted mt-0.5">
                  Enugu State University of Science and Technology (ESUT), Agbani, Enugu State
                </p>
              </div>

              <div className="pb-3 border-b border-line">
                <span className="text-xs font-bold text-ink-muted uppercase tracking-wider block">
                  Faculty Appointment
                </span>
                <p className="text-xs font-bold text-ink mt-0.5">
                  Lecturer &amp; Senior Researcher
                </p>
                <p className="text-xs text-ink-muted mt-0.5">
                  Department of Library and Information Science, University of Nigeria, Nsukka (UNN)
                </p>
              </div>

              <div>
                <span className="text-xs font-bold text-ink-muted uppercase tracking-wider block">
                  Professional Bodies
                </span>
                <p className="text-xs font-bold text-ink mt-0.5">
                  Active Member
                </p>
                <p className="text-xs text-ink-muted mt-0.5">
                  Nigerian Library Association (NLA) &amp; Certified Librarian (CLN)
                </p>
              </div>
            </div>
          </div>

          {/* Direct Consultation Card */}
          <div className="p-6 rounded-3xl border border-accent-100 bg-accent-50/60 space-y-3 dark:border-accent-900 dark:bg-accent-950/30">
            <span className="text-xs font-extrabold uppercase tracking-wider text-accent-600">
              Academic Support
            </span>
            <h3 className="text-sm font-bold text-ink">
              LIS 814 Study Consultation
            </h3>
            <p className="text-xs text-ink-muted leading-relaxed">
              Have specific questions regarding indexing theory, abstracting guidelines, or course assignments?
            </p>
            <div className="pt-1 space-y-2">
              <a
                href="https://wa.me/2348039473344?text=Hello%20Dr.%20Ogwo%2C%20I%20am%20reaching%20out%20regarding%20LIS%20814%20Indexing%20%26%20Abstracting"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 min-h-11 rounded-xl text-xs font-bold bg-[#25D366] text-white shadow-sm hover:brightness-105 transition-all"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>Message on WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                <span className="sr-only">(opens in new tab)</span>
              </a>
              <a
                href="mailto:Uzoamaka.ogwo@unn.edu.ng"
                className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 min-h-11 rounded-xl text-xs font-bold border border-line bg-panel text-ink hover:border-accent-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-accent-600" aria-hidden="true" />
                <span>Official UNN Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Research Interests Matrix */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-line pb-4">
          <div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent-50 text-accent-700 border border-accent-100 dark:bg-accent-950/50 dark:text-accent-300 dark:border-accent-900">
              Scholarly Focus
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mt-2 text-ink">
              Research Interests &amp; <span className="text-accent-600">Specializations</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-medium max-w-md text-ink-muted">
            Core scholarly domains driving Dr. Ogwo's publications, institutional leadership, and curriculum design.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {researchSpecializations.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-line bg-panel transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-accent-300 shadow-sm"
              >
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-50 text-accent-600 border border-accent-100 dark:bg-accent-950/50 dark:text-accent-300 dark:border-accent-900 flex items-center justify-center font-bold">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-ink-muted bg-panel-2 border border-line px-2.5 py-0.5 rounded-full">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-base font-bold text-ink mb-2">
                  {item.title}
                </h3>
                <p className="text-xs font-medium leading-relaxed text-ink-muted">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
