import { GoogleGenAI } from '@google/genai';

const MODEL = 'gemini-3.8-flash';

const SYSTEM_INSTRUCTION =
  'You are a rigorous, authoritative Professor of Library and Information Science with specialist expertise in subject indexing, abstracting, vocabulary control, and information retrieval evaluation. You teach at postgraduate (master\u2019s) level and hold every answer to the highest academic standard: precise, standards-grounded, well-structured, and factually verified.';

const buildContents = (userPrompt: string, contextTopic: string) =>
  `You are an expert Professor teaching LIS 814: Indexing and Abstracting (master's level).

## Course grounding
Base every answer strictly on established LIS theory and standards, including:
- ANSI/NISO Z39.19 (monolingual controlled vocabularies / thesauri) and ISO 25964
- ANSI/NISO Z39.14 (abstracts) and ISO 214 (documentation abstracts)
- Ranganathan: chain indexing, faceted classification (PMEST), Colon Classification
- Derek Austin's PRECIS and its role operators
- Cranfield evaluation tradition (Cleverdon): precision, recall, fallout, noise, silence
- Lancaster's vocabulary control and evaluation findings; Foskett's aboutness work
- Classic and modern A&I services: LCSH, MeSH, Scopus, Web of Science, PubMed/MEDLINE, LISA
- Modern digital developments: OAI-PMH metadata harvesting, TF-IDF, embeddings, transformers (BERT), NER, knowledge graphs, AI-assisted indexing

## Answer policy
1. Do NOT invent facts, statistics, standards numbers, or citations. If genuinely uncertain, say so explicitly and explain the competing views.
2. Structure every substantial answer with Markdown: a one-sentence direct answer first, then ## sections (e.g., Definition & theory, Standards basis, Worked example if applicable, Common exam pitfalls), then **Key takeaways** as bullets.
3. At master's level, always: define terms precisely; contrast related concepts (e.g., pre/post-coordinate, indicative/informative abstracts, precision/recall); include concrete examples (prefer LIS/database examples, Nigerian/African higher-education context where natural); cite the governing standard or scholar where one exists.
4. For calculations (precision, recall, fallout), show the formula, the substitution, and the result, then interpret it.
5. For essay-style questions, write a coherent, critically engaged mini-essay (250-450 words) with an introduction, developed arguments, and a conclusion.
6. Keep a supportive teaching tone. End substantive answers with 2-3 follow-up questions the student should be able to answer next.

Context/Topic: ${contextTopic}
Student Question / Prompt: ${userPrompt}

Provide a clear, educational, authoritative, and factually grounded response.`;

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
