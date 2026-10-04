import { BookChapter } from '../bookTypes';

// Chapters 11-20 — rewritten to master's (LIS 814) depth.
export const BOOK_PART2: BookChapter[] = [
  {
    number: 11,
    module: "Module 3: Systems & Syntax",
    title: "Derek Austin PRECIS (Preserved Context Index System)",
    objectives: [
      "Define PRECIS and state the design problem it was created to solve for the British National Bibliography.",
      "Analyze a complex subject into a PRECIS-style string of single-concept terms and assign a role indicator to each term.",
      "Apply the manipulation rules to generate an entry for every term in a string and test each entry against the read-through criterion.",
      "Compare PRECIS with chain indexing and KWIC derivation on the questions of source, syntax, and multiple access.",
      "Critically evaluate how the preserved-context discipline bears on faceted interfaces, knowledge graphs, and AI-generated subject statements.",
    ],
    content: `PRECIS — the Preserved Context Index System — was designed by Derek Austin in the late 1960s for the British National Bibliography, and it remains the most fully worked answer to a problem that haunts every pre-coordinate system: how can a subject string be reorganized so that any of its terms can become the access point without the entry losing its meaning? In a class number the context survives only for readers who know the schedule; in a KWIC rotation it survives as broken fragments of a title; in Austin's system it survives as syntax, recorded term by term and preserved by explicit manipulation rules. The design therefore separates the intellectual act of **concept analysis** from the mechanical act of **entry display**.

[[diagram:ch11-precis]]

## The Design Problem PRECIS Answers

A pre-coordinate system must let a user reach the same compound subject from more than one term, because users do not all begin at the same point: one looks up *Electronic theses*, another *Cataloguing*, a third *Nigerian university libraries*. Three classical responses were available when Austin began work, and each was defective:

- **Chain indexing** (chapter 10) generates an entry at every step of a class path, so multiple access is achieved — but the wording is borrowed from the schedule, and the entries carry no explicit statement of which term acts upon which.
- **See references** redirect alternative formulations to a single heading, but the indexer must anticipate every phrasing a searcher might use, and the reference structure grows combinatorially with vocabulary size.
- **KWIC rotation** (chapter 12) gives access to every significant word of a title, but it rotates words rather than concepts, prints grammatically broken context, and cannot distinguish an agent from a target.

Austin's answer was to make the string itself the carrier of meaning. The analyst writes the subject once, as a sequence of single-concept terms in a fixed **citation order**, each tagged with a **role indicator**; the machine then rewrites that string for every lead term. Analysis is done once and expensively; display is done many times and cheaply.

## Roles, Citation Order, and the String

A PRECIS string obeys three rules:

1. **One term, one concept.** Compound headings are refused; *Smallholder farmers* becomes two terms if the analysis requires them to be separately addressable.
2. **Fixed citation order.** Terms are sequenced by rule rather than by the wording of the title, an inheritance from Ranganathan's faceted discipline (chapter 8) that guarantees logically equivalent subjects collocate.
3. **Role indicators.** Each term is tagged with the function it performs: the **target** or thing under discussion, the **action** or operation, the **agent** or performer, a **property** or characteristic, a **method**, **space**, **time**, and the **disciplinary or form viewpoint** from which the subject is treated.

Role indicators are instructions to the manipulation engine, not decorative labels. Their retrieval value is that they preserve the difference between records describing library automation and libraries automating their records — a distinction a keyword rotation cannot represent at all.

> PRECIS rule: write the string once and derive everything from it. If the string is wrong, every entry generated from it is wrong; the machine can detect a malformed string, but never a faulty analysis.

## Manipulation: Creating the Entries

For each term in the string the system executes the same procedure:

1. Select the next term as the **lead**, that is, the access point of this entry.
2. Move it to the head of the display and mark it as the entry point.
3. Reassemble the remaining terms so that the relationships asserted by their roles still read correctly: terms that qualify the lead follow it, and terms belonging to another concept stay with that concept.
4. Print the entry — conventionally the lead on the first line and the preserved context beneath it — adding a cross-reference only where synonymy requires one.
5. Submit the result to the **read-through test**: a reader who sees only this entry must be able to state the subject correctly.

Because every term can lead, the system supplies multiple access points without a see reference for any combination. References remain necessary only for *equivalence* — routing *e-libraries* to *Electronic theses* — which is a vocabulary-control problem that syntax alone never cures.

## Worked Example

Subject: *Cataloguing of electronic theses in Nigerian university libraries.*

**Analysis** yields three concepts in citation order, each with a role:

1. **Electronic theses** — target, the thing acted upon.
2. **Cataloguing** — action.
3. **Nigerian university libraries** — agent.

**Display**, a simplified rendering of the entry, one per lead:

- Lead *Electronic theses*: line 1 **Electronic theses**; line 2 Cataloguing — Nigerian university libraries.
- Lead *Cataloguing*: line 1 **Cataloguing**; line 2 Electronic theses — Nigerian university libraries.
- Lead *Nigerian university libraries*: line 1 **Nigerian university libraries**; line 2 Electronic theses — Cataloguing.

**Read-through test**: each display states the whole subject — theses are catalogued, the cataloguing is done by Nigerian university libraries, the libraries act on electronic theses — so a searcher entering at any of the three points arrives at a coherent entry. **Contrast**: a KWIC rotation of the same title prints a fragment such as "of electronic theses in Nigerian university libraries" under *Nigerian*, with no indication that *Nigerian* modifies *libraries* rather than *theses*; a chain-derived entry reproduces the schedule path but assumes the reader can reconstruct the roles unaided.

**Retrieval consequence**: because roles travel with the terms, an interface can group entries by any term without rebuilding meaning, which is exactly what a faceted display does.

## PRECIS Compared with Chain Indexing and KWIC

- **Source of terms**: chain indexing takes wording from the classification schedule; KWIC takes words from the title; PRECIS takes concepts from an analyst's reading.
- **Syntax**: KWIC has none; chain indexing has syntax only implicitly, inside the schedule; PRECIS records it explicitly in role indicators.
- **Multiple access**: all three provide it, but only PRECIS guarantees that every access point preserves the asserted relationships.
- **Cost**: PRECIS demands the highest intellectual effort per document plus machine support for display — a decisive consideration for a small cataloguing unit.
- **Vocabulary control**: none of the three solves synonym scatter; a preferred-term list with USE references is still required (chapters 3 and 5).

## Implications for Digital Libraries and AI Practice

Three continuations are visible in current systems. First, role indicators anticipate **predicate-argument structure**: a PRECIS string is formally a small directed graph of concepts with typed edges, which is why subject strings convert cleanly into knowledge-graph triples. Second, faceted breadcrumbs in discovery layers are preserved-context displays — the searcher sees subject, region, and date together rather than a bare keyword. Third, large language models generate fluent subject statements that read coherently yet may silently invert agent and target; PRECIS supplies an audit protocol: one term per concept, an explicit role for each, consistent citation order, and a passed read-through test.

In LIS education across Nigeria and other African countries, PRECIS still serves as the standard teaching vehicle for syntactic analysis because it makes visible what classification notation hides. Small libraries cannot fund full PRECIS processing, but they can adopt its discipline cheaply: record the subject as separate concepts, order them by rule, and read the resulting subject field aloud before it is saved. Multilingual settings add one requirement — the string, not merely the term list, must be rebuilt for each language of display.

## Chapter Summary

- PRECIS derives from a single concept analysis, so analysis and display are separated and multiple access costs no see references.
- One term per concept, fixed citation order, and role indicators are the three structural rules of the string.
- Manipulation rewrites the string for each lead term; the read-through test is the quality check on the result.
- PRECIS is syntactic where chain indexing is derivational and KWIC is lexical; none of the three controls synonyms.
- The principles survive in faceted navigation, knowledge graphs, and the auditing of machine-generated subject statements.`,
    keyTerms: [
      { term: "PRECIS", definition: "Preserved Context Index System, Derek Austin's computer-assisted pre-coordinate indexing system in which a role-marked concept string is rewritten so that any term can serve as access point without loss of context." },
      { term: "Role indicator", definition: "A marker recording the syntactic function of a term in a subject string — target, action, agent, property, method, space, time, or viewpoint — used to preserve meaning during manipulation." },
      { term: "Subject string", definition: "The ordered sequence of single-concept terms, written once from concept analysis, from which every PRECIS entry is derived." },
      { term: "Citation order", definition: "The fixed, rule-governed sequence in which the terms of a subject string are arranged so that logically equivalent subjects collocate." },
      { term: "Lead term", definition: "The term selected as the access point of a particular entry, around which the remaining terms are reassembled." },
      { term: "Manipulation rule", definition: "The mechanical procedure by which the string is reorganized for a chosen lead term while the roles and scopes of the remaining terms are preserved." },
      { term: "Read-through test", definition: "The quality criterion requiring that a display entry, read on its own, states the document's subject coherently and unambiguously." },
      { term: "Concept analysis", definition: "The intellectual determination of a document's component concepts and their functions, performed once and upstream of all mechanical display." },
      { term: "Preserved context", definition: "The property of an index entry whereby the relationships among a document's concepts remain recoverable from any access point." },
    ],
    reviewQuestions: [
      "Define PRECIS and state the problem of context preservation it was designed to solve.",
      "List the three structural rules of a PRECIS string and explain the function of a role indicator with an example.",
      "Take the subject *Digitization of newspaper collections in Ghanaian university libraries* and produce a role-marked string, then display an entry for each of its three terms, applying the read-through test to each.",
      "Why does PRECIS need almost no see references for subject combinations, and what class of references does it still require?",
      "Compare PRECIS with chain indexing on three dimensions: source of term wording, explicitness of syntax, and behaviour under multiple access.",
      "Critically evaluate the claim that a language model can produce PRECIS-equivalent entries. Name two checks a human reviewer must still apply.",
      "Discuss whether the read-through test can be used as a quality check on the subject field of an institutional repository record.",
    ],
    furtherReading: [
      "Austin, D. (1974). PRECIS: A Manual of Concept Analysis and Subject Indexing. London: British Library Lending Division.",
      "Ranganathan, S.R. (1967). Prolegomena to Library Classification. 3rd ed. Bombay: Asia Publishing House.",
      "Foskett, A.C. (1982). The Subject Approach to Information. 4th ed. London: Clive Bingley.",
      "Lancaster, F.W. (1998). Indexing and Abstracting in Theory and Practice. 2nd ed. Urbana-Champaign: University of Illinois Graduate School of Library and Information Science.",
      "Aitchison, J., Gilchrist, A. and Bawden, D. (2015). Thesaurus Construction and Use: A Practical Manual. 5th ed. London: Facet Publishing.",
    ],
    diagramId: "ch11-precis",
  },
  {
    number: 12,
    module: "Module 3: Systems & Syntax",
    title: "Automated Derived Indexing: KWIC, KWOC & Uniterm",
    objectives: [
      "Define derived indexing and state the assumptions on which KWIC, KWOC, and Uniterm depend.",
      "Construct a KWIC and a KWOC display from a given title, applying a stop list and alphabetical arrangement correctly.",
      "Build a uniterm posting file and execute Boolean combination by intersection, union, and difference.",
      "Diagnose the recall and precision failures produced by synonym scatter, homography, and the vocabulary gap in derived systems.",
      "Critically evaluate how modern inverted indexes and search-result snippets inherit the design of Luhn's and Taube's devices.",
    ],
    content: `Derived indexing inverts the usual order of work: instead of a person deciding what a document is about and then choosing terms, the system extracts terms mechanically from words the document already contains. KWIC, KWOC, and Uniterm are the three classic outcomes of that inversion — a rotated display, a keyword list, and a term file ready for coordinate searching. All three rest on the assumption that the title, or sometimes the full text, is a tolerable surrogate for the document. This chapter builds each device step by step, states the assumptions each one makes, and traces the line from Taube's uniterm cards to the posting lists that answer every modern query.

[[diagram:ch12-kwic-kwoc]]

## Derived Indexing: Principle and Assumptions

**Derived indexing** takes its terms from the surface of the document — usually the title, sometimes an abstract, occasionally the full text — by rule rather than by judgment. The procedures are simple: delete a **stop list** of function words and generic terms, optionally reduce word forms to a stem, sort the survivors alphabetically, and print or store them. The indexing step therefore costs almost nothing, is completely reproducible, and requires no subject specialist.

Three assumptions carry the whole design, and each fails in a known way:

- **The title is an adequate surrogate.** Scientific and technical titles are usually informative; poetry, law, archival files, statutes, and exhibition catalogues frequently are not.
- **Word form corresponds to concept.** Synonymy scatters one concept across many words, homography merges unrelated concepts into one posting list, and morphology fragments variants.
- **The searcher's words match the document's words.** Where query and document use different vocabulary, no amount of derivation closes the gap.

Derived indexing is therefore best read as a cheap, high-exhaustivity, low-specificity strategy: it records many words at a general level of form and leaves ranking or filtering to do the rest.

## KWIC: Construction

**KWIC (Keyword in Context)**, associated with Hans Peter Luhn's work at IBM in the late 1950s, rotates each significant word of a title into a fixed central position:

1. Take the title as printed, in full.
2. Apply the stop list; discard articles, prepositions, conjunctions, and any term declared too generic to discriminate.
3. For each surviving word in turn, make it the lead.
4. Print the whole title around the lead in a fixed-width band, wrapping the parts that run past the column edge.
5. Sort the generated lines alphabetically by lead word, so that one title yields as many lines as it has keywords.

The result is an alphabetically arranged file in which a reader looking up *performance* finds every title containing that word with its immediate wording visible. Its properties follow from the design: deep context lines, economical handling of repeated occurrences, no intellectual cost — but an arrangement that is alphabetical rather than topical, line lengths that are hard to scan, and entries that are visibly broken English.

> KWIC rule: the unit of rotation is the word, not the concept. Every defect of free-text indexing — synonym scatter, homographic merging, phrase blindness — is therefore present by construction.

## KWOC and Related Displays

**KWOC (Keyword out of Context)** takes the same extracted keywords, lists them alphabetically on their own, and prints the complete title beside or beneath each one. Variants add the opening words of the title as a fixed context band. The trade-off is exact:

- **KWIC** maximizes local context and sacrifices scannability.
- **KWOC** maximizes scannability — a reader can run down a clean keyword column — and reproduces the full title each time, which makes long lists verbose but keeps the title grammatically intact.

Both are display devices over the same extracted vocabulary; neither adds analysis. Their descendants are the keyword-browse options of digital repositories and the concordance views of corpus tools, where a term is listed with the sentences in which it occurs.

## Uniterm and Coordinate Indexing

Mortimer Taube's **uniterm** approach, set out in *Studies in Coordinate Indexing* (1953), abandons display in favour of a search device. Taube argued that pre-coordinated headings carrying subdivisions and elaborate reference structures are expensive to build and still fail to answer many queries, and that the remedy is to record concepts separately and postpone combination:

1. Record each concept of a document as a **unit term**, ideally a single unambiguous word.
2. Post the document identifier beneath the term, in the order received.
3. At search time combine the posting lists: **AND** by intersection, **OR** by union, **NOT** by difference.
4. On cards, combination was performed physically — aligning or superimposing cards so that common identifiers line up (**optical coincidence**) — a mechanical Boolean engine.

The strengths are the ones that still justify the method: extreme economy, no cross-references for combinations, tolerance of the searcher's own vocabulary, and immediate automation, because posting and intersecting lists are trivially computable. The weaknesses are equally durable: the file stores **co-presence without context**, homographs share one list, synonyms sit in separate lists, and multiword concepts are broken into parts unless a phrase is preserved deliberately.

## Worked Example

Title: *Social media use and academic performance of undergraduates in Nigeria.*

**Step 1 — stop list.** Discard *of, on, and, in, use* as non-discriminating. Survivors: social, media, academic, performance, undergraduates, Nigeria.

**Step 2 — KWIC lines**, simplified, lead word in capitals:

- ACADEMIC — Social media use and academic performance of undergraduates in Nigeria
- MEDIA — Social media use and academic performance of undergraduates in Nigeria
- NIGERIA — Social media use and academic performance of undergraduates in Nigeria
- PERFORMANCE — Social media use and academic performance of undergraduates in Nigeria

**Step 3 — uniterm postings** for a five-document file:

- SOCIAL MEDIA: D1, D3
- ACADEMIC PERFORMANCE: D1, D2, D4
- UNDERGRADUATES: D1, D4, D5
- NIGERIA: D1, D2, D3, D5
- EXAMINATION RESULTS: D4

**Step 4 — combination.** ACADEMIC PERFORMANCE AND NIGERIA gives {D1, D2}; SOCIAL MEDIA OR EXAMINATION RESULTS gives {D1, D3, D4}; ACADEMIC PERFORMANCE AND MEDICINE gives the empty set.

**Step 5 — failure diagnosis.** A searcher who asks for *Facebook AND Nigeria* retrieves nothing although D1 is squarely relevant: silence caused by the vocabulary gap. A searcher who asks for *media AND Nigeria* retrieves D1 and D3 but also any document on news media in Nigeria: noise caused by homography and by the loss of phrase structure.

## Evaluation and Survival in Current Systems

Derived indexing survives at scale exactly where Taube and Luhn predicted: an inverted file of postings is the core of every search engine, and modern systems add what the originals lacked — stemming, synonym expansion, phrase operators, field restrictions, and learned ranking. KWIC's context printing survives as the highlighted snippet beneath a result, serving the same purpose: let the searcher see the word in situ before deciding.

For collections where subject specialists are scarce, including many university and special libraries in Nigeria, author-supplied keywords are effectively derived indexing, and repositories built on them alone retrieve by mention and by the author's phrasing. The defensible architecture is the hybrid of chapter 3: derived full text for currency, reviewed controlled terms for collocation, and ranking that blends both signals.

## Chapter Summary

- Derived indexing extracts terms by rule from titles or text; it buys cost and reproducibility at the price of analysis.
- KWIC rotates words into an alphabetical context band; KWOC lists keywords with the full title; neither distinguishes concepts from words.
- Uniterm stores single-concept terms with postings and retrieves by Boolean intersection, union, and difference.
- Synonym scatter, homography, phrase blindness, and vocabulary mismatch are structural failure modes, not correctable lapses.
- Inverted files, posting lists, and result snippets are the descendants of these devices, now repaired by stemming, synonymy control, and ranking.`,
    keyTerms: [
      { term: "Derived indexing", definition: "Indexing in which terms are extracted mechanically from a document's title, abstract, or text by rule, without intellectual subject analysis." },
      { term: "KWIC", definition: "Keyword in Context: an index in which every significant title word is rotated into a central position with its surrounding wording printed around it, all lines sorted alphabetically by lead word." },
      { term: "KWOC", definition: "Keyword out of Context: an index listing extracted keywords alphabetically with the complete title reproduced beside or beneath each keyword." },
      { term: "Stop list", definition: "A predetermined set of function words and generic terms excluded from extraction because they do not discriminate between documents." },
      { term: "Uniterm", definition: "A single-concept term stored as a heading beneath which document identifiers are posted, designed for combination at search time." },
      { term: "Coordinate indexing", definition: "Retrieval by combining the postings of separately stored terms through Boolean operations rather than by consulting pre-coordinated headings." },
      { term: "Posting", definition: "The record of a document identifier beneath a term, forming the posting list that Boolean operations intersect, unite, or subtract." },
      { term: "Optical coincidence", definition: "A card-based technique in which aligned or superimposed posting cards reveal common document identifiers, performing intersection physically." },
      { term: "Vocabulary gap", definition: "The mismatch between the words a searcher uses and the words appearing in relevant documents, which derivation cannot overcome." },
    ],
    reviewQuestions: [
      "Define derived indexing and state the three assumptions on which KWIC, KWOC, and Uniterm depend.",
      "Construct a KWIC display for the title *Renewable energy financing and poverty reduction in coastal communities of Lagos State*, showing your stop list and at least four rotated lines.",
      "Rebuild the same title as a KWOC display and state precisely which user task each presentation serves better.",
      "For postings A = {D1, D2, D4}, B = {D1, D3}, C = {D2, D5}, compute A AND B, A OR C, and A NOT C.",
      "Explain why a uniterm file cannot distinguish a document about the automation of library budgets from one about library automation, naming the chapter 9 concept involved.",
      "A repository relies entirely on author keywords. Identify two retrieval failures that will follow and the remedy recommended in this chapter.",
      "Critically evaluate the claim that a modern search engine has simply made KWIC obsolete.",
    ],
    furtherReading: [
      "Taube, M. (1953). Studies in Coordinate Indexing. New York: Documentation, Inc.",
      "Salton, G. (1968). Automatic Information Organization and Retrieval. New York: McGraw-Hill.",
      "Foskett, A.C. (1982). The Subject Approach to Information. 4th ed. London: Clive Bingley.",
      "Lancaster, F.W. (1998). Indexing and Abstracting in Theory and Practice. 2nd ed. Urbana-Champaign: University of Illinois Graduate School of Library and Information Science.",
      "Manning, C.D., Raghavan, P. and Schütze, H. (2008). Introduction to Information Retrieval. Cambridge: Cambridge University Press.",
    ],
    diagramId: "ch12-kwic-kwoc",
  },
  {
    number: 13,
    module: "Module 4: Strategies & Evaluation",
    title: "Exhaustivity and Specificity in Indexing Strategy",
    objectives: [
      "Define exhaustivity and specificity and distinguish each from relevance and from indexing depth.",
      "Analyze a document for its in-scope concepts and compute an exhaustivity ratio for two competing assignments.",
      "Apply specificity tests to choose between a broad term and a narrow term, stating the precision and recall consequences of each choice.",
      "Formulate a written indexing policy that fixes acceptable levels of exhaustivity and specificity for a defined collection.",
      "Critically evaluate how automated and AI-assisted indexing silently raises exhaustivity while lowering specificity.",
    ],
    content: `Every indexing policy must settle two quantitative questions before a single term is assigned: how much of the document should be recorded, and at what level of granularity. Those two parameters — **exhaustivity** and **specificity** — determine the size of the posting lists a system will build, the noise it will generate, and the silence it will impose. They are policy decisions rather than properties of documents, which is why two competent indexers working under different instructions will produce term sets of different lengths and different levels of abstraction for exactly the same article.

[[diagram:ch13-exhaustivity-specificity]]

## Defining the Two Parameters

**Exhaustivity** is the degree to which a document's concepts are represented in its index terms: at high exhaustivity the indexer records major, secondary, and incidental-but-in-scope concepts; at low exhaustivity only the dominant subject is recorded. Exhaustivity is a property of the **term set relative to the document**.

**Specificity** is the level of abstraction at which each recorded concept is expressed: a specific term corresponds closely to the concept as treated (*Drought stress in cowpea*), while a general term subsumes it (*Agriculture*, *Crops*). Specificity is a property of the **chosen term relative to the concept**.

The two are independent, which gives four practical strategies:

- **High exhaustivity, high specificity**: many precise terms — maximum retrieval power at maximum indexing cost and posting volume.
- **High exhaustivity, low specificity**: many broad terms — comprehensive but blunt, so queries at either extreme retrieve loosely.
- **Low exhaustivity, high specificity**: few precise terms — cheap and tidy, but silence for every neighbouring query.
- **Low exhaustivity, low specificity**: one or two broad headings — the classic minimal catalogue entry, efficient only if the collection is small and its users browse.

> Policy note: Z39.19 governs vocabulary structure and ISO 5963 describes the analytic procedure; neither prescribes an exhaustivity or specificity level. That number must come from a documented indexing policy tied to collection purpose and user community.

## The Exhaustivity Decision

Exhaustivity is essentially a bet on how much of the document a searcher will ask about. Raising it has predictable effects:

1. **Recall rises**, because each additional concept opens another route to the record.
2. **Noise rises**, because each additional concept also opens a route for irrelevant queries — indexing a mention (chapter 2) inflates a heading's posting list.
3. **Cost rises**, both in indexer time and in maintenance: every added term must later be reconciled when the vocabulary changes.
4. **Consistency tends to fall**, because indexers agree readily about a document's main subject and progressively less about its secondary ones.

Lancaster's surveys of indexing practice document this pattern: agreement between indexers is highest on principal subjects and declines as exhaustivity increases, which is why high-exhaustivity operations invest in written policy and double-indexing rather than in exhortation.

## The Specificity Decision

Specificity is a bet on the searcher's phrasing. A narrow term delivers a short, clean posting list; a broad term delivers a long, mixed one. But the narrow term also risks **vocabulary mismatch**: if users ask for *Drought* and the record carries only *Drought stress in cowpea*, the item is missed unless hierarchy-based expansion (BT) or free-text indexing supplies the bridge. The governing trade-off is asymmetric:

- Choosing broader than the concept costs precision immediately and recall not at all.
- Choosing narrower than the concept costs recall immediately and precision only if the term is reached at all.

Practical tests for level of abstraction: does the term correspond to a unit the target community actually discusses? Is there a narrower term in the vocabulary that the document's treatment would justify? Would a competent indexer in this collection apply the same term? The last question is what makes specificity an empirical matter: specificity can be measured by average term length and posting-list size, and both should be stable across a corpus.

## Worked Example

Document: *Effects of drought stress on cowpea yields in Kebbi State, 2010-2020.*

**Concept inventory** (in scope, twelve items): cowpea; drought stress; crop yields; Kebbi State; Nigeria; West Africa; smallholder farming; irrigation; rainfall variability; food security; cultivar selection; yield estimation.

**Assignment L (low exhaustivity, moderate specificity)**: *Cowpea*; *Nigeria* — 2 terms, exhaustivity ratio 2/12 = 0.17.

**Assignment H (high exhaustivity, high specificity)**: *Cowpea*; *Drought stress*; *Cowpea — Yields*; *Kebbi State*; *Irrigation*; *Rainfall variability*; *Food security*; *Cultivar selection* — 8 terms, ratio 8/12 = 0.67.

**Query tests**:

1. *cowpea AND drought*: H retrieves the record; L is silent. Silence here is caused by low exhaustivity, not by vocabulary.
2. *cowpea AND Nigeria*: both retrieve it, but H also retrieves it under *Food security* and *Irrigation* queries — additional recall at some noise cost.
3. *drought AND cereals*: H retrieves the record because *Drought stress* is general enough to cover cereals although cowpea is a legume — noise caused by insufficient specificity at that node.
4. *Kebbi State*: only H retrieves it; a user searching geographically would be silent against L.

Neither assignment is wrong. Assignment L suits a small general-interest collection with browse-oriented users; assignment H suits a research collection whose users run Boolean and faceted queries. What makes either defensible is that the policy states the target in advance.

## Strategy, Users, and Collection Policy

An indexing policy should fix, at minimum: the permitted exhaustivity band (for example, principal subject always, secondary subjects when treated substantively, instruments and methods excluded); the default level of specificity and the conditions for departing from it; the treatment of geographic and chronological elements; and the handling of local terms that the host vocabulary lacks. In Nigerian university libraries, where a single unit may catalogue theses, journals, and government documents under one schedule, such a note is what allows a junior indexer and a senior one to produce compatible records.

## Implications for Digital Libraries and AI Practice

Automated indexing changes both parameters in one direction: statistical and neural systems assign terms to every passage, producing effectively maximal exhaustivity, while the terms themselves are drawn from distributional clusters whose granularity is set by the algorithm, not by the collection's users. The practical consequences are familiar — huge, low-specificity posting lists, high recall against casual queries, and persistent noise against precise ones — which is precisely why ranking now does the work that specificity used to do.

For practitioners the obligations follow from that shift. First, when a discovery layer supplies keyword harvesting, the professional must still supply the specific controlled terms that conflation would otherwise bury. Second, evaluation must be reported with the exhaustivity band stated, because a recall figure is uninterpretable without it. Third, LLM-assisted indexing must be audited on both dimensions: models happily assign many terms (high exhaustivity) while drifting to whatever level of abstraction the training corpus prefers, which may not be the level this collection's policy requires.

## Chapter Summary

- Exhaustivity measures how much of a document is recorded; specificity measures how precisely each recorded concept is expressed.
- The two parameters are independent, giving four indexing strategies with distinct cost, noise, and silence profiles.
- Raising exhaustivity buys recall at the price of noise, cost, and lower inter-indexer consistency.
- Choosing a term narrower than the concept costs recall immediately; choosing broader costs precision immediately.
- Neither standard fixes these levels: a documented indexing policy, tied to users and collection purpose, does.
- Automated indexing maximizes exhaustivity and leaves specificity to ranking, which shifts professional attention from term count to term quality.`,
    keyTerms: [
      { term: "Exhaustivity", definition: "The degree to which the concepts of a document, in scope for a collection, are represented among its assigned index terms." },
      { term: "Specificity", definition: "The level of abstraction at which an assigned term corresponds to the concept as treated in the document, from very general to very narrow." },
      { term: "Exhaustivity ratio", definition: "An informal measure computed as assigned in-scope concepts divided by identified in-scope concepts, used to compare indexing depth across records." },
      { term: "Indexing policy", definition: "The documented rules fixing permitted exhaustivity, default specificity, subdivision practice, and treatment of local terms for a collection." },
      { term: "Low-exhaustivity indexing", definition: "Recording only a document's principal subjects, producing short term sets, low cost, and predictable silence for secondary queries." },
      { term: "Level of abstraction", definition: "The position of a term on a scale from general to narrow, determining which posting lists the record joins." },
      { term: "Posting inflation", definition: "The growth of a term's posting list caused by broad assignment or mention indexing, which dilutes precision." },
      { term: "Vocabulary mismatch", definition: "The failure of a narrow assigned term to be reached by a broader query formulation, producing silence despite correct indexing." },
      { term: "Indexing depth", definition: "The practical amount of analytical effort and term assignment applied to a document, expressed operationally through exhaustivity and specificity." },
    ],
    reviewQuestions: [
      "Define exhaustivity and specificity and explain why a record can be highly exhaustive yet imprecise, or highly specific yet silent.",
      "A document yields nine in-scope concepts and the indexer assigns three. Compute the exhaustivity ratio and state what query classes this assignment will fail.",
      "For the subject *Uses of radio in disseminating agricultural extension information in Enugu State*, produce one low-exhaustivity and one high-exhaustivity term set and predict the retrieval effect of each.",
      "State the asymmetric cost of choosing a term narrower than the concept and contrast it with the cost of choosing broader.",
      "Draft a five-line indexing policy for a university repository fixing exhaustivity, specificity, geographic elements, and treatment of instruments.",
      "Why does raising exhaustivity tend to reduce inter-indexer consistency? What organizational responses does that imply?",
      "Critically evaluate the claim that ranking has made specificity unnecessary for a modern discovery layer.",
    ],
    furtherReading: [
      "Lancaster, F.W. (1998). Indexing and Abstracting in Theory and Practice. 2nd ed. Urbana-Champaign: University of Illinois Graduate School of Library and Information Science.",
      "Foskett, A.C. (1982). The Subject Approach to Information. 4th ed. London: Clive Bingley.",
      "Lancaster, F.W. (1986). Vocabulary Control for Information Retrieval. 2nd ed. Arlington, VA: Information Resources Press.",
      "Soergel, D. (1974). Indexing Languages and Thesauri: Construction and Maintenance. New York: Marcel Dekker.",
      "Manning, C.D., Raghavan, P. and Schütze, H. (2008). Introduction to Information Retrieval. Cambridge: Cambridge University Press.",
    ],
    diagramId: "ch13-exhaustivity-specificity",
  },
  {
    number: 14,
    module: "Module 4: Strategies & Evaluation",
    title: "Information Retrieval Metrics: Precision and Recall",
    objectives: [
      "State the definitions of precision and recall and reproduce their formulas from a two-by-two contingency table.",
      "Compute precision, recall, fallout, noise, silence, and the F-measure from a worked retrieval scenario.",
      "Explain why the harmonic mean is used for the F-measure and why precision alone cannot rank two systems.",
      "Analyze the conditions — reference set, relevance judgment, query set — under which the metrics are valid, and identify when they are not.",
      "Critically evaluate the adequacy of classical metrics for ranked output, conversational answers, and machine-generated summaries.",
    ],
    content: `Evaluation begins the moment a system claims to work. Precision and recall are the two measures that made the claim testable, and they remain the reference points against which every later metric — precision at k, mean reciprocal rank, normalized discounted cumulative gain — is defined. Both are simple ratios, and both are unforgiving: they require a defined request, a judged **reference set**, and an honest count of what was retrieved. This chapter builds the contingency table, computes the ratios through two worked scenarios, and examines the assumptions that make the numbers meaningful rather than decorative.

[[diagram:ch14-precision-recall]]

## The Contingency Table and the Formulas

For a given request, every document in the collection falls into exactly one of four cells:

| | Relevant | Not relevant |
|---|---|---|
| **Retrieved** | a | b |
| **Not retrieved** | c | d |

From these four counts the standard measures follow directly:

1. **Precision = a / (a + b)** — of the documents the system returned, what proportion were relevant? Precision answers the question the user asks at the results screen: *must I wade through this?*
2. **Recall = a / (a + c)** — of all relevant documents in the reference set, what proportion were returned? Recall answers the question the user cannot see: *what am I still missing?*
3. **Fallout = b / (b + d)** — of all non-relevant documents in the collection, what proportion were wrongly returned?
4. **Noise = b / (a + b)** — the complement of precision, the proportion of the result list that was wasted effort.
5. **Silence = c / (a + c)** — the complement of recall, the proportion of the relevant literature that never surfaced.

> Exam tip: precision and fallout share a numerator class but not a denominator. Precision divides by what was retrieved; fallout divides by what existed. Confusing the two is the commonest arithmetic error in retrieval evaluation.

## Worked Example One: Computing the Measures

Suppose a collection holds 1,000 documents, of which a judged reference set identifies 200 as relevant to a request. A system returns 80 documents, of which 60 are relevant.

1. a = 60, b = 20, c = 140, d = 780.
2. **Precision** = 60 / 80 = 0.75, that is 75 per cent.
3. **Recall** = 60 / 200 = 0.30, that is 30 per cent.
4. **Noise** = 20 / 80 = 25 per cent. **Silence** = 140 / 200 = 70 per cent.
5. **Fallout** = 20 / 800 = 0.025, that is 2.5 per cent — apparently excellent, and misleadingly so: with 800 non-relevant documents in the pool, a system can discard a great deal of junk and still return a cluttered list. Fallout is sensitive to collection size in a way precision is not.
6. **F1** = 2PR / (P + R) = (2 × 0.75 × 0.30) / (0.75 + 0.30) = 0.45 / 1.05 = 0.429.

The arithmetic mean of 75 and 30 is 52.5, while the harmonic mean is 42.9. The gap is the point: the F-measure is deliberately weighted against imbalance, so a system that is superb on one axis and poor on the other cannot post a comfortable-looking score.

## The Recall–Precision Trade-off

Widening a request — adding synonyms, dropping a restriction, broadening a BT — moves retrieved documents from cell c into cell a and from d into b. Both changes raise recall; the second lowers precision. Narrowing does the reverse. The relationship is therefore characteristically **inverse**: across operating points of a single system, precision tends to fall as recall rises, which is the pattern Cleverdon reported at Cranfield (chapter 15) and the reason no system is ever ranked by one measure alone.

Two consequences follow for practice:

- Any reported figure must name its operating point. "Recall of 80 per cent" without the corresponding precision, the request set, and the collection is not a result.
- Ranking changes the question. Where results are ordered, users read the top of the list only, so **precision at k** and rank-sensitive measures become more informative than recall computed over the whole set.

## Worked Example Two: Choosing Between Systems

System A returns a list with precision 0.80 and recall 0.40. System B returns one with precision 0.50 and recall 0.70.

1. F1(A) = (2 × 0.80 × 0.40) / (0.80 + 0.40) = 0.64 / 1.20 = 0.533.
2. F1(B) = (2 × 0.50 × 0.70) / (0.50 + 0.70) = 0.70 / 1.20 = 0.583.
3. System B wins on the balanced F-measure despite its markedly messier result list — which is why a service level agreement must state whether the task is exhaustive review (recall-weighted) or first-hit lookup (precision-weighted). A systematic-review team and a clinician at a bedside want different measures, and only a declared user task chooses between them.

## Measurement Conditions and Common Pitfalls

The formulas are only as good as their inputs:

- **Reference-set completeness.** Recall cannot be computed against an incomplete set of known relevant documents; in an open or web-scale collection it is an estimate at best, usually built by **pooling** the top results of several systems for judging.
- **Relevance is a judgment, not a fact.** Different judges, different moments, and different user tasks give different cell counts, so a reliability check on judging is part of the method.
- **One-shot queries.** Classical evaluation scores a single formulated request; real searchers iterate, reformulate, and learn, so a system that scores poorly on one shot may still serve them well — or the reverse.
- **Denominator honesty.** Reporting precision over a truncated list while implying it describes the whole retrieval set inflates the result.
- **Worked examples are illustrative.** The figures used above are constructed for teaching; real published evaluations must cite their own collection sizes and judgments.

## Implications for Digital Libraries and AI Practice

Modern retrieval reports additional measures that extend rather than replace the classics: precision at 10 for ranked interfaces, mean reciprocal rank for the first correct answer, normalized discounted cumulative gain for graded relevance, and answer-level measures for conversational systems. Each still depends on the contingency logic of chapter 14 — a judged set, a count of returns, a count of misses.

Two contemporary hazards deserve the professional's attention. First, **LLM-as-judge** pipelines replace human relevance judgment with model output; they scale, but they import the model's biases, are unstable across versions, and are difficult to defend in an audit. Second, for African collections the reference-set problem is sharper than elsewhere: a discovery layer serving a Nigerian university will be evaluated against a small local corpus with uneven coverage, so reported recall is as much a statement about collection development as about the algorithm. The defensible practice is to publish the reference set alongside the scores.

## Chapter Summary

- Precision = a/(a+b); recall = a/(a+c); fallout = b/(b+d); noise and silence are the complements of precision and recall.
- The F-measure is a harmonic mean that penalizes imbalance between precision and recall.
- Precision and recall trade off as a request is broadened or narrowed, so every figure must name its operating point.
- Valid measurement requires a judged reference set, a declared request set, and honest denominators.
- Rank-aware and answer-level metrics extend the contingency logic rather than supersede it, and machine-judged relevance must be validated against human judgment.`,
    keyTerms: [
      { term: "Precision", definition: "The proportion of retrieved documents that are relevant to the request, computed as a divided by a plus b." },
      { term: "Recall", definition: "The proportion of all relevant documents in the reference set that are retrieved, computed as a divided by a plus c." },
      { term: "Relevant document", definition: "A document judged to satisfy the informational requirement of a stated request under a declared judging criterion." },
      { term: "Reference set", definition: "The judged pool of documents against which recall is computed; incomplete sets produce recall figures that are estimates rather than measurements." },
      { term: "F-measure", definition: "The harmonic mean of precision and recall, 2PR divided by P plus R, used to summarize both in a single score." },
      { term: "Fallout", definition: "The proportion of non-relevant documents in the collection that are wrongly retrieved, b divided by b plus d." },
      { term: "Noise", definition: "The proportion of a retrieved set that is irrelevant, the complement of precision." },
      { term: "Silence", definition: "The proportion of relevant documents that fail to be retrieved, the complement of recall." },
      { term: "Recall–precision trade-off", definition: "The inverse relationship in which broadening a request raises recall while lowering precision, and narrowing does the reverse." },
      { term: "Pooling", definition: "The construction of a judging pool from the top results of several systems so that recall can be estimated against a workable reference set." },
    ],
    reviewQuestions: [
      "Reproduce the two-by-two table and state the formula for precision, recall, and fallout in terms of its cells.",
      "A search returns 120 documents; 45 are relevant; the reference set contains 300 relevant documents in a collection of 5,000. Compute precision, recall, noise, silence, and fallout.",
      "Compute the F-measure for the figures in question 2 and compare it with the arithmetic mean of precision and recall, explaining the difference.",
      "Explain why the same system can be judged best or worst depending on whether the user task is exhaustive review or first-hit lookup. Cite the worked example in the chapter.",
      "State two conditions under which a reported recall figure is invalid, and describe how pooling addresses one of them.",
      "Critically evaluate the practice of using a language model as the relevance judge in a retrieval evaluation. Name two risks and one safeguard.",
      "Design an evaluation for the institutional repository of a Nigerian university: specify the request set, the judging procedure, and the measures you would report.",
    ],
    furtherReading: [
      "Manning, C.D., Raghavan, P. and Schütze, H. (2008). Introduction to Information Retrieval. Cambridge: Cambridge University Press.",
      "Salton, G. and McGill, M.J. (1983). Introduction to Modern Information Retrieval. New York: McGraw-Hill.",
      "Lancaster, F.W. (1998). Indexing and Abstracting in Theory and Practice. 2nd ed. Urbana-Champaign: University of Illinois Graduate School of Library and Information Science.",
      "Tague-Sutcliffe, J. (1996). Measuring Information: An Information Services Perspective. New York: Academic Press.",
      "Cleverdon, C.W., Mills, J. and Keen, M. (1966). Factors Determining the Performance of Indexing Systems, Volume 1: Design. Cranfield: College of Aeronautics.",
    ],
    diagramId: "ch14-precision-recall",
  },
  {
    number: 15,
    module: "Module 4: Strategies & Evaluation",
    title: "The Cranfield Experiments and Empirical IR Evaluation",
    objectives: [
      "State what the Cranfield projects were, who led them, and what problem in information science they were designed to solve.",
      "Analyze the test-collection method as a chain of design decisions: collection, requests, judging, measurement, comparison.",
      "Apply the test-collection procedure to design a small evaluation of a local index or discovery layer.",
      "Evaluate the principal criticisms of the Cranfield paradigm and the remedies proposed by later operational and user-centred studies.",
      "Critically assess how the Cranfield logic is reproduced, and sometimes distorted, in contemporary search-engine and LLM benchmarking.",
    ],
    content: `Before Cranfield, claims about retrieval systems were mostly demonstrations: a vendor showed a machine answering a question, and the audience inferred effectiveness. The Cranfield projects, led by Cyril Cleverdon at the College of Aeronautics in Cranfield, England, in the 1960s, replaced that anecdote with an experiment — a closed collection, written requests, judged relevance, measured output, and comparison across indexing languages. The method proved more durable than any of the results it produced, and the term **Cranfield paradigm** now names the whole family of laboratory evaluations descended from it.

[[diagram:ch15-cranfield]]

## Before Cranfield

Two conviction-based positions dominated the 1950s. One held that highly organized, analytically deep indexing — faceted classification, deeply subdivided headings — must retrieve better because it represented subjects more completely. The other held that mechanical devices, being faster and cheaper, would win on economics and might win on effectiveness too. Neither position had been tested on comparable material, and there was no agreed way to compare two systems except to run them on different collections and describe the outcome in prose.

The deficiency was methodological, not technological. Without a common collection and a common set of requests, results could not be added up, and every supplier could declare success on its own examples. Cranfield's contribution was to define a unit of evidence: **one system, one collection, one request set, one relevance standard, one set of measures**.

## The Cranfield Projects

Two related efforts are usually distinguished:

- **Cranfield I**, conducted around the turn of the 1960s, tested storage and retrieval mechanisms on a modest collection and produced disappointing, largely inconclusive comparisons among indexing approaches.
- **Cranfield II**, reported by Cleverdon, Mills, and Keen in 1966, was the systematic comparison of **indexing languages**. A closed collection of documents drawn from the aeronautics literature was indexed under competing schemes — a classification-based approach, an alphabetical subject-heading approach, a uniterm approach, and uncontrolled keyword methods drawn from titles — and each was searched against the same requests.

The design elements that mattered:

1. A **closed collection**, fixed in advance, so that every system faced identical material.
2. **Requests** written against the collection, paired with the documents held to satisfy them.
3. **Relevance judgments** made by subject specialists, treating relevance as a property that could be established for scoring.
4. **Measures** — principally recall and precision — computed for every system on every request.
5. **Statistical comparison** of the resulting scores rather than narrative assertion.

> Method note: the collection, not the machine, is the experiment's constant. Change the collection, and the comparison must be redone — the lesson that later programs such as TREC generalised into shared, reusable test collections.

## Principal Findings

The results were sobering for proponents of elaborate organization:

- The expected advantage of deeply analyzed indexing languages did not appear. No indexing language showed a decisive superiority, and the simpler, cheaper approaches performed about as well as the more elaborate ones.
- The relationship between recall and precision was demonstrated empirically: as requests were broadened to capture more relevant documents, precision declined.
- Overall effectiveness was modest — systems missed a substantial share of the relevant material even under favourable laboratory conditions — which shifted attention from apparatus to vocabulary and request formulation.
- Most importantly, the experiments established that **indexing language is one variable among several**, alongside the vocabulary used, the syntax of combination, and the organization of the system — Cleverdon's three determinants already introduced in chapter 1.

## The Method: How a Test Collection Works

The procedure a student should be able to reproduce:

1. Define the domain and assemble a closed, permanently identified collection.
2. Formulate a set of requests, each with a stated information requirement rather than a keyword string.
3. Assemble the candidate relevant set — by pooling results from the systems under test, by expert identification, or by both — and record the judging criterion.
4. Judge relevance, ideally with more than one judge and a recorded resolution of disagreements.
5. Run each system or indexing treatment against every request.
6. Compute precision, recall, and the F-measure per request, then average across requests with the averaging method stated.
7. Report collection size, request count, judging procedure, and measure definitions alongside the scores.

Steps 3 and 4 are where most student projects fail: an undisclosed candidate set silently converts a recall figure into a statement about the judging process.

## Criticisms and Later Responses

The Cranfield paradigm has been criticized from two directions, and both remain live:

- **Laboratory realism.** Requests were one-shot formulations, not the evolving, exploratory behaviour of real searchers; users never saw intermediate results, never reformulated, and never shifted their need. Operational studies — including Lancaster's evaluation of the MEDLARS demand search service — showed how differently systems behave once real requests, real intermediaries, and real time constraints enter the picture.
- **Relevance as a fixed property.** Treating relevance as a single yes/no judgment attached to a document ignores that relevance is relational: it depends on the user, the moment, and the use. Later work decomposed the notion into pertinence, utility, and situational relevance, and insisted that the judge's standpoint be declared.
- **Transferability.** Findings on one aeronautics collection do not automatically hold for legal texts, Arabic-language corpora, or archival fonds; the collection is a sample of a domain whether or not anyone intended it to be.

The defensible position is neither to abandon the paradigm nor to trust it unqualified: use it for controlled comparison, declare its conditions, and supplement it with interactive and user-centred evaluation when the question is about people rather than algorithms.

## Implications for Digital Libraries and AI Practice

The paradigm's descendants are everywhere: shared test collections with pooled judging, benchmark suites with leaderboards, and the reporting conventions of retrieval research. Two contemporary distortions deserve scrutiny. First, benchmark contamination — a model trained on material derived from the test set invalidates the comparison, which is the modern version of failing to declare the candidate set. Second, **LLM-as-judge** evaluation replaces human judges at scale, reintroducing at machine speed the reliability problem that Cranfield's designers handled by having specialists judge.

For institutions in Nigeria and elsewhere with no access to TREC-scale resources, the method remains affordable in miniature: a few hundred records, twenty well-written requests drawn from actual user questions, pooled judging by two librarians, and reported precision and recall. A small, honestly described test collection beats a large one whose judging procedure is undocumented.

## Chapter Summary

- Cranfield replaced system demonstrations with controlled experiments on a common collection, request set, and relevance standard.
- Cleverdon's projects compared indexing languages and found no decisive winner, while demonstrating the recall–precision trade-off.
- The test-collection method is a chain of design decisions: closed collection, stated requests, pooled candidates, recorded judging, declared measures.
- Criticisms concern one-shot queries, fixed notions of relevance, and transferability across domains.
- The paradigm still governs benchmarking, but contamination and machine judging require the same disclosure discipline Cranfield demanded.`,
    keyTerms: [
      { term: "Cranfield experiment", definition: "A laboratory evaluation of retrieval systems conducted on a closed document collection against a fixed request set with judged relevance and quantitative measures." },
      { term: "Test collection", definition: "A permanently identified set of documents, requests, and relevance judgments used as a shared benchmark for comparing retrieval systems." },
      { term: "Indexing language comparison", definition: "An experimental design in which two or more vocabularies or classification treatments are applied to identical material and searched against identical requests." },
      { term: "Relevance judgment", definition: "A recorded decision by an identified judge that a document does or does not satisfy a stated request, under a declared criterion." },
      { term: "One-shot query assumption", definition: "The simplification that a search consists of a single formulated request with no feedback, reformulation, or learning — the central realism criticism of the paradigm." },
      { term: "Operational evaluation", definition: "Assessment of a retrieval system in live service with real users, requests, and intermediaries, contrasted with laboratory testing." },
      { term: "Recall–precision trade-off", definition: "The inverse relationship between the two measures observed as a request is broadened, first demonstrated systematically at Cranfield." },
      { term: "Cranfield paradigm", definition: "The tradition of controlled, quantitative, collection-based evaluation of information retrieval systems descending from the Cranfield projects." },
    ],
    reviewQuestions: [
      "State what problem the Cranfield projects were designed to solve and name the scholar who led them.",
      "List the five design elements of the test-collection method and explain the purpose of each.",
      "Why did the Cranfield findings disappoint advocates of highly elaborated indexing languages? What conclusion about indexing language followed?",
      "Design a miniature Cranfield evaluation for a departmental index: specify collection size, request formulation, judging procedure, and the measures you would report.",
      "Explain the difference between operational and laboratory evaluation and give one finding that each type is better positioned to produce.",
      "Critically evaluate the one-shot query assumption: in what situations does it misrepresent retrieval, and what methods address the misrepresentation?",
      "Assess how benchmark contamination and LLM-as-judge scoring reproduce two classical Cranfield vulnerabilities.",
    ],
    furtherReading: [
      "Cleverdon, C.W., Mills, J. and Keen, M. (1966). Factors Determining the Performance of Indexing Systems, Volume 1: Design. Cranfield: College of Aeronautics.",
      "Lancaster, F.W. (1968). Evaluation of the MEDLARS Demand Search Service. Bethesda, MD: National Library of Medicine.",
      "Salton, G. and McGill, M.J. (1983). Introduction to Modern Information Retrieval. New York: McGraw-Hill.",
      "Manning, C.D., Raghavan, P. and Schütze, H. (2008). Introduction to Information Retrieval. Cambridge: Cambridge University Press.",
      "Tague-Sutcliffe, J. (1996). Measuring Information: An Information Services Perspective. New York: Academic Press.",
    ],
    diagramId: "ch15-cranfield",
  },
  {
    number: 16,
    module: "Module 4: Strategies & Evaluation",
    title: "Inter-Indexer Consistency, Fallout, Noise and Silence",
    objectives: [
      "Define fallout, noise, silence, and inter-indexer consistency, and state the formula for each.",
      "Compute all four measures from a single retrieval scenario and interpret what each reveals about system behaviour.",
      "Apply a pairwise consistency formula to two term sets and explain why consistency is a diagnostic rather than a target.",
      "Analyze observed error patterns to locate the defect — vocabulary, policy, training, or system — that produced them.",
      "Critically evaluate how machine indexers alter the meaning of consistency and what quality assurance still requires.",
    ],
    content: `Precision and recall describe a system from the user's side; a second family of measures describes it from the operator's side. **Fallout** and **silence** expose how much of the collection was wasted or hidden, **noise** describes the quality of what the user was handed, and **inter-indexer consistency** measures the reliability of the human decisions that produced the postings in the first place. Together they turn vague dissatisfaction — "this catalogue is untidy" — into locatable, fixable evidence.

[[diagram:ch16-noise-silence]]

## Fallout, Noise, and Silence

Working from the same contingency table as chapter 14 (a relevant retrieved, b non-relevant retrieved, c relevant not retrieved, d non-relevant not retrieved):

1. **Noise = b / (a + b)** — the proportion of retrieved documents that are irrelevant; the complement of precision.
2. **Silence = c / (a + c)** — the proportion of relevant documents never retrieved; the complement of recall.
3. **Fallout = b / (b + d)** — the proportion of all non-relevant documents in the collection that were wrongly retrieved.

The distinctions are substantive. Noise is a statement about the **result list**; silence is a statement about the **collection**; fallout is a statement about the **system's selectivity**, independent of how many relevant documents happen to exist. Because the denominator of fallout is large whenever the collection is large, fallout can look excellent while noise is unacceptable — an effect the worked example below makes concrete.

## Worked Example

Collection of 1,000 documents; judged reference set of 200 relevant; the system returns 80 documents, 60 of them relevant.

1. a = 60, b = 20, c = 140, d = 780.
2. **Precision** = 60/80 = 75 per cent; **noise** = 20/80 = 25 per cent — one document in four handed to the user was waste.
3. **Recall** = 60/200 = 30 per cent; **silence** = 140/200 = 70 per cent — seven in ten relevant documents never appeared.
4. **Fallout** = 20/800 = 2.5 per cent — the system rejected 97.5 per cent of the junk in the collection.

Interpretation: the system is selective (low fallout) and clean-ish (reasonable precision) but seriously incomplete (high silence). The defect is not over-retrieval; it is failure to reach relevant documents, which points to vocabulary gap, low exhaustivity, or an over-restrictive request formulation rather than to an over-permissive ranking. Diagnosis follows measurement: **treat high silence as an indexing and vocabulary problem, and high noise as a specificity and aboutness problem.**

## Inter-Indexer Consistency

**Inter-indexer consistency** is the extent to which two or more indexers, working independently on the same document under the same instructions, assign the same terms. For two indexers with term sets of n1 and n2 terms, of which m are shared, a common pairwise formulation is:

**Consistency = 2m / (n1 + n2)**

Worked: indexer A assigns six terms, indexer B assigns five, and three are common.

1. 2 × 3 = 6.
2. 6 / (6 + 5) = 6/11 = 0.545, that is 54.5 per cent agreement.

For more than two indexers the pairwise values are computed and averaged, and the averaging method must be reported alongside the figure.

Three cautions govern interpretation:

- **Consistency is not accuracy.** Two indexers can agree perfectly on a wrong term; a high figure shows that instructions are being followed, not that retrieval will succeed.
- **Exhaustivity and specificity depress consistency.** Agreement is high on principal subjects and falls as more secondary concepts and narrower terms are required — the documented pattern behind most low scores.
- **Trivially short term sets inflate it.** If both indexers assign only the single obvious heading, agreement is guaranteed and nothing has been learned.

> Diagnostic rule: low consistency on one specific term, with acceptable consistency elsewhere, indicates a vocabulary defect — an ambiguous scope note or an undefined boundary — while uniformly low consistency indicates a policy or training defect.

## From Measurement to Diagnosis

A short error catalogue for practice:

- **High noise with normal fallout**: terms are too general or mentions are being indexed; remedy lies in specificity and aboutness discipline.
- **High silence with normal precision**: exhaustivity too low, or synonyms and local variants absent from the vocabulary; remedy lies in term collection and USE references.
- **Low consistency concentrated in a subfield**: the vocabulary is thin for that area, or the indexing policy does not cover it.
- **Low consistency spread across the file**: training, workflow, or policy defect rather than a vocabulary defect.
- **All measures acceptable but users still complain**: the reference set or the request modelling is wrong — evaluate the questions being asked, not only the postings.

## Quality Assurance in Practice

A workable quality programme has four parts: a written indexing policy (chapter 13); periodic double-indexing of a random sample with the pairwise figure computed and trends tracked; a defect log in which each disagreement is classified as vocabulary, policy, or training; and a feedback loop from search logs and reference-desk questions into vocabulary revision. Targets should be set as trends rather than as universal constants, because consistency legitimately varies with collection, exhaustivity, and subject difficulty.

## Implications for Digital Libraries and AI Practice

Machine indexers change the interpretation rather than the need for these measures. Within one model version a system is perfectly consistent with itself — it will assign the same terms to the same document every time — so consistency as an agreement measure becomes uninformative, while noise, silence, and fallout become more important than ever because no one notices the machine's errors. Two further effects deserve attention: model upgrades silently re-index nothing until records are reprocessed, producing an internally inconsistent hybrid file; and language models trained elsewhere impose vocabulary that local users do not recognize.

The practical response is to run the same small evaluation before and after any model or ranking change — a miniature test collection (chapter 15), a fixed request set, and reported noise, silence, and fallout — and to retain human double-indexing as the check on subject analysis itself. For small teams in Nigerian and other African university libraries, sample-based double indexing of a few dozen records per quarter is affordable, evidential, and sufficient to detect vocabulary defects before they propagate through a whole collection.

## Chapter Summary

- Noise is the irrelevant proportion of results; silence is the missing proportion of relevant documents; fallout is the wrongly retrieved proportion of all non-relevant documents.
- Fallout's large denominator can flatter a system whose noise is nonetheless unacceptable.
- Pairwise consistency = 2m/(n1+n2); consistency measures agreement, not correctness, and is depressed by high exhaustivity and high specificity.
- Every measure earns its keep only when it is used to locate a defect in vocabulary, policy, training, or system design.
- Machine indexers are self-consistent but version-drifting, which shifts quality assurance toward outcome measures and periodic re-evaluation.`,
    keyTerms: [
      { term: "Noise", definition: "The proportion of retrieved documents that are irrelevant to the request, b divided by a plus b; the complement of precision." },
      { term: "Silence", definition: "The proportion of relevant documents in the reference set that are never retrieved, c divided by a plus c; the complement of recall." },
      { term: "Fallout", definition: "The proportion of all non-relevant documents in a collection that are wrongly retrieved, b divided by b plus d." },
      { term: "Inter-indexer consistency", definition: "The degree of agreement among independent indexers assigning terms to the same document under the same instructions." },
      { term: "Pairwise consistency", definition: "Agreement between two indexers computed as twice the number of shared terms divided by the sum of terms assigned by each." },
      { term: "Double indexing", definition: "The quality-assurance practice of indexing a sample of documents independently twice in order to measure consistency and locate defects." },
      { term: "Error classification", definition: "The assignment of each observed indexing disagreement to a cause — vocabulary, policy, training, or system — so that the correct remedy is applied." },
      { term: "Quality assurance programme", definition: "The combination of written policy, sampled double indexing, a defect log, and feedback from search behaviour used to maintain indexing reliability." },
    ],
    reviewQuestions: [
      "Define fallout, noise, and silence, giving the formula for each and stating which complement pair each belongs to.",
      "Using a collection of 2,000 documents with 250 judged relevant, of which a system retrieves 100 of which 70 are relevant, compute precision, recall, noise, silence, and fallout.",
      "Interpret the figures in question 2: is the principal defect over-retrieval or under-retrieval, and which remedy does that indicate?",
      "Two indexers assign eight and six terms respectively with four in common. Compute their pairwise consistency and state two reasons the figure may be misleading.",
      "Diagnose each of these patterns and prescribe a remedy: (a) consistency high overall but one term shows repeated disagreement; (b) silence high with precision normal; (c) noise high with fallout low.",
      "Why does consistency become an uninformative measure for a machine indexer, and what should replace it in a quality programme?",
      "Design a quarterly quality-assurance plan for a two-person cataloguing unit, specifying sample size logic, measures, and reporting.",
    ],
    furtherReading: [
      "Lancaster, F.W. (1998). Indexing and Abstracting in Theory and Practice. 2nd ed. Urbana-Champaign: University of Illinois Graduate School of Library and Information Science.",
      "Salton, G. and McGill, M.J. (1983). Introduction to Modern Information Retrieval. New York: McGraw-Hill.",
      "Tague-Sutcliffe, J. (1996). Measuring Information: An Information Services Perspective. New York: Academic Press.",
      "Foskett, A.C. (1982). The Subject Approach to Information. 4th ed. London: Clive Bingley.",
      "Manning, C.D., Raghavan, P. and Schütze, H. (2008). Introduction to Information Retrieval. Cambridge: Cambridge University Press.",
    ],
    diagramId: "ch16-noise-silence",
  },
  {
    number: 17,
    module: "Module 5: Abstracting",
    title: "Abstracting Fundamentals and Types of Abstracts",
    objectives: [
      "Define an abstract and state its three functions as surrogate, selection tool, and indexing source.",
      "Distinguish indicative, informative, critical, and slanted abstracts by purpose, content, and appropriate use.",
      "Analyze a research article for the elements an abstract must carry and decide which abstract type fits its genre.",
      "Apply quality criteria — accuracy, self-containment, objectivity, concision — to revise a defective abstract.",
      "Critically evaluate extractive and model-generated abstracting against the professional requirements of the field.",
    ],
    content: `An abstract is a surrogate that a reader trusts before consulting the original: a short, self-contained statement of what a document contains, written so that a decision to read, cite, or ignore can be made without the document in hand. Because it plays that role for selection, for current awareness, and for subject access, its form must be matched to its function — which is why the profession distinguishes several abstract types rather than treating length as the only variable. This chapter defines the functions, sets out the recognized types with examples, states the quality criteria, and follows the shift from human abstracting to machine assistance.

[[diagram:ch17-abstract-types]]

## Functions of the Abstract

Three functions, sometimes in tension:

1. **Selection** — the reader decides whether the original is worth obtaining. This function demands faithfulness: an abstract that overstates findings steals the reader's decision.
2. **Accessibility and indexing** — abstracts supply the text from which indexing languages, discovery-layer snippets, and full-text search engines draw their evidence; abstracts themselves are often searchable fields.
3. **Surrogate reading** — for material that cannot be obtained, the abstract stands as the available record, which is why standards require self-containment.

A fourth, service function appears in current awareness: in a bulletin or alert, the abstract is the only contact a user may have with an item for months.

## Types of Abstracts

Types are distinguished by what they report, not by how many words they use:

- **Indicative abstract**: states the scope, subject, and approach of the document without reporting its results. It answers *what does this deal with?* Appropriate for reviews, monographs, proceedings, and theoretical or narrative works where there is no single finding to report. It is short, safe, and useless to anyone seeking the answer itself.
- **Informative abstract**: reports the purpose, method, principal results, and conclusions — the findings stand in for the document. It answers *what was found?* Appropriate for empirical research articles, reports, and theses, and it is the type most journals require.
- **Critical abstract**: adds an evaluation of the method, reliability, or significance of the work. It answers *how good is this?* It is legitimate only where the publishing service has an explicit mandate to evaluate — abstracting journals of the evaluative kind — and is otherwise a breach of objectivity.
- **Slanted abstract**: emphasizes the aspects of the document that interest a particular audience while omitting others. It is legitimate where the service declares its slant (an index for practitioners, say) and misleading where it does not.

A further structural variant, the **structured abstract**, divides the informative abstract into labelled elements — background, method, results, conclusions — which improves scanning and has become standard in clinical and social-science journals. Structure is an organizational choice; it does not change the informative type.

> Form note: an abstract is not an introduction, not a first paragraph copied from the paper, and not a list of keywords. It is a compressed account of the whole document.

## Elements of an Abstract

Across ISO 214 and ANSI/NISO Z39.14, and in journal instructions generally, the informative abstract carries a stable element set:

1. **Purpose** — the problem or objective.
2. **Method** — design, data, sample, procedure.
3. **Results** — principal findings, including important figures where they exist.
4. **Conclusions** — implications or recommendations.
5. **Optional elements** — scope qualifiers, document type, and the author's stated limits.

The indicative abstract carries elements 1, 2, and 5 only. Elements are supplied in a fixed order, in the third person, with no reference to the document itself: phrasings such as see Table 2 or as discussed below are prohibited because they break self-containment.

## Worked Example: One Document, Two Types

Hypothetical study: *Adoption of improved maize varieties among smallholder farmers in Ogun State, Nigeria.*

**Indicative (about sixty words):** This study examines the adoption of improved maize varieties among smallholder farmers in Ogun State, Nigeria. It reviews the factors associated with adoption decisions and the patterns of variety choice across farming households, and discusses the implications of these patterns for agricultural extension policy in the region. The study draws on the empirical literature concerning technology diffusion in smallholder agriculture.

**Informative (about a hundred words):** This study investigates determinants of adoption of improved maize varieties among 320 smallholder farmers in Ogun State, Nigeria, using a structured questionnaire and multi-stage sampling. Adoption decisions are modelled as a function of household socioeconomic characteristics, extension contact, and seed availability. Results indicate that extension contact, certified seed access, and farmer education are positively associated with adoption, while distance to input markets is negatively associated. The paper concludes that strengthening extension delivery and last-mile seed distribution would raise adoption rates, and recommends targeted support for remotely located farming communities.

The indicative version would let a reader classify the item but never answer the substantive question; the informative version answers it but commits the abstractor to exactness — every figure and every causal claim must match the source. Note also what both versions omit: instruments, literature review detail, and acknowledgements.

## Quality Criteria

- **Accuracy**: every statement traceable to the source; numbers copied, not rounded.
- **Self-containment**: understandable alone, with abbreviations expanded on first use and no internal references.
- **Objectivity**: findings reported as findings; no evaluative adjectives unless the type licenses them.
- **Concision**: every sentence earns its place; the shortest abstract that carries the required elements.
- **Coherence**: a readable progression from purpose to conclusion, not a string of topic sentences.

## Machine Abstracting and AI Practice

The two classical automated approaches are **extractive** selection, associated with Luhn's work on automatic abstracting, which ranks sentences by statistical significance and prints them verbatim, and rule-based weighting schemes of the Edmundson type, which score sentences by cue phrases, title overlap, and position. Both guarantee faithfulness by construction — a copied sentence cannot misreport a result — at the cost of fluency and coherence.

Large language models invert that trade: they produce fluent, well-formed prose that may quietly alter a number, strengthen a correlation into a cause, or invent a limitation the paper never stated. The professional controls are therefore procedural: generate at most a draft (step 7 of chapter 19), verify element by element against the source (step 8), and never release a figure that has not been located in the original. In African journal publishing, where editorial boards often rely on a small pool of abstractors, this verification step is also the cheapest available defence against the reputational cost of a published abstract that misstates its own article.

## Chapter Summary

- The abstract serves selection, indexing and accessibility, and surrogate reading; faithfulness is the non-negotiable condition of all three.
- Indicative reports scope, informative reports findings, critical evaluates, slanted emphasizes for a declared audience.
- Informative abstracts carry purpose, method, results, and conclusions in fixed order, third person, without self-reference.
- Accuracy, self-containment, objectivity, concision, and coherence are the standing quality criteria.
- Extractive methods guarantee faithfulness; generative models guarantee fluency — verification is what reconciles them.`,
    keyTerms: [
      { term: "Abstract", definition: "A concise, self-contained summary of a document's content prepared to enable selection, indexing, and surrogate reading without consulting the original." },
      { term: "Indicative abstract", definition: "An abstract that states the subject, scope, and approach of a document without reporting its specific results." },
      { term: "Informative abstract", definition: "An abstract that reports the purpose, method, principal results, and conclusions of a document so that findings are available from the abstract alone." },
      { term: "Critical abstract", definition: "An abstract that includes the abstractor's evaluation of a work's method, reliability, or significance, permitted only where an evaluative mandate is declared." },
      { term: "Slanted abstract", definition: "An abstract that emphasizes aspects of a document relevant to a particular audience, legitimate only when the slant is disclosed." },
      { term: "Structured abstract", definition: "An informative abstract divided into labelled elements such as background, method, results, and conclusions to aid scanning." },
      { term: "Self-containment", definition: "The requirement that an abstract be intelligible without the original document, with abbreviations expanded and no internal cross-references." },
      { term: "Faithfulness", definition: "The correspondence between every statement in an abstract and the source document, including figures, causal claims, and limitations." },
      { term: "Extractive summarization", definition: "Automatic abstracting by selecting and printing existing sentences ranked by statistical significance, preserving wording exactly." },
    ],
    reviewQuestions: [
      "Define the abstract and state its three principal functions, noting which condition each function depends on.",
      "Distinguish indicative, informative, critical, and slanted abstracts by the question each answers, and give an appropriate genre for each.",
      "List the elements of an informative abstract and explain why an abstract must not refer to the source document's tables.",
      "Write both an indicative and an informative abstract of about sixty and a hundred words respectively for: *Mobile money and household resilience to income shocks in Nairobi County*.",
      "Identify three defects in this abstract sentence: This paper briefly discusses some interesting findings which prove that the intervention was highly successful.",
      "Why is a slanted abstract acceptable for a practitioner bulletin but deceptive in a general indexing service?",
      "Critically evaluate whether an abstract produced by a language model can satisfy the faithfulness requirement without human verification. Give two concrete failure modes.",
    ],
    furtherReading: [
      "ANSI/NISO Z39.14, Abstracts. Bethesda, MD: NISO Press.",
      "ISO 214:1976, Documentation — Abstracts for documentation and related documents. Geneva: International Organization for Standardization.",
      "Borko, H. and Bernier, C.L. (1975). Abstracting Concepts and Methods. New York: Academic Press.",
      "Luhn, H.P. (1958). The Automatic Creation of Literature Abstracts. IBM Journal of Research and Development, 2(2), 159-165.",
      "Lancaster, F.W. (1998). Indexing and Abstracting in Theory and Practice. 2nd ed. Urbana-Champaign: University of Illinois Graduate School of Library and Information Science.",
    ],
    diagramId: "ch17-abstract-types",
  },
  {
    number: 18,
    module: "Module 5: Abstracting",
    title: "ANSI/NISO Z39.14 Standards for Abstract Preparation",
    objectives: [
      "State the scope of ANSI/NISO Z39.14 and distinguish it from ISO 214:1976 and from ANSI/NISO Z39.19.",
      "Analyze the qualities the standard requires of an abstract — accuracy, self-containment, objectivity, concision, coherence.",
      "Apply a standards-based checklist to audit a draft abstract and revise it to compliance.",
      "Construct an informative abstract of a specified length that carries every required element in the correct order.",
      "Critically evaluate how automated abstract generation is assessed against the standard's requirements.",
    ],
    content: `Standards matter in abstracting because the abstract is a contractual document: readers, indexing services, and citation databases all rely on it to behave predictably. ANSI/NISO Z39.14, *Abstracts*, is the United States national guideline for preparing and evaluating abstracts; ISO 214:1976 is its international counterpart. Both describe purpose, types, required elements, and the qualities an abstract must exhibit, and both are short enough to be applied as an actual checklist — which is how this chapter uses them.

[[diagram:ch18-niso-z3914]]

## Scope and Position of the Standard

Z39.14 addresses abstracts as documents: why they are written, for whom, of what types, with which elements, and under what quality requirements. It does not govern vocabulary (that is ANSI/NISO Z39.19), subject analysis (ISO 5963), or terminology in thesauri (ISO 25964). Its practical authority appears in three places: journal instructions to authors, the procedures of abstracting and indexing services, and the specifications a library or repository writes for its own records.

> Standards note: Z39.14 governs abstracts; ISO 214 states the international requirements for abstracts; Z39.19 governs controlled vocabularies; ISO 5963 governs the subject-analysis procedure. Never cross-quote these numbers.

## Required Qualities

The standard's requirements can be stated as five tests:

1. **Accuracy (faithfulness)** — the abstract represents the content of the document and nothing more: findings as reported, figures as printed, conclusions at the strength the author gave them.
2. **Self-containment** — it is intelligible without the original: abbreviations and acronyms expanded on first use, no references to figures, tables, sections, or numbered equations of the source, and no undefined specialist notation.
3. **Objectivity** — it reports rather than judges; evaluative language is excluded unless the abstract type declares an evaluative mandate.
4. **Concision** — it carries the required elements in the fewest words that preserve them, typically a few sentences for an indicative abstract and, in common practice for research articles, somewhere in the range of a hundred to two hundred and fifty words for an informative one. Length is governed by the element set, not by a quota: an abstract is as long as it must be and no longer.
5. **Coherence and readability** — it is a continuous piece of prose in the third person, logically ordered from purpose through method to conclusions, not a list of sentences copied from different sections.

## Types and Elements Recognized

The standard's typology matches chapter 17: **indicative** abstracts report subject and scope; **informative** abstracts report results; combined forms exist where a document needs both. The element order for an informative abstract is fixed in practice:

1. Purpose or objective of the work.
2. Method, design, data, or scope of treatment.
3. Principal results, with key quantitative findings where present.
4. Conclusions or recommendations.
5. Optional scope and document-type statements.

An abstract that omits results while claiming to be informative is non-compliant regardless of its elegance.

## Worked Example: A Compliance Audit

Draft submitted for an abstracting service:

> In this article the authors discuss various factors affecting the adoption of improved seed in West Africa. As shown in Table 3, the results were very significant. Several interesting recommendations are made, and the methodology followed international best practice.

**Audit against the five qualities:**

1. **Accuracy** — fails: very significant reports no result and may overstate the finding; the reader cannot tell what was measured.
2. **Self-containment** — fails: Table 3 belongs to the source and is unavailable to the abstract's reader.
3. **Objectivity** — fails: interesting is an evaluation.
4. **Concision** — passes trivially, but by omission rather than compression.
5. **Coherence** — partial: the sequence purpose, method, results, conclusions is intended but no element is actually supplied.

**Revised draft:** This article examines factors affecting the adoption of improved seed by smallholder farmers in West Africa. Data were collected through household surveys in three countries and analysed using multivariate regression. Extension contact and access to credit were positively associated with adoption, while seed price was negatively associated. The authors recommend bundling extension advice with input credit to raise adoption among smallholder farmers.

The revision adds the missing elements, removes the source-dependent reference, and eliminates the evaluative adjective — the same three moves every audit performs.

## Worked Example: Length Budgeting

For an informative abstract budgeted at 150 words: purpose 25 words, method 40, results 60, conclusions 25. Where results must be cut, the abstract stops being informative and should be re-declared as indicative rather than silently emptied of findings. Budgeting by element is the professional method; budgeting by word count alone produces abstracts that are complete-sounding and uninformative.

## Implications for Digital Libraries and AI Practice

Machine-generated abstracts are assessed with the same checklist, and the checklist reveals where they fail: self-containment is usually satisfied because models expand abbreviations well, coherence is typically excellent, but accuracy is the failure point — invented figures, strengthened claims, and conclusions the source does not support. A practical pipeline therefore generates, then audits element by element, then compares every number against the source before release.

For journal editors and repository managers in Nigeria and elsewhere, the standard supplies something equally valuable: a citable basis for author instructions. Requiring structured informative abstracts of a stated range, with the element set declared, improves submissions measurably more than asking authors to be concise and clear — and it gives indexers consistent text from which to harvest searchable terms.

## Chapter Summary

- Z39.14 governs the preparation and evaluation of abstracts; ISO 214 is the international counterpart; neither governs vocabularies or subject analysis.
- Five qualities define compliance: accuracy, self-containment, objectivity, concision, coherence.
- Informative abstracts carry purpose, method, results, conclusions in that order; indicative abstracts carry purpose, method, and scope.
- Audit proceeds by locating the defect — unsupported claim, source-dependent reference, evaluative language — and rewriting only that element.
- Automated generation satisfies form easily and accuracy poorly, which is why verification remains a human, standards-referenced step.`,
    keyTerms: [
      { term: "ANSI/NISO Z39.14", definition: "The United States national guideline governing the purpose, types, elements, qualities, and preparation of abstracts." },
      { term: "ISO 214", definition: "The international standard specifying requirements for abstracts accompanying documentation and related documents." },
      { term: "Faithfulness", definition: "The requirement that an abstract's statements, figures, and claim strengths correspond exactly to those of the source document." },
      { term: "Self-containment", definition: "The quality of being fully intelligible without access to the original, including expanded abbreviations and no source-internal references." },
      { term: "Objectivity", definition: "The reporting of content without evaluative judgment, unless the declared abstract type permits evaluation." },
      { term: "Element order", definition: "The conventional sequence of purpose, method, results, and conclusions in an informative abstract." },
      { term: "Compliance audit", definition: "A systematic check of a draft abstract against the standard's qualities and element requirements, followed by targeted revision." },
      { term: "Word budget", definition: "The allocation of an abstract's allowed length across elements so that results are not sacrificed to brevity." },
      { term: "Structured abstract", definition: "An abstract presented under labelled element headings to improve scanning and enforce element completeness." },
    ],
    reviewQuestions: [
      "State the scope of ANSI/NISO Z39.14 and distinguish it from ISO 214:1976 and ANSI/NISO Z39.19-2005 (R2010).",
      "List and explain the five qualities the standard requires, giving for each one concrete defect that would breach it.",
      "Audit this sentence against the qualities: This impressive study, as illustrated in Figure 5, proves that the programme was a great success. Produce a compliant rewrite.",
      "Write a 150-word informative abstract for a stated research article of your choice, marking the word allocation for purpose, method, results, and conclusions.",
      "When may an abstract legitimately be indicative rather than informative? State the consequence for a reader seeking the findings.",
      "Design an author-instruction note of no more than eight lines for a Nigerian academic journal, grounded in the standard's requirements.",
      "Critically evaluate which of the five qualities a language model reliably satisfies and which it does not, and specify the verification procedure you would require before publication.",
    ],
    furtherReading: [
      "ANSI/NISO Z39.14, Abstracts. Bethesda, MD: NISO Press.",
      "ISO 214:1976, Documentation — Abstracts for documentation and related documents. Geneva: International Organization for Standardization.",
      "Borko, H. and Bernier, C.L. (1975). Abstracting Concepts and Methods. New York: Academic Press.",
      "Lancaster, F.W. (1998). Indexing and Abstracting in Theory and Practice. 2nd ed. Urbana-Champaign: University of Illinois Graduate School of Library and Information Science.",
      "Rowley, J. and Hartley, R. (2008). Organizing Knowledge: An Introduction to Managing Access to Information. 4th ed. Aldershot: Ashgate.",
    ],
    diagramId: "ch18-niso-z3914",
  },
  {
    number: 19,
    module: "Module 5: Abstracting",
    title: "The 8-Step Systematic Abstracting Process",
    objectives: [
      "Sequence the eight steps of systematic abstracting and state the purpose of each.",
      "Apply reading-for-structure techniques to extract purpose, method, results, and conclusions from a research article.",
      "Draft an informative abstract that carries every extracted element without source-dependent references.",
      "Execute a verification pass against the original, diagnosing and repairing element-level defects.",
      "Critically evaluate where language-model assistance can enter the workflow and where it must be excluded.",
    ],
    content: `Abstracting looks easy until it is audited. The failure pattern is consistent: an abstractor reads, forms an impression, and writes from memory, so numbers drift, causal claims strengthen, and one element disappears entirely. The remedy is procedural — a fixed sequence that separates extraction from composition and composition from verification. The eight steps below distil the requirements of ISO 214 and ANSI/NISO Z39.14 into a workflow that can be taught, supervised, and audited.

[[diagram:ch19-abstracting-workflow]]

## Steps 1-3: Reading and Defining

1. **Read the document thoroughly and analyze its structure.** Do not read for interest; read for elements. Skim to locate the abstract, introduction, method, results, tables, and conclusion, then read those sections in full. Note that the author's own abstract is a starting point, not a source: it may be incomplete, promotional, or wrong.
2. **Identify the core subject and the problem statement.** In one sentence, write what the document is about and what question it addresses. If this sentence cannot be written, the abstractor has not yet understood the document, and writing now will produce paraphrase rather than summary.
3. **Determine the purpose and scope.** Record the objective, the population or corpus examined, the period covered, and the boundaries the author set. Scope qualifiers prevent the abstract from implying wider coverage than the study has.

Steps 1 to 3 are where accuracy is won. Everything after this point is transcription of decisions already made.

## Steps 4-6: Extracting

4. **Extract the methodological framework**: design, data sources, sampling procedure, instruments, and analytical technique. Record these as statements of fact — a cross-sectional survey of 400 undergraduates — not as adjectives such as a rigorous survey.
5. **Record the major findings**, including the principal quantitative results where the document reports them. Copy figures exactly; note whether a relationship reported is correlational or causal.
6. **Note the conclusions and recommendations**, preserving their strength. If the authors write that results suggest, the abstract must not write that they demonstrate.

A working technique is an element sheet: four headings — purpose, method, results, conclusions — filled from the text with page references, so that step 8 can verify every claim in seconds.

## Steps 7-8: Drafting and Verifying

7. **Draft concisely.** Write the abstract as continuous third-person prose in element order: purpose, method, results, conclusions. Expand abbreviations on first use, remove source-internal references to tables and sections, eliminate background and literature review except where scope requires one clause, and meet the agreed word budget. Never begin from the paper's own first paragraph.
8. **Review against the source and the standard.** Read the abstract beside the element sheet and check: every element present; every figure identical; every claim at the source's strength; no evaluative language; no reference to the original's internal apparatus; abbreviations expanded; self-contained if read alone. Then read it aloud — coherence defects announce themselves.

> Process rule: step 8 is not editing for style. It is verification for fact. Style revision may follow, but only after every sentence has been checked against the source.

## Worked Example

Document: *Digital literacy skills and academic performance of undergraduates in selected universities in South-West Nigeria.*

**After steps 1-6**, the element sheet records: purpose — to determine the relationship between digital literacy skills and academic performance; method — survey of 400 undergraduates in three universities, self-administered questionnaire, grade point average as the performance measure; results — positive association between skill dimensions and grade point average, strongest for information-search skill; conclusions — digital literacy programmes should be embedded in first-year orientation.

**Step 7 draft:** This study examined the relationship between digital literacy skills and academic performance among 450 undergraduates in three universities in South-West Nigeria. Data were collected using a structured questionnaire, and the results shown in Table 2 demonstrate that digital literacy therefore improves academic performance. The study recommends the adoption of SLDL modules across universities.

**Step 8 audit findings:**

1. **Figure error**: 450 does not appear in the source; the sample was 400. Corrected.
2. **Causal overstatement**: the design was correlational; therefore improves converts association into causation. Corrected to was positively associated with.
3. **Broken self-containment**: Table 2 is unavailable to the abstract's reader. Removed.
4. **Undefined abbreviation**: SLDL expanded to the full programme name on first use.

**Released abstract:** This study examined the relationship between digital literacy skills and academic performance among 400 undergraduates in three universities in South-West Nigeria. Data were collected through a self-administered questionnaire, and grade point average was used as the performance measure. Digital literacy skill dimensions were positively associated with academic performance, with the strongest association observed for information-search skill. The authors recommend embedding digital literacy modules in first-year orientation programmes.

Four defects, all introduced in composition and all caught by the same verification pass.

## Common Failure Modes

- **Copying the introduction**: produces an abstract of intentions rather than a report of results.
- **Memory drift on figures**: the commonest single defect and the easiest to prevent with an element sheet.
- **Claim strengthening**: suggests becomes shows, and correlational becomes causal.
- **Element omission**: method dropped for brevity, so the reader cannot judge the evidence.
- **Source-dependent phrasing**: as discussed above, or see Table 1, or this chapter.
- **Evaluative language**: comprehensive, groundbreaking, interesting.

## Implications for Digital Libraries and AI Practice

Language models fit the workflow at exactly one point: as an accelerator for step 7, producing a candidate draft from supplied elements. They must not control steps 1 to 6, because a model cannot be held to the source, and they cannot substitute for step 8, because verification requires locating each claim in the original — precisely the operation a generative system cannot perform on its own output. Institutions that reverse the order, generating first and checking never, publish abstracts that are fluent and occasionally fictional.

Operationally, the element sheet is also the unit of automation: elements extracted deterministically from structured sections of a paper can be handed to a drafting model with the numbers pinned, and the audit then becomes a comparison rather than a hunt. For journals in Nigeria and across Africa adopting structured abstracts, the eight steps map directly onto the labelled headings their author guidelines already require, which makes the procedure a practical editorial policy rather than an abstract exercise.

## Chapter Summary

- The eight steps separate reading (1-3), extraction (4-6), drafting (7), and verification (8).
- An element sheet built during extraction converts verification from a search into a comparison.
- Composition is where defects enter: figure drift, claim strengthening, broken self-containment, undefined abbreviations.
- Step 8 checks fact before style and is measured against both the source and Z39.14.
- Models may draft at step 7 with pinned elements; they may not define, extract, or verify.`,
    keyTerms: [
      { term: "Element sheet", definition: "A working record listing purpose, method, results, and conclusions with source references, used to draft and later verify an abstract." },
      { term: "Reading for structure", definition: "The technique of locating a document's sections by function rather than reading linearly, so that elements can be extracted efficiently." },
      { term: "Purpose statement", definition: "A one-sentence account of the problem a document addresses and the objective it pursues, written before any prose is drafted." },
      { term: "Claim strength", definition: "The degree of certainty an author attaches to a finding, which an abstract must reproduce without strengthening or weakening it." },
      { term: "Verification pass", definition: "The step 8 comparison of every statement and figure in a draft abstract against the source document and the standard's requirements." },
      { term: "Self-containment check", definition: "The test that the abstract can be understood alone, with abbreviations expanded and no references to the original's internal apparatus." },
      { term: "Word budget", definition: "The planned allocation of an abstract's length across required elements, set before drafting to prevent the omission of results." },
      { term: "Abstracting procedure", definition: "The documented, repeatable sequence of reading, extracting, drafting, and verifying by which an abstract is produced to standard." },
    ],
    reviewQuestions: [
      "List the eight steps in order and state what is decided in each of steps 1, 2, and 8.",
      "Why must drafting begin from an element sheet rather than from the paper's own abstract or first paragraph?",
      "Take a research article you have read and complete an element sheet for it: purpose, method, results, conclusions, with page references.",
      "Using your element sheet, draft a 150-word informative abstract and then perform a verification pass, listing each defect you find.",
      "Identify every defect in this draft sentence: The groundbreaking study of 750 students, as detailed in Table 4, conclusively proves that social media causes failing grades.",
      "Which of the eight steps can a language model perform responsibly today, and which cannot be delegated? Justify each assignment.",
      "Design an eight-step procedure note for a serials abstracting unit, specifying where a second reader's check is required.",
    ],
    furtherReading: [
      "ISO 214:1976, Documentation — Abstracts for documentation and related documents. Geneva: International Organization for Standardization.",
      "ANSI/NISO Z39.14, Abstracts. Bethesda, MD: NISO Press.",
      "Borko, H. and Bernier, C.L. (1975). Abstracting Concepts and Methods. New York: Academic Press.",
      "Lancaster, F.W. (1998). Indexing and Abstracting in Theory and Practice. 2nd ed. Urbana-Champaign: University of Illinois Graduate School of Library and Information Science.",
      "Luhn, H.P. (1958). The Automatic Creation of Literature Abstracts. IBM Journal of Research and Development, 2(2), 159-165.",
    ],
    diagramId: "ch19-abstracting-workflow",
  },
  {
    number: 20,
    module: "Module 5: Abstracting",
    title: "Current Awareness Services (CAS) and Abstracting Bulletins",
    objectives: [
      "Define current awareness services and distinguish bulletin, display, routing, and selective dissemination forms.",
      "Analyze the construction of an SDI profile and evaluate a completed alerting run using precision and recall.",
      "Explain why the abstract, rather than the title or citation, is the enabling element of an awareness service.",
      "Design a current awareness service appropriate to a specified community, collection, and delivery environment.",
      "Critically evaluate how algorithmic recommendations and generated digests have changed, and not changed, the service.",
    ],
    content: `Awareness services answer a different question from a catalogue: not *what exists on this subject?* but *what has appeared since I last looked?* Because publication lag, disciplinary growth, and sheer volume make manual scanning impossible, libraries have long supplied the answer in packaged form — abstracting bulletins, current-contents displays, routing services, and selective dissemination of information. The abstract is what makes these services economical: a reader can triage a dozen items from their abstracts without fetching a single document. This chapter defines the service forms, works an alerting run numerically, and carries the design into the age of algorithmic feeds.

[[diagram:ch20-cas-sdi]]

## Current Awareness Services: Definition and Forms

A **current awareness service (CAS)** is any organized provision of information about new or recently acquired publications, delivered to a defined community at intervals short enough to be useful. The classical forms:

- **Bulletin or checklist**: a printed or emailed list of newly arrived or newly published items, arranged by class, subject, or date.
- **Abstracting bulletin**: the same, but with an abstract attached to each citation, so that selection can occur from the service itself.
- **Display and table-of-contents service**: contents pages of selected journals displayed in a reading room, or reproduced and circulated.
- **Routing service**: journals or reports physically circulated among named readers in a fixed order.
- **Selective dissemination of information (SDI)**: a standing profile of a user's interests matched against each batch of new records, with only the matches sent.
- **Citation alert**: notification that a specific work or author has been cited since the last run.

The distinction between general and selective services is fundamental: **CAS broadcasts; SDI filters.** Both are push services — the library initiates delivery — as against pull services, in which the user searches on demand.

## From Bulletins to Profile-Based SDI

SDI, a term associated with Hans Peter Luhn's work on information dissemination, formalizes selective awareness in four operations:

1. **Profile construction**: translate a user's interests into a query of terms, class numbers, authors, and journals. A profile is a standing request that must be periodically re-approved, because interests drift.
2. **Acquisition and indexing**: new records enter the system with controlled terms already assigned by the indexing service or abstracting bulletin.
3. **Matching**: each new record is compared with each profile; matches are queued.
4. **Dissemination and feedback**: matches are sent, and the user's responses — keep, discard, too broad, too narrow — revise the profile. Without this feedback loop the service decays into a spam channel.

Abstracting bulletins historically supplied the raw material: their disciplined indexing meant that a profile built on one bulletin's vocabulary could be run against every subsequent issue without re-analysis.

## Worked Example: An SDI Run

A departmental profile is run against a monthly batch of 500 newly indexed records. An assessment of the batch, made independently, indicates that 60 records are genuinely relevant to the profile's subject.

1. The system matches and sends **40** records.
2. The recipient judges **25** of them useful.
3. **Precision of the alert** = 25/40 = 62.5 per cent — about five in eight items sent were worth sending.
4. **Recall against the batch** = 25/60 = 41.7 per cent — more than half the relevant material never arrived.
5. **Silence** = 35/60 = 58.3 per cent; **noise** = 15/40 = 37.5 per cent.
6. Non-relevant records in the batch = 440, of which 15 were sent: **fallout** = 15/440 = 3.4 per cent.

Diagnosis: fallout is low and precision respectable, but recall is poor, so the profile is too narrow — synonyms and neighbouring class numbers are missing rather than the terms being wrong. The remedy is to widen the profile with USE-mapped variants and adjacent classes, then re-run and watch whether precision collapses. An alerting service is optimized like any retrieval system (chapters 14-16), and it should be evaluated batch by batch rather than assumed to work because it is being sent.

## Why the Abstract Is the Enabling Element

An awareness list of citations forces the reader to fetch documents to find out whether they matter — and the reader is away from the material when the list arrives. The abstract reverses that: it carries the method, the population, and the finding, so the selection decision is made at the desk or in the inbox. Three consequences for service design follow:

- Abstracts in an alert must be **self-contained**, because the reader has no other context (Z39.14, chapter 18).
- Bulletin abstracts may need **compression below journal length** to keep mailing and scanning costs proportionate — a budget decision, recorded in the service specification.
- Arrangement matters as much as content: a bulletin arranged in the sequence of a familiar classification or schedule supports scanning by subject; an alphabetical or chronological arrangement serves a different reading pattern.

## Designing the Service

A specification should state: the community served and its reading habits; the source material and its indexing vocabulary; the update frequency justified by publication lag in the field; the selection principle — whole discipline for a bulletin, profile for SDI; the delivery channel; and the feedback mechanism with a review date for every profile. Cost discipline is essential — every item sent that is discarded costs attention, and attention is the scarce resource.

## Implications for Digital Libraries and AI Practice

Print bulletins, reading-room displays, and routing files remain in use in many libraries, including university libraries across Nigeria, where they are cheap, reliable, and need no bandwidth. Their networked descendants are email table-of-contents alerts, repository notifications, saved searches, and author-citation alerts, all of which run the same profile logic automatically. Two changes are genuinely new:

1. **Recommendation systems** learn a profile implicitly from behaviour rather than declaring it, which raises short-term precision while making the profile invisible — the user cannot inspect or correct it, and feedback loops operate without consent or explanation.
2. **Generated digests** summarize multiple items into a narrative, adding a new failure mode: a digest that misstates an item's finding propagates the error to a reader who will never see the original, which is why digest generation must be held to the accuracy requirement of chapter 18.

The professional's design questions are therefore unchanged — what is the profile, how often, through which channel, with what evaluation, and with what feedback — even though the machinery is now a recommendation engine rather than a bulletin typed on a duplicator.

## Chapter Summary

- Current awareness services deliver information about what is new; bulletin, display, routing, and SDI forms differ by selection principle and channel.
- SDI operates by profile construction, matching, dissemination, and feedback; without feedback a profile decays.
- An alerting run is evaluated like any retrieval run: precision, recall, silence, noise, and fallout, computed against the batch.
- The abstract is what makes awareness economical, because selection happens without retrieving documents.
- Algorithmic recommendation and generated digests inherit the same evaluation obligations while hiding the profile and adding accuracy risk.`,
    keyTerms: [
      { term: "Current awareness service", definition: "Organized provision of information about new or recently acquired publications to a defined community at intervals short enough to support timely use." },
      { term: "Selective dissemination of information (SDI)", definition: "An alerting service that matches each new batch of records against a standing user profile and transmits only the matches." },
      { term: "Profile", definition: "A documented, periodically reviewed statement of a user's interests expressed as terms, class numbers, authors, and journals for matching." },
      { term: "Abstracting bulletin", definition: "A current awareness publication that lists new items with an abstract attached, allowing selection from the service itself." },
      { term: "Push service", definition: "A service in which the library initiates delivery of information, contrasted with a pull service in which the user searches on demand." },
      { term: "Table-of-contents service", definition: "A current awareness arrangement displaying or circulating the contents pages of selected journals for scanning by readers." },
      { term: "Routing service", definition: "The physical circulation of new journals or reports among named readers in a fixed order for inspection and return." },
      { term: "Alert precision", definition: "The proportion of items transmitted by an SDI run that the recipient judges useful, computed against the number sent." },
      { term: "Relevance feedback", definition: "The user's response to delivered items, used to widen or narrow the profile so that subsequent runs improve." },
    ],
    reviewQuestions: [
      "Define current awareness services and distinguish broadcast CAS from selective SDI in one sentence each.",
      "Set out the four operations of an SDI run and explain what happens to a profile when the feedback step is omitted.",
      "For a batch of 500 records of which 60 are relevant, a profile sends 40 items of which 25 are useful: compute precision, recall, silence, noise, and fallout, and diagnose the profile.",
      "Explain why an abstracting bulletin enables selection at the point of receipt while a bibliography does not, citing two standard qualities the abstract must have.",
      "Specify a current awareness service for the agricultural research institute of your choice: community, sources, frequency, arrangement, channel, and evaluation method.",
      "Critically evaluate algorithmic recommendation as an SDI system: state one advantage over a declared profile and two risks introduced by implicit profiles.",
      "Assess the accuracy risk created by AI-generated awareness digests and propose a control that satisfies ANSI/NISO Z39.14.",
    ],
    furtherReading: [
      "Lancaster, F.W. (1998). Indexing and Abstracting in Theory and Practice. 2nd ed. Urbana-Champaign: University of Illinois Graduate School of Library and Information Science.",
      "Borko, H. and Bernier, C.L. (1975). Abstracting Concepts and Methods. New York: Academic Press.",
      "Foskett, A.C. (1982). The Subject Approach to Information. 4th ed. London: Clive Bingley.",
      "Rowley, J. and Hartley, R. (2008). Organizing Knowledge: An Introduction to Managing Access to Information. 4th ed. Aldershot: Ashgate.",
      "ANSI/NISO Z39.14, Abstracts. Bethesda, MD: NISO Press.",
    ],
    diagramId: "ch20-cas-sdi",
  },
];
