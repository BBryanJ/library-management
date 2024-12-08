import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='flex flex-wrap items-center justify-between w-full max-w-screen-lg px-4 mx-auto basis-full'>
      <Link
        href='/'
        className='flex-none text-xl font-semibold text-gray-600 hover:text-gray-400'
      >
        Library Management
      </Link>
      <div className='flex items-center gap-x-4'>
        <Link
          href='/books'
          className='font-medium text-gray-600 hover:text-gray-400'
        >
          Available Books
        </Link>
        <Link
          href='/add-book'
          className='font-medium text-gray-600 hover:text-gray-400'
        >
          Add Book
        </Link>
        <Link
          href='/search'
          className='font-medium text-gray-600 hover:text-gray-400'
        >
          Search Books
        </Link>
      </div>
      <Link
        href='/about'
        className='font-medium text-gray-600 hover:text-gray-400'
      >
        About
      </Link>
    </nav>
  );
}
