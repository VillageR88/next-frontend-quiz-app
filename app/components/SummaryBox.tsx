'use client';
import Selected from './Selected';
import { DataContext } from '../_lib/DataContext';
import { useContext } from 'react';

const ofTotal = 'out of 10';

export default function SummaryBox() {
  const { score } = useContext(DataContext);
  return (
    <div className="flex h-[388px] w-[564px] flex-col items-center justify-center rounded-[24px] bg-white transition dark:bg-[#3B4D66]">
      <Selected />
      <span className="text-[144px] font-medium tracking-normal text-[#313E51] transition dark:text-white">
        {score}
      </span>
      <span className="text-[24px] leading-[150%] tracking-normal text-[#626C7F] transition dark:text-[#ABC1E1]">
        {ofTotal}
      </span>
    </div>
  );
}
