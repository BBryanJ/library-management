'use client';

import { addBorrowedBookToDB } from './actions';
export default function BorrowButton({ bookId }: { bookId: number }) {
  return (
    <button
      onClick={() => addBorrowedBookToDB(bookId)}
      className='px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-700'
    >
      Borrow
    </button>
  );
}
