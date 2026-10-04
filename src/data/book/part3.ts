import { BookChapter } from '../bookTypes';

// Chapters 21-28 — Module 6 (Digital & AI Indexing) and Module 7 (Practical Synthesis).
export const BOOK_PART3: BookChapter[] = [
  {
    number: 21,
    module: "Module 6: Digital & AI Indexing",
    title: "Scholarly Citation Indexing: Scopus and Web of Science",
    objectives: [
      "Explain the theoretical assumptions that make citation indexing a viable alternative to subject-based access.",
      "Trace the mechanisms by which reference lists are extracted, normalized, and linked into a citation network.",
      "Compare Scopus and Web of Science on coverage, reference completeness, metrics, and access models.",
      "Conduct a backward and forward cited-reference search on a real research problem and document the workflow.",
      "Critique the use of citation counts and journal metrics in research evaluation, with attention to bias against African scholarship.",
    ],
    content: `Citation indexing turns the reference list into an access point. Rather than asking what a document is about, as a subject index does, a citation index asks which earlier documents its authors chose to cite, and links each earlier work forward to every later document that repeats the citation. The result is a network of intellectual indebtedness that can be traversed even when the two documents share no keywords, use different vocabularies, or are written in different languages. This chapter sets out the principles behind citation indexing, compares the two dominant multidisciplinary platforms, Web of Science and Scopus, and evaluates what citation networks can and cannot tell researchers, librarians, and evaluation committees in settings ranging from global publishers to Nigerian and other African universities.

[[diagram:ch21-citation-indexing]]

## Principles of Citation Indexing

**Citation indexing** was articulated by **Eugene Garfield** in a 1955 article in *Science* and operationalized by the Institute for Scientific Information, which began publishing the *Science Citation Index* in 1963. The technique rests on three assumptions:

- **Citation is an act of communication.** Authors cite work they regard as relevant, prior, or methodologically foundational, so the reference list functions as a form of author-supplied indexing.
- **The relationship runs one way.** A cited item is normally older than the citing item, so a cited-reference search retrieves later work from an earlier seed even when the seed has never itself been cited.
- **Indexing labor shifts to authors.** Because the link exists independently of any indexer's vocabulary, the synonymy and translation problems that afflict subject indexing are largely bypassed.

Two derivative measures follow from the same network. **Bibliographic coupling** (Kessler, 1963) scores the relatedness of two documents by the number of references they share; because reference lists are fixed at publication, coupling never changes. **Co-citation** (Small, 1973) scores relatedness by the number of later documents that cite both items; because new citations keep arriving, co-citation ties strengthen or dissolve over time, making the network a dynamic map of a field's intellectual structure.

## How Citation Networks Are Built

Construction of a citation index is an engineering pipeline with four stages:

1. **Reference extraction.** Publisher-supplied structured reference lists are parsed directly; older print backfiles are digitized by optical character recognition. Each citation is decomposed into author, title, source, year, volume, issue, pages, and identifier fields.
2. **Normalization and disambiguation.** Variants in author names, journal abbreviations, transliterations, corporate authors, and pre-DOI literature must be resolved to one canonical work. A reference rendered as "Nature 345: 12-14" and the same article cited by DOI must collapse into a single node, or the network fragments.
3. **Linking.** Every citing-document to cited-reference pair is stored as an edge, producing the citation graph that supports retrieval.
4. **Derived services.** Cited-reference search, citation alerts, "related records" that share references with an item, co-citation clustering, and normalized citation indicators are all computations over that graph.

Two practical consequences follow. First, **coverage of reference lists is as important as coverage of source titles**: a database that indexes an article but omits its references contributes nothing to the network. Second, a newly published article becomes searchable as a citing source only after it has been processed, so indexing lag delays every forward-chaining search.

## Scopus and Web of Science Compared

- **Web of Science** (Clarivate) descends from the Science Citation Index. Its Core Collection assembles citation indexes covering the sciences, social sciences, arts and humanities, conference proceedings, and the Emerging Sources Citation Index for regional and developing-world titles. It supports cited-reference searching over indexed reference lists, citation alerts, and journal-level evaluation through the Journal Citation Reports.
- **Scopus** (Elsevier), launched in 2004, was designed as a broad abstract-and-citation database with deliberately wide coverage of conference material, trade publications, and non-English serials. It offers citation overviews and alerts, affiliation and author identifiers, the CiteScore journal metrics built from Scopus data, and links to the SciVal research analytics suite.
- **Points of comparison:** breadth versus editorial selectivity of source titles; completeness and normalization of reference lists; depth of historical backfiles; update frequency; support for controlled-vocabulary expansion; affiliation and author disambiguation (AuthorID in Scopus, ResearcherID in Web of Science); API and export limits; and subscription cost, which is a real constraint for many African institutions.
- **Coverage is not neutral.** Selection decisions determine who is visible: journals published outside the dominant English-language, commercially circulated mainstream are systematically under-represented. Journals applying for entry to Scopus or Web of Science must meet documented technical and quality criteria, which is why regional aggregators such as African Journals Online and the indexing ambitions of Nigerian university presses matter to bibliographic visibility.

> Exam tip: a **citation index** is data, a document-to-document link structure. An impact factor or citation count is an interpretation computed over that data. Critique the interpretation separately from the index.

## Worked Example: Tracing an Intellectual Lineage

Scenario: a postgraduate student is reviewing remote-sensing methods for flood mapping in the Niger Delta.

1. Identify a **seed article** by keyword search in Scopus or Web of Science, choosing a recent, clearly relevant item with a full reference list.
2. Run a **cited-reference search** on the seed to retrieve the foundational methods and data sources it depends on (backward chaining).
3. Run a **citing-articles search** on those foundational works to capture the newest extensions of the method (forward chaining), including items no keyword search would find.
4. Use **co-citation clusters and related records** to surface literatures indexed under unrelated subject schemes, such as hydrological modelling papers held in engineering databases.
5. **Export, deduplicate, and cross-check** the set against domain databases (PubMed for health impacts, African Index Medicus for regional public health, African Journals Online for locally published studies) to repair coverage gaps.
6. Record the platform, query, and search date so that the cited-reference search is reproducible by a supervisor or reviewer.

The output is a literature map built on explicit scholarly links rather than on any indexer's choice of descriptors.

## Challenges and Limitations

- **Processing lag:** brand-new citations appear only after the citing item has been fully processed.
- **Field and language bias:** citation practices vary sharply between disciplines, and English-language journal literature dominates the network.
- **Self-citation and citation cartels** inflate apparent influence, while the **Matthew effect** (Merton, 1968) concentrates visibility on already prominent authors and institutions.
- **Reference errors** create split, merged, or missing nodes; open-citation initiatives such as the Initiative for Open Citations improve transparency, but participation and completeness remain uneven.
- **No semantics:** the network records that a citation exists, not why it was made. Confirming the reason still requires reading, which remains the abstracting and indexing professional's role.
- **Evaluative misuse:** h-index, impact factor, and raw counts are poor proxies for the quality of an individual article or researcher; responsible use requires field and year normalization plus expert judgment.

## Chapter Summary

Citation indexing supplies a complementary, vocabulary-independent axis of access. Subject indexing answers "what is this about?"; citation indexing answers "what does this build on, and what builds on it?" Mastering both directions of cited-reference searching, understanding how reference lists are extracted and normalized, and knowing the comparative strengths of Scopus and Web of Science allow information professionals to construct comprehensive searches, audit database coverage, and advise researchers against over-interpreting citation metrics. The network is an infrastructure of links, not a judgment of quality, and its biases must be read as carefully as its strengths.`,
    keyTerms: [
      { term: "Citation indexing", definition: "A method of organizing literature that links each citing document to the items in its reference list, providing document-to-document access points based on authors' citations rather than assigned descriptors." },
      { term: "Cited-reference search", definition: "A search that begins with a known earlier work and retrieves every later document that cites it, also called forward chaining." },
      { term: "Bibliographic coupling", definition: "A relatedness measure between two documents equal to the number of references they share in common (Kessler, 1963); the value is fixed at publication." },
      { term: "Co-citation", definition: "The joint citation of two documents by a later work; rising co-citation frequency indicates that a field treats the pair as intellectually related (Small, 1973)." },
      { term: "Citation network", definition: "A directed graph in which nodes are scholarly documents and edges are citations running from the citing item to the cited item." },
      { term: "Impact factor", definition: "A journal-level indicator computed as the mean number of citations received in a given year to items published in that journal during the two preceding years." },
      { term: "h-index", definition: "An author-level indicator h defined by the condition that h of the author's papers have each been cited at least h times." },
      { term: "Reference-list completeness", definition: "The degree to which a citation database indexes and correctly parses the references of the articles it covers, which directly determines citation counts." },
      { term: "Matthew effect", definition: "The cumulative advantage by which prominent authors and institutions attract disproportionate recognition, including citations, relative to less visible researchers." },
    ],
    reviewQuestions: [
      "Explain how citation indexing differs from subject indexing in the access point it creates, and state one search problem that citation indexing solves which subject indexing cannot.",
      "Distinguish bibliographic coupling from co-citation. For which research task would each measure be more informative, and why?",
      "A colleague argues that Scopus and Web of Science are interchangeable and should be chosen on price alone. Evaluate this claim by comparing four concrete differences between the two platforms.",
      "Using a departmental thesis with a full reference list, outline a step-by-step workflow for backward chaining, forward chaining, and deduplication, stating what you would log for reproducibility.",
      "Discuss why citation counts and journal metrics can systematically disadvantage researchers in African universities, referencing at least two mechanisms such as coverage gaps, language bias, or self-citation policy.",
      "Critically evaluate the statement that the citation index is data but the impact factor is an opinion. What advisory responsibilities does this imply for a reference librarian?",
    ],
    furtherReading: [
      "Garfield, E. (1955). Citation indexes to science: A new dimension in documentation of science. Science, 122(3159), 108-111.",
      "Garfield, E. (1979). Citation Indexing: Its Theory and Application in Science, Technology, and Humanities. Philadelphia: ISI Press.",
      "Small, H. (1973). Citation in the scientific literature: A new measure of the relationship between two documents. Journal of the American Society for Information Science, 24(4), 265-269.",
      "Borgman, C. L. (Ed.). (1990). Scholarly Communication and Bibliometrics. Newbury Park, CA: Sage.",
      "Mongeon, P., & Paul-Hus, A. (2016). The journal coverage of Web of Science and Scopus: A comparative analysis. Scientometrics, 106(1), 213-228.",
    ],
    diagramId: "ch21-citation-indexing",
  },
  {
    number: 22,
    module: "Module 6: Digital & AI Indexing",
    title: "Specialized Abstracting Databases: PubMed, MEDLINE and LISA",
    objectives: [
      "Describe the structural components that distinguish a domain-specific abstracting and indexing database from a multidisciplinary one.",
      "Explain how MEDLINE, PubMed, and MeSH relate to one another, including the status of in-process records.",
      "Construct a reproducible biomedical search that combines MeSH headings, subheadings, and free-text synonyms.",
      "Assess coverage, indexing lag, and language bias in relation to African and Nigerian health and LIS literature.",
      "Apply abstracting and indexing quality criteria when selecting or evaluating a subject database for a systematic search.",
    ],
    content: `Multidisciplinary databases trade depth for breadth. A specialist abstracting and indexing service does the opposite: it covers a defined field exhaustively, indexes with a field-specific controlled vocabulary maintained by subject experts, and supplies informative abstracts that let users judge relevance without retrieving the full document. This chapter examines the architecture of such services and studies three concrete cases: MEDLINE, the free PubMed interface that surrounds it, and LISA, the long-running abstracts service for library and information science.

[[diagram:ch22-ai-databases]]

## The Architecture of a Domain-Specific A&I Database

Every mature **abstracting and indexing (A&I) database** is built from the same layered infrastructure:

1. **A documented source-selection policy.** Editors decide which journals, serials, and proceedings are eligible, publishing coverage statements that make the database auditable rather than mysterious.
2. **Acquisition and abstracting.** Articles are acquired; abstracts are written by specialists or supplied by publishers and prepared to a stated type, whether indicative, informative, or critical.
3. **Intellectual indexing.** Trained indexers analyze aboutness and assign descriptors from a controlled vocabulary, following a written style manual so that two indexers make the same decision on the same document.
4. **Authority control.** Preferred terms, entry terms, hierarchical positions, and identifiers are maintained centrally, so the vocabulary drifts slowly and predictably.
5. **Record structure.** Each record carries the citation, abstract, subject descriptors, publication type, source identifier, and machine-readable indexes for fielded searching.
6. **Currency and backfiles.** Records are added on a stated cycle, with older material retro-indexed as digitized backfiles are processed.

The payoff for users is **semantic precision**: one authorized term means one thing throughout the database, and the hierarchy lets a search be widened automatically to narrower concepts or focused on a major topic.

## MEDLINE, PubMed and MeSH

**MEDLINE** is the National Library of Medicine's principal bibliographic database of journal literature in biomedicine and the life sciences. It descends from the earlier MEDLARS batch system and has been searchable online since the early 1970s, with the print *Index Medicus* providing the paper ancestor of its citation record. **PubMed** is the free search system operated by the National Library of Medicine; it contains MEDLINE-indexed citations, but also records that are in process and not yet indexed, full-text items deposited in PubMed Central, and other non-MEDLINE material. This distinction is operationally important: a record with no MeSH headings will be missed by a subject search.

**Medical Subject Headings (MeSH)** is the vocabulary that makes MEDLINE precise. Its components include:

- **Descriptors** with a preferred term, a scope note, and one or more **entry terms** that lead synonym seekers to the authorized heading.
- **Tree numbers**, which allow a descriptor to sit in more than one position in the hierarchy, so a search can be **exploded** to include narrower terms automatically.
- **Subheadings** (qualifiers) such as therapy, diagnosis, or epidemiology, which qualify a heading without multiplying the vocabulary.
- **Major topic markers**, shown in displays by an asterisk or retrieved with a major-topic field tag, for documents where the concept is central rather than incidental.
- **Supplementary concept records** for chemicals, drugs, and other entities not promoted to full descriptor status, linked back into the main hierarchy.

PubMed adds retrieval machinery on top: **automatic term mapping** translates an unmatched word into MeSH headings, journal titles, and author names; field tags such as the MeSH term tag, the title-abstract tag, and the publication-type tag allow precise manual control; and clinical query filters support high-precision or high-sensitivity searching for particular clinical question types.

## LISA and the LIS Literature

**LISA (Library and Information Science Abstracts)** has covered library and information science and related fields since 1969 and is now distributed through ProQuest. For LIS students and researchers it plays the role MEDLINE plays for biomedicine: a curated, subject-focused corpus with abstracts, subject-term searching, and deep coverage of journals, conference papers, and reports that multidisciplinary databases handle thinly. **LISTA**, offered by EBSCO, is a comparable service with its own coverage profile, and the choice between them should be made on documented coverage rather than brand familiarity.

Regional and disciplinary complements matter just as much. **African Index Medicus**, part of the World Health Organization's Global Index Medicus, indexes health literature published in Africa, and **African Journals Online** provides access to African-published journals that the major commercial indexes cover sparsely. For a Nigerian health-services review, searching MEDLINE alone would be demonstrably incomplete.

## Worked Example: Building a Reproducible Biomedical Search

Question: what evidence exists on the management of postpartum haemorrhage in Nigerian hospitals?

1. **Extract concepts:** the condition (postpartum haemorrhage), the setting (Nigeria), and optionally the care setting (hospitals).
2. **Map the condition to vocabulary:** locate the authorized MeSH heading and note whether a search on it explodes to narrower terms; identify subheadings such as therapy and prevention that are in scope.
3. **Collect free-text variants:** American and British spellings, abbreviations used in titles, and any synonym an unindexed in-process record might carry, combined with the title-abstract field tag.
4. **Build the condition block:** heading OR free-text variants, enclosed in parentheses.
5. **Add the geographic block:** the place heading OR the free-text country name, then combine the blocks with the Boolean AND operator.
6. **Apply limits deliberately:** publication-type and date limits raise precision but can silently remove relevant material, so record every limit applied.
7. **Document and rerun:** save the exact query, platform, date, and result count so that a reviewer or supervisor can repeat the search. Reporting standards such as PRISMA require precisely this transparency.

> Standards note: for a systematic review, recall is prioritized over precision, so free-text synonyms are added generously and duplicates are removed across databases rather than pre-filtered by aggressive limits.

## Challenges and Limitations

- **Indexing lag:** in-process records carry no descriptors for a period after entry, so subject-only searches are never fully current.
- **Coverage and language bias:** English-dominant, commercially published journals are over-represented; African journals with rigorous peer review may still be absent from MEDLINE.
- **Cost and access:** subscription databases such as LISA are unreachable for many independent researchers in Nigeria, while free services may lack saved searches, generous export limits, or deep backfiles.
- **Abstract availability and quality:** truncated or publisher-supplied abstracts weaken both secondary retrieval and the reader's ability to judge relevance.
- **Overlap and duplication:** the same article indexed in three services must be deduplicated before screening, and inconsistent identifiers complicate this.
- **Vocabulary maintenance:** terminology shifts, so headings and entry terms must be reviewed regularly rather than trusted as permanent.

## Chapter Summary

Domain-specific A&I databases buy precision and recall through specialization: a documented coverage policy, expert abstracting, controlled vocabulary, and fielded record structure. MEDLINE and MeSH demonstrate how a maintained hierarchy, entry terms, subheadings, and major-topic markers support reproducible searching, while PubMed shows that a search interface and a database are not the same object. LISA applies the same design to our own discipline, and regional services such as African Index Medicus show that comprehensive searching always requires more than one index. Evaluating coverage statements, lag, and access conditions is part of professional search practice, not an afterthought.`,
    keyTerms: [
      { term: "Abstracting and indexing database", definition: "A curated, subject-focused bibliographic database that supplies abstracts and controlled-vocabulary descriptors under a documented source-selection policy." },
      { term: "MEDLINE", definition: "The National Library of Medicine's principal bibliographic database of biomedical and life-sciences journal literature, indexed with Medical Subject Headings." },
      { term: "PubMed", definition: "The free National Library of Medicine search system that contains MEDLINE citations together with in-process, full-text, and other non-MEDLINE records." },
      { term: "Medical Subject Headings (MeSH)", definition: "The National Library of Medicine's controlled vocabulary of descriptors, entry terms, subheadings, and tree positions used to index MEDLINE." },
      { term: "Entry term", definition: "A non-preferred variant, synonym, or related expression stored with a descriptor that directs the searcher to the authorized heading." },
      { term: "Subheading", definition: "A qualifier such as therapy or diagnosis that narrows a descriptor to one aspect of the concept without expanding the vocabulary." },
      { term: "Major topic marker", definition: "An index flag indicating that a descriptor is a principal subject of the document rather than a peripheral mention." },
      { term: "Automatic term mapping", definition: "The PubMed mechanism that translates an unfielded query term into MeSH headings, journal titles, or author names before searching." },
      { term: "African Index Medicus", definition: "A World Health Organization regional index, now within Global Index Medicus, that covers health literature published in Africa." },
    ],
    reviewQuestions: [
      "Explain the relationship among MEDLINE, PubMed, and PubMed Central. Why can a search of PubMed retrieve a record that contains no MeSH headings?",
      "Compare the design of a domain-specific A&I database with that of a multidisciplinary index on four dimensions: selection policy, vocabulary, abstracts, and record structure.",
      "Construct a complete, reproducible search strategy for the topic 'telemedicine for hypertension management in West Africa', combining controlled vocabulary and free-text variants, and state what you would log for a PRISMA-compliant report.",
      "A researcher claims that searching MEDLINE is sufficient for a systematic review of Nigerian maternal health studies. Critically evaluate this claim, naming at least two additional sources you would add and why.",
      "Design a short evaluation checklist of six criteria you would use to judge whether an A&I database is fit for a postgraduate research project in library and information science.",
      "Discuss how indexing lag and English-language bias interact to distort the evidence base available to researchers in African universities, and propose one practical mitigation for each.",
    ],
    furtherReading: [
      "Lancaster, F. W. (1991). Indexing and Abstracting in Theory and Practice. Urbana-Champaign: University of Illinois, Graduate School of Library and Information Science.",
      "Humphreys, B. L., Lindberg, D. A. B., Schoolman, H. M., & Barnett, G. O. (1993). The Unified Medical Language System: Toward a collaborative approach to solving the knowns and unknowns. Journal of the American Medical Informatics Association, 1(1), 5-11.",
      "U.S. National Library of Medicine. Medical Subject Headings (MeSH). Bethesda, MD: NLM. Available at https://www.nlm.nih.gov/mesh",
      "International Committee of Medical Journal Editors. Recommendations for the Conduct, Reporting, Editing, and Publication of Scholarly Work in Medical Journals. Available at https://www.icmje.org",
      "World Health Organization. Global Index Medicus. Available at https://www.who.int/data/global-index-medicus",
    ],
    diagramId: "ch22-ai-databases",
  },
  {
    number: 23,
    module: "Module 6: Digital & AI Indexing",
    title: "Artificial Intelligence, NLP and Named-Entity Recognition",
    objectives: [
      "Map the stages of a natural language processing pipeline from raw text to machine-assigned index terms.",
      "Explain what named-entity recognition does, including tagging schemes and how its accuracy is measured.",
      "Compare rule-based, statistical, and transformer-based approaches to entity extraction and state when each is appropriate.",
      "Design a human-in-the-loop workflow for machine-assisted descriptor assignment in a digital library.",
      "Critique the risks of bias, opacity, and language coverage in applying artificial intelligence to indexing practice.",
    ],
    content: `Indexing has always been an attempt to extract meaning from language, and artificial intelligence approaches that task directly. Natural language processing breaks a document into computationally tractable units, named-entity recognition identifies the people, organizations, places, dates, and quantities that populate it, and transformer language models represent whole passages as vectors that can be compared for semantic similarity. This chapter explains how these techniques work at a level sufficient for an information professional to specify, evaluate, and supervise them, rather than merely to operate them as black boxes.

[[diagram:ch23-ner-pipeline]]

## The Natural Language Processing Pipeline

A typical text-processing pipeline for an indexing system runs in ordered stages:

1. **Language detection and text cleaning:** identify the language, strip markup, and normalize encodings and character variants.
2. **Tokenization and sentence segmentation:** split text into words, numbers, punctuation marks, and sentence boundaries, a step that is non-trivial for languages whose orthography does not use spaces in the English pattern.
3. **Morphological analysis and part-of-speech tagging:** assign grammatical categories so that a form such as "libraries" is recognized as a plural noun rather than a verb.
4. **Named-entity recognition:** detect entity spans and assign them to predefined categories.
5. **Entity linking or normalization:** resolve each detected string to an authority record, such as an ORCID identifier for a person, a ROR identifier for an organization, or a MeSH or LCSH identifier for a concept.
6. **Relation and event extraction:** capture structured statements such as author-affiliated-with, article-cites, or drug-treats-disease.
7. **Indexing output:** candidate descriptors, keywords, or subject strings presented to a human indexer for confirmation.

Each stage can fail independently, which is why professional practice specifies evaluation per stage rather than only for the final output.

## Named-Entity Recognition: What It Actually Does

**Named-entity recognition (NER)** locates contiguous spans of text that name a real-world entity and classifies each span into a category, classically person, organization, location, and miscellaneous as used in the well-known CoNLL shared-task evaluation, with date, time, money, and product categories added in other schemes.

Because classifiers operate on tokens, entities are represented as tag sequences. In the **BIO scheme** each token receives B (beginning of an entity), I (inside), or O (outside); variants such as BILOU add a marker for a single-token, unit-length entity. A phrase such as "University of Lagos" therefore becomes B-ORG, I-ORG, I-ORG, and the boundary markers prevent adjacent entities from merging.

Approaches to producing those tags fall into three families:

- **Rule-based systems:** dictionaries, regular expressions, and hand-written patterns. They are transparent and easy to update, but brittle when text departs from expectations.
- **Statistical machine learning:** feature-based models, with **conditional random fields** the standard choice before deep learning because they model sequence context efficiently over small labeled training sets.
- **Deep learning and transformers:** bidirectional recurrent networks with a CRF output layer, and later **transformer** models such as BERT, pre-trained on large text corpora and then fine-tuned for token classification. A transformer reads the whole sentence in both directions at once, so the same word is represented differently according to context.

Accuracy is reported as span-level precision, recall, and F1 under exact-match scoring, so a predicted entity must match the annotated boundary and category exactly to count as correct.

## Embedding, Similarity and the Limits of Symbols

Static word vectors such as word2vec and GloVe give every word one fixed numerical meaning, which fails for ambiguous terms. **Contextual embeddings** solve this by generating a vector per occurrence, so a term takes one value in a sentence about libraries and another in one about card catalogues. Sentence-level encoders derived from these models support semantic search: a query about fake news detection can retrieve an article indexed under misinformation without sharing a single keyword.

The professional caution is that embeddings encode distributional similarity, not truth. Two vectors can be close because documents misuse a term in the same way, and a model trained mostly on Northern-hemisphere web text will represent African institutions and local terminologies less accurately.

## Worked Example: Machine-Assisted Descriptor Recommendation

An institutional repository wants to pre-index incoming theses for a librarian to verify.

1. **Specify the task:** recommend up to five candidate descriptors from the local subject list for each thesis, using title, abstract, and author keywords.
2. **Prepare training data:** take 500 previously catalogued records with human-assigned descriptors as gold-standard labels.
3. **Run the pipeline:** tokenize, perform NER to capture organizations, places, and named projects, then classify the title-abstract text against the descriptor set.
4. **Rank and present candidates** with confidence scores together with the sentence evidence that triggered each suggestion.
5. **Human review:** the librarian accepts, rejects, or replaces suggestions, and every decision is logged as a new labeled example.
6. **Evaluate and retrain:** report precision, recall, and F1 per descriptor, inspect the most frequent errors (near-synonyms, overly broad terms), and retrain on the corrected set at a stated interval.

> Practice rule: automate recommendation, never authorization. The indexer remains accountable for the record, exactly as an abstract remains a professional responsibility even when drafting assistance is used.

## Challenges and Limitations

- **Domain shift:** a model trained on news text degrades on legal, biomedical, or engineering prose full of abbreviations and newly coined terms.
- **Annotation cost and quality:** supervised systems need labeled corpora, and inconsistent annotation guidelines propagate directly into measured accuracy.
- **Low-resource languages:** Hausa, Yoruba, Igbo, and other languages spoken across Nigeria and Africa have far fewer annotated resources, and English-derived tokenization assumptions may not hold; community initiatives such as Masakhane work to close this gap.
- **Ambiguity and nesting:** entities overlap and change category by context, and one document may name the same organization in several ways.
- **Opacity and accountability:** an indexer must be able to explain why a term was assigned; an unexplained model score is not an explanation.
- **Bias and over-trust:** training corpora carry social and geographic bias, and operators tend to accept confident suggestions uncritically.

## Chapter Summary

Natural language processing supplies the machinery for automated indexing, but the design decisions remain professional ones. Knowing the pipeline stages, the mechanics of named-entity tagging, the difference between rule-based, statistical, and transformer approaches, and the meaning of span-level precision, recall, and F1 allows information professionals to write sensible specifications, pilot systems responsibly, and audit outputs. The defensible model is human-in-the-loop: machines propose, indexers decide, and every decision is documented so that the record remains explainable, consistent, and fair to the communities the index serves.`,
    keyTerms: [
      { term: "Natural language processing (NLP)", definition: "The branch of artificial intelligence that gives computers the ability to analyze, extract, and generate meaning from human language in computationally tractable steps." },
      { term: "Named-entity recognition (NER)", definition: "The task of locating spans of text that name real-world entities and classifying each into a predefined category such as person, organization, or location." },
      { term: "BIO tagging", definition: "A token-labeling scheme in which each token is marked B (beginning of entity), I (inside entity), or O (outside any entity) so that spans can be reconstructed." },
      { term: "Gazetteer", definition: "A domain dictionary of known names and their categories used by rule-based entity recognizers to flag candidate mentions." },
      { term: "Conditional random field", definition: "A sequence-labeling statistical model that predicts a token's tag using neighbouring tokens and observed features, the standard non-neural approach to NER." },
      { term: "Transformer model", definition: "A neural architecture built on self-attention that reads a passage bidirectionally and produces contextual representations, as in BERT." },
      { term: "Contextual embedding", definition: "A dense vector representing a word's meaning in its particular sentence context rather than one fixed vector per word type." },
      { term: "Entity linking", definition: "The step that resolves a detected mention to a canonical identifier in an authority file, disambiguating organizations, authors, and concepts." },
      { term: "Human-in-the-loop", definition: "An operational design in which a machine proposes candidates and a professional retains authority to accept, reject, or amend them." },
    ],
    reviewQuestions: [
      "List the stages of a natural language processing pipeline for indexing and explain why an error at the tokenization stage cannot be corrected by a good entity recognizer afterwards.",
      "Explain what named-entity recognition produces for the phrase 'Nnamdi Azikiwe University, Awka' under the BIO scheme, and state how exact-match scoring would penalize a boundary error.",
      "Compare rule-based, conditional-random-field, and transformer approaches to NER on three criteria: training data requirements, transparency, and adaptability to a new domain.",
      "Design a machine-assisted descriptor assignment workflow for a university institutional repository, specifying the training data, the human review step, and the evaluation metrics you would report.",
      "Critically discuss two ways in which artificial intelligence applied to indexing could disadvantage scholars publishing in African languages or African venues.",
      "A vendor claims its system indexes 'with 95 percent accuracy'. What must you ask before accepting this claim for an operational library system?",
    ],
    furtherReading: [
      "Manning, C. D., & Schütze, H. (1999). Foundations of Statistical Natural Language Processing. Cambridge, MA: MIT Press.",
      "Jurafsky, D., & Martin, J. H. Speech and Language Processing (3rd ed. draft). Available at https://web.stanford.edu/~jurafsky/slp3/",
      "Nadeau, D., & Sekine, S. (2007). A survey of named entity recognition and classification. Lingvisticae Investigationes, 30(1), 3-26.",
      "Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, L., & Polosukhin, I. (2017). Attention is all you need. Advances in Neural Information Processing Systems, 30.",
      "Devlin, J., Chang, M.-W., Lee, K., & Toutanova, K. (2019). BERT: Pre-training of deep bidirectional transformers for language understanding. In Proceedings of NAACL-HLT 2019 (pp. 4171-4186).",
    ],
    diagramId: "ch23-ner-pipeline",
  },
  {
    number: 24,
    module: "Module 6: Digital & AI Indexing",
    title: "Metadata Harvesting, TF-IDF and Knowledge Graphs",
    objectives: [
      "Explain the data-provider and service-provider roles in OAI-PMH and enumerate the protocol's verbs.",
      "Compute a TF-IDF term weight by hand and interpret what the resulting value means for ranking.",
      "Describe how knowledge graphs represent entities and relations as triples and how those statements are queried.",
      "Prototype a metadata-harvesting and indexing workflow for an institutional repository aggregation project.",
      "Evaluate the metadata quality and semantic limitations that constrain each technique in operational systems.",
    ],
    content: `Web-scale discovery rests on three technical foundations that every information professional should be able to specify precisely. Metadata harvesting moves descriptive records between systems through a simple request-and-response protocol; TF-IDF converts raw word counts into statistical weights that rank documents; and knowledge graphs represent meaning as explicit entity-relationship statements that software can traverse. This chapter treats each mechanism at the level of detail required to implement, debug, or critically commission such a system.

[[diagram:ch24-tfidf-graph]]

## Metadata Harvesting with OAI-PMH

The **Open Archives Initiative Protocol for Metadata Harvesting (OAI-PMH)** is an HTTP-based request-response protocol in which a **service provider** pulls records from a **data provider**, typically an institutional repository or an aggregator. Harvesting is initiated by the consumer rather than pushed by the repository, which makes incremental updating straightforward.

The protocol defines exactly six **verbs**, each a mandatory operation of the service:

1. **Identify** returns repository-level details, including the protocol version and the finest date granularity supported.
2. **ListMetadataFormats** lists the metadata schemas the repository can export, of which only the basic Dublin Core format, the oai_dc prefix, is universally required.
3. **ListSets** lists the groupings or collections into which records are organized, allowing a harvester to restrict itself to one subject area.
4. **ListIdentifiers** returns only headers, each containing the unique identifier and datestamp of a record, which is the cheap way to discover what has changed.
5. **GetRecord** retrieves one specified record by identifier in a chosen metadata format.
6. **ListRecords** returns full headers and records, optionally filtered by a set and by a date range from and until, which supports incremental harvesting.

Two design features matter operationally. **Datestamps** let a harvester request only records modified since its last run, which is why repositories must maintain accurate last-modified dates. Large responses are broken into pages using a **resumptionToken**, which the harvester passes back to continue where it left off. Because repositories expose many schemas such as Dublin Core, MODS, METS, and EAD, the mapping decisions between schemas are where most quality loss occurs.

## TF-IDF: Computing Term Importance

**TF-IDF** weights a term in a document by combining how often it occurs there with how rare it is across the collection. The most common formulation is:

- **Term frequency** tf(t,d): the number of times term t occurs in document d, sometimes transformed as one plus the natural logarithm of the raw count to dampen the effect of repetition.
- **Inverse document frequency** idf(t): the natural logarithm of the number of documents N divided by the number of documents containing the term, df(t). Rare terms receive high values; terms present everywhere receive near-zero values.
- **Weight** = tf multiplied by idf.

Worked calculation: in a collection of 1,000 documents the phrase "open access" occurs in 10, giving idf = ln(1000/10) = ln(100), which is approximately 4.605. If the phrase appears 4 times in the target document, raw tf = 4, so the weight is 4 x 4.605 = 18.42. If the same document used the phrase 40 times, a log-dampened frequency of 1 + ln(40) = 4.69 would give a weight near 21.6, showing that repetition is rewarded only logarithmically. By contrast, a word appearing in every document has idf = ln(1000/1000) = 0 and therefore contributes nothing regardless of frequency.

Practical points: implementations differ in smoothing (one common library scores idf as the natural log of (1 + N) divided by (1 + df), plus one), which changes absolute values but hardly changes rankings; stop words are usually removed; and TF-IDF ignores word order and semantics, which is why probabilistic rankers such as BM25 and dense vector retrieval are used alongside it.

## Knowledge Graphs and Semantic Representation

A **knowledge graph** represents knowledge as statements. The standard form is the **triple**: a subject, a predicate, and an object, serialised in the Resource Description Framework as, for example, "Thesis has creator Author", "Author affiliated with University", "Thesis subject Artificial intelligence". A set of triples forms a directed labelled graph in which any entity can be reached from any other through a chain of typed relations.

Layers add power to the basic graph:

- **Vocabularies and ontologies** declare the classes and permitted properties, plus formal axioms that let software infer, for example, that an agent affiliated with a university belongs to an organization.
- **SKOS** represents knowledge organization systems, letting a thesaurus publish preferred terms, broader and narrower relations, and scope notes as linked data.
- **Identifiers** such as ORCID for researchers, ROR for organizations, DOIs for outputs, and library authority URIs make the graph interoperable rather than isolated.
- **Querying** is done with SPARQL, which matches triple patterns across the graph and can merge data from several sources in one query.

The value for indexing is that a subject term is no longer a string to be matched but a node connected to broader terms, related concepts, and external authorities, enabling disambiguation and cross-database mapping.

## Worked Example: Harvesting and Ranking a Repository Aggregation

A national initiative aggregates records from institutional repositories at Nigerian universities.

1. Each repository runs a data provider exposing OAI-PMH, so the aggregator calls Identify to confirm protocol version and date granularity.
2. ListMetadataFormats and ListSets are inspected to see which schemas exist and which subject sets are usable.
3. The aggregator calls ListRecords for the full initial harvest, following resumptionTokens until none remains, and stores every record with its identifier and datestamp.
4. Subsequent runs call ListIdentifiers with a from parameter equal to the last harvest date, then GetRecord for each changed identifier, keeping updates cheap.
5. Records are mapped into one internal schema, deduplicated by DOI or normalized title, and indexed for retrieval.
6. For ranking, each query term is weighted by TF-IDF across the aggregated corpus, so a rare specific term such as "agroforestry" outranks a common one such as "study".
7. Extracted subjects and organizations are resolved to identifiers and written into a knowledge graph that supports browsing by concept, author affiliation, and geographic coverage.

> Standards note: OAI-PMH requires data providers to support the oai_dc (Dublin Core) format even when richer schemas are offered, so check that capability first when onboarding a new repository.

## Challenges and Limitations

- **Metadata quality drifts:** repositories differ in field completeness, datestamp accuracy, and vocabulary use, so harvested records vary in fitness for indexing.
- **Schema mapping loss:** richer local fields are flattened into basic Dublin Core, dropping thesaurus terms, degree types, or rights statements unless richer formats are also exposed.
- **Broken updates:** repositories that touch every record on migration force full re-harvests, while those with inaccurate datestamps cause silent gaps.
- **Statistical weighting limits:** TF-IDF cannot detect synonymy or polysemy, is sensitive to document length, and treats all occurrences as equally informative.
- **Graph maintenance costs:** identifiers must be resolved, ontologies aligned, and links repaired as external authorities change.
- **Semantic fragility:** without an explicit ontology, a graph is only as meaningful as its predicates are consistently applied.

## Chapter Summary

OAI-PMH provides a deliberately simple, pull-based mechanism for moving metadata between systems through six verbs, datestamp filtering, and resumption tokens. TF-IDF provides a transparent statistical basis for term weighting that can be computed and audited by hand. Knowledge graphs move the representation from strings to linked statements that support inference and cross-collection browsing. Each is indispensable at web scale, and each fails predictably: harvesting fails on inconsistent metadata, weighting fails on semantics, and graphs fail on maintenance. Professional competence lies in knowing where those failure points are and designing workflows that detect them early.`,
    keyTerms: [
      { term: "OAI-PMH", definition: "The Open Archives Initiative Protocol for Metadata Harvesting, an HTTP-based request-response protocol through which a service provider pulls metadata records from a data provider." },
      { term: "Data provider", definition: "The repository or aggregator that responds to OAI-PMH requests by exposing metadata records, sets, and identifiers." },
      { term: "Verb", definition: "One of the six mandatory OAI-PMH operations: Identify, ListMetadataFormats, ListSets, ListIdentifiers, ListRecords, and GetRecord." },
      { term: "ResumptionToken", definition: "An opaque token returned when a harvest response is truncated, which the harvester passes back to continue the harvest at the next page." },
      { term: "Term frequency (tf)", definition: "The number of occurrences of a term in a given document, optionally log-dampened to reduce the effect of repetition." },
      { term: "Inverse document frequency (idf)", definition: "A rarity score computed as the logarithm of the total number of documents divided by the number of documents containing the term." },
      { term: "TF-IDF weight", definition: "The product of term frequency and inverse document frequency, used to score the importance of a term to a document within a collection." },
      { term: "Knowledge graph", definition: "A structured representation of knowledge as entities connected by typed relationships, typically stored and queried as triples." },
      { term: "RDF triple", definition: "A statement consisting of a subject, a predicate, and an object, forming the atomic unit of Resource Description Framework data." },
      { term: "SPARQL", definition: "The query language for RDF that matches triple patterns and can join data distributed across multiple linked sources." },
    ],
    reviewQuestions: [
      "Enumerate the six OAI-PMH verbs and state the purpose of each. Which two would you use for an efficient incremental re-harvest, and why?",
      "A repository returns records with datestamps of the day of harvesting rather than the day of the last edit. Explain the operational consequence for an aggregator.",
      "Compute the TF-IDF weight for the term 'agroforestry' in a collection of 500 documents where the term occurs in 5 documents and appears 3 times in the target document, stating the logarithm base you use and showing each step.",
      "Explain why the word 'library' might receive a lower TF-IDF weight than the phrase 'institutional repository' in a corpus of library science articles, and name one situation where TF-IDF would misrank a relevant document.",
      "Design a metadata-harvesting workflow for aggregating institutional repositories from five Nigerian universities, including schema mapping, deduplication, and update strategy.",
      "Critically assess whether a knowledge graph adds real value over a keyword index for a small specialist collection. Give conditions under which you would and would not adopt one.",
    ],
    furtherReading: [
      "Open Archives Initiative. (2002). The Open Archives Initiative Protocol for Metadata Harvesting, Version 2.0. Available at http://www.openarchives.org/OAI/openarchivesprotocol.html",
      "Sparck Jones, K. (1972). A statistical interpretation of term specificity and its application in retrieval. Journal of Documentation, 28(1), 11-21.",
      "Salton, G., & Buckley, C. (1988). Term-weighting approaches in automatic text retrieval. Information Processing & Management, 24(5), 513-523.",
      "Manning, C. D., Raghavan, P., & Schütze, H. (2008). Introduction to Information Retrieval. Cambridge: Cambridge University Press.",
      "Hogan, A., Blomqvist, E., Cochez, M., d'Amato, C., de Melo, G., Gutierrez, C., Gayo, J. E. L., Navigli, R., Neumaier, S., Ngomo, A.-C., Polleres, A., Rashid, S. M., Rula, A., Schmelzeisen, L., Sequeda, J., Staab, S., & Zimmermann, A. (2021). Knowledge graphs. ACM Computing Surveys, 54(4), 1-37.",
    ],
    diagramId: "ch24-tfidf-graph",
  },
  {
    number: 25,
    module: "Module 7: Practical Synthesis",
    title: "Practical Subject Analysis and Descriptor Assignment Case Study",
    objectives: [
      "Apply a structured method for determining aboutness from a title, abstract, and full text.",
      "Use facet analysis to decompose a research topic into its constituent concepts before term selection.",
      "Map analyzed concepts to authorized descriptors in a controlled vocabulary and record the decisions taken.",
      "Assign major and minor status consistently and justify each decision against a stated indexing policy.",
      "Evaluate the resulting index entry for precision, recall implications, and inter-indexer consistency.",
    ],
    content: `This chapter converts the theory of the preceding chapters into a single, fully documented indexing decision. Working a real example end to end shows where judgment enters the process: which concepts are central, which are merely mentioned, how facets are ordered, which authorized terms fit, and how a record is checked before it is released. The worked case is a research article typical of those found in an institutional repository, and the same procedure applies equally to journal articles, reports, and theses.

[[diagram:ch25-descriptor-assignment]]

## Step 1: Determine Aboutness and Facets

The document under analysis has the title "Adoption of Artificial Intelligence in Nigerian University Libraries", with an abstract reporting a survey of librarians in six universities, discussion of automated cataloguing and reference services, and recommendations for management.

**Aboutness** is the set of concepts the document is principally about, judged from the whole document rather than from word frequency. Two tests help:

- The **title and abstract test:** which concepts would a reader use to describe this paper to a colleague?
- The **mention distinction:** concepts discussed substantively belong in the index; concepts merely named in passing, such as individual vendor products or a single survey instrument, do not.

For this paper the substantive concerns are artificial intelligence as a technology, adoption or technology acceptance in organizations, university (academic) libraries as the institutional setting, librarians and staff as the actors, and Nigeria as the geographic setting. Survey methodology and named products are secondary, and would normally be excluded under a policy that indexes exhaustively but assigns major status selectively.

Decomposing the topic with the facet categories used in the case-study approach yields:

- **Artefact or thing:** artificial intelligence, automated systems.
- **Process or action:** adoption, implementation, technology acceptance.
- **Agent or person:** librarians, library staff, university management.
- **Environment or place:** university libraries, Nigeria.
- **Property or characteristic:** user attitudes, skills, readiness.

Facet analysis prevents a common error: collapsing a compound topic into a single string such as "artificial intelligence in Nigerian university libraries", which matches only one exact formulation. Keeping the facets independent allows every meaningful combination to be expressed and retrieved.

## Step 2: Select Authorized Descriptors

Concepts are now mapped to the chosen indexing language, here Library of Congress Subject Headings as commonly used in Nigerian academic cataloguing, checked against the official authority file rather than from memory:

- **Artificial intelligence:** authorized heading, specific and appropriate to the technology under study.
- **Academic libraries:** the authorized heading standing for university libraries in this vocabulary.
- **Information technology:** appropriate for the technology-adoption aspect where no narrower authorized term fits.
- **Nigeria:** the authorized geographic heading, applied as a geographic subdivision.
- **Combined strings:** "Academic libraries -- Nigeria" expresses setting and place in one heading, while "Artificial intelligence" stands alone as the main topical heading.

Decisions are recorded with reasons. Entry terms matter: users searching the everyday expression "AI" or a product name will not match the authorized heading, so supplementary free-text keywords are added where the interface allows, and the scope note of each chosen heading is re-read to confirm that it covers this document's use of the term.

> Exam tip: verify every heading against the authority file. A heading that sounds right is not evidence; a scope note is.

## Step 3: Assign Major and Minor Status

Exhaustivity and specificity now interact. Under a policy of high exhaustivity with selective major status:

1. **Major descriptors:** Artificial intelligence; Academic libraries -- Nigeria.
2. **Minor descriptors:** Information technology, plus any secondary concept the policy treats as supporting rather than headline.
3. **Rejected candidates:** the name of a single survey instrument, a passing reference to a commercial product, and the author's own university as a place, since the study is national in scope.

The major-minor distinction directly shapes retrieval: major terms feed headline result sets, while minor terms support recall for exhaustive searches without flooding default displays.

## Worked Example: The Record and Its Evaluation

Resulting subject access points:

- Artificial intelligence
- Academic libraries -- Nigeria
- Information technology

Evaluation pass:

1. **Precision check:** would a searcher looking for clinical applications of artificial intelligence retrieve this record? No; the descriptors are appropriately specific.
2. **Recall check:** a searcher using "university libraries" alone should still reach the record, which requires the free-text synonym to appear in the abstract or keyword field as well.
3. **Consistency check:** a second indexer should arrive at the same two major terms; disagreement usually signals a scope-note ambiguity or a missing rule in the local indexing manual.
4. **User-vocabulary check:** populate keyword or alternative-term fields with the expressions real users type, including the abbreviation AI and terms such as technology acceptance.
5. **Documentation check:** record the vocabulary edition, the authority-file date consulted, and any local rule applied, so the decision can be revisited when headings change.

## Challenges and Limitations

- **Ambiguous aboutness:** interdisciplinary documents support several defensible readings; a stated indexing policy reduces but cannot eliminate disagreement.
- **Vocabulary gaps:** no authorized heading may exist for a current concept, forcing a choice between the nearest broader term, a free-text keyword, or a proposal for a new heading.
- **Compound topics:** premature stringing of concepts destroys facet independence and harms retrieval.
- **Local versus general vocabularies:** a national or institutional list may be more expressive for local material but will not interoperate with external services unless mapping is provided.
- **Subject drift:** as a field moves, yesterday's preferred term becomes today's entry term; vocabulary maintenance must be scheduled, not occasional.
- **Workload pressure:** speed targets erode the verification steps that protect precision.

## Chapter Summary

Descriptor assignment is a chain of justified decisions: determine aboutness, decompose into facets, map to authorized terms, assign major and minor status, then evaluate the result for precision, recall, and consistency. The worked case shows that most errors are analysis errors rather than vocabulary errors, such as indexing a mention as a subject, stringing facets together, or skipping the authority-file check. A record produced this way is precise enough for everyday searching, rich enough for exhaustive searching, and documented well enough for another indexer to defend.`,
    keyTerms: [
      { term: "Aboutness", definition: "The set of concepts a document is principally concerned with, determined by professional judgment over title, abstract, and full text rather than by raw word counts." },
      { term: "Facet analysis", definition: "The decomposition of a subject into its independent conceptual categories, such as thing, process, agent, place, and property, before terms are selected." },
      { term: "Descriptor", definition: "An authorized term from a controlled vocabulary assigned to a document to represent one of its subjects." },
      { term: "Authority file", definition: "The authoritative source of authorized forms, scope notes, cross-references, and hierarchies for a subject heading list or thesaurus." },
      { term: "Major descriptor", definition: "A subject term marked as central to the document, used to support precise, headline retrieval." },
      { term: "Entry term", definition: "A non-preferred variant, synonym, or related expression that directs a user or indexer to the authorized heading." },
      { term: "Inter-indexer consistency", definition: "The degree to which two or more indexers assign the same terms to the same document, used as a quality indicator for indexing rules." },
      { term: "Exhaustivity", definition: "The number and range of concepts from a document that are assigned as index terms, from narrow and selective to highly detailed." },
      { term: "Specificity", definition: "The degree to which an assigned term matches the document's precise subject rather than a broader or vaguer one." },
    ],
    reviewQuestions: [
      "Apply the title-and-abstract test and the mention distinction to a document of your choice, identifying three concepts that belong in the index and two that do not, with reasons.",
      "Carry out a facet analysis of the topic 'digital literacy among secondary school students in Lagos State' and show how the facets prevent the creation of a single compound subject string.",
      "Using an authority file of your choice, map the analyzed concepts of a thesis title from your own discipline to authorized descriptors, recording the scope-note evidence for each decision.",
      "Explain how the assignment of major and minor descriptors affects precision and recall differently, and propose a local policy for when a third descriptor deserves major status.",
      "Two indexers assign different major terms to the same article. Design a short adjudication procedure that would resolve the case and produce a rule for future records.",
      "Critically evaluate the reliability of descriptor assignment when the indexer lacks subject knowledge in the document's discipline. What mitigations can a library put in place?",
    ],
    furtherReading: [
      "Chan, L. M., & Salaba, A. (2015). Cataloging and Classification: An Introduction (3rd ed.). Lanham, MD: Rowman & Littlefield.",
      "Taylor, A. G. (2004). The Organization of Information (2nd ed.). Westport, CT: Libraries Unlimited.",
      "Library of Congress, Policy and Standards Division. Subject Cataloging Manual: Subject Headings. Washington, DC: Library of Congress.",
      "Broughton, V. Essential Thesaurus Construction. London: Facet Publishing.",
      "Maxwell, R. L. (2008). Maxwell's Handbook for AACR2 (4th ed.). Chicago: American Library Association.",
    ],
    diagramId: "ch25-descriptor-assignment",
  },
  {
    number: 26,
    module: "Module 7: Practical Synthesis",
    title: "Calculating and Interpreting Precision and Recall in Operational Systems",
    objectives: [
      "State the definitions and formulas for precision, recall, F-measure, and fallout from a confusion-matrix basis.",
      "Compute each metric correctly from an operational search result and show all working.",
      "Interpret metric values in terms of the specific failures of a search strategy, such as noise and silence.",
      "Design an evaluation protocol for a search or classification service, including how relevance judgments will be pooled.",
      "Critique the practical limits of recall estimation and defend an appropriate alternative metric set for a live system.",
    ],
    content: `Metrics turn an opinion about a search into a measurement. Precision and recall are the two foundational figures of merit for any retrieval or classification operation, and the ability to compute them by hand, interpret them, and act on them separates a professional search audit from a guess. This chapter derives the metrics from the four possible outcomes of a retrieval, works two complete numerical examples, and then considers what to do in real systems where the true number of relevant documents is never fully known.

[[diagram:ch26-pr-rec-worked]]

## Counts and Core Formulas

Every retrieval divides a collection into four cells of a confusion matrix:

- **Relevant and retrieved:** true positives, the documents you wanted and got.
- **Not relevant and retrieved:** false positives, the noise in the result set.
- **Relevant and not retrieved:** false negatives, the silence, that is, the relevant documents missed.
- **Not relevant and not retrieved:** true negatives, the irrelevant documents correctly left out.

All the metrics below are ratios over these four counts, so the first discipline is to count carefully before dividing.

- **Precision** = relevant retrieved divided by total retrieved. It answers: of what I was given, how much was useful?
- **Recall** = relevant retrieved divided by all relevant documents in the collection. It answers: of what exists, how much did I find?
- **F-measure** = the harmonic mean of precision and recall, namely twice their product divided by their sum. The harmonic mean penalizes imbalance, so a system that is excellent on one axis and poor on the other scores lower than a balanced one.
- **Fallout** = false positives divided by all non-relevant documents in the collection, measuring how much irrelevant material the system drags in.
- **Silence** = the count of relevant documents not retrieved, the complement of recall.

## Worked Example 1: Auditing a Thesis Search

A postgraduate student searches an institutional repository for literature on artificial intelligence adoption in libraries. The search retrieves 80 documents, of which a relevance assessment finds 50 relevant, and the repository is known to contain 125 documents relevant to the question.

1. Relevant retrieved = 50; total retrieved = 80; all relevant in the collection = 125.
2. Precision = 50 / 80 = 0.625, that is 62.5 percent.
3. Recall = 50 / 125 = 0.40, that is 40 percent.
4. F-measure = (2 x 0.625 x 0.40) / (0.625 + 0.40) = 0.50 / 1.025 = 0.488, that is 48.8 percent.
5. Silence = 125 - 50 = 75 relevant documents were missed.
6. Assuming a collection of 10,000 documents, non-relevant documents = 10,000 - 125 = 9,875, and false positives = 80 - 50 = 30, so fallout = 30 / 9,875 = 0.0030, that is 0.30 percent.

**Interpretation:** the search is reasonably precise but retrieves fewer than half of the available relevant literature, so the dominant problem is silence rather than noise. Fallout looks tiny only because the collection is large relative to the result set, which is why fallout must always be read alongside recall.

## Worked Example 2: Improving the Query

The student revises the strategy by adding synonyms, related terms, and broader headings, retrieving 150 documents of which 84 are relevant. The collection still holds 125 relevant items.

1. Precision = 84 / 150 = 0.56, that is 56 percent.
2. Recall = 84 / 125 = 0.672, that is 67.2 percent.
3. F-measure = (2 x 0.56 x 0.672) / (0.56 + 0.672) = 0.75264 / 1.232 = 0.611, that is 61.1 percent.
4. Change check: precision fell by 6.5 percentage points, recall rose by 27.2 points, and the F-measure rose from 48.8 to 61.1 percent.

**Interpretation:** the revision is a net gain. This is the classic inverse relationship between recall and precision demonstrated in the Cranfield experiments: broadening a query recovers silence at the cost of some noise, and the F-measure tells you whether the trade was worth making.

## Beyond the Basics: Building an Evaluation Protocol

Operational systems report additional measures because raw precision and recall depend on where a result set is cut:

- **Precision at k** reports precision within the first k displayed results, which is the only part of the set a user actually sees.
- **Average precision** averages precision at the position of each relevant result, rewarding systems that place relevant items high; mean average precision averages this over many queries.
- **R-precision** measures precision at the cut-off equal to the number of relevant documents, giving a cut-off-free comparison between systems.
- **Normalized discounted cumulative gain** grades relevance on a scale and discounts items by rank, so it suits systems where relevance is graded rather than binary.

Professional evaluation in a live system must be planned rather than assumed:

1. **Define the unit of evaluation:** a single query, a query set, a document classifier, or a whole discovery service.
2. **Build a test collection:** a fixed set of documents, a set of queries, and relevance judgments for each query-document pair.
3. **Pool the judgments:** submit each query to several systems, merge and rank the pooled results, and have human assessors judge the pooled items, because only pooled candidates can be judged feasibly.
4. **Compute metrics per query**, then average across queries so that one easy topic cannot dominate the result.
5. **Report cut-offs and pooling depth**, since shallow pools inflate apparent recall for the systems that contributed most of the pool.
6. **Repeat after any strategy change** to detect regression rather than assuming improvement.

> Exam tip: recall requires knowing the total number of relevant documents. If that total comes from pooling, your recall figure is an estimate conditioned on the pool, and it should be reported as such.

## Challenges and Limitations

- **Unknown denominators:** on the open web or in an unindexed corpus, the number of relevant documents cannot be known, so recall is replaced by precision at k or graded-gain measures.
- **Pooling bias and judgment drift:** assessors disagree, relevance criteria vary, and documents added after the pool was judged are never evaluated.
- **Cost:** reliable relevance assessment is manual, slow, and expensive, which is why pooled, partial evaluation is the norm.
- **Metric gaming:** optimizing a single number (such as precision at ten) can degrade other qualities users care about, including diversity and freshness.
- **Aggregation choices:** reporting only a mean hides queries that fail badly; medians and per-query distributions should accompany averages.
- **Stakeholder mismatch:** an indexer optimizing exhaustivity, a librarian optimizing precision, and a user optimizing time-to-answer are not optimizing the same quantity.

## Chapter Summary

Precision, recall, F-measure, and fallout all descend from four counts, and any competent information professional should be able to compute them from a result set and explain in plain language what they mean. The two worked examples show how to diagnose a search, revise it, and verify that the revision improved matters rather than merely moved the numbers. Beyond the basics, precision at k, average precision, and graded-gain measures handle ranked output and unknown collections, while pooled test collections make evaluation affordable at all. Every reported figure carries assumptions about pooling, cut-offs, and judgment quality, and stating those assumptions is part of the result.`,
    keyTerms: [
      { term: "Precision", definition: "The proportion of retrieved documents that are relevant to the information need, calculated as relevant retrieved divided by total retrieved." },
      { term: "Recall", definition: "The proportion of all relevant documents in a collection that are retrieved, calculated as relevant retrieved divided by total relevant in the collection." },
      { term: "F-measure", definition: "The harmonic mean of precision and recall, calculated as twice the product of the two divided by their sum, rewarding balance between them." },
      { term: "Fallout", definition: "The proportion of non-relevant documents that are retrieved, calculated as false positives divided by all non-relevant documents in the collection." },
      { term: "Silence", definition: "The count of relevant documents in a collection that a search failed to retrieve, the complement of recall." },
      { term: "Noise", definition: "The count of retrieved documents that are not relevant to the information need, the complement of precision." },
      { term: "Precision at k", definition: "Precision measured only within the top k ranked results, reflecting what a user sees on the first screen." },
      { term: "Test collection", definition: "A fixed set of documents, queries, and relevance judgments used to evaluate retrieval systems repeatably." },
      { term: "Pooling", definition: "The practice of merging the top results of several systems for each query and judging only that merged set to approximate complete relevance assessment." },
    ],
    reviewQuestions: [
      "Define precision and recall and derive both from the four cells of a confusion matrix. Why can a search be highly precise yet seriously incomplete?",
      "A search retrieves 60 documents, 45 of which are relevant, in a collection holding 200 relevant documents. Calculate precision, recall, F-measure, and silence, showing all working.",
      "After a query revision, a search retrieves 120 documents of which 66 are relevant, with the same 200 relevant documents in the collection. Recalculate the metrics and judge whether the revision improved the search.",
      "Explain why fallout alone is a poor quality signal in a large collection, using a worked figure to support your argument.",
      "Design an evaluation protocol for a university discovery service, covering test collection construction, pooling depth, assessor instructions, and the metrics you would report.",
      "Critically discuss the statement that 'recall cannot be computed in a live system, so it should be ignored'. What alternative evidence would you present to a library management committee?",
    ],
    furtherReading: [
      "van Rijsbergen, C. J. (1979). Information Retrieval (2nd ed.). London: Butterworths.",
      "Manning, C. D., Raghavan, P., & Schütze, H. (2008). Introduction to Information Retrieval. Cambridge: Cambridge University Press.",
      "Buckland, M., & Gey, F. (1994). The relationship between recall and precision. Journal of the American Society for Information Science, 45(1), 12-19.",
      "Tague-Sutcliffe, J. (1992). Measuring Information: An Information Services Perspective. Newbury Park, CA: Sage.",
      "Baeza-Yates, R., & Ribeiro-Neto, B. (2011). Modern Information Retrieval: The Concepts and Technology Behind Search (2nd ed.). Upper Saddle River, NJ: Addison-Wesley.",
    ],
    diagramId: "ch26-pr-rec-worked",
  },
  {
    number: 27,
    module: "Module 7: Practical Synthesis",
    title: "Designing a Specialized Micro-Thesaurus",
    objectives: [
      "Define a micro-thesaurus and distinguish it from a general thesaurus and from a subject heading list.",
      "Follow a standards-informed procedure for building a micro-thesaurus from a working document corpus.",
      "Construct correct preferred-term, equivalence, hierarchical, and associative relationships with scope notes.",
      "Test a draft micro-thesaurus against sample indexing and user queries before release.",
      "Plan the maintenance, versioning, and mapping arrangements that keep a micro-thesaurus usable over time.",
    ],
    content: `Large general vocabularies are indispensable but rarely fit a specialized collection exactly. A **micro-thesaurus** is a deliberately bounded subset of a subject field, built for a defined corpus and community, that retains the structure of a full thesaurus while dropping the vocabulary irrelevant to local work. Departments, thematic repositories, and subject teams routinely need one: a hospital library on Evidence-Based Medicine, an agricultural institute on post-harvest losses, or a university library supporting a single faculty. This chapter presents the design procedure, the record structure required by the relevant standards, a worked example, and the maintenance decisions that determine whether the result survives its first year of use.

[[diagram:ch27-micro-thesaurus]]

## Purpose, Scope and Standards

A micro-thesaurus earns its place when a general vocabulary produces systematic noise (over-broad terms retrieving irrelevant material) or systematic silence (missing local terms and local usage). Its scope statement must answer three questions in writing: which collection does it serve, which user population does it serve, and what is explicitly excluded.

Two standards frame the work:

- **ANSI/NISO Z39.19** specifies the components of a monolingual controlled vocabulary: preferred terms, entry terms with reciprocal references, broader and narrower terms, related terms, scope notes, and rules governing the four relationship types.
- **ISO 25964-1** covers thesauri and their interoperability, distinguishing the hierarchical relationships (generic, instance, and whole-part) from equivalence and associative relations, and setting requirements for representation and mapping so that a local thesaurus can be aligned with larger systems.

Building to these standards means the artifact is not a private list but a portable, mappable knowledge organization system.

## The Design Procedure

1. **Define scope and governance.** Name an owner, a review cycle, and the decision authority for adding or retiring terms.
2. **Assemble the corpus.** Gather titles, abstracts, author keywords, and existing descriptors from the target collection, plus a sample of user search logs.
3. **Extract candidate terms.** Count frequent noun phrases and noun compounds; retain terms that describe real concepts in the corpus, not incidental words.
4. **Select preferred terms.** Choose one authorized form per concept, preferring the usage of the relevant standard vocabulary where one exists.
5. **Build equivalence relationships.** Record synonyms, abbreviations, spelling variants, and common wrong terms as USE references from the variant to the preferred term, with reciprocal UF references.
6. **Build the hierarchy.** Place each preferred term under a broader term where the relationship is logically true: class to member, whole to part, or specific instance. Do not link terms that merely co-occur.
7. **Add associative relationships.** Link terms that are conceptually related but neither broader nor narrower, such as a method and its typical application.
8. **Write scope notes.** Give every term a note stating what it includes and, crucially, what it excludes, so two indexers reach the same decision.
9. **Test and revise.** Index a sample of documents and run real user queries against the draft; count missed terms and unwanted hits, then adjust.
10. **Document and publish.** Assign a version, record the vocabulary from which terms were borrowed, and publish mapping notes to any external scheme used for federated searching.

## Record Structure: A Worked Term

Consider a micro-thesaurus supporting an institutional repository on open scholarship at a Nigerian university.

- **Preferred term:** Institutional repositories
- **USE (from variants):** University repositories; IR (as an entry variant where it is unambiguous)
- **UF:** digital archives of theses; institutional document servers
- **BT:** Digital libraries; Academic libraries
- **NT:** Institutional repositories -- Nigeria; Theses
- **RT:** Open access; Metadata; Persistent identifiers; Scholarly publishing
- **Scope note:** Covers repositories maintained by an institution to hold its own research output, theses, and reports. Does not cover national bibliographic databases or subject-focused aggregators.

Reading the record shows the design logic: **USE/UF** handles vocabulary equivalence, **BT/NT** builds the hierarchy that lets a search be exploded or focused, **RT** supports lateral navigation, and the scope note closes the ambiguity that pure term lists leave open.

## Worked Example: Testing the Draft

1. Select 30 documents from the repository that already carry human-assigned keywords, and hold them out as a test set.
2. Have two indexers assign descriptors independently using the draft micro-thesaurus.
3. Compare assignments: compute agreement as the proportion of shared terms, and log every case where an indexer wanted a term that does not exist.
4. Run ten realistic user queries, including variant spellings and the abbreviation IR, and record precision at ten and the presence of missed results.
5. Revise: add the missing terms as entry terms, split any term doing double duty, and add scope notes where indexers disagreed.
6. Repeat until agreement and retrieval performance stabilize, then freeze version 1.0 and schedule the next review.

> Practice rule: a term that indexers cannot apply consistently is a scope-note problem first and a vocabulary problem second.

## Challenges and Limitations

- **Boundary problems:** deciding what is inside the scope is contested, especially for interdisciplinary collections that touch neighbouring departments.
- **Duplication with general schemes:** without mapping to LCSH, MeSH, or a national vocabulary, the micro-thesaurus isolates the collection from federated search services.
- **Maintenance debt:** local thesauri rarely receive the staffing of national ones; unowned vocabularies decay within a few years.
- **User expectations:** searchers bring everyday language, so entry terms and free-text access points are as important as the formal hierarchy.
- **Post-coordination questions:** whether to combine terms at search time (for example, a place with a subject) or store ready-made compound headings must be decided once, not case by case.
- **Migration risk:** if the repository platform changes, the vocabulary must be exportable in a standard form such as SKOS or it will be lost with the old system.

## Chapter Summary

A micro-thesaurus is a scoped, standards-shaped vocabulary designed for a defined corpus and community. Following ANSI/NISO Z39.19 and ISO 25964-1, the designer moves from a written scope statement through corpus analysis, preferred-term selection, equivalence, hierarchical and associative relationships, and scope notes, then validates the draft against held-out documents and real queries. The worked term record demonstrates how USE/UF, BT/NT, RT, and a scope note together eliminate ambiguity. Longevity depends on governance: an owner, a version, a mapping to external schemes, and a scheduled review convert a promising draft into durable bibliographic infrastructure.`,
    keyTerms: [
      { term: "Micro-thesaurus", definition: "A restricted subset of a subject field's vocabulary, built for a defined corpus and user community, that retains full thesaurus relationship structure." },
      { term: "Scope note", definition: "A note defining a term's intended meaning, including what it excludes, used to prevent inconsistent application by indexers." },
      { term: "Preferred term", definition: "The authorized form chosen to represent a concept, from which variant forms lead through USE references." },
      { term: "Entry term", definition: "A synonym, abbreviation, spelling variant, or common alternative expression recorded as USE so that it directs the user to the preferred term." },
      { term: "USE/UF", definition: "Reciprocal thesaurus relationships in which a non-preferred term says USE (preferred term) and the preferred term says UF (used for) that variant." },
      { term: "BT/NT", definition: "Broader-term and narrower-term relationships that build the hierarchical structure enabling a search to be exploded or focused." },
      { term: "RT", definition: "A reciprocal associative relationship linking terms that are related in meaning but neither broader nor narrower than each other." },
      { term: "Generic relationship", definition: "A class-to-member hierarchical link, one of the hierarchy types distinguished by ISO 25964-1 alongside instance and whole-part." },
      { term: "Interoperability mapping", definition: "The documented correspondence between local terms and an external vocabulary, enabling federated search and shared retrieval." },
    ],
    reviewQuestions: [
      "Define a micro-thesaurus and state three reasons a library would build one instead of using a general vocabulary unmodified.",
      "Write a scope statement for a micro-thesaurus supporting a faculty of engineering repository, naming what the vocabulary will deliberately exclude.",
      "Construct a complete term record for a concept of your choice, including preferred term, two entry terms, one broader term, two narrower terms, one related term, and a scope note.",
      "Explain why a term should not be made narrower than another merely because the two frequently co-occur in the corpus, and name the relationship type that would be correct instead.",
      "Design a validation plan for a draft micro-thesaurus: specify the test corpus, the number of indexers, the agreement measure, and the user queries you would run.",
      "Critically discuss the maintenance problem in local vocabularies. Propose a governance arrangement, including roles and a review interval, that would keep one usable for five years.",
    ],
    furtherReading: [
      "ANSI/NISO Z39.19-2005. Guidelines for the Construction, Format, and Management of Monolingual Controlled Vocabularies. Baltimore, MD: NISO Press.",
      "ISO 25964-1:2011. Information and documentation — Thesauri and interoperability with other vocabularies — Part 1: Thesauri for information retrieval. Geneva: ISO.",
      "Aitchison, J., Gilchrist, A., & Bawden, D. (2000). Thesaurus Construction and Use: A Practical Manual (5th ed.). London: Aslib Information.",
      "Lancaster, F. W. (1986). Vocabulary Control for Information Retrieval (2nd ed.). Arlington, VA: Information Resources Press.",
      "W3C. (2009). SKOS Simple Knowledge Organization System Reference. W3C Recommendation. Available at https://www.w3.org/TR/skos-reference/",
    ],
    diagramId: "ch27-micro-thesaurus",
  },
  {
    number: 28,
    module: "Module 7: Practical Synthesis",
    title: "The Future of Bibliographic Control in the Semantic Web Era",
    objectives: [
      "Trace the continuity between classic principles of bibliographic control and present-day linked-data practice.",
      "Explain the semantic web stack of technologies and identify where each layer supports indexing and vocabulary work.",
      "Compare MARC-based description with linked-data models such as RDA, BIBFRAME, and SKOS representations of vocabularies.",
      "Assess the contribution and the risks of machine learning and language models to subject access and abstracting.",
      "Propose a professional agenda for information professionals in linked-data, vocabulary-governance, and AI-oversight roles.",
    ],
    content: `Bibliographic control is the practice of describing, organizing, and providing access to recorded knowledge so that a user can find what exists. The principles are old and the mechanisms are new. Paul Otlet's documentation movement, S. R. Ranganathan's analytico-synthetic classification, and the twentieth century's cooperative authority files all anticipated a world in which meaning is expressed in machine-readable form and linked across systems. This closing chapter asks what endures, what the semantic web and linked-data movement actually add, and what artificial intelligence changes for the profession.

[[diagram:ch28-semantic-web]]

## Principles That Do Not Change

Despite the churn of formats, four commitments underpin bibliographic control and survive every technology transition:

- **Description of the item:** an adequate surrogate must represent the work well enough for a stranger to judge its relevance.
- **Authority control:** names, titles, subjects, and identifiers must be resolved to canonical forms so that variants do not fragment the record of a field's output.
- **Organized retrieval:** subjects must be arranged in a systematic structure that supports both known-item search and exploratory browsing.
- **Cooperation and durability:** shared standards and shared effort, from union catalogues to cooperative cataloguing programs, make description affordable and records long-lived.

What the semantic web changes is the medium of those commitments: statements become globally resolvable data, and authority files become networks rather than lists.

## The Semantic Web and Linked Data Stack

The technology stack that supports this change is layered and each layer has a specific indexing consequence:

1. **URIs and HTTP content negotiation** give every entity a resolvable identifier, so a person, a subject, or a work can be cited unambiguously across systems.
2. **RDF** provides the triple, subject, predicate, object, as the universal data model for statements about documents and concepts.
3. **RDFS and OWL** supply classes, properties, and formal axioms that permit inference, such as recognizing that a narrower term is also an instance of the broader class for retrieval purposes.
4. **SKOS** represents knowledge organization systems directly: preferred labels, alternative labels, broader, narrower, and related relations, and scope notes, making thesauri such as a local micro-thesaurus publishable as linked data.
5. **SPARQL** queries across graphs, letting a service combine holdings, subject authorities, and identifiers in one request.
6. **Shared identifiers** such as ORCID for contributors, ROR for organizations, and DOIs for outputs connect library records to the wider research graph.

The practical gain is interoperability: a subject heading becomes a link rather than a string, so two libraries that use different labels for the same concept can still be joined.

## From MARC to Linked-Data Description

MARC bibliographic records have served libraries well for decades but are opaque to web crawlers, carry identifiers internally, and encode subjects as text strings. Alternatives and successors have therefore emerged:

- **RDA (Resource Description and Access)** recasts description around the conceptual entities of the IFLA Library Reference Model, giving separate, related entities for work, expression, manifestation, and item, plus persons, families, and corporate bodies.
- **BIBFRAME**, developed by the Library of Congress, models bibliographic data as linked data intended to replace MARC in the exchange layer.
- **Schema.org vocabulary** provides a lightweight web-standard description used by search engines and increasingly adopted for marking up scholarly pages.
- **Vocabulary services**, including library authority files published at resolvable URIs, let external systems reference library-controlled concepts directly.

Migration is slow and lossy: legacy records carry data in fields that map imperfectly to new models, and every transformation risks discarding information that cataloguers deliberately recorded. Transition planning is therefore a professional responsibility, not a technical afterthought.

## Artificial Intelligence and a Linked-Data Workflow

Machine learning touches every stage discussed in this module: candidate descriptor recommendation, entity extraction and linking, deduplication and record matching, machine translation of abstracts, automated classification of publication types, semantic retrieval over embeddings, and summarization assistance for abstracting. Two cautions follow from the chapters on NLP and evaluation:

- **Recommendation is not authorization.** Systems that propose terms must operate inside a human-in-the-loop workflow with logged decisions, per-descriptor evaluation, and an audit trail, because a model score is not an explanation.
- **Opaque ranking needs measurement.** Where recall cannot be computed, professional evaluation must rely on pooled judgments, precision at k, and graded relevance measures rather than vendor claims.

There are also equity considerations: models trained predominantly on dominant-language web content represent African institutions, place names, and local terminologies less well, so automated systems risk quietly reducing discoverability for exactly the scholarship that most needs exposure. Vocabulary governance, corpus curation, and human review are counter-measures the profession controls.

One departmental application shows how the layers combine: a university library wants its faculty's research visible as linked data.

1. **Identify entities:** works, contributors, funders, subjects, and organizations, each assigned a stable local identifier.
2. **Enrich with authorities:** match contributors to ORCID, units to ROR, and subjects to published authority URIs, recording match evidence.
3. **Model statements:** assert triples such as "Thesis has contributor Person", "Person affiliated with Organization", "Thesis subject Concept".
4. **Publish as linked data:** expose records and the local subject list in a resolvable format, with SKOS versions of any local vocabulary.
5. **Index and query:** ingest into a search index that uses both keyword weighting and graph traversal, then evaluate retrieval with pooled relevance judgments.
6. **Monitor and repair:** schedule link checking, re-run entity matching as external authorities change, and log corrections.

## Challenges and Limitations

- **Adoption and legacy:** decades of MARC records, staff skills, and integrated library systems must be migrated without losing description.
- **Sustainability:** linked-data services require hosting, identifiers, and governance, and poorly funded infrastructure disappears.
- **Rights and reuse:** rights metadata and licensing for full text and abstracts remain inconsistent, limiting what automated systems may process.
- **Bias and opacity:** algorithmic ranking and model-generated suggestions can encode the biases of their training data unless tested for them.
- **Global imbalance:** if vocabularies and corpora are built only around dominant languages and institutions, the semantic web reproduces the coverage gaps that bibliographic control has always struggled against.
- **Skill expectations:** the profession must add data modeling, identifier management, and evaluation of machine systems to its traditional competencies without abandoning cataloguing judgment.

## Chapter Summary

The future of bibliographic control is an extension rather than a replacement of its principles. Description, authority control, systematic retrieval, and cooperation now require identifiers, triples, ontologies, and SKOS-published vocabularies, and they must operate alongside machine-learning systems that propose rather than decide. For information professionals, the opportunities lie in vocabulary governance, linked-data curation, ontology and mapping work, evaluation of retrieval with honest metrics, and oversight of automated indexing. The technology will keep changing; the professional obligations to accuracy, transparency, and equitable access will not.`,
    keyTerms: [
      { term: "Bibliographic control", definition: "The organized description, arrangement, and access provision for recorded knowledge so that users and systems can identify and retrieve what exists." },
      { term: "Semantic web", definition: "An extension of the web in which information is expressed in machine-readable, formally structured form so that software can reason across sources." },
      { term: "Linked data", definition: "A set of practices for publishing structured data using HTTP identifiers and RDF links so that records from different sources can be joined." },
      { term: "RDF triple", definition: "A subject-predicate-object statement that forms the atomic data model of linked data and of knowledge graphs." },
      { term: "Ontology", definition: "An explicit specification of the classes, properties, and axioms that define a domain and permit automated inference over it." },
      { term: "SKOS", definition: "The W3C Simple Knowledge Organization System, a model for publishing thesauri, classification schemes, and subject heading lists as linked data." },
      { term: "RDA", definition: "Resource Description and Access, the description standard built on the IFLA Library Reference Model's entities for works, expressions, manifestations, and items." },
      { term: "BIBFRAME", definition: "The Library of Congress model designed to express bibliographic description as linked data in place of MARC exchanges." },
      { term: "Persistent identifier", definition: "A durable, resolvable reference such as a DOI, ORCID iD, or ROR identifier that keeps an entity addressable over time." },
      { term: "Vocabulary governance", definition: "The ownership, versioning, mapping, and review arrangements that keep a controlled vocabulary accurate and interoperable." },
    ],
    reviewQuestions: [
      "Identify four principles of bibliographic control that predate the web, and explain how linked data changes the medium through which each is realized.",
      "Name the layers of the semantic web stack that matter most to a subject indexer and state the indexing consequence of each.",
      "Compare MARC-based description with a linked-data model such as BIBFRAME on three dimensions, and identify one kind of data at risk during migration.",
      "Explain how SKOS would be used to publish a local micro-thesaurus so that another library could map its terms to yours.",
      "A vendor proposes an AI system that assigns descriptors with no human review. Present a professional response that specifies the workflow, evaluation, and documentation you would require.",
      "Critically discuss whether the semantic web resolves or reproduces the geographic and linguistic coverage gaps in bibliographic control, and propose one measure a national library in Africa could take.",
    ],
    furtherReading: [
      "Berners-Lee, T., Hendler, J., & Lassila, O. (2001). The Semantic Web. Scientific American, 284(5), 34-43.",
      "Allemang, D., & Hendler, J. (2011). Semantic Web for the Working Ontologist (2nd ed.). Burlington, MA: Morgan Kaufmann.",
      "Heath, T., & Bizer, C. (2011). Linked Data: Evolving the Web into a Global Data Space (2nd ed.). San Rafael, CA: Morgan & Claypool.",
      "IFLA Study Group on the Functional Requirements for Bibliographic Records. (2011). FRBR Library Reference Model. The Hague: IFLA.",
      "W3C. (2014). RDF 1.1 Concepts and Abstract Syntax. W3C Recommendation. Available at https://www.w3.org/TR/rdf11-concepts/",
    ],
    diagramId: "ch28-semantic-web",
  },
];
