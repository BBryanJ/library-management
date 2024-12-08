import { pgTable, serial, text, pgEnum, boolean } from 'drizzle-orm/pg-core';

// Define the enum for the status column with available or borrowed as the possible values
export const statusEnum = pgEnum('status', ['available', 'borrowed']);

// Define the table schema for the book table with id, title, author, and status columns
export const bookTable = pgTable('book', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  author: text('author').notNull(),
  status: statusEnum().notNull().default('available'),
});

// Defines the types for BookInsert and BookSelect (for inserting and selecting data from the book table)
export type BookInsert = typeof bookTable.$inferInsert;
export type BookSelect = typeof bookTable.$inferSelect;

// Defines the table schema for the user table with id, name, contactInfo, and isStaff columns
export const userTable = pgTable('user', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  contactInfo: text('contactInfo').notNull().unique(),
  isStaff: boolean('isStaff').default(false),
});

// Defines the types for UserInsert and UserSelect (for inserting and selecting data from the user table)
export type UserInsert = typeof userTable.$inferInsert;
export type UserSelect = typeof userTable.$inferSelect;

// Defines the table schema for the borrowedBook table with bookId, userId, and dueDate columns
export const borrowedBookTable = pgTable('borrowedBook', {
  bookId: serial('bookId')
    .notNull()
    .references(() => bookTable.id),
  userId: serial('userId')
    .notNull()
    .references(() => userTable.id),
  dueDate: text('dueDate').notNull(),
});

// Defines the types for BorrowedBookInsert and BorrowedBookSelect (for inserting and selecting data from the borrowedBook table)
export type BorrowedBookInsert = typeof borrowedBookTable.$inferInsert;
export type BorrowedBookSelect = typeof borrowedBookTable.$inferSelect;
