'use client';
import { DataContext } from '../_lib/DataContext';
import { useContext } from 'react';
import dataJSON from '@/public/assets/data.json';
const titleSubmit = 'Submit Answer';
const titleNext = 'Next Question';
const titleReplay = 'Play Again';

export default function ButtonSubmit() {
  const {
    progress,
    setShowCorrect,
    showCorrect,
    setProgress,
    setScore,
    setSelectionOption,
    selectionOption,
    selectionQuiz,
    setSelectionQuiz,
  } = useContext(DataContext);
  const quiz = dataJSON.quizzes.find((item) => item.title === (selectionQuiz as string));
  if (!quiz) return null;
  if (!progress) return;
  let selection: { answer: string; options: string[] };
  let answer: string;
  let isCorrect: boolean;
  if (progress < 11) {
    selection = quiz.questions[progress - 1];
    answer = selection.answer;
    isCorrect = selection.options[selectionOption as keyof typeof selection.options] === answer;
  }
  return (
    <button
      onClick={() => {
        if (progress < 11) {
          if (selectionOption !== null) {
            setShowCorrect((prev) => !prev);
            isCorrect && !showCorrect && setScore((prev) => prev + 1);
          }
          if (showCorrect) {
            setProgress((prev) => prev + 1);
            setSelectionOption(null);
          }
        } else {
          setProgress(0);
          setScore(0);
          setSelectionQuiz(null);
        }
      }}
      type="button"
      className="group/button h-[92px] w-full rounded-[24px] bg-[#A729F5] text-[28px] font-medium leading-[100%] text-white"
    >
      <div className="flex size-full items-center justify-center rounded-[24px] transition group-hover/button:bg-white/50">
        {progress < 11 ? (showCorrect ? titleNext : titleSubmit) : titleReplay}
      </div>
    </button>
  );
}
