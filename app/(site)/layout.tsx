import { Navbar, HeroHeader, Footer } from './components';
import '../globals.css';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Unique-Nics Design & Events',
  description: 'Unique-Nics Design and Events',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className='bg-repeat glamorous-white-light-coral pb-5'>
      <body className='max-w-3xl mx-auto pt-2'>
        <div>

          <Navbar />

          <HeroHeader />

          <main>
            {children}
          </main>

          <Footer />

        </div>
      </body>
    </html>
  );
}