import AddBookForm from '@/app/add-book/add-book-form';

// Renders the add book page of the app with a form for adding a new book
export default function AddBookPage() {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <h3 className='text-3xl font-bold underline'>Add Book</h3>
      <AddBookForm />
    </div>
  );
}
