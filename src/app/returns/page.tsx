import { getBorrowedBooksByUser } from '@/utils/data';
import ReturnButton from '@/components/return-button';
import { dateFormatter } from '@/utils/dateFormatter';

export default async function ReturnsPages() {
  const borrowedBooks = await getBorrowedBooksByUser(1);

  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <h3 className='text-3xl font-bold underline'>Returns</h3>
      {borrowedBooks.length === 0 ? (
        <p>You have no books borrowed.</p>
      ) : (
        <table className='w-3/4 border border-collapse table-auto border-slate-200'>
          <thead className='bg-slate-400'>
            <tr>
              <th className='px-6 py-3 text-start'>Title</th>
              <th className='px-6 py-3 text-start'>Author</th>
              <th className='px-6 py-3 text-start'>Due Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody className='divide-y divide-slate-200'>
            {borrowedBooks.map((book) => {
              return (
                <tr
                  key={book.id}
                  className='hover:bg-slate-300 hover:cursor-pointer'
                >
                  <td className='px-6 py-3 whitespace-nowrap'>{book.title}</td>
                  <td className='px-6 py-3 whitespace-nowrap'>{book.author}</td>
                  <td className='px-6 py-3 whitespace-nowrap'>
                    {dateFormatter.format(new Date(book.dueDate))}
                  </td>
                  <td className='px-6 py-3 text-end'>
                    {book.id ? <ReturnButton bookId={book.id} /> : null}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
