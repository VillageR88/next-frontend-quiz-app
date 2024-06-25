'use client';
import Image from 'next/image';
import dataJSON from '@/public/assets/data.json';
import { useContext } from 'react';
import { DataContext, bgColors } from '../_lib/DataContext';
import { Selection } from '@/app/_lib/interfaces';

const ChoiceBar = ({
  image: { src, alt },
}: {
  image: {
    src: string;
    alt: string;
  };
}) => {
  const { setSelection, setProgress } = useContext(DataContext);

  return (
    <button
      onClick={() => {
        setSelection(alt as Selection);
        setProgress(1);
      }}
      aria-label={alt}
      type="button"
      className="flex h-[96px] w-full items-center gap-[32px] rounded-[24px] bg-white pl-[20px] shadow-[0_10px_50px_-15px_rgba(143,160,193,0.5)] transition dark:bg-[#3B4D66] dark:shadow-none"
    >
      <div
        className={`${bgColors[alt as keyof typeof bgColors]} flex size-[56px] items-center justify-center rounded-[8px]`}
      >
        <Image className="size-fit" width={40} height={40} src={src} alt={alt} />
      </div>
      <span className="text-[28px] font-medium leading-[100%] text-[#313E51] transition dark:text-white">{alt}</span>
    </button>
  );
};

export default function AnswerBox() {
  return (
    <div className="flex h-[440px] w-[564px] flex-col justify-between">
      {dataJSON.quizzes.map((subject) => (
        <ChoiceBar image={{ src: subject.icon, alt: subject.title }} key={subject.title} />
      ))}
    </div>
  );
}
