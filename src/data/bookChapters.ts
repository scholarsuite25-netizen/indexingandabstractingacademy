import { BookChapter } from './bookTypes';
import { BOOK_PART1 } from './book/part1';
import { BOOK_PART2 } from './book/part2';
import { BOOK_PART3 } from './book/part3';

export const BOOK_CHAPTERS: BookChapter[] = [...BOOK_PART1, ...BOOK_PART2, ...BOOK_PART3];
