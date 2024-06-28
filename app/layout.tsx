import './globals.css';
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import { ReactNode } from 'react';
import DataContext from '@/app/_lib/DataContext';
import Image from 'next/image';
import patternBackgroundDesktopLight from '@/public/assets/images/pattern-background-desktop-light.svg';
import patternBackgroundDesktopDark from '@/public/assets/images/pattern-background-desktop-dark.svg';

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

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className="hidden" lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
        <meta property="og:image" content={undefined} />
      </head>
      <body className={`${rubik.variable} mx-auto w-full overflow-x-clip font-rubik`}>
        <Image
          className="imageBackground bg-[#F4F6FA] dark:opacity-0"
          src={(await patternBackgroundDesktopLight) as string}
          alt="background pattern"
        />
        <Image
          className="imageBackground bg-[#313E51] opacity-0 dark:opacity-100"
          src={(await patternBackgroundDesktopDark) as string}
          alt="background pattern"
        />
        <DataContext>{children}</DataContext>
      </body>
    </html>
  );
}
