# Library Management

This is a simple library management system built with Next.js and Drizzle ORM.

## Getting Started

### 1. Setting up the database

This app uses PostgreSQL as the database. To set up the database, follow these steps:

1. Create a new PostgreSQL database.

The more simple that I created my database for this project is using the `docker-compose.yml` file included (Requires [Docker](https://docs.docker.com/get-docker/) to be installed).

```bash
docker-compose up -d
```

If you have a local PostgreSQL server set up, you can skip this step.

2. Set databse to DATABASE_URL environment variable

Change the .env.example file to .env and set the DATABASE_URL environment variable to your PostgreSQL database URL.

```
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/library_management

```

3. Run the database commands

Run the following commands to create the database schema and seed the database with some data:

```bash
npm run db:generate
npm run db:seed
```

### 2. Running the app

To run the app, follow these steps:

1. Install the dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the app.

### 3. Using the app

There are five main pages in the app:

- Home: This displays all the available actions in the app (which is also on the navbar).
- Books: This displays a list of all the available books in the library and allows the user to borrow any available book.
- Add Book: This allows the user to add a new book to the library.
- Search: This allows the user to search for a book by title or author, as well as borrow any available book.
- Returns: This displays a list of all the books that the user has borrowed, along with the option to return the book.

Due to the nature of the app at the time, there is no authentication or authorization implemented. For this reason, the user is always assigned the role of "Test Tester" with the user id of 1.
