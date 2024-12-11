import Link from 'next/link';

// Renders a navigation bar with links to different pages
export default function Navbar() {
  return (
    <nav className='flex flex-wrap items-center justify-between w-full max-w-screen-xl px-4 mx-auto basis-full'>
      <Link
        href='/'
        className='flex-none text-xl font-semibold text-gray-600 hover:text-gray-400'
      >
        Library Management
      </Link>
      <div className='flex flex-col items-center lg:hidden gap-y-2'>
        <button type='button' className='w-6 h-6 p-1'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-6 h-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
          <span className='sr-only'>Toggle menu</span>
        </button>
      </div>
      <div className='items-center flex-1 hidden w-auto lg:flex justify-evenly gap-x-4'>
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
        <Link
          href='/about'
          className='font-medium text-gray-600 hover:text-gray-400'
        >
          About
        </Link>
      </div>
    </nav>
  );
}
