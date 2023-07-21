import { Navbar, Footer } from '@/components';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Unique-Nics Events',
  description: 'Unique-Nics Design and Events',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='max-w-3xl mx-auto pt-2'>
        <Navbar />

        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}