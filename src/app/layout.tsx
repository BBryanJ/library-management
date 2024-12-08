import Navbar from '@/components/navbar';
import './globals.css';

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
        {children}
      </body>
    </html>
  );
}
