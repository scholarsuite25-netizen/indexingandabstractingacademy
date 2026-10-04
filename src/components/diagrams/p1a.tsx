import { DiagramId } from '../../data/bookTypes';
import type { DiagramEntry } from './registry';

/*
 * DIAGRAM STYLE GUIDE (p1a: home-hero + chapters 1-5)
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

const TITLE_HOME = 'The Indexing & Abstracting Knowledge Map';
const TITLE_CH1 = 'The Indexing Process, End to End';
const TITLE_CH2 = 'Aboutness vs. Mentions';
const TITLE_CH3 = 'Controlled vs. Natural Language';
const TITLE_CH4 = 'Four Eras of Bibliographic Control';
const TITLE_CH5 = 'Thesaurus Construction in 11 Steps';

export const DIAGRAMS_P1A: Partial<Record<DiagramId, DiagramEntry>> = {
  'home-hero': {
    title: TITLE_HOME,
    caption:
      'The course map: documents pass through subject analysis and abstracting, are organized in an indexing language, and reach the user as retrieval. User needs feed back into the process, and the footer chips name the standards that anchor the course.',
    Comp: ({ className }) => (
      <svg viewBox="0 0 800 420" className={className} role="img" aria-label={TITLE_HOME}>
        <rect width="800" height="420" fill="#f8fafc" />
        <text x="400" y="34" textAnchor="middle" fontSize="16" fontWeight="700" fill="#0f172a">
          IndexMaster · From Documents to Discovery
        </text>

        <rect x="30" y="92" width="140" height="80" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="100" y="120" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          Documents
        </text>
        <text x="100" y="142" textAnchor="middle" fontSize="10.5" fill="#475569">
          articles · reports
        </text>
        <text x="100" y="158" textAnchor="middle" fontSize="10.5" fill="#475569">
          theses · data
        </text>

        <rect x="225" y="70" width="175" height="76" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="312" y="98" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          Subject analysis
        </text>
        <text x="312" y="120" textAnchor="middle" fontSize="10.5" fill="#475569">
          what is it about?
        </text>
        <text x="312" y="136" textAnchor="middle" fontSize="10.5" fill="#475569">
          → candidate concepts
        </text>

        <rect x="225" y="166" width="175" height="76" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
        <text x="312" y="194" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          Abstracting
        </text>
        <text x="312" y="216" textAnchor="middle" fontSize="10.5" fill="#475569">
          summary: purpose,
        </text>
        <text x="312" y="232" textAnchor="middle" fontSize="10.5" fill="#475569">
          method, findings
        </text>

        <rect x="445" y="112" width="175" height="80" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="532" y="142" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          Indexing language
        </text>
        <text x="532" y="164" textAnchor="middle" fontSize="10.5" fill="#475569">
          LCSH · MeSH
        </text>
        <text x="532" y="180" textAnchor="middle" fontSize="10.5" fill="#475569">
          thesauri · Z39.19
        </text>

        <rect x="660" y="112" width="115" height="80" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="717" y="146" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          Retrieval
        </text>
        <text x="717" y="168" textAnchor="middle" fontSize="10.5" fill="#475569">
          the user finds
        </text>
        <text x="717" y="184" textAnchor="middle" fontSize="10.5" fill="#475569">
          what they need
        </text>

        <rect x="300" y="278" width="215" height="44" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="407" y="305" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#0f172a">
          User needs &amp; queries
        </text>

        <text x="400" y="342" textAnchor="middle" fontSize="10" fontWeight="700" fill="#475569">
          STANDARDS ANCHORING THE COURSE
        </text>
        <rect x="146" y="352" width="120" height="38" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
        <text x="206" y="376" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0f172a">
          LIS 814
        </text>
        <rect x="290" y="352" width="210" height="38" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
        <text x="395" y="376" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0f172a">
          ANSI/NISO Z39.19
        </text>
        <rect x="524" y="352" width="130" height="38" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
        <text x="589" y="376" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0f172a">
          Z39.14
        </text>

        <defs>
          <marker id="arrow-home-hero" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
            <path d="M0,0 L7,3 L0,6 z" fill="#64748b" />
          </marker>
        </defs>
        <line x1="170" y1="118" x2="221" y2="100" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-home-hero)" />
        <line x1="170" y1="146" x2="221" y2="190" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-home-hero)" />
        <line x1="400" y1="120" x2="441" y2="140" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-home-hero)" />
        <line x1="400" y1="192" x2="441" y2="166" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-home-hero)" />
        <line x1="620" y1="152" x2="656" y2="152" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-home-hero)" />
        <line x1="717" y1="192" x2="717" y2="300" stroke="#64748b" strokeWidth="2" />
        <line x1="717" y1="300" x2="519" y2="300" stroke="#64748b" strokeWidth="2" />
        <line x1="296" y1="300" x2="100" y2="300" stroke="#64748b" strokeWidth="2" />
        <line x1="100" y1="300" x2="100" y2="176" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-home-hero)" />
      </svg>
    ),
  },

  'ch1-indexing-process': {
    title: TITLE_CH1,
    caption:
      'Indexing runs as a loop: documents are read for aboutness, concepts become authorized descriptors, and the resulting index plus abstract supports retrieval. When retrieval fails, feedback sends the indexer back to re-analyse the document.',
    Comp: ({ className }) => (
      <svg viewBox="0 0 800 420" className={className} role="img" aria-label={TITLE_CH1}>
        <rect width="800" height="420" fill="#f8fafc" />
        <text x="400" y="34" textAnchor="middle" fontSize="16" fontWeight="700" fill="#0f172a">
          Six Steps from Document to Retrieval
        </text>

        <rect x="40" y="86" width="170" height="76" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="125" y="112" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          1 · Documents
        </text>
        <text x="125" y="134" textAnchor="middle" fontSize="10.5" fill="#475569">
          the raw material
        </text>
        <text x="125" y="150" textAnchor="middle" fontSize="10.5" fill="#475569">
          unstructured text
        </text>

        <rect x="315" y="86" width="170" height="76" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="400" y="112" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          2 · Subject analysis
        </text>
        <text x="400" y="134" textAnchor="middle" fontSize="10.5" fill="#475569">
          read for aboutness
        </text>
        <text x="400" y="150" textAnchor="middle" fontSize="10.5" fill="#475569">
          list the concepts
        </text>

        <rect x="590" y="86" width="170" height="76" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="675" y="112" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          3 · Descriptors
        </text>
        <text x="675" y="134" textAnchor="middle" fontSize="10.5" fill="#475569">
          match to authorized
        </text>
        <text x="675" y="150" textAnchor="middle" fontSize="10.5" fill="#475569">
          terms in the list
        </text>

        <rect x="590" y="230" width="170" height="76" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="675" y="256" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          4 · Indexing language
        </text>
        <text x="675" y="278" textAnchor="middle" fontSize="10.5" fill="#475569">
          LCSH · MeSH · Z39.19
        </text>
        <text x="675" y="294" textAnchor="middle" fontSize="10.5" fill="#475569">
          structure and links
        </text>

        <rect x="315" y="230" width="170" height="76" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
        <text x="400" y="256" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          5 · Index &amp; abstract
        </text>
        <text x="400" y="278" textAnchor="middle" fontSize="10.5" fill="#475569">
          descriptors plus a
        </text>
        <text x="400" y="294" textAnchor="middle" fontSize="10.5" fill="#475569">
          short summary
        </text>

        <rect x="40" y="230" width="170" height="76" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="125" y="256" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          6 · User retrieval
        </text>
        <text x="125" y="278" textAnchor="middle" fontSize="10.5" fill="#475569">
          the query matches
        </text>
        <text x="125" y="294" textAnchor="middle" fontSize="10.5" fill="#475569">
          the index terms
        </text>

        <rect x="40" y="330" width="720" height="56" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
        <text x="400" y="354" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          Feedback loop: failed retrievals send the indexer back
        </text>
        <text x="400" y="374" textAnchor="middle" fontSize="11" fill="#475569">
          re-analyse the document, re-assign descriptors, revise the abstract
        </text>

        <defs>
          <marker id="arrow-ch1-indexing-process" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
            <path d="M0,0 L7,3 L0,6 z" fill="#64748b" />
          </marker>
        </defs>
        <line x1="210" y1="124" x2="311" y2="124" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch1-indexing-process)" />
        <line x1="485" y1="124" x2="586" y2="124" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch1-indexing-process)" />
        <line x1="675" y1="162" x2="675" y2="226" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch1-indexing-process)" />
        <line x1="590" y1="268" x2="489" y2="268" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch1-indexing-process)" />
        <line x1="315" y1="268" x2="214" y2="268" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch1-indexing-process)" />
        <path d="M40,268 L22,268 L22,226" fill="none" stroke="#64748b" strokeWidth="2" />
        <text x="22" y="201" textAnchor="middle" fontSize="10" fontWeight="700" fill="#475569" transform="rotate(-90 22 201)">
          feedback
        </text>
        <path d="M22,172 L22,124 L36,124" fill="none" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch1-indexing-process)" />
      </svg>
    ),
  },

  'ch2-aboutness-mentions': {
    title: TITLE_CH2,
    caption:
      'A document is about one central topic but merely mentions many others. Indexers abstract the aboutness into descriptors and leave incidental mentions to full-text search, where they count as noise rather than as headings.',
    Comp: ({ className }) => (
      <svg viewBox="0 0 800 420" className={className} role="img" aria-label={TITLE_CH2}>
        <rect width="800" height="420" fill="#f8fafc" />
        <text x="400" y="34" textAnchor="middle" fontSize="16" fontWeight="700" fill="#0f172a">
          What a Document Is About vs. What It Mentions
        </text>

        <rect x="30" y="60" width="440" height="300" rx="10" fill="#ffffff" stroke="#6366f1" strokeWidth="2" />
        <text x="250" y="88" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0f172a">
          Document: “AI in Nigerian libraries”
        </text>

        <rect x="95" y="112" width="310" height="74" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="250" y="134" textAnchor="middle" fontSize="10" fontWeight="700" fill="#475569">
          ABOUT — this is indexed
        </text>
        <text x="250" y="160" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">
          AI adoption in university libraries
        </text>
        <text x="250" y="180" textAnchor="middle" fontSize="10.5" fill="#475569">
          the thesis of the paper
        </text>

        <text x="250" y="224" textAnchor="middle" fontSize="10" fontWeight="700" fill="#475569">
          MENTIONS — incidental, not indexed
        </text>

        <rect x="47" y="240" width="126" height="44" rx="10" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" />
        <text x="110" y="268" textAnchor="middle" fontSize="11" fill="#64748b">
          weather report
        </text>
        <rect x="187" y="240" width="126" height="44" rx="10" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" />
        <text x="250" y="268" textAnchor="middle" fontSize="11" fill="#64748b">
          football results
        </text>
        <rect x="327" y="240" width="126" height="44" rx="10" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" />
        <text x="390" y="268" textAnchor="middle" fontSize="11" fill="#64748b">
          printer jam
        </text>

        <text x="250" y="316" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#334155">
          One paper is about one thing; it mentions many.
        </text>
        <text x="250" y="338" textAnchor="middle" fontSize="11" fill="#475569">
          Index the aboutness, not the passing detail.
        </text>

        <rect x="510" y="110" width="260" height="90" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="640" y="142" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">
          About → indexed
        </text>
        <text x="640" y="166" textAnchor="middle" fontSize="11" fill="#475569">
          becomes a descriptor
        </text>
        <text x="640" y="184" textAnchor="middle" fontSize="11" fill="#475569">
          retrievable later
        </text>

        <rect x="510" y="250" width="260" height="90" rx="10" fill="#fef2f2" stroke="#ef4444" strokeWidth="2" />
        <text x="640" y="282" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">
          Mentions → noise
        </text>
        <text x="640" y="306" textAnchor="middle" fontSize="11" fill="#475569">
          left to full-text search
        </text>
        <text x="640" y="324" textAnchor="middle" fontSize="11" fill="#475569">
          no heading assigned
        </text>

        <text x="400" y="394" textAnchor="middle" fontSize="11" fill="#475569">
          Aboutness drives vocabulary control; incidental detail is what noise looks like
        </text>

        <defs>
          <marker id="arrow-ch2-aboutness-mentions" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
            <path d="M0,0 L7,3 L0,6 z" fill="#64748b" />
          </marker>
        </defs>
        <line x1="405" y1="149" x2="506" y2="150" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch2-aboutness-mentions)" />
        <line x1="453" y1="262" x2="506" y2="285" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch2-aboutness-mentions)" />
      </svg>
    ),
  },

  'ch3-controlled-natural': {
    title: TITLE_CH3,
    caption:
      'A controlled vocabulary collapses synonyms into one authorized term, with USE pointing from the rejected variant and UF recording it back. Natural language leaves every writer free to pick a different word, so the same idea scatters and retrieval becomes unpredictable.',
    Comp: ({ className }) => (
      <svg viewBox="0 0 800 420" className={className} role="img" aria-label={TITLE_CH3}>
        <rect width="800" height="420" fill="#f8fafc" />
        <text x="400" y="34" textAnchor="middle" fontSize="16" fontWeight="700" fill="#0f172a">
          One Term per Concept vs. Every Writer for Themselves
        </text>

        <rect x="30" y="60" width="365" height="306" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="212" y="88" textAnchor="middle" fontSize="15" fontWeight="700" fill="#0f172a">
          Controlled vocabulary
        </text>
        <text x="212" y="106" textAnchor="middle" fontSize="10" fill="#475569">
          synonyms collapse to one preferred term
        </text>

        <rect x="45" y="124" width="100" height="34" rx="10" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" />
        <text x="95" y="146" textAnchor="middle" fontSize="11.5" fill="#334155">
          video
        </text>
        <rect x="162" y="124" width="100" height="34" rx="10" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" />
        <text x="212" y="146" textAnchor="middle" fontSize="11.5" fill="#334155">
          film
        </text>
        <rect x="279" y="124" width="100" height="34" rx="10" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" />
        <text x="329" y="146" textAnchor="middle" fontSize="11.5" fill="#334155">
          movie
        </text>

        <rect x="105" y="208" width="215" height="56" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="212" y="232" textAnchor="middle" fontSize="13.5" fontWeight="700" fill="#0f172a">
          motion pictures
        </text>
        <text x="212" y="252" textAnchor="middle" fontSize="10.5" fill="#475569">
          the authorized heading
        </text>

        <text x="212" y="292" textAnchor="middle" fontSize="11" fill="#334155">
          UF: video · film · movie
        </text>
        <text x="212" y="322" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0f172a">
          one concept = one term
        </text>
        <text x="212" y="344" textAnchor="middle" fontSize="10.5" fill="#475569">
          USE/UF make the synonyms visible
        </text>

        <rect x="415" y="60" width="355" height="306" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
        <text x="592" y="88" textAnchor="middle" fontSize="15" fontWeight="700" fill="#0f172a">
          Natural language
        </text>
        <text x="592" y="106" textAnchor="middle" fontSize="10" fill="#475569">
          each writer picks a different word
        </text>

        <rect x="440" y="126" width="100" height="34" rx="10" fill="#ffffff" stroke="#f59e0b" strokeWidth="2" />
        <text x="490" y="148" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#334155">
          video
        </text>
        <rect x="570" y="158" width="100" height="34" rx="10" fill="#ffffff" stroke="#f59e0b" strokeWidth="2" />
        <text x="620" y="180" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#334155">
          film
        </text>
        <rect x="655" y="120" width="100" height="34" rx="10" fill="#ffffff" stroke="#f59e0b" strokeWidth="2" />
        <text x="705" y="142" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#334155">
          movie
        </text>

        <rect x="450" y="238" width="285" height="66" rx="10" fill="#fef2f2" stroke="#ef4444" strokeWidth="2" />
        <text x="592" y="266" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          “jaguar” = cat or car?
        </text>
        <text x="592" y="288" textAnchor="middle" fontSize="10.5" fill="#475569">
          one string, many meanings
        </text>

        <text x="592" y="332" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#0f172a">
          same idea, scattered labels
        </text>
        <text x="592" y="352" textAnchor="middle" fontSize="10.5" fill="#475569">
          recall depends on guessing every word
        </text>

        <text x="400" y="394" textAnchor="middle" fontSize="11" fill="#475569">
          Control trades flexibility for predictable recall; keywords do the reverse
        </text>

        <defs>
          <marker id="arrow-ch3-controlled-natural" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
            <path d="M0,0 L7,3 L0,6 z" fill="#64748b" />
          </marker>
        </defs>
        <line x1="95" y1="158" x2="150" y2="204" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch3-controlled-natural)" />
        <line x1="212" y1="158" x2="212" y2="204" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch3-controlled-natural)" />
        <line x1="329" y1="158" x2="274" y2="204" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch3-controlled-natural)" />
        <rect x="198" y="176" width="28" height="18" fill="#ecfdf5" />
        <text x="212" y="190" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#475569">
          USE
        </text>
        <line x1="490" y1="160" x2="556" y2="234" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch3-controlled-natural)" />
        <line x1="620" y1="192" x2="600" y2="234" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch3-controlled-natural)" />
        <line x1="705" y1="154" x2="656" y2="234" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch3-controlled-natural)" />
      </svg>
    ),
  },

  'ch4-bibliographic-control': {
    title: TITLE_CH4,
    caption:
      'Bibliographic control moves from card catalogs through MARC records and persistent identifiers to web-scale union catalogs, each era adding linkage rather than replacing what came before. The UBC loop shows the shared-record chain that lets one description serve many libraries.',
    Comp: ({ className }) => (
      <svg viewBox="0 0 800 420" className={className} role="img" aria-label={TITLE_CH4}>
        <rect width="800" height="420" fill="#f8fafc" />
        <text x="400" y="34" textAnchor="middle" fontSize="16" fontWeight="700" fill="#0f172a">
          Four Eras of Bibliographic Control
        </text>

        <path d="M685,136 C685,74 115,74 115,136" fill="none" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch4-bibliographic-control)" />
        <rect x="315" y="78" width="170" height="30" rx="10" fill="#f8fafc" />
        <text x="400" y="98" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#334155">
          UBC: records shared
        </text>

        <rect x="38" y="140" width="155" height="110" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="115" y="164" textAnchor="middle" fontSize="10" fontWeight="700" fill="#475569">
          1870s
        </text>
        <text x="115" y="190" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          Card catalog
        </text>
        <text x="115" y="214" textAnchor="middle" fontSize="10.5" fill="#334155">
          manuscript cards
        </text>
        <text x="115" y="232" textAnchor="middle" fontSize="10.5" fill="#334155">
          one shelf, one library
        </text>

        <rect x="228" y="140" width="155" height="110" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="305" y="164" textAnchor="middle" fontSize="10" fontWeight="700" fill="#475569">
          1960s–70s
        </text>
        <text x="305" y="190" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          MARC &amp; UBC
        </text>
        <text x="305" y="214" textAnchor="middle" fontSize="10.5" fill="#334155">
          machine-readable
        </text>
        <text x="305" y="232" textAnchor="middle" fontSize="10.5" fill="#334155">
          shared cataloging
        </text>

        <rect x="418" y="140" width="155" height="110" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
        <text x="495" y="164" textAnchor="middle" fontSize="10" fontWeight="700" fill="#475569">
          1990s
        </text>
        <text x="495" y="190" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          DOIs &amp; metadata
        </text>
        <text x="495" y="214" textAnchor="middle" fontSize="10.5" fill="#334155">
          persistent IDs
        </text>
        <text x="495" y="232" textAnchor="middle" fontSize="10.5" fill="#334155">
          exportable records
        </text>

        <rect x="608" y="140" width="155" height="110" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="685" y="164" textAnchor="middle" fontSize="10" fontWeight="700" fill="#475569">
          today
        </text>
        <text x="685" y="190" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          Union catalogs
        </text>
        <text x="685" y="214" textAnchor="middle" fontSize="10.5" fill="#334155">
          web-scale search
        </text>
        <text x="685" y="232" textAnchor="middle" fontSize="10.5" fill="#334155">
          discovery layers
        </text>

        <rect x="38" y="290" width="725" height="64" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="400" y="316" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          Each era adds linkage — none of them replaces the last
        </text>
        <text x="400" y="340" textAnchor="middle" fontSize="11" fill="#475569">
          cards → machine records → persistent IDs → shared catalogs
        </text>

        <text x="400" y="390" textAnchor="middle" fontSize="11" fill="#475569">
          UBC: describe each publication once, then share the record worldwide
        </text>

        <defs>
          <marker id="arrow-ch4-bibliographic-control" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
            <path d="M0,0 L7,3 L0,6 z" fill="#64748b" />
          </marker>
        </defs>
        <line x1="193" y1="195" x2="224" y2="195" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch4-bibliographic-control)" />
        <line x1="383" y1="195" x2="414" y2="195" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch4-bibliographic-control)" />
        <line x1="573" y1="195" x2="604" y2="195" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch4-bibliographic-control)" />
      </svg>
    ),
  },

  'ch5-thesaurus-steps': {
    title: TITLE_CH5,
    caption:
      'The ANSI/NISO Z39.19 recipe runs 11 steps through five phases: fix the scope, harvest terms, structure them with USE/UF and BT/NT/RT, publish the displays, then keep the vocabulary under review. Step 11 loops back to step 1, because a thesaurus is never finished.',
    Comp: ({ className }) => (
      <svg viewBox="0 0 800 420" className={className} role="img" aria-label={TITLE_CH5}>
        <rect width="800" height="420" fill="#f8fafc" />
        <text x="400" y="34" textAnchor="middle" fontSize="16" fontWeight="700" fill="#0f172a">
          ANSI/NISO Z39.19: 11 Steps in 5 Phases
        </text>

        <rect x="30" y="64" width="132" height="282" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="96" y="88" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#475569">
          PHASE 1
        </text>
        <text x="96" y="108" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          Scope
        </text>
        <rect x="38" y="122" width="116" height="56" rx="10" fill="#ffffff" stroke="#6366f1" strokeWidth="2" />
        <text x="96" y="146" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#0f172a">
          1 · Define scope
        </text>
        <text x="96" y="164" textAnchor="middle" fontSize="10" fill="#475569">
          purpose &amp; limits
        </text>
        <rect x="38" y="190" width="116" height="56" rx="10" fill="#ffffff" stroke="#6366f1" strokeWidth="2" />
        <text x="96" y="214" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#0f172a">
          2 · Identify users
        </text>
        <text x="96" y="232" textAnchor="middle" fontSize="10" fill="#475569">
          audience + texts
        </text>

        <rect x="182" y="64" width="132" height="282" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="248" y="88" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#475569">
          PHASE 2
        </text>
        <text x="248" y="108" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          Harvest
        </text>
        <rect x="190" y="122" width="116" height="56" rx="10" fill="#ffffff" stroke="#10b981" strokeWidth="2" />
        <text x="248" y="146" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#0f172a">
          3 · Collect terms
        </text>
        <text x="248" y="164" textAnchor="middle" fontSize="10" fill="#475569">
          from the literature
        </text>
        <rect x="190" y="190" width="116" height="56" rx="10" fill="#ffffff" stroke="#10b981" strokeWidth="2" />
        <text x="248" y="214" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#0f172a">
          4 · Check synonyms
        </text>
        <text x="248" y="232" textAnchor="middle" fontSize="10" fill="#475569">
          one preferred term
        </text>

        <rect x="334" y="64" width="132" height="282" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
        <text x="400" y="88" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#475569">
          PHASE 3
        </text>
        <text x="400" y="108" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          Structure
        </text>
        <rect x="342" y="122" width="116" height="56" rx="10" fill="#ffffff" stroke="#f59e0b" strokeWidth="2" />
        <text x="400" y="146" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#0f172a">
          5 · Assess terms
        </text>
        <text x="400" y="164" textAnchor="middle" fontSize="10" fill="#475569">
          specificity, utility
        </text>
        <rect x="342" y="190" width="116" height="56" rx="10" fill="#ffffff" stroke="#f59e0b" strokeWidth="2" />
        <text x="400" y="214" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#0f172a">
          6 · Assign links
        </text>
        <text x="400" y="232" textAnchor="middle" fontSize="10" fill="#475569">
          USE/UF · BT · NT
        </text>
        <rect x="342" y="258" width="116" height="56" rx="10" fill="#ffffff" stroke="#f59e0b" strokeWidth="2" />
        <text x="400" y="282" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#0f172a">
          7 · Add RT links
        </text>
        <text x="400" y="300" textAnchor="middle" fontSize="10" fill="#475569">
          associative links
        </text>

        <rect x="486" y="64" width="132" height="282" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="552" y="88" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#475569">
          PHASE 4
        </text>
        <text x="552" y="108" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          Display
        </text>
        <rect x="494" y="122" width="116" height="56" rx="10" fill="#ffffff" stroke="#6366f1" strokeWidth="2" />
        <text x="552" y="146" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#0f172a">
          8 · Permute view
        </text>
        <text x="552" y="164" textAnchor="middle" fontSize="10" fill="#475569">
          rotated entries
        </text>
        <rect x="494" y="190" width="116" height="56" rx="10" fill="#ffffff" stroke="#6366f1" strokeWidth="2" />
        <text x="552" y="214" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#0f172a">
          9 · Publish views
        </text>
        <text x="552" y="232" textAnchor="middle" fontSize="10" fill="#475569">
          alpha + hierarchy
        </text>

        <rect x="638" y="64" width="132" height="282" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="704" y="88" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#475569">
          PHASE 5
        </text>
        <text x="704" y="108" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          Maintain
        </text>
        <rect x="646" y="122" width="116" height="56" rx="10" fill="#ffffff" stroke="#10b981" strokeWidth="2" />
        <text x="704" y="146" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#0f172a">
          10 · Write notes
        </text>
        <text x="704" y="164" textAnchor="middle" fontSize="10" fill="#475569">
          scope notes + docs
        </text>
        <rect x="646" y="190" width="116" height="56" rx="10" fill="#ffffff" stroke="#10b981" strokeWidth="2" />
        <text x="704" y="214" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#0f172a">
          11 · Review
        </text>
        <text x="704" y="232" textAnchor="middle" fontSize="10" fill="#475569">
          feedback &amp; update
        </text>

        <text x="400" y="378" textAnchor="middle" fontSize="11" fill="#475569">
          Scope → harvest → structure → display → maintain; step 11 loops back to step 1
        </text>

        <defs>
          <marker id="arrow-ch5-thesaurus-steps" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
            <path d="M0,0 L7,3 L0,6 z" fill="#64748b" />
          </marker>
        </defs>
        <line x1="164" y1="200" x2="180" y2="200" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch5-thesaurus-steps)" />
        <line x1="316" y1="200" x2="332" y2="200" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch5-thesaurus-steps)" />
        <line x1="468" y1="200" x2="484" y2="200" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch5-thesaurus-steps)" />
        <line x1="620" y1="200" x2="636" y2="200" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch5-thesaurus-steps)" />
        <path d="M704,346 L704,362 L96,362 L96,350" fill="none" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch5-thesaurus-steps)" />
      </svg>
    ),
  },
};
