// Builds the complete 28-chapter textbook as an A6 (105 x 148 mm) PDF
// entirely in the browser, on demand. jsPDF is loaded lazily so it never
// touches the initial bundle. Diagrams are rasterised from the app's own
// SVG components, so the PDF matches the online edition.

import { BOOK_CHAPTERS } from '../data/bookChapters';
import type { BookChapter } from '../data/bookTypes';
import type { jsPDF } from 'jspdf';

// ---------------------------------------------------------------------------
// Page geometry (A6 book)
// ---------------------------------------------------------------------------
const PAGE_W = 105;
const PAGE_H = 148;
const MARGIN_L = 11;
const MARGIN_R = 11;
const MARGIN_T = 13;
const MARGIN_B = 14;
const CONTENT_W = PAGE_W - MARGIN_L - MARGIN_R; // 83 mm

const BODY_SIZE = 9.5;
const LINE_H = 4.1;

// Palette (matches the app theme)
const NAVY: [number, number, number] = [11, 43, 51];
const ACCENT: [number, number, number] = [220, 53, 69];
const INK: [number, number, number] = [15, 23, 42];
const MUTED: [number, number, number] = [100, 116, 139];
const CALLOUT_BG: [number, number, number] = [255, 251, 235];
const CALLOUT_BORDER: [number, number, number] = [245, 158, 11];

type jsPDFLike = jsPDF;

// ---------------------------------------------------------------------------
// WinAnsi-safe text (jsPDF core fonts are Latin-1 / CP1252)
// ---------------------------------------------------------------------------
function sanitize(text: string): string {
  return text
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/\u2013/g, '-')
    .replace(/\u2014/g, '--')
    .replace(/\u2026/g, '...')
    .replace(/\u2192/g, '->')
    .replace(/\u2190/g, '<-')
    .replace(/\u2264/g, '<=')
    .replace(/\u2265/g, '>=')
    .replace(/\u2260/g, '!=')
    .replace(/\u00D7/g, 'x')
    .replace(/\u00B7/g, '-')
    .replace(/\u00A0/g, ' ')
    .replace(/\u0394/g, 'Delta')
    .replace(/\u03C0/g, 'pi')
    .replace(/\u03A3/g, 'Sigma')
    .replace(/\u03B1/g, 'alpha')
    .replace(/\u03B2/g, 'beta')
    .replace(/\u221A/g, 'sqrt')
    .replace(/\u221E/g, 'inf')
    .replace(/[^\x20-\x7E\xA0-\xFF]/g, '');
}

// ---------------------------------------------------------------------------
// Inline **bold** / *italic* parsing
// ---------------------------------------------------------------------------
interface StyledWord {
  text: string;
  bold: boolean;
  italic: boolean;
}

function parseStyled(text: string): StyledWord[] {
  const words: StyledWord[] = [];
  const pushPlain = (s: string) => {
    for (const w of s.split(/\s+/)) {
      if (w) words.push({ text: w, bold: false, italic: false });
    }
  };
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) pushPlain(text.slice(last, m.index));
    const tok = m[0];
    if (tok.startsWith('**')) {
      for (const w of tok.slice(2, -2).split(/\s+/)) {
        if (w) words.push({ text: w, bold: true, italic: false });
      }
    } else {
      for (const w of tok.slice(1, -1).split(/\s+/)) {
        if (w) words.push({ text: w, bold: false, italic: true });
      }
    }
    last = m.index + tok.length;
  }
  if (last < text.length) pushPlain(text.slice(last));
  return words;
}

// ---------------------------------------------------------------------------
// Low-level drawing helpers
// ---------------------------------------------------------------------------
function ensureSpace(doc: jsPDFLike, y: number, needed: number): number {
  if (y + needed > PAGE_H - MARGIN_B) {
    doc.addPage();
    return MARGIN_T;
  }
  return y;
}

