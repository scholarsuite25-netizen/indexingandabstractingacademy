import { DiagramId } from '../../data/bookTypes';
import type { DiagramEntry } from './registry';

/*
 * DIAGRAM STYLE GUIDE (part 2a: chapters 11-15)
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

const TITLE_11 = 'PRECIS: Role Operators and Rotation';
const TITLE_12 = 'KWIC and KWOC: Keyword Indexes from Titles';
const TITLE_13 = 'Exhaustivity and Specificity';
const TITLE_14 = 'Precision and Recall: The Venn View';
const TITLE_15 = 'Cranfield: The Recall-Precision Trade-off';

export const DIAGRAMS_P2A: Partial<Record<DiagramId, DiagramEntry>> = {
  'ch11-precis': {
    title: TITLE_11,
    caption:
      'PRECIS builds a subject string — “Libraries — Classification — Automated” — whose role operators (Q, P, S, A, T) carry the context. Rotating the leading term re-orders the display, but the operators stay attached to their terms, so the meaning never shifts.',
    Comp: ({ className }) => (
      <svg viewBox="0 0 800 420" className={className} role="img" aria-label={TITLE_11}>
        <rect width="800" height="420" fill="#f8fafc" />
        <text x="400" y="32" textAnchor="middle" fontSize="16" fontWeight="700" fill="#0f172a">
          PRECIS: Role Operators and Rotation
        </text>

        <rect x="200" y="50" width="400" height="52" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="400" y="70" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#475569">
          SUBJECT STRING
        </text>
        <text x="400" y="90" textAnchor="middle" fontSize="15" fontWeight="700" fill="#0f172a">
          Libraries — Classification — Automated
        </text>

        <rect x="22" y="116" width="140" height="56" rx="10" fill="#ffffff" stroke="#6366f1" strokeWidth="2" />
        <text x="92" y="142" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">
          Q · question
        </text>
        <text x="92" y="162" textAnchor="middle" fontSize="10.5" fill="#475569">
          the topic
        </text>

        <rect x="176" y="116" width="140" height="56" rx="10" fill="#ffffff" stroke="#6366f1" strokeWidth="2" />
        <text x="246" y="142" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">
          P · plan
        </text>
        <text x="246" y="162" textAnchor="middle" fontSize="10.5" fill="#475569">
          the property
        </text>

        <rect x="330" y="116" width="140" height="56" rx="10" fill="#ffffff" stroke="#6366f1" strokeWidth="2" />
        <text x="400" y="142" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">
          S · solution
        </text>
        <text x="400" y="162" textAnchor="middle" fontSize="10.5" fill="#475569">
          the method
        </text>

        <rect x="484" y="116" width="140" height="56" rx="10" fill="#ffffff" stroke="#6366f1" strokeWidth="2" />
        <text x="554" y="142" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">
          A · aspect
        </text>
        <text x="554" y="162" textAnchor="middle" fontSize="10.5" fill="#475569">
          the form
        </text>

        <rect x="638" y="116" width="140" height="56" rx="10" fill="#ffffff" stroke="#6366f1" strokeWidth="2" />
        <text x="708" y="142" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">
          T · test
        </text>
        <text x="708" y="162" textAnchor="middle" fontSize="10.5" fill="#475569">
          the measure
        </text>

        <text x="400" y="190" textAnchor="middle" fontSize="11" fill="#475569">
          Role operators stay attached to their terms
        </text>

        <text x="60" y="237" textAnchor="middle" fontSize="11" fontWeight="700" fill="#475569">
          Line 1
        </text>
        <rect x="120" y="206" width="170" height="52" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="205" y="228" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0f172a">
          Libraries
        </text>
        <text x="205" y="246" textAnchor="middle" fontSize="10" fill="#475569">
          role Q
        </text>
        <rect x="320" y="206" width="170" height="52" rx="10" fill="#ffffff" stroke="#6366f1" strokeWidth="2" />
        <text x="405" y="228" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0f172a">
          Classification
        </text>
        <text x="405" y="246" textAnchor="middle" fontSize="10" fill="#475569">
          role P
        </text>
        <rect x="520" y="206" width="170" height="52" rx="10" fill="#ffffff" stroke="#6366f1" strokeWidth="2" />
        <text x="605" y="228" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0f172a">
          Automated
        </text>
        <text x="605" y="246" textAnchor="middle" fontSize="10" fill="#475569">
          role A
        </text>
        <text x="745" y="237" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">
          Q leads
        </text>

        <text x="60" y="299" textAnchor="middle" fontSize="11" fontWeight="700" fill="#475569">
          Line 2
        </text>
        <rect x="120" y="268" width="170" height="52" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="205" y="290" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0f172a">
          Classification
        </text>
        <text x="205" y="308" textAnchor="middle" fontSize="10" fill="#475569">
          role P
        </text>
        <rect x="320" y="268" width="170" height="52" rx="10" fill="#ffffff" stroke="#6366f1" strokeWidth="2" />
        <text x="405" y="290" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0f172a">
          Automated
        </text>
        <text x="405" y="308" textAnchor="middle" fontSize="10" fill="#475569">
          role A
        </text>
        <rect x="520" y="268" width="170" height="52" rx="10" fill="#ffffff" stroke="#6366f1" strokeWidth="2" />
        <text x="605" y="290" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0f172a">
          Libraries
        </text>
        <text x="605" y="308" textAnchor="middle" fontSize="10" fill="#475569">
          role Q
        </text>
        <text x="745" y="299" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">
          P leads
        </text>

        <text x="60" y="361" textAnchor="middle" fontSize="11" fontWeight="700" fill="#475569">
          Line 3
        </text>
        <rect x="120" y="330" width="170" height="52" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="205" y="352" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0f172a">
          Automated
        </text>
        <text x="205" y="370" textAnchor="middle" fontSize="10" fill="#475569">
          role A
        </text>
        <rect x="320" y="330" width="170" height="52" rx="10" fill="#ffffff" stroke="#6366f1" strokeWidth="2" />
        <text x="405" y="352" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0f172a">
          Libraries
        </text>
        <text x="405" y="370" textAnchor="middle" fontSize="10" fill="#475569">
          role Q
        </text>
        <rect x="520" y="330" width="170" height="52" rx="10" fill="#ffffff" stroke="#6366f1" strokeWidth="2" />
        <text x="605" y="352" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0f172a">
          Classification
        </text>
        <text x="605" y="370" textAnchor="middle" fontSize="10" fill="#475569">
          role P
        </text>
        <text x="745" y="361" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">
          A leads
        </text>

        <text x="400" y="404" textAnchor="middle" fontSize="11" fill="#475569">
          Rotation moves the leading term; the role operators preserve the meaning
        </text>

        <defs>
          <marker id="arrow-ch11" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
            <path d="M0,0 L7,3 L0,6 z" fill="#64748b" />
          </marker>
        </defs>
        <line x1="292" y1="232" x2="316" y2="232" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch11)" />
        <line x1="492" y1="232" x2="516" y2="232" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch11)" />
        <line x1="292" y1="294" x2="316" y2="294" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch11)" />
        <line x1="492" y1="294" x2="516" y2="294" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch11)" />
        <line x1="292" y1="356" x2="316" y2="356" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch11)" />
        <line x1="492" y1="356" x2="516" y2="356" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch11)" />
      </svg>
    ),
  },

  'ch12-kwic-kwoc': {
    title: TITLE_12,
    caption:
      'KWIC alphabetises titles on a keyword held in a centre column, with the left and right context kept on either side; KWOC lists the keyword with the whole title beneath it. Both are derived automatically from title words only, so no vocabulary outside the title is ever indexed.',
    Comp: ({ className }) => (
      <svg viewBox="0 0 800 420" className={className} role="img" aria-label={TITLE_12}>
        <rect width="800" height="420" fill="#f8fafc" />
        <text x="400" y="30" textAnchor="middle" fontSize="16" fontWeight="700" fill="#0f172a">
          KWIC and KWOC: Two Automatic Indexes
        </text>

        <rect x="300" y="46" width="200" height="30" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="400" y="66" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0f172a">
          Source: document titles
        </text>

        <rect x="24" y="110" width="356" height="240" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="202" y="136" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">
          KWIC — keyword in context
        </text>
        <text x="93" y="160" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#475569">
          LEFT CONTEXT
        </text>
        <text x="202" y="160" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#475569">
          KEYWORD
        </text>
        <text x="311" y="160" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#475569">
          RIGHT CONTEXT
        </text>

        <rect x="158" y="172" width="88" height="40" rx="10" fill="#ffffff" stroke="#6366f1" strokeWidth="2" />
        <text x="93" y="197" textAnchor="middle" fontSize="10.5" fill="#334155">
          Indexing and
        </text>
        <text x="202" y="197" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#0f172a">
          abstracting
        </text>
        <text x="311" y="197" textAnchor="middle" fontSize="10.5" fill="#334155">
          services
        </text>

        <rect x="158" y="216" width="88" height="40" rx="10" fill="#ffffff" stroke="#6366f1" strokeWidth="2" />
        <text x="93" y="241" textAnchor="middle" fontSize="10.5" fill="#334155">
          Cataloguing of
        </text>
        <text x="202" y="241" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#0f172a">
          cataloguing
        </text>
        <text x="311" y="241" textAnchor="middle" fontSize="10.5" fill="#334155">
          rare books
        </text>

        <rect x="158" y="260" width="88" height="40" rx="10" fill="#ffffff" stroke="#6366f1" strokeWidth="2" />
        <text x="93" y="285" textAnchor="middle" fontSize="10.5" fill="#334155">
          Adoption of
        </text>
        <text x="202" y="285" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#0f172a">
          digital
        </text>
        <text x="311" y="285" textAnchor="middle" fontSize="10.5" fill="#334155">
          libraries in Nigeria
        </text>

        <text x="202" y="322" textAnchor="middle" fontSize="10.5" fill="#475569">
          context split either side of the word
        </text>
        <text x="202" y="340" textAnchor="middle" fontSize="10.5" fill="#475569">
          rows sorted A to Z by the centre column
        </text>

        <rect x="420" y="110" width="356" height="240" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="598" y="136" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">
          KWOC — keyword out of context
        </text>

        <rect x="432" y="172" width="92" height="40" rx="10" fill="#ffffff" stroke="#10b981" strokeWidth="2" />
        <text x="478" y="197" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#0f172a">
          abstracting
        </text>
        <text x="536" y="197" fontSize="10.5" fill="#334155">
          Indexing and abstracting services
        </text>

        <rect x="432" y="216" width="92" height="40" rx="10" fill="#ffffff" stroke="#10b981" strokeWidth="2" />
        <text x="478" y="241" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#0f172a">
          cataloguing
        </text>
        <text x="536" y="241" fontSize="10.5" fill="#334155">
          Cataloguing of rare books
        </text>

        <rect x="432" y="260" width="92" height="40" rx="10" fill="#ffffff" stroke="#10b981" strokeWidth="2" />
        <text x="478" y="285" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#0f172a">
          digital
        </text>
        <text x="536" y="285" fontSize="10.5" fill="#334155">
          Adoption of digital libraries in Nigeria
        </text>

        <text x="598" y="322" textAnchor="middle" fontSize="10.5" fill="#475569">
          keyword + full title, in reading order
        </text>
        <text x="598" y="340" textAnchor="middle" fontSize="10.5" fill="#475569">
          no context column to scan
        </text>

        <rect x="24" y="364" width="752" height="44" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
        <text x="400" y="384" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0f172a">
          Automatic derivation — title words only
        </text>
        <text x="400" y="400" textAnchor="middle" fontSize="10.5" fill="#475569">
          No human analysis: synonyms, spelling variants and unlisted terms are never indexed
        </text>

        <defs>
          <marker id="arrow-ch12" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
            <path d="M0,0 L7,3 L0,6 z" fill="#64748b" />
          </marker>
        </defs>
        <line x1="330" y1="78" x2="206" y2="106" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch12)" />
        <line x1="470" y1="78" x2="594" y2="106" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch12)" />
      </svg>
    ),
  },

  'ch13-exhaustivity-specificity': {
    title: TITLE_13,
    caption:
      'Exhaustivity counts how many of a document’s concepts are indexed: Pass A keeps 3 of 7 terms (low exhaustivity), Pass B takes all 7 (high exhaustivity). Specificity is a separate axis — broad terms lift recall, narrow terms lift precision, and the two rarely rise together.',
    Comp: ({ className }) => (
      <svg viewBox="0 0 800 420" className={className} role="img" aria-label={TITLE_13}>
        <rect width="800" height="420" fill="#f8fafc" />
        <text x="400" y="32" textAnchor="middle" fontSize="16" fontWeight="700" fill="#0f172a">
          Exhaustivity and Specificity
        </text>

        <rect x="24" y="64" width="200" height="180" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="124" y="88" textAnchor="middle" fontSize="13.5" fontWeight="700" fill="#0f172a">
          Document
        </text>
        <text x="124" y="106" textAnchor="middle" fontSize="10.5" fill="#475569">
          concept set (7 ideas)
        </text>
        <text x="40" y="126" fontSize="11" fill="#334155">• AI adoption</text>
        <text x="40" y="142" fontSize="11" fill="#334155">• academic libraries</text>
        <text x="40" y="158" fontSize="11" fill="#334155">• Nigeria</text>
        <text x="40" y="174" fontSize="11" fill="#334155">• staff training</text>
        <text x="40" y="190" fontSize="11" fill="#334155">• policy</text>
        <text x="40" y="206" fontSize="11" fill="#334155">• cost</text>
        <text x="40" y="222" fontSize="11" fill="#334155">• user services</text>

        <rect x="270" y="64" width="490" height="84" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
        <text x="286" y="88" fontSize="13" fontWeight="700" fill="#0f172a">
          Pass A — 3 terms · low exhaustivity
        </text>
        <rect x="286" y="100" width="140" height="36" rx="10" fill="#ffffff" stroke="#f59e0b" strokeWidth="2" />
        <text x="356" y="123" textAnchor="middle" fontSize="11" fill="#0f172a">
          AI adoption
        </text>
        <rect x="441" y="100" width="140" height="36" rx="10" fill="#ffffff" stroke="#f59e0b" strokeWidth="2" />
        <text x="511" y="123" textAnchor="middle" fontSize="11" fill="#0f172a">
          academic libraries
        </text>
        <rect x="596" y="100" width="140" height="36" rx="10" fill="#ffffff" stroke="#f59e0b" strokeWidth="2" />
        <text x="666" y="123" textAnchor="middle" fontSize="11" fill="#0f172a">
          Nigeria
        </text>

        <rect x="270" y="164" width="490" height="84" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="286" y="188" fontSize="13" fontWeight="700" fill="#0f172a">
          Pass B — 7 terms · high exhaustivity
        </text>
        <text x="286" y="212" fontSize="11" fill="#334155">
          AI adoption · academic libraries · Nigeria
        </text>
        <text x="286" y="232" fontSize="11" fill="#334155">
          staff training · policy · cost · user services
        </text>

        <text x="24" y="278" fontSize="13" fontWeight="700" fill="#0f172a">
          Specificity: broad term → narrow term
        </text>
        <text x="420" y="298" textAnchor="middle" fontSize="11" fill="#334155">
          precision rises as terms narrow
        </text>
        <text x="420" y="326" textAnchor="middle" fontSize="11" fill="#334155">
          recall rises as terms broaden
        </text>
        <text x="140" y="386" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0f172a">
          Broad
        </text>
        <text x="140" y="402" textAnchor="middle" fontSize="10" fill="#475569">
          e.g. libraries
        </text>
        <text x="400" y="386" textAnchor="middle" fontSize="11" fill="#475569">
          specificity increases →
        </text>
        <text x="660" y="386" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0f172a">
          Narrow
        </text>
        <text x="660" y="402" textAnchor="middle" fontSize="10" fill="#475569">
          e.g. automated classification
        </text>

        <defs>
          <marker id="arrow-ch13" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
            <path d="M0,0 L7,3 L0,6 z" fill="#64748b" />
          </marker>
        </defs>
        <line x1="226" y1="110" x2="266" y2="100" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch13)" />
        <line x1="226" y1="204" x2="266" y2="204" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch13)" />
        <line x1="140" y1="306" x2="700" y2="306" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch13)" />
        <line x1="700" y1="334" x2="140" y2="334" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch13)" />
        <line x1="80" y1="364" x2="720" y2="364" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch13)" />
      </svg>
    ),
  },

  'ch14-precision-recall': {
    title: TITLE_14,
    caption:
      'The collection is the universe, the relevant set one circle and the retrieved set the other; their shaded intersection is TP. Precision = TP/retrieved punishes noise, while recall = TP/relevant punishes silence — the two sets grow for different reasons.',
    Comp: ({ className }) => (
      <svg viewBox="0 0 800 420" className={className} role="img" aria-label={TITLE_14}>
        <rect width="800" height="420" fill="#f8fafc" />
        <text x="400" y="32" textAnchor="middle" fontSize="16" fontWeight="700" fill="#0f172a">
          Precision and Recall: The Venn View
        </text>

        <rect x="20" y="56" width="420" height="250" rx="10" fill="#ffffff" stroke="#64748b" strokeWidth="2" />
        <text x="230" y="76" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0f172a">
          Collection (universe)
        </text>

        <circle cx="165" cy="185" r="88" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <circle cx="275" cy="185" r="88" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <circle cx="275" cy="185" r="88" fill="#dbeafe" clipPath="url(#clip-tp-ch14)" />
        <circle cx="165" cy="185" r="88" fill="none" stroke="#6366f1" strokeWidth="2" />
        <circle cx="275" cy="185" r="88" fill="none" stroke="#10b981" strokeWidth="2" />

        <text x="150" y="118" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#475569">
          RELEVANT
        </text>
        <text x="295" y="118" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#475569">
          RETRIEVED
        </text>

        <text x="132" y="178" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0f172a">
          Silence
        </text>
        <text x="132" y="195" textAnchor="middle" fontSize="9" fill="#334155">
          relevant but missed
        </text>

        <text x="308" y="178" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0f172a">
          Noise
        </text>
        <text x="308" y="195" textAnchor="middle" fontSize="9" fill="#334155">
          retrieved only
        </text>

        <text x="220" y="180" textAnchor="middle" fontSize="15" fontWeight="700" fill="#0f172a">
          TP
        </text>
        <text x="220" y="196" textAnchor="middle" fontSize="9" fill="#334155">
          correct hits
        </text>

        <text x="230" y="294" textAnchor="middle" fontSize="9.5" fill="#475569">
          records outside both sets — never wanted
        </text>

        <rect x="456" y="56" width="324" height="250" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="476" y="86" fontSize="13.5" fontWeight="700" fill="#0f172a">
          Read the three regions
        </text>

        <rect x="476" y="100" width="16" height="16" rx="4" fill="#dbeafe" stroke="#6366f1" strokeWidth="2" />
        <text x="500" y="113" fontSize="11.5" fill="#334155">
          TP — relevant ∩ retrieved
        </text>
        <rect x="476" y="134" width="16" height="16" rx="4" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
        <text x="500" y="147" fontSize="11.5" fill="#334155">
          Noise — retrieved only
        </text>
        <rect x="476" y="168" width="16" height="16" rx="4" fill="#fef2f2" stroke="#ef4444" strokeWidth="2" />
        <text x="500" y="181" fontSize="11.5" fill="#334155">
          Silence — relevant, missed
        </text>

        <text x="476" y="214" fontSize="12" fontWeight="700" fill="#0f172a">
          Two questions
        </text>
        <text x="476" y="236" fontSize="11" fill="#334155">
          Precision: of the records we
        </text>
        <text x="476" y="254" fontSize="11" fill="#334155">
          retrieved, how many are relevant?
        </text>
        <text x="476" y="274" fontSize="11" fill="#334155">
          Recall: of all relevant records,
        </text>
        <text x="476" y="292" fontSize="11" fill="#334155">
          how many did we retrieve?
        </text>

        <rect x="20" y="326" width="350" height="64" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="195" y="352" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">
          Precision = TP / retrieved
        </text>
        <text x="195" y="374" textAnchor="middle" fontSize="11" fill="#475569">
          how precise the result list is
        </text>

        <rect x="430" y="326" width="350" height="64" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="605" y="352" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">
          Recall = TP / relevant
        </text>
        <text x="605" y="374" textAnchor="middle" fontSize="11" fill="#475569">
          how complete the coverage is
        </text>

        <text x="400" y="340" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#475569">
          trade-off
        </text>

        <text x="400" y="410" textAnchor="middle" fontSize="11" fill="#475569">
          Widen the query to raise recall — precision usually falls
        </text>

        <defs>
          <marker id="arrow-ch14" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
            <path d="M0,0 L7,3 L0,6 z" fill="#64748b" />
          </marker>
          <clipPath id="clip-tp-ch14">
            <circle cx="165" cy="185" r="88" />
          </clipPath>
        </defs>
        <line x1="374" y1="352" x2="426" y2="352" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch14)" />
        <line x1="426" y1="374" x2="374" y2="374" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch14)" />
      </svg>
    ),
  },

  'ch15-cranfield': {
    title: TITLE_15,
    caption:
      'Cleverdon’s Cranfield I and II tests in the 1960s plotted recall against precision for faceted classification, subject headings and uniterms. The inverse curve showed the trade-off is structural: no indexing language wins on both measures at once.',
    Comp: ({ className }) => (
      <svg viewBox="0 0 800 420" className={className} role="img" aria-label={TITLE_15}>
        <rect width="800" height="420" fill="#f8fafc" />
        <text x="400" y="32" textAnchor="middle" fontSize="16" fontWeight="700" fill="#0f172a">
          Cranfield: Recall Against Precision
        </text>

        <text x="58" y="216" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0f172a" transform="rotate(-90 58 216)">
          Recall
        </text>
        <text x="270" y="378" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0f172a">
          Precision
        </text>
        <text x="96" y="104" fontSize="9.5" fill="#475569">
          high
        </text>
        <text x="96" y="334" fontSize="9.5" fill="#475569">
          low
        </text>
        <text x="96" y="358" fontSize="9.5" fill="#475569">
          low
        </text>
        <text x="444" y="358" textAnchor="end" fontSize="9.5" fill="#475569">
          high
        </text>
        <text x="444" y="104" textAnchor="end" fontSize="10" fill="#10b981">
          ideal: high + high
        </text>

        <path d="M115,112 C190,180 250,250 425,325" fill="none" stroke="#6366f1" strokeWidth="2.5" />
        <circle cx="148" cy="143" r="5" fill="#6366f1" />
        <circle cx="232" cy="216" r="5" fill="#6366f1" />
        <circle cx="354" cy="292" r="5" fill="#6366f1" />
        <text x="300" y="200" fontSize="10.5" fontWeight="700" fill="#6366f1">
          recall–precision curve
        </text>
        <text x="255" y="404" textAnchor="middle" fontSize="10.5" fill="#475569">
          Each dot is one indexing system tested against the trade-off
        </text>

        <rect x="500" y="64" width="280" height="64" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="640" y="90" textAnchor="middle" fontSize="13.5" fontWeight="700" fill="#0f172a">
          Cleverdon · Cranfield I/II
        </text>
        <text x="640" y="112" textAnchor="middle" fontSize="11" fill="#475569">
          1960s laboratory tests
        </text>

        <text x="500" y="160" fontSize="13" fontWeight="700" fill="#0f172a">
          Indexing languages tested
        </text>

        <rect x="500" y="172" width="280" height="50" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="516" y="192" fontSize="12.5" fontWeight="700" fill="#0f172a">
          Faceted classification
        </text>
        <text x="516" y="210" fontSize="10" fill="#475569">
          analytico-synthetic schedules
        </text>

        <rect x="500" y="230" width="280" height="50" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="516" y="250" fontSize="12.5" fontWeight="700" fill="#0f172a">
          Subject headings
        </text>
        <text x="516" y="268" fontSize="10" fill="#475569">
          pre-coordinated, authority controlled
        </text>

        <rect x="500" y="288" width="280" height="50" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="516" y="308" fontSize="12.5" fontWeight="700" fill="#0f172a">
          Uniterms
        </text>
        <text x="516" y="326" fontSize="10" fill="#475569">
          single terms, post-coordinated
        </text>

        <rect x="500" y="356" width="280" height="54" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
        <text x="640" y="378" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0f172a">
          Result: no language wins outright
        </text>
        <text x="640" y="396" textAnchor="middle" fontSize="10.5" fill="#475569">
          the question asked decides the winner
        </text>

        <defs>
          <marker id="arrow-ch15" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
            <path d="M0,0 L7,3 L0,6 z" fill="#64748b" />
          </marker>
        </defs>
        <line x1="90" y1="340" x2="90" y2="92" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch15)" />
        <line x1="90" y1="340" x2="448" y2="340" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch15)" />
        <line x1="756" y1="132" x2="756" y2="168" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch15)" />
      </svg>
    ),
  },
};
