import { DiagramId } from '../../data/bookTypes';
import type { DiagramEntry } from './registry';

/*
 * DIAGRAM STYLE GUIDE (part 1B: chapters 6-10)
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

const TITLE_6 = 'Semantic Relationships: USE/UF, BT/NT, RT';
const TITLE_7 = 'Scope Notes: Homographs and Polysemy';
const TITLE_8 = "Facet Analysis: Ranganathan's PMEST";
const TITLE_9 = 'Pre-Coordinate vs Post-Coordinate Indexing';
const TITLE_10 = 'Chain Indexing: Class Number to Alphabetical Entries';

export const DIAGRAMS_P1B: Partial<Record<DiagramId, DiagramEntry>> = {
  'ch6-semantic-relationships': {
    title: TITLE_6,
    caption:
      'A thesaurus states every link it uses: USE/UF collapse synonyms into one preferred term, BT/NT build the generic-specific hierarchy, and RT joins independent but neighbouring concepts. Because the direction of each link is written in the entry, the indexer follows the vocabulary instead of guessing.',
    Comp: ({ className }) => (
      <svg viewBox="0 0 800 420" className={className} role="img" aria-label={TITLE_6}>
        <rect width="800" height="420" fill="#f8fafc" />
        <text x="400" y="34" textAnchor="middle" fontSize="16" fontWeight="700" fill="#0f172a">
          Three Kinds of Semantic Relationship
        </text>

        <text x="130" y="76" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#475569">
          EQUIVALENCE · USE / UF
        </text>
        <rect x="35" y="96" width="190" height="54" rx="10" fill="#fef2f2" stroke="#ef4444" strokeWidth="2" />
        <text x="130" y="120" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          Electronic Libraries
        </text>
        <text x="130" y="138" textAnchor="middle" fontSize="10" fill="#475569">
          non-preferred term
        </text>
        <rect x="35" y="250" width="190" height="54" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="130" y="274" textAnchor="middle" fontSize="13.5" fontWeight="700" fill="#0f172a">
          Libraries
        </text>
        <text x="130" y="292" textAnchor="middle" fontSize="10" fill="#475569">
          preferred term
        </text>
        <text x="130" y="336" textAnchor="middle" fontSize="11" fill="#475569">
          one concept, one heading
        </text>

        <text x="400" y="76" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#475569">
          HIERARCHY · BT / NT
        </text>
        <rect x="305" y="96" width="190" height="54" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="400" y="120" textAnchor="middle" fontSize="13.5" fontWeight="700" fill="#0f172a">
          Libraries
        </text>
        <text x="400" y="138" textAnchor="middle" fontSize="10" fill="#475569">
          broader term
        </text>
        <rect x="305" y="250" width="190" height="54" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="400" y="274" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          Academic Libraries
        </text>
        <text x="400" y="292" textAnchor="middle" fontSize="10" fill="#475569">
          narrower term
        </text>
        <text x="400" y="336" textAnchor="middle" fontSize="11" fill="#475569">
          generic above, specific below
        </text>

        <text x="670" y="76" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#475569">
          ASSOCIATIVE · RT
        </text>
        <rect x="575" y="96" width="190" height="54" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
        <text x="670" y="120" textAnchor="middle" fontSize="13.5" fontWeight="700" fill="#0f172a">
          Librarians
        </text>
        <text x="670" y="138" textAnchor="middle" fontSize="10" fill="#475569">
          independent concept
        </text>
        <rect x="575" y="250" width="190" height="54" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
        <text x="670" y="274" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          Library Education
        </text>
        <text x="670" y="292" textAnchor="middle" fontSize="10" fill="#475569">
          neighbouring topic
        </text>
        <text x="670" y="336" textAnchor="middle" fontSize="11" fill="#475569">
          related, but not generic
        </text>

        <rect x="20" y="354" width="760" height="50" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
        <text x="400" y="376" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0f172a">
          USE/UF equivalence · BT/NT hierarchy · RT association
        </text>
        <text x="400" y="396" textAnchor="middle" fontSize="10.5" fill="#475569">
          Every link is written in the entry, so indexing follows the thesaurus
        </text>

        <defs>
          <marker id="arrow-ch6" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
            <path d="M0,0 L7,3 L0,6 z" fill="#64748b" />
          </marker>
        </defs>
        <line x1="100" y1="156" x2="100" y2="244" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch6)" />
        <line x1="160" y1="244" x2="160" y2="156" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch6)" />
        <rect x="86" y="192" width="28" height="16" fill="#f8fafc" />
        <text x="100" y="204" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#475569">
          USE
        </text>
        <rect x="146" y="192" width="28" height="16" fill="#f8fafc" />
        <text x="160" y="204" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#475569">
          UF
        </text>

        <line x1="370" y1="156" x2="370" y2="244" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch6)" />
        <line x1="430" y1="244" x2="430" y2="156" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch6)" />
        <rect x="356" y="192" width="28" height="16" fill="#f8fafc" />
        <text x="370" y="204" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#475569">
          NT
        </text>
        <rect x="416" y="192" width="28" height="16" fill="#f8fafc" />
        <text x="430" y="204" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#475569">
          BT
        </text>

        <line x1="640" y1="156" x2="640" y2="244" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch6)" />
        <line x1="700" y1="244" x2="700" y2="156" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch6)" />
        <rect x="626" y="192" width="28" height="16" fill="#f8fafc" />
        <text x="640" y="204" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#475569">
          RT
        </text>
        <rect x="686" y="192" width="28" height="16" fill="#f8fafc" />
        <text x="700" y="204" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#475569">
          RT
        </text>
      </svg>
    ),
  },

  'ch7-scope-notes': {
    title: TITLE_7,
    caption:
      'A homograph is one form standing for several unrelated terms, while a polysemy is one term carrying several senses; in both cases the scope note (SN) tells the indexer which sense is meant. Without an SN, "Bank" and "Java" collect unrelated records under a single heading.',
    Comp: ({ className }) => (
      <svg viewBox="0 0 800 420" className={className} role="img" aria-label={TITLE_7}>
        <rect width="800" height="420" fill="#f8fafc" />
        <text x="400" y="34" textAnchor="middle" fontSize="16" fontWeight="700" fill="#0f172a">
          Scope Notes Resolve Ambiguous Terms
        </text>

        <text x="237" y="74" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#475569">
          HOMOGRAPH: BANK
        </text>
        <rect x="177" y="88" width="120" height="48" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="237" y="118" textAnchor="middle" fontSize="15" fontWeight="700" fill="#0f172a">
          Bank
        </text>

        <rect x="52" y="164" width="170" height="52" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="137" y="187" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0f172a">
          Bank (finance)
        </text>
        <text x="137" y="205" textAnchor="middle" fontSize="10" fill="#475569">
          financial institution
        </text>

        <rect x="278" y="164" width="170" height="52" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="353" y="187" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0f172a">
          Bank (river)
        </text>
        <text x="353" y="205" textAnchor="middle" fontSize="10" fill="#475569">
          river or lakeside
        </text>

        <rect x="52" y="236" width="170" height="88" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
        <text x="137" y="260" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#475569">
          SCOPE NOTE
        </text>
        <text x="137" y="284" textAnchor="middle" fontSize="10.5" fill="#334155">
          Accepts deposits and
        </text>
        <text x="137" y="304" textAnchor="middle" fontSize="10.5" fill="#334155">
          lends money.
        </text>

        <rect x="278" y="236" width="170" height="88" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
        <text x="353" y="260" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#475569">
          SCOPE NOTE
        </text>
        <text x="353" y="284" textAnchor="middle" fontSize="10.5" fill="#334155">
          Land along a river
        </text>
        <text x="353" y="304" textAnchor="middle" fontSize="10.5" fill="#334155">
          or the edge of a lake.
        </text>

        <text x="622" y="74" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#475569">
          POLYSEMY: JAVA
        </text>
        <rect x="562" y="88" width="120" height="48" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="622" y="118" textAnchor="middle" fontSize="15" fontWeight="700" fill="#0f172a">
          Java
        </text>

        <rect x="478" y="164" width="140" height="52" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="548" y="187" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0f172a">
          Java (island)
        </text>
        <text x="548" y="205" textAnchor="middle" fontSize="10" fill="#475569">
          the island
        </text>

        <rect x="632" y="164" width="140" height="52" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="702" y="187" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0f172a">
          Java (language)
        </text>
        <text x="702" y="205" textAnchor="middle" fontSize="10" fill="#475569">
          the language
        </text>

        <rect x="478" y="236" width="294" height="88" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
        <text x="625" y="260" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#475569">
          SCOPE NOTE
        </text>
        <text x="625" y="284" textAnchor="middle" fontSize="11" fill="#334155">
          A programming language created in 1995,
        </text>
        <text x="625" y="304" textAnchor="middle" fontSize="11" fill="#334155">
          not the Indonesian island.
        </text>

        <rect x="20" y="350" width="760" height="52" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="400" y="372" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0f172a">
          SN = scope note: it states which sense of the term is intended
        </text>
        <text x="400" y="392" textAnchor="middle" fontSize="10.5" fill="#475569">
          Homographs get separate headings; polysemes share one heading plus a note
        </text>

        <defs>
          <marker id="arrow-ch7" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
            <path d="M0,0 L7,3 L0,6 z" fill="#64748b" />
          </marker>
        </defs>
        <line x1="230" y1="136" x2="150" y2="158" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch7)" />
        <line x1="244" y1="136" x2="340" y2="158" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch7)" />
        <line x1="137" y1="220" x2="137" y2="232" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch7)" />
        <line x1="353" y1="220" x2="353" y2="232" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch7)" />
        <line x1="610" y1="136" x2="560" y2="158" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch7)" />
        <line x1="634" y1="136" x2="690" y2="158" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch7)" />
        <line x1="548" y1="220" x2="548" y2="232" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch7)" />
        <line x1="702" y1="220" x2="702" y2="232" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch7)" />
      </svg>
    ),
  },

  'ch8-facet-analysis': {
    title: TITLE_8,
    caption:
      "Facet analysis cuts a subject into Ranganathan's homogeneous fundamental categories — Personality, Matter, Energy, Space, Time — before any term is chosen. In 'library services to children in Nigeria' only three facets are present, so Matter and Time are rejected rather than added for tidiness.",
    Comp: ({ className }) => (
      <svg viewBox="0 0 800 420" className={className} role="img" aria-label={TITLE_8}>
        <rect width="800" height="420" fill="#f8fafc" />
        <text x="400" y="34" textAnchor="middle" fontSize="16" fontWeight="700" fill="#0f172a">
          Facet Analysis: the PMEST Categories
        </text>

        <rect x="28" y="56" width="136" height="76" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="96" y="84" textAnchor="middle" fontSize="17" fontWeight="700" fill="#0f172a">
          P
        </text>
        <text x="96" y="104" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0f172a">
          Personality
        </text>
        <text x="96" y="122" textAnchor="middle" fontSize="10" fill="#475569">
          the thing
        </text>

        <rect x="180" y="56" width="136" height="76" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="248" y="84" textAnchor="middle" fontSize="17" fontWeight="700" fill="#0f172a">
          M
        </text>
        <text x="248" y="104" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0f172a">
          Matter
        </text>
        <text x="248" y="122" textAnchor="middle" fontSize="10" fill="#475569">
          its material
        </text>

        <rect x="332" y="56" width="136" height="76" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="400" y="84" textAnchor="middle" fontSize="17" fontWeight="700" fill="#0f172a">
          E
        </text>
        <text x="400" y="104" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0f172a">
          Energy
        </text>
        <text x="400" y="122" textAnchor="middle" fontSize="10" fill="#475569">
          the action
        </text>

        <rect x="484" y="56" width="136" height="76" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="552" y="84" textAnchor="middle" fontSize="17" fontWeight="700" fill="#0f172a">
          S
        </text>
        <text x="552" y="104" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0f172a">
          Space
        </text>
        <text x="552" y="122" textAnchor="middle" fontSize="10" fill="#475569">
          the place
        </text>

        <rect x="636" y="56" width="136" height="76" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="704" y="84" textAnchor="middle" fontSize="17" fontWeight="700" fill="#0f172a">
          T
        </text>
        <text x="704" y="104" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0f172a">
          Time
        </text>
        <text x="704" y="122" textAnchor="middle" fontSize="10" fill="#475569">
          the period
        </text>

        <rect x="60" y="152" width="680" height="54" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="400" y="174" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#475569">
          COMPOUND SUBJECT
        </text>
        <text x="400" y="196" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">
          Study of library services to children in Nigeria
        </text>

        <rect x="28" y="246" width="136" height="74" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="96" y="266" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#475569">
          PERSONALITY
        </text>
        <text x="96" y="290" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          children
        </text>
        <text x="96" y="310" textAnchor="middle" fontSize="9.5" fill="#475569">
          the entity served
        </text>

        <rect x="180" y="246" width="136" height="74" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
        <text x="248" y="266" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#475569">
          MATTER
        </text>
        <text x="248" y="290" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          absent
        </text>
        <text x="248" y="310" textAnchor="middle" fontSize="9.5" fill="#475569">
          reject the facet
        </text>

        <rect x="332" y="246" width="136" height="74" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="400" y="266" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#475569">
          ENERGY
        </text>
        <text x="400" y="290" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          library services
        </text>
        <text x="400" y="310" textAnchor="middle" fontSize="9.5" fill="#475569">
          the action
        </text>

        <rect x="484" y="246" width="136" height="74" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="552" y="266" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#475569">
          SPACE
        </text>
        <text x="552" y="290" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          Nigeria
        </text>
        <text x="552" y="310" textAnchor="middle" fontSize="9.5" fill="#475569">
          the place
        </text>

        <rect x="636" y="246" width="136" height="74" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
        <text x="704" y="266" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#475569">
          TIME
        </text>
        <text x="704" y="290" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          absent
        </text>
        <text x="704" y="310" textAnchor="middle" fontSize="9.5" fill="#475569">
          reject the facet
        </text>

        <rect x="20" y="344" width="760" height="58" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="400" y="366" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0f172a">
          Analyse first: keep only the facets the subject actually carries
        </text>
        <text x="400" y="388" textAnchor="middle" fontSize="10.5" fill="#475569">
          Reject absent facets — this subject has no Matter and no Time
        </text>

        <defs>
          <marker id="arrow-ch8" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
            <path d="M0,0 L7,3 L0,6 z" fill="#64748b" />
          </marker>
        </defs>
        <line x1="400" y1="206" x2="96" y2="240" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch8)" />
        <line x1="400" y1="206" x2="248" y2="240" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch8)" />
        <line x1="400" y1="206" x2="400" y2="240" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch8)" />
        <line x1="400" y1="206" x2="552" y2="240" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch8)" />
        <line x1="400" y1="206" x2="704" y2="240" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch8)" />
      </svg>
    ),
  },

  'ch9-pre-post-coordinate': {
    title: TITLE_9,
    caption:
      'Pre-coordinate systems fuse the facets into one heading that the indexer browses as a fixed string; post-coordinate systems store atomic terms that the searcher combines with Boolean AND/OR at query time. The trade-off is a controlled entry point on the left against combinational freedom on the right.',
    Comp: ({ className }) => (
      <svg viewBox="0 0 800 420" className={className} role="img" aria-label={TITLE_9}>
        <rect width="800" height="420" fill="#f8fafc" />
        <text x="400" y="34" textAnchor="middle" fontSize="16" fontWeight="700" fill="#0f172a">
          Pre-Coordinate vs Post-Coordinate
        </text>

        <rect x="20" y="58" width="370" height="304" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="205" y="84" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          PRE-COORDINATE
        </text>
        <rect x="40" y="98" width="330" height="92" rx="10" fill="#ffffff" stroke="#6366f1" strokeWidth="2" />
        <text x="205" y="124" textAnchor="middle" fontSize="13.5" fontWeight="700" fill="#0f172a">
          Academic libraries --
        </text>
        <text x="205" y="148" textAnchor="middle" fontSize="13.5" fontWeight="700" fill="#0f172a">
          Automation --
        </text>
        <text x="205" y="172" textAnchor="middle" fontSize="13.5" fontWeight="700" fill="#0f172a">
          Developing Countries
        </text>
        <rect x="40" y="226" width="330" height="54" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="205" y="248" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          Browsed as one string
        </text>
        <text x="205" y="268" textAnchor="middle" fontSize="10.5" fill="#475569">
          one heading, fixed order, filed as written
        </text>
        <rect x="40" y="292" width="330" height="56" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
        <text x="205" y="314" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0f172a">
          Order fixed at indexing time
        </text>
        <text x="205" y="334" textAnchor="middle" fontSize="10.5" fill="#475569">
          facets cannot be re-combined later
        </text>

        <rect x="410" y="58" width="370" height="304" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="595" y="84" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          POST-COORDINATE
        </text>
        <rect x="425" y="98" width="100" height="54" rx="10" fill="#ffffff" stroke="#10b981" strokeWidth="2" />
        <text x="475" y="120" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0f172a">
          Academic
        </text>
        <text x="475" y="138" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0f172a">
          libraries
        </text>
        <rect x="545" y="98" width="100" height="54" rx="10" fill="#ffffff" stroke="#10b981" strokeWidth="2" />
        <text x="595" y="130" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0f172a">
          Automation
        </text>
        <rect x="665" y="98" width="100" height="54" rx="10" fill="#ffffff" stroke="#10b981" strokeWidth="2" />
        <text x="715" y="120" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0f172a">
          Developing
        </text>
        <text x="715" y="138" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0f172a">
          countries
        </text>
        <rect x="425" y="228" width="340" height="64" rx="10" fill="#ffffff" stroke="#10b981" strokeWidth="2" />
        <text x="595" y="250" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0f172a">
          Query built at search time
        </text>
        <text x="595" y="270" textAnchor="middle" fontSize="11" fill="#334155">
          Academic libraries AND Automation
        </text>
        <text x="595" y="286" textAnchor="middle" fontSize="11" fill="#334155">
          AND Developing countries
        </text>
        <rect x="425" y="304" width="340" height="44" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
        <text x="595" y="322" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#0f172a">
          OR adds synonyms at run time
        </text>
        <text x="595" y="338" textAnchor="middle" fontSize="10" fill="#475569">
          automation OR computerization
        </text>

        <rect x="20" y="374" width="760" height="34" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
        <text x="400" y="396" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#0f172a">
          Pre-coordinate: the indexer builds the string. Post-coordinate: the searcher builds it.
        </text>

        <defs>
          <marker id="arrow-ch9" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
            <path d="M0,0 L7,3 L0,6 z" fill="#64748b" />
          </marker>
        </defs>
        <line x1="205" y1="194" x2="205" y2="222" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch9)" />
        <line x1="475" y1="158" x2="475" y2="224" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch9)" />
        <line x1="595" y1="158" x2="595" y2="224" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch9)" />
        <line x1="715" y1="158" x2="715" y2="224" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch9)" />
        <rect x="462" y="186" width="26" height="16" fill="#ecfdf5" />
        <text x="475" y="198" textAnchor="middle" fontSize="10" fontWeight="700" fill="#475569">
          AND
        </text>
        <rect x="582" y="186" width="26" height="16" fill="#ecfdf5" />
        <text x="595" y="198" textAnchor="middle" fontSize="10" fontWeight="700" fill="#475569">
          AND
        </text>
        <rect x="702" y="186" width="26" height="16" fill="#ecfdf5" />
        <text x="715" y="198" textAnchor="middle" fontSize="10" fontWeight="700" fill="#475569">
          AND
        </text>
      </svg>
    ),
  },

  'ch10-chain-indexing': {
    title: TITLE_10,
    caption:
      'Chain indexing decomposes the class number and makes one alphabetical entry at each step, running from the right-most (most specific) term back toward the root. The ladder of cards lets a user who looks up "Classification" or "Library science" reach the same classified shelf.',
    Comp: ({ className }) => (
      <svg viewBox="0 0 800 420" className={className} role="img" aria-label={TITLE_10}>
        <rect width="800" height="420" fill="#f8fafc" />
        <text x="400" y="34" textAnchor="middle" fontSize="16" fontWeight="700" fill="#0f172a">
          Chain Indexing: Right to Left, Entry at Each Step
        </text>

        <text x="160" y="64" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#475569">
          CLASS CHAIN · general → specific
        </text>
        <rect x="45" y="76" width="230" height="56" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="160" y="100" textAnchor="middle" fontSize="13.5" fontWeight="700" fill="#0f172a">
          Library science
        </text>
        <text x="160" y="120" textAnchor="middle" fontSize="10.5" fill="#475569">
          class 025 · root
        </text>
        <rect x="45" y="156" width="230" height="56" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="160" y="180" textAnchor="middle" fontSize="13.5" fontWeight="700" fill="#0f172a">
          Classification
        </text>
        <text x="160" y="200" textAnchor="middle" fontSize="10.5" fill="#475569">
          class 025.44
        </text>
        <rect x="45" y="236" width="230" height="56" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="160" y="260" textAnchor="middle" fontSize="13.5" fontWeight="700" fill="#0f172a">
          B18
        </text>
        <text x="160" y="280" textAnchor="middle" fontSize="10.5" fill="#475569">
          book mark
        </text>
        <rect x="45" y="304" width="230" height="54" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
        <text x="160" y="326" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#0f172a">
          B18 = book mark
        </text>
        <text x="160" y="344" textAnchor="middle" fontSize="10" fill="#475569">
          stopping rule · no subject entry
        </text>

        <text x="545" y="64" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#475569">
          INDEX LADDER · right → left
        </text>
        <rect x="545" y="76" width="210" height="76" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="650" y="102" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#475569">
          1 · RIGHTMOST TERM
        </text>
        <text x="650" y="126" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">
          Classification
        </text>
        <text x="650" y="144" textAnchor="middle" fontSize="11" fill="#334155">
          025.44 B18
        </text>

        <rect x="445" y="176" width="210" height="76" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="550" y="202" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#475569">
          2 · NEXT BROADER
        </text>
        <text x="550" y="226" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">
          Library science
        </text>
        <text x="550" y="244" textAnchor="middle" fontSize="11" fill="#334155">
          025
        </text>

        <rect x="345" y="276" width="210" height="76" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="450" y="302" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#475569">
          3 · FILED A–Z
        </text>
        <text x="450" y="326" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">
          Alphabetical file
        </text>
        <text x="450" y="344" textAnchor="middle" fontSize="11" fill="#334155">
          C before L · see also
        </text>

        <rect x="20" y="374" width="760" height="34" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="400" y="396" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#0f172a">
          Each step converts one link of the hierarchy into one alphabetical entry
        </text>

        <defs>
          <marker id="arrow-ch10" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
            <path d="M0,0 L7,3 L0,6 z" fill="#64748b" />
          </marker>
        </defs>
        <line x1="160" y1="132" x2="160" y2="152" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch10)" />
        <line x1="160" y1="212" x2="160" y2="232" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch10)" />
        <line x1="590" y1="156" x2="540" y2="172" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch10)" />
        <line x1="490" y1="256" x2="440" y2="272" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch10)" />
      </svg>
    ),
  },
};
