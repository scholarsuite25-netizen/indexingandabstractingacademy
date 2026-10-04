// LIS 814 master question bank - multiple-choice questions covering all 7 modules.

export interface MCQItem {
  id: string;
  module: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

// 128 comprehensive questions covering all LIS 814 chapters and modules
export const MCQ_QUESTIONS: MCQItem[] = [
  // Module 1: Foundations (Q1 - Q19)
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
    explanation: 'The correct option states indexing\'s real purpose: analyzing aboutness and encoding it with retrieval terms. "To list books by author last name alphabetically" describes filing or catalogue order rather than subject analysis, while the binding-quality and pricing options belong to collection-processing work that never involves term assignment.'
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
    explanation: 'Abstracting condenses a document\'s essential content into continuous prose, whereas indexing assigns discrete descriptors, which is exactly what the correct option says. "Abstracting uses single keywords while indexing uses paragraphs" reverses the two processes, and "There is no difference" and "Indexing is performed only by authors" are false because abstracting and indexing are distinct surrogate-producing tasks carried out by trained specialists or systems.'
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
    explanation: 'Indexing theory distinguishes the principal subject (aboutness) from incidental mentions, and that is what the correct option describes. "Mentioned items are indexed; aboutness is ignored" inverts the principle, since passing references are normally excluded, while "There is no theoretical distinction" and "Mentions are only recorded in critical reviews" have no support in the literature.'
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
    explanation: 'A controlled vocabulary is an authorized list of preferred terms applied consistently to indexing, as the correct option says. "Slang terms used by library patrons" describes uncontrolled user language, and "Unchecked keywords extracted randomly from full text" describes free-text automatic indexing, while "A list of forbidden books" confuses vocabulary control with access policy.'
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
    explanation: 'Natural language indexing\'s advantage is that it uses the words authors and searchers already use, with no authority file to build or maintain, which is the correct option. "It eliminates all synonyms automatically" and "It prevents semantic ambiguity entirely" are false because uncontrolled language is exactly what produces synonym scatter and ambiguity, and "It requires rigorous manual thesaurus maintenance" describes controlled rather than natural language indexing.'
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
    explanation: 'Synonym scatter is the spread of one concept across several synonymous headings, so a search on any one of them retrieves only part of the relevant set, as the correct option states. "When a book is physically misplaced on library shelves" is a shelving problem, and network downtime or authors publishing abroad are unrelated to vocabulary and recall.'
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
    explanation: 'The Library of Congress creates, publishes, and revises LCSH, so the correct option is the Library of Congress. IFLA is an international federation that issues recommendations but does not maintain LCSH, NISO writes standards such as Z39.19 and Z39.14 rather than subject headings, and UNESCO is a UN agency with no role in updating LCSH.'
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
    explanation: 'MeSH is Medical Subject Headings, the controlled vocabulary thesaurus produced by the U.S. National Library of Medicine for indexing MEDLINE and PubMed. The other three options are fabricated expansions: no standard indexing source recognizes "Modern Electronic Subject Headings", "Metadata System Hierarchy", or "Multilingual Educational Subject Headings".'
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
    explanation: 'An indexing language is the structured set of terms plus the semantic and syntactic rules for representing subject content, which is the correct option. "A computer programming language like Python or Java" confuses it with software, "Spoken language used by indexers during meetings" describes ordinary conversation, and foreign translation dictionaries are reference tools rather than representation systems.'
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
    explanation: 'SDI works by matching newly indexed records against a standing profile of a user\'s stated interests, which is what the correct option describes. Tracking fines, designing buildings, and calculating binding costs are administrative or facilities tasks that play no part in selective dissemination.'
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
    explanation: 'Bibliographic control is the systematic description and subject organization of recorded knowledge so that items can be identified and located, exactly as the correct option states. Controlling staff attendance and regulating air conditioning are facility-management tasks, and "Censoring unauthorized publications" confuses bibliographic control with content control, which libraries do not perform.'
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
    explanation: 'A descriptor is an authorized term selected from a thesaurus or subject-heading list to represent a subject, which is the correct option. The physical description of book dimensions, the name of the bookbinder, and a barcode label are respectively descriptive cataloguing data, provenance information, and an item identifier, none of which are subject vocabulary.'
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
    explanation: 'The goal of an IR system is to return the relevant documents while holding out the irrelevant ones, that is, to balance precision and recall, which is the correct option. Storing uncatalogued books describes a warehouse rather than a retrieval system, generating revenue is a commercial aim, and restricting access contradicts the retrieval purpose of the system.'
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
    explanation: 'An entry term is a non-preferred variant that routes searchers to the authorized heading through a USE reference, which is the correct option. "The front door of the library building" is a physical feature, "The first sentence of an abstract" is an abstract element, and "The ISBN number" is a product identifier, so none of them are vocabulary cross-references.'
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
    explanation: 'Concept indexing represents the underlying ideas of a document rather than matching its exact words, as the correct option states. Indexing page numbers, translating texts, and counting words are mechanical operations that involve no intellectual analysis of subject content.'
  },
  {
    id: 'm1-q16',
    module: 'Module 1: Foundations',
    question: 'A record is being indexed for the paper "Impact of Climate Change on Cocoa Yield in Ghana". Which descriptor set is appropriately specific - neither too broad nor needlessly granular?',
    options: [
      'Climate change; Cocoa yield; Ghana',
      'Weather; Crops; Africa',
      'Climate change; Weather; Temperature; Rainfall; Ghana; West Africa; Cocoa; Cocoa beans; Agriculture; Farming',
      'Ghanaian agriculture'
    ],
    correctAnswer: 0,
    explanation: 'The correct set names each facet at the document\'s own level of granularity: phenomenon, crop effect, and place, giving balanced exhaustivity and specificity. "Weather; Crops; Africa" is too broad to discriminate this study from any African agriculture paper, the ten-term list is over-exhaustive and buries the record in overlapping synonyms, and "Ghanaian agriculture" collapses all three facets into one vague compound.'
  },
  {
    id: 'm1-q17',
    module: 'Module 1: Foundations',
    question: 'Ranganathan\'s maxim "Save the time of the reader" most directly justifies which professional practice?',
    options: [
      'Producing abstracts and indexes so users can judge relevance without reading every document',
      'Shelving books by height so they can be reshelved quickly',
      'Restricting stack access so that only librarians handle books',
      'Arranging fiction alphabetically by title'
    ],
    correctAnswer: 0,
    explanation: 'Abstracts and indexes let a reader screen the literature and reach only the documents that answer the need, which is precisely how a service saves the reader\'s time. Shelving by height serves staff convenience rather than the reader, restricted stacks save no reader time and obstruct use, and alphabetical fiction arrangement is a filing convention unrelated to the maxim.'
  },
  {
    id: 'm1-q18',
    module: 'Module 1: Foundations',
    question: 'A monograph on the economic history of Manchester devotes two pages to the mechanics of cotton-weaving machinery. Which principle should guide the indexer?',
    options: [
      'Index machinery only if it forms part of the work\'s principal subject rather than an incidental mention',
      'Index every topic mentioned anywhere in the text with equal weight',
      'Ignore machinery entirely because it is a technical detail',
      'Index only the geographic place name'
    ],
    correctAnswer: 0,
    explanation: 'The correct option applies the aboutness-versus-mention distinction: incidental treatment earns no entry, while a facet that carries the work\'s argument does. "Index every topic mentioned anywhere" would flood the record with noise and destroy specificity, "Ignore machinery entirely" forecloses the judgment before analysis, and indexing only the place name ignores the substantive subject altogether.'
  },
  {
    id: 'm1-q19',
    module: 'Module 1: Foundations',
    question: 'A library is choosing between a controlled vocabulary and free-text keywords for its catalogue. Which assessment is correct?',
    options: [
      'A controlled vocabulary gives consistent syntax and synonym control but must be maintained; free text is cheap to build yet suffers synonym scatter and ambiguity',
      'Controlled vocabularies always retrieve more records than free text because they contain more words',
      'Free text eliminates homographs automatically, while controlled vocabularies cannot represent hierarchy',
      'The two approaches are equivalent, so the choice only affects cost'
    ],
    correctAnswer: 0,
    explanation: 'The correct option states the real trade-off: control buys consistent syntax and synonym management at the price of ongoing vocabulary maintenance. "Controlled vocabularies always retrieve more records" confuses the vocabulary with the size of the corpus, "Free text eliminates homographs automatically" reverses the facts because free text aggravates homography, and "The two approaches are equivalent" ignores that only one of them manages synonyms and hierarchy.'
  },

