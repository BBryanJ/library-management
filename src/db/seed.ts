import { db } from './index.ts';
import { bookTable, UserInsert, userTable } from './schema.ts';
import { faker } from '@faker-js/faker';

// Creates test data for the database
async function main() {
  // Create a test user
  const testUser: UserInsert = {
    name: 'Test Tester',
    contactInfo: 'test@testing.com',
  };
  await db.insert(userTable).values(testUser);

  // Create a staff user
  const testStaff: UserInsert = {
    name: 'Staff Staffer',
    contactInfo: 'staff@testing.com',
    isStaff: true,
  };
  await db.insert(userTable).values(testStaff);

  // Generate 5 users with names and contact info
  for (let i = 0; i < 5; i++) {
    await db.insert(userTable).values({
      name: faker.person.fullName(),
      contactInfo: faker.internet.email(),
    });
  }

  // Generate 20 books with titles and authors
  for (let i = 0; i < 20; i++) {
    await db.insert(bookTable).values({
      title: faker.book.title(),
      author: faker.book.author(),
    });
  }
}

main();
