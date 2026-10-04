import type { VercelRequest, VercelResponse } from '@vercel/node';
import { askTutor } from '../lib/gemini.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const userPrompt = req.body?.prompt || req.body?.message || '';
  const contextTopic = req.body?.context || 'General Indexing and Abstracting';
  const text = await askTutor(String(userPrompt), String(contextTopic));
  return res.status(200).json({ text });
}
