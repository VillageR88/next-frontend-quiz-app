'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import patternBackgroundDesktopLight from '@/public/assets/images/pattern-background-desktop-light.svg';
import patternBackgroundTabletLight from '@/public/assets/images/pattern-background-tablet-light.svg';
import patternBackgroundMobileLight from '@/public/assets/images/pattern-background-mobile-light.svg';
import patternBackgroundDesktopDark from '@/public/assets/images/pattern-background-desktop-dark.svg';
import patternBackgroundTabletDark from '@/public/assets/images/pattern-background-tablet-dark.svg';
import patternBackgroundMobileDark from '@/public/assets/images/pattern-background-mobile-dark.svg';

export default function Background() {
  const [backgroundLight, setBackgroundLight] = useState<string>(patternBackgroundDesktopLight as string);
  const [backgroundDark, setBackgroundDark] = useState<string>(patternBackgroundDesktopDark as string);
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setBackgroundLight(patternBackgroundMobileLight as string);
      setBackgroundDark(patternBackgroundMobileDark as string);
    } else if (window.innerWidth < 1280) {
      setBackgroundLight(patternBackgroundTabletLight as string);
      setBackgroundDark(patternBackgroundTabletDark as string);
    } else {
      setBackgroundLight(patternBackgroundDesktopLight as string);
      setBackgroundDark(patternBackgroundDesktopDark as string);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Image className="imageBackground bg-[#F4F6FA] dark:opacity-0" src={backgroundLight} alt="background pattern" />
      <Image
        className="imageBackground bg-[#313E51] opacity-0 dark:opacity-100"
        src={backgroundDark}
        alt="background pattern"
      />
    </>
  );
}
