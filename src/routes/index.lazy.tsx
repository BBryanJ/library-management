import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: About,
});

function About() {
  return (
    <div>
      <h2>Welcome to the library</h2>
    </div>
  );
}
