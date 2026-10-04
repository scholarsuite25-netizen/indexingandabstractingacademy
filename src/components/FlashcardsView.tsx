import React, { useEffect, useState } from 'react';
import { RotateCw, ChevronLeft, ChevronRight, CheckCircle, Shuffle } from 'lucide-react';
import { FLASHCARDS, FlashcardItem } from '../data/flashcards';



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
