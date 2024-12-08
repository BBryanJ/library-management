// Renders the about page of the app
export default function AboutPage() {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <h3 className='text-3xl font-bold underline'>About</h3>
      <p className='text-xl'>
        This is a simple library management system built with{' '}
        <a
          href='https://nextjs.org/'
          target='_blank'
          rel='noreferrer'
          className='text-blue-400 hover:text-blue-500 hover:underline'
        >
          Next.js
        </a>{' '}
        and{' '}
        <a
          href='https://orm.drizzle.team/'
          target='_blank'
          rel='noreferrer'
          className='text-blue-400 hover:text-blue-500 hover:underline'
        >
          Drizzle ORM
        </a>
        .
      </p>
      <p className='text-xl'>
        You can find the source code for this project on{' '}
        <a
          href='https://github.com/BBryanJ/library-management'
          target='_blank'
          rel='noreferrer'
          className='text-blue-400 hover:text-blue-500 hover:underline'
        >
          the Github repository
        </a>
      </p>
    </div>
  );
}
