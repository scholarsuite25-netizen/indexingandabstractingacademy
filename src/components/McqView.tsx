import React, { useEffect, useMemo, useRef, useState } from 'react';
import { CheckCircle2, XCircle, X, Award, RotateCcw, ArrowRight, Printer, Sparkles, Check } from 'lucide-react';
import { MCQ_QUESTIONS } from '../data/mcqQuestions';



interface McqViewProps {
  darkMode: boolean;
}

interface McqProgress {
  answers?: number[];
  index?: number;
  finished?: boolean;
  answered?: number;
  total?: number;
  correct?: number;
  updatedAt?: string;
}

const MCQ_STORAGE_KEY = 'indexmaster_mcq';

const readMcqProgress = (): McqProgress | null => {
  try {
    const raw = localStorage.getItem(MCQ_STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? (parsed as McqProgress) : null;
  } catch {
    return null;
  }
};



export const McqView: React.FC<McqViewProps> = () => {
  const questions = MCQ_QUESTIONS;

  const restored = useMemo(() => {
    const progress = readMcqProgress();
    const answers: { [key: number]: number } = {};
    const stored = Array.isArray(progress?.answers) ? progress.answers : [];
    stored.forEach((value, i) => {
      if (
        i >= 0 &&
        i < questions.length &&
        typeof value === 'number' &&
        Number.isInteger(value) &&
        value >= 0 &&
        value < questions[i].options.length
      ) {
        answers[i] = value;
      }
    });
    const rawIndex =
      typeof progress?.index === 'number' && Number.isFinite(progress.index)
        ? Math.floor(progress.index)
        : 0;
    const index = Math.min(Math.max(rawIndex, 0), Math.max(questions.length - 1, 0));
    return { answers, index, finished: progress?.finished === true };
  }, []);

  const [currentIndex, setCurrentIndex] = useState(restored.index);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>(restored.answers);
  const [submitted, setSubmitted] = useState(restored.finished);
  const [showExplanation, setShowExplanation] = useState(restored.answers[restored.index] !== undefined);

  const questionHeadingRef = useRef<HTMLHeadingElement>(null);
  const skipInitialFocus = useRef(true);

  const currentQ = questions[currentIndex];

  const handleSelectOption = (optionIndex: number) => {
    if (submitted) return;
    if (selectedAnswers[currentIndex] !== undefined) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [currentIndex]: optionIndex
    }));
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setShowExplanation(selectedAnswers[currentIndex + 1] !== undefined);
      setCurrentIndex(prev => prev + 1);
    } else {
      setSubmitted(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setShowExplanation(selectedAnswers[currentIndex - 1] !== undefined);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedAnswers({});
    setSubmitted(false);
    setShowExplanation(false);
  };

  useEffect(() => {
    if (skipInitialFocus.current) {
      skipInitialFocus.current = false;
      return;
    }
    if (!submitted) {
      questionHeadingRef.current?.focus();
    }
  }, [currentIndex, submitted]);

  // Calculate score
  const totalAnswered = Object.keys(selectedAnswers).length;
  let correctCount = 0;
  Object.entries(selectedAnswers).forEach(([qIdx, ansIdx]) => {
    if (questions[Number(qIdx)]?.correctAnswer === ansIdx) {
      correctCount++;
    }
  });

  const percentage = questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0;
  const passed = percentage >= 70; // 70% pass mark
  const currentAnswer = selectedAnswers[currentIndex];
  const isCurrentCorrect = currentAnswer !== undefined && currentAnswer === currentQ.correctAnswer;

  useEffect(() => {
    try {
      const payload: McqProgress = {
        answers: questions.map((_, i) => selectedAnswers[i] ?? -1),
        index: currentIndex,
        finished: submitted,
        answered: totalAnswered,
        total: questions.length,
        correct: correctCount,
        updatedAt: new Date().toISOString()
      };
      localStorage.setItem(MCQ_STORAGE_KEY, JSON.stringify(payload));
    } catch {
      return;
    }
  }, [selectedAnswers, currentIndex, submitted, totalAnswered, correctCount]);

  return (
    <div className="space-y-8 pb-16 max-w-4xl mx-auto">
      {/* Header */}
      <div className="p-6 sm:p-8 rounded-2xl border border-line bg-panel shadow-sm">
        <div className="space-y-2">
          <span className="inline-flex items-center text-xs font-bold px-3 py-1 rounded-full bg-accent-50 text-accent-700 border border-accent-100 dark:bg-accent-950/50 dark:text-accent-300 dark:border-accent-900">
            Comprehensive Course Assessment &bull; 100 Questions
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
            LIS 814 <span className="text-accent-600">Certification</span> Examination
          </h1>
          <p className="text-sm font-medium text-ink-muted">
            Sequential 100-question exam covering all 7 course modules. Pass mark is{' '}
            <span className="font-bold text-accent-600">70% (70/100)</span>. Upon passing, generate your formal
            Certificate of Completion.
          </p>
        </div>
      </div>

      {!submitted && (
        <div role="status" aria-live="polite" className="sr-only">
          Question {currentIndex + 1} of {questions.length}
        </div>
      )}

      {!submitted ? (
        <div className="p-6 sm:p-10 rounded-2xl border border-line bg-panel shadow-sm space-y-8">
          {/* Progress bar & Module tag */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-line pb-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent-600 text-white">
                Question {currentIndex + 1} of {questions.length}
              </span>
              <span className="text-xs font-bold text-ink-muted">
                {currentQ.module}
              </span>
            </div>
            <div
              role="progressbar"
              aria-label="Exam progress"
              aria-valuemin={1}
              aria-valuemax={questions.length}
              aria-valuenow={currentIndex + 1}
              className="w-full sm:w-48 bg-line h-2 rounded-full overflow-hidden"
            >
              <div
                className="bg-accent-600 h-full rounded-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question text */}
          <div className="space-y-4">
            <h2
              ref={questionHeadingRef}
              tabIndex={-1}
              className="text-xl sm:text-2xl font-extrabold leading-snug text-ink"
            >
              {currentQ.question}
            </h2>
          </div>

          {/* Options */}
          <div role="radiogroup" aria-label={`Answer options for question ${currentIndex + 1}`} className="space-y-3">
            {currentQ.options.map((option, oIdx) => {
              const isSelected = selectedAnswers[currentIndex] === oIdx;
              const isCorrect = currentQ.correctAnswer === oIdx;
              const locked = selectedAnswers[currentIndex] !== undefined;
              const reveal = locked;

              let btnStyle = 'border border-line bg-panel text-ink hover:border-accent-300 hover:bg-panel-2';
              if (reveal && isCorrect) {
                btnStyle = 'bg-emerald-500/15 text-emerald-700 border-emerald-500 dark:text-emerald-300';
              } else if (reveal && isSelected) {
                btnStyle = 'bg-accent-50 text-accent-700 border-accent-500 dark:bg-accent-950/40 dark:text-accent-300';
              } else if (reveal) {
                btnStyle = 'border border-line bg-panel-2 text-ink-muted cursor-default';
              }

              return (
                <button
                  key={oIdx}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  aria-disabled={locked}
                  onClick={() => handleSelectOption(oIdx)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 font-medium text-sm sm:text-base ${btnStyle}`}
                >
                  <span className="flex items-center space-x-3 min-w-0">
                    <span className={`w-7 h-7 shrink-0 rounded-xl flex items-center justify-center text-xs font-bold ${
                      reveal && isCorrect
                        ? 'bg-emerald-600 text-white'
                        : reveal && isSelected
                          ? 'bg-accent-600 text-white'
                          : 'bg-panel-2 text-ink-muted border border-line'
                    }`}>
                      {String.fromCharCode(65 + oIdx)}
                    </span>
                    <span>{option}</span>
                  </span>
                  {reveal && isCorrect && (
                    <span className="shrink-0 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide">
                      <Check className="w-4 h-4" aria-hidden="true" />
                      Correct answer
                    </span>
                  )}
                  {reveal && isSelected && !isCorrect && (
                    <span className="shrink-0 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide">
                      <X className="w-4 h-4" aria-hidden="true" />
                      Your answer
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation if answered */}
          {showExplanation && (
            <div className="space-y-3 animate-fade-in">
              <div
                role="status"
                aria-live="polite"
                className={`flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-bold ${
                  isCurrentCorrect
                    ? 'bg-emerald-500/15 text-emerald-700 border-emerald-500 dark:text-emerald-300'
                    : 'bg-accent-50 text-accent-700 border-accent-500 dark:bg-accent-950/40 dark:text-accent-300'
                }`}
              >
                {isCurrentCorrect ? (
                  <CheckCircle2 className="w-5 h-5 shrink-0" aria-hidden="true" />
                ) : (
                  <XCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                )}
                <span>{isCurrentCorrect ? 'Correct!' : 'Not quite — review below'}</span>
              </div>
              <div className="p-5 rounded-2xl border border-line bg-panel-2 space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-accent-600 flex items-center space-x-1.5">
                  <Sparkles className="w-4 h-4" aria-hidden="true" />
                  <span>Verified Pedagogical Explanation:</span>
                </h3>
                <p className="text-sm font-medium leading-relaxed text-ink-muted max-w-prose">
                  {currentQ.explanation}
                </p>
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-6 border-t border-line">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`min-h-11 px-5 py-2.5 rounded-full text-sm font-bold border transition-all ${
                currentIndex === 0
                  ? 'border-line bg-panel text-ink-muted cursor-not-allowed'
                  : 'border-line bg-panel text-ink hover:border-accent-300'
              }`}
            >
              Previous Question
            </button>

            <div className="text-xs font-bold text-ink-muted">
              Answered: {totalAnswered} / {questions.length}
            </div>

            <button
              type="button"
              onClick={handleNext}
              disabled={selectedAnswers[currentIndex] === undefined}
              className={`flex items-center gap-2 min-h-11 px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                selectedAnswers[currentIndex] === undefined
                  ? 'bg-line text-ink-muted cursor-not-allowed'
                  : 'bg-accent-600 text-white hover:bg-accent-700 shadow-sm'
              }`}
            >
              <span>{currentIndex === questions.length - 1 ? 'Submit Examination' : 'Next Question'}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : (
        /* Results View */
        <div className="p-8 sm:p-12 rounded-2xl border border-line bg-panel shadow-sm text-center space-y-8">
          <div className={`w-24 h-24 mx-auto rounded-3xl flex items-center justify-center text-white shadow-xl ${
            passed ? 'bg-emerald-500' : 'bg-band'
          }`}>
            {passed ? <Award className="w-12 h-12" aria-hidden="true" /> : <XCircle className="w-12 h-12" aria-hidden="true" />}
          </div>

          <div role="status" aria-live="polite" className="space-y-3 max-w-md mx-auto">
            <span className={`inline-flex text-xs font-bold px-3 py-1 rounded-full border ${
              passed
                ? 'bg-emerald-500/15 text-emerald-700 border-emerald-500 dark:text-emerald-300'
                : 'bg-accent-50 text-accent-700 border-accent-100 dark:bg-accent-950/50 dark:text-accent-300 dark:border-accent-900'
            }`}>
              {passed ? 'Examination Passed Successfully' : 'Pass Mark Not Reached (70% Required)'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
              Your Score: {correctCount} / {questions.length} ({percentage}%)
            </h2>
            <p className="text-sm font-medium text-ink-muted">
              {passed
                ? 'Congratulations! You have demonstrated comprehensive mastery of LIS 814 Indexing and Abstracting.'
                : 'Review the lecture materials and try the examination again to achieve the 70% passing threshold.'}
            </p>
          </div>

          {/* Certificate of Completion if Passed */}
          {passed && (
            <div className="p-6 sm:p-8 rounded-2xl border border-line bg-band text-white text-left space-y-6 relative overflow-hidden">
              <div className="absolute top-4 right-4 opacity-10">
                <Award className="w-32 h-32 text-accent-400" aria-hidden="true" />
              </div>

              <div className="text-center space-y-2 border-b border-white/15 pb-6 relative">
                <span className="text-xs font-extrabold tracking-widest uppercase text-accent-400">
                  IndexMaster Academy &bull; Certificate of Academic Completion
                </span>
                <h3 className="text-2xl font-black text-white">
                  Certificate of Achievement in LIS 814
                </h3>
                <p className="text-xs font-bold text-white/70">Indexing, Abstracting, Thesaurus Construction &amp; Information Retrieval</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-bold relative">
                <div className="p-3 rounded-xl border bg-white/10 border-white/15">
                  <span>Passing Score: {percentage}% (Required: 70%)</span>
                </div>
                <div className="p-3 rounded-xl border bg-white/10 border-white/15">
                  <span>Total Exam Questions: 100 Verified Items</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="flex items-center gap-2 min-h-11 px-5 py-2.5 rounded-full font-bold bg-accent-600 text-white shadow-sm hover:bg-accent-700 transition-all text-sm"
                >
                  <Printer className="w-4 h-4" aria-hidden="true" />
                  <span>Print Official Certificate</span>
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex items-center gap-2 min-h-11 px-5 py-2.5 rounded-full font-bold border border-white/25 text-white hover:border-accent-400 transition-all text-sm"
                >
                  <RotateCcw className="w-4 h-4" aria-hidden="true" />
                  <span>Retake Examination</span>
                </button>
              </div>
            </div>
          )}

          {!passed && (
            <div className="pt-4 flex justify-center">
              <button
                type="button"
                onClick={handleReset}
                className="flex items-center gap-2 min-h-11 px-8 py-3 rounded-full font-bold bg-accent-600 text-white shadow-sm hover:bg-accent-700 transition-all text-sm"
              >
                <RotateCcw className="w-5 h-5" aria-hidden="true" />
                <span>Retry Examination</span>
              </button>
            </div>
          )}

          {/* Per-question review */}
          <div className="text-left space-y-4 pt-6 border-t border-line">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-lg sm:text-xl font-extrabold tracking-tight text-ink">Question review</h2>
              <span className="text-xs font-bold text-ink-muted">
                Score: {percentage}% &bull; {correctCount} / {questions.length} correct
              </span>
            </div>
            <ol className="space-y-3">
              {questions.map((q, i) => {
                const given = selectedAnswers[i];
                const isRight = given !== undefined && given === q.correctAnswer;
                const badgeStyle =
                  given === undefined
                    ? 'bg-panel-2 text-ink-muted border border-line'
                    : isRight
                      ? 'bg-emerald-600 text-white'
                      : 'bg-accent-600 text-white';
                return (
                  <li key={q.id} className="p-4 rounded-2xl border border-line bg-panel-2 space-y-2">
                    <div className="flex items-start gap-3">
                      <span className={`w-7 h-7 shrink-0 rounded-xl flex items-center justify-center text-xs font-bold ${badgeStyle}`}>
                        {i + 1}
                      </span>
                      <h3 className="text-sm font-bold text-ink">{q.question}</h3>
                    </div>
                    <p className="text-xs font-medium text-ink-muted max-w-prose">
                      <span className="text-ink font-bold">Your answer:</span>{' '}
                      {given !== undefined ? q.options[given] : 'Not answered'}
                    </p>
                    <p className="text-xs font-medium text-ink-muted max-w-prose">
                      <span className="text-ink font-bold">Correct answer:</span> {q.options[q.correctAnswer]}
                    </p>
                    <span
                      className={`inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide ${
                        isRight ? 'text-emerald-600 dark:text-emerald-400' : 'text-accent-600'
                      }`}
                    >
                      {isRight ? (
                        <Check className="w-3.5 h-3.5" aria-hidden="true" />
                      ) : (
                        <X className="w-3.5 h-3.5" aria-hidden="true" />
                      )}
                      {given === undefined ? 'Unanswered' : isRight ? 'Correct' : 'Incorrect'}
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};
