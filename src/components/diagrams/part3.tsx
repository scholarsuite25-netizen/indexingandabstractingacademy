import { DiagramId } from '../../data/bookTypes';
import type { DiagramEntry } from './registry';

/*
 * DIAGRAM STYLE GUIDE (part 3: chapters 21-28)
 * See part1.tsx for the full style guide. Keep the same palette:
 * panel #f8fafc · concept #eef2ff/#6366f1 · process #ecfdf5/#10b981 ·
 * caution #fffbeb/#f59e0b · problem #fef2f2/#ef4444 · text #0f172a · arrows #64748b.
 *
 * Each entry: { title, caption, Comp }.
 * Comp renders a self-contained SVG illustration:
 *   - <svg viewBox="0 0 800 420" className={className} role="img" aria-label={title}>
 *   - Panel background: fill="#f8fafc" (neutral that works in light and dark panels)
 *   - Boxes: rx="10", concept / process / caution / problem fills, stroke = fill colour
 *   - Arrows: stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-<key>)"
 *   - One <defs><marker id="arrow-<key>" ...> per SVG (unique id per diagram)
 *   - Headings inside SVG: fontSize 15-17, fontWeight 700; body labels 11-13
 *   - Short labels only, so no text ever overflows its box.
 * Keep diagrams schematic and pedagogical — boxes, arrows, short labels; no photos.
 */

const TITLE_21 = 'Citation Indexing: Backward and Forward Tracing';
const TITLE_22 = 'Domain A&I Databases: Coverage and Vocabulary';
const TITLE_23 = 'NER Pipeline: From Sentence to Structured Record';
const TITLE_24 = 'TF-IDF Weighting and Knowledge-Graph Search';
const TITLE_25 = 'Title Analysis to LCSH Descriptors';
const TITLE_26 = 'Precision and Recall: Worked Calculation';
const TITLE_27 = 'Micro-Thesaurus: Institutional Repositories';
const TITLE_28 = 'From MARC Records to AI-Assisted Discovery';

