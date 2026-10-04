export const ARXIV_MAX_RESULTS_CAP = 20;

export function sanitizeArxivParams(query: string, max?: unknown) {
  const raw = Array.isArray(max) ? max[0] : max;
  const q = String(query || '').slice(0, 200);
  const results = Math.min(Math.max(Number(raw) || 5, 1), ARXIV_MAX_RESULTS_CAP);
  return { q, max: results };
}

export async function fetchArxivXml(q: string, max: number): Promise<string> {
  const upstream = await fetch(
    `https://export.arxiv.org/api/query?search_query=all:${encodeURIComponent(q)}&max_results=${max}`,
    { headers: { 'User-Agent': 'aistudio-build' } }
  );
  if (!upstream.ok) throw new Error(`arXiv responded with status ${upstream.status}`);
  return upstream.text();
}
