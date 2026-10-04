import type { VercelRequest, VercelResponse } from '@vercel/node';
import { fetchArxivXml, sanitizeArxivParams } from '../lib/arxiv.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const { q, max } = sanitizeArxivParams(String(req.query.q || ''), req.query.max);
    if (!q.trim()) {
      return res.status(400).json({ error: 'Missing q parameter' });
    }
    const xml = await fetchArxivXml(q, max);
    res.setHeader('Content-Type', 'application/atom+xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    return res.status(200).send(xml);
  } catch (error) {
    console.error('arXiv proxy error:', error);
    return res.status(502).json({ error: 'arXiv request failed' });
  }
}