  // Module 2: Subject Analysis & Vocabulary Control (Q16 - Q34)
  {
    id: 'm2-q16',
    module: 'Module 2: Vocabulary Control',
    question: 'What does BT stand for in thesaurus construction?',
    options: ['Broad Topic', 'Broader Term', 'Bibliographic Thesaurus', 'Basic Terminology'],
    correctAnswer: 1,
    explanation: 'BT stands for Broader Term, the hierarchical reference to a term\'s immediate superordinate concept. "Broad Topic" and "Basic Terminology" are plausible-sounding but are not abbreviations used in ANSI/NISO Z39.19, and "Bibliographic Thesaurus" names no recognized relationship element.'
  },
  {
    id: 'm2-q17',
    module: 'Module 2: Vocabulary Control',
    question: 'What does NT stand for in a thesaurus?',
    options: ['Narrower Term', 'New Technology', 'Non-Traditional', 'Named Term'],
    correctAnswer: 0,
    explanation: 'NT stands for Narrower Term, the reciprocal hierarchical link to a subordinate concept. "New Technology", "Non-Traditional", and "Named Term" are not part of thesaurus display format, where the recognized elements are UF, BT, NT, RT, SN, and USE.'
  },
  {
    id: 'm2-q18',
    module: 'Module 2: Vocabulary Control',
    question: 'What does RT stand for in thesaurus semantics?',
    options: ['Reference Text', 'Related Term', 'Retrieval Technique', 'Random Term'],
    correctAnswer: 1,
    explanation: 'RT marks an associative, non-hierarchical relationship between two concepts that are connected in meaning but neither broader nor narrower than each other. "Reference Text", "Retrieval Technique", and "Random Term" are not vocabulary relationships, and mistaking RT for BT or NT would wrongly assert a hierarchy that does not exist.'
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
    explanation: 'USE and UF express the equivalence relationship: USE leads from a non-preferred variant to the authorized descriptor, and UF lists those variants under the preferred term. Indicating publishing dates belongs in a publication statement, and book weight and borrowing history are item or circulation data with no place in vocabulary semantics.'
  },
  {
    id: 'm2-q20',
    module: 'Module 2: Vocabulary Control',
    question: 'According to ANSI/NISO Z39.19, how many major steps are typically outlined for thesaurus construction?',
    options: ['3 steps', '5 steps', '11 steps', '20 steps'],
    correctAnswer: 2,
    explanation: 'ANSI/NISO Z39.19 sets out eleven steps for the systematic construction and format of a monolingual controlled vocabulary, so 11 steps is correct. The figures 3, 5, and 20 do not correspond to any step sequence in the standard, and guessing a round number such as 20 ignores the standard\'s staged, iterative process.'
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
    explanation: 'Homographs share an identical spelling but differ in meaning and origin, such as "bank" of a river versus a financial bank, which is what the correct option describes. Words that sound alike but are spelled differently are homographs of pronunciation (homophones), and translated words and acronyms are separate vocabulary-control problems handled by equivalence links rather than by splitting entries.'
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
    explanation: 'Semantic control manages meaning: it disambiguates homographs, consolidates synonyms under one preferred term, and keeps term boundaries stable, exactly as the correct option says. Server-room temperature, printed font sizes, and library budgets are physical, typographic, or financial concerns that have nothing to do with controlling term meaning.'
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
    explanation: 'Syntactic control is the set of rules that governs how terms are combined and ordered in an index string, including citation order and role indicators, which is the correct option. Checking spelling, formatting APA citations, and setting passwords are proofreading, reference-style, and security tasks rather than the grammar of an indexing language.'
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
    explanation: 'A university library is a kind of library, so the Libraries/University Libraries pair passes the "is a kind of" test that defines BT/NT hierarchy. "Libraries (BT) -> Librarians (RT)" is associative rather than hierarchical, "Automobiles (USE) -> Cars (UF)" is an equivalence reference, and "Computers -> Software" states a whole-part or context relation with no indicated relationship type.'
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
    explanation: 'Facet analysis decomposes a compound subject into its fundamental homogeneous categories, as in Ranganathan\'s PMEST facets, so that terms can be synthesized in a controlled order. Analyzing cover designs, measuring foot traffic, and evaluating staff performance are design, facilities, and human-resources tasks with no analytical role in subject representation.'
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
    explanation: 'Polyhierarchy allows a narrower term to sit under more than one broader term, so it appears in several places in the hierarchy, which is the correct option. Multiple authors, multiple library branches, and multi-volume indexes describe bibliographic or organizational facts, not thesaurus structure.'
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
    explanation: 'A micro-thesaurus is a small, highly granular thesaurus covering a specialized sub-domain of a larger scheme, as the correct option states. Printing in small font is a production detail, storage on a microchip describes hardware rather than scope, and an incomplete thesaurus is simply deficient rather than a recognized micro-thesaurus.'
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
    explanation: 'A scope note (SN) fixes what a term includes and excludes so indexers and searchers apply it consistently, which is the correct option. Book prices, borrower names, and page counts are acquisition, circulation, and physical-description data that belong in other fields of a record, not in a vocabulary entry.'
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
    explanation: 'The top term is the root of a chain of BT/NT links, the broadest heading under which all narrower terms ultimately sit, which is the correct option. A title page, a popular book, and a web header are respectively a physical part of a book, a circulation statistic, and a screen element, none of which describe thesaurus hierarchy.'
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
    explanation: 'Term validation screens proposed terms against the existing vocabulary so that duplicates, obsolete forms, and unnecessary synonyms are rejected or linked, which is the correct option. Checking library cards, validating software licences, and testing binding strength are circulation, IT, and preservation tasks outside vocabulary maintenance.'
  },
  {
    id: 'm2-q31',
    module: 'Module 2: Vocabulary Control',
    question: 'A vocabulary specialist is recording the concept "wheat" beneath the heading "cereals". Which statement applies thesaurus relationships correctly?',
    options: [
      'Under "Cereals": NT Wheat; and under "Wheat": BT Cereals',
      'Under "Cereals": RT Wheat, because wheat is related to cereals',
      'Under "Cereals": UF Wheat, because wheat is another name for cereals',
      'Under "Wheat": NT Cereals, because cereals are part of wheat'
    ],
    correctAnswer: 0,
    explanation: 'Wheat is a species of cereal, so the reciprocal pair is NT under the broader heading and BT under the narrower one, which is the correct option. "RT" understates a genuine generic relation as mere association, "UF" wrongly treats wheat as a synonym of cereals, and the last option reverses the hierarchy by making the class narrower than its member.'
  },
  {
    id: 'm2-q32',
    module: 'Module 2: Vocabulary Control',
    question: 'Records use the word "bank" to mean both a financial institution and the bank of a river. Under ANSI/NISO Z39.19, what is the prescribed remedy?',
    options: [
      'Split the homograph into separate entries with their own scope notes and BT/NT links, and route each meaning with USE/UF references',
      'Keep a single combined entry and let indexers decide case by case',
      'Delete one of the meanings so the vocabulary stays small',
      'Abandon the controlled vocabulary and index the word as free text'
    ],
    correctAnswer: 0,
    explanation: 'The standard remedy for a homograph is to disambiguate: each meaning becomes its own entry with a scope note and its own hierarchy, linked from the variants that lead to it. Keeping one combined entry leaves the ambiguity unresolved for searchers, deleting a meaning makes the record unretrievable, and switching to free text discards the control that caused the entry to be reviewed.'
  },
  {
    id: 'm2-q33',
    module: 'Module 2: Vocabulary Control',
    question: 'Which statement about ISO 25964 is correct?',
    options: [
      'It is published in two parts: Part 1 covers thesauri for information retrieval, and Part 2 covers interoperability with other vocabularies',
      'It defines faceted classification notation only and says nothing about thesaurus relationships',
      'It replaced ANSI/NISO Z39.19 in the United States and is mandatory for all federal library catalogues',
      'It is limited to automatic indexing algorithms and does not address USE/UF references'
    ],
    correctAnswer: 0,
    explanation: 'ISO 25964 is a two-part international standard: Part 1 for thesauri used in information retrieval and Part 2 for interoperability between vocabularies, which is the correct option. It does not define faceted notation, it coexists with rather than replaces the U.S. national standard ANSI/NISO Z39.19, and it is a vocabulary standard with no bearing on indexing algorithms.'
  },
  {
    id: 'm2-q34',
    module: 'Module 2: Vocabulary Control',
    question: 'A new term "E-books" is proposed, but the vocabulary already has the preferred term "Electronic books" with "E-books" listed in its UF. What should term validation do?',
    options: [
      'Reject the new preferred term as redundant and keep it linked to "Electronic books" through the existing UF reference',
      'Add "E-books" as a second preferred term with its own hierarchy',
      'Delete "Electronic books" and replace it with the shorter form',
      'Accept both as preferred synonyms so either may be used freely'
    ],
    correctAnswer: 0,
    explanation: 'Because the proposed term is already registered as a non-preferred variant, accepting it as preferred would duplicate one concept and split its BT/NT links, so validation must reject it. Creating a second preferred term, deleting the established heading, and permitting two preferred synonyms all produce the synonym scatter that equivalence relationships exist to prevent.'
  },

