import React, { useState } from 'react';
import { Sparkles, Loader2, FileText, CheckCircle2, AlertTriangle, RotateCcw } from 'lucide-react';

interface SandboxViewProps {
  darkMode: boolean;
}

const MAX_DOCUMENT_CHARS = 6000;
const REQUEST_TIMEOUT_MS = 20000;

function isAbortError(err: unknown): boolean {
  return typeof err === 'object' && err !== null && (err as { name?: string }).name === 'AbortError';
}

export const SandboxView: React.FC<SandboxViewProps> = () => {
  const [documentText, setDocumentText] = useState(
    'This study investigates the integration of artificial intelligence and machine learning models in academic digital libraries across Nigerian universities to enhance metadata tagging and search precision.'
  );
  const [result, setResult] = useState<{
    descriptors: string[];
    abstract: string;
    exhaustivity: string;
    specificity: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const sampleTexts = [
    {
      label: 'Digital Libraries in Nigeria',
      text: 'This study investigates the integration of artificial intelligence and machine learning models in academic digital libraries across Nigerian universities to enhance metadata tagging and search precision.'
    },
    {
      label: 'Thesaurus Construction (ANSI/NISO)',
      text: 'An empirical evaluation of hierarchical and associative semantic relationships in monolingual thesaurus design following the ANSI/NISO Z39.19 standard for agricultural sciences.'
    },
    {
      label: 'Vector Retrieval & Transformers',
      text: 'Comparing dense semantic embedding retrieval against classic BM25 keyword matching for biomedical abstract indexing, evaluating Cranfield recall and precision trade-offs.'
    }
  ];

  const runAnalysis = async () => {
    if (!documentText.trim() || loading) return;

    setLoading(true);
    setErrorMessage(null);
    setResult(null);

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    try {
      const res = await fetch('/api/ai-tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: `Analyze the following document text for indexing and abstracting according to LIS 814 standards. Return ONLY a JSON object with keys: "descriptors" (array of 5 controlled index terms), "abstract" (a concise 50-word informative abstract), "exhaustivity" (assessment of concept coverage), "specificity" (assessment of term granularity). Document: "${documentText}"`,
          context: 'Interactive Indexing and Abstracting Sandbox'
        }),
        signal: controller.signal
      });

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      const data = await res.json();

      if (data.text) {
        try {
          const cleanText = data.text.replace(/```json/g, '').replace(/```/g, '').trim();
          const parsed = JSON.parse(cleanText);
          setResult({
            descriptors: Array.isArray(parsed.descriptors) ? parsed.descriptors : [],
            abstract: typeof parsed.abstract === 'string' ? parsed.abstract : '',
            exhaustivity: typeof parsed.exhaustivity === 'string' ? parsed.exhaustivity : '',
            specificity: typeof parsed.specificity === 'string' ? parsed.specificity : ''
          });
        } catch {
          setErrorMessage(
            'The AI response could not be parsed into a structured report, so no results are shown. Please retry the analysis.'
          );
        }
      } else {
        setErrorMessage('Unable to process document at this time. Please try again.');
      }
    } catch (err) {
      if (isAbortError(err)) {
        setErrorMessage('Request timed out after 20 seconds. Please check your connection and try again.');
      } else {
        console.error(err);
        setErrorMessage('Network or server connection issue. Please check connection and try again.');
      }
    } finally {
      window.clearTimeout(timeoutId);
      setLoading(false);
    }
  };

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    void runAnalysis();
  };

  return (
    <div className="space-y-8 pb-16 max-w-4xl mx-auto animate-fade-in-up">
      {/* Header */}
      <div className="p-6 sm:p-8 rounded-3xl border border-line bg-panel shadow-sm">
        <div className="space-y-2">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent-50 text-accent-700 border border-accent-100 dark:bg-accent-950/50 dark:text-accent-300 dark:border-accent-900">
            AI-Powered Practical Sandbox
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
            Interactive Subject <span className="text-accent-600">Indexer</span> &amp; Abstractor
          </h1>
          <p className="text-sm font-medium text-ink-muted max-w-prose">
            Test real-world research abstracts or titles. Gemini AI will instantly extract controlled descriptors, evaluate exhaustivity, and draft an ANSI/NISO compliant informative abstract.
          </p>
        </div>
      </div>

      {/* Input Form */}
      <div className="p-6 sm:p-8 rounded-3xl border border-line bg-panel shadow-sm space-y-6">
        <form onSubmit={handleAnalyze} className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <label htmlFor="sandbox-document-text" className="block text-sm font-bold text-ink">
              Paste Document Title, Abstract, or Article Text:
            </label>
            <div className="flex items-center gap-1 text-xs text-ink-muted">
              <FileText className="w-3.5 h-3.5" aria-hidden="true" />
              <span>ANSI/NISO Z39.14 &amp; Z39.19 standard indexing</span>
            </div>
          </div>

          {/* Quick preset selector */}
          <div className="flex flex-wrap items-center gap-2 pt-1 pb-1">
            <span className="text-xs font-semibold text-ink-muted">Quick sample:</span>
            {sampleTexts.map((sample, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setDocumentText(sample.text)}
                aria-pressed={documentText === sample.text}
                className={`text-xs px-3 py-1.5 min-h-9 rounded-lg border font-semibold transition-all ${
                  documentText === sample.text
                    ? 'bg-accent-600 text-white border-accent-600'
                    : 'bg-panel-2 text-ink border-line hover:border-accent-300 hover:text-accent-700 dark:hover:text-accent-300'
                }`}
              >
                {sample.label}
              </button>
            ))}
          </div>

          <textarea
            id="sandbox-document-text"
            rows={5}
            maxLength={MAX_DOCUMENT_CHARS}
            value={documentText}
            onChange={(e) => setDocumentText(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-line bg-panel text-ink placeholder-ink-muted font-medium text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-accent-500"
            placeholder="Enter research text here..."
          />
          <div className="flex justify-end text-xs text-ink-muted">
            {documentText.length} / {MAX_DOCUMENT_CHARS} characters
          </div>

          {errorMessage && (
            <div className="rounded-2xl border border-accent-200 bg-accent-50 text-accent-800 p-4 dark:border-accent-900 dark:bg-accent-950/40 dark:text-accent-200 space-y-3 animate-fade-in">
              <div role="status" aria-live="polite" className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
                <div className="space-y-1">
                  <p className="text-sm font-bold">Analysis failed</p>
                  <p className="text-sm font-medium">{errorMessage}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => void runAnalysis()}
                disabled={loading}
                className="inline-flex items-center gap-2 rounded-full bg-accent-600 text-white font-bold px-5 py-2.5 min-h-11 hover:bg-accent-700 transition-all shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <RotateCcw className="w-4 h-4" aria-hidden="true" />
                Retry
              </button>
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !documentText.trim()}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-600 text-white font-bold px-5 py-2.5 min-h-11 hover:bg-accent-700 transition-all shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
            ) : (
              <Sparkles className="w-5 h-5" aria-hidden="true" />
            )}
            <span>{loading ? 'Analyzing Subject Content...' : 'Run Indexing & Abstracting Analysis'}</span>
          </button>

          <div role="status" aria-live="polite" className="min-h-5">
            {loading && (
              <span className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted">
                <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                Analyzing subject content, please wait...
              </span>
            )}
          </div>
        </form>

        {/* Results Box */}
        {result && (
          <section
            role="status"
            aria-live="polite"
            aria-label="AI indexing and abstracting report"
            className="mt-8 p-6 sm:p-8 rounded-2xl border border-accent-100 bg-accent-50/60 dark:border-accent-900 dark:bg-accent-950/30 space-y-6 animate-fade-in-up"
          >
            <h2 className="text-xl font-extrabold flex items-center gap-2 text-accent-700 dark:text-accent-300">
              <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
              <span>AI Indexing &amp; Abstracting Report</span>
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-accent-700 dark:text-accent-300 mb-2">
                  Assigned Controlled Descriptors:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {result.descriptors.map((term, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-bold px-3 py-1 rounded-lg bg-accent-50 text-accent-700 border border-accent-100 dark:bg-accent-950/50 dark:text-accent-300 dark:border-accent-900"
                    >
                      {term}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-accent-700 dark:text-accent-300 mb-1">
                  Generated Informative Abstract:
                </h3>
                <p className="p-4 rounded-xl border border-line bg-panel text-ink text-sm sm:text-base font-medium leading-relaxed whitespace-pre-wrap">
                  {result.abstract}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl border border-line bg-panel">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-ink-muted">Exhaustivity Analysis</h3>
                  <p className="text-sm font-semibold mt-1 text-ink">{result.exhaustivity}</p>
                </div>
                <div className="p-4 rounded-xl border border-line bg-panel">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-ink-muted">Specificity Analysis</h3>
                  <p className="text-sm font-semibold mt-1 text-ink">{result.specificity}</p>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
