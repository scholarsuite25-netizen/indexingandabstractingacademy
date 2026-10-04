import React from 'react';
import { DiagramId } from '../data/bookTypes';
import { DiagramFigure } from './diagrams/registry';

interface RichTextProps {
  text: string;
  className?: string;
}

const renderInline = (text: string): React.ReactNode[] => {
  const nodes: React.ReactNode[] = [];
  const re = /(\*\*[^*]+\*\*|\*[^*\n]+\*)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = re.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    const token = match[0];
    if (token.startsWith('**')) {
      nodes.push(
        <strong key={key++} className="font-extrabold">
          {token.slice(2, -2)}
        </strong>
      );
    } else {
      nodes.push(
        <em key={key++}>
          {token.slice(1, -1)}
        </em>
      );
    }
    last = match.index + token.length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
};

const isBullet = (line: string) => /^[-•]\s+/.test(line);
const isOrdered = (line: string) => /^\d+\.\s+/.test(line);

/**
 * Lightweight markdown-lite renderer used by the textbook, model answers, and
 * lecture bodies. Supports: ## / ### headings, - bullets, 1. ordered lists,
 * **bold**, *italic*, > callouts, [[diagram:<id>]] markers, and paragraphs.
 */
export const RichText: React.FC<RichTextProps> = ({ text, className }) => {
  const lines = text.split('\n');
  const blocks: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) {
      i++;
      continue;
    }

    // Diagram marker line
    const diagMatch = line.match(/^\[\[diagram:([a-z0-9-]+)\]\]$/);
    if (diagMatch) {
      blocks.push(<DiagramFigure key={key++} id={diagMatch[1] as DiagramId} />);
      i++;
      continue;
    }

    // Headings
    if (line.startsWith('### ')) {
      blocks.push(
        <h4 key={key++} className="text-base font-extrabold text-ink pt-2">
          {renderInline(line.slice(4))}
        </h4>
      );
      i++;
      continue;
    }
    if (line.startsWith('## ') || line.startsWith('# ')) {
      blocks.push(
        <h3 key={key++} className="text-lg sm:text-xl font-extrabold tracking-tight text-ink pt-3">
          {renderInline(line.replace(/^#+\s+/, ''))}
        </h3>
      );
      i++;
      continue;
    }

    // Callouts
    if (line.startsWith('> ')) {
      const buf: string[] = [];
      while (i < lines.length && lines[i].startsWith('> ')) {
        buf.push(lines[i].slice(2));
        i++;
      }
      blocks.push(
        <blockquote
          key={key++}
          className="border-l-4 border-accent-400 bg-accent-50/70 dark:bg-accent-950/40 rounded-r-xl px-4 py-3 text-sm font-medium text-ink"
        >
          {renderInline(buf.join(' '))}
        </blockquote>
      );
      continue;
    }

    // Bullet list
    if (isBullet(line)) {
      const items: string[] = [];
      while (i < lines.length && isBullet(lines[i])) {
        items.push(lines[i].replace(/^[-•]\s+/, ''));
        i++;
      }
      blocks.push(
        <ul key={key++} className="list-disc pl-6 space-y-1.5 marker:text-accent-500">
          {items.map((item, idx) => (
            <li key={idx}>{renderInline(item)}</li>
          ))}
        </ul>
      );
      continue;
    }

    // Ordered list
    if (isOrdered(line)) {
      const items: string[] = [];
      while (i < lines.length && isOrdered(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s+/, ''));
        i++;
      }
      blocks.push(
        <ol key={key++} className="list-decimal pl-6 space-y-1.5 marker:text-accent-500 marker:font-bold">
          {items.map((item, idx) => (
            <li key={idx}>{renderInline(item)}</li>
          ))}
        </ol>
      );
      continue;
    }

    // Paragraph (merge consecutive plain lines)
    const para: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].startsWith('## ') &&
      !lines[i].startsWith('# ') &&
      !lines[i].startsWith('### ') &&
      !lines[i].startsWith('> ') &&
      !isBullet(lines[i]) &&
      !isOrdered(lines[i]) &&
      !/^\[\[diagram:/.test(lines[i])
    ) {
      para.push(lines[i].trim());
      i++;
    }
    blocks.push(<p key={key++}>{renderInline(para.join(' '))}</p>);
  }

  return <div className={className}>{blocks}</div>;
};
