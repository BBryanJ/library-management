'use client';

import { updateBorrowedBookToDB } from '@/app/actions';

// Renders a button that allows the user to return a borrowed book
export default function ReturnButton({ bookId }: { bookId: number }) {
  return (
    <button
      onClick={() => updateBorrowedBookToDB(bookId)}
      className='px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-700'
    >
      Return
    </button>
  );
}
