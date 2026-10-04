// Lightweight counts so Navbar/HomeDashboard can display real numbers without
// pulling the full MCQ/flashcard banks into the initial JS bundle (the views
// that render the banks are code-split in App.tsx).
// smoke.tsx fails if these drift from the actual data arrays.

export const MCQ_TOTAL = 128;
export const FLASHCARD_TOTAL = 98;

export const MCQ_COUNTS_BY_MODULE: Record<number, number> = {
  1: 19,
  2: 19,
  3: 19,
  4: 19,
  5: 19,
  6: 19,
  7: 14,
};

export const FLASHCARD_COUNTS_BY_MODULE: Record<number, number> = {
  1: 14,
  2: 14,
  3: 14,
  4: 14,
  5: 14,
  6: 16,
  7: 12,
};
