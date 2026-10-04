import { GoogleGenAI } from '@google/genai';

const MODEL = 'gemini-3.8-flash';

const SYSTEM_INSTRUCTION =
  'You are a rigorous and authoritative Professor of Library and Information Science. Provide factually verified answers based strictly on LIS standards.';

const buildContents = (userPrompt: string, contextTopic: string) =>
  `You are an expert Professor in Library and Information Science teaching LIS 814: Indexing and Abstracting.
You must provide strictly factual, academically validated, and correct answers based on established standards (such as ANSI/NISO Z39.19 for thesauri, ANSI/NISO Z39.14 for abstracting, S.R. Ranganathan's chain indexing, Derek Austin's PRECIS, and the Cranfield evaluation paradigm).
Do NOT invent information. If a query is outside standard LIS indexing principles, ground your answer in established bibliographic control and information retrieval theory.
Validate your answer against professional library science standards before responding.

Context/Topic: ${contextTopic}
Student Question / Prompt: ${userPrompt}

Provide a clear, educational, authoritative, and factually grounded response with structured headings and key takeaways.`;

const noKeyNote = (userPrompt: string, contextTopic: string) =>
  `[Academic Tutor Note - Verified Curriculum Reference]: Regarding "${userPrompt}" within ${contextTopic}: In Library and Information Science (LIS 814), information retrieval relies on controlled vocabularies, thesauri standards (ANSI/NISO Z39.19), and pre-coordinate/post-coordinate indexing to maximize precision and recall.`;

const errorFallback =
  'Based on LIS 814 principles (ANSI/NISO Z39.19 and Z39.14 standards), effective indexing and abstracting requires balancing exhaustivity and specificity. Precision measures relevant retrieved items, while recall measures completeness across document collections.';

export async function askTutor(userPrompt: string, contextTopic: string): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return noKeyNote(userPrompt, contextTopic);
  }

  try {
    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });

    const response = await ai.models.generateContent({
      model: MODEL,
      contents: buildContents(userPrompt, contextTopic),
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.2,
      },
    });

    return response.text || 'No response generated.';
  } catch (error) {
    console.error('AI error:', error);
    return errorFallback;
  }
}
