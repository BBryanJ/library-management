import Link from 'next/link';

// Renders a navigation bar with links to different pages
export default function Navbar() {
  return (
    <nav className='flex flex-wrap items-center justify-between w-full max-w-screen-xl px-4 mr-auto basis-full'>
      <Link
        href='/'
        className='flex-none text-xl font-semibold text-gray-600 hover:text-gray-400'
      >
        Library Management
      </Link>
      <div className='flex items-center justify-between flex-1 w-auto gap-x-4'>
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
        <Link
          href='/returns'
          className='font-medium text-gray-600 hover:text-gray-400'
        >
          Return Books
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