  // Module 3: Indexing Systems & Syntax (Q31 - Q49)
  {
    id: 'm3-q31',
    module: 'Module 3: Systems & Syntax',
    question: 'Who developed PRECIS (Preserved Context Index System)?',
    options: ['S.R. Ranganathan', 'Derek Austin', 'Melvil Dewey', 'Charles Cutter'],
    correctAnswer: 1,
    explanation: 'Derek Austin devised PRECIS for the British National Bibliography, so he is the correct answer. Ranganathan created chain indexing and colon classification, Dewey published the Dewey Decimal Classification, and Cutter is known for the dictionary catalogue and author marks - all real figures, but none of them built PRECIS.'
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
    explanation: 'Pre-coordinate systems build the compound subject string while the document is being indexed, so the facets are fixed before any search runs. The option describing combination by searchers at search time is the definition of post-coordinate indexing, automatic generation describes machine indexing rather than a coordination point, and indexing after disposal is nonsensical.'
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
    explanation: 'Post-coordinate systems store atomic descriptors separately and let the searcher coordinate them at query time, as the correct option states. Indexing after a book leaves the library, arranging by publication date, and postal delivery of catalogues describe circulation, shelving, and mail services rather than a coordination principle.'
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
    explanation: 'Chain indexing is Ranganathan\'s technique for deriving alphabetical subject headings by walking down the chain of captions attached to a classified document and then reversing the chain into readable order. Security chains, server chaining, and citation chaining are literal or metaphorical uses of the word "chain" and have no connection with the method.'
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
    explanation: 'Cyclic indexing rotates the components of a compound heading so each significant term takes the lead once, providing several access points from a single analysis. Recycling bins, recycled furniture, and scheduled backups are facility and systems-maintenance activities unrelated to permuted subject entries.'
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
    explanation: 'SLIC is Selective Listing in Combination, a pre-coordinate permutation method that lists only worthwhile combinations of facets so the index is not swollen by meaningless permutations. The other three are invented expansions; none appears in the indexing literature, and "Systematic Library Indexing Code" in particular mistakes a method name for a coding scheme.'
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
    explanation: 'A role operator tells the system what each term is doing in the string - topic, medium, place, audience - so the string can be rotated for display without changing its meaning, which is the correct option. Staff job titles, processing speed, and book pricing are personnel, hardware, and acquisitions data that no syntactic device could encode.'
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
    explanation: 'PRECIS was developed for and first used by the British National Bibliography, so the BNB is correct. The Library of Congress developed its own subject heading system, the National Agricultural Library uses its own agricultural vocabulary, and UNESCO is not a national bibliographic agency.'
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
    explanation: 'Citation order is the fixed sequence in which the facets of a compound subject are written in a heading, as the correct option states. Author citation order belongs to reference style, and chronological or alphabetical arrangements of publications and publishers are filing orders with no bearing on subject string syntax.'
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
    explanation: 'KWIC rotates each significant title word into an entry position and prints the surrounding title text so the keyword is read in context, exactly as the correct option says. It is machine-generated rather than a manual method for rare manuscripts, it has no role in loan tracking, and it is not an acronym for security.'
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
    explanation: 'KWOC lists the extracted keywords as separate entries and shows the complete title beneath or beside each one, which is the correct option. Printing outside a building, deleting keywords, and listing author names separately describe signage, data loss, and an author index rather than a keyword permutation scheme.'
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
    explanation: 'Uniterm indexing is Mortimer Taube\'s coordinate system in which each document is represented by single-concept terms recorded on cards and coordinated by the searcher. Indexing within one academic term, using only one term per document, and indexing textbooks all confuse the name with unrelated counting or subject restrictions.'
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
    explanation: 'Peek-a-boo (optical coincidence) cards carry a hole for every document under a term; holding the cards for two terms to the light reveals the documents punched in both, which is an AND search. A children\'s library game, a barcode scanner, and a microfilm reader are real library items but play no part in manual post-coordinate retrieval.'
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
    explanation: 'A composite heading joins two or more facets of one subject, such as Libraries -- Automation, so the compound topic is expressed in a single entry. A multilingual heading raises translation issues, missing words indicate a defective record, and a temporary heading is provisional - none of which defines composition of concepts.'
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
    explanation: 'Because a pre-coordinate string fixes one citation order, a searcher who needs a different combination of facets may find no matching entry, which is the real drawback in a large database. Being inexpensive, requiring no training, and being unprintable are all false statements rather than limitations of the method.'
  },
  {
    id: 'm3-q46',
    module: 'Module 3: Systems & Syntax',
    question: 'Which pairing of an indexing technique with its defining mechanism is correct?',
    options: [
      'PRECIS - role operators that encode each term\'s contextual function so meaning survives rotation of the string',
      'Chain indexing - Boolean combination of atomic terms at search time',
      'Cyclic indexing - a fixed citation order that never rotates',
      'SLIC - rotation of every possible permutation of a compound heading'
    ],
    correctAnswer: 0,
    explanation: 'PRECIS depends on role operators, which state what each term is doing in the string so that rotating the string for display preserves its meaning, exactly as the correct option says. Boolean combination at search time defines post-coordinate systems rather than chain indexing, cyclic indexing by definition rotates rather than fixes the order, and SLIC deliberately suppresses redundant permutations instead of listing them all.'
  },
  {
    id: 'm3-q47',
    module: 'Module 3: Systems & Syntax',
    question: 'A union catalogue of three million records must support arbitrary combinations of species, disease, geography, and drug at query time. Which indexing approach is most appropriate?',
    options: [
      'Post-coordinate indexing, because term combinations are formed at search time and are not constrained by a fixed citation order',
      'Pre-coordinate indexing, because fixed strings guarantee that every useful combination is pre-enumerated',
      'KWIC, because rotated titles automatically capture all four facets',
      'Chain indexing, because it derives headings from classification schedules'
    ],
    correctAnswer: 0,
    explanation: 'Post-coordinate storage lets searchers form any combination of the four facets at query time, which is exactly what an unpredictable query workload needs. Pre-coordinate strings cannot pre-enumerate what is combinatorially endless, KWIC indexes only the words in titles rather than facets of the content, and chain indexing is a method for producing headings rather than a search mechanism.'
  },
  {
    id: 'm3-q48',
    module: 'Module 3: Systems & Syntax',
    question: 'Which statement correctly distinguishes KWIC from KWOC?',
    options: [
      'KWIC displays each keyword inside its surrounding text on a rotated line, whereas KWOC lists keywords separately with the full title shown alongside',
      'KWIC requires human assignment of descriptors, while KWOC is fully automatic',
      'KWOC preserves grammatical context, while KWIC deliberately discards it',
      'KWIC indexes the full text of documents, while KWOC indexes titles only'
    ],
    correctAnswer: 0,
    explanation: 'The defining difference is context placement: KWIC keeps the keyword embedded in its context, KWOC pulls it out and prints the title beside it. Both methods are generated automatically from titles, so the human-assignment option is wrong, the context claim reverses the two systems, and neither method indexes full text.'
  },
  {
    id: 'm3-q49',
    module: 'Module 3: Systems & Syntax',
    question: 'Which classification of systems as pre-coordinate or post-coordinate is correct?',
    options: [
      'Pre-coordinate: PRECIS, chain-index-derived headings, cyclic strings; post-coordinate: Uniterm cards, optical coincidence cards, Boolean database searching',
      'Pre-coordinate: Uniterm cards, Boolean searching; post-coordinate: PRECIS, cyclic indexing',
      'Both categories are pre-coordinate, because all of them assign terms before searching',
      'Pre-coordinate and post-coordinate differ only in whether the index is printed or electronic'
    ],
    correctAnswer: 0,
    explanation: 'PRECIS, chain-derived headings, and cyclic strings all synthesize compound headings at indexing time, while Uniterm, peek-a-boo cards, and Boolean searching coordinate separate terms at search time, so the correct option is accurate on both counts. The reversed option misclassifies both families, the claim that all are pre-coordinate ignores that coordination happens after indexing in the second group, and the distinction is about when coordination occurs, not about the medium.'
  },

