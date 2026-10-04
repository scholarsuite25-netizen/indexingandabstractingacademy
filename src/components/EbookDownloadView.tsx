import React, { useEffect, useState } from 'react';
import { BookOpen, Search, ChevronRight, ChevronLeft, Bookmark, BookmarkCheck, Sparkles, Type, Download, Printer, SearchX } from 'lucide-react';
import { BookmarkItem } from '../data/courseData';

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
    const formattedChapters = chapters.map(ch => 
`# Chapter ${ch.number}: ${ch.title}
Module: ${ch.module}

${ch.content}
`
    ).join('\n---\n\n');

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

  const chapters = [
    // Module 1: Foundations (Ch 1 - 4)
    {
      number: 1,
      module: 'Module 1: Foundations',
      title: 'Introduction to Indexing and Abstracting in Information Science',
      content: `Indexing and abstracting form the absolute cornerstone of bibliographic control, knowledge organization systems (KOS), and modern information retrieval (IR). As global information output expands exponentially across print and digital media, the fundamental purpose of information systems is not merely to store records, but to provide timely, precise, and exhaustive access to relevant knowledge.

Subject indexing involves the intellectual analysis of a document's content to determine its core "aboutness" rather than incidental word mentions. Abstracting complements this by distilling the essential scope, methodology, findings, and conclusions of research documents into concise, objective prose summaries.

In professional library and information science (LIS 814), mastering indexing and abstracting requires a rigorous understanding of semantic structures, indexing languages, user information needs, and cognitive analysis. Information professionals act as semantic architects, organizing recorded knowledge so that scholarly and practical communities can navigate vast information landscapes without noise and silence.`
    },
    {
      number: 2,
      module: 'Module 1: Foundations',
      title: 'Aboutness vs. Mentions: Intellectual Subject Analysis',
      content: `A central theoretical challenge in subject indexing is distinguishing between what a document mentions and what it is actually about. 

Mentions refer to incidental, contextual, or peripheral occurrences of a concept within a text. For example, a research paper on agricultural economics in Nigeria might briefly mention mobile banking applications as a payment mechanism. However, mobile banking is merely mentioned; the document's primary aboutness is agricultural economics and financial inclusion in West Africa.

Competent indexers must perform deep conceptual analysis to identify principal subjects while suppressing marginal mentions. Failing to distinguish between aboutness and mentions leads to severe noise in information retrieval, where searchers retrieve irrelevant documents that merely touched upon their search terms in passing.`
    },
    {
      number: 3,
      module: 'Module 1: Foundations',
      title: 'Controlled Vocabularies vs. Natural Language Indexing',
      content: `The debate between controlled vocabularies and natural language indexing remains vital in information science.

Controlled vocabularies (such as LCSH, MeSH, and specialized thesauri) utilize authorized, standardized descriptors to represent subjects. This eliminates synonym scatter—the phenomenon where authors use different terms for the same concept (e.g., "automobiles," "cars," "motor vehicles")—ensuring high precision and recall during searches.

Natural language indexing extracts keywords directly from full-text documents or author abstracts without authority control. While natural language offers effortless implementation and reflects everyday user terminology, it suffers from semantic ambiguity, homographs, and synonym scatter. Modern digital libraries frequently integrate both approaches through hybrid search engines.`
    },
    {
      number: 4,
      module: 'Module 1: Foundations',
      title: 'Bibliographic Control and Universal Access',
      content: `Bibliographic control is the systematic listing and organization of recorded knowledge to enable universal identification, location, and access. Rooted in the historical evolution of library catalogs, universal bibliographic control (UBC) envisions an international network where each country assumes responsibility for recording its national imprint.

In the digital era, bibliographic control extends beyond physical books to encompass electronic journals, datasets, institutional repositories, and multimedia archives. Standardized metadata frameworks, persistent identifiers (DOIs), and interoperability protocols ensure that bibliographic control remains robust in distributed web-scale environments.`
    },

    // Module 2: Vocabulary Control & Thesauri (Ch 5 - 8)
    {
      number: 5,
      module: 'Module 2: Vocabulary Control',
      title: 'Principles of Thesaurus Construction (ANSI/NISO Z39.19)',
      content: `The ANSI/NISO Z39.19 standard ("Guidelines for the Construction, Format, and Management of Monolingual Controlled Vocabularies") provides the definitive framework for constructing, formatting, and managing monolingual thesauri. Developed by the National Information Standards Organization (NISO), a professional thesaurus is not merely a dictionary; it is a structured network of semantic relationships designed to guide indexers and searchers to preferred descriptors.

The construction process encompasses 11 major steps, ranging from defining the subject scope and collecting candidate terms from authoritative literature, to establishing relational hierarchies, conducting user testing, and maintaining ongoing vocabulary governance.`
    },
    {
      number: 6,
      module: 'Module 2: Vocabulary Control',
      title: 'Semantic Relationships: Equivalence, Hierarchical & Associative',
      content: `Thesaurus semantics rely on three core relationship categories as formalized in standards:

1. Equivalence Relationships: Governed by USE and UF (Used For) pointers. They link non-preferred synonyms to authorized preferred descriptors (e.g., "Library Automation USE Integrated Library Systems", "Integrated Library Systems UF Library Automation").
2. Hierarchical Relationships: Governed by BT (Broader Term) and NT (Narrower Term) pointers, establishing hypernym/hyponym classifications (e.g., "Academic Libraries BT Libraries", "University Libraries NT Academic Libraries").
3. Associative Relationships: Governed by RT (Related Term), linking concepts that are conceptually connected but neither synonymous nor hierarchical (e.g., "Librarians RT Library Education").`
    },
    {
      number: 7,
      module: 'Module 2: Vocabulary Control',
      title: 'Homographs, Polysemy and Scope Notes',
      content: `Vocabulary control must resolve semantic ambiguity. Homographs occur when two distinct concepts share identical spelling (e.g., "Bank" financial institution vs. geographical river bank). Polysemy involves multiple related meanings of a single word.

To eliminate ambiguity, thesauri employ Scope Notes (SN). Scope notes provide explicit definitions, historical usage boundaries, and instructions on how an indexer should apply a term, ensuring high inter-indexer consistency across large collaborative indexing projects.`
    },
    {
      number: 8,
      module: 'Module 2: Vocabulary Control',
      title: 'Facet Analysis and Polyhierarchical Structures',
      content: `Facet analysis, pioneered by S.R. Ranganathan, involves dissecting complex subjects into fundamental, homogeneous categories (Personality, Matter, Energy, Space, Time). Faceted thesauri provide exceptional structural clarity.

Furthermore, modern thesauri support polyhierarchy, allowing a narrower term to belong to multiple broader categories simultaneously (e.g., "Medical Informatics" possessing broader terms in both "Medicine" and "Computer Science"), accurately reflecting interdisciplinary research.`
    },

    // Module 3: Indexing Systems & Syntax (Ch 9 - 12)
    {
      number: 9,
      module: 'Module 3: Systems & Syntax',
      title: 'Pre-coordinate vs. Post-coordinate Indexing Systems',
      content: `Indexing systems are classified by when term coordination occurs. Pre-coordinate systems synthesize compound subject headings at the time of indexing prior to searching. This preserves precise semantic context, making them ideal for printed indexes and browsable catalogs.

Post-coordinate systems assign atomic descriptors separately to documents. Users combine terms dynamically at search time using Boolean logic (AND, OR, NOT), offering maximum query flexibility and scalability in modern computerized databases.`
    },
    {
      number: 10,
      module: 'Module 3: Systems & Syntax',
      title: 'Ranganathan Chain Indexing and Derived Subject Headings',
      content: `S.R. Ranganathan invented Chain Indexing to derive alphabetical subject headings systematically from classified library schedules. 

The indexer takes a classification class number (representing a hierarchical path from general to specific) and breaks it down step-by-step from right to left. Each step generates an index entry, ensuring that every hierarchical link in the classification schedule is represented in the alphabetical catalog.`
    },
    {
      number: 11,
      module: 'Module 3: Systems & Syntax',
      title: 'Derek Austin PRECIS (Preserved Context Index System)',
      content: `Developed by Derek Austin in the late 1960s for the British National Bibliography (BNB), PRECIS is a computer-assisted pre-coordinate subject indexing system designed to preserve semantic context in linear strings.

PRECIS utilizes a rigorous set of role operators (indicating environment, agent, target, action, etc.) that dictate term manipulation. This guarantees that regardless of which significant term is selected as the lead access point, the reader always understands the exact relational context of the subject string without being tied to any single classification scheme.`
    },
    {
      number: 12,
      module: 'Module 3: Systems & Syntax',
      title: 'Automated Derived Indexing: KWIC, KWOC & Uniterm',
      content: `Automated derived indexing extracts words directly from document titles or texts without human intellectual intervention.

KWIC (Keyword in Context) rotates title words so that each keyword appears alphabetically in the center, surrounded by its immediate text context. KWOC (Keyword out of Context) lists extracted keywords vertically with the complete title displayed alongside. Mortimer Taube's Uniterm indexing introduced coordinate searching using single-word cards and optical coincidence.`
    },

    // Module 4: Strategies, Exhaustivity & Evaluation (Ch 13 - 16)
    {
      number: 13,
      module: 'Module 4: Strategies & Evaluation',
      title: 'Exhaustivity and Specificity in Indexing Strategy',
      content: `Indexing strategy hinges on two critical parameters: Exhaustivity and Specificity.

Exhaustivity refers to the depth and breadth of concept coverage—how thoroughly minor and major concepts within a document are indexed. High exhaustivity assigns numerous terms, maximizing recall. Specificity measures the granularity with which an index term matches a document's precise subject. High specificity assigns narrow, precise descriptors, maximizing precision.`
    },
    {
      number: 14,
      module: 'Module 4: Strategies & Evaluation',
      title: 'Information Retrieval Metrics: Precision and Recall',
      content: `Evaluating information retrieval systems requires rigorous mathematical metrics:

1. Precision: The proportion of retrieved documents that are relevant to the user information need. 
   Formula: (Relevant Retrieved / Total Retrieved) * 100%.
2. Recall: The proportion of relevant documents in the entire collection that are successfully retrieved. 
   Formula: (Relevant Retrieved / Total Relevant in Collection) * 100%.`
    },
    {
      number: 15,
      module: 'Module 4: Strategies & Evaluation',
      title: 'The Cranfield Experiments and Empirical IR Evaluation',
      content: `Cylil Cleverdon's Cranfield Projects (Cranfield I and II), conducted in the 1960s at the College of Aeronautics in the UK, revolutionized information science by pioneering empirical testing of information retrieval and indexing systems.

Cranfield compared various indexing languages (faceted classification, alphabetical subject headings, uniterm) and demonstrated the fundamental inverse relationship between recall and precision: as search queries are broadened to capture more relevant items (recall), noise increases and precision declines. These experiments laid the methodological groundwork for modern search engine evaluation.`
    },
    {
      number: 16,
      module: 'Module 4: Strategies & Evaluation',
      title: 'Inter-Indexer Consistency, Fallout, Noise and Silence',
      content: `System quality is further evaluated through several operational concepts:
- Inter-Indexer Consistency: The degree of agreement between independent indexers assigning terms to the same document.
- Fallout: The proportion of non-relevant documents retrieved out of all non-relevant documents in the collection.
- Noise: Retrieved documents that are irrelevant to the user.
- Silence: Relevant documents existing in the collection that failed to be retrieved.`
    },

    // Module 5: Abstracting Principles & Types (Ch 17 - 20)
    {
      number: 17,
      module: 'Module 5: Abstracting',
      title: 'Abstracting Fundamentals and Types of Abstracts',
      content: `Abstracts provide concise prose summaries of primary documents. They are categorized by function and editorial style:
- Indicative Abstracts: Outline document scope and topics without detailing specific findings (ideal for lengthy reviews or monographs).
- Informative Abstracts: Summarize methodology, data, findings, and conclusions (ideal for empirical research papers).
- Critical Abstracts: Include expert evaluation and critique of methodology and reliability.
- Slanted Abstracts: Emphasize aspects relevant to a specific specialized discipline.`
    },
    {
      number: 18,
      module: 'Module 5: Abstracting',
      title: 'ANSI/NISO Z39.14 Standards for Abstract Preparation',
      content: `The ANSI/NISO Z39.14 standard governs professional abstract writing. Cardinal rules include:
1. Objectivity: Reflecting source content without personal bias or commentary.
2. Self-Containment: Being fully understandable without requiring the reader to consult the full document text.
3. Conciseness: Standard informative abstracts should range between 100 and 250 words, maintaining third-person perspective and passive voice.`
    },
    {
      number: 19,
      module: 'Module 5: Abstracting',
      title: 'The 8-Step Systematic Abstracting Process',
      content: `Preparing a professional abstract requires a disciplined, sequential methodology:
1. Thoroughly read and analyze the primary document.
2. Identify the core subject and problem statement.
3. Determine the primary research purpose and scope.
4. Extract the methodological framework and data gathering techniques.
5. Record major findings and empirical results.
6. Note final conclusions and recommendations.
7. Draft the abstract concisely using third-person passive voice.
8. Review against source text and standards for accuracy and self-containment.`
    },
    {
      number: 20,
      module: 'Module 5: Abstracting',
      title: 'Current Awareness Services (CAS) and Abstracting Bulletins',
      content: `Abstracting and indexing (A&I) services and abstracting bulletins play a vital role in scholarly communication through Current Awareness Services (CAS). By disseminating prompt, high-quality abstracts organized by discipline, they alert researchers rapidly to newly published literature, overcoming the barriers of publication delays and information overload.`
    },

    // Module 6: Digital Libraries, Automated & AI Indexing (Ch 21 - 24)
    {
      number: 21,
      module: 'Module 6: Digital & AI Indexing',
      title: 'Scholarly Citation Indexing: Scopus and Web of Science',
      content: `Citation indexing links citing documents to cited reference works, revolutionizing bibliometrics and research evaluation. Platforms like Scopus and Web of Science provide multidisciplinary citation indexing, enabling scholars to trace intellectual lineages, calculate impact factors, and measure scholarly influence globally.`
    },
    {
      number: 22,
      module: 'Module 6: Digital & AI Indexing',
      title: 'Specialized Abstracting Databases: PubMed, MEDLINE and LISA',
      content: `Domain-specific A&I databases provide deep granular coverage for specialized fields. PubMed and MEDLINE serve as the premier biomedical and life sciences indexing engines utilizing MeSH vocabulary. LISA (Library and Information Science Abstracts) provides definitive abstracting coverage for the LIS profession worldwide.`
    },
    {
      number: 23,
      module: 'Module 6: Digital & AI Indexing',
      title: 'Artificial Intelligence, NLP and Named-Entity Recognition',
      content: `Modern digital libraries harness Artificial Intelligence and Natural Language Processing (NLP). Named-Entity Recognition (NER) algorithms automatically extract and classify people, organizations, locations, and dates from unstructured text. Transformer language models (such as BERT and Gemini) generate semantic embeddings for advanced concept matching.`
    },
    {
      number: 24,
      module: 'Module 6: Digital & AI Indexing',
      title: 'Metadata Harvesting, TF-IDF and Knowledge Graphs',
      content: `Web-scale information systems rely on advanced computational architectures:
- OAI-PMH (Open Archives Initiative Protocol for Metadata Harvesting): Enables interoperable metadata sharing across repositories.
- TF-IDF (Term Frequency-Inverse Document Frequency): Statistical weighting measuring term importance.
- Knowledge Graphs: Semantic networks modeling interconnected entities and concepts.`
    },

    // Module 7: Practical Exercises & Synthesis (Ch 25 - 28)
    {
      number: 25,
      module: 'Module 7: Practical Synthesis',
      title: 'Practical Subject Analysis and Descriptor Assignment Case Study',
      content: `Applying theory to practice requires analyzing complex research titles. For example, in the study "Adoption of Artificial Intelligence in Nigerian University Libraries," the core technological concept is Artificial Intelligence, the institutional setting is University libraries, and the geographic context is Nigeria. Indexers map these to authorized LCSH descriptors: Artificial intelligence, Academic libraries, Information technology, Nigeria.`
    },
    {
      number: 26,
      module: 'Module 7: Practical Synthesis',
      title: 'Calculating and Interpreting Precision and Recall in Operational Systems',
      content: `Practical retrieval audits involve calculating system metrics. If an academic search query retrieves 80 documents, of which 50 are relevant, and the complete collection contains 125 relevant items:
- Precision = (50 / 80) = 62.5%
- Recall = (50 / 125) = 40%
Interpretation: The search is precise but misses 60% of relevant literature, requiring query expansion.`
    },
    {
      number: 27,
      module: 'Module 7: Practical Synthesis',
      title: 'Designing a Specialized Micro-Thesaurus',
      content: `Indexers frequently construct specialized micro-thesauri for institutional repositories. Following ANSI/NISO Z39.19 standards, designers establish preferred terms, non-preferred entry terms (USE/UF), broader/narrower hierarchies (BT/NT), and associative links (RT) accompanied by rigorous scope notes.`
    },
    {
      number: 28,
      module: 'Module 7: Practical Synthesis',
      title: 'The Future of Bibliographic Control in the Semantic Web Era',
      content: `As we look toward the future of library and information science, traditional principles of bibliographic control, vocabulary governance, and intellectual abstracting remain profoundly relevant. Supervised AI, linked data, and semantic web technologies empower information professionals to deliver unprecedented knowledge discovery for global scholarship.`
    }
  ];

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
    return ch.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
           ch.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
           ch.module.toLowerCase().includes(searchQuery.toLowerCase());
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

          {/* Chapter Body Content */}
          <div className={`max-w-prose space-y-6 leading-relaxed font-medium text-ink ${fontClass}`}>
            {currentChapter.content.split('\n\n').map((paragraph, pIdx) => (
              <p key={pIdx}>
                {paragraph}
              </p>
            ))}
          </div>

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
