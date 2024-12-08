'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

// Renders a search bar that allows the user to search for a book by title or author
export default function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // Handles setting the search query in the URL. Is debounced to prevent excessive updates by 500ms
  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);

  return (
    <div className='flex flex-1 flex-shrink-0 w-3/4 gap-1'>
      <label htmlFor='search' className='sr-only'>
        Search
      </label>
      <input
        type='text'
        id='search'
        placeholder='Search by title or author'
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('query')?.toString()}
        className='w-full px-4 py-2 text-sm border rounded-md border-slate-200 bg-slate-100 text-slate-700 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500'
      />
    </div>
  );
}