/** Flow styled words with word-wrap; returns the y of the last line. */
function flowWords(
  doc: jsPDFLike,
  words: StyledWord[],
  x: number,
  y: number,
  maxWidth: number,
  fontSize: number,
  lineHeight: number
): number {
  doc.setFontSize(fontSize);
  let cx = x;
  let cy = y;
  for (const word of words) {
    doc.setFont('times', word.bold ? 'bold' : word.italic ? 'italic' : 'normal');
    const w = doc.getTextWidth(word.text + ' ');
    if (cx > x && cx + w > x + maxWidth) {
      cy += lineHeight;
      cx = x;
    }
    doc.text(word.text, cx, cy);
    cx += w;
  }
  return cy;
}

function drawParagraph(
  doc: jsPDFLike,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  fontSize: number,
  lineHeight: number
): number {
  return flowWords(doc, parseStyled(sanitize(text)), x, y, maxWidth, fontSize, lineHeight);
}

function estimateLines(
  doc: jsPDFLike,
  words: StyledWord[],
  maxWidth: number,
  fontSize: number
): number {
  doc.setFontSize(fontSize);
  let cx = 0;
  let lines = 1;
  for (const word of words) {
    doc.setFont('times', word.bold ? 'bold' : word.italic ? 'italic' : 'normal');
    const w = doc.getTextWidth(word.text + ' ');
    if (cx > 0 && cx + w > maxWidth) {
      lines += 1;
      cx = w;
    } else {
      cx += w;
    }
  }
  return lines;
}

function drawBullet(
  doc: jsPDFLike,
  text: string,
  x: number,
  y: number,
  maxWidth: number
): number {
  doc.setFont('times', 'normal');
  doc.setFontSize(BODY_SIZE);
  doc.setTextColor(...INK);
  doc.text('\u2022', x, y);
  return drawParagraph(doc, text, x + 4, y, maxWidth - 4, BODY_SIZE, LINE_H);
}

function drawNumbered(
  doc: jsPDFLike,
  text: string,
  index: number,
  x: number,
  y: number,
  maxWidth: number
): number {
  doc.setFont('times', 'bold');
  doc.setFontSize(BODY_SIZE);
  doc.setTextColor(...ACCENT);
  doc.text(`${index}.`, x, y);
  return drawParagraph(doc, text, x + 6.5, y, maxWidth - 6.5, BODY_SIZE, LINE_H);
}

function drawH2(doc: jsPDFLike, text: string, y: number): number {
  y = ensureSpace(doc, y, 12);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...NAVY);
  doc.text(sanitize(text), MARGIN_L, y);
  doc.setDrawColor(...ACCENT);
  doc.setLineWidth(0.25);
  doc.line(MARGIN_L, y + 1.6, MARGIN_L + CONTENT_W, y + 1.6);
  return y + 6.5;
}

function drawH3(doc: jsPDFLike, text: string, y: number): number {
  y = ensureSpace(doc, y, 8);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(...ACCENT);
  doc.text(sanitize(text), MARGIN_L, y);
  return y + 5;
}

function drawSectionHeading(doc: jsPDFLike, text: string, y: number): number {
  y = ensureSpace(doc, y, 9);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(...NAVY);
  doc.text(sanitize(text.toUpperCase()), MARGIN_L, y);
  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(0.2);
  doc.line(MARGIN_L, y + 1.4, MARGIN_L + CONTENT_W, y + 1.4);
  return y + 4.5;
}

function drawCallout(doc: jsPDFLike, text: string, y: number): number {
  const words = parseStyled(sanitize(text));
  const lines = estimateLines(doc, words, CONTENT_W - 9, 9);
  const boxH = lines * LINE_H + 4;
  y = ensureSpace(doc, y, boxH + 2);
  doc.setFillColor(...CALLOUT_BG);
  doc.setDrawColor(...CALLOUT_BORDER);
  doc.setLineWidth(0.2);
  doc.roundedRect(MARGIN_L, y - 3, CONTENT_W, boxH, 1.5, 1.5, 'FD');
  flowWords(doc, words, MARGIN_L + 4.5, y + 1, CONTENT_W - 9, 9, LINE_H);
  return y + boxH + 2;
}

