import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'tsgabrielle',
  description: 'Headless MACH boutique commerce experience'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
