import { getAvailableBooks } from '@/utils/data';

export default async function BooksPage() {
  const books = await getAvailableBooks();

  return (
    <div className='flex flex-col gap-4 justify-center items-center'>
      <h3 className='text-3xl font-bold underline'>Available Books</h3>
      <table className=' w-3/4 table-auto border-collapse border border-slate-200'>
        <thead className='bg-slate-400'>
          <tr>
            <th className='px-6 py-3 text-start'>Title</th>
            <th className='px-6 py-3 text-start'>Author</th>
            <th className='px-6 py-3 text-start'>Status</th>
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
                <td className='px-6 py-3 whitespace-nowrap'>{book.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
