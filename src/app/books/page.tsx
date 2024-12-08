import { getAvailableBooks } from '@/utils/data';
import BorrowButton from '@/components/burrow-button';

// Renders the books page of the app with a table of available books
export default async function BooksPage() {
  const books = await getAvailableBooks();

  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <h3 className='text-3xl font-bold underline'>Available Books</h3>
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
          {books.map((book) => {
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
                  <BorrowButton bookId={book.id} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
