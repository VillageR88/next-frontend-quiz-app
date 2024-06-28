'use client';
import { DataContext } from '../_lib/DataContext';
import { useContext } from 'react';
const items = {
  line1: 'Quiz completed',
  line2: 'You scored...',
};

export default function Summary() {
  const { progress } = useContext(DataContext);
  if (progress < 11) return;
  return (
    <section className="flex flex-col">
      <h1 className="text-[40px] font-light leading-[100%] text-[#313E51] transition dark:text-white md:text-[64px]">
        {items.line1}
      </h1>
      <p className="mt-[8px] text-[40px] font-medium leading-[100%] text-[#313E51] transition dark:text-white md:text-[64px]">
        {items.line2}
      </p>
    </section>
  );
}
