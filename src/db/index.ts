import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';

// Initialize the database connection with the DATABASE_URL environment variable
export const db = drizzle(process.env.DATABASE_URL!);
