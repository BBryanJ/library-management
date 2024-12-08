'use client';

import { searchBorrowAction, booksBorrowAction } from '@/app/actions';
import { usePathname } from 'next/navigation';
export default function BorrowButton({ bookId }: { bookId: number }) {
  const pathname = usePathname();
  return (
    <button
      onClick={() => {
        if (pathname === '/books') {
          booksBorrowAction(bookId);
        } else if (pathname === '/search') {
          searchBorrowAction(bookId);
        }
      }}
      className='px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-700'
    >
      Borrow
    </button>
  );
}
