import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import LenisProvider from '@/context/LenisContext';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'RightMove — Performance Marketing & Strategy',
  description: 'RightMove turns attention into growth. Premium performance marketing, paid ads, SEO, and digital strategy.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  viewportFit: 'cover',   // enables safe-area-inset-* on notched devices
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      {/* BUG-11 FIX: Removed Tailwind classes (not installed). Styling handled by globals.css */}
      <body>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