export const DIAGRAMS_PART3: Partial<Record<DiagramId, DiagramEntry>> = {
  'ch21-citation-indexing': {
    title: TITLE_21,
    caption:
      'A citation index links each paper to the references it cites (backward tracing) and to the later papers that cite it (forward tracing). Scopus and Web of Science turn those links into a trail for tracing research impact.',
    Comp: ({ className }) => (
      <svg viewBox="0 0 800 420" className={className} role="img" aria-label={TITLE_21}>
        <rect width="800" height="420" fill="#f8fafc" />
        <text x="400" y="34" textAnchor="middle" fontSize="16" fontWeight="700" fill="#0f172a">
          One Citation, Two Directions
        </text>

        <rect x="40" y="64" width="160" height="64" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="120" y="90" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          Paper A · 2021
        </text>
        <text x="120" y="110" textAnchor="middle" fontSize="11" fill="#475569">
          cites R
        </text>

        <rect x="40" y="160" width="160" height="64" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="120" y="186" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          Paper B · 2022
        </text>
        <text x="120" y="206" textAnchor="middle" fontSize="11" fill="#475569">
          cites R
        </text>

        <rect x="300" y="104" width="146" height="64" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
        <text x="373" y="130" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          Reference R
        </text>
        <text x="373" y="150" textAnchor="middle" fontSize="11" fill="#475569">
          the cited work
        </text>

        <rect x="590" y="64" width="170" height="64" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="675" y="90" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          Paper C · 2023
        </text>
        <text x="675" y="110" textAnchor="middle" fontSize="11" fill="#475569">
          cites R
        </text>

        <rect x="590" y="160" width="170" height="64" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="675" y="186" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          Paper D · 2024
        </text>
        <text x="675" y="206" textAnchor="middle" fontSize="11" fill="#475569">
          cites R
        </text>

        <text x="120" y="252" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0f172a">
          Backward tracing
        </text>
        <text x="120" y="270" textAnchor="middle" fontSize="11" fill="#475569">
          which works did it cite?
        </text>
        <text x="675" y="252" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0f172a">
          Forward tracing
        </text>
        <text x="675" y="270" textAnchor="middle" fontSize="11" fill="#475569">
          which papers cite it now?
        </text>

        <text x="40" y="306" fontSize="12" fontWeight="700" fill="#0f172a">
          Citation databases
        </text>
        <rect x="40" y="318" width="110" height="36" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="95" y="341" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0f172a">
          Scopus
        </text>
        <rect x="165" y="318" width="160" height="36" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="245" y="341" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0f172a">
          Web of Science
        </text>

        <text x="470" y="306" fontSize="12" fontWeight="700" fill="#0f172a">
          Impact chaining
        </text>
        <circle cx="490" cy="336" r="18" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="490" y="341" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          R
        </text>
        <circle cx="570" cy="336" r="18" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="570" y="341" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          C
        </text>
        <circle cx="650" cy="336" r="18" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="650" y="341" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          D
        </text>
        <text x="570" y="384" textAnchor="middle" fontSize="11" fill="#475569">
          impact chains forward: R → C → D
        </text>

        <defs>
          <marker id="arrow-ch21" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
            <path d="M0,0 L7,3 L0,6 z" fill="#64748b" />
          </marker>
        </defs>
        <line x1="204" y1="96" x2="294" y2="130" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch21)" />
        <line x1="204" y1="192" x2="294" y2="144" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch21)" />
        <line x1="450" y1="130" x2="584" y2="96" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch21)" />
        <line x1="450" y1="144" x2="584" y2="192" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch21)" />
        <line x1="512" y1="336" x2="548" y2="336" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch21)" />
        <line x1="592" y1="336" x2="628" y2="336" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch21)" />
      </svg>
    ),
  },

  'ch22-ai-databases': {
    title: TITLE_22,
    caption:
      'Abstracting and indexing databases differ by subject coverage and by the controlled vocabulary they supply. Match the database to the domain first: PubMed/MEDLINE for biomedicine, LISA for library and information science, Scopus and Web of Science for multidisciplinary work.',
    Comp: ({ className }) => (
      <svg viewBox="0 0 800 420" className={className} role="img" aria-label={TITLE_22}>
        <rect width="800" height="420" fill="#f8fafc" />
        <text x="400" y="34" textAnchor="middle" fontSize="16" fontWeight="700" fill="#0f172a">
          Choosing a Subject Database
        </text>

        <rect x="280" y="52" width="240" height="56" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="400" y="76" textAnchor="middle" fontSize="13.5" fontWeight="700" fill="#0f172a">
          Document corpus
        </text>
        <text x="400" y="96" textAnchor="middle" fontSize="10.5" fill="#475569">
          articles · reports · theses
        </text>

        <rect x="215" y="140" width="175" height="230" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="303" y="170" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">
          PubMed / MEDLINE
        </text>
        <text x="303" y="200" textAnchor="middle" fontSize="10" fontWeight="700" fill="#475569">
          COVERAGE
        </text>
        <text x="303" y="222" textAnchor="middle" fontSize="11.5" fill="#334155">
          Medicine, nursing,
        </text>
        <text x="303" y="240" textAnchor="middle" fontSize="11.5" fill="#334155">
          life sciences
        </text>
        <text x="303" y="272" textAnchor="middle" fontSize="10" fontWeight="700" fill="#475569">
          VOCABULARY
        </text>
        <rect x="233" y="284" width="139" height="30" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="303" y="304" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0f172a">
          MeSH
        </text>
        <text x="303" y="340" textAnchor="middle" fontSize="10.5" fill="#475569">
          NLM headings, free
        </text>

        <rect x="410" y="140" width="175" height="230" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="498" y="170" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">
          LISA
        </text>
        <text x="498" y="200" textAnchor="middle" fontSize="10" fontWeight="700" fill="#475569">
          COVERAGE
        </text>
        <text x="498" y="222" textAnchor="middle" fontSize="11.5" fill="#334155">
          Librarianship and
        </text>
        <text x="498" y="240" textAnchor="middle" fontSize="11.5" fill="#334155">
          information science
        </text>
        <text x="498" y="272" textAnchor="middle" fontSize="10" fontWeight="700" fill="#475569">
          VOCABULARY
        </text>
        <rect x="428" y="284" width="139" height="30" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="498" y="304" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0f172a">
          LCSH
        </text>
        <text x="498" y="340" textAnchor="middle" fontSize="10.5" fill="#475569">
          pre-coordinated terms
        </text>

        <rect x="605" y="140" width="175" height="230" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="693" y="170" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">
          Scopus / WoS
        </text>
        <text x="693" y="200" textAnchor="middle" fontSize="10" fontWeight="700" fill="#475569">
          COVERAGE
        </text>
        <text x="693" y="222" textAnchor="middle" fontSize="11.5" fill="#334155">
          Journals, books,
        </text>
        <text x="693" y="240" textAnchor="middle" fontSize="11.5" fill="#334155">
          conferences
        </text>
        <text x="693" y="272" textAnchor="middle" fontSize="10" fontWeight="700" fill="#475569">
          VOCABULARY
        </text>
        <rect x="623" y="284" width="139" height="30" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="693" y="304" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0f172a">
          Author keywords
        </text>
        <text x="693" y="340" textAnchor="middle" fontSize="10.5" fill="#475569">
          plus cited references
        </text>

        <text x="400" y="398" textAnchor="middle" fontSize="11.5" fill="#475569">
          Match the database to the subject before you search
        </text>

        <defs>
          <marker id="arrow-ch22" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
            <path d="M0,0 L7,3 L0,6 z" fill="#64748b" />
          </marker>
        </defs>
        <line x1="330" y1="108" x2="303" y2="135" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch22)" />
        <line x1="400" y1="108" x2="497" y2="135" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch22)" />
        <line x1="470" y1="108" x2="692" y2="135" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch22)" />
      </svg>
    ),
  },

  'ch23-ner-pipeline': {
    title: TITLE_23,
    caption:
      'Named entity recognition splits text into tokens, classifies mentions as Person, Organization, Location or Date, and stores them as structured fields. The result is metadata that catalogues and knowledge graphs can query directly.',
    Comp: ({ className }) => (
      <svg viewBox="0 0 800 420" className={className} role="img" aria-label={TITLE_23}>
        <rect width="800" height="420" fill="#f8fafc" />
        <text x="400" y="34" textAnchor="middle" fontSize="16" fontWeight="700" fill="#0f172a">
          From Sentence to Structured Record
        </text>

        <rect x="30" y="56" width="190" height="84" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="125" y="82" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          Input text
        </text>
        <text x="125" y="106" textAnchor="middle" fontSize="10.5" fill="#475569">
          “Dr. Amina joined UNILAG
        </text>
        <text x="125" y="124" textAnchor="middle" fontSize="10.5" fill="#475569">
          in Lagos in 2024.”
        </text>

        <rect x="255" y="56" width="150" height="84" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="330" y="92" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          Tokenization
        </text>
        <text x="330" y="114" textAnchor="middle" fontSize="11" fill="#475569">
          words → tokens
        </text>

        <rect x="445" y="56" width="140" height="84" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="515" y="92" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          NER model
        </text>
        <text x="515" y="114" textAnchor="middle" fontSize="11" fill="#475569">
          labels each token
        </text>

        <rect x="625" y="56" width="145" height="84" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
        <text x="697" y="92" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          Entity types
        </text>
        <text x="697" y="114" textAnchor="middle" fontSize="11" fill="#475569">
          typed mentions
        </text>

        <rect x="24" y="180" width="170" height="56" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="109" y="202" textAnchor="middle" fontSize="10" fontWeight="700" fill="#475569">
          PERSON
        </text>
        <text x="109" y="224" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0f172a">
          Amina Okafor
        </text>

        <rect x="218" y="180" width="170" height="56" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="303" y="202" textAnchor="middle" fontSize="10" fontWeight="700" fill="#475569">
          ORGANIZATION
        </text>
        <text x="303" y="224" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0f172a">
          UNILAG
        </text>

        <rect x="412" y="180" width="170" height="56" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
        <text x="497" y="202" textAnchor="middle" fontSize="10" fontWeight="700" fill="#475569">
          LOCATION
        </text>
        <text x="497" y="224" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0f172a">
          Lagos
        </text>

        <rect x="606" y="180" width="170" height="56" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="691" y="202" textAnchor="middle" fontSize="10" fontWeight="700" fill="#475569">
          DATE
        </text>
        <text x="691" y="224" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0f172a">
          2024
        </text>

        <rect x="140" y="280" width="520" height="96" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="400" y="304" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          Structured metadata record
        </text>
        <rect x="148" y="316" width="120" height="48" rx="10" fill="#ffffff" stroke="#6366f1" strokeWidth="2" />
        <text x="208" y="334" textAnchor="middle" fontSize="9.5" fill="#475569">
          person
        </text>
        <text x="208" y="354" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#0f172a">
          Amina Okafor
        </text>
        <rect x="276" y="316" width="120" height="48" rx="10" fill="#ffffff" stroke="#6366f1" strokeWidth="2" />
        <text x="336" y="334" textAnchor="middle" fontSize="9.5" fill="#475569">
          organization
        </text>
        <text x="336" y="354" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#0f172a">
          UNILAG
        </text>
        <rect x="404" y="316" width="120" height="48" rx="10" fill="#ffffff" stroke="#6366f1" strokeWidth="2" />
        <text x="464" y="334" textAnchor="middle" fontSize="9.5" fill="#475569">
          location
        </text>
        <text x="464" y="354" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#0f172a">
          Lagos
        </text>
        <rect x="532" y="316" width="120" height="48" rx="10" fill="#ffffff" stroke="#6366f1" strokeWidth="2" />
        <text x="592" y="334" textAnchor="middle" fontSize="9.5" fill="#475569">
          date
        </text>
        <text x="592" y="354" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#0f172a">
          2024
        </text>

        <text x="400" y="400" textAnchor="middle" fontSize="11" fill="#475569">
          NER turns prose into fields that indexes can search
        </text>

        <defs>
          <marker id="arrow-ch23" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
            <path d="M0,0 L7,3 L0,6 z" fill="#64748b" />
          </marker>
        </defs>
        <line x1="224" y1="98" x2="249" y2="98" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch23)" />
        <line x1="409" y1="98" x2="439" y2="98" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch23)" />
        <line x1="589" y1="98" x2="619" y2="98" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch23)" />
        <line x1="697" y1="140" x2="697" y2="174" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch23)" />
        <line x1="400" y1="240" x2="400" y2="274" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch23)" />
      </svg>
    ),
  },

  'ch24-tfidf-graph': {
    title: TITLE_24,
    caption:
      'TF-IDF scores how important a word is to one document, while a knowledge graph stores entity–relation–entity links. Modern search combines both: term weights for ranking and graph links for meaning.',
    Comp: ({ className }) => (
      <svg viewBox="0 0 800 420" className={className} role="img" aria-label={TITLE_24}>
        <rect width="800" height="420" fill="#f8fafc" />
        <text x="400" y="34" textAnchor="middle" fontSize="16" fontWeight="700" fill="#0f172a">
          Counting Words, Connecting Meanings
        </text>

        <rect x="24" y="60" width="350" height="300" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="199" y="90" textAnchor="middle" fontSize="15" fontWeight="700" fill="#0f172a">
          Lexical: TF-IDF
        </text>
        <text x="199" y="126" textAnchor="middle" fontSize="16" fontWeight="700" fill="#0f172a">
          tf-idf(t,d) = tf × idf
        </text>

        <rect x="40" y="146" width="150" height="84" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="115" y="172" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">
          tf
        </text>
        <text x="115" y="192" textAnchor="middle" fontSize="10" fill="#475569">
          term frequency
        </text>
        <text x="115" y="218" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0f172a">
          count = 5
        </text>

        <rect x="208" y="146" width="150" height="84" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="283" y="172" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">
          idf
        </text>
        <text x="283" y="192" textAnchor="middle" fontSize="10" fill="#475569">
          inverse doc freq
        </text>
        <text x="283" y="218" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#0f172a">
          log(1000/100) = 1
        </text>

        <rect x="40" y="246" width="318" height="84" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
        <text x="199" y="278" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">
          tf × idf = 5 × 1 = 5
        </text>
        <text x="199" y="304" textAnchor="middle" fontSize="11" fill="#475569">
          higher weight = stronger match
        </text>

        <rect x="400" y="60" width="376" height="316" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="588" y="88" textAnchor="middle" fontSize="15" fontWeight="700" fill="#0f172a">
          Semantic: knowledge graph
        </text>

        <rect x="418" y="112" width="130" height="56" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="483" y="145" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0f172a">
          AI adoption
        </text>

        <rect x="642" y="112" width="130" height="56" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="707" y="134" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0f172a">
          University
        </text>
        <text x="707" y="152" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0f172a">
          libraries
        </text>

        <rect x="642" y="222" width="130" height="56" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="707" y="255" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0f172a">
          Nigeria
        </text>

        <text x="595" y="138" textAnchor="middle" fontSize="10.5" fill="#475569">
          deployed in
        </text>
        <text x="699" y="200" textAnchor="end" fontSize="10.5" fill="#475569">
          located in
        </text>

        <rect x="418" y="300" width="340" height="56" rx="10" fill="#ffffff" stroke="#10b981" strokeWidth="2" />
        <text x="588" y="324" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          Semantic search
        </text>
        <text x="588" y="346" textAnchor="middle" fontSize="11" fill="#475569">
          matches meaning, not keywords
        </text>

        <text x="400" y="398" textAnchor="middle" fontSize="11" fill="#475569">
          TF-IDF counts words; the graph captures what they mean
        </text>

        <defs>
          <marker id="arrow-ch24" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
            <path d="M0,0 L7,3 L0,6 z" fill="#64748b" />
          </marker>
        </defs>
        <line x1="552" y1="148" x2="638" y2="148" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch24)" />
        <line x1="707" y1="172" x2="707" y2="218" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch24)" />
        <line x1="483" y1="172" x2="483" y2="294" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch24)" />
        <line x1="707" y1="282" x2="707" y2="294" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch24)" />
      </svg>
    ),
  },

  'ch25-descriptor-assignment': {
    title: TITLE_25,
    caption:
      'Descriptor assignment converts the facets of a title — concept, institution and geography — into authorized Library of Congress Subject Headings. Each facet maps to one pre-coordinated heading instead of an invented synonym.',
    Comp: ({ className }) => (
      <svg viewBox="0 0 800 420" className={className} role="img" aria-label={TITLE_25}>
        <rect width="800" height="420" fill="#f8fafc" />
        <text x="400" y="34" textAnchor="middle" fontSize="16" fontWeight="700" fill="#0f172a">
          From Research Title to LCSH Descriptors
        </text>

        <text x="30" y="88" textAnchor="middle" fontSize="11" fontWeight="700" fill="#475569" transform="rotate(-90 30 88)">
          Title
        </text>
        <text x="30" y="192" textAnchor="middle" fontSize="11" fontWeight="700" fill="#475569" transform="rotate(-90 30 192)">
          Facets
        </text>
        <text x="30" y="302" textAnchor="middle" fontSize="11" fontWeight="700" fill="#475569" transform="rotate(-90 30 302)">
          LCSH
        </text>

        <rect x="60" y="60" width="700" height="56" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="410" y="94" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">
          Adoption of AI in Nigerian University Libraries
        </text>

        <rect x="60" y="160" width="210" height="64" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="165" y="186" textAnchor="middle" fontSize="10" fontWeight="700" fill="#475569">
          CONCEPT FACET
        </text>
        <text x="165" y="210" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          artificial intelligence
        </text>

        <rect x="305" y="160" width="210" height="64" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="410" y="186" textAnchor="middle" fontSize="10" fontWeight="700" fill="#475569">
          INSTITUTION FACET
        </text>
        <text x="410" y="210" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          academic libraries
        </text>

        <rect x="550" y="160" width="210" height="64" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="655" y="186" textAnchor="middle" fontSize="10" fontWeight="700" fill="#475569">
          GEOGRAPHY FACET
        </text>
        <text x="655" y="210" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          Nigeria
        </text>

        <rect x="60" y="270" width="210" height="64" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="165" y="296" textAnchor="middle" fontSize="10" fontWeight="700" fill="#475569">
          LCSH HEADING
        </text>
        <text x="165" y="322" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          Artificial intelligence
        </text>

        <rect x="305" y="270" width="210" height="64" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="410" y="296" textAnchor="middle" fontSize="10" fontWeight="700" fill="#475569">
          LCSH HEADING
        </text>
        <text x="410" y="322" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          Academic libraries
        </text>

        <rect x="550" y="270" width="210" height="64" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="655" y="296" textAnchor="middle" fontSize="10" fontWeight="700" fill="#475569">
          LCSH HEADING
        </text>
        <text x="655" y="322" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          Nigeria
        </text>

        <rect x="60" y="352" width="700" height="46" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
        <text x="410" y="372" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0f172a">
          Each facet maps to one authorized heading
        </text>
        <text x="410" y="390" textAnchor="middle" fontSize="10.5" fill="#475569">
          Do not invent synonyms; check the subject authority catalogue
        </text>

        <defs>
          <marker id="arrow-ch25" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
            <path d="M0,0 L7,3 L0,6 z" fill="#64748b" />
          </marker>
        </defs>
        <line x1="330" y1="116" x2="165" y2="154" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch25)" />
        <line x1="410" y1="116" x2="410" y2="154" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch25)" />
        <line x1="490" y1="116" x2="655" y2="154" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch25)" />
        <line x1="165" y1="228" x2="165" y2="264" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch25)" />
        <line x1="410" y1="228" x2="410" y2="264" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch25)" />
        <line x1="655" y1="228" x2="655" y2="264" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch25)" />
      </svg>
    ),
  },

  'ch26-pr-rec-worked': {
    title: TITLE_26,
    caption:
      'With 80 records retrieved, 50 of them relevant and 125 relevant records in the corpus, precision is 62.5% but recall is only 40%. Low recall points to an overly restrictive query, so the fix is to expand, not narrow.',
    Comp: ({ className }) => (
      <svg viewBox="0 0 800 420" className={className} role="img" aria-label={TITLE_26}>
        <rect width="800" height="420" fill="#f8fafc" />
        <text x="400" y="34" textAnchor="middle" fontSize="16" fontWeight="700" fill="#0f172a">
          Precision and Recall: Worked Example
        </text>

        <rect x="45" y="64" width="210" height="56" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="150" y="86" textAnchor="middle" fontSize="10.5" fill="#475569">
          Documents retrieved
        </text>
        <text x="150" y="112" textAnchor="middle" fontSize="20" fontWeight="700" fill="#0f172a">
          80
        </text>

        <rect x="295" y="64" width="210" height="56" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="400" y="86" textAnchor="middle" fontSize="10.5" fill="#475569">
          Relevant retrieved
        </text>
        <text x="400" y="112" textAnchor="middle" fontSize="20" fontWeight="700" fill="#0f172a">
          50
        </text>

        <rect x="545" y="64" width="210" height="56" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="650" y="86" textAnchor="middle" fontSize="10.5" fill="#475569">
          Total relevant in corpus
        </text>
        <text x="650" y="112" textAnchor="middle" fontSize="20" fontWeight="700" fill="#0f172a">
          125
        </text>

        <rect x="60" y="170" width="320" height="132" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="220" y="198" textAnchor="middle" fontSize="15" fontWeight="700" fill="#0f172a">
          Precision
        </text>
        <text x="220" y="224" textAnchor="middle" fontSize="11" fill="#475569">
          relevant retrieved / retrieved
        </text>
        <text x="220" y="254" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">
          50 / 80
        </text>
        <text x="220" y="288" textAnchor="middle" fontSize="22" fontWeight="700" fill="#10b981">
          62.5%
        </text>

        <rect x="420" y="170" width="320" height="132" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="580" y="198" textAnchor="middle" fontSize="15" fontWeight="700" fill="#0f172a">
          Recall
        </text>
        <text x="580" y="224" textAnchor="middle" fontSize="11" fill="#475569">
          relevant retrieved / all relevant
        </text>
        <text x="580" y="254" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">
          50 / 125
        </text>
        <text x="580" y="288" textAnchor="middle" fontSize="22" fontWeight="700" fill="#ef4444">
          40%
        </text>

        <rect x="140" y="340" width="520" height="64" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
        <text x="400" y="366" textAnchor="middle" fontSize="13.5" fontWeight="700" fill="#0f172a">
          Recall is low: the query is too restrictive
        </text>
        <text x="400" y="388" textAnchor="middle" fontSize="11.5" fill="#475569">
          Expand: add synonyms, truncate stems, drop field limits
        </text>

        <defs>
          <marker id="arrow-ch26" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
            <path d="M0,0 L7,3 L0,6 z" fill="#64748b" />
          </marker>
        </defs>
        <line x1="150" y1="120" x2="190" y2="166" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch26)" />
        <line x1="370" y1="120" x2="280" y2="166" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch26)" />
        <line x1="430" y1="120" x2="520" y2="166" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch26)" />
        <line x1="650" y1="120" x2="610" y2="166" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch26)" />
        <line x1="220" y1="302" x2="250" y2="336" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch26)" />
        <line x1="580" y1="302" x2="550" y2="336" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch26)" />
      </svg>
    ),
  },

  'ch27-micro-thesaurus': {
    title: TITLE_27,
    caption:
      'A micro-thesaurus controls vocabulary for one niche domain: Institutional repositories sits under Digital libraries (BT), with narrower and related terms plus a preferred / non-preferred pair. USE and UF fix synonyms, BT and NT build hierarchy, RT links neighbouring topics.',
    Comp: ({ className }) => (
      <svg viewBox="0 0 800 420" className={className} role="img" aria-label={TITLE_27}>
        <rect width="800" height="420" fill="#f8fafc" />
        <text x="400" y="32" textAnchor="middle" fontSize="16" fontWeight="700" fill="#0f172a">
          Micro-Thesaurus: Institutional Repositories
        </text>

        <rect x="290" y="56" width="220" height="50" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="400" y="87" textAnchor="middle" fontSize="13.5" fontWeight="700" fill="#0f172a">
          Digital libraries
        </text>

        <rect x="245" y="164" width="310" height="60" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="400" y="194" textAnchor="middle" fontSize="15" fontWeight="700" fill="#0f172a">
          Institutional repositories
        </text>
        <text x="400" y="214" textAnchor="middle" fontSize="10.5" fill="#475569">
          preferred heading
        </text>

        <rect x="20" y="166" width="175" height="56" rx="10" fill="#fef2f2" stroke="#ef4444" strokeWidth="2" />
        <text x="107" y="192" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0f172a">
          University repositories
        </text>
        <text x="107" y="210" textAnchor="middle" fontSize="10" fill="#475569">
          non-preferred term
        </text>

        <rect x="230" y="300" width="160" height="52" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="310" y="331" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#0f172a">
          Thesis repositories
        </text>

        <rect x="410" y="300" width="160" height="52" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="490" y="331" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#0f172a">
          Research data archives
        </text>

        <rect x="590" y="164" width="185" height="56" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
        <text x="682" y="190" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0f172a">
          Open access publishing
        </text>
        <text x="682" y="208" textAnchor="middle" fontSize="10" fill="#475569">
          related term
        </text>

        <rect x="590" y="284" width="185" height="56" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
        <text x="682" y="310" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0f172a">
          Metadata harvesting
        </text>
        <text x="682" y="328" textAnchor="middle" fontSize="10" fill="#475569">
          OAI-PMH records
        </text>

        <rect x="20" y="270" width="190" height="100" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
        <text x="115" y="294" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0f172a">
          Scope note
        </text>
        <text x="32" y="316" fontSize="10.5" fill="#334155">
          Campus-managed research
        </text>
        <text x="32" y="332" fontSize="10.5" fill="#334155">
          output deposited and made
        </text>
        <text x="32" y="348" fontSize="10.5" fill="#334155">
          openly online.
        </text>

        <text x="400" y="398" textAnchor="middle" fontSize="11" fill="#475569">
          USE/UF control synonyms · BT/NT build hierarchy · RT links topics
        </text>

        <defs>
          <marker id="arrow-ch27" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
            <path d="M0,0 L7,3 L0,6 z" fill="#64748b" />
          </marker>
        </defs>

        <line x1="400" y1="106" x2="400" y2="160" stroke="#64748b" strokeWidth="2" />
        <rect x="386" y="124" width="28" height="18" fill="#f8fafc" />
        <text x="400" y="137" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#475569">
          BT
        </text>

        <line x1="199" y1="184" x2="241" y2="184" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch27)" />
        <text x="220" y="176" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#475569">
          USE
        </text>
        <line x1="241" y1="206" x2="199" y2="206" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch27)" />
        <text x="220" y="226" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#475569">
          UF
        </text>

        <line x1="370" y1="228" x2="316" y2="296" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch27)" />
        <rect x="326" y="252" width="26" height="16" fill="#f8fafc" />
        <text x="339" y="264" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#475569">
          NT
        </text>
        <line x1="430" y1="228" x2="484" y2="296" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch27)" />
        <rect x="444" y="252" width="26" height="16" fill="#f8fafc" />
        <text x="457" y="264" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#475569">
          NT
        </text>

        <line x1="559" y1="192" x2="586" y2="192" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch27)" />
        <text x="572" y="182" textAnchor="middle" fontSize="10" fontWeight="700" fill="#475569">
          RT
        </text>

        <path d="M555,212 L578,212 L578,312 L586,312" fill="none" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch27)" />
        <rect x="567" y="248" width="22" height="16" fill="#f8fafc" />
        <text x="578" y="260" textAnchor="middle" fontSize="10" fontWeight="700" fill="#475569">
          RT
        </text>
      </svg>
    ),
  },

  'ch28-semantic-web': {
    title: TITLE_28,
    caption:
      'Library data evolved from MARC records to linked data, in which each RDF triple states subject, predicate and object. Triples join into knowledge graphs that AI systems traverse for context-aware discovery.',
    Comp: ({ className }) => (
      <svg viewBox="0 0 800 420" className={className} role="img" aria-label={TITLE_28}>
        <rect width="800" height="420" fill="#f8fafc" />
        <text x="400" y="34" textAnchor="middle" fontSize="16" fontWeight="700" fill="#0f172a">
          From MARC Records to AI-Assisted Discovery
        </text>

        <rect x="22" y="64" width="165" height="86" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="105" y="94" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          1 · MARC records
        </text>
        <text x="105" y="118" textAnchor="middle" fontSize="10.5" fill="#475569">
          flat catalog fields
        </text>
        <text x="105" y="136" textAnchor="middle" fontSize="10.5" fill="#475569">
          isolated records
        </text>

        <rect x="219" y="64" width="165" height="86" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="302" y="94" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          2 · Linked data
        </text>
        <text x="302" y="118" textAnchor="middle" fontSize="10.5" fill="#475569">
          RDF triples + URIs
        </text>
        <text x="302" y="136" textAnchor="middle" fontSize="10.5" fill="#475569">
          linked on the web
        </text>

        <rect x="416" y="64" width="165" height="86" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="499" y="94" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          3 · Knowledge graph
        </text>
        <text x="499" y="118" textAnchor="middle" fontSize="10.5" fill="#475569">
          entities + relations
        </text>
        <text x="499" y="136" textAnchor="middle" fontSize="10.5" fill="#475569">
          shared identifiers
        </text>

        <rect x="613" y="64" width="165" height="86" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
        <text x="696" y="94" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          4 · AI discovery
        </text>
        <text x="696" y="118" textAnchor="middle" fontSize="10.5" fill="#475569">
          semantic search
        </text>
        <text x="696" y="136" textAnchor="middle" fontSize="10.5" fill="#475569">
          generative answers
        </text>

        <text x="400" y="192" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">
          The RDF triple: subject – predicate – object
        </text>

        <rect x="70" y="214" width="200" height="64" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="170" y="238" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#475569">
          SUBJECT
        </text>
        <text x="170" y="264" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          University of Lagos
        </text>

        <rect x="340" y="214" width="150" height="64" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
        <text x="415" y="238" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#475569">
          PREDICATE
        </text>
        <text x="415" y="264" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          hasSubject
        </text>

        <rect x="560" y="214" width="200" height="64" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="660" y="238" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#475569">
          OBJECT
        </text>
        <text x="660" y="264" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          Artificial intelligence
        </text>

        <rect x="70" y="302" width="690" height="54" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="415" y="326" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          Triples share terms, so records join into a knowledge graph
        </text>
        <text x="415" y="348" textAnchor="middle" fontSize="11" fill="#475569">
          AI systems traverse the graph to answer questions with context
        </text>

        <text x="400" y="396" textAnchor="middle" fontSize="11" fill="#475569">
          Machine-readable meaning is what makes AI-assisted discovery possible
        </text>

        <defs>
          <marker id="arrow-ch28" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
            <path d="M0,0 L7,3 L0,6 z" fill="#64748b" />
          </marker>
        </defs>
        <line x1="191" y1="107" x2="215" y2="107" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch28)" />
        <line x1="388" y1="107" x2="412" y2="107" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch28)" />
        <line x1="585" y1="107" x2="609" y2="107" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch28)" />
        <line x1="274" y1="246" x2="336" y2="246" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch28)" />
        <line x1="494" y1="246" x2="556" y2="246" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch28)" />
      </svg>
    ),
  },
};
