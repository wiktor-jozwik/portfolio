import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Wiktor Jóźwik's portfolio",
  description: 'wiktorjozwik.com portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`bg-gradient-diagonal h-screen text-gray-50 ${inter.className}`}>{children}</body>
    </html>
  );
}
