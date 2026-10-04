import React, { useEffect, useState } from 'react';
import { Sparkles, CheckCircle2, Loader2, Award, BookOpen, RotateCcw } from 'lucide-react';

interface TheoryQuestionItem {
  id: string;
  moduleId: string;
  moduleName: string;
  question: string;
  guidelines: string;
  modelAnswer: string;
}

interface TheoryViewProps {
  darkMode: boolean;
}

interface TheoryProgress {
  answered?: number;
  total?: number;
  answers?: { [key: string]: string };
  updatedAt?: string;
}

const THEORY_STORAGE_KEY = 'indexmaster_theory';

// 35 master's degree level theory questions (5 questions per module across all 7 modules)
export const THEORY_QUESTIONS: TheoryQuestionItem[] = [
  // Module 1 (Q1 - Q5)
  {
    id: 't-1-1',
    moduleId: 'mod-1',
    moduleName: 'Module 1: Foundations',
    question: 'Critically analyze the fundamental distinction between what an information resource mentions versus what the document is actually about in subject indexing.',
    guidelines: 'Discuss aboutness vs mentions, core conceptual analysis, and how indexers avoid noise by focusing on principal subjects.',
    modelAnswer: 'Mentioning refers to incidental or peripheral occurrences of a term within a text, whereas aboutness represents the primary intellectual focus of the document. Competent subject indexers must rigorously distinguish between the two to ensure high precision in information retrieval, preventing marginal mentions from polluting search results with irrelevant documents.'
  },
  {
    id: 't-1-2',
    moduleId: 'mod-1',
    moduleName: 'Module 1: Foundations',
    question: 'Evaluate the theoretical strengths and limitations of Controlled Vocabularies versus Natural Language indexing in modern digital repositories.',
    guidelines: 'Compare synonym control, consistency, maintenance overhead, and full-text search engines.',
    modelAnswer: 'Controlled vocabularies (e.g., LCSH, MeSH) enforce authorized descriptors, eliminating synonym scatter and ensuring high retrieval precision at the cost of high maintenance overhead. Natural language indexing utilizes author and user vocabulary directly, offering effortless implementation and search flexibility, but suffers from term variation, homonymy, and reduced precision.'
  },
  {
    id: 't-1-3',
    moduleId: 'mod-1',
    moduleName: 'Module 1: Foundations',
    question: 'Examine the historical evolution of bibliographic control and its modern relevance in web-scale digital libraries.',
    guidelines: 'Discuss universal bibliographic control (UBC), metadata standards, and interoperability.',
    modelAnswer: 'Bibliographic control evolved from manual card catalogs to universal bibliographic standards and digital metadata harvesting (OAI-PMH). In web-scale environments, bibliographic control ensures that heterogeneous digital resources across global repositories remain discoverable, citable, and interoperable.'
  },
  {
    id: 't-1-4',
    moduleId: 'mod-1',
    moduleName: 'Module 1: Foundations',
    question: 'Discuss the role of user information needs in shaping indexing policies and vocabulary depth.',
    guidelines: 'Analyze user behavior, query formulation, exhaustivity requirements, and collection specificity.',
    modelAnswer: 'Indexing policies must reflect user community requirements. Specialized research collections demand high exhaustivity and specificity, whereas general public libraries require broader, user-friendly vocabulary terms that match everyday search phrasing.'
  },
  {
    id: 't-1-5',
    moduleId: 'mod-1',
    moduleName: 'Module 1: Foundations',
    question: 'Analyze how Selective Dissemination of Information (SDI) relies on accurate subject indexing and user profiling.',
    guidelines: 'Explain profile matching, push technology, and automated notification algorithms.',
    modelAnswer: 'SDI relies on precise subject profiles maintained for users. As new documents are indexed, automated algorithms match incoming descriptors against user interest profiles, pushing relevant research notifications directly to scholars.'
  },

  // Module 2 (Q6 - Q10)
  {
    id: 't-2-1',
    moduleId: 'mod-2',
    moduleName: 'Module 2: Vocabulary Control',
    question: 'Describe the 11 major steps in constructing a professional thesaurus as specified in ANSI/NISO Z39.19 standards.',
    guidelines: 'List and explain steps from subject field definition to regular maintenance and revision.',
    modelAnswer: '1. Define subject field. 2. Collect candidate terms. 3. Identify synonyms. 4. Identify homonyms. 5. Select preferred terms. 6. Establish hierarchical (BT/NT) relationships. 7. Establish associative (RT) relationships. 8. Establish equivalence (USE/UF). 9. Arrange systematically. 10. Test thesaurus. 11. Revise regularly.'
  },
  {
    id: 't-2-2',
    moduleId: 'mod-2',
    moduleName: 'Module 2: Vocabulary Control',
    question: 'Explain the precise semantic functions of Equivalence (USE/UF), Hierarchical (BT/NT), and Associative (RT) relationships in thesauri.',
    guidelines: 'Define each operator and provide concrete examples from academic librarianship.',
    modelAnswer: 'USE/UF resolves synonymy by pointing non-preferred entry terms to preferred descriptors (e.g., Cars UF Automobiles). BT/NT establishes hypernym/hyponym hierarchies (e.g., Libraries BT Academic Libraries NT). RT links conceptually related terms that are neither synonyms nor hierarchical (e.g., Librarians RT Library Education).'
  },
  {
    id: 't-2-3',
    moduleId: 'mod-2',
    moduleName: 'Module 2: Vocabulary Control',
    question: 'Examine the challenges of homographs and polysemy in vocabulary control and how scope notes resolve ambiguity.',
    guidelines: 'Define homographs, provide examples, and explain scope note application.',
    modelAnswer: 'Homographs share identical spelling but distinct meanings (e.g., "Bank" financial vs. river). Polysemy involves multiple related meanings. Scope notes provide clear definitions and usage boundaries, instructing indexers and searchers on how a term should be applied.'
  },
  {
    id: 't-2-4',
    moduleId: 'mod-2',
    moduleName: 'Module 2: Vocabulary Control',
    question: 'Analyze the principles of facet analysis and its application in modern thesaurus architecture.',
    guidelines: 'Discuss Ranganathan fundamental categories and faceted classification structures.',
    modelAnswer: 'Facet analysis breaks down complex subjects into fundamental, homogeneous categories (Personality, Matter, Energy, Space, Time). In thesaurus design, faceted structures ensure logical consistency and flexible compound term synthesis.'
  },
  {
    id: 't-2-5',
    moduleId: 'mod-2',
    moduleName: 'Module 2: Vocabulary Control',
    question: 'Discuss the concept of polyhierarchy and why modern digital thesauri support multiple broader terms.',
    guidelines: 'Explain multi-dimensional classification and cross-disciplinary subjects.',
    modelAnswer: 'Polyhierarchy allows a narrow term to belong to multiple broader categories simultaneously (e.g., "Medical Libraries" can have both "Medical Sciences" and "Libraries" as broader terms). This reflects interdisciplinary research realities.'
  },

  // Module 3 (Q11 - Q15)
  {
    id: 't-3-1',
    moduleId: 'mod-3',
    moduleName: 'Module 3: Systems & Syntax',
    question: 'Compare and contrast Pre-coordinate and Post-coordinate indexing systems with respect to database scalability and user search flexibility.',
    guidelines: 'Discuss pre-entry synthesis vs post-entry boolean combination.',
    modelAnswer: 'Pre-coordinate systems synthesize compound strings at indexing time, offering high specificity for browsing but rigidity in searching. Post-coordinate systems assign atomic terms separately, giving users maximum boolean query flexibility and scalability in computerized databases.'
  },
  {
    id: 't-3-2',
    moduleId: 'mod-3',
    moduleName: 'Module 3: Systems & Syntax',
    question: 'Analyze S.R. Ranganathan Chain Indexing methodology and how alphabetical subject entries are derived from classification schedules.',
    guidelines: 'Explain hierarchical linkage from class number to specific alphabetical terms.',
    modelAnswer: 'Chain indexing derives subject headings by taking a classification class number and breaking it down step-by-step from right to left (most specific to broadest), creating a chain of index entries that link classification schedules to alphabetical catalogs.'
  },
  {
    id: 't-3-3',
    moduleId: 'mod-3',
    moduleName: 'Module 3: Systems & Syntax',
    question: 'Examine Derek Austin PRECIS (Preserved Context Index System) and the role of role operators in maintaining semantic context.',
    guidelines: 'Discuss context preservation, role operators, and BNB applications.',
    modelAnswer: 'PRECIS preserves semantic context in linear strings by employing role operators (e.g., environment, agent, action) that dictate term manipulation and ensure the reader always understands the relational context regardless of which term leads.'
  },
  {
    id: 't-3-4',
    moduleId: 'mod-3',
    moduleName: 'Module 3: Systems & Syntax',
    question: 'Evaluate automated derived indexing techniques such as KWIC (Keyword in Context) and KWOC.',
    guidelines: 'Explain automated rotation, title word extraction, and limitations.',
    modelAnswer: 'KWIC and KWOC extract title words automatically. KWIC displays keywords surrounded by immediate text context, while KWOC lists keywords vertically with full titles. Limitation: they rely solely on title words and miss synonyms.'
  },
  {
    id: 't-3-5',
    moduleId: 'mod-3',
    moduleName: 'Module 3: Systems & Syntax',
    question: 'Discuss cyclic indexing and SLIC (Selective Listing in Combination) as pre-coordinate rotation techniques.',
    guidelines: 'Explain term rotation and systematic combination.',
    modelAnswer: 'Cyclic indexing rotates compound subject components so each significant term occupies the leading position in turn. SLIC generates controlled combinations of terms to provide systematic access without combinatorial explosion.'
  },

  // Module 4 (Q16 - Q20)
  {
    id: 't-4-1',
    moduleId: 'mod-4',
    moduleName: 'Module 4: Strategies & Evaluation',
    question: 'Critically examine the trade-offs between Exhaustivity and Specificity in indexing strategy.',
    guidelines: 'Discuss concept depth, term granularity, noise, and recall vs precision impact.',
    modelAnswer: 'High exhaustivity assigns many terms, increasing recall but introducing noise (lowering precision). High specificity assigns precise terms, increasing precision but risking silence if searchers use broader terms. Indexers must balance both based on collection goals.'
  },
  {
    id: 't-4-2',
    moduleId: 'mod-4',
    moduleName: 'Module 4: Strategies & Evaluation',
    question: 'Define Precision and Recall mathematically and explain why they exhibit an inverse relationship in information retrieval evaluation.',
    guidelines: 'Provide formulas, calculations, and explanations of trade-offs.',
    modelAnswer: 'Precision = Relevant Retrieved / Total Retrieved. Recall = Relevant Retrieved / Total Relevant in Collection. Broadening a query retrieves more relevant items (increasing recall) but also pulls in irrelevant documents (lowering precision).'
  },
  {
    id: 't-4-3',
    moduleId: 'mod-4',
    moduleName: 'Module 4: Strategies & Evaluation',
    question: 'Analyze the historical significance of the Cranfield Projects (Cyril Cleverdon) in information retrieval evaluation.',
    guidelines: 'Discuss empirical testing methodology, index language comparison, and controlled vocabularies.',
    modelAnswer: 'The Cranfield tests pioneered rigorous empirical evaluation of IR systems. Cleverdon evaluated different indexing languages (classification, subject headings, uniterm) and demonstrated the inverse relationship between recall and precision.'
  },
  {
    id: 't-4-4',
    moduleId: 'mod-4',
    moduleName: 'Module 4: Strategies & Evaluation',
    question: 'Examine the concept of Inter-Indexer Consistency and factors that influence variation among human indexers.',
    guidelines: 'Discuss cognitive differences, thesaurus clarity, document complexity, and consistency formulas.',
    modelAnswer: 'Inter-indexer consistency measures agreement between independent indexers. Variation is caused by document ambiguity, subjective aboutness interpretation, and thesaurus complexity. Clear scope notes and training improve consistency.'
  },
  {
    id: 't-4-5',
    moduleId: 'mod-4',
    moduleName: 'Module 4: Strategies & Evaluation',
    question: 'Evaluate the importance of Indexing Lag, Coverage, and Currency in assessing commercial abstracting and indexing services.',
    guidelines: 'Define lag, coverage breadth, and publication currency.',
    modelAnswer: 'Indexing lag measures publishing-to-indexing turnaround time. Coverage evaluates journal discipline representation. Currency ensures timely research discovery. High standards in all three are vital for scholarly research databases.'
  },

  // Module 5 (Q21 - Q25)
  {
    id: 't-5-1',
    moduleId: 'mod-5',
    moduleName: 'Module 5: Abstracting',
    question: 'Compare and contrast Indicative, Informative, and Critical abstracts, outlining appropriate use cases for each.',
    guidelines: 'Define purpose, scope, data inclusion, and evaluation features.',
    modelAnswer: 'Indicative abstracts state document scope without detailed findings (ideal for long reviews or books). Informative abstracts summarize methodology, findings, and conclusions (ideal for empirical research papers). Critical abstracts include expert evaluation and critique of methodology (ideal for book reviews).'
  },
  {
    id: 't-5-2',
    moduleId: 'mod-5',
    moduleName: 'Module 5: Abstracting',
    question: 'Examine the ANSI/NISO Z39.14 standards for abstract preparation, focusing on objectivity and self-containment.',
    guidelines: 'Discuss third-person perspective, word counts, and independence from full text.',
    modelAnswer: 'ANSI/NISO Z39.14 mandates that abstracts remain objective, faithful to source documents, and fully self-contained (understandable without reading the full text). They should avoid outside commentary and typically range from 100 to 250 words.'
  },
  {
    id: 't-5-3',
    moduleId: 'mod-5',
    moduleName: 'Module 5: Abstracting',
    question: 'Analyze the 8 systematic steps in preparing a professional abstract.',
    guidelines: 'Detail the process from document reading to final review.',
    modelAnswer: '1. Read document. 2. Identify main subject. 3. Identify purpose. 4. Identify methodology. 5. Identify major findings. 6. Identify conclusions. 7. Draft concisely. 8. Review for accuracy and self-containment.'
  },
  {
    id: 't-5-4',
    moduleId: 'mod-5',
    moduleName: 'Module 5: Abstracting',
    question: 'Discuss the role of abstracts in Current Awareness Services (CAS) and Selective Dissemination of Information (SDI).',
    guidelines: 'Explain rapid literature scanning and research notification.',
    modelAnswer: 'CAS and SDI services rely on concise, informative abstracts to alert researchers rapidly to newly published literature in their specialized disciplines without requiring them to read full-text articles.'
  },
  {
    id: 't-5-5',
    moduleId: 'mod-5',
    moduleName: 'Module 5: Abstracting',
    question: 'Evaluate automated abstracting techniques (extractive vs abstractive) in the era of large language models.',
    guidelines: 'Compare sentence extraction algorithms with neural generative LLM summarization.',
    modelAnswer: 'Extractive methods pull key sentences directly from source texts. Modern LLMs perform abstractive summarization, synthesizing coherent, fluent prose summaries capturing deep conceptual meaning and context.'
  },

  // Module 6 (Q26 - Q30)
  {
    id: 't-6-1',
    moduleId: 'mod-6',
    moduleName: 'Module 6: Digital & AI Indexing',
    question: 'Examine how major citation databases (Scopus and Web of Science) revolutionize scholarly literature discovery through citation indexing.',
    guidelines: 'Discuss citation links, impact metrics, and multidisciplinary coverage.',
    modelAnswer: 'Scopus and Web of Science link citing papers to cited works. Citation indexing allows researchers to trace intellectual lineages forward and backward in time, forming the foundation of scholarly impact measurement.'
  },
  {
    id: 't-6-2',
    moduleId: 'mod-6',
    moduleName: 'Module 6: Digital & AI Indexing',
    question: 'Analyze the role of Artificial Intelligence and Natural Language Processing (Named-Entity Recognition and Transformers) in automated indexing.',
    guidelines: 'Discuss NLP, entity extraction, semantic embeddings, and automated tagging.',
    modelAnswer: 'AI and NLP algorithms perform Named-Entity Recognition (NER), automatic subject classification, and semantic embedding generation. This automates large-scale document indexing with high speed and semantic precision.'
  },
  {
    id: 't-6-3',
    moduleId: 'mod-6',
    moduleName: 'Module 6: Digital & AI Indexing',
    question: 'Discuss the impact of metadata harvesting protocols (OAI-PMH) on digital library interoperability and federation.',
    guidelines: 'Explain repository harvesting, Dublin Core metadata, and union catalogs.',
    modelAnswer: 'OAI-PMH enables decentralized digital repositories to expose and harvest standardized metadata (e.g., Dublin Core), powering unified cross-repository discovery portals and global union catalogs.'
  },
  {
    id: 't-6-4',
    moduleId: 'mod-6',
    moduleName: 'Module 6: Digital & AI Indexing',
    question: 'Evaluate the statistical mechanics of TF-IDF (Term Frequency-Inverse Document Frequency) in vector space retrieval models.',
    guidelines: 'Explain term frequency weighting and inverse document frequency penalization.',
    modelAnswer: 'TF-IDF calculates term importance by balancing local term frequency (how often a term appears in a document) with inverse document frequency (penalizing words that appear across all documents in a corpus), highlighting distinctive concepts.'
  },
  {
    id: 't-6-5',
    moduleId: 'mod-6',
    moduleName: 'Module 6: Digital & AI Indexing',
    question: 'Critically assess the enduring necessity of human information professionals in an age of automated AI indexing.',
    guidelines: 'Discuss ethics, bias mitigation, vocabulary governance, and qualitative oversight.',
    modelAnswer: 'While AI automates massive scale processing, human professionals remain indispensable for vocabulary governance, ethical oversight, bias mitigation, handling novel interdisciplinary concepts, and qualitative quality control.'
  },

  // Module 7 (Q31 - Q35)
  {
    id: 't-7-1',
    moduleId: 'mod-7',
    moduleName: 'Module 7: Practical Synthesis',
    question: 'Perform a comprehensive subject analysis for the research article titled: "Adoption of Artificial Intelligence in Nigerian University Libraries". Propose controlled descriptors and draft an informative abstract.',
    guidelines: 'Identify core concepts, select LCSH descriptors, and write a 150-word informative abstract.',
    modelAnswer: 'Concepts: Artificial intelligence, University libraries, Information services, Nigeria. Informative Abstract: This study investigates the adoption of artificial intelligence (AI) technologies in Nigerian university libraries. Utilizing a survey methodology, data were gathered from 150 academic librarians regarding AI awareness, perceived benefits, and technological barriers. Findings reveal that while chatbots and automated cataloging systems are growing, infrastructure deficits and skills gaps hinder full deployment. Recommendations include enhanced professional training and institutional funding.'
  },
  {
    id: 't-7-2',
    moduleId: 'mod-7',
    moduleName: 'Module 7: Practical Synthesis',
    question: 'Given an information retrieval test collection where a search query retrieves 80 documents, of which 50 are relevant, and the entire database contains 125 relevant documents, calculate Precision and Recall. Interpret the performance.',
    guidelines: 'Show formulas, calculations, and evaluate system effectiveness.',
    modelAnswer: 'Precision = (Relevant Retrieved / Total Retrieved) = 50 / 80 = 62.5%. Recall = (Relevant Retrieved / Total Relevant in Collection) = 50 / 125 = 40%. Interpretation: The system achieves moderate precision (62.5% noise-free hits) but low recall (missing 60% of relevant collection literature), indicating the query was overly restrictive.'
  },
  {
    id: 't-7-3',
    moduleId: 'mod-7',
    moduleName: 'Module 7: Practical Synthesis',
    question: 'Design a mini thesaurus structure for the domain "Digital Libraries", incorporating at least 3 broader terms, 3 narrower terms, 2 related terms, and USE/UF equivalence pointers.',
    guidelines: 'Create structured thesaurus entries following ANSI/NISO Z39.19 standards.',
    modelAnswer: 'Digital Libraries\n- BT: Information Systems, Digital Repositories\n- NT: Institutional Repositories, Electronic Theses and Dissertations\n- RT: Metadata Standards, Open Access\n- USE: Electronic Libraries\n- UF: Virtual Libraries, Online Libraries'
  },
  {
    id: 't-7-4',
    moduleId: 'mod-7',
    moduleName: 'Module 7: Practical Synthesis',
    question: 'Compare Pre-coordinate and Post-coordinate search strategies using a practical multi-facet query: "Automation of Academic Libraries in Developing Countries".',
    guidelines: 'Explain how pre-coordinate strings vs post-coordinate boolean operators process this query.',
    modelAnswer: 'Pre-coordinate: Relies on pre-combined subject strings like "Academic Libraries -- Automation -- Developing Countries". If the indexer did not combine them in that exact order, retrieval fails. Post-coordinate: Allows searching "Academic Libraries" AND "Automation" AND "Developing Countries" independently, offering maximum query flexibility.'
  },
  {
    id: 't-7-5',
    moduleId: 'mod-7',
    moduleName: 'Module 7: Practical Synthesis',
    question: 'Synthesize the core theoretical takeaways of LIS 814 into an executive manifesto on the future of bibliographic control in the semantic web era.',
    guidelines: 'Discuss linked data, knowledge graphs, controlled vocabularies, and professional ethics.',
    modelAnswer: 'The future of bibliographic control lies in linked data, knowledge graphs, and semantic interoperability. Traditional principles of vocabulary control and subject analysis remain foundational, now supercharged by AI embeddings and open bibliographic APIs to ensure universal knowledge discovery.'
  }
];

