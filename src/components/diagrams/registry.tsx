import React from 'react';
import { DiagramId } from '../../data/bookTypes';
import { DIAGRAMS_P1A } from './p1a';
import { DIAGRAMS_P1B } from './p1b';
import { DIAGRAMS_P2A } from './p2a';
import { DIAGRAMS_P2B } from './p2b';
import { DIAGRAMS_PART3 } from './part3';

export interface DiagramEntry {
  /** Short figure title shown as a chip above the figure */
  title: string;
  /** One-or-two sentence explanatory caption shown below the figure */
  caption: string;
  /** The SVG illustration component */
  Comp: React.FC<{ className?: string }>;
}

const ALL: Partial<Record<DiagramId, DiagramEntry>> = {
  ...DIAGRAMS_P1A,
  ...DIAGRAMS_P1B,
  ...DIAGRAMS_P2A,
  ...DIAGRAMS_P2B,
  ...DIAGRAMS_PART3,
};

const placeholder = (id: string): DiagramEntry => ({
  title: 'Concept diagram',
  caption: `Visual summary of this concept (figure: ${id}).`,
  Comp: ({ className }) => (
    <div
      className={`flex items-center justify-center h-40 rounded-xl border border-dashed border-line bg-panel text-ink-muted text-xs font-bold ${className ?? ''}`}
    >
      Concept illustration
    </div>
  ),
});

export const getDiagram = (id: DiagramId): DiagramEntry => ALL[id] ?? placeholder(id);

/** Figure block: bordered illustration panel + caption, used inside RichText. */
export const DiagramFigure: React.FC<{ id: DiagramId; className?: string }> = ({ id, className }) => {
  const { title, caption, Comp } = getDiagram(id);
  return (
    <figure className={`my-4 rounded-2xl border border-line bg-panel-2 p-4 sm:p-5 space-y-3 ${className ?? ''}`}>
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-accent-600">Figure</span>
        <span className="text-xs font-bold text-ink">{title}</span>
      </div>
      <div className="rounded-xl bg-white dark:bg-slate-900 border border-line overflow-hidden">
        <Comp className="w-full h-auto" />
      </div>
      <figcaption className="text-xs font-medium leading-relaxed text-ink-muted">{caption}</figcaption>
    </figure>
  );
};
