export interface Lecture {
  id: string;
  moduleId: string;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  readTime: string;
  summary: string;
  content: string[];
  keyTakeaways: string[];
}

export interface SupplementalReading {
  id: string;
  moduleId: string;
  title: string;
  author: string;
  source: string;
  type: 'Article' | 'Standard' | 'Whitepaper' | 'Case Study';
  abstract: string;
}

export interface ModuleData {
  id: string;
  number: number;
  title: string;
  description: string;
  iconName: string;
  lectures: Lecture[];
  readings: SupplementalReading[];
}

export const COURSE_MODULES: ModuleData[] = [
  {
    id: 'mod-1',
    number: 1,
    title: 'Foundations of Indexing and Abstracting (Chapters 1–3)',
    description: 'Comprehensive study of Chapter 1 (Meaning of Indexing & Abstracting), Chapter 2 (Objectives of Subject Indexing), and Chapter 3 (Indexing Languages & Controlled Vocabularies).',
    iconName: 'BookOpen',
    lectures: [
      {
        id: 'lec-1-1',
        moduleId: 'mod-1',
        title: 'Chapter 1: Introduction to Indexing and Abstracting',
        subtitle: 'Meaning of Indexing, Abstracting, and Their Interrelationship',
        category: 'Lectures',
        tags: ['Indexing', 'Abstracting', 'Foundations'],
        readTime: '12 min read',
        summary: 'Indexing analyzes subject content and assigns descriptors for retrieval, acting as a bridge between document content and user information needs. Abstracting prepares concise, accurate representations of essential contents.',
        content: [
          'Indexing is the systematic process of analysing the subject content of an information resource and representing that content through selected terms, phrases, symbols, or descriptors for the purpose of efficient information retrieval.',
          'An index acts as a vital bridge between the information contained in a document and the information need of a user. For example, a document titled "The Impact of Artificial Intelligence on University Libraries in Nigeria" may be indexed under: Artificial intelligence, University libraries, Nigeria, Digital libraries, and Information technology.',
          'Abstracting is the process of preparing a brief and accurate representation of the essential contents of a document. An abstract informs the potential user what a document is about without necessarily requiring the reader to peruse the entire full text.',
          'Interrelationship: Indexing represents document content using concise terms or symbols; abstracting represents document content using structured sentences or paragraphs. Both activities facilitate intellectual access to information repositories.'
        ],
        keyTakeaways: [
          'Indexing exposes core conceptual aboutness beyond simple title words.',
          'Abstracts provide concise summaries covering purpose, methodology, findings, and conclusions.',
          'Both indexing and abstracting are mutually reinforcing pillars of information organization.'
        ]
      },
      {
        id: 'lec-1-2',
        moduleId: 'mod-1',
        title: 'Chapter 2: Objectives of Subject Indexing',
        subtitle: 'Why Subject Indexing Matters in Library and Information Science',
        category: 'Lectures',
        tags: ['Objectives', 'Subject Indexing'],
        readTime: '10 min read',
        summary: 'Subject indexing answers "What is this document about?", distinguishing between incidental mentions and principal subjects while meeting core retrieval objectives.',
        content: [
          'Subject indexing is the intellectual process of determining the subject or subjects represented in a document and assigning appropriate index terms. It directly answers the fundamental question: "What is this document about?"',
          'A competent indexer must rigorously distinguish between what a document merely mentions and what the document is actually about. For example, a research paper may mention Nigeria, libraries, AI, and students, but the principal subject may specifically be Artificial intelligence applications in university libraries.',
          'Major Objectives of Subject Indexing: 1. To facilitate information retrieval by enabling users to locate relevant documents quickly. 2. To represent document content concisely through standardized terms. 3. To improve access when title or author is unknown. 4. To save users time by eliminating fruitless searching. 5. To improve precision by filtering out irrelevant hits. 6. To support Selective Dissemination of Information (SDI).'
        ],
        keyTakeaways: [
          'Distinguishing between incidental mentions and principal subjects is critical for high precision.',
          'Subject indexing dramatically reduces search time across large collections.'
        ]
      },
      {
        id: 'lec-1-3',
        moduleId: 'mod-1',
        title: 'Chapter 3: Indexing Languages (Controlled vs. Natural Language)',
        subtitle: 'LCSH, MeSH, Thesauri, Controlled Vocabularies, and Natural Language',
        category: 'Lectures',
        tags: ['Indexing Languages', 'Controlled Vocabulary', 'LCSH', 'MeSH'],
        readTime: '14 min read',
        summary: 'An indexing language is a system of terms, symbols, and rules used to represent subject content. Controlled vocabularies promote consistency, while natural language offers search engine flexibility.',
        content: [
          'An indexing language is a structured system of terms, symbols, and rules used to represent the subject content of information resources. Prominent examples include Library of Congress Subject Headings (LCSH), Medical Subject Headings (MeSH), Thesauri, Classification schemes, Controlled vocabularies, and Keyword systems.',
          'A controlled vocabulary is an authorized, restricted list of terms used consistently for indexing. For example, instead of allowing Cars, Automobiles, Motor vehicles, and Motorcars to scatter search results, a controlled vocabulary selects Automobiles as the preferred term.',
          'Natural language refers to ordinary words and expressions used by authors and information users (e.g., Computer, Mobile phone, Social media, Artificial intelligence). Natural-language indexing extracts keywords directly from document text.',
          'Comparison Table: Controlled Vocabulary uses authorized terms, promotes consistency, reduces synonym problems, and requires maintenance (common in professional databases). Natural language uses ordinary words, may produce variation, but is easier to implement (common in search engines and full-text systems).'
        ],
        keyTakeaways: [
          'Controlled vocabularies eliminate synonym scatter by designating preferred descriptors.',
          'Natural language indexing powers modern full-text search engines.'
        ]
      }
    ],
    readings: [
      {
        id: 'read-1-1',
        moduleId: 'mod-1',
        title: 'LIS 814 Official Course Curriculum and Module Specifications',
        author: 'Department of Library and Information Science',
        source: 'Postgraduate LIS Programme',
        type: 'Standard',
        abstract: 'Comprehensive syllabus and foundational lecture notes for LIS 814 Indexing and Abstracting.'
      }
    ],
  },
  {
    id: 'mod-2',
    number: 2,
    title: 'Subject Analysis & Vocabulary Control (Chapters 4–5)',
    description: 'Detailed study of Chapter 4 (Thesaurus Construction: BT, NT, RT, USE, UF) and Chapter 5 (Semantics and Syntax in Indexing).',
    iconName: 'Network',
    lectures: [
      {
        id: 'lec-2-1',
        moduleId: 'mod-2',
        title: 'Chapter 4: Thesaurus Construction',
        subtitle: 'Meaning of a Thesaurus, Relational Operators, and Construction Steps',
        category: 'Lectures',
        tags: ['Thesaurus', 'BT', 'NT', 'RT', 'USE'],
        readTime: '15 min read',
        summary: 'A thesaurus is a structured vocabulary showing term relationships (BT, NT, RT, USE, UF). Explores the 11-step construction methodology.',
        content: [
          'In information retrieval, a thesaurus is a structured vocabulary that shows relationships among terms used for indexing and retrieval. It identifies preferred terms, non-preferred terms, broader terms, narrower terms, and related terms.',
          'Standard Abbreviations: BT = Broader Term, NT = Narrower Term, RT = Related Term, USE = Use this preferred term, UF = Used For.',
          'Example for University Libraries: University Libraries -> BT: Academic Libraries, NT: Digital University Libraries, NT: Medical University Libraries, RT: University Education, RT: Librarians, UF: Higher Education Libraries.',
          '11 Steps in Thesaurus Construction: 1. Define subject field. 2. Collect candidate terms. 3. Identify synonyms. 4. Identify homonyms. 5. Select preferred terms. 6. Establish hierarchical (BT/NT) relationships. 7. Establish associative (RT) relationships. 8. Establish equivalence (USE/UF) relationships. 9. Arrange terms systematically. 10. Test the thesaurus. 11. Revise and update regularly.'
        ],
        keyTakeaways: [
          'Thesauri provide structured semantic maps for subject indexing and query expansion.',
          'BT/NT, RT, and USE/UF are the foundational relational operators.'
        ]
      },
      {
        id: 'lec-2-2',
        moduleId: 'mod-2',
        title: 'Chapter 5: Semantics and Syntax in Indexing',
        subtitle: 'Meaning, Arrangement, and Combination of Terms',
        category: 'Lectures',
        tags: ['Semantics', 'Syntax', 'Indexing Languages'],
        readTime: '12 min read',
        summary: 'Semantics concerns word meaning and synonym control. Syntax concerns term arrangement and combination (role ordering in pre-coordinate strings).',
        content: [
          'Semantics concerns the meaning of words and terms. In indexing, semantic control is vital because different words may express the same concept (e.g., Automobile vs. Car vs. Motor vehicle). The indexer must determine whether these should be treated as synonyms.',
          'Syntax concerns the arrangement and combination of terms. For example, "Libraries - Nigeria - Automation" may convey a different focus than "Automation - Libraries - Nigeria" depending on the indexing system.',
          'Syntax becomes particularly crucial in pre-coordinate indexing systems where concepts are combined during indexing.'
        ],
        keyTakeaways: [
          'Semantics controls concept meaning and synonymy.',
          'Syntax controls term order, citation order, and relational role strings.'
        ]
      }
    ],
    readings: [
      {
        id: 'read-2-1',
        moduleId: 'mod-2',
        title: 'ANSI/NISO Z39.19 - Thesaurus Construction Standards',
        author: 'NISO',
        source: 'National Information Standards Organization',
        type: 'Standard',
        abstract: 'Standards for establishing semantic equivalence, hierarchy, and associative links in thesauri.'
      }
    ],
  },
  {
    id: 'mod-3',
    number: 3,
    title: 'Indexing Systems & Syntax (Chapters 6–11)',
    description: 'Comprehensive study of Chapter 6 (Pre-coordinate Indexing), Chapter 7 (Post-coordinate Indexing), Chapter 8 (Chain Indexing), Chapter 9 (Cyclic Indexing), Chapter 10 (SLIC), and Chapter 11 (PRECIS).',
    iconName: 'Layers',
    lectures: [
      {
        id: 'lec-3-1',
        moduleId: 'mod-3',
        title: 'Chapters 6 & 7: Pre-coordinate and Post-coordinate Indexing',
        subtitle: 'Pre-entry concept synthesis vs post-entry boolean combination',
        category: 'Lectures',
        tags: ['Pre-coordinate', 'Post-coordinate', 'Indexing Systems'],
        readTime: '15 min read',
        summary: 'Pre-coordinate indexing combines concepts at indexing time (e.g., University Libraries - Automation - Nigeria). Post-coordinate indexing assigns terms separately for boolean combination at search time.',
        content: [
          'Pre-coordinate indexing: Concepts are combined at the time of indexing before storage or searching (e.g., University Libraries - Automation - Nigeria). Characteristics: requires skilled indexers, provides high specificity and structured retrieval.',
          'Post-coordinate indexing: Individual concepts are assigned separately and combined by the searcher at retrieval time (e.g., Artificial Intelligence AND University Libraries AND Nigeria). Characteristics: flexible searching, highly suitable for large computerized databases.'
        ],
        keyTakeaways: [
          'Pre-coordinate systems pre-synthesize subject strings.',
          'Post-coordinate systems empower users with boolean query flexibility.'
        ]
      },
      {
        id: 'lec-3-2',
        moduleId: 'mod-3',
        title: 'Chapters 8–11: Chain Indexing, Cyclic Indexing, SLIC, and PRECIS',
        subtitle: 'Advanced subject indexing systems and context preservation',
        category: 'Lectures',
        tags: ['Chain Indexing', 'PRECIS', 'SLIC', 'Cyclic Indexing'],
        readTime: '16 min read',
        summary: 'Exploring specialized indexing systems: Chain indexing (Ranganathan), Cyclic indexing, SLIC, and PRECIS (Preserved Context Index System by Derek Austin).',
        content: [
          'Chain Indexing: Associated with S.R. Ranganathan. Derives subject entries from the hierarchical structure of a classification scheme, moving from specific to broader concepts.',
          'Cyclic Indexing: Each significant component of a compound subject is brought into the leading position to create alternative access points (e.g., AI - Libraries - Nigeria; Libraries - AI - Nigeria; Nigeria - AI - Libraries).',
          'SLIC (Selective Listing in Combination): Designed to provide systematic access through controlled combinations of concepts.',
          'PRECIS (Preserved Context Index System): Developed by Derek Austin for the British National Bibliography. Preserves semantic context and relationships among terms in a subject statement using role operators.'
        ],
        keyTakeaways: [
            'Chain indexing links classification schedules to alphabetical subject entries.',
            'Cyclic indexing and SLIC generate multiple rotating access points.',
            'PRECIS preserves complex context through role operators.'
        ]
      }
    ],
    readings: [
      {
        id: 'read-3-1',
        moduleId: 'mod-3',
        title: 'PRECIS Manual: Preserved Context Index System Principles',
        author: 'Derek Austin',
        source: 'British Library Bibliographic Services',
        type: 'Standard',
        abstract: 'Defines the syntax, role operators, and context preservation rules of PRECIS indexing.'
      }
    ],
  },
  {
    id: 'mod-4',
    number: 4,
    title: 'Indexing Strategies & Evaluation (Chapters 12–15)',
    description: 'Detailed study of Chapter 12 (Exhaustivity and Specificity), Chapter 13 (Derived Indexes), Chapter 14 (Evaluation of Indexes), and Chapter 15 (Precision and Recall).',
    iconName: 'BarChart2',
    lectures: [
      {
        id: 'lec-4-1',
        moduleId: 'mod-4',
        title: 'Chapter 12: Indexing Strategies (Exhaustivity and Specificity)',
        subtitle: 'Depth of analysis versus precision of terms',
        category: 'Lectures',
        tags: ['Exhaustivity', 'Specificity', 'Strategies'],
        readTime: '12 min read',
        summary: 'Exhaustivity refers to the number of concepts represented in an index record. Specificity refers to how precisely a term represents the exact subject.',
        content: [
          'Exhaustivity refers to the number of concepts represented in an index record. Highly exhaustive indexing assigns many relevant concepts; low exhaustivity assigns only major concepts.',
          'For example, a document about "Artificial Intelligence, digital libraries, university students and research support in Nigeria" could be indexed exhaustively under all four concepts.',
          'Specificity refers to the degree to which an index term accurately represents the exact subject of a document. A highly specific term is preferred where the indexing vocabulary permits.'
        ],
        keyTakeaways: [
          'Exhaustivity controls breadth of concept coverage.',
          'Specificity controls precision of term matching.'
        ]
      },
      {
        id: 'lec-4-2',
        moduleId: 'mod-4',
        title: 'Chapters 13–15: Derived Indexes, Evaluation, Precision, and Recall',
        subtitle: 'Automatic term extraction and retrieval effectiveness metrics',
        category: 'Lectures',
        tags: ['Derived Indexing', 'Precision', 'Recall', 'Evaluation'],
        readTime: '15 min read',
        summary: 'Derived indexes extract terms automatically from titles, abstracts, or full text. Evaluation measures index effectiveness using Precision and Recall formulas.',
        content: [
          'Derived Indexing: Index terms are obtained automatically or semi-automatically from words occurring in the document (titles, abstracts, full text, author keywords, captions). Advantages: fast, economical, automatable. Disadvantages: may include irrelevant words or miss context.',
          'Evaluation Criteria for an Index: Accuracy, Consistency, Specificity, Exhaustivity, Usability, Currency, and Coverage.',
          'Precision = (Relevant Retrieved Documents / Total Retrieved Documents) * 100%. If search retrieves 100 docs and 70 are relevant, Precision = 70%.',
          'Recall = (Relevant Retrieved Documents / Total Relevant Documents in Collection) * 100%.'
        ],
        keyTakeaways: [
          'Derived indexing automates term extraction from document text.',
          'Precision measures exactness; Recall measures completeness.'
        ]
      }
    ],
    readings: [
      {
        id: 'read-4-1',
        moduleId: 'mod-4',
        title: 'Evaluation of Information Retrieval Systems: Precision and Recall Metrics',
        author: 'Cleverdon, C.W.',
        source: 'Journal of Documentation',
        type: 'Article',
        abstract: 'Seminal paper on testing index retrieval effectiveness.'
      }
    ],
  },
  {
    id: 'mod-5',
    number: 5,
    title: 'Abstracting Principles, Types & Techniques (Chapters 16–20)',
    description: 'Comprehensive study of Chapter 16 (Introduction to Abstracting), Chapter 17 (Types of Abstracts), Chapter 18 (Abstracting Techniques & Steps), Chapter 19 (Characteristics of a Good Abstract), and Chapter 20 (Uses of Abstracts).',
    iconName: 'FileText',
    lectures: [
      {
        id: 'lec-5-1',
        moduleId: 'mod-5',
        title: 'Chapters 16 & 17: Meaning and Types of Abstracts',
        subtitle: 'Indicative, Informative, Critical, Author, and Slanted abstracts',
        category: 'Lectures',
        tags: ['Abstract Types', 'Indicative', 'Informative', 'Critical'],
        readTime: '14 min read',
        summary: 'An abstract is a brief representation of document essentials. Explores Indicative, Informative, Indicative-Informative, Critical, Author, and Slanted abstract types.',
        content: [
          'Meaning of an Abstract: A brief representation of the essential contents of a document. It may describe purpose, scope, method, findings, conclusions, and recommendations.',
          'Types of Abstracts: 1. Indicative Abstract: Indicates what the document contains without detailed findings (answers "What does this document discuss?"). 2. Informative Abstract: Provides important details including findings and conclusions. 3. Indicative-Informative: Combines both features. 4. Critical Abstract: Summary together with assessment/evaluation of strengths, weaknesses, methodology, and reliability. 5. Author\'s Abstract: Prepared by the original author. 6. Slanted Abstract: Prepared to emphasize information relevant to a particular audience.'
        ],
        keyTakeaways: [
          'Indicative abstracts describe topic scope; informative abstracts detail actual findings.',
          'Critical abstracts provide expert evaluation and commentary.'
        ]
      },
      {
        id: 'lec-5-2',
        moduleId: 'mod-5',
        title: 'Chapters 18–20: Abstracting Techniques, Characteristics, and Uses',
        subtitle: '8 steps in abstracting, good abstract criteria, and uses',
        category: 'Lectures',
        tags: ['Abstracting Techniques', 'Uses of Abstracts'],
        readTime: '13 min read',
        summary: 'Steps in preparing an abstract (read, identify subject, purpose, methodology, findings, conclusions, write concisely, review). Characteristics of good abstracts and uses.',
        content: [
          'Steps in Preparing an Abstract: Step 1: Read the document (title, intro, objectives, methodology, findings, conclusion). Step 2: Identify main subject. Step 3: Identify purpose. Step 4: Identify methodology. Step 5: Identify major findings. Step 6: Identify conclusions. Step 7: Write concisely. Step 8: Review the abstract.',
          'Characteristics of a Good Abstract: Accurate, Clear, Concise, Objective, Self-contained, Coherent, Informative, Grammatically correct, Faithful to original.',
          'Uses of Abstracts: Information retrieval, Literature searching, Current Awareness Services (CAS), Selective Dissemination of Information (SDI), Bibliographic databases, Research, Reference services, Digital libraries.'
        ],
        keyTakeaways: [
          'Rigorous 8-step methodology ensures high-quality abstracts.',
          'Objectivity and self-containment are paramount.'
        ]
      }
    ],
    readings: [
      {
        id: 'read-5-1',
        moduleId: 'mod-5',
        title: 'ANSI/NISO Z39.14 - Guidelines for Abstracts',
        author: 'NISO',
        source: 'American National Standards Institute',
        type: 'Standard',
        abstract: 'Standard prescribing how to write, format, and structure abstracts.'
      }
    ],
  },
  {
    id: 'mod-6',
    number: 6,
    title: 'Digital Libraries, Automated & AI Indexing (Chapters 21–24)',
    description: 'Comprehensive study of Chapter 21 (Indexing and Abstracting Services), Chapter 22 (Digital Libraries), Chapter 23 (Automatic Indexing), and Chapter 24 (Artificial Intelligence in Indexing and Abstracting).',
    iconName: 'Cpu',
    lectures: [
      {
        id: 'lec-6-1',
        moduleId: 'mod-6',
        title: 'Chapters 21 & 22: Services and Digital Libraries',
        subtitle: 'Scopus, Web of Science, PubMed, LISA, and digital library systems',
        category: 'Lectures',
        tags: ['Services', 'Digital Libraries', 'Scopus', 'PubMed'],
        readTime: '13 min read',
        summary: 'Examines major indexing and abstracting services (Scopus, Web of Science, PubMed, LISA, ERIC) and their integration into modern digital libraries.',
        content: [
          'Indexing and Abstracting Services provide organized access to scholarly and professional literature. Examples: Scopus, Web of Science, PubMed/MEDLINE, ERIC, Chemical Abstracts, Library and Information Science Abstracts (LISA), EBSCO, ProQuest.',
          'Digital Libraries have transformed indexing and abstracting through full-text indexing, metadata harvesting, automatic classification, machine learning, natural language processing, semantic search, knowledge graphs, and automatic abstract generation.'
        ],
        keyTakeaways: [
          'I&A services like Scopus and PubMed are essential for scholarly literature discovery.',
          'Digital libraries leverage NLP and knowledge graphs for semantic discovery.'
        ]
      },
      {
        id: 'lec-6-2',
        moduleId: 'mod-6',
        title: 'Chapters 23 & 24: Automatic Indexing and Artificial Intelligence',
        subtitle: 'Computer algorithms, machine learning, and AI in information organization',
        category: 'Lectures',
        tags: ['Automatic Indexing', 'AI', 'Machine Learning'],
        readTime: '15 min read',
        summary: 'Automatic indexing uses computer algorithms to extract terms from titles, abstracts, and full text. AI assists with classification, entity recognition, and abstract generation.',
        content: [
          'Automatic Indexing: Uses computer algorithms to identify and assign terms from titles, abstracts, full text, keywords, metadata, and citations. Advantages: rapid processing, large-scale indexing, reduced manual labor, consistency.',
          'Artificial Intelligence in Indexing and Abstracting: AI assists with automatic subject classification, keyword extraction, named-entity recognition, semantic indexing, automatic abstracting, metadata generation, similarity detection, recommendation systems, and question answering.',
          'Professional Role: Librarians and information professionals remain vital for quality control, ethical oversight, vocabulary management, and contextual interpretation.'
        ],
        keyTakeaways: [
          'Automatic indexing enables rapid large-scale processing of digital corpora.',
          'AI enhances NLP, entity extraction, and automated abstracting.'
        ]
      }
    ],
    readings: [
      {
        id: 'read-6-1',
        moduleId: 'mod-6',
        title: 'Artificial Intelligence and Natural Language Processing in Digital Information Systems',
        author: 'Dr. Marcus Vance',
        source: 'Journal of Documentation',
        type: 'Article',
        abstract: 'Review of machine learning applications in automated document indexing and summarization.'
      }
    ],
  },
  {
    id: 'mod-7',
    number: 7,
    title: 'Practical Exercises & Course Review (Chapter 25)',
    description: 'Comprehensive study of Chapter 25 (Practical Indexing and Abstracting Exercises) and course synthesis.',
    iconName: 'Award',
    lectures: [
      {
        id: 'lec-7-1',
        moduleId: 'mod-7',
        title: 'Chapter 25: Practical Indexing and Abstracting Exercises',
        subtitle: 'Applying theoretical principles to academic document samples',
        category: 'Lectures',
        tags: ['Practical Exercises', 'Case Studies'],
        readTime: '12 min read',
        summary: 'Hands-on practical exercises demonstrating how to extract index terms and draft abstracts for research papers in Library and Information Science.',
        content: [
          'Exercise 1 Sample Title: "Use of Social Media by University Students for Academic Research in Nigeria".',
          'Possible Index Terms: Social media, University students, Academic research, Nigeria.',
          'Practical Application: Students apply subject analysis, exhaustivity, and specificity principles to assign controlled descriptors and draft informative abstracts for diverse academic articles.'
        ],
        keyTakeaways: [
          'Practical application solidifies mastery of indexing rules and abstracting guidelines.',
          'Real-world document analysis prepares students for professional cataloging and information architecture.'
        ]
      }
    ],
    readings: [
      {
        id: 'read-7-1',
        moduleId: 'mod-7',
        title: 'Practical Indexing Workbook and Case Studies',
        author: 'LIS 814 Departmental Faculty',
        source: 'University Academic Press',
        type: 'Case Study',
        abstract: 'Compilation of document samples and exercises for indexing and abstracting practice.'
      }
    ],
  }
];

export interface BookmarkItem {
  id: string;
  type: 'lecture' | 'reading' | 'module';
  title: string;
  subtitle: string;
  path: string;
}
