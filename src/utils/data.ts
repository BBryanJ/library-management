import { eq } from 'drizzle-orm';
import { db } from '../db';
import { bookTable, borrowedBookTable } from '../db/schema';
import type { BookInsert as BookValues } from '../db/schema';

export async function getBooks() {
  const books = await db.select().from(bookTable);
  return books;
}

export async function getAvailableBooks() {
  const books = await db
    .select()
    .from(bookTable)
    .where(eq(bookTable.status, 'available'));
  return books;
}

export async function addBook(book: BookValues) {
  await db.insert(bookTable).values(book);
}

export async function getBorrowedBooksByUser(userId: number) {
  const books = await db
    .select({
      id: bookTable.id,
      title: bookTable.title,
      author: bookTable.author,
      dueDate: borrowedBookTable.dueDate,
    })
    .from(borrowedBookTable)
    .leftJoin(bookTable, eq(borrowedBookTable.bookId, bookTable.id))
    .where(eq(borrowedBookTable.userId, userId));
  return books;
}

export async function addBorrowedBook(userId: number, bookId: number) {
  const dueDate = new Date();
  dueDate.setDate(dueDate.getDate() + 21);
  await db.insert(borrowedBookTable).values({
    userId,
    bookId,
    dueDate: dueDate.toISOString(),
  });
  await db
    .update(bookTable)
    .set({ status: 'borrowed' })
    .where(eq(bookTable.id, bookId));
}

export async function returnBook(bookId: number) {
  await db
    .update(bookTable)
    .set({ status: 'available' })
    .where(eq(bookTable.id, bookId));
  await db
    .delete(borrowedBookTable)
    .where(eq(borrowedBookTable.bookId, bookId));
}
