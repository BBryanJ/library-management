'use client';

import { searchBorrowAction, booksBorrowAction } from '@/app/actions';
import { usePathname } from 'next/navigation';

// Renders a button that allows the user to borrow a book
export default function BorrowButton({ bookId }: { bookId: number }) {
  const pathname = usePathname(); // Get the current pathname
  return (
    <button
      onClick={() => {
        if (pathname === '/books') {
          // If the current pathname is /books, call the booksBorrowAction function
          booksBorrowAction(bookId);
        } else if (pathname === '/search') {
          // If the current pathname is /search, call the searchBorrowAction function
          searchBorrowAction(bookId);
        }
      }}
      className='px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-700'
    >
      Borrow
    </button>
  );
}
