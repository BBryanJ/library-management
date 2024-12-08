'use server';

import { addBorrowedBook } from '@/utils/data';
import { revalidatePath } from 'next/cache';

export async function addBorrowedBookToDB(bookId: number) {
  await addBorrowedBook(1, bookId);
  revalidatePath('/books');
}
