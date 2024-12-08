import SearchBar from './search-bar';
import Table from './table';

export const dynamic = 'force-dynamic';

// Renders the search page of the app with a search bar and a table of search results
export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams)?.query || ''; // Get the query from the searchParams or set it to an empty string if it's not provided

  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <h3 className='text-3xl font-bold underline'>Search Books</h3>
      <SearchBar />
      {/* Suppresses a TS error for the Table component, which is a server component */}
      {/* @ts-expect-error Server Component */}
      <Table query={query} />
    </div>
  );
}
