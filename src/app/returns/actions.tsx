'use server';

import { returnBook } from '@/utils/data';
import { revalidatePath } from 'next/cache';

export async function updateBorrowedBookToDB(bookId: number) {
  await returnBook(bookId);
  revalidatePath('/returns');
}
