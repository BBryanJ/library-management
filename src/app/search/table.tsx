import BorrowButton from '@/components/burrow-button';
import { searchBooksByQuery } from '@/utils/data';

// Renders a table of search results with the given query
export default async function Table({ query }: { query: string }) {
  const searchedBooks = await searchBooksByQuery(query); // Get the search results based on the query (defaults to all results if no query is provided)

  return (
    <table className='w-3/4 border border-collapse table-auto border-slate-200'>
      <thead className='bg-slate-400'>
        <tr>
          <th className='px-6 py-3 text-start'>Title</th>
          <th className='px-6 py-3 text-start'>Author</th>
          <th className='px-6 py-3 text-start'>Status</th>
          <th className='px-6 py-3 text-end'></th>
        </tr>
      </thead>
      <tbody className='divide-y divide-slate-200'>
        {searchedBooks.map((book) => {
          return (
            <tr
              key={book.id}
              className='hover:bg-slate-300 hover:cursor-pointer'
            >
              <td className='px-6 py-3 whitespace-nowrap'>{book.title}</td>
              <td className='px-6 py-3 whitespace-nowrap'>{book.author}</td>
              <td className='px-6 py-3 capitalize whitespace-nowrap'>
                {book.status}
              </td>
              <td className='px-6 py-3 text-end'>
                {book.status === 'available' ? (
                  <BorrowButton bookId={book.id} />
                ) : null}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
