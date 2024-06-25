'use client';

import { useContext } from 'react';
import { DataContext, bgColors } from '../_lib/DataContext';
import dataJson from '@/public/assets/data.json';
import Image from 'next/image';

export default function Selected() {
  const { selection } = useContext(DataContext);
  if (!selection) return <div></div>;

  return (
    <div className="flex items-center justify-between gap-[24px] text-black">
      <div
        className={`${bgColors[selection as keyof typeof bgColors]} flex size-[56px] items-center justify-center rounded-[8px]`}
      >
        <Image
          className="size-fit"
          width={40}
          height={40}
          src={dataJson.quizzes.find((item) => item.title === (selection as string))?.icon ?? ''}
          alt={dataJson.quizzes.find((item) => item.title === (selection as string))?.title ?? ''}
        />
      </div>
      <span className="text-[28px] font-medium leading-[100%] text-[#313E51] transition dark:text-white">
        {selection}
      </span>
    </div>
  );
}
