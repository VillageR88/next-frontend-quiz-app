import './globals.css';
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import { ReactNode } from 'react';
import Image from 'next/image';
import patternBackgroundDesktopLight from '@/public/assets/images/pattern-background-desktop-light.svg';

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
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
        <meta property="og:image" content={undefined} />
      </head>
      <body
        className={`${rubik.variable} mx-auto flex min-h-screen w-full items-center justify-center overflow-x-clip bg-[#EDF1F9] font-rubik`}
      >
        <div className="bg-[#F4F6FA]">
          <Image className="" src={patternBackgroundDesktopLight as string} alt="background pattern" />
          {children}
        </div>
      </body>
    </html>
  );
}
