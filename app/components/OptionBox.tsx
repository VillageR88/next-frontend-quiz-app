'use client';
import Image from 'next/image';
import imageCorrect from '@/public/assets/images/icon-correct.svg';
import imageIncorrect from '@/public/assets/images/icon-incorrect.svg';
import dataJSON from '@/public/assets/data.json';
import { useContext } from 'react';
import { DataContext, bgColors } from '../_lib/DataContext';
import { Selection } from '@/app/_lib/interfaces';

const abcd = ['A', 'B', 'C', 'D'];

interface ChoiceBarQuizProps {
  src: string;
  desc: string;
}

interface ChoiceBarOptionsProps {
  desc: string;
  index: number;
  letter: string;
}

const ChoiceBarQuiz = ({ src, desc }: ChoiceBarQuizProps) => {
  const { setSelectionQuiz, setProgress } = useContext(DataContext);
  return (
    <button
      onClick={() => {
        setSelectionQuiz(desc as Selection);
        setProgress(1);
      }}
      aria-label={desc}
      type="button"
      className="group/buttonOption flex h-[64px] w-full items-center gap-[32px] rounded-[12px] bg-white pl-[12px] shadow-[0_10px_50px_-15px_rgba(143,160,193,0.5)] transition dark:bg-[#3B4D66] dark:shadow-none md:h-[80px] md:rounded-[24px] md:pl-[20px] xl:h-[96px]"
    >
      <div
        className={`${bgColors[desc as keyof typeof bgColors]} flex size-[40px] items-center justify-center rounded-[8px] md:size-[56px]`}
      >
        <Image className="size-fit" width={40} height={40} src={src} alt={desc} />
      </div>

      <span className="text-start text-[18px] font-medium leading-[100%] text-[#313E51] transition dark:text-white xl:text-[28px]">
        {desc}
      </span>
    </button>
  );
};
const correct = 'correct';
const incorrect = 'incorrect';
const IconCheck = ({
  index,
  isCorrect,
  answer,
  currentOption,
}: {
  index: number;
  isCorrect: boolean;
  answer: string;
  currentOption: string;
}) => {
  const { showCorrect, selectionOption } = useContext(DataContext);
  return showCorrect && (index === selectionOption || answer === currentOption) ? (
    <Image
      className="size-[30px]"
      width={30}
      height={30}
      src={isCorrect || answer === currentOption ? (imageCorrect as string) : (imageIncorrect as string)}
      alt={isCorrect || answer === currentOption ? correct : incorrect}
    />
  ) : (
    <div className="size-[36px]"></div>
  );
};

const ChoiceBarOptions = ({ desc, index, letter }: ChoiceBarOptionsProps) => {
  const { setSelectionOption, selectionOption, showCorrect, selectionQuiz, progress } = useContext(DataContext);
  const quiz = dataJSON.quizzes.find((item) => item.title === (selectionQuiz as string));
  if (!quiz) return null;
  const selection = quiz.questions[progress - 1];
  const answer = selection.answer;
  const currentOption = selection.options[index];
  const isCorrect = selection.options[selectionOption as keyof typeof selection.options] === answer;
  return (
    <button
      onClick={() => {
        if (!showCorrect) setSelectionOption(index);
      }}
      aria-label={desc}
      type="button"
      className={`${selectionOption === index ? (showCorrect ? (isCorrect ? 'outline-[#26D782]' : 'outline-[#EE5454]') : 'outline-[#A729F5]') : 'outline-[#A729F5]/0'} group/buttonOption flex h-[64px] w-full items-center gap-[16px] rounded-[12px] bg-white pl-[20px] pr-[12px] shadow-[0_10px_50px_-15px_rgba(143,160,193,0.5)] outline outline-[3px] transition dark:bg-[#3B4D66] dark:shadow-none md:h-[80px] md:gap-[32px] md:rounded-[24px] md:pr-[31px] xl:h-[96px]`}
    >
      <div
        className={`transition ${selectionOption === index ? (showCorrect ? (isCorrect ? 'bg-[#26D782]' : 'bg-[#EE5454]') : 'bg-[#A729F5]') : `bg-[#F4F6FA] ${showCorrect ? '' : 'group-hover/buttonOption:bg-[#F6E7FF]'}`} flex size-[40px] min-w-[40px] items-center justify-center rounded-[8px] md:size-[56px] md:min-w-[56px]`}
      >
        <span
          className={`transition ${selectionOption === index ? 'text-white' : ` ${showCorrect ? '' : 'group-hover/buttonOption:text-[#A729F5]'}`} text-[18px] font-medium leading-[100%] text-[#626C7F] md:text-[28px]`}
        >
          {letter}
        </span>
      </div>
      <span className="w-full text-start text-[18px] font-medium leading-[100%] text-[#313E51] transition dark:text-white xl:text-[28px]">
        {desc}
      </span>
      <IconCheck index={index} isCorrect={isCorrect} answer={answer} currentOption={currentOption} />
    </button>
  );
};

export default function OptionBox() {
  const { progress, selectionQuiz } = useContext(DataContext);
  if (progress > 10) return null;
  const listAnswers = dataJSON.quizzes.find((item) => item.title === (selectionQuiz as string))?.questions[progress - 1]
    .options;
  return (
    <div className="flex h-[292px] flex-col justify-between md:h-[392px] md:w-[564px] xl:h-[440px]">
      {progress === 0 &&
        dataJSON.quizzes.map((subject) => (
          <ChoiceBarQuiz src={subject.icon} desc={subject.title} key={subject.title} />
        ))}
      {progress > 0 &&
        progress < 11 &&
        selectionQuiz &&
        listAnswers?.map((option, index) => (
          <ChoiceBarOptions index={index} desc={option} letter={abcd[index]} key={option} />
        ))}
    </div>
  );
}
