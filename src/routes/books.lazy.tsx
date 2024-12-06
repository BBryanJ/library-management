import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/books')({
  component: RouteComponent,
});

function RouteComponent() {
  return <h3>Available Books</h3>;
}