function drawTerm(
  doc: jsPDFLike,
  term: string,
  definition: string,
  x: number,
  y: number,
  maxWidth: number
): number {
  const words: StyledWord[] = [
    { text: sanitize(term), bold: true, italic: false },
    { text: '--', bold: false, italic: false },
    ...parseStyled(sanitize(definition)),
  ];
  return flowWords(doc, words, x, y, maxWidth, BODY_SIZE, LINE_H);
}

// ---------------------------------------------------------------------------
// Diagram rasterisation (SVG component -> PNG data URL)
// ---------------------------------------------------------------------------
interface DiagramPng {
  dataUrl: string;
  aspect: number; // height / width
  title: string;
  caption: string;
}

const pngCache = new Map<string, Promise<DiagramPng | null>>();

async function renderDiagramPng(id: string): Promise<DiagramPng | null> {
  try {
    const { getDiagram } = await import('../components/diagrams/registry');
    const React = await import('react');
    const { renderToStaticMarkup } = await import('react-dom/server');
    const entry = getDiagram(id as Parameters<typeof getDiagram>[0]);
    if (!entry || !entry.Comp) return null;

    let markup = renderToStaticMarkup(
      React.createElement(entry.Comp, { className: 'w-full h-auto' })
    );
    const vb = markup.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/);
    const w = vb ? parseFloat(vb[1]) : 800;
    const h = vb ? parseFloat(vb[2]) : 420;
    if (!vb) {
      markup = markup.replace('<svg', '<svg viewBox="0 0 800 420"');
    }
    const sized = markup.replace('<svg', `<svg width="${w}" height="${h}"`);

    const blob = new Blob([sized], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    try {
      const img = new Image();
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject(new Error('svg rasterise failed'));
        img.src = url;
      });
      const scale = 3;
      const canvas = document.createElement('canvas');
      canvas.width = Math.round(w * scale);
      canvas.height = Math.round(h * scale);
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      return {
        dataUrl: canvas.toDataURL('image/png'),
        aspect: h / w,
        title: entry.title,
        caption: entry.caption,
      };
    } finally {
      URL.revokeObjectURL(url);
    }
  } catch {
    return null;
  }
}

function getDiagramPng(id: string): Promise<DiagramPng | null> {
  let p = pngCache.get(id);
  if (!p) {
    p = renderDiagramPng(id);
    pngCache.set(id, p);
  }
  return p;
}

// ---------------------------------------------------------------------------
// Content parsing (markdown-lite -> blocks)
// ---------------------------------------------------------------------------
type Block =
  | { kind: 'h2'; text: string }
  | { kind: 'h3'; text: string }
  | { kind: 'para'; text: string }
  | { kind: 'bullet'; text: string }
  | { kind: 'num'; index: number; text: string }
  | { kind: 'callout'; text: string };

function parseBlocks(content: string): Block[] {
  const blocks: Block[] = [];
  const lines = content.split('\n');
  let para: string[] = [];
  let numCounter = 0;
  let prevKind = 'blank';

  const flushPara = () => {
    if (para.length) {
      blocks.push({ kind: 'para', text: para.join(' ') });
      para = [];
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      flushPara();
      prevKind = 'blank';
      continue;
    }
    if (line.startsWith('[[diagram:')) {
      flushPara();
      continue;
    }
    if (line.startsWith('### ')) {
      flushPara();
      blocks.push({ kind: 'h3', text: line.slice(4) });
      prevKind = 'h3';
      continue;
    }
    if (line.startsWith('## ')) {
      flushPara();
      blocks.push({ kind: 'h2', text: line.slice(3) });
      prevKind = 'h2';
      continue;
    }
    if (line.startsWith('- ')) {
      flushPara();
      blocks.push({ kind: 'bullet', text: line.slice(2) });
      prevKind = 'bullet';
      continue;
    }
    const numMatch = line.match(/^(\d+)\.\s+(.*)$/);
    if (numMatch) {
      flushPara();
      numCounter = prevKind === 'num' ? numCounter + 1 : 1;
      blocks.push({ kind: 'num', index: numCounter, text: numMatch[2] });
      prevKind = 'num';
      continue;
    }
    if (line.startsWith('> ')) {
      flushPara();
      blocks.push({ kind: 'callout', text: line.slice(2) });
      prevKind = 'callout';
      continue;
    }
    para.push(line);
    prevKind = 'para';
  }
  flushPara();
  return blocks;
}

