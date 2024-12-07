'use client';
import { useRef, useState } from 'react';
import { statusEnum } from '@/db/schema';
import { addBookToDB } from './actions';

export default function AddBookForm() {
  const [isPendingSubmit, setIsPendingSubmit] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const statusOptions = statusEnum.enumValues.map((value) => ({
    value,
    label: value,
  }));

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get('title') as string;
    const author = formData.get('author') as string;
    const status = formData.get('status') as 'available' | 'borrowed';

    if (
      !title ||
      !author ||
      (status !== 'available' && status !== 'borrowed')
    ) {
      alert('Please fill in all fields');
      return;
    }
    setIsPendingSubmit(true);
    try {
      await addBookToDB({ title, author, status });
      formRef.current?.reset();
    } catch (error) {
      alert('ERROR: unable to add book!');
      console.error(error);
    } finally {
      setIsPendingSubmit(false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className='w-1/2 flex flex-col gap-4'
    >
      <div>
        <label
          htmlFor='title'
          className='block text-sm font-medium text-gray-700'
        >
          Title
        </label>
        <input
          required
          type='text'
          id='title'
          name='title'
          className='mt-1 px-4 py-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
        />
      </div>
      <div>
        <label
          htmlFor='author'
          className='block text-sm font-medium text-gray-700'
        >
          Author
        </label>
        <input
          required
          type='text'
          id='author'
          name='author'
          className='mt-1 px-4 py-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
        />
      </div>
      <div>
        <label
          htmlFor='status'
          className='block text-sm font-medium text-gray-700'
        >
          Status
        </label>
        <select
          id='status'
          name='status'
          className='mt-1 px-4 py-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
        >
          <option value=''>Select status</option>
          {statusOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <button
        type='submit'
        disabled={isPendingSubmit}
        className='mt-4 w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-400 disabled:cursor-not-allowed'
      >
        Add Book
      </button>
    </form>
  );
}
