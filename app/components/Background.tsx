'use client';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';
import patternBackgroundDesktopLight from '@/public/assets/images/pattern-background-desktop-light.svg';
import patternBackgroundTabletLight from '@/public/assets/images/pattern-background-tablet-light.svg';
import patternBackgroundMobileLight from '@/public/assets/images/pattern-background-mobile-light.svg';
import patternBackgroundDesktopDark from '@/public/assets/images/pattern-background-desktop-dark.svg';
import patternBackgroundTabletDark from '@/public/assets/images/pattern-background-tablet-dark.svg';
import patternBackgroundMobileDark from '@/public/assets/images/pattern-background-mobile-dark.svg';

export default function Background() {
  const [backgroundLight, setBackgroundLight] = useState<StaticImageData>(
    patternBackgroundDesktopLight as StaticImageData,
  );
  const [backgroundDark, setBackgroundDark] = useState<StaticImageData>(
    patternBackgroundDesktopDark as StaticImageData,
  );
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setBackgroundLight(patternBackgroundMobileLight as StaticImageData);
      setBackgroundDark(patternBackgroundMobileDark as StaticImageData);
    } else if (window.innerWidth < 1280) {
      setBackgroundLight(patternBackgroundTabletLight as StaticImageData);
      setBackgroundDark(patternBackgroundTabletDark as StaticImageData);
    } else {
      setBackgroundLight(patternBackgroundDesktopLight as StaticImageData);
      setBackgroundDark(patternBackgroundDesktopDark as StaticImageData);
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
      <Image
        className="imageBackground bg-[#F4F6FA] dark:opacity-0"
        placeholder="blur"
        src={backgroundLight}
        alt="background pattern"
      />
      <Image
        className="imageBackground bg-[#313E51] opacity-0 dark:opacity-100"
        src={backgroundDark}
        alt="background pattern"
        placeholder="blur"
      />
    </>
  );
}
