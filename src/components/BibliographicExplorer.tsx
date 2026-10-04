import React, { useState } from 'react';
import { Search, Globe, BookOpen, ExternalLink, Loader2, Database, ShieldCheck, Sparkles, AlertTriangle, RotateCcw } from 'lucide-react';

interface BibliographicExplorerProps {
  darkMode: boolean;
}

const REQUEST_TIMEOUT_MS = 20000;

function isAbortError(err: unknown): boolean {
  return typeof err === 'object' && err !== null && (err as { name?: string }).name === 'AbortError';
}

export const BibliographicExplorer: React.FC<BibliographicExplorerProps> = () => {
  const [query, setQuery] = useState('Digital Libraries');
  const [searchSource, setSearchSource] = useState<'loc' | 'crossref' | 'arxiv'>('loc');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const runSearch = async () => {
    if (!query.trim() || loading) return;

    setLoading(true);
    setSearched(true);
    setResults([]);
    setErrorMessage(null);

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    try {
      if (searchSource === 'loc') {
        // Library of Congress Suggest / Authorities API
        const res = await fetch(`https://id.loc.gov/search/?q=${encodeURIComponent(query)}&format=json&count=10`, {
          signal: controller.signal
        });
        if (!res.ok) {
          throw new Error(`Library of Congress request failed with status ${res.status}`);
        }
        const data = await res.json();
        if (data && data.results) {
          setResults(data.results.map((item: any) => ({
            title: item.title || item.label,
            uri: item.uri,
            type: item.type?.[0] || 'Subject Heading',
            note: item.remark || 'Library of Congress Authorized Subject Heading'
          })));
        }
      } else if (searchSource === 'crossref') {
        // Crossref Works API
        const res = await fetch(`https://api.crossref.org/works?query=${encodeURIComponent(query)}&rows=5`, {
          signal: controller.signal
        });
        if (!res.ok) {
          throw new Error(`Crossref request failed with status ${res.status}`);
        }
        const data = await res.json();
        if (data && data.message && data.message.items) {
          setResults(data.message.items.map((item: any) => ({
            title: item.title?.[0] || 'Untitled',
            author: item.author?.[mapAuthorName(item.author)]?.family || 'Various Authors',
            doi: item.DOI,
            publisher: item.publisher,
            year: item.published?.['date-parts']?.[0]?.[0] || 'N/A',
            type: item.type
          })));
        }
      } else if (searchSource === 'arxiv') {
        // arXiv API
        const res = await fetch(`/api/arxiv?q=${encodeURIComponent(query)}&max=5`, {
          signal: controller.signal
        });
        if (!res.ok) {
          throw new Error(`arXiv request failed with status ${res.status}`);
        }
        const text = await res.text();
        // Parse basic XML items using DOMParser
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, 'text/xml');
        const entries = Array.from(xmlDoc.querySelectorAll('entry'));
        setResults(entries.map((entry: any) => ({
          title: entry.querySelector('title')?.textContent?.trim() || '',
          summary: entry.querySelector('summary')?.textContent?.trim() || '',
          published: entry.querySelector('published')?.textContent?.substring(0, 10) || '',
          link: entry.querySelector('id')?.textContent?.trim() || ''
        })));
      }
    } catch (err) {
      console.error(err);
      setResults([]);
      if (isAbortError(err)) {
        setErrorMessage('Request timed out after 20 seconds. The API may be slow or unreachable. Please try again.');
      } else {
        setErrorMessage('Could not reach the selected API. It may be blocked by CORS, offline, or rate-limited. Please try again.');
      }
    } finally {
      window.clearTimeout(timeoutId);
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    void runSearch();
  };

  function mapAuthorName(authors: any[]) {
    if (!authors || authors.length === 0) return 0;
    return 0;
  }

  const sourceTabs = [
    { key: 'loc' as const, label: 'Library of Congress (id.loc.gov)', icon: Database },
    { key: 'crossref' as const, label: 'Crossref Scholarly Metadata API', icon: Globe },
    { key: 'arxiv' as const, label: 'arXiv Open Repository API', icon: BookOpen }
  ];

  return (
    <div className="space-y-8 pb-16 max-w-5xl mx-auto animate-fade-in-up">
      {/* Header */}
      <div className="p-6 sm:p-8 rounded-3xl border border-line bg-panel shadow-sm">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent-50 text-accent-700 border border-accent-100 dark:bg-accent-950/50 dark:text-accent-300 dark:border-accent-900">
            Open Source Bibliographic Integration
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
            Open APIs &amp; <span className="text-accent-600">Taxonomy</span> Explorer
          </h1>
          <p className="text-sm sm:text-base font-medium text-ink-muted">
            Explore real-world open APIs supporting LIS 814. Query the Library of Congress Subject Headings (LCSH), Crossref scholarly metadata, and arXiv open archives live in your browser.
          </p>
        </div>

        {/* Source Selector on a dark band */}
        <div role="group" aria-label="Bibliographic data source" className="flex flex-wrap gap-3 p-3 rounded-2xl bg-band mt-6">
          {sourceTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = searchSource === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setSearchSource(tab.key)}
                aria-pressed={isActive}
                className={`px-5 py-2.5 min-h-11 rounded-xl text-xs font-bold transition-all inline-flex items-center gap-2 ${
                  isActive
                    ? 'bg-accent-600 text-white shadow-sm'
                    : 'bg-band-2 text-white/70 border border-white/10 hover:bg-navy-700 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" aria-hidden="true" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Search Input */}
      <div className="p-6 sm:p-8 rounded-3xl border border-line bg-panel shadow-sm space-y-6">
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-muted" aria-hidden="true" />
            <label htmlFor="explorer-search-input" className="sr-only">
              Search query for the selected bibliographic API
            </label>
            <input
              id="explorer-search-input"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={
                searchSource === 'loc' ? 'Search LCSH thesaurus terms (e.g. Information storage)...' :
                searchSource === 'crossref' ? 'Search scholarly articles and DOIs...' :
                'Search arXiv preprints and abstracts...'
              }
              className="w-full pl-12 pr-4 py-3 text-sm sm:text-base rounded-xl border border-line bg-panel text-ink placeholder-ink-muted font-medium focus:outline-none focus:ring-2 focus:ring-accent-500"
            />
          </div>
          <button
            type="submit"
            disabled={loading || !query.trim()}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-600 text-white font-bold px-5 py-2.5 min-h-11 hover:bg-accent-700 transition-all shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
            ) : (
              <Sparkles className="w-5 h-5" aria-hidden="true" />
            )}
            <span>{loading ? 'Querying API...' : 'Search Open API'}</span>
          </button>
        </form>

        {/* Results Section */}
        <div className="space-y-4 pt-4">
          {/* Pre-search hint */}
          {!searched && !loading && (
            <div className="rounded-2xl border border-line bg-panel-2 p-6 text-center space-y-1">
              <p className="text-sm font-bold text-ink">Search a live open API</p>
              <p className="text-sm font-medium text-ink-muted">
                Pick a data source above, enter a query, and matching records will appear here.
              </p>
            </div>
          )}

          {/* Loading */}
          <div role="status" aria-live="polite">
            {searched && loading && (
              <p className="flex items-center gap-2 text-sm font-medium text-ink-muted">
                <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                Querying the open API, please wait...
              </p>
            )}
          </div>

          {/* Error */}
          {searched && !loading && errorMessage && (
            <div className="rounded-2xl border border-accent-200 bg-accent-50 text-accent-800 p-4 dark:border-accent-900 dark:bg-accent-950/40 dark:text-accent-200 space-y-3 animate-fade-in">
              <div role="status" aria-live="polite" className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
                <div className="space-y-1">
                  <p className="text-sm font-bold">Search failed</p>
                  <p className="text-sm font-medium">{errorMessage}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => void runSearch()}
                disabled={loading}
                className="inline-flex items-center gap-2 rounded-full bg-accent-600 text-white font-bold px-5 py-2.5 min-h-11 hover:bg-accent-700 transition-all shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <RotateCcw className="w-4 h-4" aria-hidden="true" />
                Retry
              </button>
            </div>
          )}

          {/* Results */}
          {searched && !loading && !errorMessage && (
            <div role="status" aria-live="polite" className="space-y-4">
              <h2 className="text-lg font-extrabold flex items-center gap-2 text-ink">
                <ShieldCheck className="w-5 h-5 text-accent-600" aria-hidden="true" />
                <span>{results.length > 0 ? `Results (${results.length})` : 'Search Results'}</span>
              </h2>

              {results.length === 0 ? (
                <p className="text-sm font-medium text-ink-muted text-center py-8">
                  No records found for "{query}". Try another search term.
                </p>
              ) : (
                <div className="space-y-4">
                  {results.map((item, idx) => (
                    <article key={idx} className="p-6 rounded-2xl border border-line bg-panel-2 space-y-3">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent-50 text-accent-700 border border-accent-100 dark:bg-accent-950/50 dark:text-accent-300 dark:border-accent-900">
                          {item.type || searchSource.toUpperCase()}
                        </span>
                        {item.year && <span className="text-xs font-semibold text-ink-muted">Year: {item.year}</span>}
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-ink">{item.title}</h3>

                      {item.author && (
                        <p className="text-xs font-bold text-accent-600">
                          Author: {item.author} &bull; Publisher: {item.publisher || 'N/A'}
                        </p>
                      )}
                      {item.note && <p className="text-xs font-medium text-ink-muted">{item.note}</p>}
                      {item.summary && (
                        <p className="text-sm font-medium leading-relaxed text-ink-muted line-clamp-3 whitespace-pre-wrap">
                          {item.summary}
                        </p>
                      )}

                      {item.uri && (
                        <div className="pt-2 flex items-center gap-2">
                          <a
                            href={item.uri}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-bold text-accent-600 inline-flex items-center gap-1 hover:underline"
                          >
                            <span>View Authorized Authority Record</span>
                            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                          </a>
                        </div>
                      )}
                      {item.doi && (
                        <div className="pt-2 flex items-center gap-2">
                          <a
                            href={`https://doi.org/${item.doi}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-bold text-accent-600 inline-flex items-center gap-1 hover:underline"
                          >
                            <span>DOI: {item.doi}</span>
                            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                          </a>
                        </div>
                      )}
                      {item.link && !item.uri && !item.doi && (
                        <div className="pt-2 flex items-center gap-2">
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-bold text-accent-600 inline-flex items-center gap-1 hover:underline"
                          >
                            <span>View arXiv Record</span>
                            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                          </a>
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