// ---------------------------------------------------------------------------
// Front matter
// ---------------------------------------------------------------------------
function drawCover(doc: jsPDFLike) {
  doc.setFillColor(...NAVY);
  doc.rect(0, 0, PAGE_W, PAGE_H, 'F');

  // accent band
  doc.setFillColor(...ACCENT);
  doc.rect(0, PAGE_H - 26, PAGE_W, 26, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text('LIS 814  ·  INDEXING & ABSTRACTING ACADEMY', MARGIN_L, 24);

  doc.setFontSize(22);
  doc.text('Indexing &', MARGIN_L, 52);
  doc.text('Abstracting', MARGIN_L, 62);
  doc.text('Master Textbook', MARGIN_L, 76);

  doc.setDrawColor(255, 255, 255);
  doc.setLineWidth(0.5);
  doc.line(MARGIN_L, 84, MARGIN_L + 40, 84);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text("Complete Master's Curriculum", MARGIN_L, 94);

  doc.setFontSize(8);
  doc.setTextColor(219, 226, 255);
  doc.text('28 Chapters  ·  7 Modules  ·  3 Parts', MARGIN_L, 104);
  doc.text('ANSI/NISO Z39.19  ·  ANSI/NISO Z39.14  ·  ISO 25964-1', MARGIN_L, 110);

  doc.setFontSize(8);
  doc.setTextColor(255, 255, 255);
  doc.text(`Compiled ${new Date().toLocaleDateString()}`, MARGIN_L, PAGE_H - 12);
  doc.text('IndexMaster', PAGE_W - MARGIN_R - doc.getTextWidth('IndexMaster'), PAGE_H - 12);
}

function drawNotice(doc: jsPDFLike) {
  doc.addPage();
  doc.setTextColor(...INK);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(...NAVY);
  doc.text('About This Book', MARGIN_L, MARGIN_T);
  doc.setDrawColor(...ACCENT);
  doc.setLineWidth(0.3);
  doc.line(MARGIN_L, MARGIN_T + 2.2, MARGIN_L + CONTENT_W, MARGIN_T + 2.2);

  let y = MARGIN_T + 9;
  const sections: Array<[string, string]> = [
    [
      'Scope',
      'This textbook is the complete, unabridged companion to the LIS 814 course. It covers the full arc of indexing and abstracting: from aboutness and bibliographic control, through controlled vocabularies, thesauri, PRECIS, chain and KWIC/KWOC indexing, to evaluation (exhaustivity, specificity, precision and recall, the Cranfield paradigm), abstracting standards and workflows, and modern AI-era indexing with embeddings and knowledge graphs.',
    ],
    [
      'How to use it',
      'Each chapter opens with learning objectives and a concept diagram, followed by the chapter body, key terms, review questions and further reading. Work through the review questions to check your understanding; the model answers and AI tutor in the app can grade your responses.',
    ],
    [
      'Standards',
      'The book is aligned with ANSI/NISO Z39.19 (Thesauri and interoperability), ANSI/NISO Z39.14 (Abstracting), and ISO 25964-1 (Thesauri for information retrieval).',
    ],
    [
      'Access',
      'This edition is protected for enrolled LIS 814 students. Enter the course access code in the app to unlock all materials.',
    ],
  ];
  for (const [heading, body] of sections) {
    y = ensureSpace(doc, y, 8);
    y = drawSectionHeading(doc, heading, y);
    y = drawParagraph(doc, body, MARGIN_L, y, CONTENT_W, BODY_SIZE, LINE_H) + 3;
  }
}

function drawToc(doc: jsPDFLike, pages: number[] | null) {
  doc.addPage();
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(...NAVY);
  doc.text('Contents', MARGIN_L, MARGIN_T);
  doc.setDrawColor(...ACCENT);
  doc.setLineWidth(0.3);
  doc.line(MARGIN_L, MARGIN_T + 2.2, MARGIN_L + CONTENT_W, MARGIN_T + 2.2);

  let y = MARGIN_T + 8;
  const leading = 3.7;
  doc.setFontSize(8);
  for (const chapter of BOOK_CHAPTERS) {
    y = ensureSpace(doc, y, leading + 0.5);
    const label = `${chapter.number}. ${sanitize(chapter.title)}`;
    doc.setFont('times', 'normal');
    doc.setTextColor(...INK);
    doc.text(label, MARGIN_L, y);

    const pageStr = pages && pages[chapter.number - 1] ? String(pages[chapter.number - 1]) : '';
    const labelW = doc.getTextWidth(label);
    const pageW = pageStr ? doc.getTextWidth(pageStr) : 0;
    const dotsEnd = MARGIN_L + CONTENT_W - pageW - 2;
    const dotW = doc.getTextWidth('.');
    let dx = MARGIN_L + labelW + 1.5;
    doc.setTextColor(...MUTED);
    while (dx < dotsEnd) {
      doc.text('.', dx, y);
      dx += dotW + 0.4;
    }
    if (pageStr) {
      doc.setTextColor(...INK);
      doc.text(pageStr, MARGIN_L + CONTENT_W - pageW, y);
    }
    y += leading;
  }
}

// ---------------------------------------------------------------------------
// Chapter rendering
// ---------------------------------------------------------------------------
async function renderChapter(
  doc: jsPDFLike,
  chapter: BookChapter
): Promise<number> {
  doc.addPage();
  const startPage = doc.getNumberOfPages();
  let y = MARGIN_T;

  // Kicker
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(...ACCENT);
  doc.text(
    sanitize(`CHAPTER ${chapter.number}  ·  ${chapter.module.toUpperCase()}`),
    MARGIN_L,
    y
  );
  y += 6.5;

  // Title (may wrap)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(...NAVY);
  const titleWords = parseStyled(sanitize(chapter.title)).map((w) => ({
    ...w,
    bold: true,
  }));
  y = flowWords(doc, titleWords, MARGIN_L, y, CONTENT_W, 14, 6.4) + 1;

  // Rule
  doc.setDrawColor(...ACCENT);
  doc.setLineWidth(0.35);
  doc.line(MARGIN_L, y, MARGIN_L + CONTENT_W, y);
  y += 5.5;

  // Learning objectives
  if (chapter.objectives.length) {
    y = drawSectionHeading(doc, 'Learning Objectives', y);
    for (const o of chapter.objectives) {
      y = ensureSpace(doc, y, LINE_H + 1);
      y = drawBullet(doc, o, MARGIN_L, y, CONTENT_W) + 1.1;
    }
    y += 2;
  }

  // Concept diagram
  const png = await getDiagramPng(chapter.diagramId);
  if (png) {
    const imgW = CONTENT_W;
    const imgH = imgW * png.aspect;
    y = ensureSpace(doc, y, imgH + 10);
    doc.addImage(png.dataUrl, 'PNG', MARGIN_L, y, imgW, imgH);
    y += imgH + 1.5;
    doc.setFont('times', 'italic');
    doc.setFontSize(8);
    doc.setTextColor(...MUTED);
    y = drawParagraph(
      doc,
      `Figure ${chapter.number}. ${png.title}. ${png.caption}`,
      MARGIN_L,
      y,
      CONTENT_W,
      8,
      3.6
    );
    y += 3;
  }

  // Body
  const blocks = parseBlocks(chapter.content);
  for (const b of blocks) {
    if (b.kind === 'h2') {
      y = drawH2(doc, b.text, y);
    } else if (b.kind === 'h3') {
      y = drawH3(doc, b.text, y);
    } else if (b.kind === 'bullet') {
      y = ensureSpace(doc, y, LINE_H + 1);
      y = drawBullet(doc, b.text, MARGIN_L, y, CONTENT_W) + 0.9;
    } else if (b.kind === 'num') {
      y = ensureSpace(doc, y, LINE_H + 1);
      y = drawNumbered(doc, b.text, b.index, MARGIN_L, y, CONTENT_W) + 0.9;
    } else if (b.kind === 'callout') {
      y = drawCallout(doc, b.text, y);
    } else {
      y = ensureSpace(doc, y, LINE_H + 1);
      y = drawParagraph(doc, b.text, MARGIN_L, y, CONTENT_W, BODY_SIZE, LINE_H) + 1.7;
    }
  }

  // Key terms
  if (chapter.keyTerms.length) {
    y += 1;
    y = drawSectionHeading(doc, 'Key Terms', y);
    for (const kt of chapter.keyTerms) {
      y = ensureSpace(doc, y, LINE_H * 2);
      y = drawTerm(doc, kt.term, kt.definition, MARGIN_L, y, CONTENT_W) + 1.1;
    }
  }

  // Review questions
  if (chapter.reviewQuestions.length) {
    y += 1;
    y = drawSectionHeading(doc, 'Review Questions', y);
    let qi = 1;
    for (const q of chapter.reviewQuestions) {
      y = ensureSpace(doc, y, LINE_H + 1);
      y = drawNumbered(doc, q, qi++, MARGIN_L, y, CONTENT_W) + 0.9;
    }
  }

  // Further reading
  if (chapter.furtherReading.length) {
    y += 1;
    y = drawSectionHeading(doc, 'Further Reading', y);
    for (const r of chapter.furtherReading) {
      y = ensureSpace(doc, y, LINE_H + 1);
      y = drawBullet(doc, r, MARGIN_L, y, CONTENT_W) + 0.9;
    }
  }

  return startPage;
}

// ---------------------------------------------------------------------------
// Book assembly (two passes: measure, then render with TOC page numbers)
// ---------------------------------------------------------------------------
async function renderBook(
  doc: jsPDFLike,
  tocPages: number[] | null
): Promise<number[]> {
  doc.setProperties({
    title: 'Indexing & Abstracting Master Textbook (LIS 814)',
    author: 'IndexMaster - Indexing & Abstracting Academy',
    subject: "LIS 814 complete master's curriculum textbook",
    keywords: 'indexing, abstracting, LIS 814, thesaurus, PRECIS, NISO Z39.19',
    creator: 'IndexMaster',
  });

  drawCover(doc);
  drawNotice(doc);
  drawToc(doc, tocPages);

  const recorded: number[] = [];
  for (const chapter of BOOK_CHAPTERS) {
    recorded[chapter.number - 1] = await renderChapter(doc, chapter);
  }
  return recorded;
}

function stampFooters(doc: jsPDFLike) {
  const total = doc.getNumberOfPages();
  for (let i = 1; i <= total; i++) {
    doc.setPage(i);
    doc.setDrawColor(203, 213, 225);
    doc.setLineWidth(0.15);
    doc.line(MARGIN_L, PAGE_H - 10.5, PAGE_W - MARGIN_R, PAGE_H - 10.5);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.5);
    doc.setTextColor(...MUTED);
    doc.text('IndexMaster  ·  LIS 814 Indexing & Abstracting', MARGIN_L, PAGE_H - 7);
    const pageStr = `Page ${i} of ${total}`;
    doc.text(pageStr, PAGE_W - MARGIN_R - doc.getTextWidth(pageStr), PAGE_H - 7);
  }
}

/** Build the A6 PDF and return it as a Blob for download. */
export async function buildTextbookPdf(): Promise<Blob> {
  const { jsPDF } = await import('jspdf');

  // Pass 1: measure chapter start pages (TOC page count is fixed at one
  // page, so pass 2 pagination is identical).
  const doc1 = new jsPDF({ unit: 'mm', format: 'a6', compress: true });
  const measured = await renderBook(doc1, null);

  // Pass 2: final render with real TOC page numbers.
  const doc2 = new jsPDF({ unit: 'mm', format: 'a6', compress: true });
  await renderBook(doc2, measured);

  stampFooters(doc2);
  return doc2.output('blob');
}
