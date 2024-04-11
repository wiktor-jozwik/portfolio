import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Wiktor Jóźwik's portfolio",
  description:
    'I am Wiktor Jóźwik, a Backend Software Engineer specializing in Node.js, NestJS, and TypeScript. I transform business ideas into efficient code.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`bg-gradient-diagonal bg-black min-h-screen text-gray-50 ${inter.className}`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId='G-4BBC8TEFF3' />
    </html>
  );
}
