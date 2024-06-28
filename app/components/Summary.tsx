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
      <span className="text-[64px] font-light leading-[100%] text-[#313E51] transition dark:text-white">
        {items.line1}
      </span>
      <span className="mt-[8px] text-[64px] font-medium leading-[100%] text-[#313E51] transition dark:text-white">
        {items.line2}
      </span>
    </section>
  );
}
