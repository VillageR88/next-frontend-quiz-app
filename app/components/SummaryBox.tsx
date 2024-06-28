'use client';
import Selected from './Selected';
import { DataContext } from '../_lib/DataContext';
import { useContext } from 'react';

const ofTotal = 'out of 10';

export default function SummaryBox() {
  const { score, progress } = useContext(DataContext);
  if (progress !== 11) return null;
  return (
    <div className="flex h-[242px] flex-col items-center justify-center gap-[16px] rounded-[24px] bg-white transition dark:bg-[#3B4D66] md:h-[388px] md:w-[564px]">
      <Selected />
      <span className="text-[88px] font-medium leading-[100%] tracking-[normal] text-[#313E51] transition dark:text-white md:mt-[24px] md:text-[144px]">
        {score}
      </span>
      <span className="text-[18px] leading-[100%] tracking-normal text-[#626C7F] transition dark:text-[#ABC1E1] md:text-[24px] md:leading-[150%]">
        {ofTotal}
      </span>
    </div>
  );
}
