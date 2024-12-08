'use server';

import { addBorrowedBook, returnBook } from '@/utils/data';
import { revalidatePath } from 'next/cache';

// Adds a borrowed book to the database
export async function addBorrowedBookToDB(bookId: number) {
  await addBorrowedBook(1, bookId);
}

// Adds a borrowed book to the database and revalidates the path to the books page
export async function booksBorrowAction(bookId: number) {
  await addBorrowedBookToDB(bookId);
  revalidatePath('/books');
}

// Adds a borrowed book to the database and revalidates the path to the search page
export async function searchBorrowAction(bookId: number) {
  await addBorrowedBookToDB(bookId);
  revalidatePath('/search');
}

// Updates the status of a borrowed book to available and revalidates the path to the returns page
export async function updateBorrowedBookToDB(bookId: number) {
  await returnBook(bookId);
  revalidatePath('/returns');
}
