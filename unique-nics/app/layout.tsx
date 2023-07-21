import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Unique-Nics Events',
  description: 'Unique-Nics Design and Events website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}