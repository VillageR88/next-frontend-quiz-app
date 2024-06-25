import './globals.css';
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import { ReactNode } from 'react';

const rubik = Rubik({
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-rubik',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Frontend Quiz app',
  description: 'Frontend Quiz app',
  applicationName: 'Frontend Quiz app',
} as const;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className="hidden" lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
        <meta property="og:image" content={undefined} />
      </head>
      <body className={`${rubik.variable} mx-auto w-full overflow-x-clip font-rubik`}>{children}</body>
    </html>
  );
}
