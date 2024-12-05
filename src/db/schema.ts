import { pgTable, uuid, text, pgEnum, boolean } from 'drizzle-orm/pg-core';

const statusEnum = pgEnum('status', ['available', 'borrowed']);

export const bookTable = pgTable('book', {
  id: uuid('id').primaryKey().default('gen_random_uuid()'),
  title: text('title').notNull(),
  author: text('author').notNull(),
  status: statusEnum().default('available'),
});

export type BookInsert = typeof bookTable.$inferInsert;
export type BookSelect = typeof bookTable.$inferSelect;

export const userTable = pgTable('user', {
  id: uuid('id').primaryKey().default('gen_random_uuid()'),
  name: text('name').notNull(),
  contactInfo: text('contactInfo').notNull().unique(),
  isStaff: boolean('isStaff').default(false),
});

export type UserInsert = typeof userTable.$inferInsert;
export type UserSelect = typeof userTable.$inferSelect;

export const borrowedBookTable = pgTable('borrowedBook', {
  bookId: uuid('bookId')
    .notNull()
    .references(() => bookTable.id),
  userId: uuid('userId')
    .notNull()
    .references(() => userTable.id),
  dueDate: text('dueDate').notNull(),
});

export type BorrowedBookInsert = typeof borrowedBookTable.$inferInsert;
export type BorrowedBookSelect = typeof borrowedBookTable.$inferSelect;
