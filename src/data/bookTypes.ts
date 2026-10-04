// Shared contracts for the IndexMaster textbook and concept-diagram library.

/**
 * All diagram IDs used across the app (book chapters, lectures, dashboard).
 * Each ID maps to an entry in src/components/diagrams/registry.ts
 */
export const DIAGRAM_IDS = [
  'home-hero',
  'ch1-indexing-process',
  'ch2-aboutness-mentions',
  'ch3-controlled-natural',
  'ch4-bibliographic-control',
  'ch5-thesaurus-steps',
  'ch6-semantic-relationships',
  'ch7-scope-notes',
  'ch8-facet-analysis',
  'ch9-pre-post-coordinate',
  'ch10-chain-indexing',
  'ch11-precis',
  'ch12-kwic-kwoc',
  'ch13-exhaustivity-specificity',
  'ch14-precision-recall',
  'ch15-cranfield',
  'ch16-noise-silence',
  'ch17-abstract-types',
  'ch18-niso-z3914',
  'ch19-abstracting-workflow',
  'ch20-cas-sdi',
  'ch21-citation-indexing',
  'ch22-ai-databases',
  'ch23-ner-pipeline',
  'ch24-tfidf-graph',
  'ch25-descriptor-assignment',
  'ch26-pr-rec-worked',
  'ch27-micro-thesaurus',
  'ch28-semantic-web',
] as const;

export type DiagramId = (typeof DIAGRAM_IDS)[number];

/** The diagram assigned to each of the 28 textbook chapters. */
export const CHAPTER_DIAGRAM: Record<number, DiagramId> = {
  1: 'ch1-indexing-process',
  2: 'ch2-aboutness-mentions',
  3: 'ch3-controlled-natural',
  4: 'ch4-bibliographic-control',
  5: 'ch5-thesaurus-steps',
  6: 'ch6-semantic-relationships',
  7: 'ch7-scope-notes',
  8: 'ch8-facet-analysis',
  9: 'ch9-pre-post-coordinate',
  10: 'ch10-chain-indexing',
  11: 'ch11-precis',
  12: 'ch12-kwic-kwoc',
  13: 'ch13-exhaustivity-specificity',
  14: 'ch14-precision-recall',
  15: 'ch15-cranfield',
  16: 'ch16-noise-silence',
  17: 'ch17-abstract-types',
  18: 'ch18-niso-z3914',
  19: 'ch19-abstracting-workflow',
  20: 'ch20-cas-sdi',
  21: 'ch21-citation-indexing',
  22: 'ch22-ai-databases',
  23: 'ch23-ner-pipeline',
  24: 'ch24-tfidf-graph',
  25: 'ch25-descriptor-assignment',
  26: 'ch26-pr-rec-worked',
  27: 'ch27-micro-thesaurus',
  28: 'ch28-semantic-web',
};

export interface BookChapter {
  /** Chapter number 1-28 */
  number: number;
  /** Module banner, e.g. "Module 1: Foundations" */
  module: string;
  title: string;
  /** 4-6 learning objectives, master's level */
  objectives: string[];
  /**
   * Rich chapter body (markdown-lite).
   * Supported: ## / ### headings, - bullet lists, 1. numbered lists,
   * **bold**, *italic*, > callouts, blank-line paragraphs,
   * and a diagram marker line: [[diagram:<DiagramId>]]
   */
  content: string;
  /** 6-10 key terms with concise definitions */
  keyTerms: { term: string; definition: string }[];
  /** 5-7 review questions (mix of recall, application, and critical analysis) */
  reviewQuestions: string[];
  /** 3-5 authoritative references (standards, classics, textbooks) */
  furtherReading: string[];
  /** Primary diagram for this chapter (also embedded via [[diagram:...]] in content) */
  diagramId: DiagramId;
}
