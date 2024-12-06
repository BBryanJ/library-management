import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/add-book')({
  component: RouteComponent,
});

function RouteComponent() {
  return <h3>Add New Book</h3>;
}
