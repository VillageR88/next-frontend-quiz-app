'use client';
import { DataContext } from '../_lib/DataContext';
import { useContext } from 'react';

export default function ProgressBar() {
  const { progress } = useContext(DataContext);
  if (!progress || progress > 10) return;
  return (
    <div className="h-[16px] w-full rounded-full bg-white p-[4px] transition dark:bg-[#3B4D66]">
      <div
        style={{ width: `${((progress / 10) * 100).toString()}%` }}
        className="h-full rounded-full bg-[#A729F5]"
      ></div>
    </div>
  );
}