export const TheoryView: React.FC<TheoryViewProps> = () => {
  const theoryQuestions = THEORY_QUESTIONS;

  const [studentAnswers, setStudentAnswers] = useState<{ [key: string]: string }>(() => {
    try {
      const raw = localStorage.getItem(THEORY_STORAGE_KEY);
      if (!raw) return {};
      const parsed = JSON.parse(raw) as TheoryProgress;
      const stored = parsed?.answers;
      if (!stored || typeof stored !== 'object') return {};
      const validIds = new Set(theoryQuestions.map(q => q.id));
      const restored: { [key: string]: string } = {};
      Object.entries(stored).forEach(([id, text]) => {
        if (validIds.has(id) && typeof text === 'string') {
          restored[id] = text;
        }
      });
      return restored;
    } catch {
      return {};
    }
  });
  const [aiFeedback, setAiFeedback] = useState<{ [key: string]: string }>({});
  const [gradingLoading, setGradingLoading] = useState<{ [key: string]: boolean }>({});
  const [gradingError, setGradingError] = useState<{ [key: string]: boolean }>({});
  const [showModelAnswer, setShowModelAnswer] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    try {
      const answered = theoryQuestions.filter(
        q => (studentAnswers[q.id] || '').trim().length > 0
      ).length;
      const payload: TheoryProgress = {
        answered,
        total: theoryQuestions.length,
        answers: studentAnswers,
        updatedAt: new Date().toISOString()
      };
      localStorage.setItem(THEORY_STORAGE_KEY, JSON.stringify(payload));
    } catch {
      return;
    }
  }, [studentAnswers]);

  const handleGradeAnswer = async (q: TheoryQuestionItem) => {
    const studentText = studentAnswers[q.id];
    if (!studentText || !studentText.trim() || gradingLoading[q.id]) return;

    setGradingLoading(prev => ({ ...prev, [q.id]: true }));

    try {
      const res = await fetch('/api/ai-tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: `Grade this Master's degree student essay response for the theory question: "${q.question}".
Guidelines expected: ${q.guidelines}
Student's Answer: "${studentText}"

Provide a rigorous Master's level academic evaluation, score (out of 10), strengths, and areas for improvement.`,
          context: q.moduleName
        })
      });

      if (!res.ok) {
        throw new Error(`Grading request failed with status ${res.status}`);
      }

      const data = await res.json();
      const feedbackText = data && typeof data.text === 'string' ? data.text.trim() : '';

      if (!feedbackText) {
        throw new Error('Grading service returned an empty response');
      }

      setAiFeedback(prev => ({ ...prev, [q.id]: feedbackText }));
      setGradingError(prev => ({ ...prev, [q.id]: false }));
    } catch (err) {
      console.error(err);
      setAiFeedback(prev => {
        const next = { ...prev };
        delete next[q.id];
        return next;
      });
      setGradingError(prev => ({ ...prev, [q.id]: true }));
    } finally {
      setGradingLoading(prev => ({ ...prev, [q.id]: false }));
    }
  };

  return (
    <div className="space-y-8 pb-16 max-w-4xl mx-auto">
      {/* Header */}
      <div className="p-6 sm:p-8 rounded-2xl border border-line bg-panel shadow-sm">
        <div className="space-y-3">
          <span className="inline-flex items-center text-xs font-bold px-3 py-1 rounded-full bg-accent-50 text-accent-700 border border-accent-100 dark:bg-accent-950/50 dark:text-accent-300 dark:border-accent-900">
            Master's Degree Theory &amp; Essay Center &bull; 35 Rigorous Questions (5 per Module)
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
            Advanced <span className="text-accent-600">Theory</span> &amp; Essay Assignments
          </h1>
          <p className="text-sm font-medium text-ink-muted max-w-prose">
            Master's level pedagogy provides <span className="font-bold text-accent-600">both</span>: an interactive
            workspace for students to type their own answers for instant AI grading, AND authoritative{' '}
            <span className="font-bold text-accent-600">Model Master's Answers</span> for self-assessment and deep study.
          </p>
        </div>
      </div>

      {/* Questions List grouped by Module */}
      <div className="space-y-6">
        {theoryQuestions.map((q, idx) => {
          const isGrading = gradingLoading[q.id];
          const feedback = aiFeedback[q.id];
          const showModel = showModelAnswer[q.id];

          return (
            <div
              key={q.id}
              className="p-6 sm:p-8 rounded-2xl border border-line bg-panel shadow-sm transition-all duration-300 space-y-6 hover:shadow-xl hover:border-accent-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-line pb-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-accent-600 text-white flex items-center justify-center font-bold text-xs">
                    Q{idx + 1}
                  </span>
                  <span className="text-xs font-bold text-ink-muted">
                    {q.moduleName}
                  </span>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-panel-2 border border-line text-ink-muted">
                  Master's Essay Prompt
                </span>
              </div>

              <div className="space-y-3">
                <h2 className="text-lg sm:text-xl font-extrabold leading-snug text-ink">
                  {q.question}
                </h2>
                <p className="text-sm font-medium text-ink-muted max-w-prose">
                  <strong className="text-ink font-bold">Expected Guidelines:</strong> {q.guidelines}
                </p>
              </div>

              {/* Student Answer Workspace */}
              <div className="space-y-3">
                <label
                  htmlFor={`theory-answer-${q.id}`}
                  className="block text-xs font-bold uppercase tracking-wider text-accent-600"
                >
                  Your Master's Essay Response:
                </label>
                <textarea
                  id={`theory-answer-${q.id}`}
                  rows={4}
                  placeholder="Type your academic analysis here..."
                  value={studentAnswers[q.id] || ''}
                  onChange={(e) => setStudentAnswers({ ...studentAnswers, [q.id]: e.target.value })}
                  className="w-full rounded-xl border border-line bg-panel text-ink placeholder-ink-muted px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent-500"
                />

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => handleGradeAnswer(q)}
                    disabled={!studentAnswers[q.id]?.trim() || isGrading}
                    className={`flex items-center gap-2 min-h-11 px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm ${
                      !studentAnswers[q.id]?.trim() || isGrading
                        ? 'bg-line text-ink-muted cursor-not-allowed'
                        : 'bg-accent-600 text-white hover:bg-accent-700'
                    }`}
                  >
                    {isGrading ? <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" /> : <Sparkles className="w-4 h-4" aria-hidden="true" />}
                    <span>{isGrading ? 'Grading Essay...' : 'Get AI Essay Feedback'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowModelAnswer({ ...showModelAnswer, [q.id]: !showModel })}
                    aria-expanded={showModel}
                    aria-controls={`model-answer-${q.id}`}
                    className="flex items-center gap-1.5 min-h-11 px-4 py-2.5 rounded-full text-sm font-bold border border-line bg-panel text-ink hover:border-accent-300 transition-all"
                  >
                    <BookOpen className="w-4 h-4" aria-hidden="true" />
                    <span>{showModel ? 'Hide Model Answer' : 'View Model Answer'}</span>
                  </button>
                </div>
              </div>

              {/* Grading Error */}
              {gradingError[q.id] && (
                <div role="alert" className="p-5 rounded-2xl border border-accent-500 bg-accent-50 dark:bg-accent-950/40 space-y-3 animate-fade-in">
                  <p className="text-sm font-bold text-accent-700 dark:text-accent-300 max-w-prose">
                    Could not grade your answer — check your connection and try again.
                  </p>
                  <button
                    type="button"
                    onClick={() => handleGradeAnswer(q)}
                    className="inline-flex items-center gap-2 min-h-11 px-5 py-2.5 rounded-full text-sm font-bold bg-accent-600 text-white shadow-sm hover:bg-accent-700 transition-all"
                  >
                    <RotateCcw className="w-4 h-4" aria-hidden="true" />
                    <span>Retry grading</span>
                  </button>
                </div>
              )}

              {/* AI Feedback Display */}
              {feedback && (
                <div role="status" aria-live="polite" className="p-5 rounded-2xl border border-line bg-panel-2 space-y-2 animate-fade-in">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-accent-600 flex items-center space-x-1.5">
                    <Award className="w-4 h-4" aria-hidden="true" />
                    <span>AI Professor Academic Grading &amp; Feedback:</span>
                  </h3>
                  <p className="text-sm font-medium leading-relaxed whitespace-pre-wrap text-ink max-w-prose">
                    {feedback}
                  </p>
                </div>
              )}

              {/* Model Answer Display */}
              {showModel && (
                <div id={`model-answer-${q.id}`} className="p-6 rounded-2xl border border-line bg-panel-2 space-y-3 animate-fade-in">
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-accent-600 flex items-center space-x-1.5">
                    <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                    <span>Authoritative Model Master's Answer:</span>
                  </h3>
                  <p className="text-sm sm:text-base font-medium leading-relaxed text-ink whitespace-pre-wrap max-w-prose">
                    {q.modelAnswer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
