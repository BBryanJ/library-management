import AddBookForm from '@/app/add-book/add-book-form';
export default function AddBookPage() {
  return (
    <div className='flex flex-col gap-4 justify-center items-center'>
      <h3 className='text-3xl font-bold underline'>Add Book</h3>
      <AddBookForm />
    </div>
  );
}
