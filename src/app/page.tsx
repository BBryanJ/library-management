import Link from 'next/link';

// Renders out the home page of the app with links to the different actions available
export default function HomePage() {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <h2 className='text-3xl font-bold underline'>Welcome to the library</h2>
      <div className='grid grid-cols-2 gap-4'>
        <Link href='/books'>
          <div className='px-6 py-4 text-center bg-red-400 cursor-pointer hover:bg-red-500'>
            <h3 className='text-2xl font-bold underline'>
              Browse Available Books
            </h3>
          </div>
        </Link>
        <Link href='/add-book'>
          <div className='px-6 py-4 text-center bg-blue-400 cursor-pointer hover:bg-blue-500'>
            <h3 className='text-2xl font-bold underline'>Add a Book</h3>
          </div>
        </Link>
        <Link href='/search'>
          <div className='px-6 py-4 text-center bg-green-400 cursor-pointer hover:bg-green-500'>
            <h3 className='text-2xl font-bold underline'>Search Books</h3>
          </div>
        </Link>
        <Link href='/returns'>
          <div className='px-6 py-4 text-center bg-yellow-400 cursor-pointer hover:bg-yellow-500'>
            <h3 className='text-2xl font-bold underline'>Return Books</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}
