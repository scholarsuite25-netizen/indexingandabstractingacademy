import { renderToString } from 'react-dom/server';
import React from 'react';
import App from './src/App.tsx';
import { HomeDashboard } from './src/components/HomeDashboard';
import { Navbar } from './src/components/Navbar';
import { Footer } from './src/components/Footer';
import { FloatingContact } from './src/components/FloatingContact';
import { LecturesView } from './src/components/LecturesView';
import { ReadingsView } from './src/components/ReadingsView';
import { McqView } from './src/components/McqView';
import { FlashcardsView } from './src/components/FlashcardsView';
import { TheoryView } from './src/components/TheoryView';
import { SandboxView } from './src/components/SandboxView';
import { BibliographicExplorer } from './src/components/BibliographicExplorer';
import { AiTutorView } from './src/components/AiTutorView';
import { EbookDownloadView } from './src/components/EbookDownloadView';
import { BookmarksProgressView } from './src/components/BookmarksProgressView';
import { FacilitatorView } from './src/components/FacilitatorView';
import { AccessGate } from './src/components/AccessGate';
import { MCQ_TOTAL, FLASHCARD_TOTAL, MCQ_COUNTS_BY_MODULE, FLASHCARD_COUNTS_BY_MODULE } from './src/data/counts';
import { MCQ_QUESTIONS } from './src/data/mcqQuestions';
import { FLASHCARDS } from './src/data/flashcards';

const noop = () => {};

const cases: Array<[string, () => string]> = [
  ['App', () => renderToString(React.createElement(App))],
  ['HomeDashboard', () => renderToString(React.createElement(HomeDashboard, { setActiveTab: noop, selectedModuleId: null, setSelectedModuleId: noop, darkMode: false }))],
  ['Navbar', () => renderToString(React.createElement(Navbar, { activeTab: 'home', setActiveTab: noop, searchQuery: '', setSearchQuery: noop, darkMode: false, setDarkMode: noop, bookmarkCount: 0 }))],
  ['Footer', () => renderToString(React.createElement(Footer, { activeTab: 'home', setActiveTab: noop, setSelectedModuleId: noop, darkMode: false, bookmarkCount: 0 }))],
  ['FloatingContact', () => renderToString(React.createElement(FloatingContact, { darkMode: false }))],
  ['LecturesView', () => renderToString(React.createElement(LecturesView, { selectedModuleId: null, setSelectedModuleId: noop, bookmarks: [], toggleBookmark: noop, darkMode: false, searchQuery: '' }))],
  ['ReadingsView', () => renderToString(React.createElement(ReadingsView, { bookmarks: [], toggleBookmark: noop, darkMode: false, searchQuery: '' }))],
  ['McqView', () => renderToString(React.createElement(McqView, { darkMode: false }))],
  ['FlashcardsView', () => renderToString(React.createElement(FlashcardsView, { darkMode: false }))],
  ['TheoryView', () => renderToString(React.createElement(TheoryView, { darkMode: false }))],
  ['SandboxView', () => renderToString(React.createElement(SandboxView, { darkMode: false }))],
  ['BibliographicExplorer', () => renderToString(React.createElement(BibliographicExplorer, { darkMode: false }))],
  ['AiTutorView', () => renderToString(React.createElement(AiTutorView, { darkMode: false }))],
  ['EbookDownloadView', () => renderToString(React.createElement(EbookDownloadView, { darkMode: false }))],
  ['BookmarksProgressView', () => renderToString(React.createElement(BookmarksProgressView, { bookmarks: [], removeBookmark: noop, setActiveTab: noop, setSelectedModuleId: noop, darkMode: false }))],
  ['FacilitatorView', () => renderToString(React.createElement(FacilitatorView, { darkMode: false, setActiveTab: noop }))],
  ['AccessGate', () => renderToString(React.createElement(AccessGate, { darkMode: false, onUnlock: noop }))],
];

let failures = 0;
for (const [name, run] of cases) {
  try {
    const html = run();
    const problems: string[] = [];
    if (html.length < 200) problems.push(`suspiciously short output (${html.length} chars)`);
    if (/undefined|\[object Object\]|NaN/.test(html)) problems.push('rendered "undefined"/"[object Object]"/NaN');
    const h1 = (html.match(/<h1/g) || []).length;
    if (name !== 'App' && h1 > 1) problems.push(`${h1} <h1> tags`);
    console.log(`${problems.length ? 'WARN' : 'OK  '}  ${name}  (${html.length} chars)${problems.length ? ' -> ' + problems.join('; ') : ''}`);
    if (problems.length) failures++;
  } catch (err) {
    failures++;
    console.log(`FAIL  ${name} -> ${(err as Error).message}`);
  }
}
console.log(failures ? `\n${failures} issue(s)` : '\nAll renders passed');

// src/data/counts.ts drives Navbar/HomeDashboard labels — must match the real banks.
const countProblems: string[] = [];
if (MCQ_TOTAL !== MCQ_QUESTIONS.length) {
  countProblems.push(`MCQ_TOTAL ${MCQ_TOTAL} != ${MCQ_QUESTIONS.length}`);
}
if (FLASHCARD_TOTAL !== FLASHCARDS.length) {
  countProblems.push(`FLASHCARD_TOTAL ${FLASHCARD_TOTAL} != ${FLASHCARDS.length}`);
}
for (const [mod, n] of Object.entries(MCQ_COUNTS_BY_MODULE)) {
  const actual = MCQ_QUESTIONS.filter(q => q.module.startsWith(`Module ${mod}:`)).length;
  if (actual !== n) countProblems.push(`MCQ Module ${mod}: counts.ts ${n} != ${actual}`);
}
for (const [mod, n] of Object.entries(FLASHCARD_COUNTS_BY_MODULE)) {
  const actual = FLASHCARDS.filter(f => f.module === `Module ${mod}`).length;
  if (actual !== n) countProblems.push(`Flashcard Module ${mod}: counts.ts ${n} != ${actual}`);
}
if (countProblems.length) {
  failures++;
  console.log(`FAIL  counts -> ${countProblems.join('; ')}`);
} else {
  console.log('OK    counts   (totals + per-module match data)');
}
if (failures) process.exitCode = 1;
