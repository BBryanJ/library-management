'use client';
import { useRef, useState } from 'react';
import { statusEnum } from '@/db/schema';
import { addBookToDB } from './actions';

// Renders a form for adding a new book to the database
export default function AddBookForm() {
  const [isPendingSubmit, setIsPendingSubmit] = useState(false); // State for pending submit
  const formRef = useRef<HTMLFormElement>(null);

  // Generate an array of status options for the select element
  const statusOptions = statusEnum.enumValues.map((value) => ({
    value,
    label: value,
  }));

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget); // Get form data
    const title = formData.get('title') as string; // Get title from form data and set it as a string
    const author = formData.get('author') as string; // Get author from form data and set it as a string
    const status = formData.get('status') as 'available' | 'borrowed'; // Get status from form data and set it as eitehr 'available' or 'borrowed'

    // Check if all fields are filled
    if (
      !title ||
      !author ||
      (status !== 'available' && status !== 'borrowed')
    ) {
      alert('Please fill in all fields');
      return;
    }
    setIsPendingSubmit(true); // Set isPendingSubmit to true
    try {
      await addBookToDB({ title, author, status }); // Call addBookToDB function with the form data
      formRef.current?.reset(); // Resets the fields in the form
    } catch (error) {
      alert('ERROR: unable to add book!');
      console.error(error);
    } finally {
      setIsPendingSubmit(false); // Set isPendingSubmit to false after the try-catch block is executed
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className='flex flex-col w-1/2 gap-4'
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
          className='block w-full px-4 py-3 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
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
          className='block w-full px-4 py-3 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
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
          className='block w-full px-4 py-3 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
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
        className='w-full px-3 py-2 mt-4 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-400 disabled:cursor-not-allowed'
      >
        Add Book
      </button>
    </form>
  );
}
