import React, { useEffect, useState } from 'react';
import { Sparkles, CheckCircle2, Loader2, Award, BookOpen, RotateCcw } from 'lucide-react';
import { THEORY_QUESTIONS, TheoryQuestionItem } from '../data/theoryQuestions';
import { RichText } from './RichText';
import { apiFetch } from '../../lib/apiClient';



interface TheoryViewProps {
  darkMode: boolean;
}

interface TheoryProgress {
  answered?: number;
  total?: number;
  answers?: { [key: string]: string };
  updatedAt?: string;
}

const THEORY_STORAGE_KEY = 'indexmaster_theory';



export const TheoryView: React.FC<TheoryViewProps> = () => {
  const theoryQuestions = THEORY_QUESTIONS;

  const [studentAnswers, setStudentAnswers] = useState<{ [key: string]: string }>(() => {
    try {
      const raw = localStorage.getItem(THEORY_STORAGE_KEY);
      if (!raw) return {};
      const parsed = JSON.parse(raw) as TheoryProgress;
      const stored = parsed?.answers;
      if (!stored || typeof stored !== 'object') return {};
      const validIds = new Set(theoryQuestions.map(q => q.id));
      const restored: { [key: string]: string } = {};
      Object.entries(stored).forEach(([id, text]) => {
        if (validIds.has(id) && typeof text === 'string') {
          restored[id] = text;
        }
      });
      return restored;
    } catch {
      return {};
    }
  });
  const [aiFeedback, setAiFeedback] = useState<{ [key: string]: string }>({});
  const [gradingLoading, setGradingLoading] = useState<{ [key: string]: boolean }>({});
  const [gradingError, setGradingError] = useState<{ [key: string]: boolean }>({});
  const [showModelAnswer, setShowModelAnswer] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    try {
      const answered = theoryQuestions.filter(
        q => (studentAnswers[q.id] || '').trim().length > 0
      ).length;
      const payload: TheoryProgress = {
        answered,
        total: theoryQuestions.length,
        answers: studentAnswers,
        updatedAt: new Date().toISOString()
      };
      localStorage.setItem(THEORY_STORAGE_KEY, JSON.stringify(payload));
    } catch {
      return;
    }
  }, [studentAnswers]);

  const handleGradeAnswer = async (q: TheoryQuestionItem) => {
    const studentText = studentAnswers[q.id];
    if (!studentText || !studentText.trim() || gradingLoading[q.id]) return;

    setGradingLoading(prev => ({ ...prev, [q.id]: true }));

    try {
      const res = await apiFetch('/api/ai-tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: `Grade this Master's degree student essay response for the theory question: "${q.question}".
Guidelines expected: ${q.guidelines}
Student's Answer: "${studentText}"

Provide a rigorous Master's level academic evaluation, score (out of 10), strengths, and areas for improvement.`,
          context: q.moduleName
        })
      });

      if (!res.ok) {
        throw new Error(`Grading request failed with status ${res.status}`);
      }

      const data = await res.json();
      const feedbackText = data && typeof data.text === 'string' ? data.text.trim() : '';

      if (!feedbackText) {
        throw new Error('Grading service returned an empty response');
      }

      setAiFeedback(prev => ({ ...prev, [q.id]: feedbackText }));
      setGradingError(prev => ({ ...prev, [q.id]: false }));
    } catch (err) {
      console.error(err);
      setAiFeedback(prev => {
        const next = { ...prev };
        delete next[q.id];
        return next;
      });
      setGradingError(prev => ({ ...prev, [q.id]: true }));
    } finally {
      setGradingLoading(prev => ({ ...prev, [q.id]: false }));
    }
  };

  return (
    <div className="space-y-8 pb-16 max-w-4xl mx-auto">
      {/* Header */}
      <div className="p-6 sm:p-8 rounded-2xl border border-line bg-panel shadow-sm">
        <div className="space-y-3">
          <span className="inline-flex items-center text-xs font-bold px-3 py-1 rounded-full bg-accent-50 text-accent-700 border border-accent-100 dark:bg-accent-950/50 dark:text-accent-300 dark:border-accent-900">
            Master's Degree Theory &amp; Essay Center &bull; 35 Rigorous Questions (5 per Module)
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
            Advanced <span className="text-accent-600">Theory</span> &amp; Essay Assignments
          </h1>
          <p className="text-sm font-medium text-ink-muted max-w-prose">
            Master's level pedagogy provides <span className="font-bold text-accent-600">both</span>: an interactive
            workspace for students to type their own answers for instant AI grading, AND authoritative{' '}
            <span className="font-bold text-accent-600">Model Master's Answers</span> for self-assessment and deep study.
          </p>
        </div>
      </div>

      {/* Questions List grouped by Module */}
      <div className="space-y-6">
        {theoryQuestions.map((q, idx) => {
          const isGrading = gradingLoading[q.id];
          const feedback = aiFeedback[q.id];
          const showModel = showModelAnswer[q.id];

          return (
            <div
              key={q.id}
              className="p-6 sm:p-8 rounded-2xl border border-line bg-panel shadow-sm transition-all duration-300 space-y-6 hover:shadow-xl hover:border-accent-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-line pb-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-accent-600 text-white flex items-center justify-center font-bold text-xs">
                    Q{idx + 1}
                  </span>
                  <span className="text-xs font-bold text-ink-muted">
                    {q.moduleName}
                  </span>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-panel-2 border border-line text-ink-muted">
                  Master's Essay Prompt
                </span>
              </div>

              <div className="space-y-3">
                <h2 className="text-lg sm:text-xl font-extrabold leading-snug text-ink">
                  {q.question}
                </h2>
                <p className="text-sm font-medium text-ink-muted max-w-prose">
                  <strong className="text-ink font-bold">Expected Guidelines:</strong> {q.guidelines}
                </p>
              </div>

              {/* Student Answer Workspace */}
              <div className="space-y-3">
                <label
                  htmlFor={`theory-answer-${q.id}`}
                  className="block text-xs font-bold uppercase tracking-wider text-accent-600"
                >
                  Your Master's Essay Response:
                </label>
                <textarea
                  id={`theory-answer-${q.id}`}
                  rows={4}
                  placeholder="Type your academic analysis here..."
                  value={studentAnswers[q.id] || ''}
                  onChange={(e) => setStudentAnswers({ ...studentAnswers, [q.id]: e.target.value })}
                  className="w-full rounded-xl border border-line bg-panel text-ink placeholder-ink-muted px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent-500"
                />

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => handleGradeAnswer(q)}
                    disabled={!studentAnswers[q.id]?.trim() || isGrading}
                    className={`flex items-center gap-2 min-h-11 px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm ${
                      !studentAnswers[q.id]?.trim() || isGrading
                        ? 'bg-line text-ink-muted cursor-not-allowed'
                        : 'bg-accent-600 text-white hover:bg-accent-700'
                    }`}
                  >
                    {isGrading ? <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" /> : <Sparkles className="w-4 h-4" aria-hidden="true" />}
                    <span>{isGrading ? 'Grading Essay...' : 'Get AI Essay Feedback'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowModelAnswer({ ...showModelAnswer, [q.id]: !showModel })}
                    aria-expanded={showModel}
                    aria-controls={`model-answer-${q.id}`}
                    className="flex items-center gap-1.5 min-h-11 px-4 py-2.5 rounded-full text-sm font-bold border border-line bg-panel text-ink hover:border-accent-300 transition-all"
                  >
                    <BookOpen className="w-4 h-4" aria-hidden="true" />
                    <span>{showModel ? 'Hide Model Answer' : 'View Model Answer'}</span>
                  </button>
                </div>
              </div>

              {/* Grading Error */}
              {gradingError[q.id] && (
                <div role="alert" className="p-5 rounded-2xl border border-accent-500 bg-accent-50 dark:bg-accent-950/40 space-y-3 animate-fade-in">
                  <p className="text-sm font-bold text-accent-700 dark:text-accent-300 max-w-prose">
                    Could not grade your answer — check your connection and try again.
                  </p>
                  <button
                    type="button"
                    onClick={() => handleGradeAnswer(q)}
                    className="inline-flex items-center gap-2 min-h-11 px-5 py-2.5 rounded-full text-sm font-bold bg-accent-600 text-white shadow-sm hover:bg-accent-700 transition-all"
                  >
                    <RotateCcw className="w-4 h-4" aria-hidden="true" />
                    <span>Retry grading</span>
                  </button>
                </div>
              )}

              {/* AI Feedback Display */}
              {feedback && (
                <div role="status" aria-live="polite" className="p-5 rounded-2xl border border-line bg-panel-2 space-y-2 animate-fade-in">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-accent-600 flex items-center space-x-1.5">
                    <Award className="w-4 h-4" aria-hidden="true" />
                    <span>AI Professor Academic Grading &amp; Feedback:</span>
                  </h3>
                  <p className="text-sm font-medium leading-relaxed whitespace-pre-wrap text-ink max-w-prose">
                    {feedback}
                  </p>
                </div>
              )}

              {/* Model Answer Display */}
              {showModel && (
                <div id={`model-answer-${q.id}`} className="p-6 rounded-2xl border border-line bg-panel-2 space-y-3 animate-fade-in">
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-accent-600 flex items-center space-x-1.5">
                    <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                    <span>Authoritative Model Master's Answer:</span>
                  </h3>
                  <RichText
                    text={q.modelAnswer}
                    className="text-sm sm:text-base font-medium leading-relaxed text-ink space-y-3 max-w-prose"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
