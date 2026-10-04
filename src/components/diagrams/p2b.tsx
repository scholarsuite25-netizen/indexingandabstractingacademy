import { DiagramId } from '../../data/bookTypes';
import type { DiagramEntry } from './registry';

/*
 * DIAGRAM STYLE GUIDE (chapters 16-20)
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

const TITLE_16 = 'Noise, Silence and Fallout';
const TITLE_17 = 'Four Types of Abstracts';
const TITLE_18 = 'NISO Z39.14 Quality Gates';
const TITLE_19 = 'The 8-Step Abstracting Workflow';
const TITLE_20 = 'CAS and SDI: The Awareness Loop';

export const DIAGRAMS_P2B: Partial<Record<DiagramId, DiagramEntry>> = {
  'ch16-noise-silence': {
    title: TITLE_16,
    caption:
      'Every search outcome falls into one of four cells, and the two error cells have names: noise is retrieved-but-irrelevant, silence is relevant-but-missed. Precision and recall read the top row and the left column, while fallout converts noise into a rate over all irrelevant records.',
    Comp: ({ className }) => (
      <svg viewBox="0 0 800 420" className={className} role="img" aria-label={TITLE_16}>
        <rect width="800" height="420" fill="#f8fafc" />
        <text x="400" y="32" textAnchor="middle" fontSize="16" fontWeight="700" fill="#0f172a">
          Retrieval Outcomes: Noise and Silence
        </text>
        <text x="400" y="54" textAnchor="middle" fontSize="11" fill="#475569">
          rows = actual relevance · columns = what the system returned
        </text>

        <text x="75" y="88" textAnchor="middle" fontSize="11" fontWeight="700" fill="#475569">
          Actual
        </text>
        <text x="235" y="88" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#334155">
          Retrieved
        </text>
        <text x="460" y="88" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#334155">
          Not retrieved
        </text>

        <rect x="30" y="98" width="90" height="114" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="75" y="159" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0f172a">
          Relevant
        </text>
        <rect x="30" y="218" width="90" height="114" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="75" y="279" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0f172a">
          Not relevant
        </text>

        <rect x="125" y="98" width="220" height="114" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="235" y="140" textAnchor="middle" fontSize="17" fontWeight="700" fill="#0f172a">
          TP = 50
        </text>
        <text x="235" y="164" textAnchor="middle" fontSize="11" fill="#475569">
          true hit
        </text>
        <text x="235" y="184" textAnchor="middle" fontSize="10.5" fill="#475569">
          counts for precision + recall
        </text>

        <rect x="350" y="98" width="220" height="114" rx="10" fill="#fef2f2" stroke="#ef4444" strokeWidth="2" />
        <text x="460" y="140" textAnchor="middle" fontSize="15" fontWeight="700" fill="#0f172a">
          Silence (FN)
        </text>
        <text x="460" y="164" textAnchor="middle" fontSize="11" fill="#475569">
          relevant but missed
        </text>
        <text x="460" y="184" textAnchor="middle" fontSize="10.5" fill="#475569">
          drives recall down
        </text>

        <rect x="125" y="218" width="220" height="114" rx="10" fill="#fef2f2" stroke="#ef4444" strokeWidth="2" />
        <text x="235" y="258" textAnchor="middle" fontSize="15" fontWeight="700" fill="#0f172a">
          Noise (FP)
        </text>
        <text x="235" y="282" textAnchor="middle" fontSize="11" fill="#475569">
          retrieved but irrelevant
        </text>
        <text x="235" y="306" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0f172a">
          Fallout = FP / (FP+TN)
        </text>

        <rect x="350" y="218" width="220" height="114" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="460" y="258" textAnchor="middle" fontSize="15" fontWeight="700" fill="#0f172a">
          TN = true negative
        </text>
        <text x="460" y="282" textAnchor="middle" fontSize="11" fill="#475569">
          correctly ignored
        </text>
        <text x="460" y="306" textAnchor="middle" fontSize="10.5" fill="#475569">
          keeps fallout low
        </text>

        <rect x="595" y="98" width="185" height="234" rx="10" fill="#ffffff" stroke="#6366f1" strokeWidth="2" />
        <text x="687" y="124" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          Key terms
        </text>

        <rect x="609" y="145" width="9" height="9" rx="2" fill="#6366f1" />
        <text x="623" y="154" fontSize="11" fontWeight="700" fill="#0f172a">
          Precision
        </text>
        <text x="623" y="169" fontSize="9.5" fill="#475569">
          relevant hits ÷ all hits
        </text>

        <rect x="609" y="181" width="9" height="9" rx="2" fill="#6366f1" />
        <text x="623" y="190" fontSize="11" fontWeight="700" fill="#0f172a">
          Recall
        </text>
        <text x="623" y="205" fontSize="9.5" fill="#475569">
          relevant hits ÷ all relevant
        </text>

        <rect x="609" y="217" width="9" height="9" rx="2" fill="#ef4444" />
        <text x="623" y="226" fontSize="11" fontWeight="700" fill="#0f172a">
          Noise
        </text>
        <text x="623" y="241" fontSize="9.5" fill="#475569">
          retrieved but not relevant
        </text>

        <rect x="609" y="253" width="9" height="9" rx="2" fill="#ef4444" />
        <text x="623" y="262" fontSize="11" fontWeight="700" fill="#0f172a">
          Silence
        </text>
        <text x="623" y="277" fontSize="9.5" fill="#475569">
          relevant but not retrieved
        </text>

        <rect x="609" y="289" width="9" height="9" rx="2" fill="#f59e0b" />
        <text x="623" y="298" fontSize="11" fontWeight="700" fill="#0f172a">
          Fallout
        </text>
        <text x="623" y="313" fontSize="9.5" fill="#475569">
          noise ÷ all irrelevant
        </text>

        <rect x="30" y="350" width="540" height="56" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="300" y="374" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0f172a">
          Precision = TP / retrieved · Recall = TP / relevant
        </text>
        <text x="300" y="394" textAnchor="middle" fontSize="10.5" fill="#475569">
          Noise and silence are the two error cells
        </text>

        <defs>
          <marker id="arrow-ch16" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
            <path d="M0,0 L7,3 L0,6 z" fill="#64748b" />
          </marker>
        </defs>
        <line x1="235" y1="336" x2="235" y2="346" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch16)" />
        <line x1="680" y1="336" x2="576" y2="374" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch16)" />
      </svg>
    ),
  },

  'ch17-abstract-types': {
    title: TITLE_17,
    caption:
      'Indicative abstracts preview scope, informative abstracts carry findings and methods, and critical abstracts add an expert judgement of quality. Slanted abstracts foreground one disciplinary angle, so readers should notice the emphasis as well as the content.',
    Comp: ({ className }) => (
      <svg viewBox="0 0 800 420" className={className} role="img" aria-label={TITLE_17}>
        <rect width="800" height="420" fill="#f8fafc" />
        <text x="400" y="30" textAnchor="middle" fontSize="16" fontWeight="700" fill="#0f172a">
          Four Types of Abstracts
        </text>

        <rect x="18" y="62" width="178" height="200" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="107" y="92" textAnchor="middle" fontSize="15" fontWeight="700" fill="#0f172a">
          Indicative
        </text>
        <rect x="45" y="104" width="124" height="26" rx="10" fill="#ffffff" stroke="#6366f1" strokeWidth="2" />
        <text x="107" y="122" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#0f172a">
          SCOPE ONLY
        </text>
        <text x="107" y="154" textAnchor="middle" fontSize="11" fill="#334155">
          Says what the source
        </text>
        <text x="107" y="172" textAnchor="middle" fontSize="11" fill="#334155">
          covers, not what it finds
        </text>
        <text x="107" y="206" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#475569">
          BEST FOR
        </text>
        <text x="107" y="228" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0f172a">
          Reviews and books
        </text>
        <text x="107" y="246" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0f172a">
          state-of-the-art reports
        </text>

        <rect x="213" y="62" width="178" height="200" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="302" y="92" textAnchor="middle" fontSize="15" fontWeight="700" fill="#0f172a">
          Informative
        </text>
        <rect x="240" y="104" width="124" height="26" rx="10" fill="#ffffff" stroke="#10b981" strokeWidth="2" />
        <text x="302" y="122" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#0f172a">
          FINDINGS + METHOD
        </text>
        <text x="302" y="154" textAnchor="middle" fontSize="11" fill="#334155">
          Reports results, data
        </text>
        <text x="302" y="172" textAnchor="middle" fontSize="11" fill="#334155">
          and how they were found
        </text>
        <text x="302" y="206" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#475569">
          BEST FOR
        </text>
        <text x="302" y="228" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0f172a">
          Empirical papers and
        </text>
        <text x="302" y="246" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0f172a">
          experimental studies
        </text>

        <rect x="408" y="62" width="178" height="200" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
        <text x="497" y="92" textAnchor="middle" fontSize="15" fontWeight="700" fill="#0f172a">
          Critical
        </text>
        <rect x="435" y="104" width="124" height="26" rx="10" fill="#ffffff" stroke="#f59e0b" strokeWidth="2" />
        <text x="497" y="122" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#0f172a">
          EXPERT APPRAISAL
        </text>
        <text x="497" y="154" textAnchor="middle" fontSize="11" fill="#334155">
          Judges quality, value
        </text>
        <text x="497" y="172" textAnchor="middle" fontSize="11" fill="#334155">
          and soundness
        </text>
        <text x="497" y="206" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#475569">
          BEST FOR
        </text>
        <text x="497" y="228" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0f172a">
          Reviews of quality
        </text>
        <text x="497" y="246" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0f172a">
          and evaluation work
        </text>

        <rect x="603" y="62" width="178" height="200" rx="10" fill="#fef2f2" stroke="#ef4444" strokeWidth="2" />
        <text x="692" y="92" textAnchor="middle" fontSize="15" fontWeight="700" fill="#0f172a">
          Slanted
        </text>
        <rect x="630" y="104" width="124" height="26" rx="10" fill="#ffffff" stroke="#ef4444" strokeWidth="2" />
        <text x="692" y="122" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#0f172a">
          ONE ANGLE
        </text>
        <text x="692" y="154" textAnchor="middle" fontSize="11" fill="#334155">
          Emphasises one discipline
        </text>
        <text x="692" y="172" textAnchor="middle" fontSize="11" fill="#334155">
          angle of the same work
        </text>
        <text x="692" y="206" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#475569">
          BEST FOR
        </text>
        <text x="692" y="228" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0f172a">
          Spotting a slanted
        </text>
        <text x="692" y="246" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0f172a">
          treatment of a topic
        </text>

        <rect x="18" y="300" width="764" height="60" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
        <text x="400" y="326" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          Match the abstract type to the document genre
        </text>
        <text x="400" y="348" textAnchor="middle" fontSize="11" fill="#475569">
          Indicative previews · Informative reports · Critical judges · Slanted angles
        </text>

        <text x="400" y="390" textAnchor="middle" fontSize="11" fill="#475569">
          Choose by purpose first; length and style follow the type you pick
        </text>

        <defs>
          <marker id="arrow-ch17" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
            <path d="M0,0 L7,3 L0,6 z" fill="#64748b" />
          </marker>
        </defs>
        <line x1="107" y1="266" x2="107" y2="294" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch17)" />
        <line x1="302" y1="266" x2="302" y2="294" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch17)" />
        <line x1="497" y1="266" x2="497" y2="294" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch17)" />
        <line x1="692" y1="266" x2="692" y2="294" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch17)" />
      </svg>
    ),
  },

  'ch18-niso-z3914': {
    title: TITLE_18,
    caption:
      'NISO Z39.14 describes an abstract as a miniature of the document, so a draft must pass five gates before publication: objectivity, faithfulness to source, self-containment, conciseness of 100–250 words, and third-person style.',
    Comp: ({ className }) => (
      <svg viewBox="0 0 800 420" className={className} role="img" aria-label={TITLE_18}>
        <rect width="800" height="420" fill="#f8fafc" />
        <text x="400" y="30" textAnchor="middle" fontSize="16" fontWeight="700" fill="#0f172a">
          NISO Z39.14: Five Gates for an Abstract
        </text>
        <text x="400" y="52" textAnchor="middle" fontSize="11" fill="#475569">
          five checks every published abstract must pass
        </text>

        <rect x="30" y="156" width="170" height="100" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="115" y="188" textAnchor="middle" fontSize="13.5" fontWeight="700" fill="#0f172a">
          Source document
        </text>
        <text x="115" y="214" textAnchor="middle" fontSize="11" fill="#475569">
          article, report,
        </text>
        <text x="115" y="234" textAnchor="middle" fontSize="11" fill="#475569">
          thesis, book chapter
        </text>

        <rect x="250" y="80" width="300" height="44" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
        <circle cx="274" cy="102" r="12" fill="#ffffff" stroke="#10b981" strokeWidth="2" />
        <text x="274" y="107" textAnchor="middle" fontSize="13" fontWeight="700" fill="#10b981">
          ✓
        </text>
        <text x="296" y="100" fontSize="12.5" fontWeight="700" fill="#0f172a">
          Objectivity
        </text>
        <text x="296" y="115" fontSize="10" fill="#475569">
          no promotional or evaluative claims
        </text>

        <rect x="250" y="132" width="300" height="44" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
        <circle cx="274" cy="154" r="12" fill="#ffffff" stroke="#10b981" strokeWidth="2" />
        <text x="274" y="159" textAnchor="middle" fontSize="13" fontWeight="700" fill="#10b981">
          ✓
        </text>
        <text x="296" y="152" fontSize="12.5" fontWeight="700" fill="#0f172a">
          Faithfulness to source
        </text>
        <text x="296" y="167" fontSize="10" fill="#475569">
          adds nothing the document does not say
        </text>

        <rect x="250" y="184" width="300" height="44" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
        <circle cx="274" cy="206" r="12" fill="#ffffff" stroke="#10b981" strokeWidth="2" />
        <text x="274" y="211" textAnchor="middle" fontSize="13" fontWeight="700" fill="#10b981">
          ✓
        </text>
        <text x="296" y="204" fontSize="12.5" fontWeight="700" fill="#0f172a">
          Self-containment
        </text>
        <text x="296" y="219" fontSize="10" fill="#475569">
          understandable without the full text
        </text>

        <rect x="250" y="236" width="300" height="44" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
        <circle cx="274" cy="258" r="12" fill="#ffffff" stroke="#10b981" strokeWidth="2" />
        <text x="274" y="263" textAnchor="middle" fontSize="13" fontWeight="700" fill="#10b981">
          ✓
        </text>
        <text x="296" y="256" fontSize="12.5" fontWeight="700" fill="#0f172a">
          Conciseness
        </text>
        <text x="296" y="271" fontSize="10" fill="#475569">
          100–250 words, no padding
        </text>

        <rect x="250" y="288" width="300" height="44" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
        <circle cx="274" cy="310" r="12" fill="#ffffff" stroke="#10b981" strokeWidth="2" />
        <text x="274" y="315" textAnchor="middle" fontSize="13" fontWeight="700" fill="#10b981">
          ✓
        </text>
        <text x="296" y="308" fontSize="12.5" fontWeight="700" fill="#0f172a">
          Third person
        </text>
        <text x="296" y="323" fontSize="10" fill="#475569">
          objective, impersonal tone
        </text>

        <rect x="600" y="156" width="170" height="100" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="685" y="188" textAnchor="middle" fontSize="13.5" fontWeight="700" fill="#0f172a">
          Abstract
        </text>
        <text x="685" y="214" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0f172a">
          100–250 words
        </text>
        <text x="685" y="234" textAnchor="middle" fontSize="11" fill="#475569">
          passes all five gates
        </text>

        <rect x="30" y="350" width="740" height="54" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="400" y="374" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          The standard describes what makes an abstract usable
        </text>
        <text x="400" y="394" textAnchor="middle" fontSize="10.5" fill="#475569">
          Objective · faithful · self-contained · concise · third person
        </text>

        <defs>
          <marker id="arrow-ch18" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
            <path d="M0,0 L7,3 L0,6 z" fill="#64748b" />
          </marker>
        </defs>
        <line x1="204" y1="206" x2="244" y2="206" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch18)" />
        <line x1="554" y1="206" x2="594" y2="206" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch18)" />
      </svg>
    ),
  },

  'ch19-abstracting-workflow': {
    title: TITLE_19,
    caption:
      'Abstracting runs as eight numbered steps clustered into three phases: read and analyse the document, extract and draft the summary, then review and publish. Working in that order keeps the abstract faithful to the source instead of reconstructing it from memory.',
    Comp: ({ className }) => (
      <svg viewBox="0 0 800 420" className={className} role="img" aria-label={TITLE_19}>
        <rect width="800" height="420" fill="#f8fafc" />
        <text x="400" y="30" textAnchor="middle" fontSize="16" fontWeight="700" fill="#0f172a">
          The Abstracting Workflow: 8 Steps, 3 Phases
        </text>

        <rect x="20" y="58" width="214" height="316" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="127" y="84" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">
          Read &amp; Analyze
        </text>
        <text x="127" y="102" textAnchor="middle" fontSize="10" fill="#475569">
          steps 1–3
        </text>

        <rect x="32" y="112" width="190" height="56" rx="10" fill="#ffffff" stroke="#6366f1" strokeWidth="2" />
        <circle cx="56" cy="140" r="14" fill="#6366f1" />
        <text x="56" y="145" textAnchor="middle" fontSize="14" fontWeight="700" fill="#ffffff">
          1
        </text>
        <text x="78" y="136" fontSize="12" fontWeight="700" fill="#0f172a">
          Survey the document
        </text>
        <text x="78" y="154" fontSize="10" fill="#475569">
          title, headings, tables
        </text>

        <rect x="32" y="178" width="190" height="56" rx="10" fill="#ffffff" stroke="#6366f1" strokeWidth="2" />
        <circle cx="56" cy="206" r="14" fill="#6366f1" />
        <text x="56" y="211" textAnchor="middle" fontSize="14" fontWeight="700" fill="#ffffff">
          2
        </text>
        <text x="78" y="202" fontSize="12" fontWeight="700" fill="#0f172a">
          Read for content
        </text>
        <text x="78" y="220" fontSize="10" fill="#475569">
          aims, methods, results
        </text>

        <rect x="32" y="244" width="190" height="56" rx="10" fill="#ffffff" stroke="#6366f1" strokeWidth="2" />
        <circle cx="56" cy="272" r="14" fill="#6366f1" />
        <text x="56" y="277" textAnchor="middle" fontSize="14" fontWeight="700" fill="#ffffff">
          3
        </text>
        <text x="78" y="268" fontSize="12" fontWeight="700" fill="#0f172a">
          Select key data
        </text>
        <text x="78" y="286" fontSize="10" fill="#475569">
          facts, figures, claims
        </text>

        <rect x="264" y="58" width="276" height="316" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="402" y="84" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">
          Extract &amp; Draft
        </text>
        <text x="402" y="102" textAnchor="middle" fontSize="10" fill="#475569">
          steps 4–7
        </text>

        <rect x="276" y="112" width="252" height="56" rx="10" fill="#ffffff" stroke="#10b981" strokeWidth="2" />
        <circle cx="300" cy="140" r="14" fill="#10b981" />
        <text x="300" y="145" textAnchor="middle" fontSize="14" fontWeight="700" fill="#ffffff">
          4
        </text>
        <text x="322" y="136" fontSize="12" fontWeight="700" fill="#0f172a">
          Note main points
        </text>
        <text x="322" y="154" fontSize="10" fill="#475569">
          rank them by importance
        </text>

        <rect x="276" y="178" width="252" height="56" rx="10" fill="#ffffff" stroke="#10b981" strokeWidth="2" />
        <circle cx="300" cy="206" r="14" fill="#10b981" />
        <text x="300" y="211" textAnchor="middle" fontSize="14" fontWeight="700" fill="#ffffff">
          5
        </text>
        <text x="322" y="202" fontSize="12" fontWeight="700" fill="#0f172a">
          Write the first draft
        </text>
        <text x="322" y="220" fontSize="10" fill="#475569">
          in your own words
        </text>

        <rect x="276" y="244" width="252" height="56" rx="10" fill="#ffffff" stroke="#10b981" strokeWidth="2" />
        <circle cx="300" cy="272" r="14" fill="#10b981" />
        <text x="300" y="277" textAnchor="middle" fontSize="14" fontWeight="700" fill="#ffffff">
          6
        </text>
        <text x="322" y="268" fontSize="12" fontWeight="700" fill="#0f172a">
          Condense and edit
        </text>
        <text x="322" y="286" fontSize="10" fill="#475569">
          trim to the word limit
        </text>

        <rect x="276" y="310" width="252" height="56" rx="10" fill="#ffffff" stroke="#10b981" strokeWidth="2" />
        <circle cx="300" cy="338" r="14" fill="#10b981" />
        <text x="300" y="343" textAnchor="middle" fontSize="14" fontWeight="700" fill="#ffffff">
          7
        </text>
        <text x="322" y="334" fontSize="12" fontWeight="700" fill="#0f172a">
          Check faithfulness
        </text>
        <text x="322" y="352" fontSize="10" fill="#475569">
          verify every claim
        </text>

        <rect x="570" y="58" width="210" height="316" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
        <text x="675" y="84" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">
          Review &amp; Publish
        </text>
        <text x="675" y="102" textAnchor="middle" fontSize="10" fill="#475569">
          step 8
        </text>

        <rect x="582" y="112" width="186" height="56" rx="10" fill="#ffffff" stroke="#f59e0b" strokeWidth="2" />
        <circle cx="606" cy="140" r="14" fill="#f59e0b" />
        <text x="606" y="145" textAnchor="middle" fontSize="14" fontWeight="700" fill="#ffffff">
          8
        </text>
        <text x="628" y="136" fontSize="12" fontWeight="700" fill="#0f172a">
          Review and publish
        </text>
        <text x="628" y="154" fontSize="10" fill="#475569">
          approve, format, release
        </text>

        <text x="400" y="400" textAnchor="middle" fontSize="11" fill="#475569">
          Analyze first, draft from evidence, verify before release — order prevents rework
        </text>

        <defs>
          <marker id="arrow-ch19" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
            <path d="M0,0 L7,3 L0,6 z" fill="#64748b" />
          </marker>
        </defs>
        <line x1="238" y1="216" x2="260" y2="216" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch19)" />
        <line x1="544" y1="216" x2="566" y2="216" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch19)" />
      </svg>
    ),
  },

  'ch20-cas-sdi': {
    title: TITLE_20,
    caption:
      'Current awareness runs as a loop: new documents are indexed, issued as abstracting bulletins, matched against stored SDI interest profiles, and pushed to the researcher. Feedback from that researcher then adjusts the profile so later matches improve.',
    Comp: ({ className }) => (
      <svg viewBox="0 0 800 420" className={className} role="img" aria-label={TITLE_20}>
        <rect width="800" height="420" fill="#f8fafc" />
        <text x="400" y="30" textAnchor="middle" fontSize="16" fontWeight="700" fill="#0f172a">
          CAS and SDI: The Current-Awareness Loop
        </text>

        <rect x="80" y="60" width="180" height="72" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="170" y="88" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          New documents
        </text>
        <text x="170" y="110" textAnchor="middle" fontSize="10.5" fill="#475569">
          journal issues arrive
        </text>

        <rect x="310" y="60" width="180" height="72" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="400" y="88" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          Indexing + abstracting
        </text>
        <text x="400" y="110" textAnchor="middle" fontSize="10.5" fill="#475569">
          descriptors and summaries
        </text>

        <rect x="540" y="60" width="180" height="72" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
        <text x="630" y="88" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          CAS bulletins
        </text>
        <text x="630" y="110" textAnchor="middle" fontSize="10.5" fill="#475569">
          current awareness issues
        </text>

        <rect x="560" y="230" width="180" height="72" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="650" y="258" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          SDI interest profiles
        </text>
        <text x="650" y="280" textAnchor="middle" fontSize="10.5" fill="#475569">
          topics for each reader
        </text>

        <rect x="310" y="300" width="180" height="72" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="400" y="328" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          Compare and match
        </text>
        <text x="400" y="350" textAnchor="middle" fontSize="10.5" fill="#475569">
          profile terms vs. records
        </text>

        <rect x="60" y="230" width="180" height="72" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
        <text x="150" y="258" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          Notified researcher
        </text>
        <text x="150" y="280" textAnchor="middle" fontSize="10.5" fill="#475569">
          gets relevant alerts
        </text>

        <rect x="290" y="190" width="220" height="64" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
        <text x="400" y="216" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          Feedback adjusts
        </text>
        <text x="400" y="238" textAnchor="middle" fontSize="11" fill="#475569">
          the interest profile
        </text>

        <text x="218" y="214" textAnchor="middle" fontSize="10" fontWeight="700" fill="#475569">
          feedback
        </text>

        <text x="400" y="400" textAnchor="middle" fontSize="10.5" fill="#475569">
          SDI pushes only what matches; researcher feedback keeps every profile current
        </text>

        <defs>
          <marker id="arrow-ch20" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
            <path d="M0,0 L7,3 L0,6 z" fill="#64748b" />
          </marker>
        </defs>
        <line x1="264" y1="96" x2="304" y2="96" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch20)" />
        <line x1="494" y1="96" x2="534" y2="96" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch20)" />
        <line x1="630" y1="136" x2="648" y2="226" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch20)" />
        <line x1="648" y1="306" x2="496" y2="336" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch20)" />
        <line x1="306" y1="336" x2="156" y2="304" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch20)" />
        <line x1="150" y1="226" x2="286" y2="222" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch20)" />
        <line x1="514" y1="212" x2="556" y2="256" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-ch20)" />
      </svg>
    ),
  },
};
