import { pgTable, serial, text, pgEnum, boolean } from 'drizzle-orm/pg-core';

const statusEnum = pgEnum('status', ['available', 'borrowed']);

export const bookTable = pgTable('book', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  author: text('author').notNull(),
  status: statusEnum().notNull().default('available'),
});

export type BookInsert = typeof bookTable.$inferInsert;
export type BookSelect = typeof bookTable.$inferSelect;

export const userTable = pgTable('user', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  contactInfo: text('contactInfo').notNull().unique(),
  isStaff: boolean('isStaff').default(false),
});

export type UserInsert = typeof userTable.$inferInsert;
export type UserSelect = typeof userTable.$inferSelect;

export const borrowedBookTable = pgTable('borrowedBook', {
  bookId: serial('bookId')
    .notNull()
    .references(() => bookTable.id),
  userId: serial('userId')
    .notNull()
    .references(() => userTable.id),
  dueDate: text('dueDate').notNull(),
});

export type BorrowedBookInsert = typeof borrowedBookTable.$inferInsert;
export type BorrowedBookSelect = typeof borrowedBookTable.$inferSelect;
