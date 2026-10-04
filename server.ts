import express from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { askTutor } from './lib/gemini';
import { fetchArxivXml, sanitizeArxivParams } from './lib/arxiv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  app.use(express.json());

  // API endpoint for AI study tutor / Q&A with strict academic grounding
  app.post('/api/ai-tutor', async (req, res) => {
    const userPrompt = req.body?.prompt || req.body?.message || '';
    const contextTopic = req.body?.context || 'General Indexing and Abstracting';
    const text = await askTutor(String(userPrompt), String(contextTopic));
    return res.json({ text });
  });

  // Server-side proxy for the arXiv API (export.arxiv.org sends no CORS headers,
  // so browser-side calls to it are blocked).
  app.get('/api/arxiv', async (req, res) => {
    try {
      const { q, max } = sanitizeArxivParams(String(req.query.q || ''), req.query.max);
      if (!q.trim()) {
        return res.status(400).json({ error: 'Missing q parameter' });
      }
      const xml = await fetchArxivXml(q, max);
      res.setHeader('Content-Type', 'application/atom+xml; charset=utf-8');
      res.setHeader('Cache-Control', 'public, max-age=3600');
      return res.send(xml);
    } catch (error) {
      console.error('arXiv proxy error:', error);
      return res.status(502).json({ error: 'arXiv request failed' });
    }
  });

  // Prevent aggressive browser caching of HTML so updates appear instantly
  app.use((req, res, next) => {
    if (req.path === '/' || req.path.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
    }
    next();
  });

  const isProduction =
    process.env.NODE_ENV === 'production' ||
    process.argv.includes('--production') ||
    path.basename(__filename) === 'server.js';
  const distPath = path.resolve(__dirname, 'dist');

  if (isProduction && fs.existsSync(distPath)) {
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  const port = Number(process.env.PORT) || 3000;
  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

startServer();
