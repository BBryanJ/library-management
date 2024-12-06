import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      <nav className='navbar'>
        <Link to='/' className='link'>
          Library Home
        </Link>
        <Link to='/books' className='link'>
          Browse Available Books
        </Link>
        <Link to='/add-book' className='link'>
          Add New Book
        </Link>
        <Link to='/about' className='link'>
          About
        </Link>
      </nav>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
