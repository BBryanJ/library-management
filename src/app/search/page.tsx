import SearchBar from './search-bar';
import Table from './table';

export const dynamic = 'force-dynamic';

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams)?.query || '';

  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <h3 className='text-3xl font-bold underline'>Search Books</h3>
      <SearchBar />
      {/* @ts-expect-error Server Component */}
      <Table query={query} />
    </div>
  );
}
