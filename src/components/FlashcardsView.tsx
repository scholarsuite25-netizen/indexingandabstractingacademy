import React, { useEffect, useState } from 'react';
import { RotateCw, ChevronLeft, ChevronRight, CheckCircle, Shuffle } from 'lucide-react';

interface FlashcardItem {
  id: string;
  module: string;
  term: string;
  definition: string;
  category: string;
}

interface FlashcardsViewProps {
  darkMode: boolean;
}

interface FlashcardProgress {
  masteredIds?: string[];
  mastered?: number;
  total?: number;
  updatedAt?: string;
}

const FLASHCARD_STORAGE_KEY = 'indexmaster_flashcards';

// 70 robust, comprehensive flashcards covering all LIS 814 modules and concepts
export const FLASHCARDS: FlashcardItem[] = [
  // Module 1: Foundations
  { id: 'fc-1', module: 'Module 1', term: 'Subject Indexing', definition: 'The intellectual process of determining document aboutness and assigning appropriate index terms for efficient retrieval.', category: 'Foundations' },
  { id: 'fc-2', module: 'Module 1', term: 'Abstracting', definition: 'The process of preparing a brief and accurate representation of the essential contents of a document.', category: 'Foundations' },
  { id: 'fc-3', module: 'Module 1', term: 'Controlled Vocabulary', definition: 'An authorized list of terms used consistently for indexing to eliminate synonym scatter.', category: 'Languages' },
  { id: 'fc-4', module: 'Module 1', term: 'Natural Language Indexing', definition: 'Using ordinary words and expressions directly from document text without an authority file.', category: 'Languages' },
  { id: 'fc-5', module: 'Module 1', term: 'Synonym Scatter', definition: 'The dispersion of synonymous concepts across multiple different headings, reducing search recall.', category: 'Languages' },
  { id: 'fc-6', module: 'Module 1', term: 'LCSH', definition: 'Library of Congress Subject Headings, a comprehensive controlled vocabulary maintained by the Library of Congress.', category: 'Languages' },
  { id: 'fc-7', module: 'Module 1', term: 'MeSH', definition: 'Medical Subject Headings, the controlled vocabulary thesaurus produced by the National Library of Medicine.', category: 'Languages' },
  { id: 'fc-8', module: 'Module 1', term: 'Indexing Language', definition: 'A structured system of terms, symbols, and rules used to represent the subject content of information resources.', category: 'Foundations' },
  { id: 'fc-9', module: 'Module 1', term: 'Selective Dissemination (SDI)', definition: 'Matching newly indexed records against personalized user profiles to deliver relevant updates.', category: 'Services' },
  { id: 'fc-10', module: 'Module 1', term: 'Bibliographic Control', definition: 'The systematic listing and organization of recorded knowledge for universal access and retrieval.', category: 'Foundations' },

  // Module 2: Vocabulary Control & Thesauri
  { id: 'fc-11', module: 'Module 2', term: 'Broader Term (BT)', definition: 'A hierarchical thesaurus relationship indicating a hypernym or broader class.', category: 'Thesaurus' },
  { id: 'fc-12', module: 'Module 2', term: 'Narrower Term (NT)', definition: 'A hierarchical thesaurus relationship indicating a hyponym or specific sub-class.', category: 'Thesaurus' },
  { id: 'fc-13', module: 'Module 2', term: 'Related Term (RT)', definition: 'An associative (non-hierarchical) relationship between two connected subject concepts.', category: 'Thesaurus' },
  { id: 'fc-14', module: 'Module 2', term: 'USE / UF', definition: 'Equivalence pointers: USE points to the preferred descriptor; UF (Used For) lists non-preferred synonyms.', category: 'Thesaurus' },
  { id: 'fc-15', module: 'Module 2', term: 'ANSI/NISO Z39.19', definition: 'The national standard guiding the construction, format, and management of monolingual thesauri.', category: 'Standards' },
  { id: 'fc-16', module: 'Module 2', term: 'Homograph', definition: 'Two words spelled identically but possessing entirely different meanings and etymologies.', category: 'Semantics' },
  { id: 'fc-17', module: 'Module 2', term: 'Semantic Control', definition: 'Managing word meanings, disambiguating homographs, and governing synonym relationships.', category: 'Semantics' },
  { id: 'fc-18', module: 'Module 2', term: 'Syntactic Control', definition: 'The rules governing term combination, citation order, and relational role strings.', category: 'Syntax' },
  { id: 'fc-19', module: 'Module 2', term: 'Facet Analysis', definition: 'Dissecting complex subjects into fundamental, homogeneous categories (e.g., Personality, Matter, Energy).', category: 'Taxonomy' },
  { id: 'fc-20', module: 'Module 2', term: 'Polyhierarchy', definition: 'A hierarchical structure where a narrower term possesses multiple broader terms in different branches.', category: 'Thesaurus' },

  // Module 3: Indexing Systems & Syntax
  { id: 'fc-21', module: 'Module 3', term: 'Pre-coordinate Indexing', definition: 'Synthesizing compound subject headings at the time of indexing prior to searching.', category: 'Systems' },
  { id: 'fc-22', module: 'Module 3', term: 'Post-coordinate Indexing', definition: 'Assigning atomic term descriptors separately and combining them using boolean logic at search time.', category: 'Systems' },
  { id: 'fc-23', module: 'Module 3', term: 'Chain Indexing', definition: 'S.R. Ranganathan method deriving alphabetical subject entries from classification schedule hierarchies.', category: 'Systems' },
  { id: 'fc-24', module: 'Module 3', term: 'Cyclic Indexing', definition: 'Rotating compound subject components so each significant term occupies the leading position in turn.', category: 'Systems' },
  { id: 'fc-25', module: 'Module 3', term: 'PRECIS', definition: 'Preserved Context Index System developed by Derek Austin using role operators to maintain semantic context.', category: 'Systems' },
  { id: 'fc-26', module: 'Module 3', term: 'SLIC', definition: 'Selective Listing in Combination, generating controlled term combinations for index access.', category: 'Systems' },
  { id: 'fc-27', module: 'Module 3', term: 'KWIC Indexing', definition: 'Keyword in Context automated indexing displaying title keywords surrounded by immediate text context.', category: 'Automation' },
  { id: 'fc-28', module: 'Module 3', term: 'KWOC Indexing', definition: 'Keyword out of Context listing extracted keywords vertically with full titles alongside.', category: 'Automation' },
  { id: 'fc-29', module: 'Module 3', term: 'Uniterm Indexing', definition: 'Mortimer Taube coordinate indexing system using single-word descriptors on uniterm cards.', category: 'Systems' },
  { id: 'fc-30', module: 'Module 3', term: 'Citation Order', definition: 'The prescribed sequence in which component terms of a complex subject heading are arranged.', category: 'Syntax' },

  // Module 4: Strategies & Evaluation
  { id: 'fc-31', module: 'Module 4', term: 'Exhaustivity', definition: 'The depth and breadth of concept coverage (number of terms assigned to an index record).', category: 'Strategies' },
  { id: 'fc-32', module: 'Module 4', term: 'Specificity', definition: 'The precision and granularity with which a term matches the exact subject of a document.', category: 'Strategies' },
  { id: 'fc-33', module: 'Module 4', term: 'Precision', definition: 'Proportion of retrieved documents that are relevant to the user query (Relevant Retrieved / Total Retrieved).', category: 'Evaluation' },
  { id: 'fc-34', module: 'Module 4', term: 'Recall', definition: 'Proportion of relevant documents in the entire collection that are retrieved (Relevant Retrieved / Total Relevant).', category: 'Evaluation' },
  { id: 'fc-35', module: 'Module 4', term: 'Cranfield Project', definition: 'Seminal empirical testing project by Cyril Cleverdon establishing foundational IR and index evaluation.', category: 'Evaluation' },
  { id: 'fc-36', module: 'Module 4', term: 'Derived Indexing', definition: 'Extracting index terms automatically or semi-automatically from document titles, abstracts, or text.', category: 'Methods' },
  { id: 'fc-37', module: 'Module 4', term: 'Assigned Indexing', definition: 'Intellectual assignment of controlled terms from a thesaurus by human indexers or AI classifiers.', category: 'Methods' },
  { id: 'fc-38', module: 'Module 4', term: 'Inter-Indexer Consistency', definition: 'The degree of agreement between independent indexers assigning terms to the same document.', category: 'Evaluation' },
  { id: 'fc-39', module: 'Module 4', term: 'Fallout', definition: 'The proportion of non-relevant documents retrieved out of all non-relevant documents in the collection.', category: 'Evaluation' },
  { id: 'fc-40', module: 'Module 4', term: 'Indexing Lag', definition: 'The time delay between document publication and its appearance in an indexing service.', category: 'Evaluation' },

  // Module 5: Abstracting Principles & Types
  { id: 'fc-41', module: 'Module 5', term: 'Indicative Abstract', definition: 'An abstract summarizing document scope and topics without detailing specific findings or data.', category: 'Abstract Types' },
  { id: 'fc-42', module: 'Module 5', term: 'Informative Abstract', definition: 'An abstract summarizing both scope and major findings, data, and conclusions.', category: 'Abstract Types' },
  { id: 'fc-43', module: 'Module 5', term: 'Critical Abstract', definition: 'An abstract that includes an evaluation or critique of document methodology and reliability.', category: 'Abstract Types' },
  { id: 'fc-44', module: 'Module 5', term: 'Slanted Abstract', definition: 'An abstract tailored to highlight aspects relevant to a specific specialized user audience.', category: 'Abstract Types' },
  { id: 'fc-45', module: 'Module 5', term: 'Author Abstract', definition: 'An abstract prepared by the original author(s) of a primary research document.', category: 'Abstract Types' },
  { id: 'fc-46', module: 'Module 5', term: 'ANSI/NISO Z39.14', definition: 'The national standard prescribing guidelines for writing, formatting, and structuring abstracts.', category: 'Standards' },
  { id: 'fc-47', module: 'Module 5', term: 'Self-Contained', definition: 'The property of an abstract being fully understandable without reading the full document text.', category: 'Principles' },
  { id: 'fc-48', module: 'Module 5', term: 'Extractive Summary', definition: 'An automated summary formed by extracting key sentences verbatim from source texts.', category: 'Automation' },
  { id: 'fc-49', module: 'Module 5', term: 'Abstracting Bulletin', definition: 'A periodical publication containing collections of subject-organized abstracts.', category: 'Services' },
  { id: 'fc-50', module: 'Module 5', term: 'Objectivity', definition: 'The requirement that an abstract reflect only source content without personal bias or commentary.', category: 'Principles' },

  // Module 6: Digital Libraries, Automated & AI Indexing
  { id: 'fc-51', module: 'Module 6', term: 'Scopus & Web of Science', definition: 'Premier global citation indexing and abstracting databases for scholarly literature.', category: 'Services' },
  { id: 'fc-52', module: 'Module 6', term: 'PubMed / MEDLINE', definition: 'Leading bibliographic database indexing biomedical and life sciences literature.', category: 'Services' },
  { id: 'fc-53', module: 'Module 6', term: 'LISA', definition: 'Library and Information Science Abstracts, specialized abstracting service for LIS.', category: 'Services' },
  { id: 'fc-54', module: 'Module 6', term: 'Full-Text Indexing', definition: 'Indexing every searchable word within digital document files for deep query retrieval.', category: 'Digital Libraries' },
  { id: 'fc-55', module: 'Module 6', term: 'Named-Entity Recognition (NER)', definition: 'AI technique extracting and classifying people, organizations, locations, and dates from text.', category: 'AI Indexing' },
  { id: 'fc-56', module: 'Module 6', term: 'Transformer Models', definition: 'Advanced neural network architectures (BERT, Gemini) powering semantic embeddings and NLP.', category: 'AI Indexing' },
  { id: 'fc-57', module: 'Module 6', term: 'Automatic Classification', definition: 'Computer algorithms assigning incoming documents to predefined subject categories automatically.', category: 'AI Indexing' },
  { id: 'fc-58', module: 'Module 6', term: 'Metadata Harvesting', definition: 'Aggregating metadata records across distributed repositories using OAI-PMH protocols.', category: 'Digital Libraries' },
  { id: 'fc-59', module: 'Module 6', term: 'Semantic Search', definition: 'Information retrieval based on conceptual meaning and user intent rather than exact string matching.', category: 'Digital Libraries' },
  { id: 'fc-60', module: 'Module 6', term: 'TF-IDF', definition: 'Term Frequency-Inverse Document Frequency statistical weight evaluating word importance.', category: 'Text Mining' },
  { id: 'fc-61', module: 'Module 6', term: 'Knowledge Graph', definition: 'A semantic network modeling interconnected entities, concepts, and domain relationships.', category: 'Semantic Web' },
  { id: 'fc-62', module: 'Module 6', term: 'OAI-PMH', definition: 'Open Archives Initiative Protocol for Metadata Harvesting across interoperable repositories.', category: 'Standards' },

  // Module 7: Practical Exercises & Review
  { id: 'fc-63', module: 'Module 7', term: 'Subject Analysis', definition: 'The intellectual breakdown of a research paper title and text to identify core aboutness.', category: 'Practice' },
  { id: 'fc-64', module: 'Module 7', term: 'Controlled Descriptor Assignment', definition: 'Mapping natural language research concepts to authorized thesaurus terms.', category: 'Practice' },
  { id: 'fc-65', module: 'Module 7', term: 'Precision Calculation', definition: 'Formula: (Relevant Retrieved / Total Retrieved) * 100%.', category: 'Metrics' },
  { id: 'fc-66', module: 'Module 7', term: 'Recall Calculation', definition: 'Formula: (Relevant Retrieved / Total Relevant in Collection) * 100%.', category: 'Metrics' },
  { id: 'fc-67', module: 'Module 7', term: 'Abstract Structuring', definition: 'Structuring an informative abstract into Purpose, Methodology, Findings, and Conclusions.', category: 'Practice' },
  { id: 'fc-68', module: 'Module 7', term: 'Vocabulary Governance', definition: 'Ongoing professional curation, validation, and updating of thesaurus terms and scope notes.', category: 'Management' },
  { id: 'fc-69', module: 'Module 7', term: 'Information Architecture', definition: 'The structural design of shared information environments and taxonomy systems.', category: 'Design' },
  { id: 'fc-70', module: 'Module 7', term: 'Bibliographic Coupling', definition: 'Measuring document relatedness based on shared references in their bibliographies.', category: 'Metrics' }
];

