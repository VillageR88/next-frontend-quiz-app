'use client';
import { DataContext } from '../_lib/DataContext';
import { useContext } from 'react';
const items = {
  line1: 'Welcome to the',
  line2: 'Frontend Quiz!',
  line3: 'Pick a subject to get started.',
};

export default function Welcome() {
  const { progress } = useContext(DataContext);
  if (progress !== 0) return;
  return (
    <section className="flex flex-col">
      <span className="text-[40px] font-light leading-[100%] text-[#313E51] transition dark:text-white md:text-[64px]">
        {items.line1}
      </span>
      <span className="mt-[8px] text-[40px] font-medium leading-[100%] text-[#313E51] transition dark:text-white md:text-[64px]">
        {items.line2}
      </span>
      <span className="mt-[16px] text-[14px] italic leading-[150%] text-[#626C7F] transition dark:text-[#ABC1E1] md:text-[20px] xl:mt-[48px]">
        {items.line3}
      </span>
    </section>
  );
}
