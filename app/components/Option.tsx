'use client';
import { DataContext } from '../_lib/DataContext';
import { useContext } from 'react';
import dataJson from '@/public/assets/data.json';

export default function Option() {
  const { progress, selectionQuiz } = useContext(DataContext);

  if (!progress || progress > 10) return;
  const items = {
    title: `Question ${progress.toString()} of 10`,
    description: dataJson.quizzes.find((item) => item.title === (selectionQuiz as string))?.questions[progress - 1]
      .question,
  };
  return (
    <section className="flex flex-col gap-[12px] md:gap-[27px]">
      <h1 className="text-[14px] font-light italic leading-[150%] text-[#626C7F] transition dark:text-white md:text-[20px]">
        {items.title}
      </h1>
      <span className="text-[20px] font-medium leading-[120%] text-[#313E51] transition dark:text-white md:text-[36px]">
        {items.description}
      </span>
    </section>
  );
}
