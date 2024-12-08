import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

// Configures Drizzle Kit to generate TypeScript types for the database schema
export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