export const FlashcardsView: React.FC<FlashcardsViewProps> = () => {
  const flashcards = FLASHCARDS;

  const [selectedModule, setSelectedModule] = useState<string>('All');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [masteredCards, setMasteredCards] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem(FLASHCARD_STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw) as FlashcardProgress;
      const ids = Array.isArray(parsed?.masteredIds) ? parsed.masteredIds : [];
      const validIds = new Set(flashcards.map(card => card.id));
      return ids.filter(id => typeof id === 'string' && validIds.has(id));
    } catch {
      return [];
    }
  });
  const [deckOrder, setDeckOrder] = useState<number[]>([]);

  const filteredCards = flashcards.filter(card => {
    if (selectedModule !== 'All' && card.module !== selectedModule) return false;
    return true;
  });

  useEffect(() => {
    setDeckOrder(Array.from({ length: filteredCards.length }, (_, i) => i));
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [selectedModule]);

  useEffect(() => {
    try {
      localStorage.setItem(
        FLASHCARD_STORAGE_KEY,
        JSON.stringify({
          masteredIds: masteredCards,
          mastered: masteredCards.length,
          total: flashcards.length,
          updatedAt: new Date().toISOString()
        })
      );
    } catch {
      return;
    }
  }, [masteredCards]);

  const orderedPositions =
    deckOrder.length === filteredCards.length ? deckOrder : filteredCards.map((_, i) => i);

  const currentCard: FlashcardItem | undefined =
    filteredCards.length > 0 ? filteredCards[orderedPositions[currentIndex] ?? 0] : undefined;

  const masteredInDeck = filteredCards.filter(card => masteredCards.includes(card.id)).length;

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex(prev => (prev < filteredCards.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : filteredCards.length - 1));
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    const order = filteredCards.map((_, i) => i);
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = order[i];
      order[i] = order[j];
      order[j] = temp;
    }
    setDeckOrder(order);
    setCurrentIndex(0);
  };

  const handleSelectModule = (mod: string) => {
    setSelectedModule(mod);
  };

  const handleDeckKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      handlePrev();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      handleNext();
    }
  };

  const toggleMastered = (id: string) => {
    setMasteredCards(prev => 
      prev.includes(id) ? prev.filter(cId => cId !== id) : [...prev, id]
    );
  };

  const modules = ['All', 'Module 1', 'Module 2', 'Module 3', 'Module 4', 'Module 5', 'Module 6', 'Module 7'];

  return (
    <div className="space-y-8 pb-16 max-w-4xl mx-auto">
      {/* Header */}
      <div className="p-6 sm:p-8 rounded-2xl border border-line bg-panel shadow-sm">
        <div className="space-y-3">
          <span className="inline-flex items-center text-xs font-bold px-3 py-1 rounded-full bg-accent-50 text-accent-700 border border-accent-100 dark:bg-accent-950/50 dark:text-accent-300 dark:border-accent-900">
            Active Recall Flashcards &bull; {flashcards.length} Expert Terms
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
            Robust LIS 814 <span className="text-accent-600">Flashcard</span> Deck
          </h1>
          <p className="text-sm font-medium text-ink-muted max-w-prose">
            Studies show an ideal flashcard deck for master's level professional courses spans 50 to 100 high-yield
            concepts. Practice active recall across all 7 modules to lock in definitions for examinations.
          </p>
        </div>

        {/* Module Filter Tabs */}
        <div className="flex flex-wrap gap-2 pt-6" role="group" aria-label="Filter flashcards by module">
          {modules.map(mod => (
            <button
              key={mod}
              type="button"
              aria-pressed={selectedModule === mod}
              onClick={() => handleSelectModule(mod)}
              className={`min-h-11 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedModule === mod
                  ? 'bg-accent-600 text-white shadow-sm'
                  : 'border border-line bg-panel text-ink hover:border-accent-300'
              }`}
            >
              {mod}
            </button>
          ))}
        </div>
      </div>

      {filteredCards.length > 0 && currentCard ? (
        <div className="space-y-6" onKeyDown={handleDeckKeyDown}>
          {/* Progress & Actions */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-bold px-2">
            <span className="inline-flex items-center min-h-11 px-4 py-1 rounded-full bg-accent-50 text-accent-700 border border-accent-100 dark:bg-accent-950/50 dark:text-accent-300 dark:border-accent-900">
              Card {currentIndex + 1} of {filteredCards.length} &bull; filtered deck
            </span>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleShuffle}
                className="flex items-center gap-1.5 min-h-11 px-4 py-2 rounded-full border border-line bg-panel text-ink text-xs font-bold hover:border-accent-300 transition-all"
              >
                <Shuffle className="w-4 h-4 text-accent-600" aria-hidden="true" />
                <span>Shuffle</span>
              </button>

              <button
                type="button"
                onClick={() => currentCard && toggleMastered(currentCard.id)}
                aria-pressed={currentCard ? masteredCards.includes(currentCard.id) : false}
                className={`flex items-center gap-1.5 min-h-11 px-4 py-2 rounded-full border text-xs font-bold transition-all ${
                  currentCard && masteredCards.includes(currentCard.id)
                    ? 'bg-accent-50 text-accent-700 border-accent-500 dark:bg-accent-950/40 dark:text-accent-300'
                    : 'border-line bg-panel text-ink hover:border-accent-300'
                }`}
              >
                <CheckCircle className="w-4 h-4" aria-hidden="true" />
                <span>{currentCard && masteredCards.includes(currentCard.id) ? 'Mastered' : 'Mark Mastered'}</span>
              </button>
            </div>
          </div>

          {/* Flashcard Card Container */}
          <div className="relative w-full h-80 sm:h-96 rounded-3xl border border-line bg-panel p-8 sm:p-12 transition-all duration-500 transform hover:scale-[1.01] hover:shadow-xl hover:border-accent-300 flex flex-col justify-between shadow-sm group">
            {/* Top Badge */}
            <div className="flex items-center justify-between gap-3 w-full">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent-50 text-accent-700 border border-accent-100 dark:bg-accent-950/50 dark:text-accent-300 dark:border-accent-900">
                {currentCard.module} &bull; {currentCard.category}
              </span>
              <span className="text-xs font-semibold text-ink-muted flex items-center gap-1">
                <RotateCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500" aria-hidden="true" />
                <span>Click or press Enter to flip</span>
              </span>
            </div>

            {/* Center Content */}
            <div className="text-center space-y-4 my-auto">
              {!isFlipped ? (
                <div className="space-y-3 animate-fade-in">
                  <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-ink">
                    {currentCard.term}
                  </h2>
                  <p className="text-xs font-bold text-ink-muted uppercase tracking-widest">
                    (Press Enter or click to reveal definition)
                  </p>
                </div>
              ) : (
                <div className="space-y-3 animate-fade-in">
                  <span className="text-xs font-bold text-accent-600 uppercase tracking-wider block">Definition &amp; Context</span>
                  <p className="text-lg sm:text-xl font-bold leading-relaxed text-ink max-w-prose mx-auto">
                    {currentCard.definition}
                  </p>
                </div>
              )}
            </div>

            {/* Bottom Status */}
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-ink-muted border-t border-line pt-4 w-full">
              <span
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={filteredCards.length}
                aria-valuenow={masteredInDeck}
                aria-label={`Mastery in this deck: ${masteredInDeck} of ${filteredCards.length} cards`}
              >
                Mastery: {masteredInDeck} / {filteredCards.length} in this deck ({masteredCards.length} / {flashcards.length} all cards)
              </span>
              <span className="text-accent-600 font-bold">IndexMaster LIS 814</span>
            </div>

            <button
              type="button"
              onClick={() => setIsFlipped(prev => !prev)}
              aria-label={
                isFlipped
                  ? `Showing definition of ${currentCard.term}. Activate to flip back to the term. Use the left and right arrow keys to change card.`
                  : `Showing term ${currentCard.term}. Activate to reveal the definition. Use the left and right arrow keys to change card.`
              }
              className="absolute inset-0 rounded-3xl cursor-pointer focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent-500"
            />
          </div>

          {/* Navigation Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <button
              type="button"
              onClick={handlePrev}
              className="flex items-center gap-2 min-h-11 px-6 py-3 rounded-full font-bold border border-line bg-panel text-ink hover:border-accent-300 transition-all text-sm"
            >
              <ChevronLeft className="w-4 h-4" aria-hidden="true" />
              <span>Previous Card</span>
            </button>

            <button
              type="button"
              onClick={() => setIsFlipped(!isFlipped)}
              aria-pressed={isFlipped}
              className="min-h-11 px-6 py-3 rounded-full font-bold bg-accent-600 text-white shadow-sm hover:bg-accent-700 transition-all text-sm"
            >
              {isFlipped ? 'Show Term' : 'Flip Card'}
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="flex items-center gap-2 min-h-11 px-6 py-3 rounded-full font-bold border border-line bg-panel text-ink hover:border-accent-300 transition-all text-sm"
            >
              <span>Next Card</span>
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-12 space-y-4">
          <p className="text-sm font-medium text-ink-muted">No flashcards found for this module selection.</p>
          <button
            type="button"
            onClick={() => handleSelectModule('All')}
            className="mx-auto inline-flex min-h-11 px-5 py-2.5 rounded-full bg-accent-600 text-white font-bold shadow-sm hover:bg-accent-700 transition-all text-sm"
          >
            Show all modules
          </button>
        </div>
      )}
    </div>
  );
};
