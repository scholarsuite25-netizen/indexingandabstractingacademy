import { BookChapter } from '../bookTypes';

// Chapters 1-10 — rewritten to master's (LIS 814) depth.
export const BOOK_PART1: BookChapter[] = [
  {
    number: 1,
    module: "Module 1: Foundations",
    title: "Introduction to Indexing and Abstracting in Information Science",
    objectives: [
      "Define indexing, abstracting, and subject analysis and distinguish each from bibliographic description.",
      "Analyze the indexing process as a chain of cognitive decisions from reading to term assignment and entry formation.",
      "Apply the governing standards (ANSI/NISO Z39.19, Z39.14, ISO 25964, ISO 214, ISO 5963) to a concrete subject-analysis task.",
      "Critically evaluate how automated and AI-assisted indexing reconfigures, but does not eliminate, professional judgment.",
      "Explain the contributions of Ranganathan, Cleverdon, Lancaster, Foskett, Taube, and Kent to the foundations of the field.",
    ],
    content: `This opening chapter establishes the vocabulary, scope, and intellectual architecture of LIS 814. Indexing and abstracting are the two operations that turn a document into something findable: the **index entry** and the **abstract** are what most searchers encounter before they ever reach the full text. Because users navigate by proxies rather than by shelves, the quality of those proxies is the quality of the information system itself. In an era of vector search, large language models, and machine-generated summaries, understanding the human analytical judgments these systems attempt to automate has become more important for the professional, not less.

[[diagram:ch1-indexing-process]]

## Defining the Field

**Indexing** is the systematic analysis of a document (or of a non-documentary object such as a dataset, image, or video) in order to determine what it is about and to express that determination as **access points** — the terms, headings, identifiers, or class numbers through which a searcher can reach the item. **Abstracting** is the parallel act of reading a document and condensing its essential content into a short, coherent, self-contained statement that allows a reader to judge whether to consult the original. Both rest on a prior operation, **subject analysis**: the interpretation of content by a human reader or by a classifier.

Three related operations are routinely confused, and exam questions frequently turn on the distinction:

1. **Bibliographic description** answers "what is this item?" — author, title, publisher, date, extent, physical form.
2. **Subject analysis** answers "what is this item about?" — the concepts, entities, and relations that constitute its aboutness.
3. **Abstracting** answers "what does this item say?" — scope, method, data, findings, conclusions.

A catalogue record may be formally correct while its subject analysis is poor; the record then identifies the item but does not make it findable. Because index entries and abstracts function as **bibliographic surrogates** standing in for documents the searcher has not yet seen, a defect in a surrogate is a defect in the retrieval system: it either suppresses relevant documents (**silence**) or exposes irrelevant ones (**noise**).

Lancaster's characterization of indexing as a chain of decisions — reading, interpretation, term selection, entry formation, recording — remains the standard visualization, and the diagram for this chapter renders that chain explicitly: a document enters, is analyzed, concepts are extracted, terms are assigned from an indexing language, entries are coordinated and filed, and the resulting record joins a database where it can be retrieved.

## Theoretical Foundations

Five ideas govern the whole of this course:

- **The surrogate principle.** Users consult representations, not documents. Indexing is therefore a quality-of-service function rather than an editorial afterthought.
- **Aboutness as judgment.** Subject designation is interpretive, so the profession measures **inter-indexer consistency** instead of assuming objectivity.
- **The vocabulary factor.** Cleverdon's Cranfield experiments isolated three variables that determine retrieval performance: the vocabulary used, the syntactic rules for combining terms, and the organization of the retrieval system. Modules 2 and 3 of this course are, in effect, an extended treatment of those variables.
- **The user need.** Ranganathan's fifth law, "Every reader his or her book," reframes indexing as a service relationship: entries are constructed for a community of searchers, not for the text alone.
- **Economy of effort.** Ranganathan's first law, "Save the time of the reader," binds the indexer too, who must balance **exhaustivity** — how many concepts get recorded — against cost, and the searcher, who must filter results.

Kent, Taube, and the coordinate-indexing movement added a decisive corollary: if concepts are recorded separately rather than fused into fixed headings, coordination can be postponed until search time, which raises recall at the price of demanding query-formulation skill from the user.

## Standards and Standards Literacy

Professional practice is disciplined by published standards, and students are expected to know which document governs what:

- **ANSI/NISO Z39.19-2005 (R2010)**, Guidelines for the Construction, Format, and Management of Monolingual Controlled Vocabularies — the authority for vocabulary structure, relationship symbols, scope notes, and display formats used throughout this course.
- **ISO 25964-1:2011**, Information and documentation — Thesauri and interoperability with other vocabularies — Part 1: Thesauri for information retrieval — the international counterpart of Z39.19, superseding the older ISO 2788 monolingual thesaurus guidelines.
- **ANSI/NISO Z39.14**, Abstracts — the purpose, types, elements, and writing of abstracts.
- **ISO 214:1976**, Documentation — Abstracts for documentation and related documents — the international statement of abstracting requirements.
- **ISO 5963:1985**, Methods for examining documents, determining their subjects, and selecting subject headings — the standard description of the subject-analysis act itself.

> Exam tip: Z39.19 governs vocabulary construction; Z39.14 governs abstracts; ISO 25964 governs thesauri internationally; ISO 214 governs abstract content; ISO 5963 governs the analytic procedure. Never cross-quote these numbers.

## Worked Example

Take an item titled "Mobile money adoption and smallholder farmers' access to credit in Oyo State, Nigeria," received by a university agricultural economics collection. An indexer works the chain:

1. **Description** records author, journal, year, and pagination — no interpretation required.
2. **Scope decision**: the collection indexes agricultural economics, rural finance, and Nigerian development studies; clinical medicine is out of scope.
3. **Concept extraction**: mobile money; smallholder farmers; credit access; adoption as behavior; Oyo State as place.
4. **Term translation**: "mobile money" maps to an authorized form such as *Mobile banking*; "smallholder farmers" may map to *Small farms*; "credit access" maps to *Credit* plus a geographic addition.
5. **Coordination**: entries are filed under each assigned heading, with see and see also references steering synonym users to authorized forms.
6. **Abstract**: an indicative abstract of roughly 100-150 words states purpose, data, method, principal findings, and implications.

Step 4 is the decisive intellectual act: the indexer must decide whether the document is about financial technology, agricultural credit, or rural development — a determination no string-matching routine makes reliably.

## Implications for Digital Libraries and AI Practice

Automated indexing (statistical weighting such as tf-idf, and now dense embeddings) performs concept extraction and term assignment at scale, but it inherits its assumptions from the same three Cleverdon factors. Machine-generated abstracts are fluent and can silently invent findings, so the professional's role has shifted from executing every step to **auditing** automated output against the standards above. African university libraries — including large hybrid print and digital operations such as those at the University of Ibadan or the University of Nigeria, Nsukka, often working with thin cataloguing establishment — increasingly rely on discovery layers fed by harvested metadata. That makes consistent local subject analysis and authority control a prerequisite for national and union-catalogue visibility rather than a local nicety.

## Chapter Summary

- Indexing and abstracting convert documents into searchable **surrogates**: index entries and abstracts.
- Subject analysis is interpretive; consistency must be measured, not assumed.
- The indexing chain runs from description and scope, through concept extraction and term assignment, to coordination, recording, and maintenance.
- Five standards — Z39.19, Z39.14, ISO 25964, ISO 214, ISO 5963 — frame practice and must be distinguished precisely.
- AI automates links in the chain but does not remove the need for standards-based human judgment.`,
    keyTerms: [
      { term: "Indexing", definition: "The process of analyzing a document to determine its subject content and representing that content by terms, headings, or class numbers that serve as access points for retrieval." },
      { term: "Abstracting", definition: "The process of reading a document and producing a concise, self-contained statement of its purpose, method, principal findings, and conclusions so readers can judge its usefulness." },
      { term: "Subject analysis", definition: "The interpretive determination of a document's aboutness, performed before terms are assigned and described by ISO 5963." },
      { term: "Bibliographic surrogate", definition: "A record, index entry, or abstract that stands in for a document the user has not yet consulted, enabling a relevance decision without access to the original." },
      { term: "Access point", definition: "Any searchable or browsable element of a record — author, title term, subject heading, class number, identifier — through which a user can reach an item." },
      { term: "Bibliographic control", definition: "The systematic description, identification, location, and subject access provision for recorded information so that items can be found and used." },
      { term: "Exhaustivity", definition: "The degree to which all concepts in a document are indexed rather than only the dominant ones; a policy decision that trades cost and noise for recall." },
      { term: "Inter-indexer consistency", definition: "The extent to which two or more indexers assign the same terms to the same document; the principal empirical measure of subject-analysis reliability." },
      { term: "Noise", definition: "Retrieved documents that are not relevant to the searcher's need, usually produced by over-broad or ambiguous indexing." },
      { term: "Silence", definition: "The failure of an information system to retrieve relevant documents, usually produced by insufficient exhaustivity, vocabulary mismatch, or inconsistent indexing." },
    ],
    reviewQuestions: [
      "Define indexing and abstracting in your own words and name the single analytical operation they share.",
      "Distinguish bibliographic description, subject analysis, and abstracting. For the title \"Women entrepreneurs and microfinance in Kano State, Nigeria,\" show what each operation would produce.",
      "Assign plausible LCSH-style descriptors to the title in question 2 and explain each assignment decision.",
      "State Cleverdon's three determinants of retrieval performance and show how each appears in a modern university discovery layer.",
      "\"Two competent indexers may disagree about a document and neither be wrong.\" Discuss this claim with reference to aboutness and inter-indexer consistency.",
      "Which standard governs abstracts, and how does its scope differ from that of ANSI/NISO Z39.19-2005?",
      "Critically evaluate whether an abstract produced by a large language model can satisfy the requirements of ISO 214 without human revision.",
    ],
    furtherReading: [
      "Lancaster, F.W. (1998). Indexing and Abstracting in Theory and Practice. 2nd ed. Urbana-Champaign: University of Illinois Graduate School of Library and Information Science.",
      "Svenonius, E. (2000). The Intellectual Foundation of Information Organization. Cambridge, MA: MIT Press.",
      "National Information Standards Organization. Abstracts (ANSI/NISO Z39.14). Bethesda, MD: NISO Press.",
      "ISO 214:1976, Documentation — Abstracts for documentation and related documents. Geneva: International Organization for Standardization.",
      "Manning, C.D., Raghavan, P. and Schütze, H. (2008). Introduction to Information Retrieval. Cambridge: Cambridge University Press.",
    ],
    diagramId: "ch1-indexing-process",
  },
  {
    number: 2,
    module: "Module 1: Foundations",
    title: "Aboutness vs. Mentions: Intellectual Subject Analysis",
    objectives: [
      "Define aboutness and distinguish it from incidental mention, allusion, and contextual reference.",
      "Analyze a document's structure to identify principal, secondary, and incidental subjects.",
      "Apply explicit aboutness tests to decide which concepts warrant index entries.",
      "Critically evaluate competing claims that aboutness is objective, conventional, or user-relative.",
      "Assess how mention-driven retrieval produces noise and how mention-blind systems produce silence.",
    ],
    content: `Every indexing decision rests on a prior judgment that is deceptively simple: is this document *about* that subject, or does it merely *mention* it? The distinction is the fulcrum of intellectual subject analysis, because an indexer who cannot make it will either flood the index with incidental terms or withhold terms that legitimate users need. This chapter examines how aboutness is theorized, how it is tested in practice, and how the mention problem behaves differently in keyword systems than in controlled-vocabulary systems.

[[diagram:ch2-aboutness-mentions]]

## The Problem of Aboutness

**Aboutness** denotes the set of subjects a document treats with sufficient centrality, depth, and argumentative commitment that a reader who consulted it would reasonably report that the document deals with those subjects. **Mention** denotes the appearance of a concept without such treatment: a passing example, a name in a literature review, an acknowledgement, a method borrowed from another field, a citation to a paper on a different topic.

The boundary is not self-evident. Consider a study of agricultural extension in Benue State that opens with a paragraph on climate variability as background. Climate variability is contextual here — but if two of the study's five findings concern rainfall-driven yield loss, the same concept has become part of the document's aboutness. Aboutness is therefore a matter of **degree and function of treatment**, not a binary property of word occurrence. Foskett's treatment of the subject approach emphasizes that the indexer reads for the author's treatment of a topic rather than for its presence; Lancaster likewise treats subject determination as a reasoned interpretation of what the document argues.

Three complications make the judgment harder:

- **Audience effects.** A methodology section may be central for one user community and noise for another.
- **Secondary subjects.** Documents legitimately support more than one subject; the question is which are principal and which are merely available.
- **Genre.** A review article mentions hundreds of studies by design; its aboutness is the subfield, not the individual studies cited.

## Mentions and Document Structure

Mentions tend to cluster in predictable locations, which gives the indexer a systematic method rather than a hunch:

1. **Title and abstract** — highest signal density; usually but not always aboutness-bearing.
2. **Introduction and literature review** — frequently mention adjacent fields as context.
3. **Method** — imports techniques such as statistics, sampling, and instrumentation, which are usually not aboutness.
4. **Results and discussion** — returns to the principal subjects, with some secondary ones.
5. **References, acknowledgements, and figure captions** — overwhelmingly incidental.

A useful heuristic is the **treatment test**: would a competent reader, having read the item, volunteer this concept as a topic of the document? If the concept appears only in the apparatus of the paper, it is a mention. Taube's uniterm philosophy applied a related discipline: record the concept as a unit only when it carries the document's subject, and let searchers combine units later.

The cost of failure is asymmetric. Indexing mentions inflates the posting list of a heading, lowering **precision** and burying relevant items under irrelevant ones. Suppressing a genuine secondary subject creates **silence** for a legitimate query. The indexer's art lies in tolerating a measured amount of each.

## Tests and Methods for Determining Aboutness

Professional practice converges on a small set of corroborating tests:

- **Title test**: does the concept appear in or clearly underlie the title?
- **Emphasis test**: what proportion of the substantive text does the concept receive?
- **Finding test**: does the concept generate a result, claim, or conclusion?
- **Function test**: is the concept an object of study, or an instrument used to study something else?
- **Classification test**: where would a competent classifier place the item in a schedule, and what does that class path assert?

When the tests conflict, the indexer appeals to **indexing policy**: the collection's scope, the user community's vocabulary, and the stated exhaustivity rules. ISO 5963 frames this examination of documents as a repeatable procedure rather than a private intuition.

> Standards note: ISO 5963:1985 describes methods for examining documents, determining their subjects, and selecting subject headings — aboutness determination is a standardizable act, not a matter of taste.

## Worked Example

Take the hypothetical title: "Blockchain-based credential verification and data protection compliance in Nigerian university admissions." Read for structure:

- **Title signals**: blockchain; credential verification; data protection compliance; Nigerian university admissions.
- **Likely aboutness**: blockchain applications in credential verification, and data protection regulation in higher education.
- **Probable mentions**: the paper may cite distributed ledger cryptography, name a cloud vendor, reference Ghanaian precedents, and quote a particular statute. Cryptography and the vendor are instruments and context — mentions. The statute and the Ghanaian comparison support aboutness only if the document argues about them.

A controlled-vocabulary indexer would assign descriptors for blockchain, academic credentials, records management or authentication, data protection, and higher education in Nigeria, and would index Ghana only if the treatment is comparative. A free-text indexer extracting all capitalized noun phrases would import the vendor name, the algorithm, and the statute, generating precisely the noise the mention test exists to prevent.

## Implications for Digital Libraries and AI Practice

Statistical and neural retrievers do not perform aboutness analysis; they exploit co-occurrence. A document that mentions a term repeatedly may rank as though it were about that term. Dense retrievers mitigate this through contextual embeddings, but they inherit the corpus's own biases: a term appearing in the boilerplate of a whole document series will be treated as topical for every item in it. For institutions assembling institutional repositories — theses, working papers, and conference outputs across West African universities — the practical implication is that author-supplied keywords and full-text search must be supplemented by reviewed subject access, or the repository will retrieve by mention rather than by aboutness.

## Chapter Summary

- Aboutness is a judgment about degree and function of treatment, not about word presence.
- Mentions cluster in introductions, methods, captions, acknowledgements, and references; the indexer reads structurally.
- Corroborating tests — title, emphasis, finding, function, classification — turn intuition into procedure (ISO 5963).
- Over-indexing mentions causes noise; under-indexing genuine secondary subjects causes silence.
- Co-occurrence-based and embedding-based retrieval approximate aboutness but cannot enforce indexing policy.`,
    keyTerms: [
      { term: "Aboutness", definition: "The quality of treating a subject centrally, deeply, and argumentatively enough that a reader would report the document as dealing with that subject." },
      { term: "Mention", definition: "The appearance of a concept in a document as background, instrument, example, or citation without substantive treatment of it." },
      { term: "Principal subject", definition: "A concept that carries a document's main argument or findings and therefore warrants primary index entry." },
      { term: "Secondary subject", definition: "A concept treated substantively but subordinate to the principal subject, normally indexed when exhaustivity policy permits." },
      { term: "Treatment test", definition: "The counterfactual test asking whether a competent reader would volunteer a concept as a topic of the document after reading it." },
      { term: "Indexing policy", definition: "The documented rules of a collection covering scope, permitted subject range, exhaustivity, and vocabulary, invoked when aboutness tests conflict." },
      { term: "Function test", definition: "The distinction between a concept studied for its own sake and a concept used only as instrument, method, or context." },
      { term: "Inter-indexer consistency", definition: "Agreement between indexers on the subject terms for a document; the empirical check on competing aboutness judgments." },
    ],
    reviewQuestions: [
      "Define aboutness and distinguish it from mention using two examples from a scholarly article you have read.",
      "Explain why aboutness is a matter of degree rather than a binary property, and name three document locations where mentions concentrate.",
      "Apply the title, emphasis, finding, and function tests to: \"Renewable energy financing and poverty reduction in coastal communities of Lagos State.\" State which concepts qualify as principal, secondary, or mention.",
      "Assign LCSH descriptors to the title in question 3, then list at least two terms you deliberately withheld and justify each withholding.",
      "Critically evaluate the claim that aboutness is objective and fully recoverable by rule. Which position is more defensible for an indexer working under collection policy?",
      "How does a free-text retrieval system treat mentions differently from a controlled-vocabulary system, and what are the retrieval consequences of each?",
      "Draft a five-rule indexing policy note for a university repository covering when to index instruments, statutes, and comparative-country references.",
    ],
    furtherReading: [
      "Foskett, A.C. (1982). The Subject Approach to Information. 4th ed. London: Clive Bingley.",
      "Lancaster, F.W. (1998). Indexing and Abstracting in Theory and Practice. 2nd ed. Urbana-Champaign: University of Illinois Graduate School of Library and Information Science.",
      "Svenonius, E. (2000). The Intellectual Foundation of Information Organization. Cambridge, MA: MIT Press.",
      "ISO 5963:1985, Documentation — Methods for examining documents, determining their subjects, and selecting subject headings. Geneva: International Organization for Standardization.",
    ],
    diagramId: "ch2-aboutness-mentions",
  },
  {
    number: 3,
    module: "Module 1: Foundations",
    title: "Controlled Vocabularies vs. Natural Language Indexing",
    objectives: [
      "Define controlled vocabulary, natural language indexing, and the indexing languages that mediate between them.",
      "Analyze the failure modes of each approach: synonym scatter, homographic ambiguity, vocabulary gap, and semantic drift.",
      "Compare controlled and free-text indexing on precision, recall, cost, currency, and user compatibility.",
      "Apply both approaches to the same document and reconcile the resulting retrieval sets.",
      "Critically evaluate hybrid and AI-assisted architectures that combine authority control with free text.",
    ],
    content: `The choice between a controlled vocabulary and natural language is the oldest live debate in indexing practice, and it is not settled by ideology: each approach solves a different problem and creates a different one. This chapter sets out the mechanisms of both, contrasts them on explicit criteria, shows why contemporary systems combine them, and explains why information professionals in multilingual environments such as Nigerian university libraries face a sharper version of the trade-off than most.

[[diagram:ch3-controlled-natural]]

## Natural Language Indexing: Mechanisms and Limits

**Natural language indexing** assigns terms taken directly from the document itself — title words, author-supplied keywords, uncontrolled phrases harvested from full text — with no authority control over form, synonymy, or polysemy. Its mechanisms include keyword extraction, statistical weighting such as tf-idf, and, today, tokenization into dense vectors.

Its advantages are real:

- **Currency**: new terminology (for example, "generative AI") is captured the moment authors use it, with no authority-file lag.
- **Low cost**: no subject specialist is required to consult a vocabulary, and no vocabulary needs construction or maintenance.
- **User compatibility**: searchers naturally type the words they know, and the system meets them in their own register.

Its failure modes are equally real:

- **Synonym scatter**: one concept appears under many words — *automobile, car, motor vehicle, auto* — so a query using one form misses documents using another. Foskett and Lancaster both treat this as the cardinal defect of uncontrolled indexing.
- **Homographic ambiguity**: one word carries unrelated meanings (*bank*, *cells*, *Java*), so a query retrieves across domains.
- **Granularity and morphology**: plurals, inflections, abbreviations, and spelling variants fragment postings inconsistently.
- **No pivot**: without a controlled term there is no reliable basis for systematically broadening or narrowing a query.
- **Vocabulary mismatch**: the words in the query need not be the words in the relevant documents, a gap that full-text coverage alone cannot close.

## Controlled Vocabulary: Mechanisms of Control

A **controlled vocabulary** is a list of authorized terms managed under rules that produce one preferred form per concept within a defined scope. The mechanisms are:

1. **Equivalence control** — one preferred term per concept; synonyms and variants become non-preferred entries pointing to it by USE and UF references.
2. **Homograph control** — where one form carries distinct meanings, either a different term is chosen for one meaning, or a qualifier or parenthetical addition separates them.
3. **Hierarchical control** — broader and narrower terms are declared by BT and NT pointers, enabling systematic expansion and narrowing.
4. **Associative control** — related but non-synonymous, non-hierarchical concepts are linked by RT.
5. **Scope notes** — definitions that fix intended meaning and the boundaries of application.

These mechanisms deliver high **precision**, predictable **recall** through hierarchy-based expansion, inter-indexer consistency, and the ability to translate a query into another language or vocabulary at the pivot. Their costs are construction expense, maintenance burden, inevitable lag behind live terminology, and the training needed to apply them.

> Z39.19 rule: a preferred term should represent one concept in one meaning, and every accepted variant should be recorded as a non-preferred entry — this is what makes synonym scatter curable rather than merely tolerable.

## Direct Comparison

- **Vocabulary source**: external and authorized versus internal and authorial.
- **Ambiguity**: reduced by scope notes and terms of art versus unmitigated.
- **Synonymy**: collapsed by equivalence links versus scattered.
- **Recall strategy**: hierarchy expansion and references versus synonyms supplied by the user.
- **Precision strategy**: constrained postings versus ranking and filtering after retrieval.
- **Update cost**: continuous authority maintenance versus none.
- **Multilingual access**: possible through bilingual mapping versus impossible without translation.

Neither side wins outright. Lancaster's argument for vocabulary control is an argument about predictable recall and consistent application across a collection; the case for free text is an argument about currency and cost. The mature position is **hybrid indexing**: controlled descriptors in structured metadata fields such as MARC 650, alongside full-text search, with discovery systems that blend both signals in ranking.

## Worked Example

Document: "Impact of climate change on cassava yields and farmer adaptation strategies in Benue State, Nigeria."

**Free-text assignment** harvested from the text: climate change, cassava yields, farmer adaptation, Benue State, rainfall variability, food security, West Africa, smallholder, DSSAT model, fertilizer.

**Controlled assignment** (schematic): Cassava — Effect of climate change on; Climatic changes — Nigeria — Benue State; Cassava — Yields; Farmers — Adaptation — Nigeria.

Compare the retrieval sets:

- A query for **"global warming"** fails against the controlled set unless an equivalence entry maps that phrase to the authorized term; it succeeds against free text only if those exact words appear.
- A query for **"smallholder"** retrieves the free-text item but not the controlled item, because the indexer judged *smallholder* descriptive rather than aboutness-bearing.
- A query for **"DSSAT"** retrieves the free-text item as noise for a general agronomy searcher, while the controlled set correctly omits it as an instrument.

Neither set is superior in all cases; the sound record carries the controlled descriptors *and* exposes the free-text tokens, and ranking merges them.

## Standards, Multilingual Context, and AI Practice

ANSI/NISO Z39.19-2005 (R2010) and ISO 25964-1:2011 govern construction and management of monolingual vocabularies; ISO 25964-2 addresses interoperability with other vocabularies, the mechanism that lets a local subject language map to a national or international thesaurus. In Nigerian university libraries, where collections are described in English but users think in English, Yoruba, Hausa, or Igbo, and where local phenomena — particular crops, institutions, and policy schemes — lack ready-made authorized terms, the practical strategy is a small local extension file mapped to a host vocabulary such as LCSH or AGROVOC.

AI has blurred the boundary: statistical and neural systems learn term associations from data, effectively **inducing** a soft vocabulary rather than declaring one. They reduce synonym scatter implicitly, but they cannot be audited as an authority file can, they drift with the corpus, and they offer no scope note to cite in a dispute. The professional therefore treats machine-discovered terms as candidates for control, not as control itself.

## Chapter Summary

- Natural language indexing buys currency and cheapness at the cost of synonym scatter, homographic noise, and vocabulary mismatch.
- Controlled vocabulary buys precision, consistent recall, and pivot-based navigation at the cost of construction and maintenance.
- Control is implemented through equivalence, homograph resolution, hierarchy, associative links, and scope notes.
- Hybrid designs — controlled fields plus full text — dominate current practice and should be argued for on evidence rather than fashion.
- AI induces soft vocabularies that must still be validated against standards-based authority practice.`,
    keyTerms: [
      { term: "Controlled vocabulary", definition: "An authorized list of terms in which each preferred term represents one concept within a defined scope, managed under stated construction and maintenance rules." },
      { term: "Natural language indexing", definition: "The assignment of terms taken directly from a document's text or author keywords without authority control over form, synonymy, or polysemy." },
      { term: "Synonym scatter", definition: "The fragmentation of a single concept across many lexical forms in a collection, reducing recall because queries cannot reach all variants." },
      { term: "Homograph", definition: "A single word form denoting two or more unrelated concepts, requiring term differentiation, qualification, or a scope note." },
      { term: "Preferred term", definition: "The authorized form chosen to represent a concept, to which all accepted variants are linked by USE references." },
      { term: "Indexing language", definition: "The total apparatus — terms, syntax, and semantic relationships — by which a system represents document content for retrieval." },
      { term: "Vocabulary gap", definition: "The mismatch between terms users employ in queries and terms used in relevant documents, which full-text coverage cannot by itself eliminate." },
      { term: "Hybrid indexing", definition: "A design combining controlled descriptors in structured fields with uncontrolled full-text terms, blending both signals in ranking." },
      { term: "Pivot", definition: "A controlled term at which a query can be systematically broadened to a BT, narrowed to an NT, or translated into another vocabulary." },
    ],
    reviewQuestions: [
      "Define controlled vocabulary and natural language indexing, then list four mechanisms by which control is achieved.",
      "Explain synonym scatter and homographic ambiguity with two examples each from an African scholarly corpus.",
      "Compare the two approaches on precision, recall, cost, and currency in a table, and state the conditions under which each should be preferred.",
      "Index the title \"Effects of unemployment on secondary school completion in Enugu Urban\" twice: once free-text, once with schematic LCSH descriptors. Reconcile the differences.",
      "Why is vocabulary mismatch a structural problem rather than a problem of indexing effort? What remedies exist?",
      "Critically evaluate the claim that neural embeddings have made controlled vocabularies obsolete.",
      "Propose a local extension strategy for a Nigerian university library that must index locally significant terms absent from LCSH and AGROVOC.",
    ],
    furtherReading: [
      "ANSI/NISO Z39.19-2005 (R2010), Guidelines for the Construction, Format, and Management of Monolingual Controlled Vocabularies. Bethesda, MD: NISO Press.",
      "ISO 25964-1:2011, Information and documentation — Thesauri and interoperability with other vocabularies — Part 1: Thesauri for information retrieval. Geneva: ISO.",
      "Lancaster, F.W. (1986). Vocabulary Control for Information Retrieval. 2nd ed. Arlington, VA: Information Resources Press.",
      "Soergel, D. (1974). Indexing Languages and Thesauri: Construction and Maintenance. New York: Marcel Dekker.",
      "Foskett, A.C. (1982). The Subject Approach to Information. 4th ed. London: Clive Bingley.",
    ],
    diagramId: "ch3-controlled-natural",
  },
  {
    number: 4,
    module: "Module 1: Foundations",
    title: "Bibliographic Control and Universal Access",
    objectives: [
      "Define bibliographic control and distinguish description, identification, location, and subject access as its components.",
      "Analyze the historical movement from local catalogues to universal bibliographic control and shared infrastructure.",
      "Apply metadata standards (RDA or AACR2, ISBD, MARC 21, Dublin Core) to describe a digital object appropriately.",
      "Evaluate the adequacy of current bibliographic control for born-digital, repository, and data objects.",
      "Critically assess how AI-driven discovery reconfigures, and may bypass, traditional bibliographic control.",
    ],
    content: `Bibliographic control is the infrastructure that makes an information system trustworthy: it is the organized body of records that lets a user identify, locate, and obtain recorded knowledge anywhere. This chapter traces the concept from the single-library catalogue to international shared responsibility, examines the standards that make records interoperable, and asks whether current arrangements still deliver universal access when the objects are datasets, preprints, and repository items rather than printed monographs.

[[diagram:ch4-bibliographic-control]]

## Defining Bibliographic Control

**Bibliographic control** is the systematic listing and description of recorded information so that any item can be **identified** (is this the item I mean?), **located** (where is it, physically or digitally?), and **accessed** (how do I obtain or use it, including its subject access?). It comprises four coordinated functions:

1. **Description** — a standardized statement of the item's responsible parties, title, edition, publication data, and extent, executed under ISBD display conventions and RDA or AACR2 content rules.
2. **Identification** — assigning or recording unambiguous identifiers: ISBN, ISSN, DOI, report numbers, and institutional identifiers.
3. **Location** — shelfmarks, call numbers, holdings statements, and persistent URLs.
4. **Subject access** — class numbers and subject headings that answer what the item is about.

A catalogue that achieves only the first three is a bibliography; it becomes a retrieval instrument only with the fourth, which is where indexing and abstracting enter the chain. The quality dimensions of control are **accuracy** (does the record match the item?), **completeness** (is everything in scope recorded?), and **consistency** (do records for the same kind of object follow the same rules?).

## From Local Catalogues to Universal Bibliographic Control

Responsibility for description has migrated upwards over two centuries, from each library describing everything, through shared cataloguing, to **Universal Bibliographic Control (UBC)** — the principle, advanced through IFLA's UBC initiative, that each country should provide authoritative bibliographic description for its own national imprint in a form usable worldwide, so that no item is described twice and none escapes description. The logic is economic as well as intellectual: description done once and reused everywhere.

Three generations of infrastructure mark the path:

- **Card catalogue era**: one record physically replicated; class number and subject headings carried in the same drawer.
- **MARC and centralized cataloguing**: machine-readable records distributed on tape and later over networks, supported by authority files and union catalogues.
- **Networked and linked-data era**: records exposed through protocols and persistent identifiers, describing objects distributed across repositories and publishers.

Each generation raised the stakes for standardization: the more records are shared, the more a single deviation propagates.

## Standards and Infrastructure

The interoperability stack a professional must be able to name and distinguish includes:

- **RDA (Resource Description and Access)** and its predecessor **AACR2 (Anglo-American Cataloguing Rules, 2nd ed.)** — content rules governing what a description says.
- **ISBD (International Standard Bibliographic Description)** — the area-and-punctuation structure that makes descriptions internationally legible.
- **MARC 21** — the communication format encoding bibliographic, authority, classification, holdings, and community information data.
- **Dublin Core (ISO 15836)** — a small cross-domain metadata element set widely used for repository and web resources.
- **Authority practice and LCSH** — authorized names and subject forms that make records about the same entity or topic collocate.
- **Access protocols**: Z39.50 for querying heterogeneous catalogues, OAI-PMH for harvesting repository metadata, and DOI-based resolvers for persistent reference.

> Standards rule: rules of description (RDA/AACR2), display structure (ISBD), communication format (MARC 21), and element set (Dublin Core) are four different things. Confusing them is the commonest error in bibliographic-control examinations.

## Worked Example

A Nigerian university's institutional repository receives a master's thesis: *Adeyemi, T.O. (2024). Digital literacy skills and academic performance of undergraduates in selected universities in South-West Nigeria.* The cataloguer builds the record:

1. **Description**: creator, title, date, type (thesis), granting institution, extent, and language — under RDA, displayed with ISBD punctuation.
2. **Identification**: a handle or DOI assigned by the repository; the item is linked to the author's name authority record.
3. **Location**: repository URL plus a local call number if a print copy is deposited.
4. **Subject access**: an assigned class number and LCSH-style headings, for example *Information literacy — Nigeria — Academic libraries* and *College students — Academic achievement — Nigeria*, plus keyword metadata drawn from the abstract.
5. **Aggregation**: the OAI-PMH record is harvested by the national theses service and by global aggregators, so the item becomes visible beyond its host institution.

Step 5 is what makes the exercise matter. Not the presence of a record, but its **conformance**. A record carrying free-text keywords only will be harvested yet poorly collocate; a record with authorized headings and consistent elements joins a usable union catalogue. This is why bibliographic control, and not mere storage, is the precondition for access.

## Implications for Digital Libraries and AI Practice

Born-digital scholarship strains the classical model: objects mutate across versions, supplements, and datasets; responsibility is distributed among consortia, preprint servers, and data archives; and volume outstrips human description. Responses include richer deposit-time metadata, identifier-centric infrastructure, and pragmatic reliance on harvested free text. The risk is a two-tier system in which well-funded publishers' content is fully controlled while repository content — including much African research output — is only lightly described and therefore under-retrieved.

AI-driven discovery adds a further complication: relevance ranking can compensate for thin description by inferring topic from text, which tempts institutions to under-invest in authority control. But inference is not identification — no ranking algorithm supplies a DOI, guarantees that two homonymous authors are different people, or makes a record citable. The durable function of bibliographic control in an AI era is precisely the parts machines cannot improvise: identifiers, authoritative names, standardized structure, and accountability for the record.

## Chapter Summary

- Bibliographic control comprises description, identification, location, and subject access; only the last delivers topical retrieval.
- Universal bibliographic control shifts responsibility to national systems producing shared, reusable records.
- Content rules, display structure, communication format, and element set are distinct layers of the standards stack.
- Conformance to standards is what allows local records to aggregate into union and global catalogues.
- AI ranking can mask thin description but cannot replace identifiers, authority control, or accountable records.`,
    keyTerms: [
      { term: "Bibliographic control", definition: "The systematic description, identification, location, and access provision for recorded information that enables users to find and obtain items." },
      { term: "Universal Bibliographic Control (UBC)", definition: "The principle that each country provides authoritative description of its own imprint in a form usable internationally, so records are created once and reused everywhere." },
      { term: "Bibliographic description", definition: "A standardized statement of an item's responsibility, title, publication, and extent, following content rules and display conventions." },
      { term: "Authority control", definition: "The process of establishing and maintaining authorized forms for persons, bodies, works, and subjects, with references from variant forms, so records about the same entity collocate." },
      { term: "Persistent identifier", definition: "A durable, resolvable name for an object — such as a DOI, handle, or ISBN — that continues to identify it across changes of location and format." },
      { term: "Metadata element set", definition: "A defined, bounded group of elements, such as the Dublin Core set, used to describe resources in a cross-domain environment." },
      { term: "Interoperability", definition: "The capacity of independent systems to exchange and use each other's records correctly, achieved through shared content rules, formats, and protocols." },
      { term: "Union catalogue", definition: "A catalogue aggregating the holdings of multiple libraries or repositories, dependent on conformance to common standards for collocation to work." },
    ],
    reviewQuestions: [
      "Define bibliographic control and name its four component functions. Which component is necessary for topical retrieval?",
      "Explain the logic of Universal Bibliographic Control and state why national responsibility, rather than centralized description, was adopted.",
      "Distinguish RDA or AACR2, ISBD, MARC 21, and Dublin Core: what does each standard govern?",
      "Describe the record you would create for a dataset deposited in a university repository, identifying the standard or rule applied at each step.",
      "Why does a record that is complete but non-conformant fail in a union catalogue? Illustrate with a specific element.",
      "Critically evaluate the claim that full-text search and relevance ranking make formal bibliographic control redundant.",
      "Assess how the under-description of African research outputs in global aggregators exemplifies a failure of universal bibliographic control, and propose remedies.",
    ],
    furtherReading: [
      "Gilliland, A.J. (2016). Introduction to Metadata. 3rd ed. Los Angeles: Getty Research Institute.",
      "Hodge, G. (2000). Metadata: Principles and Practices. San Diego: Academic Press.",
      "Svenonius, E. (2000). The Intellectual Foundation of Information Organization. Cambridge, MA: MIT Press.",
      "International Federation of Library Associations. International Standard Bibliographic Description. London: IFLA.",
      "Anglo-American Cataloguing Rules. 2nd ed., 2004 revision. Chicago: American Library Association.",
    ],
    diagramId: "ch4-bibliographic-control",
  },
  {
    number: 5,
    module: "Module 2: Vocabulary Control",
    title: "Principles of Thesaurus Construction (ANSI/NISO Z39.19)",
    objectives: [
      "Define a monolingual controlled vocabulary and state the scope of ANSI/NISO Z39.19-2005 (R2010).",
      "Analyze the staged construction workflow from purpose and scope through term selection, relationship building, display, and governance.",
      "Apply term-selection and screening criteria to build a small thesaurus for a defined domain.",
      "Critically evaluate a supplied vocabulary for structural defects, logical inconsistency, and maintenance weaknesses.",
      "Explain how ISO 25964-1 complements Z39.19 in international practice and what ISO 25964-2 adds.",
    ],
    content: `A thesaurus is not a list with decorations; it is a specification for how a community will talk about a subject. ANSI/NISO Z39.19-2005 (R2010), Guidelines for the Construction, Format, and Management of Monolingual Controlled Vocabularies, supplies the governing rules for that specification, and ISO 25964-1:2011 is its international counterpart. This chapter walks the construction workflow the standard sets out — purpose, term collection, screening, preference selection, relationship building, notes, display, testing, and continuing governance — and finishes with a worked micro-thesaurus.

[[diagram:ch5-thesaurus-steps]]

## What Z39.19 Governs

Z39.19 addresses **monolingual** vocabularies used for indexing and searching: thesauri, subject heading lists, taxonomies, and related structures. It specifies:

- the **principles** a vocabulary must embody: one concept, one preferred term; one preferred term, one concept; fidelity to the subject field; and resolution of ambiguity.
- the **relationship types** — equivalence, hierarchical, associative — and the symbols by which they are displayed.
- the **elements** required for each term record: preferred or non-preferred term, scope note, and relationship pointers.
- the **display formats** used to present the vocabulary to indexers and searchers: linear, entry, alphabetical, and graphic presentations.
- the **management** practices of evaluation, updating, and version control.

What it does not do is prescribe a subject field: scope is declared by the vocabulary's builders, and the standard's authority attaches to structure and management rather than to content. ISO 25964-1 aligns with these provisions internationally and, with ISO 25964-2, additionally addresses interoperability between a thesaurus and other vocabularies — the mechanism by which a local vocabulary can map to a national or disciplinary one.

## Establishing Scope and Collecting Terms

Construction begins before any term is written:

1. **Purpose**: which decisions will the vocabulary serve — indexing, searching, both, taxonomy browsing, translation?
2. **Scope statement**: the subject boundary, the audience, the document types covered, and the exclusions. The scope statement is the single most consequential document in the project, because every later screening decision cites it.
3. **Sources of candidate terms**: a host vocabulary or standard such as LCSH, MeSH, or AGROVOC; documents in the domain, including titles, abstracts, and full text; index terms and search logs from the target community; thesauri of neighbouring disciplines; and subject-matter informants.
4. **Screening criteria**: relevance to scope, suitability as a descriptor (noun-phrase-like, unambiguous, at the right level of specificity), currency of usage, and consistency with the chosen naming convention.

> Z39.19 rule: candidates must be tested against the scope statement before they enter the vocabulary — collection is cheap; screening is where the vocabulary is actually made.

## The Construction Workflow

The standard's activities, in the order normally executed, are:

1. Declare purpose and scope.
2. Collect and record candidate terms together with their sources.
3. Screen candidates for relevance, specificity, and ambiguity.
4. Select **preferred terms** and register **non-preferred variants** as USE entries.
5. Resolve homographs by differentiating or qualifying terms, recording a scope note wherever meaning must be fixed.
6. Establish **hierarchical relationships** (BT/NT), checking for consistent levels of hierarchy and for avoidable multiple dependence.
7. Establish **associative relationships** (RT) sparingly and symmetrically.
8. Draft scope notes for terms whose meaning is not self-evident.
9. Arrange **display formats** for human consultation and machine-readable formats for systems.
10. Test with real indexers and searchers: can users find the term they need, and do indexers apply it consistently?
11. Publish, document, and institute maintenance: who may add terms, how conflicts are resolved, how often the vocabulary is reviewed, and how versions are recorded.

Steps 10 and 11 are the ones most often skipped in student projects, and they are the ones that decide whether a vocabulary survives contact with practice.

## Worked Example: a micro-thesaurus for institutional repositories

**Purpose and scope**: index records of a university institutional repository holding theses, working papers, and conference outputs on higher education and information science; clinical medicine and law are excluded.

**Screening**: from candidates harvested — *green open access, institutional repository, digital library, repository deposit, scholarly communication, PDF, digitization, EPrints, academic publishing* — the builders reject *PDF* as a file format rather than a subject (handled by a type element), retain *digitization* only if it falls within scope, and treat *EPrints* as a non-preferred product variant under the concept of institutional repositories.

**Resulting structure (schematic)**:

- **Preferred terms**: Institutional repositories; Scholarly communication; Open access; Theses; Metadata; Digital preservation.
- **Non-preferred terms**: *Green open access* USE Open access; *EPrints* USE Institutional repositories; *Digitized theses* USE Theses.
- **Hierarchy**: Digital preservation BT Library preservation, not BT Institutional repositories — hierarchy asserts class membership, not mere relevance, and confusing the two is a structural defect.
- **Associative**: Institutional repositories RT Scholarly communication; Metadata RT Digital preservation; Open access RT Scholarly communication.
- **Scope note** for Institutional repositories: "Repositories maintained by a single institution to deposit, preserve, and disseminate its scholarly output; excludes subject and disciplinary repositories."

**Testing**: five records are indexed independently by two staff. Disagreement over *Metadata* versus *Descriptive metadata* triggers a clarifying scope note in revision 2 — evidence that the vocabulary, not the indexer, needed correction.

## Maintenance, Evaluation, and AI Practice

A vocabulary is a managed asset. Evaluation examines structural criteria (every non-preferred term has a valid USE; every relationship is reciprocal; no orphan terms; no circular pointers) and usage criteria (how often terms are applied, where searchers fail, which terms are never used). Maintenance assigns responsibility, schedules review, and records change history so that records can be re-indexed consistently when a preferred term changes.

AI alters the workload rather than the obligation: machine-suggested terms drawn from corpus statistics or language models can accelerate candidate collection (step 2), but screening (step 3), relationship assertion (steps 6 and 7), and scope-note writing (step 8) remain professional judgments made against a documented scope statement. The standard's management provisions are precisely what make automated assistance auditable.

## Chapter Summary

- Z39.19 governs structure, relationships, elements, display, and management; ISO 25964 provides the international frame and interoperability provisions.
- Purpose and scope precede and govern every later screening decision.
- Construction proceeds by collection, screening, preference selection, homograph resolution, relationship building, note writing, display, testing, and documented maintenance.
- Hierarchy asserts class membership, association asserts relevance, equivalence asserts synonymy; conflating them is the commonest structural defect.
- Testing with real indexers and searchers separates a vocabulary that exists from a vocabulary that works.`,
    keyTerms: [
      { term: "Monolingual controlled vocabulary", definition: "A managed term list for one language in which preferred terms represent concepts within a declared scope, governed by Z39.19 or ISO 25964-1." },
      { term: "Scope statement", definition: "The documented declaration of a vocabulary's purpose, subject boundary, audience, and exclusions, against which all screening decisions are tested." },
      { term: "Preferred term", definition: "The authorized descriptor chosen to represent a concept, displayed with its scope note and relationship pointers." },
      { term: "Non-preferred term", definition: "An accepted variant, synonym, or obsolete form recorded with a USE reference to the preferred term it maps to." },
      { term: "Candidate term", definition: "A term harvested from host vocabularies, domain documents, search logs, or informants and submitted to screening before admission." },
      { term: "Screening", definition: "Evaluation of candidate terms for scope relevance, specificity, ambiguity, currency, and consistency with naming conventions." },
      { term: "Display format", definition: "The presentation of vocabulary entries for human use — linear, entry, alphabetical, or graphic — as distinguished from machine-readable serialization." },
      { term: "Vocabulary maintenance", definition: "The documented process of reviewing, adding, reassigning, and retiring terms with assigned responsibility and recorded version history." },
      { term: "Interoperability", definition: "The mapping of one vocabulary to another, addressed by ISO 25964-2, so systems and users can traverse vocabularies without re-indexing." },
    ],
    reviewQuestions: [
      "State the scope of ANSI/NISO Z39.19-2005 (R2010) and identify two matters it does not prescribe.",
      "Why must a purpose-and-scope statement precede term collection? Show how it resolves a concrete screening dispute.",
      "List the construction activities in a defensible order and justify the placement of testing and maintenance.",
      "Build a micro-thesaurus of six to eight terms for a domain of your choice, including at least one non-preferred term, one hierarchy, one associative link, and one scope note.",
      "Critique this structure: \"Library education BT Education; School libraries RT Education; Universities USE Colleges.\" Identify every defect and correct it.",
      "How do Z39.19 and ISO 25964-1 differ in scope, and what does ISO 25964-2 add?",
      "Critically evaluate which steps of the workflow could responsibly be automated with language models, and which could not.",
    ],
    furtherReading: [
      "ANSI/NISO Z39.19-2005 (R2010), Guidelines for the Construction, Format, and Management of Monolingual Controlled Vocabularies. Bethesda, MD: NISO Press.",
      "ISO 25964-1:2011, Information and documentation — Thesauri and interoperability with other vocabularies — Part 1: Thesauri for information retrieval. Geneva: ISO.",
      "Aitchison, J., Gilchrist, A. and Bawden, D. (2015). Thesaurus Construction and Use: A Practical Manual. 5th ed. London: Facet Publishing.",
      "Soergel, D. (1974). Indexing Languages and Thesauri: Construction and Maintenance. New York: Marcel Dekker.",
      "Lancaster, F.W. (1986). Vocabulary Control for Information Retrieval. 2nd ed. Arlington, VA: Information Resources Press.",
    ],
    diagramId: "ch5-thesaurus-steps",
  },
  {
    number: 6,
    module: "Module 2: Vocabulary Control",
    title: "Semantic Relationships: Equivalence, Hierarchical & Associative",
    objectives: [
      "Define the three classes of semantic relationship and cite the display symbol each uses.",
      "Analyze hierarchical relationships by subtype and check them for direction, reciprocity, and consistent levels.",
      "Apply relationship-building rules to construct and validate a small segment of a thesaurus.",
      "Diagnose structural defects — broken reciprocity, circularity, association mistaken for hierarchy — in a supplied network.",
      "Critically evaluate how machine-extracted relations compare with standards-defined semantic relationships.",
    ],
    content: `If a thesaurus is a specification for how a community speaks about a subject, then its semantic relationships are the grammar of that speech. ANSI/NISO Z39.19-2005 (R2010) and ISO 25964-1:2011 both organize those relationships into three classes — equivalence, hierarchical, and associative — and the classes are not decorative taxonomy: each class does a different retrieval job. This chapter explains the classes, examines hierarchy in depth, states the validation rules, and works a small network through to its retrieval consequences.

[[diagram:ch6-semantic-relationships]]

## Three Relationship Classes

1. **Equivalence relationships** unite synonyms and variants with one preferred term. Displayed as **USE** (from non-preferred to preferred) and **UF** (the reciprocal, from preferred to non-preferred). Example: *Automobiles USE Motor vehicles*; *Motor vehicles UF Automobiles*. Retrieval job: cure synonym scatter by routing every variant to a single posting list.
2. **Hierarchical relationships** assert class membership between concepts. Displayed as **BT** (broader term) and **NT** (narrower term), reciprocally linked: if A has B as NT, then B has A as BT. Example: *Academic libraries BT Libraries*; *Libraries NT Academic libraries*. Retrieval job: permit systematic expansion (BT) and narrowing (NT) of a query.
3. **Associative relationships** join concepts that are conceptually connected but neither synonymous nor class-related. Displayed as **RT** (related term) and normally made reciprocal. Example: *Librarians RT Library education*; *Metadata RT Digital preservation*. Retrieval job: suggest lateral routes a searcher might not have thought of, without inflating a posting list through false subsumption.

A fourth element, not a relationship but essential to all of them, is the **scope note**, which fixes the meaning within which the relationships hold.

> Z39.19 rule: relationships must be asserted between concepts as they are defined by their scope notes — not between the dictionary meanings of the words that name them.

## Hierarchical Relationships in Depth

Hierarchy carries most of the retrieval weight, so Z39.19 and ISO 25964 scrutinize it closely. Three forms are recognized:

- **Generic (class-member)**: the narrower term is a kind of the broader term — *University libraries NT Academic libraries* is generic (and note the caution: university libraries are a *type* of academic library, so the NT direction must be asserted as University libraries NT Academic libraries, not the reverse).
- **Instance**: the narrower term is a particular example of a general concept — *University of Ibadan Library NT Academic libraries*.
- **Whole-part**: the narrower term is a component of the broader — *Library catalogs NT Libraries* (partitive rather than generic).

The rules that keep hierarchy usable are:

1. **Reciprocity** — every BT implies an NT and vice versa; a one-way pointer is a defect.
2. **Consistent levels** — mixing very general with very specific siblings ("Libraries" beside "Rare book libraries") under one parent forces searchers into inconsistent expansion steps.
3. **No circularity** — A BT B BT C BT A is incoherent and will break traversal.
4. **Polyhierarchy allowed but rationed** — a term may have more than one BT when the subject genuinely is interdisciplinary, but gratuitous multiple dependence multiplies postings and confuses browsing.
5. **Direction** — BT always points upward toward greater generality; novices routinely invert this.

## Building and Validating a Network

Construction proceeds concept by concept:

1. Fix the concept's meaning with a scope note.
2. Choose the preferred term; record variants as USE/UF.
3. Ask the **genus question**: what kind of thing is this? The answer supplies the BT.
4. Ask the **differentia question**: what kinds are there under it? The answers supply NTs.
5. Ask the **relation question**: what else does a specialist in this concept routinely consult? The answers supply RTs, kept few and defensible.
6. Validate: reciprocity, no circularity, consistent levels, no orphan terms, no duplicate concepts under different preferred forms.

Validation is mechanical enough to script, which is why structural checking is the part most readily automated — while the substantive judgment of whether *Metadata* really is related to *Digital preservation* is not.

## Worked Example

Domain: digital libraries. Concepts: *Digital libraries*, *Institutional repositories*, *Metadata*, *Digital preservation*, *Information literacy*.

- *Institutional repositories* **BT** *Digital libraries*? Only if the scope note defines digital libraries broadly enough to subsume repositories; otherwise the correct assertion is **RT**. Choosing BT means every search for digital libraries silently absorbs repository records — increased recall, decreased precision. Choosing RT keeps them separate and lets the searcher cross deliberately. The decision is an indexing-policy decision and should be recorded in the scope note.
- *Metadata* **RT** *Digital preservation*; *Metadata* **BT** *Documentation*? — decide within scope; assert one and delete the other to avoid redundancy.
- *Information literacy* **RT** *Digital libraries* — justified because users' skills condition system use, but it is not class membership.

**Retrieval consequence**: a searcher who broadens from *Institutional repositories* upward by BT reaches only genuine superordinate concepts; a system that had misasserted an RT as BT would instead drag in lateral neighbours and dilute precision. Conversely, a missed RT hides a useful route and contributes silence.

## Implications for Digital Libraries and AI Practice

Knowledge graphs and embeddings infer relationships from distributional co-occurrence or from curated triples; neither guarantees the standards' semantics. A graph edge labelled "relatedTo" recovered from text may encode frequency rather than conceptual relation, and an inferred is-a edge may be wrong in exactly the whole-part or instance/generic direction that Z39.19 distinguishes. The professional's role in AI-era vocabulary work is therefore sharper than before: assert relationships deliberately, keep them reciprocal and scoped, and treat machine-proposed links as candidates requiring the same validation as any human contribution. In repositories across African universities, where small teams maintain local vocabularies, disciplined application of these rules is what allows a local list to map cleanly to LCSH or AGROVOC.

## Chapter Summary

- Equivalence routes synonyms to one entry; hierarchy supports expansion and narrowing; association suggests lateral routes.
- Hierarchy subtypes — generic, instance, whole-part — must not be confused, and BT always points upward.
- Reciprocity, consistent levels, no circularity, and rationed polyhierarchy are the validation rules for hierarchy.
- The choice between BT and RT is an indexing-policy decision with direct precision and recall consequences.
- Machine-inferred relations are candidates for validation, not substitutes for standards-defined relationships.`,
    keyTerms: [
      { term: "Equivalence relationship", definition: "The link between a preferred term and its accepted synonyms and variants, displayed as USE from non-preferred to preferred and UF in the reciprocal direction." },
      { term: "Hierarchical relationship", definition: "The class-membership link between broader and narrower concepts, displayed as BT and NT and required to be reciprocal." },
      { term: "Associative relationship", definition: "The link between related concepts that are neither synonymous nor class-related, displayed as RT and normally reciprocal." },
      { term: "Generic relationship", definition: "A hierarchical relation in which the narrower term is a kind of the broader term, as university libraries are a kind of academic library." },
      { term: "Whole-part (partitive) relationship", definition: "A hierarchical relation in which the narrower term is a component of the broader, distinct from generic class membership." },
      { term: "Polyhierarchy", definition: "The structure in which a concept has more than one broader term, permitted for interdisciplinary subjects but rationed to avoid posting inflation and browsing confusion." },
      { term: "Reciprocity", definition: "The rule that every asserted relationship has its inverse asserted: USE implies UF, BT implies NT, RT implies RT." },
      { term: "Scope note", definition: "A note fixing the meaning of a term within which its relationship pointers are valid." },
    ],
    reviewQuestions: [
      "Name the three relationship classes, give the display symbol for each, and state the retrieval function each performs.",
      "Distinguish generic, instance, and whole-part hierarchy with one example of each drawn from your own discipline.",
      "Audit the following: \"Libraries NT Academic libraries; Academic libraries RT University libraries; Metadata UF Cataloging.\" Identify every defect and repair it.",
      "Explain why reciprocity and consistent levels of hierarchy matter to a searcher who broadens a query with BT.",
      "For the concept *Institutional repositories*, decide whether BT Digital libraries or RT Digital libraries is correct under a stated scope, and defend the precision and recall consequences of your choice.",
      "Critically evaluate whether relationships extracted automatically from text satisfy the requirements of Z39.19.",
      "Design a five-point validation checklist for a thesaurus segment you are about to publish.",
    ],
    furtherReading: [
      "ANSI/NISO Z39.19-2005 (R2010), Guidelines for the Construction, Format, and Management of Monolingual Controlled Vocabularies. Bethesda, MD: NISO Press.",
      "ISO 25964-1:2011, Information and documentation — Thesauri and interoperability with other vocabularies — Part 1: Thesauri for information retrieval. Geneva: ISO.",
      "Lancaster, F.W. (1986). Vocabulary Control for Information Retrieval. 2nd ed. Arlington, VA: Information Resources Press.",
      "Aitchison, J., Gilchrist, A. and Bawden, D. (2015). Thesaurus Construction and Use: A Practical Manual. 5th ed. London: Facet Publishing.",
    ],
    diagramId: "ch6-semantic-relationships",
  },
  {
    number: 7,
    module: "Module 2: Vocabulary Control",
    title: "Homographs, Polysemy and Scope Notes",
    objectives: [
      "Define homograph, polysemy, ambiguity, and the range of disambiguation devices available to a vocabulary.",
      "Analyze a term for competing senses and decide whether differentiation, qualification, or a scope note is required.",
      "Apply scope-note conventions to fix meaning, mark usage boundaries, and instruct indexers on application.",
      "Evaluate inter-indexer consistency as evidence of whether ambiguity has been adequately resolved.",
      "Critically assess how automated disambiguation (word-sense and embedding methods) falls short of standards-based practice.",
    ],
    content: `Vocabulary control succeeds only where meaning is fixed. A thesaurus may have impeccable hierarchies and complete synonym coverage, yet fail if two senses of a term share one preferred form and one posting list. This chapter treats the sources of ambiguity — homography, polysemy, granularity, and context collapse — and the profession's principal instrument for curing them: the **scope note**, together with the term-differentiation devices that Z39.19 requires where notes alone are insufficient.

[[diagram:ch7-scope-notes]]

## Sources of Ambiguity

- **Homography**: one spelling denotes two or more unrelated concepts. *Bank* (financial institution) and *bank* (riverside) are the textbook case; *cells* (biology) and *cells* (computing), or *Java* (island) and *Java* (programming language), are equally decisive for an indexer.
- **Polysemy**: one word carries several related senses. *Collection* may denote an assemblage of objects, a gathering of money, or a grouped set of records. Related senses still produce mixed postings if the field treats them as one concept.
- **Metaphor and transferred use**: terms migrate across domains — *virus*, *cloud*, *host* — creating cross-disciplinary noise.
- **Granularity collapse**: one term is used at two levels of specificity (*migration* for animal movement and for human movement) so that a single heading silently spans unrelated literatures.
- **Underspecification**: a term too broad to distinguish the intended concept from its neighbours (*community development* versus *rural development* in a corpus where both occur).
- **Initialism and acronym collision**: the same abbreviation expanding differently across fields.

Ambiguity is not merely a nuisance; it is a direct source of both failure modes. A shared posting list for two senses yields **noise** for every query aimed at either; an over-cautious split that searchers never discover yields **silence**.

## Scope Notes: Form and Function

A **scope note** is a definition or instructional note attached to a preferred term that fixes the intended meaning and states the boundaries of correct application. Under Z39.19 the note may take several forms, and the indexer should choose deliberately:

1. **Definition note** — states what the concept is: *"Open access: scholarly literature made freely available to readers at the point of use, without subscription."*
2. **Inclusion (usage) note** — states what to include: *"Academic libraries: libraries of universities, polytechnics, and colleges of education."*
3. **Exclusion note** — states what not to include, often with a pointer: *"Community libraries — excludes school libraries; see School libraries."*
4. **Historical or currency note** — marks a preferred term retained for continuity while the underlying practice has changed.
5. **Application note** — instructs the indexer on practice: *"Index here only where the document treats the practice as a subject, not where the practice is merely a method used."*

Good scope notes are short, assertive, and testable — an indexer should be able to answer yes or no to the question the note poses. Notes that merely restate the term (*"Journals: publications issued at intervals"*) add no control value.

> Z39.19 rule: where a term is ambiguous, the vocabulary must either differentiate the concepts by different terms, qualify the terms, or supply a scope note; leaving the ambiguity unmarked while the term remains a preferred descriptor is a defect.

## Disambiguation Strategies

The standard devices, escalating in strength:

1. **Scope note alone** — sufficient where the field is narrow and trained indexers are the audience.
2. **Qualified or compound term** — *"Banking (Finance)"*, *"Bank (River)"*, or natural compounds such as *River banks* and *Banks (Financial institutions)*.
3. **Different terms for different concepts** — choosing two distinct preferred terms so that no homographic collision exists at all.
4. **Separate entries under one head with different scope notes** — permitted where display conventions make the split visible.
5. **Cross-references** — see and see also links that route users from the ambiguous form to the sense they need.
6. **Hierarchical placement** — the surrounding BT context that implicitly disambiguates for browsing users.

The choice among them depends on audience, display, and the cost of re-indexing: a change of preferred term requires record revision, whereas adding a scope note does not.

## Worked Example

A university library indexes a mixed corpus containing computer science, biology, and finance materials. Term audit:

- **Cells**: three senses. Adopt separate preferred terms — *Cell (Biology)* with note "the basic structural unit of living organisms", *Cell (Computing)* with note "a unit of a spreadsheet or cellular network as applicable", and route *Battery cells* elsewhere if in scope. Retaining a single unqualified *Cells* would merge biology and computing postings.
- **Java**: split as *Java (Programming language)* and *Java (Coffee)*; if the collection does not cover coffee, the scope note alone suffices: "Programming language; excludes the island and the beverage."
- **Migration**: qualify as *Migration (Population)* and *Migration (Animals)*, each with an inclusion note, because both are live in the collection.
- **Open access**: no homograph, but polysemy across *gold, green, hybrid* variants — here a definition note plus RT links to *Scholarly communication* resolves the ambiguity of application rather than of spelling.

After revision, two indexers re-assign terms to five test records; a rise in agreement is the empirical evidence that the notes and qualifications did their work.

## Consistency, Evaluation, and AI Practice

Inter-indexer consistency is the standard diagnostic for ambiguity: low agreement on a specific term almost always signals an unresolved sense boundary rather than careless indexers. Evaluation therefore pairs structural checks (does every ambiguous preferred term carry a note or qualification?) with usage analysis (where do disagreements cluster?).

Automated disambiguation — word-sense disambiguation, contextual embeddings, and named-entity linking — performs impressively in well-resourced corpora but fails quietly in exactly the cases librarians care about: low-resource languages, local institutional names, and interdisciplinary texts where the same string means different things in adjacent paragraphs. A language model's confidence is not a scope note; it cannot be cited in a dispute, it changes with version, and it offers no audit trail. The standards-based practice — differentiate, qualify, note, test — remains the accountable method, and the automated output should be routed through it.

## Chapter Summary

- Ambiguity arises from homography, polysemy, metaphor, granularity collapse, underspecification, and acronym collision.
- Scope notes define, include, exclude, mark currency, and instruct application; a note that restates the term adds no control.
- Escalating remedies: note, qualification, term differentiation, split entries, references, and hierarchical context.
- Term changes require re-indexing; note additions do not — a practical consideration in choosing a remedy.
- Consistency data diagnose ambiguity; machine disambiguation must be validated against the same notes and rules.`,
    keyTerms: [
      { term: "Homograph", definition: "A word form identical in spelling to another but denoting an unrelated concept, requiring differentiation, qualification, or a scope note." },
      { term: "Polysemy", definition: "The existence of several related senses of a single word, which can merge unrelated literatures if left uncontrolled." },
      { term: "Scope note", definition: "A note attached to a preferred term that fixes its intended meaning and the boundaries of its correct application in indexing." },
      { term: "Inclusion note", definition: "A scope note stating what the concept covers, guiding indexers toward the intended extension of the term." },
      { term: "Exclusion note", definition: "A scope note stating what the concept does not cover, usually with a pointer to the correct term for excluded material." },
      { term: "Qualification", definition: "The addition of a distinguishing word or parenthetical addition to a term so that homographic senses occupy separate preferred entries." },
      { term: "Term differentiation", definition: "The choice of two distinct preferred terms for two senses of one word, eliminating homographic collision entirely." },
      { term: "Ambiguity", definition: "The condition in which one term form supports more than one interpretation, producing noise when senses share a posting list." },
      { term: "Inter-indexer consistency", definition: "Agreement among indexers in assigning terms, used diagnostically to reveal unresolved sense boundaries." },
    ],
    reviewQuestions: [
      "Distinguish homography from polysemy and give two original examples of each relevant to an African scholarly corpus.",
      "List the five kinds of scope note described in the chapter and give an example of each.",
      "Why is a note that merely restates the term useless? Rewrite the note \"Journals: publications issued at intervals\" so that it controls application.",
      "An indexer reports disagreement on the term *Migration* in eight of ten records. Diagnose the cause and prescribe a remedy using the escalation sequence.",
      "Assign disambiguating preferred terms to: cells, cloud, host, and community development, for a collection spanning biology, computing, and sociology.",
      "Critically evaluate whether a large language model can replace scope notes in production indexing. State two risks and one safeguard.",
      "Design a consistency test for a two-indexer team and state what result would trigger a vocabulary revision rather than staff retraining.",
    ],
    furtherReading: [
      "ANSI/NISO Z39.19-2005 (R2010), Guidelines for the Construction, Format, and Management of Monolingual Controlled Vocabularies. Bethesda, MD: NISO Press.",
      "ISO 25964-1:2011, Information and documentation — Thesauri and interoperability with other vocabularies — Part 1: Thesauri for information retrieval. Geneva: ISO.",
      "Foskett, A.C. (1982). The Subject Approach to Information. 4th ed. London: Clive Bingley.",
      "Lancaster, F.W. (1986). Vocabulary Control for Information Retrieval. 2nd ed. Arlington, VA: Information Resources Press.",
    ],
    diagramId: "ch7-scope-notes",
  },
  {
    number: 8,
    module: "Module 2: Vocabulary Control",
    title: "Facet Analysis and Polyhierarchical Structures",
    objectives: [
      "Define facet analysis and identify the fundamental categories of Ranganathan's PMEST scheme.",
      "Analyze a complex subject into homogeneous facets and state the rules governing their sequence and synthesis.",
      "Apply faceted principles to build a colon-style or faceted heading for an interdisciplinary topic.",
      "Evaluate polyhierarchy as a structural response to interdisciplinarity, including its costs.",
      "Critically assess the influence of faceted thinking on modern taxonomy navigation and AI knowledge organization.",
    ],
    content: `Facet analysis is the discipline of cutting a subject into its homogeneous fundamental categories before any term is chosen, and it is the intellectual foundation of nearly everything students later meet as faceted navigation, filter search, or faceted classification. Ranganathan's analytico-synthetic method treats classification as analysis followed by synthesis: dissect the subject, then reassemble only the components that actually apply. This chapter sets out the facet theory, the analytic-synthetic procedure, the polyhierarchical structures that modern vocabularies adopt, and a worked example — then asks what the method still does for digital libraries.

[[diagram:ch8-facet-analysis]]

## Ranganathan's Facet Theory

Ranganathan held that every subject can be resolved into a small number of **fundamental categories** that are internally homogeneous and mutually heterogeneous. His canonical scheme, **PMEST**, names them:

- **Personality** — the thing, entity, or agent the subject is about (*farmers*, *students*, *cassava*).
- **Matter** — the substance or material of which the thing is composed (*soil*, *steel*, *paper*).
- **Energy** — the action, operation, process, or agency applied (*irrigation*, *legislation*, *cataloging*, *education*).
- **Space** — the place dimension (*Nigeria*, *West Africa*, *Enugu*).
- **Time** — the period dimension (*2000-2020*, *colonial period*, *Holocene*).

The categories are the same in every subject; only their relative importance and their specific isolates change from field to field. The **facet definition schedule** of a classification declares, for a given main class, which categories are available and what isolates belong to each — which is why two disciplines can share a method while exhibiting entirely different vocabulary.

Five guiding ideas frame the method: every subject has a common form; categories are homogeneous; a schedule states the categories in a fixed helpful sequence; an entry is built only from facets actually present in the subject; and both classification and indexing should express the same analysis.

## The Analytico-Synthetic Method

The procedure has two halves:

**Analysis** (Ranganathan's rules for isolating a topic):

1. Identify the **main class** — the broad disciplinary home of the subject.
2. Identify the **facet(s)** that must be formed — isolate the Personality, and any Matter, Energy, Space, and Time that the subject genuinely carries.
3. Reject **facets that are absent**; a subject that is purely spatial must not acquire a Time element for tidiness.
4. Distinguish the subject from its **aspects** (a subject treated from the economic, historical, or educational point of view is a different isolate from the subject itself).

**Synthesis** (building the composite):

5. Order the facets according to the schedule's array sequence — traditionally Personality first, then Matter, Energy, Space, and Time, with Energy following Matter where both appear.
6. Apply **invocation** and **canon** rules where the schedule requires a shift of order (the famous case: in library science, cataloging as an Energy is invoked before the Personality it acts upon).
7. Apply **fusion and fission** where two facets combine into one term or one term splits into two.
8. Express the result — a class number in a notational scheme, or a faceted heading built from pre-coordinated components.

The point of the method is economy and precision: because the components are homogeneous, each can be independently specified, and no part of the heading carries meaning borrowed from another.

## Worked Example

Subject: *Prevention of malaria in pregnant women in northern Nigeria, 2000-2020.*

Step 1 — main class: medicine (public health aspects are visible in the treatment). Step 2 — facets: Personality = Malaria; Energy = Prevention (or control); Personality variant = Pregnant women as the affected group; Space = Nigeria, northern region; Time = 2000-2020. Step 3 — Matter absent: no material substance is under study. Step 4 — aspects: the subject is public-health practice, not economics or history of the disease.

Synthesis: the analyst orders the facets as the schedule directs — typically the affected group and disease as the conceptual core, the preventive action as Energy, then Space, then Time — yielding a composite expression of the form "Malaria — Prevention — Pregnant women — Nigeria (Northern) — 2000-2020," which a classifier would then map to notation. Every element is homogeneous and independently verifiable: a reviewer can delete Time and see that the rest stands, delete Matter and notice nothing was lost.

The same analysis drives the thesaurus form: *Malaria prevention RT Pregnant women*; *Malaria BT Communicable diseases*; *Pregnant women BT Women* — facet thinking survives the translation from class number to descriptor string.

## Polyhierarchy: Structure for Interdisciplinarity

Real subjects refuse to live in one place. **Polyhierarchy** allows a narrower term to have more than one broader term:

- *Medical informatics* NT under both *Medicine* and *Computer science*.
- *Environmental economics* NT under both *Environmental science* and *Economics*.
- *Digital libraries* NT under both *Libraries* and *Information systems*.

Benefits are honesty and recall: users approaching from either parent reach the concept, and no literature is hidden by a forced single placement. Costs are navigational and quantitative: the concept appears in multiple hierarchies, so browsing counts and expanded-posting totals differ by path, and maintenance must keep every parent's pointers consistent. Z39.19 and ISO 25964 permit multiple dependence but require each relationship to be individually justified — polyhierarchy by evidence, not by enthusiasm.

## Implications for Digital Libraries and AI Practice

Facet theory is the ancestor of contemporary interface design: the left-hand filters of a discovery layer (format, date, subject, geography, language) are facet values, and the ability to combine them dynamically is post-coordinate retrieval realized as UI. Ranganathan's categories still appear implicitly in metadata schemas (Space and Time as place and date; Energy as type or activity), and the discipline of asking "which facet does this term belong to?" remains the fastest way to diagnose a bloated vocabulary.

For AI systems, faceting offers a check on learned representations: an embedding may cluster *Malaria* with *fever* and *Nigeria* with *Lagos* in one space, whereas facet analysis insists that disease, affected group, action, place, and period be separately addressable so that a query can constrain each independently. In African university cataloguing practice, where collections frequently combine local place names, vernacular terms, and imported subject schemes, explicit faceting is what allows a local record to remain both specific and aggregatable.

## Chapter Summary

- PMEST — Personality, Matter, Energy, Space, Time — supplies the fundamental categories for dissecting any subject.
- Analysis isolates facets and rejects absent ones; synthesis orders and combines only what applies, following the schedule's array and canon rules.
- Facet thinking transfers from class numbers to thesaurus components and to interface filters.
- Polyhierarchy expresses interdisciplinarity honestly, at the cost of multiple maintenance obligations.
- Modern retrieval depends on facet discipline even when the vocabulary itself is learned from data.`,
    keyTerms: [
      { term: "Facet analysis", definition: "The method of dissecting a complex subject into homogeneous fundamental categories before terms or notations are assigned." },
      { term: "Fundamental category", definition: "An internally homogeneous, mutually heterogeneous class such as Personality, Matter, Energy, Space, or Time." },
      { term: "PMEST", definition: "Ranganathan's canonical set of fundamental categories: Personality, Matter, Energy, Space, and Time." },
      { term: "Analytico-synthetic method", definition: "The two-part procedure of analysing a subject into facets and then synthesizing only the applicable facets into a class number or heading." },
      { term: "Isolate", definition: "A single, homogeneous component of a subject — such as a particular action, place, or period — available for combination with other isolates." },
      { term: "Facet sequence", definition: "The declared order in which fundamental categories are arrayed when a composite entry is built, sometimes modified by invocation rules." },
      { term: "Invocation", definition: "The canon by which a facet normally later in sequence is moved earlier when a specific subject relationship requires it." },
      { term: "Polyhierarchy", definition: "A structure permitting a concept to have more than one broader term, representing interdisciplinary placement." },
      { term: "Post-coordinate retrieval", definition: "The combination of separately stored facets or descriptors at search time, realized in interfaces as dynamic filter combination." },
    ],
    reviewQuestions: [
      "List the PMEST categories with a one-line definition and give two isolates belonging to each.",
      "Dissect the subject \"Effects of fertilizer subsidy policy on smallholder maize output in Kenya since 2010\" into facets, stating explicitly which facets are absent.",
      "Reorder the facets in question 2 according to a stated facet sequence and justify each position, including any invocation you invoke.",
      "What is the difference between a subject and an aspect of a subject? Show the distinction using library and information science as an example.",
      "Compare polyhierarchy with a single strict hierarchy: state two advantages and two costs, and identify the standards' position on multiple dependence.",
      "Critically evaluate whether facet theory remains necessary for AI-based retrieval systems that use dense embeddings.",
      "Design a faceted filter set for a university digital repository and justify which fundamental category each filter corresponds to.",
    ],
    furtherReading: [
      "Ranganathan, S.R. (1962). Elements of Library Classification. 4th ed. London: Asia Publishing House.",
      "Ranganathan, S.R. (1967). The Five Laws of Library Science. 2nd ed. Madras: Madras Library Association.",
      "Vickery, B.C. (1960). Faceted Classification: A Guide to the Construction and Use of Special Schemes. London: ASLIB.",
      "Broughton, V. (2015). Essential Library of Congress Subject Headings. London: Facet Publishing.",
      "ANSI/NISO Z39.19-2005 (R2010), Guidelines for the Construction, Format, and Management of Monolingual Controlled Vocabularies. Bethesda, MD: NISO Press.",
    ],
    diagramId: "ch8-facet-analysis",
  },
  {
    number: 9,
    module: "Module 3: Systems & Syntax",
    title: "Pre-coordinate vs. Post-coordinate Indexing Systems",
    objectives: [
      "Define coordination and distinguish pre-coordinate from post-coordinate systems by the moment at which terms are combined.",
      "Analyze the structural properties of each system: entry formation, syntax, file organization, and browsing support.",
      "Compare the two systems on precision, recall, flexibility, cost, and user skill requirements.",
      "Apply Boolean and faceted query syntax to a research question and diagnose why it fails or succeeds.",
      "Critically evaluate modern hybrid systems, including vector retrieval, as forms of implicit coordination.",
    ],
    content: `Coordination is the act of combining concepts into a compound statement of subject; the great divide in indexing systems is *when* that act occurs. Pre-coordinate systems combine at indexing time and store the compound; post-coordinate systems store atomic units and leave combination to search time. The choice determines entry length, syntax, file structure, browsing support, and how much intellectual work the user must do. This chapter develops the contrast, works the same request through both systems, and shows why the present moment is hybrid rather than post-coordinate pure.

[[diagram:ch9-pre-post-coordinate]]

## Coordination Defined

A document's subject is almost never a single concept: it is a conjunction — *malaria*, *pregnancy*, *prevention*, *Nigeria*, *2000-2020*. **Coordination** is the joining of such concepts to express a specific subject. The two classical options:

- **Pre-coordinate**: the indexer combines concepts into one stored heading at indexing time. The system therefore records the *combination* and its **citation order** — the fixed sequence in which facets appear.
- **Post-coordinate**: the indexer records each concept as a separate, atomic descriptor in the document's term set; the searcher (or the algorithm) combines them at query time.

## Pre-coordinate Systems

Pre-coordinate systems characterize much of printed subject-heading practice. Their properties:

- **Stored compounds**: headings such as *Cattle — Feeding — Economic aspects* or *Libraries — Developing countries — Automation* carry full contextual meaning in a single string.
- **Citation order**: the sequence of components is fixed by rule, so that logically equivalent subjects collocate. Different orders are not merely cosmetic — *Dairy cattle — Feeding* and *Feeding — Dairy cattle* would scatter the same literature.
- **Browsing value**: a public catalogue or printed index can lead a user down a hierarchy of compounds, since the entry itself shows the structure.
- **Inherent precision**: an entry states exactly the conjunction the indexer saw, so a searcher arriving at the heading knows what is behind it.

Their costs follow from the same design:

- **Inflexibility**: the searcher must anticipate the indexer's wording and order. A query for the conjunction in any other sequence must be redirected by references.
- **Reference overhead**: every alternative phrasing requires a see reference, and the reference structure grows combinatorially with vocabulary size.
- **Heading proliferation**: highly specific compounds multiply entries and lengthen files, and a change in one component requires re-indexing the entry.
- **Closed to dynamic combination**: the printed compound cannot be intersected at will; users must browse rather than compute.

LCSH remains a pre-coordinate system: a 650 entry may carry topical, geographic, form, and chronological subdivisions, and the **citation order** of those subdivisions is governed by the Library of Congress's instructions.

## Post-coordinate Systems

Post-coordinate systems store atomic descriptors in an **inverted file**: for each descriptor, a posting list of document identifiers. Retrieval combines lists at query time.

- **Taube's coordinate indexing** and the uniterm approach established the principle: record units, combine later.
- **Combination syntax**: Boolean AND, OR, NOT; truncation and stemming; proximity and phrase operators; term weighting; and, in faceted interfaces, selection of values from independent facet menus.
- **Advantages**: enormous query flexibility; no need to anticipate the indexer's phrasing; economical indexing (fewer terms per record, no reference maintenance for compounds); natural scalability to large files; and support for iterative query reformulation.
- **Limitations**: the system stores **what** terms a document carries but not **how they relate**. A query for *libraries AND automation* also matches a document about the automation of library budgets and about libraries that lack automation. Boolean conjunction expresses co-presence, not semantic roles. This is the classical **syntactic limitation** of post-coordinate retrieval.

The historical response was a battery of syntactic devices — weighting, proximity operators, phrase restriction, ordered-search modes, and structured post-coordinate notations — each restoring a measure of the context that pre-coordination carried for free.

## Worked Example

Request: *"recent research on the use of digital libraries by medical students in West Africa."*

**Pre-coordinate handling.** The indexer has filed the relevant documents under headings such as *Digital libraries — Africa, West*; *Medical students — Information services*; *Medical libraries — Nigeria*. The searcher must guess the heading wording and order, or be led by see references from *e-libraries* and *African medical students*. Precision at the entry is high, but relevant documents filed under *Medical education — Nigeria* are missed unless references were installed.

**Post-coordinate handling.** The searcher issues: (*digital librar*) AND (medical student*) AND (Africa*, West). Truncation recovers morphological variants; geographic subdivision is expressed by free text. Documents about digital libraries and about medical students in unrelated regions are excluded by AND; but documents about *health sciences students* are lost unless synonyms are added (recall failure through vocabulary gap), and documents are retrieved that merely mention both concepts in passing (precision failure through mention).

**Hybrid handling.** The discovery layer blends controlled subject fields, full text, and citation metadata, ranks by weighted evidence, and offers facet filters for date, document type, and geography — the searcher reads the ranking, not the syntax.

Neither pure design satisfies every requirement; the design decision is really about who bears the burden of combination — the indexer (pre-coordinate) or the searcher (post-coordinate).

## The Hybrid Present and AI Practice

Contemporary systems are structurally post-coordinate but rhetorically pre-coordinate: they store atomic terms and facets, yet present pre-coordinated-looking headings and let users browse by decomposition. Key observations for practice:

1. **Faceted search is post-coordinate retrieval with an interface that exposes the facets.** Choosing *Subject = Digital libraries*, *Region = West Africa*, *Date = 2015-2026* is Boolean coordination performed through selection rather than typing.
2. **Controlled and free-text fields coexist** in MARC and repository records, so ranking must arbitrate between them.
3. **Vector and neural retrieval performs a kind of continuous, implicit coordination**: query and document are mapped into a space where proximity approximates semantic conjunction, mitigating the syntactic limitation because role information is partially captured by context. It does not eliminate it — a dense retriever can still retrieve a document that discusses two concepts without relating them, and it cannot show the user which terms were coordinated.
4. **Explainability matters**: pre-coordinate headings were auditable strings; ranking functions are not. Standards-based subject fields survive precisely because they are checkable.

> Exam tip: pre-coordinate systems coordinate at indexing time and depend on citation order; post-coordinate systems coordinate at search time and depend on query syntax. Nearly every subsequent topic in this course is a variant of that sentence.

## Chapter Summary

- Coordination is the joining of concepts; the systems differ on whether combination occurs at indexing or at search time.
- Pre-coordinate systems deliver context, browsing, and precision at the cost of rigidity, reference overhead, and heading proliferation.
- Post-coordinate systems deliver flexibility, economy, and scale at the cost of syntactic limitation — co-presence without semantic roles.
- Citation order is the pre-coordinate answer to equivalence of combinations; query syntax is the post-coordinate answer.
- Modern discovery layers and vector retrievers are hybrids: atomic storage with pre-coordinate-like presentation and implicit coordination.`,
    keyTerms: [
      { term: "Coordination", definition: "The combination of two or more concepts to express a specific compound subject in an index entry or a query." },
      { term: "Pre-coordinate system", definition: "An indexing system in which concepts are combined into compound headings at indexing time and stored in that combined form." },
      { term: "Post-coordinate system", definition: "An indexing system in which atomic descriptors are stored separately and combined only at search time by query syntax or interface selection." },
      { term: "Citation order", definition: "The rule-governed sequence in which components of a compound subject are arranged, ensuring that logically equivalent subjects collocate." },
      { term: "Inverted file", definition: "A file structure listing, for each descriptor, the identifiers of documents carrying it, enabling Boolean combination of posting lists." },
      { term: "Syntactic limitation", definition: "The inability of unstructured post-coordinate systems to express how terms relate, so Boolean co-presence is mistaken for semantic connection." },
      { term: "Boolean coordination", definition: "The combination of posting lists through AND, OR, and NOT to express conjunctive, disjunctive, and exclusive retrieval." },
      { term: "Faceted search", definition: "Post-coordinate retrieval presented as the independent selection and combination of values from declared facets." },
      { term: "Reference overhead", definition: "The maintenance burden of see and see also references required in pre-coordinate systems to redirect alternative query formulations." },
    ],
    reviewQuestions: [
      "Define coordination and state precisely the moment at which combination occurs in each system type.",
      "Explain the role of citation order in pre-coordinate systems and show what happens to recall when it is not applied consistently.",
      "List three syntactic devices that compensate for the limitations of post-coordinate retrieval and explain how each helps.",
      "Run the query \"mobile banking AND financial inclusion AND Nigeria\" through both systems: identify one precision failure and one recall failure, and state which system type each arises from.",
      "Critically evaluate the statement that faceted navigation in a discovery layer is post-coordinate retrieval in disguise.",
      "Taube argued for recording units and leaving combination to the searcher. Identify the conditions under which his argument holds, and where it breaks down.",
      "Does vector retrieval solve the syntactic limitation of post-coordinate systems? Defend your answer with reference to explainability and to mention-driven documents.",
    ],
    furtherReading: [
      "Taube, M. (1953). Studies in Coordinate Indexing. New York: Documentation, Inc.",
      "Lancaster, F.W. (1998). Indexing and Abstracting in Theory and Practice. 2nd ed. Urbana-Champaign: University of Illinois Graduate School of Library and Information Science.",
      "Foskett, A.C. (1982). The Subject Approach to Information. 4th ed. London: Clive Bingley.",
      "Salton, G. (1968). Automatic Information Organization and Retrieval. New York: McGraw-Hill.",
      "Manning, C.D., Raghavan, P. and Schütze, H. (2008). Introduction to Information Retrieval. Cambridge: Cambridge University Press.",
    ],
    diagramId: "ch9-pre-post-coordinate",
  },
  {
    number: 10,
    module: "Module 3: Systems & Syntax",
    title: "Ranganathan Chain Indexing and Derived Subject Headings",
    objectives: [
      "State the rationale for chain indexing and its role in reconciling classified files with alphabetical access.",
      "Analyze a class number into its constituent terms and execute the chain procedure step by step from right to left.",
      "Derive alphabetical entries from a given hierarchical path and check them for completeness and stopping decisions.",
      "Critically evaluate the strengths and documented criticisms of chain indexing as a derivation method.",
      "Explain the method's relevance to authority files, derived headings, and machine-assisted subject access today.",
    ],
    content: `Chain indexing is Ranganathan's method for converting a classified file into an alphabetical one: it takes a class number, decomposes it into the terms the schedule expresses, and generates an index entry at each step so that the hierarchy is reproduced in the alphabetical catalogue. It is the classic example of **derived subject headings** — alphabetical entries produced mechanically from a classification analysis rather than chosen independently — and it remains the best teaching device for understanding how class numbers, citation order, and alphabetical access relate.

[[diagram:ch10-chain-indexing]]

## Ranganathan's Rationale

Libraries traditionally maintained two access structures: a classified shelf or catalogue organized by subject relations, and an alphabetical catalogue organized by author and title. Users think alphabetically — *cattle*, not *animal husbandry* — while subjects relate hierarchically. Ranganathan's answer was to derive the alphabetical structure from the classified one, so that:

- the two files could not drift apart in subject treatment;
- every hierarchical link visible in the classification would also be reachable alphabetically;
- the expensive intellectual work of classification would be done once and reused;
- alphabetical users would be led into the hierarchy rather than left stranded at a single term.

The method presupposes that the classification itself is sound: chain indexing reproduces the schedule's structure, including its errors, and introduces none of its own.

## The Chain Procedure

The procedure, stated step by step:

1. **Obtain the class number** for the document from the classification analysis.
2. **Read the chain of terms** that the number expresses, from the schedule, in order from the most general to the most specific: the number's successive segments correspond to successive terms.
3. **Reverse direction**: work from the **right-most (most specific) term to the left**, because the specific term is the entry point a user is most likely to look up.
4. **Make an entry at each step**: record the term, its class number, and its link to the next step of the chain, so that the chain can be reconstructed from any point.
5. **Continue to the root** of the class, the broadest term in the path.
6. **Apply stopping rules**: where the schedule carries a common isolate, a free-floating subdivision, or a facet element that would produce an entry with no independent retrieval value, the chain is cut at that point.
7. **File and cross-reference**: entries are integrated with the alphabetical file, with references from variant and non-preferred forms.

Each step converts one link of the hierarchy into one alphabetical entry; the set of entries for a document therefore constitutes a miniature subject outline available alphabetically.

## Strengths and Criticisms

**Strengths:**

- **Systematic derivation**: entries are reproducible from the class number, which makes inter-indexer variation smaller than in free choice of headings.
- **Structural fidelity**: the alphabetical file mirrors the classification, preserving broader and narrower relations.
- **Economy**: the classification decision is reused rather than repeated.
- **Teachability**: it exposes the whole chain of general-to-specific reasoning in a way that authority-file consultation does not.

**Criticisms and limits, as recorded in the standard histories of the method (including Foskett's survey of subject approaches):**

- **Mechanical outcome**: entries follow the schedule rather than the language searchers actually use, producing formal headings that may not match common usage.
- **Volume**: every step generates an entry, so a highly specific number yields many entries, and files grow long.
- **Dependence on classification quality**: a misanalyzed or outdated schedule propagates directly into the alphabetical file.
- **Difficulty with concepts not in the number**: topics that classification expresses only in the class name or in a note cannot be captured, and free-floating headings must be supplied externally.
- **Aspect and citation-order sensitivity**: changing the facet order changes the chain, so equivalent subjects can produce different entry sequences unless the schedule is strictly followed.
- **Obsolescence in machine systems**: keyword and full-text retrieval deliver hierarchical access without explicit derivation, which reduced chain indexing's operational role to specialized and pedagogical contexts.

## Worked Example

Assume a schedule in which the subject *feeding of dairy cattle* is classified by the path **636.1 (Cattle) → 636 (Animal husbandry) → 630 (Agriculture) → 600 (Technology)**. (The path is illustrative: in your examination you would read the numbers from the schedule supplied to you.)

**Step 1 — express the chain**: Technology; Agriculture; Animal husbandry; Cattle.

**Step 2 — work right to left and make an entry at each step:**

1. **Cattle** (636.1): the specific entry point; recorded with its class number and a link to its immediate broader term.
2. **Animal husbandry** (636): entry recorded, linked to Agriculture.
3. **Agriculture** (630): entry recorded, linked to Technology.
4. **Technology** (600): root of the chain; no further step.

**Step 3 — integrate with the alphabetical file**: a searcher looking up *Cattle*, *Animal husbandry*, or *Agriculture* now reaches the same classified material, and the see and see also references guide a user who searched *Livestock feeding* toward the authorized chain.

**Step 4 — stopping check**: had the schedule appended a free-floating subdivision such as a geographic isolate (Nigeria) or a period isolate (2000-2020), the indexer would decide whether that isolate carries independent retrieval value for this collection; if not, the chain is cut and the isolate is handled as an addition rather than a chain step.

**Derivation note**: the entries are *derived*, not invented — their wording comes from the schedule, which is exactly why the method yields consistent alphabetical access across a large cataloguing operation.

## Implications for Digital Libraries and AI Practice

Three contemporary continuations matter:

- **Derived headings in authority work**: LCSH and similar files are supported by classification numbers, and the practice of confirming a heading against a class number is chain reasoning in modern dress.
- **Automatic classification and label generation**: systems that assign a class or a facet-based label to a document, then surface narrower and broader neighbours in an interface, are performing the chain operation algorithmically — and inherit its dependence on the quality of the underlying structure.
- **Ontology and knowledge-graph alignment**: mapping a local term to a broader and narrower term in a host vocabulary is the same right-to-left traversal with different notation.

For African university libraries with limited cataloguing staff, the method's logic supports a practical workflow: analyze once in classification, derive entries consistently, and validate them against a host vocabulary — a cheap route to subject access that scales with the classification rather than with the number of indexers.

## Chapter Summary

- Chain indexing derives alphabetical entries from a class number so classified and alphabetical files express the same subject analysis.
- The procedure runs right to left: decompose, enter at each step, link to the next broader step, continue to the root, and apply stopping rules.
- Strengths are derivation, fidelity, economy, and teachability; weaknesses are mechanical wording, entry volume, dependence on the schedule, and poor handling of concepts absent from the number.
- Entries are derived rather than chosen, which is the source of the method's consistency.
- The same traversal logic underlies modern derived headings, automatic classification labelling, and ontology alignment.`,
    keyTerms: [
      { term: "Chain indexing", definition: "Ranganathan's procedure for generating alphabetical index entries by decomposing a class number and creating an entry at each step from the most specific term to the root." },
      { term: "Derived subject heading", definition: "An alphabetical subject entry whose wording and structure are taken from a classification analysis rather than selected independently." },
      { term: "Class number", definition: "The notation representing a document's position in a classification schedule, each segment of which corresponds to a term in a hierarchical chain." },
      { term: "Chain of terms", definition: "The sequence of broader and narrower terms expressed by a class number, read from general to specific and traversed in reverse for indexing." },
      { term: "Right-to-left traversal", definition: "The rule that chain entries begin at the most specific term of the class path and proceed toward the most general." },
      { term: "Stopping rule", definition: "The decision to cut a chain where a common isolate, free-floating subdivision, or facet element would generate an entry of no independent retrieval value." },
      { term: "Common isolate", definition: "A general facet element such as form, geography, or period that may be appended to many classes and is handled separately from the main chain." },
      { term: "Citation order", definition: "The fixed sequence in which facets of a compound subject are arranged, determining the order of terms in a derived chain and in a pre-coordinate heading." },
    ],
    reviewQuestions: [
      "State the rationale for chain indexing: why did Ranganathan derive alphabetical entries from classified ones?",
      "Outline the chain procedure in numbered steps, indicating the direction of traversal and the reason for that direction.",
      "Derive the entries for a class path of your choice (state the schedule you are using), and identify where you would apply a stopping rule.",
      "Explain the difference between a derived subject heading and a freely chosen one, and state the consistency implications of each.",
      "Evaluate four criticisms of chain indexing and indicate which, if any, remain decisive in a machine-searched environment.",
      "How does chain indexing depend on citation order? What happens to the alphabetical file if the facet sequence is altered?",
      "Critically assess the claim that modern automatic classification and label generation are chain indexing under another notation; cite one continuity and one difference.",
    ],
    furtherReading: [
      "Ranganathan, S.R. (1967). Prolegomena to Library Classification. 3rd ed. Bombay: Asia Publishing House.",
      "Ranganathan, S.R. (1962). Elements of Library Classification. 4th ed. London: Asia Publishing House.",
      "Foskett, A.C. (1982). The Subject Approach to Information. 4th ed. London: Clive Bingley.",
      "Broughton, V. (2015). Essential Library of Congress Subject Headings. London: Facet Publishing.",
      "Austin, D. (1974). PRECIS: A Manual of Concept Analysis and Subject Indexing. London: British Library Lending Division.",
    ],
    diagramId: "ch10-chain-indexing",
  },
];
