'use client';
import { DataContext } from '../_lib/DataContext';
import { useContext } from 'react';
const title = 'Submit Answer';

export default function ButtonSubmit() {
  const { progress } = useContext(DataContext);
  if (!progress) return;
  return (
    <button
      type="button"
      className="group/button h-[92px] w-full rounded-[24px] bg-[#A729F5] text-[28px] font-medium leading-[100%] text-white"
    >
      <div className="flex size-full items-center justify-center rounded-[24px] transition group-hover/button:bg-white/50">
        {title}
      </div>
    </button>
  );
}
