import type { VercelRequest, VercelResponse } from '@vercel/node';
import { askTutor } from '../lib/gemini.js';

const MAX_PROMPT_CHARS = 4000;
const MAX_CONTEXT_CHARS = 500;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 10;
const RATE_LIMIT_MAX_TRACKED_IPS = 10_000;

// Best-effort per-IP rate limit (in-memory, per warm serverless instance).
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (requestLog.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (recent.length >= RATE_LIMIT_MAX) {
    requestLog.set(ip, recent);
    return true;
  }
  recent.push(now);
  requestLog.set(ip, recent);
  if (requestLog.size > RATE_LIMIT_MAX_TRACKED_IPS) requestLog.clear();
  return false;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const contentType = String(req.headers['content-type'] || '');
  if (!contentType.includes('application/json')) {
    return res.status(415).json({ error: 'Expected application/json body' });
  }

  const forwarded = req.headers['x-forwarded-for'];
  const ip = (Array.isArray(forwarded) ? forwarded[0] : forwarded)?.split(',')[0]?.trim()
    || req.socket?.remoteAddress
    || 'unknown';
  if (isRateLimited(String(ip))) {
    return res.status(429).json({ error: 'Too many requests — please wait a minute and try again.' });
  }

  const userPrompt = String(req.body?.prompt ?? req.body?.message ?? '').trim().slice(0, MAX_PROMPT_CHARS);
  const contextTopic = String(req.body?.context ?? 'General Indexing and Abstracting').slice(0, MAX_CONTEXT_CHARS);
  if (!userPrompt) {
    return res.status(400).json({ error: 'Missing prompt' });
  }

  const text = await askTutor(userPrompt, contextTopic);
  return res.status(200).json({ text });
}
