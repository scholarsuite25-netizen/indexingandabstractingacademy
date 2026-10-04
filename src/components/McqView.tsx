import React, { useEffect, useMemo, useRef, useState } from 'react';
import { CheckCircle2, XCircle, X, Award, RotateCcw, ArrowRight, Printer, Sparkles, Check } from 'lucide-react';

interface MCQItem {
  id: string;
  module: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface McqViewProps {
  darkMode: boolean;
}

interface McqProgress {
  answers?: number[];
  index?: number;
  finished?: boolean;
  answered?: number;
  total?: number;
  correct?: number;
  updatedAt?: string;
}

const MCQ_STORAGE_KEY = 'indexmaster_mcq';

const readMcqProgress = (): McqProgress | null => {
  try {
    const raw = localStorage.getItem(MCQ_STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? (parsed as McqProgress) : null;
  } catch {
    return null;
  }
};

// 100 comprehensive questions covering all LIS 814 chapters and modules
export const MCQ_QUESTIONS: MCQItem[] = [
  // Module 1: Foundations (Q1 - Q15)
  {
    id: 'm1-q1',
    module: 'Module 1: Foundations',
    question: 'What is the primary objective of subject indexing?',
    options: [
      'To list books by author last name alphabetically',
      'To analyze document aboutness and assign terms for efficient retrieval',
      'To determine the physical binding quality of books',
      'To establish book pricing for acquisitions'
    ],
    correctAnswer: 1,
    explanation: 'Subject indexing analyzes conceptual content (aboutness) to connect users with relevant information.'
  },
  {
    id: 'm1-q2',
    module: 'Module 1: Foundations',
    question: 'How does abstracting differ fundamentally from indexing?',
    options: [
      'Abstracting uses single keywords while indexing uses paragraphs',
      'Abstracting provides a structured summary of essential document contents, whereas indexing uses concise descriptors',
      'There is no difference in library and information science',
      'Indexing is performed only by authors while abstracting is done by computers'
    ],
    correctAnswer: 1,
    explanation: 'Abstracting provides a concise prose summary, while indexing assigns discrete terms/descriptors.'
  },
  {
    id: 'm1-q3',
    module: 'Module 1: Foundations',
    question: 'What is the distinction between what a document mentions and what it is about?',
    options: [
      'Mentioned items are indexed; aboutness is ignored',
      'Principal subject represents core aboutness, whereas mentions are incidental or peripheral topics',
      'There is no theoretical distinction',
      'Mentions are only recorded in critical reviews'
    ],
    correctAnswer: 1,
    explanation: 'Subject indexing focuses on the principal subject (aboutness) rather than every incidental word mentioned.'
  },
  {
    id: 'm1-q4',
    module: 'Module 1: Foundations',
    question: 'What is a controlled vocabulary in information retrieval?',
    options: [
      'An authorized, restricted list of terms used consistently for indexing',
      'Slang terms used by library patrons on social media',
      'Unchecked keywords extracted randomly from full text',
      'A list of forbidden books in a collection'
    ],
    correctAnswer: 0,
    explanation: 'Controlled vocabularies eliminate synonym scatter by enforcing standardized preferred terms.'
  },
  {
    id: 'm1-q5',
    module: 'Module 1: Foundations',
    question: 'Which of the following is a key advantage of natural language indexing?',
    options: [
      'It eliminates all synonyms automatically',
      'It reflects the exact terminology used by authors and searchers without requiring authority files',
      'It requires rigorous manual thesaurus maintenance',
      'It prevents semantic ambiguity entirely'
    ],
    correctAnswer: 1,
    explanation: 'Natural language utilizes ordinary words used by authors and users, making it easy to implement.'
  },
  {
    id: 'm1-q6',
    module: 'Module 1: Foundations',
    question: 'What is synonym scatter in information storage and retrieval?',
    options: [
      'When a book is physically misplaced on library shelves',
      'When synonymous concepts are expressed using different terms, scattering search results across multiple headings',
      'When database servers experience network downtime',
      'When authors publish articles in different countries'
    ],
    correctAnswer: 1,
    explanation: 'Synonym scatter occurs when similar concepts are represented by different words, missing relevant hits.'
  },
  {
    id: 'm1-q7',
    module: 'Module 1: Foundations',
    question: 'Which organization maintains Library of Congress Subject Headings (LCSH)?',
    options: [
      'International Federation of Library Associations (IFLA)',
      'Library of Congress',
      'National Information Standards Organization (NISO)',
      'UNESCO'
    ],
    correctAnswer: 1,
    explanation: 'LCSH is maintained and updated by the Library of Congress.'
  },
  {
    id: 'm1-q8',
    module: 'Module 1: Foundations',
    question: 'What does MeSH stand for in indexing and abstracting?',
    options: [
      'Modern Electronic Subject Headings',
      'Medical Subject Headings',
      'Metadata System Hierarchy',
      'Multilingual Educational Subject Headings'
    ],
    correctAnswer: 1,
    explanation: 'MeSH is the controlled vocabulary thesaurus produced by the National Library of Medicine.'
  },
  {
    id: 'm1-q9',
    module: 'Module 1: Foundations',
    question: 'What is an indexing language?',
    options: [
      'A computer programming language like Python or Java',
      'A structured system of terms, symbols, and rules used to represent subject content',
      'Spoken language used by indexers during meetings',
      'Foreign translation dictionaries'
    ],
    correctAnswer: 1,
    explanation: 'An indexing language provides the semantic and syntactic framework for document representation.'
  },
  {
    id: 'm1-q10',
    module: 'Module 1: Foundations',
    question: 'Why is user profiling important in selective dissemination of information (SDI)?',
    options: [
      'To track library fines and overdue books',
      'To match incoming indexed documents with user information needs',
      'To design library building architecture',
      'To calculate book binding costs'
    ],
    correctAnswer: 1,
    explanation: 'SDI profiles match newly indexed records against personalized user information interests.'
  },
  {
    id: 'm1-q11',
    module: 'Module 1: Foundations',
    question: 'What role does bibliographic control play in libraries?',
    options: [
      'Controlling staff attendance',
      'Systematic listing and organization of recorded knowledge for universal access',
      'Regulating air conditioning in archive rooms',
      'Censoring unauthorized publications'
    ],
    correctAnswer: 1,
    explanation: 'Bibliographic control ensures information resources can be identified, located, and accessed.'
  },
  {
    id: 'm1-q12',
    module: 'Module 1: Foundations',
    question: 'What is a descriptor in subject indexing?',
    options: [
      'An authorized term chosen from a thesaurus to represent a subject',
      'A physical description of book dimensions',
      'The name of the bookbinder',
      'A barcode label'
    ],
    correctAnswer: 0,
    explanation: 'A descriptor is the preferred term selected from a controlled vocabulary.'
  },
  {
    id: 'm1-q13',
    module: 'Module 1: Foundations',
    question: 'What is the primary goal of information retrieval systems?',
    options: [
      'To store as many books as possible without cataloging',
      'To retrieve all relevant documents while excluding non-relevant ones efficiently',
      'To generate maximum revenue from book sales',
      'To restrict access to authorized personnel only'
    ],
    correctAnswer: 1,
    explanation: 'IR systems aim to maximize retrieval effectiveness by balancing precision and recall.'
  },
  {
    id: 'm1-q14',
    module: 'Module 1: Foundations',
    question: 'Which of the following describes an entry term?',
    options: [
      'A non-preferred term in a thesaurus that points the user to the preferred descriptor (USE)',
      'The front door of the library building',
      'The first sentence of an abstract',
      'The ISBN number'
    ],
    correctAnswer: 0,
    explanation: 'Entry terms are non-preferred terms (UF) that guide searchers to the authorized descriptor.'
  },
  {
    id: 'm1-q15',
    module: 'Module 1: Foundations',
    question: 'What is concept indexing?',
    options: [
      'Indexing physical page numbers only',
      'Indexing underlying ideas and intellectual concepts rather than exact string matches',
      'Translating books into foreign languages',
      'Counting words in a document'
    ],
    correctAnswer: 1,
    explanation: 'Concept indexing captures the intellectual essence of a document.'
  },

  // Module 2: Subject Analysis & Vocabulary Control (Q16 - Q30)
  {
    id: 'm2-q16',
    module: 'Module 2: Vocabulary Control',
    question: 'What does BT stand for in thesaurus construction?',
    options: ['Broad Topic', 'Broader Term', 'Bibliographic Thesaurus', 'Basic Terminology'],
    correctAnswer: 1,
    explanation: 'BT stands for Broader Term, representing a hierarchical hypernym relationship.'
  },
  {
    id: 'm2-q17',
    module: 'Module 2: Vocabulary Control',
    question: 'What does NT stand for in a thesaurus?',
    options: ['Narrower Term', 'New Technology', 'Non-Traditional', 'Named Term'],
    correctAnswer: 0,
    explanation: 'NT stands for Narrower Term, representing a hyponym relationship.'
  },
  {
    id: 'm2-q18',
    module: 'Module 2: Vocabulary Control',
    question: 'What does RT stand for in thesaurus semantics?',
    options: ['Reference Text', 'Related Term', 'Retrieval Technique', 'Random Term'],
    correctAnswer: 1,
    explanation: 'RT indicates an associative (non-hierarchical) relationship between two terms.'
  },
  {
    id: 'm2-q19',
    module: 'Module 2: Vocabulary Control',
    question: 'What is the function of "USE" and "UF" in a thesaurus?',
    options: [
      'To indicate publishing dates',
      'To establish equivalence relationships between preferred (USE) and non-preferred (UF) terms',
      'To calculate book weight',
      'To track borrowing history'
    ],
    correctAnswer: 1,
    explanation: 'USE and UF govern equivalence relationships, mapping synonyms to preferred descriptors.'
  },
  {
    id: 'm2-q20',
    module: 'Module 2: Vocabulary Control',
    question: 'According to ANSI/NISO Z39.19, how many major steps are typically outlined for thesaurus construction?',
    options: ['3 steps', '5 steps', '11 steps', '20 steps'],
    correctAnswer: 2,
    explanation: 'ANSI/NISO Z39.19 outlines 11 systematic steps for building professional thesauri.'
  },
  {
    id: 'm2-q21',
    module: 'Module 2: Vocabulary Control',
    question: 'What is a homograph in vocabulary control?',
    options: [
      'Two words that are spelled identically but have different meanings and etymologies',
      'Words that sound alike but have different spellings',
      'Translated words in foreign languages',
      'Acronyms and abbreviations'
    ],
    correctAnswer: 0,
    explanation: 'Homographs share identical spelling but differ in meaning (e.g., "Bank" financial vs. river).'
  },
  {
    id: 'm2-q22',
    module: 'Module 2: Vocabulary Control',
    question: 'What is semantic control in indexing languages?',
    options: [
      'Controlling the physical temperature of server rooms',
      'Ensuring consistency in term meaning and resolving ambiguity or synonymy',
      'Regulating font sizes in printed indexes',
      'Managing library budgets'
    ],
    correctAnswer: 1,
    explanation: 'Semantic control manages word meanings, synonyms, and homographs.'
  },
  {
    id: 'm2-q23',
    module: 'Module 2: Vocabulary Control',
    question: 'What is syntactic control in indexing?',
    options: [
      'The rules governing term combination, citation order, and relational role strings',
      'Checking spelling errors in book titles',
      'Formatting bibliography citations in APA style',
      'Setting database passwords'
    ],
    correctAnswer: 0,
    explanation: 'Syntax governs how terms are combined and ordered in index strings.'
  },
  {
    id: 'm2-q24',
    module: 'Module 2: Vocabulary Control',
    question: 'Which of the following represents a hierarchical relationship (BT/NT)?',
    options: [
      'Libraries (BT) -> University Libraries (NT)',
      'Libraries (BT) -> Librarians (RT)',
      'Automobiles (USE) -> Cars (UF)',
      'Computers -> Software'
    ],
    correctAnswer: 0,
    explanation: 'University Libraries are a narrower species of Libraries.'
  },
  {
    id: 'm2-q25',
    module: 'Module 2: Vocabulary Control',
    question: 'What is facet analysis in indexing and classification?',
    options: [
      'Breaking down subjects into fundamental categories or facets (e.g., Personality, Matter, Energy, Space, Time)',
      'Analyzing book cover designs',
      'Measuring library foot traffic',
      'Evaluating staff performance'
    ],
    correctAnswer: 0,
    explanation: 'Facet analysis dissects complex subjects into fundamental, homogeneous categories.'
  },
  {
    id: 'm2-q26',
    module: 'Module 2: Vocabulary Control',
    question: 'What is polyhierarchy in thesaurus design?',
    options: [
      'When a term has more than one broader term (BT) in different conceptual hierarchies',
      'When a book has multiple authors',
      'When a library has multiple branches',
      'When an index has multiple volumes'
    ],
    correctAnswer: 0,
    explanation: 'Polyhierarchy allows a narrower term to belong to multiple broader categories.'
  },
  {
    id: 'm2-q27',
    module: 'Module 2: Vocabulary Control',
    question: 'What is a micro-thesaurus?',
    options: [
      'A thesaurus limited to a specialized, narrow subject domain',
      'A thesaurus printed in very small font',
      'A digital thesaurus stored on a microchip',
      'An incomplete thesaurus'
    ],
    correctAnswer: 0,
    explanation: 'Micro-thesauri cover specialized subject sub-domains with high granularity.'
  },
  {
    id: 'm2-q28',
    module: 'Module 2: Vocabulary Control',
    question: 'Why are scope notes included in thesauri?',
    options: [
      'To explain the exact intended meaning, usage boundaries, and application rules of a term',
      'To list book prices',
      'To record borrower names',
      'To indicate book page counts'
    ],
    correctAnswer: 0,
    explanation: 'Scope notes clarify term definitions and boundaries for indexers and searchers.'
  },
  {
    id: 'm2-q29',
    module: 'Module 2: Vocabulary Control',
    question: 'What is top term (TT) in a hierarchical thesaurus structure?',
    options: [
      'The highest-level broad category heading in a hierarchy',
      'The title page of a book',
      'The most popular book in the library',
      'The header of a web page'
    ],
    correctAnswer: 0,
    explanation: 'Top terms sit at the root of thesaurus hierarchies.'
  },
  {
    id: 'm2-q30',
    module: 'Module 2: Vocabulary Control',
    question: 'What is term validation during thesaurus maintenance?',
    options: [
      'Reviewing newly suggested terms against existing vocabulary structures to prevent redundancy',
      'Checking user library cards',
      'Validating software license keys',
      'Testing book binding strength'
    ],
    correctAnswer: 0,
    explanation: 'Term validation ensures consistency and prevents vocabulary bloat.'
  },

  // Module 3: Indexing Systems & Syntax (Q31 - Q45)
  {
    id: 'm3-q31',
    module: 'Module 3: Systems & Syntax',
    question: 'Who developed PRECIS (Preserved Context Index System)?',
    options: ['S.R. Ranganathan', 'Derek Austin', 'Melvil Dewey', 'Charles Cutter'],
    correctAnswer: 1,
    explanation: 'Derek Austin developed PRECIS for the British National Bibliography.'
  },
  {
    id: 'm3-q32',
    module: 'Module 3: Systems & Syntax',
    question: 'What is the core characteristic of pre-coordinate indexing?',
    options: [
      'Concepts are synthesized into compound subject headings at the time of indexing',
      'Terms are combined by searchers using boolean operators at search time',
      'Indexes are generated entirely without human intervention',
      'Indexing is performed after book disposal'
    ],
    correctAnswer: 0,
    explanation: 'Pre-coordinate systems pre-synthesize subject strings prior to searching.'
  },
  {
    id: 'm3-q33',
    module: 'Module 3: Systems & Syntax',
    question: 'What is post-coordinate indexing?',
    options: [
      'Combining individual term descriptors at search time using boolean logic (AND, OR, NOT)',
      'Indexing books after they leave the library',
      'Arranging books by publication date',
      'Postal delivery of library catalogs'
    ],
    correctAnswer: 0,
    explanation: 'Post-coordinate systems allow users to combine atomic terms dynamically.'
  },
  {
    id: 'm3-q34',
    module: 'Module 3: Systems & Syntax',
    question: 'What is chain indexing associated with?',
    options: [
      'S.R. Ranganathan and derived subject entries from classification schedules',
      'Locking books with security chains',
      'Network server chaining',
      'Bibliographic citation chaining'
    ],
    correctAnswer: 0,
    explanation: 'S.R. Ranganathan invented chain indexing to derive alphabetical subject headings from classification.'
  },
  {
    id: 'm3-q35',
    module: 'Module 3: Systems & Syntax',
    question: 'What is cyclic indexing?',
    options: [
      'Rotating components of a compound subject string so each significant term occupies the leading position in turn',
      'Returning books in a recycling bin',
      'Recycling library furniture',
      'Monthly database backups'
    ],
    correctAnswer: 0,
    explanation: 'Cyclic indexing rotates subject components to provide multiple access points.'
  },
  {
    id: 'm3-q36',
    module: 'Module 3: Systems & Syntax',
    question: 'What does SLIC stand for in indexing systems?',
    options: [
      'Systematic Library Indexing Code',
      'Selective Listing in Combination',
      'Standardized Language Information Control',
      'Subject List and Classification'
    ],
    correctAnswer: 1,
    explanation: 'SLIC stands for Selective Listing in Combination.'
  },
  {
    id: 'm3-q37',
    module: 'Module 3: Systems & Syntax',
    question: 'What is the role of role operators in PRECIS?',
    options: [
      'To indicate the grammatical and contextual role of terms in a subject string',
      'To assign job titles to library staff',
      'To calculate computer processing speed',
      'To determine book prices'
    ],
    correctAnswer: 0,
    explanation: 'Role operators in PRECIS govern term manipulation and context preservation.'
  },
  {
    id: 'm3-q38',
    module: 'Module 3: Systems & Syntax',
    question: 'Which bibliographic agency originally adopted PRECIS?',
    options: [
      'Library of Congress',
      'British National Bibliography (BNB)',
      'National Agricultural Library',
      'UNESCO Library'
    ],
    correctAnswer: 1,
    explanation: 'PRECIS was developed and used by the British National Bibliography.'
  },
  {
    id: 'm3-q39',
    module: 'Module 3: Systems & Syntax',
    question: 'What is citation order in pre-coordinate indexing?',
    options: [
      'The prescribed sequence in which component terms of a complex subject are arranged',
      'The order in which authors are cited in a bibliography',
      'The chronological order of book publications',
      'The alphabetical order of book publishers'
    ],
    correctAnswer: 0,
    explanation: 'Citation order defines the fixed sequence of terms in compound subject headings.'
  },
  {
    id: 'm3-q40',
    module: 'Module 3: Systems & Syntax',
    question: 'What is KWIC (Keyword in Context) indexing?',
    options: [
      'An automated indexing method displaying keywords surrounded by their immediate context from the title',
      'A manual cataloging method for rare manuscripts',
      'A system for tracking book loans',
      'An acronym for library security'
    ],
    correctAnswer: 0,
    explanation: 'KWIC indexes rotate title words to display keywords in their natural context.'
  },
  {
    id: 'm3-q41',
    module: 'Module 3: Systems & Syntax',
    question: 'What is KWOC (Keyword out of Context) indexing?',
    options: [
      'Keywords are extracted and listed vertically with the full title displayed alongside',
      'Keywords printed outside the library building',
      'Keywords deleted from the database',
      'Authors names listed separately'
    ],
    correctAnswer: 0,
    explanation: 'KWOC lists extracted keywords with the corresponding complete title.'
  },
  {
    id: 'm3-q42',
    module: 'Module 3: Systems & Syntax',
    question: 'What is uniterm indexing?',
    options: [
      'A post-coordinate indexing system created by Mortimer Taube using single-word descriptors',
      'Indexing books published in a single university term',
      'Using only one term per book',
      'Indexing university textbooks'
    ],
    correctAnswer: 0,
    explanation: 'Uniterm indexing uses coordinate indexing with single-term cards.'
  },
  {
    id: 'm3-q43',
    module: 'Module 3: Systems & Syntax',
    question: 'What is roger/coordinate indexing with peek-a-boo cards?',
    options: [
      'Optical coincidence cards punched with holes for term coordination',
      'A children library game',
      'A barcode scanner',
      'A microfilm reader'
    ],
    correctAnswer: 0,
    explanation: 'Peek-a-boo cards (optical coincidence) allowed manual post-coordinate searching.'
  },
  {
    id: 'm3-q44',
    module: 'Module 3: Systems & Syntax',
    question: 'What is a composite subject heading?',
    options: [
      'A heading combining two or more distinct concepts (e.g., Libraries - Automation)',
      'A heading written in multiple languages',
      'A heading with missing words',
      'A temporary heading'
    ],
    correctAnswer: 0,
    explanation: 'Composite headings represent multi-faceted subjects in pre-coordinate systems.'
  },
  {
    id: 'm3-q45',
    module: 'Module 3: Systems & Syntax',
    question: 'What is the main limitation of pre-coordinate indexing in large electronic databases?',
    options: [
      'Fixed citation order restricts unexpected search queries and boolean flexibility',
      'They are too inexpensive',
      'They require zero training',
      'They cannot be printed on paper'
    ],
    correctAnswer: 0,
    explanation: 'Fixed citation orders limit flexible multi-facet searching compared to post-coordinate systems.'
  },

  // Module 4: Strategies & Evaluation (Q46 - Q60)
  {
    id: 'm4-q46',
    module: 'Module 4: Strategies & Evaluation',
    question: 'What does exhaustivity mean in indexing strategy?',
    options: [
      'The depth and breadth of concept coverage (number of terms assigned to a document)',
      'How tired the indexer is after work',
      'The physical weight of the indexed book',
      'The speed of the computer processor'
    ],
    correctAnswer: 0,
    explanation: 'Exhaustivity refers to how thoroughly all minor and major concepts in a document are indexed.'
  },
  {
    id: 'm4-q47',
    module: 'Module 4: Strategies & Evaluation',
    question: 'What is specificity in subject indexing?',
    options: [
      'The precision and granularity with which a term matches the exact subject of a document',
      'Writing specific book reviews',
      'Specifying the library opening hours',
      'Listing author biographies'
    ],
    correctAnswer: 0,
    explanation: 'Specificity measures how closely index term granularity matches document subject granularity.'
  },
  {
    id: 'm4-q48',
    module: 'Module 4: Strategies & Evaluation',
    question: 'What is the formula for Precision in information retrieval evaluation?',
    options: [
      'Relevant Retrieved / Total Retrieved * 100%',
      'Total Retrieved / Total Relevant in Collection * 100%',
      'Irrelevant Retrieved / Total Documents * 100%',
      'Database Size / Query Time'
    ],
    correctAnswer: 0,
    explanation: 'Precision measures exactness: Relevant Retrieved divided by Total Retrieved.'
  },
  {
    id: 'm4-q49',
    module: 'Module 4: Strategies & Evaluation',
    question: 'What is the formula for Recall in information retrieval evaluation?',
    options: [
      'Relevant Retrieved / Total Relevant Documents in Collection * 100%',
      'Total Retrieved / Relevant Retrieved * 100%',
      'Non-relevant Retrieved / Total Retrieved * 100%',
      'Query Time / Document Count'
    ],
    correctAnswer: 0,
    explanation: 'Recall measures completeness: Relevant Retrieved divided by Total Relevant in the entire collection.'
  },
  {
    id: 'm4-q50',
    module: 'Module 4: Strategies & Evaluation',
    question: 'What is the inverse relationship typically observed between Precision and Recall?',
    options: [
      'As recall increases, precision tends to decrease, and vice versa',
      'Precision and recall always increase together at the exact same rate',
      'Precision and recall have no mathematical relationship',
      'Recall always equals precision in digital libraries'
    ],
    correctAnswer: 0,
    explanation: 'Broader retrieval increases recall but introduces noise, lowering precision.'
  },
  {
    id: 'm4-q51',
    module: 'Module 4: Strategies & Evaluation',
    question: 'What was the significance of the Cranfield Project (Cyril Cleverdon)?',
    options: [
      'It pioneered empirical testing and evaluation of information retrieval and indexing systems',
      'It designed the first public library building in England',
      'It invented paper books',
      'It created the Dewey Decimal Classification'
    ],
    correctAnswer: 0,
    explanation: 'The Cranfield tests established foundational evaluation methodology for IR and indexing effectiveness.'
  },
  {
    id: 'm4-q52',
    module: 'Module 4: Strategies & Evaluation',
    question: 'What is derived indexing?',
    options: [
      'Extracting index terms automatically or semi-automatically from document text, titles, or abstracts',
      'Translating indexes from foreign languages',
      'Hand-writing library catalog cards',
      'Deriving book prices from publisher catalogs'
    ],
    correctAnswer: 0,
    explanation: 'Derived indexing extracts existing words from text rather than assigning controlled terms.'
  },
  {
    id: 'm4-q53',
    module: 'Module 4: Strategies & Evaluation',
    question: 'What is assigned indexing?',
    options: [
      'Intellectual assignment of controlled terms from a thesaurus by a human indexer or AI classifier',
      'Assigning seating to library patrons',
      'Assigning barcoding numbers to books',
      'Assigning office duties to staff'
    ],
    correctAnswer: 0,
    explanation: 'Assigned indexing involves intellectual conceptual analysis and vocabulary mapping.'
  },
  {
    id: 'm4-q54',
    module: 'Module 4: Strategies & Evaluation',
    question: 'What is inter-indexer consistency?',
    options: [
      'The degree of agreement between two or more independent indexers assigning terms to the same document',
      'Consistency in library opening hours',
      'Consistency in book binding materials',
      'Consistency in staff salary payments'
    ],
    correctAnswer: 0,
    explanation: 'Inter-indexer consistency measures how similarly different indexers index the same item.'
  },
  {
    id: 'm4-q55',
    module: 'Module 4: Strategies & Evaluation',
    question: 'What is fallout in information retrieval evaluation?',
    options: [
      'The proportion of non-relevant documents retrieved out of all non-relevant documents in the collection',
      'Radioactive decay in library archives',
      'Books falling off library shelves',
      'Staff turnover rates'
    ],
    correctAnswer: 0,
    explanation: 'Fallout measures false positive retrieval proportion.'
  },
  {
    id: 'm4-q56',
    module: 'Module 4: Strategies & Evaluation',
    question: 'What is noise in information retrieval results?',
    options: [
      'Retrieved documents that are irrelevant to the user information need',
      'Loud talking in the library reading room',
      'Computer fan noise',
      'Audiobooks playing too loudly'
    ],
    correctAnswer: 0,
    explanation: 'Noise refers to irrelevant retrieved hits.'
  },
  {
    id: 'm4-q57',
    module: 'Module 4: Strategies & Evaluation',
    question: 'What is silence in information retrieval?',
    options: [
      'Relevant documents existing in the collection that failed to be retrieved by the search query',
      'Quiet study rules in the library',
      'Network disconnection',
      'Unpublished manuscripts'
    ],
    correctAnswer: 0,
    explanation: 'Silence occurs when relevant records are missed by the search.'
  },
  {
    id: 'm4-q58',
    module: 'Module 4: Strategies & Evaluation',
    question: 'Why is currency important in indexing and abstracting services?',
    options: [
      'To ensure prompt indexing and availability of newly published research literature',
      'To collect library membership fees in foreign currencies',
      'To pay book publishers quickly',
      'To track historical book values'
    ],
    correctAnswer: 0,
    explanation: 'Currency ensures users have timely access to current research.'
  },
  {
    id: 'm4-q59',
    module: 'Module 4: Strategies & Evaluation',
    question: 'What does index coverage measure?',
    options: [
      'The proportion of relevant journals, disciplines, and documents covered by an indexing service',
      'The physical floor space of the library',
      'Insurance coverage for library books',
      'Wi-Fi signal range'
    ],
    correctAnswer: 0,
    explanation: 'Coverage evaluates how comprehensively a service indexes target literature.'
  },
  {
    id: 'm4-q60',
    module: 'Module 4: Strategies & Evaluation',
    question: 'What is indexing lag?',
    options: [
      'The time delay between the publication of a document and its appearance in an indexing service',
      'Slow internet connection speeds',
      'Delayed book shipments from overseas',
      'Staff coffee break duration'
    ],
    correctAnswer: 0,
    explanation: 'Indexing lag measures publishing-to-indexing turnaround time.'
  },

  // Module 5: Abstracting Principles & Types (Q61 - Q75)
  {
    id: 'm5-q61',
    module: 'Module 5: Abstracting',
    question: 'What is an indicative abstract?',
    options: [
      'An abstract that indicates the scope and topics of a document without detailing specific findings or data',
      'An abstract that provides exhaustive numerical results',
      'An abstract written entirely in code',
      'A critical book review'
    ],
    correctAnswer: 0,
    explanation: 'Indicative abstracts outline what a document discusses without detailing findings.'
  },
  {
    id: 'm5-q62',
    module: 'Module 5: Abstracting',
    question: 'What is an informative abstract?',
    options: [
      'An abstract that summarizes both the scope and the major findings, data, and conclusions of a document',
      'A brief one-sentence title description',
      'A publisher advertisement',
      'A table of contents'
    ],
    correctAnswer: 0,
    explanation: 'Informative abstracts present substantive findings and conclusions.'
  },
  {
    id: 'm5-q63',
    module: 'Module 5: Abstracting',
    question: 'What is a critical abstract?',
    options: [
      'An abstract that includes an evaluation or critique of the document methodology, validity, and reliability',
      'An abstract written when the abstractor is angry',
      'An emergency evacuation summary',
      'An incomplete summary'
    ],
    correctAnswer: 0,
    explanation: 'Critical abstracts evaluate document quality and methodology.'
  },
  {
    id: 'm5-q64',
    module: 'Module 5: Abstracting',
    question: 'What is a slanted abstract?',
    options: [
      'An abstract tailored to highlight aspects relevant to a specific specialized audience or discipline',
      'An abstract printed diagonally on paper',
      'A biased summary with false information',
      'An unreadable abstract'
    ],
    correctAnswer: 0,
    explanation: 'Slanted abstracts emphasize points of interest for a particular user group.'
  },
  {
    id: 'm5-q65',
    module: 'Module 5: Abstracting',
    question: 'What is an author abstract?',
    options: [
      'An abstract prepared by the original author of the research paper',
      'An abstract written about the author biography',
      'An anonymous summary',
      'A publisher summary'
    ],
    correctAnswer: 0,
    explanation: 'Author abstracts are written by the creators of the primary document.'
  },
  {
    id: 'm5-q66',
    module: 'Module 5: Abstracting',
    question: 'According to ANSI/NISO Z39.14, what is a cardinal rule of abstract writing?',
    options: [
      'The abstract must be self-contained and objective',
      'The abstract must be longer than the original paper',
      'The abstract must include personal opinions of the abstractor',
      'The abstract must contain complex mathematical equations'
    ],
    correctAnswer: 0,
    explanation: 'ANSI/NISO Z39.14 mandates objectivity and self-containment in abstracts.'
  },
  {
    id: 'm5-q67',
    module: 'Module 5: Abstracting',
    question: 'What is the typical recommended word length for standard informative abstracts?',
    options: ['100 to 250 words', '2,000 to 5,000 words', '10 words', '500 to 1,000 words'],
    correctAnswer: 0,
    explanation: 'Standard informative abstracts typically range from 100 to 250 words.'
  },
  {
    id: 'm5-q68',
    module: 'Module 5: Abstracting',
    question: 'Which of the following represents the correct logical sequence in preparing an abstract?',
    options: [
      'Read document -> Identify purpose/scope -> Identify methodology -> Identify findings -> Draft -> Review',
      'Draft abstract -> Guess title -> Publish without reading',
      'Write conclusion first -> Write introduction -> Never read body text',
      'Copy table of contents verbatim'
    ],
    correctAnswer: 0,
    explanation: 'Systematic abstracting requires reading, analyzing purpose, methods, findings, drafting, and reviewing.'
  },
  {
    id: 'm5-q69',
    module: 'Module 5: Abstracting',
    question: 'What does "self-contained" mean regarding an abstract?',
    options: [
      'It is fully understandable on its own without requiring the reader to consult the full document text',
      'It is stored inside a locked filing cabinet',
      'It requires reading the entire book first',
      'It has its own power source'
    ],
    correctAnswer: 0,
    explanation: 'A self-contained abstract communicates core meaning independently.'
  },
  {
    id: 'm5-q70',
    module: 'Module 5: Abstracting',
    question: 'Why should an abstract avoid introducing outside information not present in the original document?',
    options: [
      'To maintain strict fidelity, objectivity, and truthfulness to the source document',
      'To save computer memory',
      'To make the abstract longer',
      'To confuse readers'
    ],
    correctAnswer: 0,
    explanation: 'Abstracts must reflect only the contents of the primary document.'
  },
  {
    id: 'm5-q71',
    module: 'Module 5: Abstracting',
    question: 'What is an extractive summary/abstract in automated text processing?',
    options: [
      'An abstract formed by extracting key sentences verbatim from the source document',
      'An abstract extracted from library invoice records',
      'An abstract translated from Latin',
      'An abstract written by hand'
    ],
    correctAnswer: 0,
    explanation: 'Extractive summaries pull key sentences directly from source texts.'
  },
  {
    id: 'm5-q72',
    module: 'Module 5: Abstracting',
    question: 'What is an abstracting bulletin?',
    options: [
      'A periodical publication containing collections of abstracts organized by subject discipline',
      'A bulletin board in the library lobby',
      'A staff newsletter',
      'A book catalog'
    ],
    correctAnswer: 0,
    explanation: 'Abstracting bulletins disseminate current research abstracts across disciplines.'
  },
  {
    id: 'm5-q73',
    module: 'Module 5: Abstracting',
    question: 'What role do abstracts play in Current Awareness Services (CAS)?',
    options: [
      'They alert researchers rapidly to newly published literature in their fields',
      'They notify patrons of overdue library fines',
      'They track building maintenance schedules',
      'They record book borrowing statistics'
    ],
    correctAnswer: 0,
    explanation: 'CAS utilizes abstracts to keep researchers updated on recent publications.'
  },
  {
    id: 'm5-q74',
    module: 'Module 5: Abstracting',
    question: 'Why are passive voice and third-person perspective traditionally favored in abstract writing?',
    options: [
      'To enhance objectivity and focus on the research findings rather than the researchers',
      'To make reading more difficult',
      'To comply with ancient grammar laws',
      'To reduce word count'
    ],
    correctAnswer: 0,
    explanation: 'Third-person and passive voice emphasize objective scientific findings.'
  },
  {
    id: 'm5-q75',
    module: 'Module 5: Abstracting',
    question: 'What is an indicative-informative abstract?',
    options: [
      'An abstract that treats major core findings informatively while summarizing minor sections indicatively',
      'An abstract with no content',
      'An abstract written by two authors',
      'A fictional story summary'
    ],
    correctAnswer: 0,
    explanation: 'It combines indicative treatment for minor parts and informative treatment for major findings.'
  },

  // Module 6: Digital Libraries, Automated & AI Indexing (Q76 - Q90)
  {
    id: 'm6-q76',
    module: 'Module 6: Digital & AI Indexing',
    question: 'Which of the following is a premier multidisciplinary indexing and abstracting database?',
    options: ['Scopus and Web of Science', 'Local Public Library Catalog', 'Phone Directory', 'Dictionary of Quotations'],
    correctAnswer: 0,
    explanation: 'Scopus and Web of Science are leading global citation indexing databases.'
  },
  {
    id: 'm6-q77',
    module: 'Module 6: Digital & AI Indexing',
    question: 'What is PubMed primarily used for in information retrieval?',
    options: [
      'Indexing and abstracting biomedical and life sciences literature (MEDLINE)',
      'Indexing automobile repair manuals',
      'Storing legal case files',
      'Managing university financial records'
    ],
    correctAnswer: 0,
    explanation: 'PubMed/MEDLINE is the premier database for biomedical literature.'
  },
  {
    id: 'm6-q78',
    module: 'Module 6: Digital & AI Indexing',
    question: 'What is LISA (Library and Information Science Abstracts)?',
    options: [
      'An international abstracting and indexing tool covering library science and information services',
      'A software for printing library barcodes',
      'A database for musical recordings',
      'A computer operating system'
    ],
    correctAnswer: 0,
    explanation: 'LISA is the definitive abstracting tool for library and information science literature.'
  },
  {
    id: 'm6-q79',
    module: 'Module 6: Digital & AI Indexing',
    question: 'How do digital libraries utilize full-text indexing?',
    options: [
      'By indexing every searchable word within document texts to enable deep search query retrieval',
      'By indexing only book cover images',
      'By printing all books on paper',
      'By restricting searches to author names only'
    ],
    correctAnswer: 0,
    explanation: 'Full-text indexing indexes every word in digital documents.'
  },
  {
    id: 'm6-q80',
    module: 'Module 6: Digital & AI Indexing',
    question: 'What is Named-Entity Recognition (NER) in AI-powered indexing?',
    options: [
      'An AI technique identifying and classifying entities (people, organizations, locations, dates) in text',
      'Recognizing book binding glue types',
      'Identifying library staff names',
      'Counting paragraph lengths'
    ],
    correctAnswer: 0,
    explanation: 'NER extracts structured entities from unstructured text automatically.'
  },
  {
    id: 'm6-q81',
    module: 'Module 6: Digital & AI Indexing',
    question: 'What role do transformer language models (like BERT and Gemini) play in modern indexing?',
    options: [
      'Generating semantic embeddings, automatic classification, and contextual keyword extraction',
      'Repairing damaged book spines',
      'Managing library air conditioning',
      'Designing library websites'
    ],
    correctAnswer: 0,
    explanation: 'Transformer models provide advanced semantic understanding and automated indexing.'
  },
  {
    id: 'm6-q82',
    module: 'Module 6: Digital & AI Indexing',
    question: 'What is automatic classification in digital repositories?',
    options: [
      'Computer algorithms assigning incoming documents to predefined subject categories or taxonomies',
      'Books sorting themselves on shelves automatically',
      'Patrons returning books to correct bins',
      'Manual shelf reading'
    ],
    correctAnswer: 0,
    explanation: 'Automatic classification categorizes documents using machine learning.'
  },
  {
    id: 'm6-q83',
    module: 'Module 6: Digital & AI Indexing',
    question: 'What is metadata harvesting in digital library federations?',
    options: [
      'Collecting and aggregating metadata records from multiple distributed repositories using OAI-PMH',
      'Harvesting crops in agricultural libraries',
      'Downloading copyrighted e-books illegally',
      'Deleting old database records'
    ],
    correctAnswer: 0,
    explanation: 'Metadata harvesting aggregates records across distributed repositories (e.g., OAI-PMH).'
  },
  {
    id: 'm6-q84',
    module: 'Module 6: Digital & AI Indexing',
    question: 'What is semantic search in digital libraries?',
    options: [
      'Search based on conceptual meaning and intent rather than exact keyword string matching',
      'Searching only for synonyms of the word "search"',
      'Searching by book color',
      'Searching library operating hours'
    ],
    correctAnswer: 0,
    explanation: 'Semantic search understands user intent and conceptual relationships.'
  },
  {
    id: 'm6-q85',
    module: 'Module 6: Digital & AI Indexing',
    question: 'What is citation indexing?',
    options: [
      'Indexing documents based on the bibliographic references/citations they contain to track scholarly impact',
      'Indexing book prices',
      'Counting citation punctuation marks',
      'Alphabetizing author bibliographies'
    ],
    correctAnswer: 0,
    explanation: 'Citation indexing links citing documents to cited documents.'
  },
  {
    id: 'm6-q86',
    module: 'Module 6: Digital & AI Indexing',
    question: 'What is the Open Access (OA) movement\'s impact on indexing and abstracting?',
    options: [
      'It has massively expanded the volume of accessible scholarly literature requiring indexing and discovery',
      'It has eliminated the need for indexing entirely',
      'It restricted literature to print only',
      'It increased subscription fees'
    ],
    correctAnswer: 0,
    explanation: 'Open access has vastly increased digital scholarly output requiring indexing.'
  },
  {
    id: 'm6-q87',
    module: 'Module 6: Digital & AI Indexing',
    question: 'What is TF-IDF in information retrieval and text mining?',
    options: [
      'Term Frequency-Inverse Document Frequency, a statistical measure used to evaluate word importance in a document',
      'Total File Indexing Data Format',
      'Text Formatting and Document Filing',
      'Transfer Function for Digital Files'
    ],
    correctAnswer: 0,
    explanation: 'TF-IDF weighs term importance relative to document and corpus frequency.'
  },
  {
    id: 'm6-q88',
    module: 'Module 6: Digital & AI Indexing',
    question: 'What is a knowledge graph in modern information systems?',
    options: [
      'A network of interconnected entities, concepts, and semantic relationships representing domain knowledge',
      'A bar chart of library book loans',
      'A flowchart of library staff hierarchy',
      'An organizational budget chart'
    ],
    correctAnswer: 0,
    explanation: 'Knowledge graphs model semantic relationships between entities and concepts.'
  },
  {
    id: 'm6-q89',
    module: 'Module 6: Digital & AI Indexing',
    question: 'Why do human information professionals remain indispensable alongside AI indexing?',
    options: [
      'For quality control, vocabulary governance, ethical oversight, and contextual interpretation',
      'To operate the coffee machine',
      'To carry heavy books',
      'To turn off lights at night'
    ],
    correctAnswer: 0,
    explanation: 'Humans provide vital governance, quality control, and nuanced interpretation.'
  },
  {
    id: 'm6-q90',
    module: 'Module 6: Digital & AI Indexing',
    question: 'What is OAI-PMH (Open Archives Initiative Protocol for Metadata Harvesting)?',
    options: [
      'A standardized protocol used to harvest metadata descriptions of records across repositories',
      'An artificial intelligence chatbot protocol',
      'A library security protocol',
      'A book binding specification'
    ],
    correctAnswer: 0,
    explanation: 'OAI-PMH facilitates interoperable metadata harvesting across digital repositories.'
  },

  // Module 7: Practical Exercises & Synthesis (Q91 - Q100)
  {
    id: 'm7-q91',
    module: 'Module 7: Practical Synthesis',
    question: 'When indexing a paper titled "Adoption of Artificial Intelligence in Nigerian University Libraries", which term represents the core technology?',
    options: ['Artificial intelligence', 'University libraries', 'Nigeria', 'Students'],
    correctAnswer: 0,
    explanation: 'Artificial intelligence is the core subject technology.'
  },
  {
    id: 'm7-q92',
    module: 'Module 7: Practical Synthesis',
    question: 'In the same title ("Adoption of Artificial Intelligence in Nigerian University Libraries"), what represents the institutional setting?',
    options: ['University libraries', 'Smartphones', 'Agriculture', 'Legal courts'],
    correctAnswer: 0,
    explanation: 'University libraries form the institutional setting.'
  },
  {
    id: 'm7-q93',
    module: 'Module 7: Practical Synthesis',
    question: 'What geographic context is specified in that title?',
    options: ['Nigeria', 'United Kingdom', 'Canada', 'Australia'],
    correctAnswer: 0,
    explanation: 'Nigeria is the geographic focus.'
  },
  {
    id: 'm7-q94',
    module: 'Module 7: Practical Synthesis',
    question: 'If a search retrieves 50 documents, and 40 of them are relevant, what is the Precision?',
    options: ['80%', '50%', '40%', '100%'],
    correctAnswer: 0,
    explanation: 'Precision = (40 / 50) * 100% = 80%.'
  },
  {
    id: 'm7-q95',
    module: 'Module 7: Practical Synthesis',
    question: 'If there are 100 total relevant documents in a collection, and a search successfully retrieves 40 of them, what is the Recall?',
    options: ['40%', '80%', '100%', '20%'],
    correctAnswer: 0,
    explanation: 'Recall = (40 / 100) * 100% = 40%.'
  },
  {
    id: 'm7-q96',
    module: 'Module 7: Practical Synthesis',
    question: 'Which standard governs thesaurus construction principles?',
    options: ['ANSI/NISO Z39.19', 'ISO 9001', 'AACR2', 'RDA'],
    correctAnswer: 0,
    explanation: 'ANSI/NISO Z39.19 is the definitive standard for thesaurus design.'
  },
  {
    id: 'm7-q97',
    module: 'Module 7: Practical Synthesis',
    question: 'Which standard governs guidelines for abstracts?',
    options: ['ANSI/NISO Z39.14', 'ANSI/NISO Z39.19', 'ISBN Standard', 'ISSN Standard'],
    correctAnswer: 0,
    explanation: 'ANSI/NISO Z39.14 governs guidelines for abstracts.'
  },
  {
    id: 'm7-q98',
    module: 'Module 7: Practical Synthesis',
    question: 'What is the primary benefit of pre-coordinate indexing strings?',
    options: [
      'High specificity and context preservation in printed or browsable subject indexes',
      'Infinite database speed',
      'Zero human effort',
      'Automatic translation'
    ],
    correctAnswer: 0,
    explanation: 'Pre-coordinate strings preserve context and specificity for structured browsing.'
  },
  {
    id: 'm7-q99',
    module: 'Module 7: Practical Synthesis',
    question: 'What is the primary benefit of post-coordinate indexing?',
    options: [
      'Maximum boolean search flexibility and scalability in computerized information systems',
      'Fixed card catalog arrangement',
      'Paper conservation',
      'Elimination of abstracts'
    ],
    correctAnswer: 0,
    explanation: 'Post-coordinate indexing enables flexible boolean coordination at search time.'
  },
  {
    id: 'm7-q100',
    module: 'Module 7: Practical Synthesis',
    question: 'What is the ultimate goal of IndexMaster LIS 814?',
    options: [
      'To master professional indexing, abstracting, vocabulary control, and information retrieval excellence',
      'To memorize book titles',
      'To build library shelves',
      'To sell textbooks'
    ],
    correctAnswer: 0,
    explanation: 'IndexMaster aims to provide world-class mastery of LIS 814 indexing and abstracting principles.'
  }
];

export const McqView: React.FC<McqViewProps> = () => {
  const questions = MCQ_QUESTIONS;

  const restored = useMemo(() => {
    const progress = readMcqProgress();
    const answers: { [key: number]: number } = {};
    const stored = Array.isArray(progress?.answers) ? progress.answers : [];
    stored.forEach((value, i) => {
      if (
        i >= 0 &&
        i < questions.length &&
        typeof value === 'number' &&
        Number.isInteger(value) &&
        value >= 0 &&
        value < questions[i].options.length
      ) {
        answers[i] = value;
      }
    });
    const rawIndex =
      typeof progress?.index === 'number' && Number.isFinite(progress.index)
        ? Math.floor(progress.index)
        : 0;
    const index = Math.min(Math.max(rawIndex, 0), Math.max(questions.length - 1, 0));
    return { answers, index, finished: progress?.finished === true };
  }, []);

  const [currentIndex, setCurrentIndex] = useState(restored.index);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>(restored.answers);
  const [submitted, setSubmitted] = useState(restored.finished);
  const [showExplanation, setShowExplanation] = useState(restored.answers[restored.index] !== undefined);

  const questionHeadingRef = useRef<HTMLHeadingElement>(null);
  const skipInitialFocus = useRef(true);

  const currentQ = questions[currentIndex];

  const handleSelectOption = (optionIndex: number) => {
    if (submitted) return;
    if (selectedAnswers[currentIndex] !== undefined) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [currentIndex]: optionIndex
    }));
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setShowExplanation(selectedAnswers[currentIndex + 1] !== undefined);
      setCurrentIndex(prev => prev + 1);
    } else {
      setSubmitted(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setShowExplanation(selectedAnswers[currentIndex - 1] !== undefined);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedAnswers({});
    setSubmitted(false);
    setShowExplanation(false);
  };

  useEffect(() => {
    if (skipInitialFocus.current) {
      skipInitialFocus.current = false;
      return;
    }
    if (!submitted) {
      questionHeadingRef.current?.focus();
    }
  }, [currentIndex, submitted]);

  // Calculate score
  const totalAnswered = Object.keys(selectedAnswers).length;
  let correctCount = 0;
  Object.entries(selectedAnswers).forEach(([qIdx, ansIdx]) => {
    if (questions[Number(qIdx)]?.correctAnswer === ansIdx) {
      correctCount++;
    }
  });

  const percentage = questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0;
  const passed = percentage >= 70; // 70% pass mark
  const currentAnswer = selectedAnswers[currentIndex];
  const isCurrentCorrect = currentAnswer !== undefined && currentAnswer === currentQ.correctAnswer;

  useEffect(() => {
    try {
      const payload: McqProgress = {
        answers: questions.map((_, i) => selectedAnswers[i] ?? -1),
        index: currentIndex,
        finished: submitted,
        answered: totalAnswered,
        total: questions.length,
        correct: correctCount,
        updatedAt: new Date().toISOString()
      };
      localStorage.setItem(MCQ_STORAGE_KEY, JSON.stringify(payload));
    } catch {
      return;
    }
  }, [selectedAnswers, currentIndex, submitted, totalAnswered, correctCount]);

  return (
    <div className="space-y-8 pb-16 max-w-4xl mx-auto">
      {/* Header */}
      <div className="p-6 sm:p-8 rounded-2xl border border-line bg-panel shadow-sm">
        <div className="space-y-2">
          <span className="inline-flex items-center text-xs font-bold px-3 py-1 rounded-full bg-accent-50 text-accent-700 border border-accent-100 dark:bg-accent-950/50 dark:text-accent-300 dark:border-accent-900">
            Comprehensive Course Assessment &bull; 100 Questions
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
            LIS 814 <span className="text-accent-600">Certification</span> Examination
          </h1>
          <p className="text-sm font-medium text-ink-muted">
            Sequential 100-question exam covering all 7 course modules. Pass mark is{' '}
            <span className="font-bold text-accent-600">70% (70/100)</span>. Upon passing, generate your formal
            Certificate of Completion.
          </p>
        </div>
      </div>

      {!submitted && (
        <div role="status" aria-live="polite" className="sr-only">
          Question {currentIndex + 1} of {questions.length}
        </div>
      )}

      {!submitted ? (
        <div className="p-6 sm:p-10 rounded-2xl border border-line bg-panel shadow-sm space-y-8">
          {/* Progress bar & Module tag */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-line pb-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent-600 text-white">
                Question {currentIndex + 1} of {questions.length}
              </span>
              <span className="text-xs font-bold text-ink-muted">
                {currentQ.module}
              </span>
            </div>
            <div
              role="progressbar"
              aria-label="Exam progress"
              aria-valuemin={1}
              aria-valuemax={questions.length}
              aria-valuenow={currentIndex + 1}
              className="w-full sm:w-48 bg-line h-2 rounded-full overflow-hidden"
            >
              <div
                className="bg-accent-600 h-full rounded-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question text */}
          <div className="space-y-4">
            <h2
              ref={questionHeadingRef}
              tabIndex={-1}
              className="text-xl sm:text-2xl font-extrabold leading-snug text-ink"
            >
              {currentQ.question}
            </h2>
          </div>

          {/* Options */}
          <div role="radiogroup" aria-label={`Answer options for question ${currentIndex + 1}`} className="space-y-3">
            {currentQ.options.map((option, oIdx) => {
              const isSelected = selectedAnswers[currentIndex] === oIdx;
              const isCorrect = currentQ.correctAnswer === oIdx;
              const locked = selectedAnswers[currentIndex] !== undefined;
              const reveal = locked;

              let btnStyle = 'border border-line bg-panel text-ink hover:border-accent-300 hover:bg-panel-2';
              if (reveal && isCorrect) {
                btnStyle = 'bg-emerald-500/15 text-emerald-700 border-emerald-500 dark:text-emerald-300';
              } else if (reveal && isSelected) {
                btnStyle = 'bg-accent-50 text-accent-700 border-accent-500 dark:bg-accent-950/40 dark:text-accent-300';
              } else if (reveal) {
                btnStyle = 'border border-line bg-panel-2 text-ink-muted cursor-default';
              }

              return (
                <button
                  key={oIdx}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  aria-disabled={locked}
                  onClick={() => handleSelectOption(oIdx)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 font-medium text-sm sm:text-base ${btnStyle}`}
                >
                  <span className="flex items-center space-x-3 min-w-0">
                    <span className={`w-7 h-7 shrink-0 rounded-xl flex items-center justify-center text-xs font-bold ${
                      reveal && isCorrect
                        ? 'bg-emerald-600 text-white'
                        : reveal && isSelected
                          ? 'bg-accent-600 text-white'
                          : 'bg-panel-2 text-ink-muted border border-line'
                    }`}>
                      {String.fromCharCode(65 + oIdx)}
                    </span>
                    <span>{option}</span>
                  </span>
                  {reveal && isCorrect && (
                    <span className="shrink-0 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide">
                      <Check className="w-4 h-4" aria-hidden="true" />
                      Correct answer
                    </span>
                  )}
                  {reveal && isSelected && !isCorrect && (
                    <span className="shrink-0 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide">
                      <X className="w-4 h-4" aria-hidden="true" />
                      Your answer
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation if answered */}
          {showExplanation && (
            <div className="space-y-3 animate-fade-in">
              <div
                role="status"
                aria-live="polite"
                className={`flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-bold ${
                  isCurrentCorrect
                    ? 'bg-emerald-500/15 text-emerald-700 border-emerald-500 dark:text-emerald-300'
                    : 'bg-accent-50 text-accent-700 border-accent-500 dark:bg-accent-950/40 dark:text-accent-300'
                }`}
              >
                {isCurrentCorrect ? (
                  <CheckCircle2 className="w-5 h-5 shrink-0" aria-hidden="true" />
                ) : (
                  <XCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                )}
                <span>{isCurrentCorrect ? 'Correct!' : 'Not quite — review below'}</span>
              </div>
              <div className="p-5 rounded-2xl border border-line bg-panel-2 space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-accent-600 flex items-center space-x-1.5">
                  <Sparkles className="w-4 h-4" aria-hidden="true" />
                  <span>Verified Pedagogical Explanation:</span>
                </h3>
                <p className="text-sm font-medium leading-relaxed text-ink-muted max-w-prose">
                  {currentQ.explanation}
                </p>
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-6 border-t border-line">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`min-h-11 px-5 py-2.5 rounded-full text-sm font-bold border transition-all ${
                currentIndex === 0
                  ? 'border-line bg-panel text-ink-muted cursor-not-allowed'
                  : 'border-line bg-panel text-ink hover:border-accent-300'
              }`}
            >
              Previous Question
            </button>

            <div className="text-xs font-bold text-ink-muted">
              Answered: {totalAnswered} / {questions.length}
            </div>

            <button
              type="button"
              onClick={handleNext}
              disabled={selectedAnswers[currentIndex] === undefined}
              className={`flex items-center gap-2 min-h-11 px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                selectedAnswers[currentIndex] === undefined
                  ? 'bg-line text-ink-muted cursor-not-allowed'
                  : 'bg-accent-600 text-white hover:bg-accent-700 shadow-sm'
              }`}
            >
              <span>{currentIndex === questions.length - 1 ? 'Submit Examination' : 'Next Question'}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : (
        /* Results View */
        <div className="p-8 sm:p-12 rounded-2xl border border-line bg-panel shadow-sm text-center space-y-8">
          <div className={`w-24 h-24 mx-auto rounded-3xl flex items-center justify-center text-white shadow-xl ${
            passed ? 'bg-emerald-500' : 'bg-band'
          }`}>
            {passed ? <Award className="w-12 h-12" aria-hidden="true" /> : <XCircle className="w-12 h-12" aria-hidden="true" />}
          </div>

          <div role="status" aria-live="polite" className="space-y-3 max-w-md mx-auto">
            <span className={`inline-flex text-xs font-bold px-3 py-1 rounded-full border ${
              passed
                ? 'bg-emerald-500/15 text-emerald-700 border-emerald-500 dark:text-emerald-300'
                : 'bg-accent-50 text-accent-700 border-accent-100 dark:bg-accent-950/50 dark:text-accent-300 dark:border-accent-900'
            }`}>
              {passed ? 'Examination Passed Successfully' : 'Pass Mark Not Reached (70% Required)'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
              Your Score: {correctCount} / {questions.length} ({percentage}%)
            </h2>
            <p className="text-sm font-medium text-ink-muted">
              {passed
                ? 'Congratulations! You have demonstrated comprehensive mastery of LIS 814 Indexing and Abstracting.'
                : 'Review the lecture materials and try the examination again to achieve the 70% passing threshold.'}
            </p>
          </div>

          {/* Certificate of Completion if Passed */}
          {passed && (
            <div className="p-6 sm:p-8 rounded-2xl border border-line bg-band text-white text-left space-y-6 relative overflow-hidden">
              <div className="absolute top-4 right-4 opacity-10">
                <Award className="w-32 h-32 text-accent-400" aria-hidden="true" />
              </div>

              <div className="text-center space-y-2 border-b border-white/15 pb-6 relative">
                <span className="text-xs font-extrabold tracking-widest uppercase text-accent-400">
                  IndexMaster Academy &bull; Certificate of Academic Completion
                </span>
                <h3 className="text-2xl font-black text-white">
                  Certificate of Achievement in LIS 814
                </h3>
                <p className="text-xs font-bold text-white/70">Indexing, Abstracting, Thesaurus Construction &amp; Information Retrieval</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-bold relative">
                <div className="p-3 rounded-xl border bg-white/10 border-white/15">
                  <span>Passing Score: {percentage}% (Required: 70%)</span>
                </div>
                <div className="p-3 rounded-xl border bg-white/10 border-white/15">
                  <span>Total Exam Questions: 100 Verified Items</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="flex items-center gap-2 min-h-11 px-5 py-2.5 rounded-full font-bold bg-accent-600 text-white shadow-sm hover:bg-accent-700 transition-all text-sm"
                >
                  <Printer className="w-4 h-4" aria-hidden="true" />
                  <span>Print Official Certificate</span>
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex items-center gap-2 min-h-11 px-5 py-2.5 rounded-full font-bold border border-white/25 text-white hover:border-accent-400 transition-all text-sm"
                >
                  <RotateCcw className="w-4 h-4" aria-hidden="true" />
                  <span>Retake Examination</span>
                </button>
              </div>
            </div>
          )}

          {!passed && (
            <div className="pt-4 flex justify-center">
              <button
                type="button"
                onClick={handleReset}
                className="flex items-center gap-2 min-h-11 px-8 py-3 rounded-full font-bold bg-accent-600 text-white shadow-sm hover:bg-accent-700 transition-all text-sm"
              >
                <RotateCcw className="w-5 h-5" aria-hidden="true" />
                <span>Retry Examination</span>
              </button>
            </div>
          )}

          {/* Per-question review */}
          <div className="text-left space-y-4 pt-6 border-t border-line">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-lg sm:text-xl font-extrabold tracking-tight text-ink">Question review</h2>
              <span className="text-xs font-bold text-ink-muted">
                Score: {percentage}% &bull; {correctCount} / {questions.length} correct
              </span>
            </div>
            <ol className="space-y-3">
              {questions.map((q, i) => {
                const given = selectedAnswers[i];
                const isRight = given !== undefined && given === q.correctAnswer;
                const badgeStyle =
                  given === undefined
                    ? 'bg-panel-2 text-ink-muted border border-line'
                    : isRight
                      ? 'bg-emerald-600 text-white'
                      : 'bg-accent-600 text-white';
                return (
                  <li key={q.id} className="p-4 rounded-2xl border border-line bg-panel-2 space-y-2">
                    <div className="flex items-start gap-3">
                      <span className={`w-7 h-7 shrink-0 rounded-xl flex items-center justify-center text-xs font-bold ${badgeStyle}`}>
                        {i + 1}
                      </span>
                      <h3 className="text-sm font-bold text-ink">{q.question}</h3>
                    </div>
                    <p className="text-xs font-medium text-ink-muted max-w-prose">
                      <span className="text-ink font-bold">Your answer:</span>{' '}
                      {given !== undefined ? q.options[given] : 'Not answered'}
                    </p>
                    <p className="text-xs font-medium text-ink-muted max-w-prose">
                      <span className="text-ink font-bold">Correct answer:</span> {q.options[q.correctAnswer]}
                    </p>
                    <span
                      className={`inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide ${
                        isRight ? 'text-emerald-600 dark:text-emerald-400' : 'text-accent-600'
                      }`}
                    >
                      {isRight ? (
                        <Check className="w-3.5 h-3.5" aria-hidden="true" />
                      ) : (
                        <X className="w-3.5 h-3.5" aria-hidden="true" />
                      )}
                      {given === undefined ? 'Unanswered' : isRight ? 'Correct' : 'Incorrect'}
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};
