'use server';

import { addBook } from '@/utils/data';
import type { BookInsert as BookValues } from '@/db/schema';

export async function addBookToDB(book: BookValues) {
  await addBook(book);
}
