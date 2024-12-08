'use server';

import { addBorrowedBook, returnBook } from '@/utils/data';
import { revalidatePath } from 'next/cache';

export async function addBorrowedBookToDB(bookId: number) {
  await addBorrowedBook(1, bookId);
}

export async function booksBorrowAction(bookId: number) {
  await addBorrowedBookToDB(bookId);
  revalidatePath('/books');
}

export async function searchBorrowAction(bookId: number) {
  await addBorrowedBookToDB(bookId);
  revalidatePath('/search');
}

export async function updateBorrowedBookToDB(bookId: number) {
  await returnBook(bookId);
  revalidatePath('/returns');
}
