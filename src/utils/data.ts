import { eq } from 'drizzle-orm';
import { db } from '../db';
import { bookTable } from '../db/schema';

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
