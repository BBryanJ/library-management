CREATE TYPE status AS ENUM ('available', 'borrowed');
--> statement-breakpoint

CREATE TABLE IF NOT EXISTS "book" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"author" text NOT NULL,
	"status" status DEFAULT 'available' NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "borrowedBook" (
	"bookId" serial NOT NULL,
	"userId" serial NOT NULL,
	"dueDate" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"contactInfo" text NOT NULL,
	"isStaff" boolean DEFAULT false,
	CONSTRAINT "user_contactInfo_unique" UNIQUE("contactInfo")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "borrowedBook" ADD CONSTRAINT "borrowedBook_bookId_book_id_fk" FOREIGN KEY ("bookId") REFERENCES "public"."book"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "borrowedBook" ADD CONSTRAINT "borrowedBook_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
