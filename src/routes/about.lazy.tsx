import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/about')({
  component: Index,
});

function Index() {
  return (
    <div>
      <h3>About Page</h3>
    </div>
  );
}
