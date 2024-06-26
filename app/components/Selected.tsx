'use client';

import { useContext } from 'react';
import { DataContext, bgColors } from '../_lib/DataContext';
import dataJson from '@/public/assets/data.json';
import Image from 'next/image';

export default function Selected() {
  const { selectionQuiz } = useContext(DataContext);
  if (!selectionQuiz) return <div></div>;

  return (
    <div className="flex items-center justify-between gap-[16px] text-black md:gap-[24px]">
      <div
        className={`${bgColors[selectionQuiz as keyof typeof bgColors]} flex size-[40px] items-center justify-center rounded-[8px] md:size-[56px]`}
      >
        <Image
          className="size-3/4 md:size-fit"
          width={40}
          height={40}
          src={dataJson.quizzes.find((item) => item.title === (selectionQuiz as string))?.icon ?? ''}
          alt={''}
        />
      </div>
      <span className="text-[18px] font-medium leading-[100%] text-[#313E51] transition dark:text-white xl:text-[28px]">
        {selectionQuiz}
      </span>
    </div>
  );
}
