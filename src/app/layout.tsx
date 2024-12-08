import Navbar from '@/components/navbar';
import './globals.css';

// Renders the root layout for the app with a navbar and the pages content (children)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <header className='w-full py-3 text-sm bg-white'>
          <Navbar />
        </header>
        <div className='mt-6'>{children}</div>
      </body>
    </html>
  );
}
