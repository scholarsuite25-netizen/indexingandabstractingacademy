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
  /** Optional concept diagram (see DIAGRAM_IDS in bookTypes.ts) */
  diagramId?: import('./bookTypes').DiagramId;
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
        summary: 'Indexing and abstracting are the two operations that turn documents into findable surrogates: index entries locate subjects, while abstracts let readers judge relevance before retrieval. The lecture defines both, traces Lancaster\'s chain of decisions, and anchors professional practice in Z39.19, Z39.14, ISO 5963, and ISO 214.',
        content: [
          'Indexing is the systematic analysis of a document in order to determine what it is about, combined with the representation of that determination as access points: the terms, headings, class numbers, or identifiers through which a searcher can reach the item. Every index entry therefore embodies two separable acts, the interpretation of content and the translation of that interpretation into the vocabulary of an indexing language. Indexing differs from bibliographic description, which answers what an item is, and from abstracting, which answers what an item says.',
          'Lancaster\'s familiar formulation treats indexing as a chain of decisions running from reading and interpretation, through term selection and entry formation, to recording and maintenance. Each link is a point at which relevance can be lost: an indexer who misreads the scope of a collection produces entries that neither retrieve the right documents nor exclude the wrong ones. Because the chain is interpretive rather than mechanical, the profession measures inter-indexer consistency instead of assuming that subject designation is objective.',
          'Abstracting is the parallel operation of reading a document and condensing its essential content into a short, coherent, and self-contained statement that allows a reader to judge whether to consult the original. A good abstract reports purpose, scope, method, principal findings, and conclusions without evaluative commentary, and it stands alone: a reader who sees only the abstract should still understand what the document claims and how it went about establishing it.',
          'The two operations are interrelated because both produce bibliographic surrogates standing in for documents the searcher has not yet seen. An index entry locates a subject within a collection, while an abstract permits a relevance decision before the full text is retrieved. Either surrogate can fail on its own terms: poor indexing creates silence when relevant documents are never surfaced or noise when irrelevant ones are retrieved, while a weak abstract wastes the searcher\'s time even when the record itself is correct.',
          'Consider a Nigerian journal article titled "Artificial intelligence applications in university libraries in Nigeria." An indexer assigns descriptors such as Artificial intelligence, University libraries, Nigeria, and Automated library systems, while withholding incidental mentions such as a city name or a programming language unless the document treats them centrally. The accompanying abstract, by contrast, states the study design, identifies the institutions surveyed, describes a chatbot reference pilot, and reports the outcomes observed. The entries locate the article; the abstract lets a reader decide whether to read it.',
          'Practice is disciplined by published standards, and students are expected to know which document governs which operation. ANSI/NISO Z39.19 governs the construction, format, and management of monolingual controlled vocabularies; ANSI/NISO Z39.14 governs the purpose, types, and writing of abstracts; ISO 5963 describes examining documents, determining their subjects, and selecting subject headings; and ISO 214 states international abstracting requirements. None of these numbers should be cross-quoted, because each disciplines a different link in the chain.',
          'The intellectual history of the field is short but dense. Ranganathan\'s five laws, especially "save the time of the reader" and "every book its reader," restate indexing as a service relationship between a collection and a community of searchers rather than a filing chore. Foskett\'s treatment of the subject approach shows how controlled headings translate ordinary language into retrieval-ready form. Taube, Kent, and the coordinate-indexing movement added the decisive insight that concepts may be recorded separately and combined later, at the moment of search.',
          'In the digital era both operations have been automated: statistical weighting and dense embeddings assign terms at scale, while large language models generate fluent abstracts in seconds. Automation changes the professional\'s task from executing every step to auditing machine output against the standards above, because a generated abstract can silently state findings the source never reported. For African university libraries working with thin cataloguing establishment and harvested metadata, consistent local subject analysis remains the prerequisite for union catalogue and discovery-layer visibility.'
        ],
        keyTakeaways: [
          'Indexing is interpretation plus translation: aboutness is judged first, then expressed in the vocabulary of an indexing language.',
          'Index entries and abstracts are bibliographic surrogates; a defect in either becomes silence or noise in retrieval.',
          'Z39.19 governs vocabularies, Z39.14 governs abstracts, ISO 5963 governs subject analysis, and ISO 214 governs abstract content.',
          'Ranganathan\'s laws and Foskett\'s subject approach frame indexing as a service to searchers, not a clerical filing task.',
          'AI-generated abstracts and term assignments require standards-based human audit, especially in resource-constrained cataloguing units.'
        ],
        diagramId: 'ch1-indexing-process'
      },
      {
        id: 'lec-1-2',
        moduleId: 'mod-1',
        title: 'Chapter 2: Objectives of Subject Indexing',
        subtitle: 'Why Subject Indexing Matters in Library and Information Science',
        category: 'Lectures',
        tags: ['Objectives', 'Subject Indexing'],
        readTime: '10 min read',
        summary: 'Subject indexing answers the question "What is this document about?" by separating principal subjects from incidental mentions and translating aboutness into authorized descriptors. The lecture develops the retrieval objectives that justify the exercise, from recall and precision gains to current-awareness services.',
        content: [
          'Subject indexing is the intellectual process of determining the subject or subjects represented in a document and assigning appropriate index terms to express them. It answers one fundamental question, "What is this document about?", and it does so on behalf of users who generally do not know the wording, author, or title of the documents they need. Unlike bibliographic description, subject indexing is interpretive: two competent indexers may weigh the same document differently, which is why consistency is measured rather than assumed.',
          'The decisive skill is distinguishing what a document merely mentions from what it is about. Aboutness denotes the subjects a document treats with sufficient centrality, depth, and argumentative commitment that a reader would report that the document deals with them; mention denotes appearance without such treatment, as in a passing example, a name in a literature review, or a method borrowed from another field. A paper may mention Nigeria, libraries, students, and artificial intelligence, yet be about only artificial intelligence applications in university libraries.',
          'The boundary between aboutness and mention is a matter of degree and function of treatment rather than a binary property of word occurrence. If a study of agricultural extension in Benue State opens with a paragraph on climate variability as background, climate variability is contextual; but if two of the five findings concern rainfall-driven yield loss, the same concept has become part of the document\'s aboutness. This is the judgment Foskett urges indexers to make by reading for the author\'s treatment of a topic rather than for its presence.',
          'From that judgment follow the recognized objectives of subject indexing. First, it enables retrieval by letting users locate relevant documents quickly when title and author are unknown. Second, it represents content concisely through standardized terms so that a collection speaks one vocabulary. Third, it improves precision by filtering out documents that share vocabulary without sharing subject. Fourth, it saves the reader\'s time, which is Ranganathan\'s first law applied to the index rather than to the shelf.',
          'Further objectives extend the index beyond one-shot searching. Exhaustive and consistent subject access supports current awareness services and selective dissemination of information, in which new documents are matched against standing profiles of interest. It also underpins citation and related-item services, union catalogues, and interlibrary lending, because a document that cannot be found by subject cannot be requested. In this sense the subject index is not an accessory to the catalogue but an instrument of collection-level intelligence.',
          'Objectives interact trade-offs that the indexer manages consciously. Greater exhaustivity, indexing more of the document\'s concepts, raises the chance that a relevant item is retrieved but also raises the volume of irrelevant material; greater specificity, choosing the term that matches the exact concept, sharpens precision but depends on the granularity of the available vocabulary. Cleverdon\'s Cranfield work showed that vocabulary, syntactic rules, and system organization jointly determine retrieval performance, so objectives cannot be pursued independently of the indexing language in use.',
          'Worked example: an article on social media use by university students for academic research in Nigeria. The indexer decides the principal subjects are social media, students, and academic research, with Nigeria as a geographic addition, and treats Instagram as a mention unless it is analyzed as a platform. Under a controlled vocabulary the entries are coordinated under authorized forms, while a keyword system would index the surface words and retrieve documents about marketing or entertainment that merely share the term "social media."',
          'The digital era has not dissolved these objectives; it has redistributed them. Search engines perform subject access at enormous scale using statistical and neural methods, yet they still confuse mention with aboutness, which is why a query for one topic returns pages that merely cite it. In African university libraries, where discovery layers are frequently fed by harvested metadata of uneven quality, deliberate human subject indexing remains the most cost-effective way to guarantee that local theses, conference papers, and institutional repository items are findable by topic.'
        ],
        keyTakeaways: [
          'Subject indexing converts an interpretive judgment of aboutness into authorized descriptors that users can search.',
          'Aboutness is a matter of degree and function of treatment, not of word occurrence; mention must be filtered out.',
          'The recognized objectives are retrieval, concise representation, precision, time saving, and support for CAS and SDI.',
          'Exhaustivity and specificity are policy trade-offs, and Cleverdon showed vocabulary, syntax, and system design govern outcomes.',
          'Automated engines still confuse mention with aboutness, so human subject analysis remains essential for local and repository content.'
        ],
        diagramId: 'ch2-aboutness-mentions'
      },
      {
        id: 'lec-1-3',
        moduleId: 'mod-1',
        title: 'Chapter 3: Indexing Languages (Controlled vs. Natural Language)',
        subtitle: 'LCSH, MeSH, Thesauri, Controlled Vocabularies, and Natural Language',
        category: 'Lectures',
        tags: ['Indexing Languages', 'Controlled Vocabulary', 'LCSH', 'MeSH'],
        readTime: '14 min read',
        summary: 'An indexing language is a structured system of terms, symbols, and rules for representing subject content, ranging from controlled vocabularies and classification schemes to free-text keyword systems. The lecture compares controlled and natural language on synonym control, homography, currency, and cost, and relates each to ISO 25964 and Z39.19.',
        content: [
          'An indexing language is a structured system of terms, symbols, and rules used to represent the subject content of information resources and to make that representation retrievable. Its components are vocabulary, the permitted words or numbers; syntax, the rules for combining them; and semantics, the meanings those combinations carry. The familiar examples are Library of Congress Subject Headings, Medical Subject Headings, faceted and enumerative classification schemes, thesauri, and the uncontrolled keyword systems that power most full-text search.',
          'A controlled vocabulary is an authorized, restricted list of terms used consistently for indexing and searching. Instead of allowing cars, automobiles, motor vehicles, and motorcars to scatter results, the vocabulary designates one preferred descriptor and records the others as non-preferred alternatives. Z39.19 formalizes this architecture through three relationship types: equivalence relations such as use and used for, hierarchical relations such as broader and narrower terms, and associative relations such as related terms, all accompanied by scope notes that fix the intended meaning of each heading.',
          'Natural language refers to the ordinary words and expressions authors and users actually write: computer, mobile phone, social media, artificial intelligence. Keyword indexing extracts these terms directly from titles, abstracts, or full text, so no authority file is required and no term becomes obsolete on the day a new one is coined. The cost is synonym scatter and homograph collision: one concept appears under many words and one word carries many meanings, so retrieval quality depends on the search strategy and the ranking algorithm rather than on the index itself.',
          'The trade-off can be stated directly. Controlled vocabularies deliver consistency, high precision, and predictable browsing, but they require trained indexers, editorial maintenance, and a vocabulary that keeps pace with the field; they also impose vocabulary lag, because a new concept cannot be indexed until its term is authorized. Natural language delivers currency, low entry cost, and excellent recall for distinctive phrasings, but it transfers the burden of synonymy, ambiguity, and relevance ranking to the searcher.',
          'Neither approach is universally superior, and most mature systems combine them. MEDLINE indexes with MeSH while also carrying author keywords; multidisciplinary databases apply controlled subject schemes alongside free-text fields; and modern discovery layers blend descriptor search, machine-assigned terms, and full-text ranking. This hybrid strategy captures the precision of authority control and the recall of free text, which is effectively a practical response to Cleverdon\'s finding that vocabulary is one of the three determinants of retrieval performance.',
          'Worked mini-example: the concept "heart attack" appears in the literature as myocardial infarction, cardiac infarction, and heart attack. Under LCSH or MeSH the indexer assigns one authorized heading, so a searcher who enters any variant form is redirected by a use reference to that heading. In a keyword system the same query retrieves only documents that use the searcher\'s exact wording, so the indexer\'s vocabulary control is replaced by query expansion, stemming, or a synonym dictionary maintained by the platform.',
          'A further distinction concerns coordination. In pre-coordinate languages terms are combined at indexing time into a heading string such as Libraries Nigeria Automation, which fixes context but demands editorial precision. In post-coordinate systems each concept is stored separately and combined at search time with Boolean or proximity operators, restoring flexibility while transferring syntactic work to the user. ISO 25964 and Z39.19 both anticipate interoperability, so contemporary vocabularies are increasingly mapped to one another rather than built in isolation.',
          'For African university libraries the practical question is which indexing language a small team can sustain. Local and regional heading lists must be reconciled with imported vocabularies such as LCSH or MeSH, and staff shortages favour machine-assisted assignment. The durable answer is authority control at record level: consistent authorized forms, documented scope notes, and regular vocabulary mapping, so that locally indexed theses, conference papers, and repository items remain discoverable through national and international union catalogues.'
        ],
        keyTakeaways: [
          'An indexing language has three components: vocabulary, syntax, and semantics; examples span LCSH, MeSH, thesauri, and keyword systems.',
          'Controlled vocabularies deliver consistency and precision at the cost of maintenance and vocabulary lag.',
          'Natural language delivers currency and cheap entry at the cost of synonym scatter and homograph ambiguity.',
          'Z39.19 and ISO 25964 define the equivalence, hierarchical, and associative relations that structure controlled vocabularies.',
          'Most effective systems are hybrid, combining descriptors with free text to satisfy both precision and recall.',
          'Sustainable practice in resource-constrained libraries centres on authority control and vocabulary mapping rather than exhaustive manual indexing.'
        ],
        diagramId: 'ch3-controlled-natural'
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
        abstract: 'The official syllabus for LIS 814, setting out module objectives, the chapter sequence, and the competencies expected of postgraduate candidates. It defines the scope of indexing and abstracting as a field, lists the topics assessed, and frames the practical exercises that accompany each module. Candidates use it as the benchmark against which lecture coverage and reading lists are checked.'
      },
      {
        id: 'read-1-2',
        moduleId: 'mod-1',
        title: 'Indexing and Abstracting in Theory and Practice',
        author: 'Lancaster, F.W.',
        source: 'University of Illinois Graduate School of Library and Information Science',
        type: 'Article',
        abstract: 'The standard treatise on the field, treating indexing and abstracting as linked intellectual operations rather than clerical routines. Lancaster sets out the chain of decisions from reading and interpretation to term selection, entry formation, and recording, and he introduces evaluation concepts such as exhaustivity, specificity, noise, silence, and inter-indexer consistency that structure the whole course. The book remains the principal reference for the theory behind practical indexing rules.'
      },
      {
        id: 'read-1-3',
        moduleId: 'mod-1',
        title: 'The Subject Approach to Information',
        author: 'Foskett, D.J.',
        source: 'Clive Bingley',
        type: 'Article',
        abstract: 'A classic account of how subjects are determined and expressed through controlled headings, tracing the movement from ordinary language to authorized subject strings. Foskett explains why the indexer reads for the author\'s treatment of a topic rather than for mere word occurrence, and he surveys the vocabulary problems of synonymy, homography, and specificity that controlled vocabularies are built to solve. The work supplies the historical grounding for LCSH, MeSH, and thesaurus practice.'
      },
      {
        id: 'read-1-4',
        moduleId: 'mod-1',
        title: 'ISO 5963 — Methods for Examining Documents, Determining Their Subjects, and Selecting Subject Headings',
        author: 'International Organization for Standardization',
        source: 'ISO',
        type: 'Standard',
        abstract: 'The international standard describing the subject-analysis act itself: how a document is examined, how its subjects are decided, and how headings are chosen to represent them. It specifies the responsibilities of the indexer, the evidence to be consulted such as title, abstract, and contents, and the relationship between analysis and the controlled vocabulary in use. Paired with Z39.19 and Z39.14, it completes the standards frame for the course.'
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
        summary: 'A thesaurus is a structured, dynamically maintained vocabulary that states the semantic relationships among the terms used for indexing and retrieval. The lecture defines the three canonical relation types of Z39.19 and ISO 25964, works through a university-library entry, and narrates the standard eleven-step construction and revision methodology.',
        content: [
          'In information retrieval a thesaurus is a structured, controlled, and dynamically maintained vocabulary that displays the semantic relationships among the terms available for indexing and searching a subject field. It is not a synonym list: each entry designates one preferred term for use in indexing, records non-preferred variants that lead to it, situates the concept in a hierarchy, points to concepts that are not hierarchically related but intellectually connected, and carries a scope note that fixes the intended meaning. Z39.19 and ISO 25964 are the governing specifications.',
          'Three relation types carry the structure. The equivalence relation pairs a preferred term with its non-preferred variants: USE directs a user or indexer from an unauthorized form to the authorized one, and UF (used for) records on the authorized entry the variants it absorbs, and the two are reciprocal. The hierarchical relation pairs broader terms (BT) with narrower terms (NT), also reciprocal, and may be generic, instance-based, or partitive. The associative relation (RT) links concepts that are neither co-extensive nor subordinate, such as a discipline and its practitioners.',
          'Consider the entry for University Libraries. Its broader term is Academic Libraries; its narrower terms might be Digital University Libraries and Medical University Libraries; its related terms might be University Education and Librarians; and it is used for the variant Higher Education Libraries. An indexer who encounters the variant is redirected by the USE reference, a searcher browsing the hierarchy can widen from University Libraries to Academic Libraries or narrow to Medical University Libraries, and a searcher who thinks in terms of related concepts can pivot without leaving the authorized structure.',
          'Homographs force editorial decisions that the vocabulary must record. Bank, cell, and Java each denote several unrelated concepts, so the thesaurus either splits them with a qualifier, as Java (Programming language) against Java, or assigns distinct headings with separate scope notes. Z39.19 treats the scope note as the mechanism that makes a term unambiguous in the context of a particular collection, which is why an unnotated ambiguous heading is a defect even when the term itself is in general use.',
          'Construction follows a recognizable sequence. First the subject field is defined, since a thesaurus cannot be built without boundaries. Candidate terms are then harvested from running text, existing vocabularies, classification schedules, and actual user queries. Synonyms and near-synonyms are grouped, homographs are identified, and a preferred term is selected on the grounds of currency, unambiguity, specificity, and the vocabulary of the user community. Only then are hierarchical, associative, and equivalence relationships established.',
          'Establishing relationships requires judgment rather than dictionary lookup. Broader and narrower terms must be genuinely co-extensive in a generic sense, not merely associated: Libraries has Academic Libraries and Public Libraries as narrower terms, but Not Libraries is not a narrower term at all. Associative links should be drawn sparingly and reciprocally, because an RT that points to a broader term corrupts the hierarchy while an RT between genuinely different facets, such as Librarians and Library education, genuinely aids navigation.',
          'Testing and maintenance complete the work. The thesaurus is displayed both alphabetically, so that users arriving with a known term can find it, and hierarchically or alphabetically by relationship, so that indexers can verify reciprocity and spot orphan entries. Every entry is checked for consistency of relationship, for missing scope notes, and for unused variants. Finally a revision cycle is instituted, because subject fields move and vocabulary lag otherwise accumulates until the thesaurus describes a discipline that no longer exists.',
          'In digital practice the thesaurus has become infrastructure again. Its relations are serialized in formats such as SKOS for use in linked-data catalogues, they power query expansion and facet displays in discovery layers, and they provide the human-auditable backbone against which embedding-based retrieval is checked. For African university libraries, building and mapping a modest local thesaurus for a thesis repository often yields better discoverability than wholesale adoption of a foreign scheme, provided scope notes and cross-maps to LCSH or MeSH are maintained.'
        ],
        keyTakeaways: [
          'A thesaurus designates preferred terms, absorbs variants, hierarchizes concepts, and fixes meaning with scope notes.',
          'The three canonical relations are equivalence (USE/UF), hierarchy (BT/NT), and association (RT), each reciprocal by rule.',
          'Preferred-term selection is an editorial judgment based on currency, unambiguity, specificity, and user vocabulary.',
          'Homographs are resolved by qualification or scope notes; an ambiguous unannotated heading is a genuine defect.',
          'Construction follows a sequence from field definition and term harvesting through relationship building to testing and revision.',
          'Serialized as SKOS, the thesaurus now underpins linked-data catalogues and supplies an auditable check on vector retrieval.'
        ],
        diagramId: 'ch6-semantic-relationships'
      },
      {
        id: 'lec-2-2',
        moduleId: 'mod-2',
        title: 'Chapter 5: Semantics and Syntax in Indexing',
        subtitle: 'Meaning, Arrangement, and Combination of Terms',
        category: 'Lectures',
        tags: ['Semantics', 'Syntax', 'Indexing Languages'],
        readTime: '12 min read',
        summary: 'Semantics governs what index terms mean, while syntax governs how those terms are arranged and combined into retrievable statements. The lecture separates synonymy, homography, and near-synonymy as semantic problems, and citation order, coordination, and role operators as syntactic ones, showing how both must be controlled for consistent subject access.',
        content: [
          'Semantics concerns the meaning of the words and terms an indexing language admits, and semantic control is the editorial work of ensuring that one concept maps to one authorized term and that one term carries one intended meaning within the collection. The classical semantic problems are synonymy, where several forms denote the same concept; homography, where one form denotes several concepts; and near-synonymy, where two forms denote concepts that overlap closely enough to confuse indexers without being truly equivalent. Each problem degrades retrieval in a different way.',
          'Synonymy produces scatter. If a collection indexes the same concept variously as automobile, car, and motor vehicle, a searcher who supplies only one form retrieves only the portion of the literature that used it, and recall silently falls. Homography produces noise instead: a search for cell retrieves both cellular biology and spreadsheet software. Near-synonymy is the subtlest case, because terms such as information retrieval and document retrieval may denote a field and its predecessor rather than two interchangeable labels, and treating them as equivalents inflates both precision errors and consistency problems.',
          'Semantic control addresses these problems through designated preferred terms with used-for references, scope notes, and, where homography persists, qualifiers that split the senses, as with Java (Programming language). Authority files extend the same discipline to names, places, and corporate bodies. The practical test is whether an indexer who reads only the scope note can assign the term without consulting a senior colleague, because a heading that requires oral tradition to use correctly has failed as vocabulary control.',
          'Syntax concerns the arrangement and combination of terms once their meanings are fixed. In a pre-coordinate system syntax appears at indexing time: concepts are fused into a heading string whose order carries meaning, so that "Libraries - Nigeria - Automation" and "Automation - Libraries - Nigeria" may be read differently depending on the citation order the scheme prescribes. Faceted classification makes the same point more rigorously, because the order in which a thing, its property, and its activity are joined determines the class that results.',
          'Syntax also appears as explicit operators. PRECIS, developed by Derek Austin for the British National Bibliography, preserves context by assigning each term in a subject statement a role that marks whether it performs the action, supplies the place, states the method, or receives the result, so that the statement can be transposed for display without losing its meaning. This is the direct answer to the oldest complaint about alphabetically filed headings, namely that a string of unmarked nouns does not say which noun governs which.',
          'Semantics and syntax are therefore complementary rather than competing controls. A vocabulary of precisely distinguished terms that may be combined freely still yields ambiguous compound headings, while a perfectly disciplined citation order applied to vague or overlapping terms merely organizes confusion. Retrieval quality requires both, which is why Cleverdon treated vocabulary and the syntactic rules for combining terms as two of the three determinants of system performance, the third being the organization of the system itself.',
          'The measurement of both is inter-indexer consistency. Disagreement between indexers concentrates where semantic boundaries are unclear, such as near-synonyms, and where syntactic decisions are underspecified, such as which concepts from a complex title deserve coordination and in what order. Recording these disagreements in an editorial log is the cheapest form of vocabulary maintenance available to a library, because each disputed case reveals a missing scope note, an unnecessary term, or an unwritten citation rule.',
          'In contemporary systems the two controls are handled differently. Parsers and named-entity recognizers recover syntactic relations from running text automatically, and embeddings place semantically related terms near one another in vector space, so that query expansion can proceed without a thesaurus. Yet word-sense disambiguation remains unreliable, and multilingual or code-switched collections, common in Nigerian academic writing where English shares space with Yoruba, Igbo, or Hausa, make the semantic problem harder rather than easier. Human-maintained semantic and syntactic rules still anchor the pipeline.'
        ],
        keyTakeaways: [
          'Semantic control maps one concept to one authorized term and fixes meaning with scope notes and qualifiers.',
          'Synonymy causes silence through scatter, homography causes noise through ambiguity, and near-synonymy corrupts consistency.',
          'Syntax governs term arrangement: citation order in pre-coordinate headings, facet order, and role operators such as those in PRECIS.',
          'Semantics without syntax yields ambiguous compound headings; syntax without semantics organizes confusion precisely.',
          'Inter-indexer consistency is the empirical measure of both controls and doubles as a vocabulary-maintenance diagnostic.',
          'Modern NLP automates much syntactic recovery, but word-sense and multilingual disambiguation keep semantic control a human responsibility.'
        ],
        diagramId: 'ch5-thesaurus-steps'
      },
      {
        id: 'lec-2-3',
        moduleId: 'mod-2',
        title: 'Vocabulary Control in Practice: Scope Notes, Authority Files, and Maintenance',
        subtitle: 'Writing scope notes, managing authority records, and keeping vocabularies current',
        category: 'Lectures',
        tags: ['Scope Notes', 'Authority Control', 'Vocabulary Maintenance'],
        readTime: '11 min read',
        summary: 'Controlled vocabularies fail less often at construction than at maintenance. This lecture treats the scope note as the primary instrument of semantic precision, connects subject heading authority files to record-level authority control, and sets out an editorial lifecycle for proposing, testing, and retiring terms.',
        content: [
          'A scope note is the short editorial statement attached to a term that fixes its intended meaning within a particular vocabulary. Z39.19 treats it as the principal defence against ambiguity, because a term alone cannot declare what it includes, what it excludes, or in which sense it is authorized. Where a vocabulary must also signal boundaries, an exclusion or inclusion statement accompanies the note. A heading without a scope note is usable only as long as no indexer disputes its boundary, and disputes are inevitable in a live collection.',
          'Good scope notes are positive, specific, and local. They state what the term covers in the context of the collection rather than reproducing a dictionary definition of the world, and they distinguish the term from its nearest neighbours. Compare a weak note, "Information literacy: knowledge about information," with a functional one, "Information literacy: the ability to identify, locate, evaluate, and use information effectively; excludes computer hardware skills and discipline-specific research methods." The second note tells an indexer how to decide a borderline case, which is the note\'s whole purpose.',
          'Scope notes work together with authority files. An authority record for a subject or a name fixes the authorized form, records the variants that lead to it, cites the source that justifies it, and carries the note that explains its use. Because authority control is applied at record level rather than to a heading in isolation, one change to an authority record can be propagated across a catalogue, which is why institutions with a large retrospective stock hesitate to alter authorized forms and why documented change control matters more than perfect original decisions.',
          'Homographs force the same machinery. Where one written form carries unrelated senses, the vocabulary either qualifies the term, as with Java (Programming language), or issues two entries with separate notes. The editorial question is not which sense is more common in the world but which sense the collection indexes; a university agricultural collection may need Nutrient as a soil term while a medical collection needs it as a physiological one. Scope notes make that local decision explicit instead of leaving it to individual indexers.',
          'Maintenance follows a lifecycle. A term may be proposed by an indexer, a searcher, or an analysis of failed queries; the proposal is reviewed against the field and the existing hierarchy; the decision, including its rationale, is recorded; and the change is applied prospectively to new records with a documented policy on whether existing records are corrected retrospectively. The same lifecycle governs retiring a term, which is usually a redirection rather than a deletion, since obsolete headings must still resolve through use references for historical records.',
          'Practical audits catch most decay cheaply. Reciprocal relations are checked for symmetry, every use reference is confirmed to point to an existing authorized entry, headings that no record has used for a defined period are reviewed, and entries lacking scope notes are prioritized. Frequency lists drawn from catalogue and query logs reveal vocabulary lag directly: the terms users search but cannot find are precisely the terms the vocabulary has failed to authorize, and that gap is measurable without any advanced analytics.',
          'Interoperability now shapes maintenance choices. Where a local vocabulary is mapped to LCSH, MeSH, or a national scheme, an editorial change in one scheme has consequences in the others, so mapping tables become governed assets requiring version control. In linked-data environments each authorized form is published with a persistent URI and expressed in SKOS, allowing the vocabulary to be consumed as data by discovery layers and repository software rather than as a printed list that must be rekeyed.',
          'For African university libraries the maintenance problem is concrete: locally significant entities, including Nigerian institutions, authors, ethnic groups, and policy documents, are frequently absent from imported vocabularies, while transliteration and name variants multiply across records. A pragmatic programme maintains a thin local extension with carefully written scope notes and explicit mappings to LCSH or MeSH, harvests unmatched search terms as candidate additions, and reserves original construction for subject areas where no external vocabulary fits.'
        ],
        keyTakeaways: [
          'The scope note, not the term itself, carries the editorial decision about meaning and boundary.',
          'A functional scope note is positive, collection-local, and written to settle borderline indexing cases.',
          'Authority control operates at record level, so authorized-form changes propagate and need documented change control.',
          'Homographs are resolved by qualification or by separate entries whose notes reflect the collection, not the dictionary.',
          'Vocabulary maintenance is a lifecycle of proposal, review, recorded decision, application, and retirement.',
          'Query and catalogue logs supply free evidence of vocabulary lag, which local extensions and mappings can then close.'
        ],
        diagramId: 'ch7-scope-notes'
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
        abstract: 'ANSI/NISO Z39.19, Guidelines for the Construction, Format, and Management of Monolingual Controlled Vocabularies, is the governing North American standard for the structure this module studies. It specifies the three canonical relationship types, equivalence, hierarchy, and association, together with the display formats, scope-note conventions, and editorial policies required to build and maintain a vocabulary. It is the reference against which the lecture\'s thesaurus entries and construction steps are checked.'
      },
      {
        id: 'read-2-2',
        moduleId: 'mod-2',
        title: 'ISO 25964-1 — Information and Documentation: Thesauri and Interoperability with Other Vocabularies',
        author: 'International Organization for Standardization',
        source: 'ISO',
        type: 'Standard',
        abstract: 'The international counterpart of Z39.19, superseding the older ISO 2788 guidelines for monolingual thesauri. Part 1 sets requirements for thesaurus structure, relationships, and display, and it adds an explicit concern with interoperability between vocabularies, which is why it also specifies how a thesaurus should relate to classification schemes, title files, and lists of named entities. Students should be able to state the division of labour between this standard and Z39.19 without confusing their numbers.'
      },
      {
        id: 'read-2-3',
        moduleId: 'mod-2',
        title: 'Thesaurus Construction and Use: A Practical Manual',
        author: 'Aitchison, J., Gilchrist, A. and Bawden, D.',
        source: 'Facet Publishing',
        type: 'Article',
        abstract: 'The standard practitioner\'s manual for building vocabularies, moving from subject-field definition and term harvesting through screening, relationship building, and testing to publication and revision. Its value for this module lies in the worked procedures: how candidate lists are screened for synonyms and homographs, how preferred terms are chosen, and how a thesaurus is evaluated before it is released to indexers. The manual is widely used as the operational companion to Z39.19 and ISO 25964.'
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
        summary: 'Pre-coordinate systems synthesize concepts into a subject string at indexing time, while post-coordinate systems store concepts separately and let the searcher combine them at query time. The lecture compares the two on specificity, flexibility, cost, and user skill, and shows why modern discovery layers are hybrids of both.',
        content: [
          'Pre-coordinate indexing combines concepts at the time of indexing, before storage or searching, so that the record already carries a syntactically arranged subject statement. An entry such as University libraries - Nigeria - Automation is not three independent terms but a single coordinated string whose internal order expresses the relationship among them. Because the synthesis has been performed in advance, the searcher receives a ready-made subject assertion rather than a set of loose concepts to assemble.',
          'Reading such an entry requires attention to citation order, the convention that determines which concept leads and which follows. Under one citation order "University libraries - Nigeria - Automation" foregrounds the library type and treats automation as its activity; reversing the order foregrounds automation as the class being discussed. The indexer, not the searcher, has fixed that emphasis, which is precisely why pre-coordinate schemes depend on editorial rules of citation order and why transposition schemes such as PRECIS were later invented to protect the context of the string.',
          'The strengths of pre-coordinate systems follow from that advance synthesis. They deliver high specificity, since each concept can be expressed in the vocabulary of the scheme rather than in the user\'s words; they make browsing predictable, because the headings of a printed or alphabetical subject index are self-explanatory; and they remove the need for query construction skill, which matters in public catalogues where users are not trained searchers. Classification schemes and traditional catalogue subject headings are pre-coordinate systems by design.',
          'Their weaknesses are symmetrical. The indexer must anticipate every legitimate search formulation, and any combination not anticipated is simply unavailable; strings are costly to formulate and to file; false coordination arises when a heading joins concepts that the document treats separately; and a fixed string cannot serve users who approach the subject from a different starting point. As collections and query volumes grew, the cost of enumerating combinations in advance became the decisive argument against the model.',
          'Post-coordinate indexing assigns each concept separately at indexing time and defers combination to retrieval time. The document record for the same item carries Artificial intelligence, University libraries, and Nigeria as independent terms, and the searcher joins them with Boolean operators, proximity operators, or truncation: artificial intelligence AND university libraries AND nigeria. Combination is therefore no longer an editorial act but a query act, and any combination the vocabulary permits can be formed on demand.',
          'The strengths are flexibility, recall, and economy of indexing effort: one record serves an unlimited number of queries, and the searcher controls the breadth of the request by adding or removing terms. The weaknesses are equally clear. Combination skill now rests with the user, careless conjunctions produce false drops where the terms co-occur without sharing a subject, and precision depends on query construction rather than on indexing quality. The trade is essentially that of moving syntactic work downstream from the professional to the searcher.',
          'Worked comparison: index a study of chatbot reference services in Nigerian university libraries. Under a pre-coordinate treatment the indexer decides in advance whether the string is "Reference services - Nigeria - Artificial intelligence" or "University libraries - Nigeria - Automation", and a searcher who wanted the other reading may not find it. Under a post-coordinate treatment the same item is retrieved by reference services AND Nigeria AND chatbots or by university libraries AND artificial intelligence, provided the vocabulary connects the variants through authority control.',
          'Historically the shift was enabled by mechanism. Coordinate indexing, advanced by Taube and Kent and realized in punched-card and later computerized systems, made independent term storage practical and made Boolean combination the standard retrieval syntax. Today the two models coexist: catalogue subject headings remain pre-coordinate strings, bibliographic databases store post-coordinate descriptors, and faceted discovery interfaces present pre-coordinate-looking displays that are generated on the fly from post-coordinate data. The syntax work has not disappeared; it has moved from the indexer\'s desk to the query parser and the facet engine.'
        ],
        keyTakeaways: [
          'Pre-coordinate systems synthesize subject strings at indexing time, fixing context and citation order in advance.',
          'They deliver specificity and browsable headings but cannot anticipate every search formulation and carry high editorial cost.',
          'Post-coordinate systems store concepts independently and combine them at query time with Boolean, proximity, and truncation.',
          'Post-coordinate retrieval gains flexibility and recall while transferring syntactic skill and precision control to the searcher.',
          'Coordinate indexing by Taube and Kent made independent term storage practical and Boolean combination the standard syntax.',
          'Modern discovery layers are hybrids that display pre-coordinate-like facets over post-coordinate data.'
        ],
        diagramId: 'ch9-pre-post-coordinate'
      },
      {
        id: 'lec-3-2',
        moduleId: 'mod-3',
        title: 'Chapters 8–11: Chain Indexing, Cyclic Indexing, SLIC, and PRECIS',
        subtitle: 'Advanced subject indexing systems and context preservation',
        category: 'Lectures',
        tags: ['Chain Indexing', 'PRECIS', 'SLIC', 'Cyclic Indexing'],
        readTime: '16 min read',
        summary: 'Four classical systems show different ways of generating access points from a subject statement: chain indexing derives entries from a classification schedule, cyclic indexing and SLIC enumerate controlled combinations, and PRECIS preserves semantic context through role operators. Each solves a different weakness of the alphabetical subject index.',
        content: [
          'Chain indexing, associated with S.R. Ranganathan, is a procedure for converting a class mark into alphabetical subject entries so that a classified file and an alphabetical subject index remain in step. The indexer takes the class number, decomposes it into the captions it encodes, and reads the chain from the specific concept to the general. A mark encoding Libraries, Academic libraries, University libraries, and Nigeria yields the chain Nigeria, University libraries, Academic libraries, Libraries, and each junction becomes a point at which the user can be led to the specific entry.',
          'The procedure\'s chief merit is economy and consistency: because the entries are derived mechanically from the schedule, two indexers working from the same class mark produce the same chain, and the alphabetical index can never diverge from the classified arrangement. Its limitations are equally mechanical. Chain indexing inherits every defect of the class number, including the schedule\'s vocabulary lag and its sometimes arbitrary encodings, and it handles compound subjects poorly when the class mark expresses only one facet of what the document is about.',
          'Cyclic indexing attacks a different problem, namely that a single fixed string privileges one entry point. Each significant component of a compound subject is brought into the leading position in turn, so the subject artificial intelligence, university libraries, Nigeria yields leading entries under artificial intelligence, under university libraries, and under Nigeria. The user therefore reaches the document from whichever concept is central to the query. The cost is entry proliferation: for n components the file grows rapidly, and each additional entry must be maintained.',
          'SLIC, selective listing in combination, moderates that cost. Rather than enumerating every permutation, it applies a rule for selecting which combinations are worth generating, so that the index carries a controlled set of coordinated access points without the full factorial explosion. The principle behind it is one the profession still applies when it decides which facets of a multi-facet document deserve their own entries: exhaustivity is a budget, and combination rules are how the budget is spent.',
          'PRECIS, the preserved context index system developed by Derek Austin for the British National Bibliography, addresses the failure of ordinary alphabetical strings to say which noun governs which. A subject statement is analysed into terms, each term is assigned a role marking whether it names the performer, the place, the method, or the target of the activity, and the roles determine both the order of the context and the form of each display line. The statement can then be transposed so that any term leads while the remaining context stays attached to it.',
          'Worked example: the subject statement "librarians - Nigeria - in-service training" analysed for a continuing-education document. Under transposition the user searching librarians sees librarians with Nigeria and in-service training as context; the user searching in-service training sees that term leading while librarians and Nigeria remain visible. Nothing has been lost in either display, which is the property the system\'s name asserts and the reason it was adopted for a national bibliography serving heterogeneous searchers.',
          'The four systems can be compared along two axes. Chain indexing depends on an existing classification schedule and inherits its structure; cyclic indexing and SLIC are syntax-free combination strategies that cost entries; PRECIS is a free-standing syntax that generates context-preserving displays without needing a classification at all. All four make the same underlying point: an index term in isolation is under-specified, and the arranging rules of the indexing language carry as much meaning as the terms themselves.',
          'Their decline with the rise of full-text and Boolean retrieval did not retire the principles. Permuted and rotating displays survive in faceted navigation and in autocomplete suggestions, role operators anticipate the semantic role labelling that modern parsers perform, and the entry-cost argument of cyclic indexing still governs decisions about how many descriptors to assign. For students these systems remain the clearest demonstrations that retrieval behaviour is designed by the syntax of the indexing language rather than discovered after the fact.'
        ],
        keyTakeaways: [
          'Chain indexing converts class marks into alphabetical entries, keeping classified and alphabetical arrangements in step.',
          'Cyclic indexing rotates each significant component into lead position, trading entry volume for multiple access points.',
          'SLIC selects combinations by rule so exhaustivity is managed as a costed budget rather than left to chance.',
          'PRECIS assigns roles to terms so subject statements can be transposed with their context intact.',
          'Chain indexing inherits the schedule, cyclic methods cost entries, and PRECIS supplies syntax without a classification.',
          'Role operators, permuted displays, and entry-cost reasoning all survive in faceted search and semantic parsing today.'
        ],
        diagramId: 'ch10-chain-indexing'
      },
      {
        id: 'lec-3-3',
        moduleId: 'mod-3',
        title: 'Chapter 11: PRECIS in Practice',
        subtitle: 'From document to subject statement to transposed display',
        category: 'Lectures',
        tags: ['PRECIS', 'Role Operators', 'Subject Analysis'],
        readTime: '13 min read',
        summary: 'A worked demonstration of PRECIS from start to finish: analysing a document into concepts, classifying each concept as entity, action, or property, assigning role operators, arranging the context, and generating one display for each lead term. The exercise shows what context preservation costs and why it matters.',
        content: [
          'PRECIS is best learned by performing it, because the system makes explicit every judgment that other indexing styles leave implicit. A PRECIS entry consists of two lines: a lead line carrying the term currently in display, and a context line carrying the remaining terms of the subject statement in an order fixed by their roles. The system\'s guarantee is that however the entry is transposed, no term is displayed without the context needed to read it correctly.',
          'The first step is ordinary subject analysis. The indexer reads the document for aboutness, identifies the concepts that a user would reasonably expect it to be filed under, and rejects incidental mentions. For the study titled "Use of social media by university students for academic research in Nigeria," the concepts retained are social media, university students, academic research, and Nigeria. Nothing about the machinery of PRECIS changes this step; what changes is that each retained concept must subsequently be given a syntactic function.',
          'The second step is concept analysis. Each concept is classified by its logical character, conventionally as an entity, an action, or a property, so that the indexer knows whether it names a thing doing something, the thing being done, or a quality of the doing. University students is an entity, social media functions here as the instrument or medium of an action, academic research is the activity toward which the effort is directed, and Nigeria supplies the place. This classification is what allows the roles in the next step to be assigned defensibly rather than by feel.',
          'The third step assigns role operators. The roles mark functions such as performer, place, method or medium, and target, and they are the mechanism by which the statement\'s meaning survives transposition. In our example the performer is university students, the medium is social media, the activity is academic research, and the place is Nigeria. Roles are assigned to positions in the statement rather than to words, which is why the same term can occupy a different role in a different document.',
          'The fourth step arranges the context line. Terms are ordered by role, so that the reading order of the context reproduces the dependency structure of the subject: the entity performing the action precedes the action, the action precedes its target, and place follows the structure it qualifies. The lead line takes whichever term is to be displayed. The entry for a searcher approaching through social media therefore shows social media in the lead line with students, research, and Nigeria preserved beneath it.',
          'The fifth step is transposition, which generates one entry for each term that a user might legitimately search on. The file therefore contains an entry led by social media, an entry led by university students, an entry led by academic research, and an entry led by Nigeria, each carrying its own intact context, and each filed alphabetically under its lead. The multiplication of entries is the price of the guarantee, and it is the same cost trade-off that cyclic indexing confronted with far less syntactic discipline.',
          'Comparing PRECIS with the systems in the preceding lecture clarifies what it adds. Chain indexing derives entries from a class mark and therefore inherits the schedule\'s structure; cyclic indexing rotates terms but preserves no grammar; SLIC selects combinations by rule but does not state relationships. PRECIS states relationships. Its role operators function like a dependency grammar for subjects, and its transposition rule ensures that the grammar is available from every entry point rather than only from the one the indexer happened to lead with.',
          'The contemporary relevance is direct. Role assignment in PRECIS is concept analysis with a formal notation, and it is the same problem that named-entity recognition and relation extraction solve statistically today: identify the participants, identify the relation, and store it so that any participant can become the query entry. Systems that extract entity-relation triples from text and publish them in knowledge graphs are performing, automatically and noisily, the operation Austin specified manually. Learning PRECIS therefore trains the analyst\'s eye for the structure that automated pipelines must infer.'
        ],
        keyTakeaways: [
          'A PRECIS entry has two lines: the lead line in display and a context line ordered by role.',
          'Concept analysis classifies each concept as entity, action, or property before roles are assigned.',
          'Role operators mark performer, place, medium, and target, and they are what make transposition safe.',
          'Transposition creates one alphabetically filed entry per searchable lead, trading file volume for contextual integrity.',
          'PRECIS states relationships that chain indexing inherits, cyclic indexing ignores, and SLIC only selects among.',
          'Role-based analysis is the manual ancestor of entity-relation extraction in today\'s knowledge graphs.'
        ],
        diagramId: 'ch11-precis'
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
        abstract: 'The manual that defines the syntax of PRECIS, including concept analysis into entity, action, and property categories, the set of role operators, the arrangement of the context line, and the rule of transposition that generates one display for each lead term. It documents the system as introduced for the British National Bibliography and remains the authoritative statement of why context must be preserved in alphabetical subject display. Students should read it alongside the worked lecture exercise.'
      },
      {
        id: 'read-3-2',
        moduleId: 'mod-3',
        title: 'Studies in Coordinate Indexing',
        author: 'Taube, H.',
        source: 'Documentation Inc.',
        type: 'Article',
        abstract: 'The foundational series in which Taube set out coordinate indexing: concepts recorded independently on cards so that any combination can be assembled at search time. The work establishes the intellectual case for post-coordinate retrieval, explains the role of the unit term, and shows why Boolean combination could replace pre-synthesized subject strings in machine systems. It is the historical counterpart to the pre-coordinate versus post-coordinate comparison in this module.'
      },
      {
        id: 'read-3-3',
        moduleId: 'mod-3',
        title: 'The Intellectual Foundation of Information Organization',
        author: 'Svenonius, E.',
        source: 'MIT Press',
        type: 'Article',
        abstract: 'A systematic treatment of the principles that underlie every indexing system in this module: the meaning of aboutness, the requirements of a good indexing language, the roles of vocabulary, syntax, and semantics, and the design of principal access points. Svenonius shows how enumerative and analytico-synthetic classification, pre-coordinate headings, and post-coordinate descriptors answer the same organizational questions in different registers. The book supplies the theoretical frame for comparing chain indexing, SLIC, and PRECIS.'
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
        summary: 'Exhaustivity measures how much of a document\'s conceptual content is recorded, while specificity measures how exactly a chosen term denotes its concept. The lecture treats both as explicit policy decisions, works a two-by-two trade-off between them, and shows how indexing budgets, consistency testing, and automated systems constrain the choice.',
        content: [
          'Exhaustivity refers to the number of concepts represented in an index record, that is, the degree to which all the subjects a document treats are recorded rather than only its dominant one. Highly exhaustive indexing assigns every concept a user might legitimately search on; low exhaustivity assigns only the principal subject, sometimes a single heading. Exhaustivity is a property of the record\'s coverage, not of the vocabulary used, and it is the first dimension along which indexing policy is written down.',
          'Specificity refers to the degree to which an index term denotes exactly the concept the document treats, rather than a broader or vaguer neighbour. Where the vocabulary permits, the indexer selects the most specific authorized term the document supports: not Libraries when the document is about university libraries in Nigeria, but University libraries with a geographic addition. Specificity is a property of term choice, and it is constrained by what the indexing language actually contains, which is why vocabulary poverty and low specificity usually appear together.',
          'Worked example: a study of artificial intelligence applications in digital libraries for university students\' research support in Nigeria. An exhaustive treatment assigns artificial intelligence, digital libraries, university students, research support, and Nigeria. A non-exhaustive treatment assigns only artificial intelligence. The first record is reachable from four different lines of enquiry; the second is reachable only from the first, and every user searching by population, service, or setting encounters silence.',
          'The two dimensions interact as a trade-off rather than as independent virtues. High exhaustivity with high specificity yields the richest retrieval and the highest cost, because each additional specific term requires analysis and, in a controlled system, authority checking. High exhaustivity with low specificity floods the record with broad terms and produces noise. Low exhaustivity with high specificity gives precise but fragile access, while low exhaustivity with low specificity is cheap and close to useless. Policy is the choice of a quadrant, not of a maximum.',
          'Practical rules of thumb follow. Principal subjects receive exhaustive treatment; secondary subjects are indexed selectively, when the document treats them substantively rather than in passing; and the most specific authorized term supported by the text is preferred over a convenient general one. These are exactly the judgments ISO 5963 describes when it requires the examiner to determine subjects before selecting headings, and they should be recorded in a local indexing policy so that two cataloguers make the same choice on the same document.',
          'Exhaustivity and specificity are also evaluation criteria for an index as a whole. An index that assigns few, general terms may still be internally consistent, but it will fail coverage and usability tests because legitimate queries return nothing. Consistency testing is the practical instrument: sample records are indexed independently by two or more staff, disagreements are tabulated by concept and by term, and the pattern reveals whether the local vocabulary lacks specificity or the policy lacks exhaustivity guidance.',
          'Cost must be acknowledged openly. Every additional specific term is a decision that consumes trained time, and in a university library with a small cataloguing establishment and a growing repository of theses and conference papers, exhaustivity is rationed by default whether or not it is stated. A defensible rationing strategy indexes the main entry deeply, records remaining concepts through contents notes or keyword fields, and reserves full analysis for collection-level priority materials.',
          'Automated systems shift rather than remove these choices. Statistical and neural indexing is highly exhaustive by nature, extracting many terms from full text, but its specificity is uneven, since a frequent incidental word can be weighted above a central concept. Query expansion and synonym dictionaries simulate exhaustivity on the search side, while embedding models blur specificity by treating nearby meanings as interchangeable. Human policy therefore moves upstream, deciding which concepts deserve descriptors and which should be left to ranking.'
        ],
        keyTakeaways: [
          'Exhaustivity measures record coverage; specificity measures how exactly a term denotes its concept.',
          'Both are policy decisions, not natural facts, and a local indexing policy should state the chosen trade-off.',
          'High exhaustivity raises recall and cost; high specificity raises precision and depends on vocabulary granularity.',
          'The most specific authorized term the document supports should be preferred over a convenient general one.',
          'Consistency testing on sample records reveals whether failures come from missing vocabulary or unclear policy.',
          'Automated indexing is exhaustive but unevenly specific, so human judgment moves to concept selection and quality control.'
        ],
        diagramId: 'ch13-exhaustivity-specificity'
      },
      {
        id: 'lec-4-2',
        moduleId: 'mod-4',
        title: 'Chapters 13–15: Derived Indexes, Evaluation, Precision, and Recall',
        subtitle: 'Automatic term extraction and retrieval effectiveness metrics',
        category: 'Lectures',
        tags: ['Derived Indexing', 'Precision', 'Recall', 'Evaluation'],
        readTime: '15 min read',
        summary: 'Derived indexes take their terms from the document text rather than from an indexer, while evaluation asks whether the resulting system retrieves effectively. The lecture sets assigned against derived indexing, states the standard evaluation criteria, and derives precision and recall with worked arithmetic and their practical caveats.',
        content: [
          'Derived indexing obtains index terms automatically or semi-automatically from words occurring in the document itself: titles, abstracts, full text, author keywords, figure captions, reference lists, and cited authors. The terms are extracted rather than assigned, so the process is fast, economical, and readily automated, which is why it scales to corpora that no cataloguing department could analyze manually. Its weakness follows from the same source: the document\'s own vocabulary carries synonyms, homographs, and incidental words, and no judgment of aboutness is applied before extraction.',
          'Assigned and derived indexing differ in kind rather than merely in degree. An assigned term is the result of an interpretation and a translation into an authorized vocabulary, so it can express concepts the document never states in words, such as a geographic focus implied throughout or a population named only in the methods section. A derived term reproduces what is written, so a paper that never uses the phrase information literacy will not be indexed under it. Automation therefore preserves surface vocabulary at the cost of the conceptual mapping that controlled indexing performs.',
          'Because indexes can be defective, they are evaluated. The recurring criteria are accuracy of term assignment, consistency between indexers, specificity of terms, exhaustivity of coverage, usability by the intended searchers, currency relative to the field, and coverage of the collection. Each criterion suggests its own test: accuracy and consistency by re-indexing a sample with two staff, exhaustivity by checking known-item retrieval across subject lines, and usability by observing real queries against the index.',
          'Two measures dominate effectiveness testing. Precision is the proportion of retrieved documents that are relevant: precision equals relevant retrieved divided by total retrieved, expressed as a percentage. If a search returns 100 documents of which 70 are relevant, precision is 70 percent. Precision answers the noise question directly, and it is the measure users feel most acutely, because irrelevant results consume reading time and erode trust in the system.',
          'Recall is the proportion of all relevant documents in the collection that were retrieved: recall equals relevant retrieved divided by total relevant, again as a percentage. If the same search retrieved 70 relevant documents while the test collection contains 200 relevant documents, recall is 35 percent. Recall answers the silence question, and it is harder to measure in an open collection because the denominator, the total relevant set, is unknown; it can be established only through a test collection in which relevance has been assessed in advance.',
          'Precision and recall normally move in opposition. Broadening a query, adding synonyms, or lowering a specificity threshold usually raises recall and lowers precision, while narrowing does the reverse, so a system can be made to look excellent on either measure alone. This is why results are reported as a pair, or combined into a single summary such as the harmonic mean of the two, and why a claim of improved retrieval without a stated operating point is not a meaningful claim.',
          'The measurement tradition begins with Cleverdon\'s Cranfield studies, which isolated vocabulary, syntactic rules, and system organization as determinants of performance and demonstrated that evaluation requires a defined document set, defined queries, and an explicit relevance assessment. The lesson carried into later test collections and shared evaluation exercises: evaluation is a designed experiment, not an impression gathered from casual use of a catalogue or a discovery layer.',
          'In current practice the measures survive under new names. Ranking evaluation reports precision at a fixed result depth, average precision across recall levels, and related summaries for recommenders and search engines, while abstract quality is now audited for fidelity, checking whether a generated summary states only what the source supports. For a university repository, the same discipline applies at modest scale: run a set of known queries, count what is found and what is missed, and treat the ratio as evidence for vocabulary and indexing decisions rather than as decoration in a report.'
        ],
        keyTakeaways: [
          'Derived indexing extracts terms from document text; assigned indexing interprets content and translates it into a vocabulary.',
          'An index is evaluated on accuracy, consistency, specificity, exhaustivity, usability, currency, and coverage.',
          'Precision is the share of retrieved documents that are relevant; recall is the share of relevant documents retrieved.',
          'Precision and recall trade off against each other, so results must be reported as a pair or as a stated combined measure.',
          'Recall cannot be measured in an open collection without a relevance-assessed test set, as Cranfield established.',
          'Ranking metrics and fidelity checks on generated abstracts are the contemporary descendants of precision and recall.'
        ],
        diagramId: 'ch14-precision-recall'
      },
      {
        id: 'lec-4-3',
        moduleId: 'mod-4',
        title: 'Chapter 15: Evaluating Indexing Systems — The Cranfield Experiments and Beyond',
        subtitle: 'Test collections, relevance assessment, and the limits of retrieval measurement',
        category: 'Lectures',
        tags: ['Cranfield', 'Evaluation', 'Test Collections'],
        readTime: '13 min read',
        summary: 'The Cranfield experiments established retrieval evaluation as a designed experiment with a defined document set, a query set, and explicit relevance judgments. The lecture reconstructs that method, states Cleverdon\'s three determinants of performance, critiques the paradigm, and designs a small evaluation applicable to a university repository.',
        content: [
          'Before Cranfield, claims about indexing systems were largely assertions: proponents argued that their scheme produced better retrieval, and no procedure existed for deciding between them. Evaluation as a discipline begins with the decision to treat retrieval as an experimental variable. That requires holding the document set, the queries, and the measure constant while the indexing language, the syntactic rules, or the system organization are varied, which is the logic every benchmark still follows.',
          'Cleverdon\'s Cranfield studies isolated three factors that determine retrieval performance: the vocabulary used, the syntactic rules for combining terms, and the organization of the retrieval system. The design called for a test collection of documents, a set of queries representing users, relevance assessments prepared in advance, and measures computed from the resulting retrieval runs. Precision and recall are the outputs of that design, and neither means anything outside it, because the recall denominator exists only where relevance has been judged for the whole collection.',
          'The reported results were sobering for advocates of particular schemes. Performance differences between indexing approaches were smaller than their proponents claimed, no single system dominated across all measures and all query types, and the choice of vocabulary and combination rules mattered more than the label attached to the system. The practical consequence was that evaluation must be repeated for a given collection and user population rather than inherited as a general verdict about an indexing language.',
          'The paradigm also carries well-known limits. Relevance is a judgment made by assessors at a moment in time, and different assessors, or the same assessors later, may disagree; small test collections may not represent the collection actually served; and the queries written by evaluators rarely match the formulations real users produce. These are not minor technicalities. They mean that a measured score is an estimate conditioned on the design, which is why the method reports procedures and operating points rather than single numbers in isolation.',
          'Later practice answered some of these limits through community evaluation exercises that pool results from many systems to build a shared relevance set, use standardized measures so that runs are comparable, and separate tasks such as ad hoc retrieval, routing, and summarization. Interactive and user-centred evaluation added measures that pure relevance judgments miss, including task success, time to a satisfactory result, and trust in the output, all of which matter to a library service more than a laboratory score.',
          'Index-level evaluation proceeds on a different scale and is often more actionable. Consistency studies re-index a sample with two or more staff and tabulate disagreements; vocabulary audits test whether known subjects can be expressed at all; and known-item checks ask whether documents a community already values can be found by the terms they would use. Each test isolates one link in the indexing chain, and each produces a concrete remedy, whether a scope note, a new heading, or a revision of exhaustivity policy.',
          'Worked design for a university repository: assemble a set of known-item queries drawn from actual research topics, record which items should be retrieved, run them against the current discovery layer, and compute precision and recall for the set. Diagnose silence as vocabulary lag or insufficient exhaustivity, and diagnose noise as excessive generality or uncontrolled synonyms. Twenty carefully chosen queries of this kind reveal more about the state of a local index than any vendor-supplied relevance percentage.',
          'The contemporary extension is evaluation of machine-generated output. Descriptors proposed by a model, summaries produced by a language model, and rankings produced by an embedding index all require the same discipline: a defined set of cases, an explicit standard of correctness, and a measured comparison against a human baseline. Building such a set from local theses and journal articles is also the most practical contribution an African university library can make to evaluation practice, since imported test collections rarely contain its documents, languages, or subject priorities.'
        ],
        keyTakeaways: [
          'Evaluation is a designed experiment: fixed documents, fixed queries, explicit relevance judgments, then vary the system.',
          'Cleverdon isolated vocabulary, combination syntax, and system organization as the three determinants of performance.',
          'Cranfield showed differences between indexing approaches were modest and no scheme dominated across measures.',
          'Relevance is assessor-dependent, so scores are estimates conditioned on the design, not absolute facts.',
          'Index-level tests, consistency studies, vocabulary audits, and known-item checks usually yield more actionable local evidence.',
          'Machine-generated descriptors and abstracts need the same benchmark discipline, ideally built from local collections.'
        ],
        diagramId: 'ch15-cranfield'
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
        abstract: 'The seminal statement of how index retrieval effectiveness is to be tested rather than asserted. Cleverdon reports the Cranfield procedure, in which a test collection, a fixed query set, and prepared relevance judgments are combined with precision and recall measures to compare indexing languages under controlled conditions. The paper also introduces the three determinants of performance, vocabulary, syntactic rules, and system organization, that structure evaluation theory to this day.'
      },
      {
        id: 'read-4-2',
        moduleId: 'mod-4',
        title: 'Factors Determining the Performance of Indexing Systems',
        author: 'Cleverdon, C.W., Mills, J. and Keen, M.',
        source: 'ASLIB and the College of Aeronautics, Cranfield',
        type: 'Article',
        abstract: 'The full report of the second Cranfield study, setting out the experimental design, the document and query sets, the relevance assessments, and the results for each indexing system tested. Its central finding, that differences between indexing languages were smaller than their advocates expected and that no system was uniformly superior, remains the standard caution against universal claims about vocabulary or syntax. Students should read it as the source of the evaluation method summarized in the lecture.'
      },
      {
        id: 'read-4-3',
        moduleId: 'mod-4',
        title: 'Information Retrieval Systems: Characteristics, Testing and Evaluation',
        author: 'Lancaster, F.W.',
        source: 'John Wiley and Sons',
        type: 'Article',
        abstract: 'Lancaster\'s systematic treatment of how retrieval systems and their indexes are assessed in practice, covering evaluation criteria for indexes, consistency studies, measures of noise and silence, and the organization of a testing programme in a real information service. The book connects the abstract formulas for precision and recall to the operational questions a library must answer about coverage, currency, and usability. It is the standard practitioner companion to the Cranfield literature.'
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
        summary: 'An abstract is a brief, self-contained representation of a document\'s essential content that lets a reader judge relevance without consulting the original. The lecture defines the abstract against neighbouring genres, then distinguishes indicative, informative, hybrid, critical, author-prepared, and slanted types by what each is permitted to report.',
        content: [
          'An abstract is a brief, accurate, and self-contained representation of the essential contents of a document, prepared so that a reader can decide whether to consult the original and, for many purposes, without consulting it. ISO 214 and ANSI/NISO Z39.14 define the requirements that make this possible: the abstract must correspond faithfully to the document, must be intelligible on its own, and must add nothing the source does not support. It differs from a précis, which condenses a known text for a known reader, from an annotation, which comments rather than represents, and from promotional copy, which advocates.',
          'Four functions explain the abstract\'s prominence. In selection it serves as the relevance decision point, because the abstract is usually read before the full text. In notification it carries current awareness, appearing in secondary services and alerts before the document itself is consulted. In indexing it supports subject access, since abstract text supplies both terms and context. In substitution it stands in for the document in review and secondary literature, which is why fidelity matters: an abstract that misrepresents a finding propagates that misrepresentation through every service that copies it.',
          'An indicative abstract states what the document covers without reporting its results. It answers the question "What does this document discuss?" and is therefore the appropriate form for essays, theoretical discussions, reports of work in progress, and documents whose value lies in their scope rather than in a particular outcome. A typical construction reads along the lines of "The paper examines the policy framework governing open-access repositories in West Africa, reviews the principal models of deposit, and argues for mandatory deposit at the institutional level," leaving the reader informed of terrain but not of conclusions.',
          'An informative abstract reports the substance: purpose, method, principal results, and conclusions, compressed into a short statement. It is the form expected for empirical research, because a reader can judge the contribution from the reported outcome and, within limits, use the abstract in place of the article. The discipline it imposes is selection: only findings central to the claim are reported, numerical detail is limited to what changes interpretation, and every sentence must be traceable to the source.',
          'Most published abstracts are indicative-informative hybrids. They announce the scope of the document in indicative fashion while reporting one or two decisive results informatively, which suits documents whose method and finding cannot be separated. Recognizing the hybrid matters practically, because the abstractor must then decide which elements are indispensable: if only one thing survives compression, it should be the result that a reader needs in order to decide whether the full document is worth retrieving.',
          'A critical abstract adds evaluation of the document\'s reliability, methodology, or contribution to the summary of its content. Because Z39.14 and ISO 214 require abstracts to be objective representations, critical commentary is generally excluded from standard abstracting and appears instead in review services, annotated bibliographies, and evaluative summaries, where the assessors\' judgment is the product being supplied. Students should therefore treat critical abstracts as a distinct genre governed by its own conventions rather than as an ordinary option for journal abstracts.',
          'Author\'s abstracts are prepared by the writer, who knows the content best and can state the contribution precisely, but who may also be optimistic about significance, may omit negative or null findings, and may assume shared disciplinary vocabulary. A professional abstractor\'s version is written for a defined audience, applies a house style, corrects errors of emphasis, and keeps terminology consistent with the indexing vocabulary. The distinction is one of standpoint rather than of correctness, and in practice the two are often merged during editing.',
          'A slanted abstract emphasizes the aspect of a document relevant to a particular audience without misstating the rest. The operation is legitimate only within the constraint of fidelity: emphasis may shift, but claims may not be added, strengthened, or weakened. In the digital era this constraint is under pressure, because extractive and generative summarizers routinely produce fluent abstracts that omit qualifiers or assert findings the source hedged. Human review against the standard remains the only reliable guarantee, and it is the check that journal editors and repository staff in African institutions are increasingly being asked to perform.'
        ],
        keyTakeaways: [
          'An abstract is brief, faithful, and self-contained, and it must add nothing the source does not support.',
          'Its four functions are selection, notification, indexing, and substitution for the document.',
          'Indicative abstracts state scope; informative abstracts report purpose, method, results, and conclusions; most are hybrids.',
          'Critical abstracts evaluate rather than represent and belong to review genres, not to standard journal abstracting.',
          'Author-prepared abstracts bring precision and possible optimism; slanted abstracts shift emphasis but may not alter claims.',
          'Machine-generated abstracts require fidelity review because fluent omission and unsupported assertion are their characteristic failures.'
        ],
        diagramId: 'ch17-abstract-types'
      },
      {
        id: 'lec-5-2',
        moduleId: 'mod-5',
        title: 'Chapters 18–20: Abstracting Techniques, Characteristics, and Uses',
        subtitle: '8 steps in abstracting, good abstract criteria, and uses',
        category: 'Lectures',
        tags: ['Abstracting Techniques', 'Uses of Abstracts'],
        readTime: '13 min read',
        summary: 'Abstracting is a disciplined eight-step workflow from structural reading through element extraction to drafting and fidelity review. The lecture explains what each step accomplishes, states the quality criteria an abstract must satisfy, and maps abstracts onto their uses in retrieval, current awareness, and research synthesis.',
        content: [
          'The standard workflow begins with reading for structure rather than for pleasure: the abstractor identifies the sections of the document, locates the statement of purpose, the description of method, the presentation of results, and the conclusion, and notes which elements are present at all. Documents in the humanities and in law often lack an explicit methods section, so the abstractor must infer the approach from argument and evidence; recognizing the shape of the source in advance prevents an abstract that omits the one element the document actually provides.',
          'The next five steps extract elements: identify the main subject, the purpose, the methodology, the major findings, and the conclusions. Extraction precedes composition deliberately. Writing while reading tends to reproduce the document\'s own opening paragraphs, which are usually background, whereas the abstract must lead with what the document is for and what it establishes. Each extracted element is recorded as a note with its location in the source, which makes the subsequent fidelity check mechanical rather than impressionistic.',
          'Drafting is compression under constraint. The techniques are deletion of background and restatement, generalization of detail, reduction of examples to their class, and selection of topic sentences that already carry the claim. What must never be compressed away is the qualifier: a result reported as significant in one subgroup, or an effect limited to a stated context, loses its truth when the limitation is dropped. Length is governed by the publishing or service style guide rather than by a universal rule.',
          'The characteristics required of the finished abstract follow from these operations. It must be accurate, matching the source claim for claim; clear, in complete grammatical sentences; concise, with no word that carries no information; objective, reporting rather than advocating; self-contained, using no abbreviation, symbol, or cross-reference the reader has not been given; coherent, so the elements read as an argument; informative, so that its content is usable; and faithful to the original in terminology as well as in claim.',
          'Uses follow the four functions already identified, but it is worth stating them operationally. Abstracts drive information retrieval, because database searching matches against abstract text as well as titles and descriptors. They carry literature searching and screening, since researchers triage hundreds of records by abstract before downloading. They underpin current awareness services and selective dissemination, where new records are matched against standing profiles. They support reference and research services, and they are the default display in digital libraries, where the abstract is frequently the only human-written text available.',
          'Worked draft for the study titled "Use of social media by university students for academic research in Nigeria": "The study examined how undergraduates at two Nigerian universities incorporate social media platforms into academic research, focusing on discovery, evaluation, and communication of sources. Using a survey design with structured questionnaires and follow-up interviews, the researchers analyzed platform preferences against stated research tasks. Respondents reported using social media chiefly for awareness of new work, while expressing caution about source credibility. The authors recommend explicit information-literacy instruction on evaluating social-media-derived citations." Four sentences, four elements, nothing invented.',
          'The eighth step, review, is the control point. The abstractor checks every sentence against the recorded notes and the source, confirms that no claim is stronger than the document\'s, that terminology matches the indexing vocabulary, that no undefined abbreviation appears, and that nothing in the abstract depends on reading the document. In production environments this step is supported by checklists and sampling audits, because fidelity failures are systematic rather than random: they cluster where documents are long, methodologically dense, or written in a discipline unfamiliar to the abstractor.',
          'In the AI era the workflow has changed rather than ended. Extractive systems can produce a defensible indicative abstract quickly, and language models can produce a fluent informative one faster still, but neither records its element notes or checks qualifiers against source, so the professional increasingly supplies the review step rather than the drafting step. For journal editors and repository staff in African universities, adopting a documented abstracting workflow with a fidelity checklist is usually the most affordable quality intervention available, since it requires editorial discipline rather than new technology.'
        ],
        keyTakeaways: [
          'Read for structure first, extract elements second, and only then draft; composition during reading reproduces background rather than findings.',
          'Compression must never delete the qualifiers that limit a result, since dropping them changes the claim.',
          'A good abstract is accurate, clear, concise, objective, self-contained, coherent, informative, and faithful to the source.',
          'Abstracts power retrieval, screening, current awareness, SDI, reference service, and the default display of digital libraries.',
          'The review step is the control point for fidelity and should be supported by notes, checklists, and sampling audits.',
          'Automation shifts the professional from drafting to auditing, which raises rather than lowers the value of the workflow.'
        ],
        diagramId: 'ch19-abstracting-workflow'
      },
      {
        id: 'lec-5-3',
        moduleId: 'mod-5',
        title: 'Writing to Standard: ANSI/NISO Z39.14 and Quality Control of Abstracts',
        subtitle: 'Required elements, style rules, structured formats, and editorial review',
        category: 'Lectures',
        tags: ['Z39.14', 'Abstract Quality', 'Editing'],
        readTime: '12 min read',
        summary: 'ANSI/NISO Z39.14 states what an abstract must contain, how it must be written, and how it must be presented. The lecture works through its requirements on self-containment, objectivity, and required elements, compares structured with unstructured formats, and designs a checklist-based editorial review.',
        content: [
          'ANSI/NISO Z39.14 governs abstracts in the same way that Z39.19 governs controlled vocabularies: it specifies the purpose, types, elements, style, and presentation of the abstract so that an abstract produced in one institution is usable in another. Its international counterpart is ISO 214, and the two should be read together rather than confused. The standard is important less for inspiring prose than for removing discretion from questions such as whether an abstract may depend on the document for its meaning.',
          'The central requirement is self-containment. An abstract must be intelligible without the document: no undefined abbreviations, no symbols without explanation, no cross-references to figures, tables, or cited works that the reader cannot follow, and no dependence on the title for its opening sense. A second requirement is fidelity, meaning that nothing may appear in the abstract that the document does not support, and nothing essential to the document\'s claim may be omitted merely for convenience.',
          'The elements an abstract should carry depend on the document and on the type chosen. For empirical work the expected sequence is objective, method, results, and conclusion; for a review or theoretical paper, purpose, scope or argument, and principal implication. Z39.14 also governs the position and language of the abstract, its relationship to the record it accompanies, and the responsibility of the abstractor, which may lie with the author or with an information service.',
          'Structured abstracts present the elements as labelled sections rather than as continuous prose. The format, common in medicine and increasingly adopted elsewhere, improves screening speed because the reader\'s eye can go straight to results, and it reduces the chance that an element is silently dropped. Its costs are rigidity and occasional repetition, and it suits empirical documents better than essays or legal analysis. Choosing between structured and unstructured form is therefore an editorial decision about document genre, not a mark of quality.',
          'Style rules follow from the requirements. The abstract is written in the third person and in complete sentences; it uses the terminology of the field and, where one exists, of the indexing vocabulary; it avoids criticism, promotional language, and rhetorical questions; it does not cite other works; and it uses abbreviations only where they are established in the field and expanded on first use. Tense conventions vary by discipline, but the governing principle is that the abstract reports what the document does rather than performing the argument itself.',
          'Editing exercise: take a weak abstract that opens with a claim of novelty, contains three undefined abbreviations, refers the reader to Table 4, and reports a result without its limiting condition. Revision restores the limiting condition, expands or removes the abbreviations, replaces the table reference with the figure\'s substance, and moves the novelty claim into a statement of purpose. The revised version is not more elegant; it is compliant, self-contained, and faithful, which is what the standard requires.',
          'Quality control institutionalizes these judgments. A practical programme defines an abstracting manual for the house style, trains abstractors against model examples, subjects new staff to double abstracting until agreement is reached, and audits a random sample of finished abstracts against a checklist covering fidelity, self-containment, objectivity, terminology, and grammar. Failures are logged by type, because a pattern of dropped qualifiers signals a training problem while a pattern of undefined abbreviations signals a style-guide gap.',
          'The standard has renewed relevance in automated production. Because machine-generated abstracts fail in predictable ways, namely omitted qualifiers, unsupported certainty, and stray cross-references, Z39.14 provides an auditable checklist against which they can be reviewed rather than a taste judgment about fluency. Journal editors and thesis offices in Nigerian and other African universities can adopt the checklist directly: it costs nothing, it is defensible in examination and peer review, and it makes abstract quality a documented editorial policy rather than an individual habit.'
        ],
        keyTakeaways: [
          'Z39.14 governs abstract purpose, types, elements, style, and presentation; ISO 214 is its international counterpart.',
          'Self-containment forbids undefined abbreviations, unexplained symbols, and dependence on figures, tables, or citations.',
          'Fidelity forbids both unsupported additions and the omission of qualifiers that limit the claim.',
          'Structured abstracts label objective, method, results, and conclusion, improving screening for empirical documents.',
          'Style requires impersonal, complete-sentence prose in field terminology, without citation or promotional language.',
          'A checklist-based audit of sampled abstracts turns quality from an individual habit into documented editorial policy.'
        ],
        diagramId: 'ch18-niso-z3914'
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
        abstract: 'The standard that states the purpose, types, required elements, style, and presentation of abstracts in English. It distinguishes indicative, informative, and indicative-informative forms, requires that an abstract be self-contained and faithful to its source, and specifies how abstracts should be positioned and formatted in a record. It is the reference against which the lecture\'s checklist, editing exercise, and quality-control programme are built.'
      },
      {
        id: 'read-5-2',
        moduleId: 'mod-5',
        title: 'ISO 214 — Documentation: Abstracts for Documentation and Related Documents',
        author: 'International Organization for Standardization',
        source: 'ISO',
        type: 'Standard',
        abstract: 'The international statement of abstracting requirements, covering the purpose of abstracts, the elements they should express, and the expectation that an abstract represent the document accurately and stand alone. It is the counterpart of ANSI/NISO Z39.14 and the standard most often invoked when abstracts are produced for international secondary services. Students should be able to distinguish its scope from that of ISO 5963, which governs subject analysis rather than abstract content.'
      },
      {
        id: 'read-5-3',
        moduleId: 'mod-5',
        title: 'Abstracting Concepts and Methods',
        author: 'Borko, H. and Bernier, C.L.',
        source: 'Academic Press',
        type: 'Article',
        abstract: 'A systematic treatment of abstracting as a discipline, covering the functions of abstracts, the distinction between indicative and informative forms, the element structure of an abstract, and the editorial methods by which abstracts are produced and evaluated. Borko and Bernier analyze abstraction as a semantic operation on document content rather than as simple condensation, which is why the book remains the theoretical foundation for the eight-step workflow and the quality criteria in this module.'
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
        summary: 'Secondary indexing and abstracting services convert the scholarly record into searchable surrogates with controlled vocabulary, curated abstracts, and defined coverage. The lecture compares major multidisciplinary and discipline-specific services and shows how digital libraries repackage the same functions through metadata harvesting, full-text indexing, and alert services.',
        content: [
          'Indexing and abstracting services are secondary publications that select the primary literature of a field, describe it, assign subject terms, and publish the result in a form designed for retrieval. Their defining characteristics are selective coverage under a stated policy, a controlled indexing vocabulary, prepared abstracts, and regular update cycles. Because a service decides what enters its file and under which terms, the choice of service is itself an indexing decision: a collection that indexes only through one service inherits that service\'s vocabulary, blind spots, and currency.',
          'The principal services divide by discipline. Scopus and Web of Science provide broad multidisciplinary coverage with citation-based linking; PubMed and MEDLINE index the biomedical literature with Medical Subject Headings and expert abstracts; ERIC covers education; Chemical Abstracts serves chemistry; LISA covers library and information science; Inspec covers physics and computing. Aggregators such as EBSCO and ProQuest package many such files with full text, and platforms such as African Journals Online extend discoverability to regional journal publishing that the major services cover unevenly.',
          'Behind each service is an editorial apparatus that determines retrieval quality: a selection policy defining what is covered, an indexing manual that fixes exhaustivity and specificity, a thesaurus or subject-heading list maintained over time, and abstracting instructions that decide type, length, and element structure. This is why the same document retrieved from two services can appear with different descriptors and different abstracts, and why a searcher comparing files is comparing indexing policies as much as content.',
          'Access models shape practice as much as content does. Bibliographic services sell surrogates; aggregators sell full text; open platforms sell nothing but rely on editorial contribution. Subscription costs, concurrent-user limits, and inter-library resource sharing determine what a university can actually reach, and consortium licensing has become the normal route by which African university libraries gain access to the major multidisciplinary files rather than individual subscriptions.',
          'A digital library is a managed collection of digital objects with description, access, preservation, and often submission and review functions. Its indexing layer combines descriptive metadata such as Dublin Core, harvested through protocols such as OAI-PMH from institutional repositories, with locally applied subject headings, keywords extracted from full text, and increasingly identifiers drawn from external authority files. The same surrogate principles apply; what changes is that description, indexing, and delivery are now separate services that must be kept in step.',
          'Digital libraries transformed indexing by enabling full-text and fielded search, faceted navigation built from metadata values, automatic classification of uncontrolled deposits, recommender and related-item functions, and generated summaries displayed in place of the traditional abstract. Metadata quality has become the binding constraint: a repository item with a thin title, no abstract, and uncontrolled keywords is effectively unindexed however sophisticated the discovery layer, which makes deposit guidance and metadata review the highest-leverage work in a repository unit.',
          'Current awareness services show the continuity most clearly. Selective dissemination of information and table-of-contents alerts are simply the standing-query expression of the same indexing apparatus: a profile of terms is matched against incoming records, and the abstract carries the notification. The abstract\'s role in triage has therefore grown rather than shrunk, because an alert is judged in seconds by a reader deciding whether to open the item.',
          'For African university libraries the practical agenda is threefold. First, harvest and normalize metadata from local repositories so that national and international union catalogues can see the material. Second, choose service combinations deliberately, balancing subscription cost against discipline coverage and regional representation. Third, maintain local subject access for theses, conference papers, and institutional documents that no commercial service will index, because the gap between what a service covers and what an institution produces is where local indexing earns its keep.'
        ],
        keyTakeaways: [
          'I&A services are selective, vocabulary-controlled, abstracted, and regularly updated; their policies shape retrieval.',
          'Multidisciplinary files such as Scopus and Web of Science differ from discipline services such as MEDLINE, ERIC, and LISA in vocabulary and depth.',
          'Access economics, especially consortium licensing, determine what universities can actually reach.',
          'Digital libraries separate description, indexing, and delivery, making metadata quality the binding constraint on discovery.',
          'CAS and SDI are standing queries against the same indexing apparatus, with the abstract carrying the triage decision.',
          'Local indexing of theses and institutional documents fills the coverage gap left by commercial services.'
        ],
        diagramId: 'ch20-cas-sdi'
      },
      {
        id: 'lec-6-2',
        moduleId: 'mod-6',
        title: 'Chapters 23 & 24: Automatic Indexing and Artificial Intelligence',
        subtitle: 'Computer algorithms, machine learning, and AI in information organization',
        category: 'Lectures',
        tags: ['Automatic Indexing', 'AI', 'Machine Learning'],
        readTime: '15 min read',
        summary: 'Automatic indexing extracts and weights terms from document text by algorithm, while AI extends the task to classification, entity recognition, relation extraction, and abstract generation. The lecture traces both from Luhn\'s frequency experiments to neural methods, and defines the professional roles that remain when drafting is automated.',
        content: [
          'Automatic indexing obtains index terms by algorithm from text rather than by an indexer\'s judgment. The tradition begins with Luhn\'s observation in the nineteen-fifties that word frequency carries information about content, and it proceeds through statistical weighting, in which a term\'s importance is estimated from its frequency in a document relative to its frequency in the collection, to linguistic methods that filter parts of speech and reduce word forms, and finally to neural representations that encode meaning rather than counting occurrences. In every case the output is derived, not assigned.',
          'A conventional pipeline runs through recognizable stages: text acquisition, sentence segmentation, tokenization, removal of a stop list of function words, stemming or lemmatization, part-of-speech filtering, weighting, and index construction. The design choices matter more than the algebra. A stop list that removes a meaningful term for a domain, a stemmer that conflates library and libraries correctly but library science incorrectly, or a weighting scheme tuned to long articles applied to short abstracts will each degrade the index in ways that only evaluation exposes.',
          'The structural limit of automatic indexing is vocabulary mismatch. Because terms are derived from the document\'s own words, a paper that never uses the phrase information literacy will not be retrieved by that phrase, however central the concept is, and incidental words that recur can be weighted above the central concept. Human assigned indexing solves both problems by translating content into a vocabulary, which is why the practical systems of record combine derived keywords with assigned descriptors rather than choosing one and discarding the other.',
          'Machine learning changed the mode of operation rather than the objective. Classifiers trained on previously indexed examples propose subject headings or categories, feature-based models gave way to deep models that learn representations from large text corpora, and the training set itself became an editorial asset: the historical record of what previous indexers decided is now the data from which the model learns. Consequently, inconsistencies in the historical record are reproduced at scale, and the audit of training data has become part of vocabulary governance.',
          'Artificial intelligence extends the pipeline beyond terms. Named-entity recognition identifies persons, organizations, places, and objects; relation extraction infers the connections between them; automatic classification assigns documents to schemes; and automatic abstracting produces either extractive summaries assembled from source sentences or abstractive summaries generated in new wording. Abstractive systems are the most useful and the most hazardous, because fluency conceals omitted qualifiers and unsupported assertions, and a summary that states a finding the source never reported is a retrieval defect of the worst kind.',
          'Semantic indexing adds another layer. Embeddings place documents and queries in a vector space where proximity approximates relevance, so that retrieval can succeed on conceptual similarity rather than on shared vocabulary. Modern systems therefore combine lexical matching, which rewards exact term correspondence and remains strong for precise identifiers, with dense retrieval, which handles paraphrase. The combination repairs part of the vocabulary-mismatch problem while introducing a new one, since results can no longer always be explained by the terms a query contains.',
          'The professional role consequently shifts from execution to supervision. Librarians specify the vocabulary and thesaurus the systems use, curate and correct training examples, define evaluation sets, set the threshold at which a machine-proposed descriptor is accepted without review, audit generated abstracts for fidelity, and remain accountable for bias, privacy of search logs, and the transparency of a vendor system that cannot explain its assignments. Interpretation of context, ethical judgment, and responsibility for the collection do not automate.',
          'For African university libraries both the opportunity and the risk are concentrated. Automation can absorb a digitization backlog that no staffing round could clear, and machine-assisted descriptor proposal can raise consistency across a small team. The risks are dependence on black-box vendor systems trained elsewhere, thin representation of regional journals and local topics in those systems, and low-resource language conditions in which models perform worst. A defensible strategy pilots automation on well-evaluated local tasks while keeping vocabulary control and final assignment in professional hands.'
        ],
        keyTakeaways: [
          'Automatic indexing derives and weights terms from text; it began with frequency observation and now includes neural representations.',
          'Pipeline design choices, stop lists, stemmers, and weighting schemes determine index quality as much as the algorithm does.',
          'Vocabulary mismatch is structural to derived indexing, which is why systems combine derived keywords with assigned descriptors.',
          'Trained models learn from historical indexing decisions, so editorial inconsistency propagates unless training data is audited.',
          'Abstractive summarization is the highest-risk AI output because fluency conceals omission and unsupported assertion.',
          'Professionals move from performing steps to governing vocabularies, thresholds, evaluation sets, and audits.'
        ],
        diagramId: 'ch22-ai-databases'
      },
      {
        id: 'lec-6-3',
        moduleId: 'mod-6',
        title: 'From Text to Descriptors: NER Pipelines and Machine-Assisted Subject Assignment',
        subtitle: 'Entity recognition, linking, relation extraction, and human-in-the-loop descriptor control',
        category: 'Lectures',
        tags: ['NER', 'Entity Linking', 'Descriptor Assignment'],
        readTime: '13 min read',
        summary: 'Machine-assisted indexing is a pipeline of staged decisions rather than a single algorithm. The lecture follows text from tokenization through named-entity recognition, entity linking, concept mapping, and relation extraction to proposed descriptors, and defines the human-in-the-loop controls that make the output trustworthy.',
        content: [
          'The indexing pipeline can be described as a sequence of transformations, each with its own failure mode. Text is tokenized and sentence-segmented; mentions are recognized as entities; each mention is linked to an authority record or knowledge base; linked entities are mapped to the controlled vocabulary; relations between concepts are extracted; and candidate descriptors are proposed for acceptance or rejection. Errors compound along the chain, so the precision of the final descriptor set can never exceed the weakest stage, which is why each stage is evaluated separately.',
          'Named-entity recognition identifies spans that denote persons, organizations, places, dates, and objects. Rule-based systems use dictionaries and patterns and are predictable but brittle; statistical and neural models generalize better but require labeled training data and degrade when the domain shifts. Domain adaptation is a constant requirement: a model trained on newswire will handle ministry and parliament well but may miss a faculty, a department, or a traditional title that appears constantly in a university corpus.',
          'Entity linking resolves an ambiguous mention to a specific record. "Delta" may denote a river, a state, a bank, or an airline, and only the surrounding context and a knowledge base can decide. Linking is where local authority files earn their value, because an institution\'s own names, projects, and series rarely appear in public knowledge bases with the precision needed. Unlinked mentions are the most common silent failure in automated pipelines, producing records that look complete and are in fact unanchored.',
          'Mapping to the controlled vocabulary is a distinct step from recognition. Identifying that a document mentions artificial intelligence does not decide whether it should be indexed under Artificial intelligence, Machine learning, or a narrower concept in the scheme, because that decision depends on aboutness rather than on occurrence. Consequently, machine-assisted systems are most reliable at proposing candidates and least reliable at final assignment, and the gap is precisely where professional review belongs.',
          'Relation extraction supplies the structure that term lists lack. By inferring that a document connects university students, social media, and academic research in a relation of use, a system can populate entity-relation triples that drive knowledge graphs, faceted navigation, and related-item functions. The same triples also make indexing auditable, since a reviewer can inspect which concepts were linked and by what evidence rather than only seeing a flat list of descriptors on a record.',
          'Human-in-the-loop operation converts this architecture into practice. The system proposes descriptors with confidence scores; the indexer accepts, modifies, or rejects them; and the rejections are captured as training signal for the next revision. This pattern, a form of active learning, gives an institution two things at once: throughput on routine material and a continuously improved model whose behaviour reflects local policy rather than a vendor\'s defaults. The acceptance threshold itself is a policy decision that should be documented.',
          'Evaluation proceeds against a human gold standard. A sample is indexed independently by experienced staff, machine proposals are compared with that reference, and precision and recall are computed for the descriptor set rather than only for the document as a whole. Error analysis then classifies failures as vocabulary gaps, aboutness errors, linking failures, or training-set defects, and each class points to a different remedy: extend the thesaurus, rewrite scope notes, enrich the authority file, or repair the training data.',
          'African university applications face predictable constraints: optical character recognition quality in digitized theses, scarce labeled data, transliteration and name variants in author and place names, and multilingual or code-switched text. The workable approach is incremental, beginning with high-frequency, well-structured collections, hand-annotating a small evaluation set in-house, and publishing descriptors with provenance so that users and auditors can see whether a heading was assigned by a person, proposed by a model, or accepted automatically under a documented threshold.'
        ],
        keyTakeaways: [
          'Automated indexing is a staged pipeline whose final precision is limited by its weakest stage.',
          'Named-entity recognition generalizes only as far as its training domain, so local entities require adaptation.',
          'Entity linking to authority records is the commonest silent failure, and local authority files are the cure.',
          'Recognizing an entity does not settle aboutness, so machines propose and professionals assign.',
          'Relation extraction supplies auditable structure that flat descriptor lists cannot.',
          'Human-in-the-loop review with recorded rejections yields both throughput and a locally governed model.'
        ],
        diagramId: 'ch23-ner-pipeline'
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
        abstract: 'A review of machine learning applications in automated document indexing and summarization, surveying how trained models extract terms, classify documents, and generate abstract text. The article examines the evaluation problem that accompanies these systems, in particular how fidelity and descriptor accuracy are measured against human indexing, and it considers the professional oversight required when indexing decisions are delegated to models. It is the companion reading to the automatic indexing and pipeline lectures in this module.'
      },
      {
        id: 'read-6-2',
        moduleId: 'mod-6',
        title: 'Introduction to Information Retrieval',
        author: 'Manning, C.D., Raghavan, P. and Schütze, H.',
        source: 'Cambridge University Press',
        type: 'Article',
        abstract: 'The standard systematic treatment of the computational side of retrieval, covering tokenization and stemming, inverted indexes, tf-idf and BM25 ranking, evaluation with precision and recall, classification, clustering, and the vector-space and language-model approaches that precede dense retrieval. It supplies the formal vocabulary behind automatic indexing and lets students connect each pipeline stage in the lectures to a defined algorithm and its evaluation. Chapters on evaluation align directly with Module 4.'
      },
      {
        id: 'read-6-3',
        moduleId: 'mod-6',
        title: 'Automatic Text Processing: The Transformation, Search, and Retrieval of Information by Computer',
        author: 'Salton, G.',
        source: 'Addison-Wesley',
        type: 'Article',
        abstract: 'Salton\'s synthesis of the research programme he founded at Cornell, from the SMART system through automatic indexing, weighting, abstracting, and relevance feedback to the vector-space model of retrieval. The book explains in detail how terms are extracted and weighted from text and how automatic abstracting was attempted before modern neural methods, which makes it the historical baseline against which contemporary AI indexing should be judged. It is the canonical reference for derived indexing in this course.'
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
