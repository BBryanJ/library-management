'use server';

import { addBook } from '@/utils/data';
import type { BookInsert as BookValues } from '@/db/schema';

// Adds a new book to the database
export async function addBookToDB(book: BookValues) {
  await addBook(book);
}