  // Module 4: Strategies & Evaluation (Q46 - Q64)
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
    explanation: 'Exhaustivity is the number of concepts - major and minor - that an indexer extracts and expresses as terms, which is what the correct option describes. Indexer fatigue, the physical weight of a book, and processor speed are respectively a human, a physical, and a technical factor that form no part of an indexing strategy.'
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
    explanation: 'Specificity measures how exactly an index term denotes the document\'s subject instead of a broader or narrower class, as the correct option states. Writing reviews, stating opening hours, and listing biographies are reviewing, facilities, and biographical tasks that never evaluate term granularity.'
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
    explanation: 'Precision is the proportion of the result set that is relevant, so the numerator is relevant retrieved and the denominator is everything retrieved. The second option is close to a recall-style ratio with the numerator reversed, the third measures irrelevant items against the whole collection rather than the result set, and database size over query time is a performance measure, not an effectiveness measure.'
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
    explanation: 'Recall is the proportion of the collection\'s relevant documents that were actually retrieved, so the denominator must be all relevant documents in the collection. The second option inverts the ratio and can exceed 100%, the third divides non-relevant hits by the result set, and query time over document count is a speed statistic with no bearing on effectiveness.'
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
    explanation: 'Widening a search to capture more relevant documents also captures more irrelevant ones, so recall rises while precision falls, which is the correct option. The claims that the two always rise together, that they are unrelated, and that recall always equals precision are all false: the measures use different denominators and coincide only by accident.'
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
    explanation: 'Cleverdon\'s Cranfield experiments were the first systematic, quantitative tests of indexing languages and retrieval systems against relevance judgments, establishing recall and precision as standard measures. Designing a public library building, inventing paper books, and creating the Dewey Decimal Classification (Melvil Dewey, 1876) are unrelated to the project.'
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
    explanation: 'Derived indexing takes terms from words already present in the document rather than assigning them intellectually, which is the correct option. Translating an index, hand-writing cards, and computing prices are respectively a language, a manual production, and an acquisitions task, none of which derive terms from text.'
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
    explanation: 'Assigned indexing requires analysing the document\'s meaning and mapping it to authorized vocabulary, whether by a human indexer or a trained classifier, as the correct option states. Seating patrons, barcoding items, and allocating staff duties are reader-service, processing, and management tasks that involve no subject analysis.'
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
    explanation: 'Inter-indexer consistency compares the term sets that different indexers independently assign to one document, which is the correct option. Opening hours, binding materials, and salary payments concern services, preservation, and human resources, and their regularity says nothing about indexing quality.'
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
    explanation: 'Fallout is the false-positive rate of a search: non-relevant documents retrieved divided by all non-relevant documents in the collection, exactly as the correct option states. Radioactive decay, books falling from shelves, and staff turnover use the word "fall" or "fallout" metaphorically and are not retrieval measures.'
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
    explanation: 'In retrieval terms, noise is the irrelevant material in a result set - the complement of precision - which is the correct option. Loud talking, fan noise, and loud audiobooks are acoustic disturbances in a physical space and have nothing to do with the composition of search results.'
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
    explanation: 'Silence (also called a miss) is relevant material that the search failed to return, the complement of recall, which is the correct option. Quiet study rules are a library policy, network disconnection is an outage, and unpublished manuscripts are outside the collection rather than missed within it.'
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
    explanation: 'Currency means a service indexes new literature quickly enough to be useful for current awareness, which is the correct option. Collecting fees in foreign currencies, paying publishers promptly, and tracking antiquarian values are finance, acquisitions, and appraisal activities unrelated to the timeliness of indexing.'
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
    explanation: 'Coverage evaluates how much of the target literature a service actually indexes - which journals, languages, and disciplines are included - which is the correct option. Floor space, insurance policies, and Wi-Fi range are facilities, risk-management, and network concerns that no coverage study measures.'
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
    explanation: 'Indexing lag is the interval between a document\'s publication or receipt and its appearance as an indexed record, which is the correct option. Internet speed, shipping delays, and staff breaks affect network performance, acquisitions, and labour respectively, and none is the turnaround time of an indexing operation.'
  },
  {
    id: 'm4-q61',
    module: 'Module 4: Strategies & Evaluation',
    question: 'A search retrieves 200 documents, of which 150 are relevant, and the collection contains 600 relevant documents in total. What are the precision and recall?',
    options: [
      'Precision 75%, Recall 25%',
      'Precision 25%, Recall 75%',
      'Precision 75%, Recall 75%',
      'Precision 50%, Recall 50%'
    ],
    correctAnswer: 0,
    explanation: 'Precision = 150/200 = 75%, while recall = 150/600 = 25%, because precision divides by the result set and recall by the relevant population. Swapping the two confuses the denominators, reporting 75% for both ignores that only one quarter of the relevant literature was found, and 50/50 would require figures that this scenario does not produce.'
  },
  {
    id: 'm4-q62',
    module: 'Module 4: Strategies & Evaluation',
    question: 'A system achieves precision of 80% and recall of 60%. Using F1 = 2PR / (P + R), what is the F-measure?',
    options: [
      'Approximately 68.6%',
      '70%',
      '48%',
      'Approximately 88.9%'
    ],
    correctAnswer: 0,
    explanation: 'F1 = 2 x 0.8 x 0.6 / (0.8 + 0.6) = 0.96 / 1.4 = 0.686, or about 68.6%, which is the correct option. The 70% figure comes from taking the arithmetic mean, which is not how F1 is defined and scores the system too generously; 48% is merely the product P x R, and 88.9% results from dividing by the product rather than the sum.'
  },
  {
    id: 'm4-q63',
    module: 'Module 4: Strategies & Evaluation',
    question: 'A collection holds 1,000 non-relevant and 300 relevant documents. A search returns 200 documents, of which 150 are relevant and 50 are not. What is the fallout?',
    options: [
      '5%',
      '25%',
      '50%',
      '75%'
    ],
    correctAnswer: 0,
    explanation: 'Fallout = non-relevant retrieved / total non-relevant in collection = 50/1,000 = 5%, so the correct option is 5%. The 25% option divides the 50 false hits by the 200 retrieved (a precision-style denominator), 50% is the recall of this search (150/300), and 75% is its precision (150/200).'
  },
  {
    id: 'm4-q64',
    module: 'Module 4: Strategies & Evaluation',
    question: 'A systematic review must not miss a single relevant study, and reviewers can screen false positives manually. Which indexing and search strategy best fits this requirement?',
    options: [
      'High exhaustivity with broad and narrower terms combined by OR and few limits, accepting lower precision',
      'Very specific descriptors combined only with AND, maximizing precision at the expense of recall',
      'Title-word derived indexing with no controlled vocabulary at all',
      'Restricting the search to the most recent month of publication'
    ],
    correctAnswer: 0,
    explanation: 'When missing relevant studies is unacceptable, the strategy must push recall up: assign many terms (high exhaustivity), broaden with synonyms and narrower terms, and avoid restrictive limits, exactly as the correct option states. Maximising precision with strict AND limits is the opposite policy and would create silence, title-only derived indexing omits concepts absent from titles, and date limits deliberately exclude most of the relevant population.'
  },

  // Module 5: Abstracting Principles & Types (Q61 - Q79)
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
    explanation: 'An indicative abstract tells the reader what the document covers without reporting its results, which is exactly what the correct option says. Exhaustive numerical results define an informative abstract, an abstract written in code is not an abstracting form at all, and a critical book review is a separate publication type even though a critical abstract also evaluates.'
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
    explanation: 'An informative abstract reports the substance of the document, including results and conclusions, so the reader gains its findings without reading it - the correct option. A one-sentence title paraphrase carries no findings, a publisher advertisement is promotional copy, and a table of contents merely lists section headings.'
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
    explanation: 'A critical abstract adds a judgment about the work\'s quality, method, or value to the summary of its contents, which is the correct option. The abstractor\'s mood, an evacuation notice, and an incomplete summary describe emotional state, an emergency document, and deficient work respectively, none of which is an abstract type.'
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
    explanation: 'A slanted abstract selects and emphasizes the aspects of a document that matter to a particular audience while remaining accurate, which is the correct option. Printing diagonally is a layout joke, and a slanted abstract is not a false one - distortion would breach the fidelity rule, and illegibility is a production defect rather than a type.'
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
    explanation: 'An author abstract is written by the people who produced the document, usually supplied with the manuscript, which is the correct option. An abstract about an author\'s biography is biographical annotation, an anonymous summary is defined by who did not write it, and a publisher summary is marketing copy rather than a document surrogate.'
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
    explanation: 'Z39.14 requires an abstract to stand alone and to report the document neutrally, without evaluation or outside material, which is the correct option. An abstract longer than its paper contradicts the purpose of a concise surrogate, personal opinions breach objectivity, and equations are included only when the source itself requires them.'
  },
  {
    id: 'm5-q67',
    module: 'Module 5: Abstracting',
    question: 'What is the typical recommended word length for standard informative abstracts?',
    options: ['100 to 250 words', '2,000 to 5,000 words', '10 words', '500 to 1,000 words'],
    correctAnswer: 0,
    explanation: 'Informative abstracts are conventionally held to roughly 100-250 words so that they remain brief surrogates of the document. Two to five thousand words approaches the length of the article itself, ten words cannot convey purpose, method, and findings, and 500-1,000 words is longer than the usual guidance permits for a standard abstract.'
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
    explanation: 'Abstracting is a staged analysis of the document - purpose, method, findings - followed by drafting and checking, exactly the sequence in the correct option. Drafting before reading, guessing the title, and refusing to read the body all guarantee inaccuracy, and copying a table of contents reproduces structure rather than content and omits results entirely.'
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
    explanation: 'Self-contained means the abstract carries its whole meaning independently, with no dependence on the title, tables, references, or the document itself - the correct option. Storage in a cabinet, needing to read the book first, and having a power source are respectively physical, procedural, and literal readings that miss the textual requirement.'
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
    explanation: 'An abstract is a surrogate that must be verifiable against its source, so adding material would break fidelity and objectivity - the correct option. Saving memory, lengthening the abstract, and confusing readers are respectively unrelated, contrary, and perverse goals that no abstracting guideline pursues.'
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
    explanation: 'Extractive summarization selects sentences that already exist in the source and joins them without rewriting, which is the correct option. Library invoices, Latin translation, and hand writing describe the source, language, or production method rather than the mechanism by which the summary is produced.'
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
    explanation: 'An abstracting bulletin is a serial that publishes abstracts of current literature arranged by subject so a field can be surveyed quickly - the correct option, of which Chemical Abstracts, Biological Abstracts, and LISA are long-standing examples. A lobby noticeboard, a staff newsletter, and a book catalogue are respectively a fixture, an internal document, and a bibliographic tool rather than a serial of abstracts.'
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
    explanation: 'CAS exists to push news of new publications to users, and abstracts supply the content that lets them judge relevance at a glance - the correct option. Overdue notices, maintenance schedules, and borrowing statistics belong to circulation, facilities, and management reporting, none of which is current awareness of literature.'
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
    explanation: 'Third-person, impersonal style keeps attention on what was done and found rather than on the writer, supporting the objectivity that Z39.14 requires - the correct option. Deliberately obscuring the text, obeying obsolete rules, and shortening the abstract are not reasons for the convention, and the passive often lengthens rather than shortens a sentence.'
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
    explanation: 'The hybrid form reports the principal results informatively while describing peripheral sections only by topic, which is the correct option. An abstract with no content is not an abstract, authorship by two people is a production fact rather than a type, and a story summary is précis work outside the documentary abstract tradition.'
  },
  {
    id: 'm5-q76',
    module: 'Module 5: Abstracting',
    question: 'A journal requires an abstract that lets readers judge whether to read the full article by reporting its results, and the editor forbids any evaluative comment. Which abstract type is appropriate?',
    options: [
      'Informative abstract - it reports findings and conclusions objectively, so no evaluative language is needed',
      'Critical abstract - it appraises methodology, which satisfies the reporting requirement',
      'Indicative abstract - it outlines scope, which is enough to convey results',
      'Slanted abstract - it emphasizes results for the journal\'s specialist readership'
    ],
    correctAnswer: 0,
    explanation: 'Reporting results is the defining feature of an informative abstract, and objectivity keeps it free of the evaluation the editor forbids, so the correct option fits both conditions. A critical abstract violates the ban by definition, an indicative abstract deliberately withholds findings, and a slanted abstract is tailored for emphasis rather than for neutral reporting.'
  },
  {
    id: 'm5-q77',
    module: 'Module 5: Abstracting',
    question: 'Which sentence would be permissible in an abstract written under ANSI/NISO Z39.14?',
    options: [
      'The trial followed 45 patients over twelve weeks using a randomised control design',
      'The author\'s methodology is clever and convincing',
      'This paper is a must-read for every librarian',
      'In my opinion the sample was far too small'
    ],
    correctAnswer: 0,
    explanation: 'The first sentence reports a fact drawn from the document itself, which is exactly what Z39.14 permits and requires. "Clever and convincing" and "In my opinion" are the abstractor\'s evaluations, which the standard forbids, while "a must-read for every librarian" is promotional language that adds nothing about the document.'
  },
  {
    id: 'm5-q78',
    module: 'Module 5: Abstracting',
    question: 'Which document is best served by an indicative rather than an informative abstract?',
    options: [
      'A discussion paper whose value lies in its argument and scope rather than in retrievable experimental results',
      'A clinical trial reporting numerical patient outcomes',
      'A physics experiment with quantitative measurements',
      'A statistical yearbook of national indicators'
    ],
    correctAnswer: 0,
    explanation: 'Where there are no results to report - editorials, position papers, essays of argument - an indicative abstract stating scope and approach is the right form, so the correct option applies. Clinical trials, physics experiments, and statistical yearbooks all exist to convey data, and an indicative abstract would suppress precisely what readers need.'
  },
  {
    id: 'm5-q79',
    module: 'Module 5: Abstracting',
    question: 'A language model rewrites an abstract in fresh wording while keeping every figure from the source. This is which approach, and what is its principal risk?',
    options: [
      'Abstractive summarization; the risk is introducing content or numbers absent from the source, breaching fidelity',
      'Extractive summarization; the risk is duplicated sentences',
      'Indicative abstracting; the risk is excessive length',
      'Critical abstracting; the risk is insufficient evaluation'
    ],
    correctAnswer: 0,
    explanation: 'Producing new wording for existing meaning is abstractive summarization, and its characteristic failure is inventing details the document never contained, which breaks the fidelity rule - the correct option. Extractive methods copy sentences rather than reword them and so risk repetition, not invention, and neither indicative abstracting nor critical abstracting describes how the text was generated.'
  },

  // Module 6: Digital Libraries, Automated & AI Indexing (Q76 - Q94)
  {
    id: 'm6-q76',
    module: 'Module 6: Digital & AI Indexing',
    question: 'Which of the following is a premier multidisciplinary indexing and abstracting database?',
    options: ['Scopus and Web of Science', 'Local Public Library Catalog', 'Phone Directory', 'Dictionary of Quotations'],
    correctAnswer: 0,
    explanation: 'Scopus and Web of Science are large commercial citation indexes that abstract and index peer-reviewed literature across many disciplines. A local public library catalogue indexes only its own holdings, a phone directory lists subscribers, and a dictionary of quotations is a reference work rather than a bibliographic index.'
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
    explanation: 'PubMed is the National Library of Medicine\'s search system giving access to MEDLINE, the indexed bibliography of biomedical and life-sciences literature. Automobile repair manuals, legal case files, and university financial records belong respectively to consumer, legal, and administrative systems, none of which is what PubMed serves.'
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
    explanation: 'LISA is the discipline-specific abstracting and indexing service for library and information science literature, which is the correct option. Barcode-printing software, a music database, and an operating system are respectively a utility, a media catalogue, and system software, none of which abstracts LIS research.'
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
    explanation: 'Full-text indexing tokenizes the entire document so that any word, phrase, or passage can be searched, which is the correct option. Cover images would support image search only, printing on paper is not indexing at all, and restricting searches to author names describes an author index rather than full text.'
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
    explanation: 'NER is a natural-language processing task that locates expressions in text and labels them by type - person, organization, location, date, and similar - which is the correct option. Glue types are a materials question, identifying only your own staff\'s names is a lookup rather than a text-mining task, and counting paragraphs is simple statistics.'
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
    explanation: 'Transformer models encode context-sensitive representations that support embeddings, classification, and extraction of terms from text, which is the correct option. Spine repair is conservation work, air-conditioning management is facilities operations, and website design is a separate development task.'
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
    explanation: 'Automatic classification assigns documents to a fixed category scheme by machine learning rather than by human term-by-term analysis, which is the correct option. Self-sorting books, patron self-return, and manual shelf reading describe physical handling and inventory checking, not the classification of intellectual content.'
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
    explanation: 'Metadata harvesting uses a protocol such as OAI-PMH to pull descriptive records from many repositories into a union catalogue or aggregator, which is the correct option. Harvesting crops is a literal metaphor, downloading copyrighted books is infringement rather than harvesting, and deleting records destroys metadata instead of collecting it.'
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
    explanation: 'Semantic search matches the meaning of a query to the meaning of documents, using embeddings, ontologies, or knowledge graphs, so it can bridge vocabulary mismatch - the correct option. Looking up synonyms of one word, searching by cover colour, and finding opening hours are respectively a thesaurus lookup, a visual attribute search, and a factual lookup, not semantic retrieval.'
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
    explanation: 'Citation indexing links a citing document to the works it cites, which allows related literature to be found regardless of subject-wording differences and underpins impact measures - the correct option. Book prices are acquisition data, counting punctuation is meaningless, and alphabetizing a bibliography is routine reference formatting.'
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
    explanation: 'Removing paywalls multiplies the material that can be crawled, indexed, and discovered, which is the correct option. Open access has not eliminated the need for indexing - more content means more indexing - it favours digital over print rather than restricting to print, and its premise is the removal of fees rather than their increase.'
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
    explanation: 'TF-IDF multiplies how often a term occurs in a document by how rare it is across the corpus, so words distinctive to one document score highly - the correct option. The other three are invented expansions that appear nowhere in the literature, and none describes a weighting scheme at all.'
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
    explanation: 'A knowledge graph stores entities and the typed relations between them, usually as triples that can be queried semantically, which is the correct option. A bar chart of loans, a staff flowchart, and a budget chart are visualisations of statistics or structures, not knowledge representation.'
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
    explanation: 'Machines can propose terms, but people must validate vocabulary, audit results for bias and error, and interpret context that models miss, which is the correct option. Coffee machines, heavy books, and light switches describe chores that no indexing function depends on.'
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
    explanation: 'OAI-PMH defines request verbs such as GetRecord, ListIdentifiers, and ListRecords by which an aggregator pulls metadata from repositories, which is the correct option. It is not an AI conversational protocol, it has no security function, and it says nothing about how books are bound.'
  },
  {
    id: 'm6-q91',
    module: 'Module 6: Digital & AI Indexing',
    question: 'A term occurs 4 times in a 200-word document and in 50 of the 10,000 documents in the corpus. Using TF = frequency/length and IDF = ln(N/df), what is its TF-IDF weight?',
    options: [
      'Approximately 0.106',
      'Approximately 0.020',
      'Approximately 5.298',
      'Approximately 0.0001'
    ],
    correctAnswer: 0,
    explanation: 'TF = 4/200 = 0.02 and IDF = ln(10,000/50) = ln(200) = about 5.298, so TF-IDF = 0.02 x 5.298 = about 0.106, the correct option. The 0.020 option stops at the term frequency, the 5.298 option reports the IDF alone, and the last option multiplies TF by df/N instead of dividing N by df.'
  },
  {
    id: 'm6-q92',
    module: 'Module 6: Digital & AI Indexing',
    question: 'A digital library must automatically aggregate descriptive records from forty institutional repositories. Which approach is most appropriate?',
    options: [
      'Use OAI-PMH requests such as ListRecords to harvest Dublin Core metadata from each repository',
      'Ask each repository to email its full texts once a month',
      'Retype every record by hand into a spreadsheet',
      'Crawl and index the PDF files alone, without any metadata exchange'
    ],
    correctAnswer: 0,
    explanation: 'OAI-PMH is the standard request protocol for pulling metadata records in bulk from repositories, and Dublin Core is the common schema carried in those responses, so the correct option fits both requirements. Emailing full texts moves copyrighted content instead of metadata, manual retyping does not scale to forty sources, and PDF crawling without metadata exchange loses titles, authors, and identifiers.'
  },
  {
    id: 'm6-q93',
    module: 'Module 6: Digital & AI Indexing',
    question: 'Which retrieval task is best served by a transformer-based embedding model rather than exact keyword matching?',
    options: [
      'Finding documents on "physician burnout" when the records use "doctor fatigue" and share no keywords',
      'Counting exact occurrences of the string "MRI"',
      'Sorting records by year of publication',
      'Generating a shelf-mark from a barcode'
    ],
    correctAnswer: 0,
    explanation: 'Embeddings place both phrases near each other in vector space, so a semantic model retrieves the second expression even though the words differ - exactly the vocabulary-mismatch case in the correct option. Exact string counting, sorting by date, and converting a barcode are deterministic operations that require no semantic representation.'
  },
  {
    id: 'm6-q94',
    module: 'Module 6: Digital & AI Indexing',
    question: 'An automatic classifier correctly labels 420 of 500 test documents. What is its accuracy, and what is the main caution about relying on that figure?',
    options: [
      '84%, but class imbalance can make accuracy misleading, so per-class precision and recall should also be reported',
      '84%, and no further evaluation is needed once accuracy is known',
      '16%, which is the proportion of documents classified incorrectly',
      '420%, because accuracy is expressed as a count of correct labels'
    ],
    correctAnswer: 0,
    explanation: 'Accuracy = 420/500 = 84%, and the caution is that a dominant class can inflate that number while minority categories perform poorly, so the correct option is right on both counts. Reporting 16% confuses error rate with accuracy, 420% mistakes a count for a percentage, and the claim that no further metrics are needed ignores exactly the class-imbalance problem that accuracy hides.'
  },

  // Module 7: Practical Exercises & Synthesis (Q91 - Q104)
  {
    id: 'm7-q91',
    module: 'Module 7: Practical Synthesis',
    question: 'When indexing a paper titled "Adoption of Artificial Intelligence in Nigerian University Libraries", which term represents the core technology?',
    options: ['Artificial intelligence', 'University libraries', 'Nigeria', 'Students'],
    correctAnswer: 0,
    explanation: 'Artificial intelligence is the technology whose adoption is being studied, so it carries the core subject of the title. "University libraries" is the institutional setting, "Nigeria" is the geographic facet, and "Students" does not appear in the title at all, so none of them can be the core technology.'
  },
  {
    id: 'm7-q92',
    module: 'Module 7: Practical Synthesis',
    question: 'In the same title ("Adoption of Artificial Intelligence in Nigerian University Libraries"), what represents the institutional setting?',
    options: ['University libraries', 'Smartphones', 'Agriculture', 'Legal courts'],
    correctAnswer: 0,
    explanation: 'University libraries are the type of institution in which the adoption takes place, so they form the institutional setting. Smartphones, agriculture, and legal courts are absent from the title, so indexing any of them would introduce content the document does not support.'
  },
  {
    id: 'm7-q93',
    module: 'Module 7: Practical Synthesis',
    question: 'What geographic context is specified in that title?',
    options: ['Nigeria', 'United Kingdom', 'Canada', 'Australia'],
    correctAnswer: 0,
    explanation: 'The adjective "Nigerian" fixes the study\'s geographic scope as Nigeria, which is the correct option. The United Kingdom, Canada, and Australia appear nowhere in the title, so choosing any of them would assign a place facet the document does not have.'
  },
  {
    id: 'm7-q94',
    module: 'Module 7: Practical Synthesis',
    question: 'If a search retrieves 50 documents, and 40 of them are relevant, what is the Precision?',
    options: ['80%', '50%', '40%', '100%'],
    correctAnswer: 0,
    explanation: 'Precision = relevant retrieved / total retrieved = 40/50 = 80%, so the correct option is 80%. The 40% figure is 40/100 and would only apply if the collection held 100 relevant records (a recall calculation), 50% would require 25 relevant hits, and 100% would mean every retrieved document was relevant.'
  },
  {
    id: 'm7-q95',
    module: 'Module 7: Practical Synthesis',
    question: 'If there are 100 total relevant documents in a collection, and a search successfully retrieves 40 of them, what is the Recall?',
    options: ['40%', '80%', '100%', '20%'],
    correctAnswer: 0,
    explanation: 'Recall = relevant retrieved / total relevant in the collection = 40/100 = 40%, which is the correct option. The 80% figure is a precision-style ratio (for example 40 of 50 retrieved), 100% would mean every relevant document was found, and 20% would require only 20 relevant hits.'
  },
  {
    id: 'm7-q96',
    module: 'Module 7: Practical Synthesis',
    question: 'Which standard governs thesaurus construction principles?',
    options: ['ANSI/NISO Z39.19', 'ISO 9001', 'AACR2', 'RDA'],
    correctAnswer: 0,
    explanation: 'ANSI/NISO Z39.19 is the guidelines standard for the construction, format, and management of monolingual controlled vocabularies, so it governs thesaurus work. ISO 9001 is a quality-management standard, while AACR2 and RDA are cataloguing codes for describing publications, not vocabulary construction.'
  },
  {
    id: 'm7-q97',
    module: 'Module 7: Practical Synthesis',
    question: 'Which standard governs guidelines for abstracts?',
    options: ['ANSI/NISO Z39.14', 'ANSI/NISO Z39.19', 'ISBN Standard', 'ISSN Standard'],
    correctAnswer: 0,
    explanation: 'ANSI/NISO Z39.14 is the standard covering the types, elements, style, and presentation of abstracts, so it is the correct option. Z39.19 addresses thesauri rather than abstracts, and ISBN and ISSN are numbering systems for books and serials respectively.'
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
    explanation: 'A pre-coordinate string fixes the facets and their citation order, so the entry is specific and the context of each term is visible to anyone browsing the list. Infinite speed, zero human effort, and automatic translation are not properties of any indexing system, and in fact pre-coordinate strings still require intellectual analysis to build.'
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
    explanation: 'Because terms are stored separately, a searcher can combine them in any order with AND, OR, and NOT, which is the flexibility the correct option describes. A fixed card-catalogue arrangement is characteristic of pre-coordinate practice, and paper conservation and the elimination of abstracts have nothing to do with how terms are coordinated.'
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
    explanation: 'The app is built to give mastery of the professional competencies of LIS 814 - indexing, abstracting, vocabulary control, and retrieval evaluation - which is the correct option. Memorizing titles, building shelves, and selling textbooks are not learning objectives of an indexing and abstracting course.'
  },
  {
    id: 'm7-q101',
    module: 'Module 7: Practical Synthesis',
    question: 'A search returns 80 documents, 60 of which are relevant, and a gold standard shows the database holds 300 relevant records. What are the precision, recall, and F1?',
    options: [
      'Precision 75%, Recall 20%, F1 approximately 31.6%',
      'Precision 20%, Recall 75%, F1 approximately 31.6%',
      'Precision 75%, Recall 20%, F1 approximately 47.5%',
      'Precision 25%, Recall 20%, F1 approximately 22.2%'
    ],
    correctAnswer: 0,
    explanation: 'Precision = 60/80 = 75%, recall = 60/300 = 20%, and F1 = 2PR/(P+R) = 2(0.75)(0.20)/0.95 = 0.30/0.95 = about 31.6%, which is the correct option. The second option swaps precision and recall, the third takes the arithmetic mean of 75% and 20% (47.5%), which overstates performance because F1 is a harmonic mean, and the last option uses 20/80, a denominator that belongs to neither measure.'
  },
  {
    id: 'm7-q102',
    module: 'Module 7: Practical Synthesis',
    question: 'Under Ranganathan\'s PMEST facets, which mapping is correct for "youth" (a class of persons), "political participation" (an activity), "Nigeria" (a place), and "2015" (a period)?',
    options: [
      'Personality, Energy, Space, Time',
      'Matter, Energy, Space, Time',
      'Personality, Matter, Space, Time',
      'Personality, Energy, Space, Matter'
    ],
    correctAnswer: 0,
    explanation: 'Persons fall under Personality, activities under Energy, places under Space, and periods under Time, so the correct option matches all four facets. "Matter" wrongly treats a class of people as material, substituting Matter for Energy in the third option denies that participation is a process, and classifying a period as Matter mistakes a temporal facet for a substance.'
  },
  {
    id: 'm7-q103',
    module: 'Module 7: Practical Synthesis',
    question: 'Which option correctly matches each task to the standard that governs it?',
    options: [
      'Thesaurus construction: ANSI/NISO Z39.19; abstract writing: ANSI/NISO Z39.14; bibliographic description: RDA',
      'Thesaurus construction: ANSI/NISO Z39.14; abstract writing: ANSI/NISO Z39.19; bibliographic description: ISBN',
      'Thesaurus construction: ISO 9001; abstract writing: MARC 21; bibliographic description: ISSN',
      'Thesaurus construction: ANSI/NISO Z39.19; abstract writing: ANSI/NISO Z39.19; bibliographic description: DOI'
    ],
    correctAnswer: 0,
    explanation: 'Z39.19 covers controlled vocabularies, Z39.14 covers abstracts, and RDA is the code for resource description, so the first option matches all three tasks. The second option simply swaps the two NISO standards and treats an identifier prefix as a description code, the third substitutes a quality-management standard and two identifier systems for the relevant standards, and the fourth applies the thesaurus standard to abstracts as well.'
  },
  {
    id: 'm7-q104',
    module: 'Module 7: Practical Synthesis',
    question: 'A service serves searchers whose vocabulary varies widely and cannot afford to miss relevant records. Which combination of design features best meets that need?',
    options: [
      'A controlled vocabulary with USE/UF synonym links, post-coordinate combination at search time, and informative abstracts for screening',
      'Title-only keyword indexing with fixed pre-coordinate strings and no abstracts',
      'Author filing with no subject access and no vocabulary control',
      'Free-text indexing only, with no vocabulary control and no abstracts'
    ],
    correctAnswer: 0,
    explanation: 'USE/UF links collapse synonyms onto one preferred term, post-coordinate combination lets searchers build the query they need, and informative abstracts let users screen results, so together they maximize recall without sacrificing screening. Title-only fixed strings miss concepts absent from titles, author filing gives no subject access at all, and free text without control or abstracts leaves the vocabulary-mismatch problem completely untreated.'
  },
];
