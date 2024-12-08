import { eq, ilike, or } from 'drizzle-orm';
import { db } from '../db';
import { bookTable, borrowedBookTable } from '../db/schema';
import type { BookInsert as BookValues } from '../db/schema';

// Gets all books from the database and returns them in an array
export async function getBooks() {
  const books = await db.select().from(bookTable);
  return books;
}

// Gets all books marked as available from the database and returns them in an arrary
export async function getAvailableBooks() {
  const books = await db
    .select()
    .from(bookTable)
    .where(eq(bookTable.status, 'available'));
  return books;
}

// Searches all books in the database by the given query and returns them in an array
export async function searchBooksByQuery(query: string) {
  const books = await db
    .select()
    .from(bookTable)
    .where(
      or(
        ilike(bookTable.author, '%' + query + '%'),
        ilike(bookTable.title, '%' + query + '%')
      )
    );
  return books;
}

// Adds a new book to the database with the given title, author, and status
export async function addBook(book: BookValues) {
  await db.insert(bookTable).values(book);
}

// Gets all books that the user has borrowed from the database and returns them in an array
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

// Adds a new entry to the borrowedBooks table with the given userId, bookId, and dueDate. Also updates the status of the book to borrowed.
export async function addBorrowedBook(userId: number, bookId: number) {
  const dueDate = new Date(); // Get the current date
  dueDate.setDate(dueDate.getDate() + 21); // Add 21 days to the current date
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

// Updates the status of the book with the given bookId to available and deletes the entry from the borrowedBooks table
export async function returnBook(bookId: number) {
  await db
    .update(bookTable)
    .set({ status: 'available' })
    .where(eq(bookTable.id, bookId));
  await db
    .delete(borrowedBookTable)
    .where(eq(borrowedBookTable.bookId, bookId));
}
