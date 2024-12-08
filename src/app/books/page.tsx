import { getAvailableBooks } from '@/utils/data';

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
                  <button className='px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-700'>
                    Borrow
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
