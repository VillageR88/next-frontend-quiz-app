'use client';

import { useEffect, useState, useRef } from 'react';

enum Theme {
  dark = 'dark',
  light = 'light',
}

export default function ButtonTheme() {
  const ref = useRef<HTMLButtonElement>(null);
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    if (theme === null) {
      const value = localStorage.getItem('theme');
      if (value === Theme.dark || value === Theme.light) setTheme(value as Theme);
      else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
        setTheme(Theme.dark);
      } else {
        setTheme(Theme.light);
      }
    }
  }, [theme]);

  useEffect(() => {
    if (theme !== null) {
      if (theme === Theme.dark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', Theme.dark);
        setTheme(Theme.dark);
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', Theme.light);
        setTheme(Theme.light);
      }
    }
  }, [theme]);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.remove('hidden');
    }
  }, [theme]);

  if (!theme) return null;

  return (
    <button
      type="button"
      title="Toggle Theme"
      ref={ref}
      onClick={() => {
        theme === Theme.dark ? setTheme(Theme.light) : setTheme(Theme.dark);
      }}
      className="flex items-center gap-[16px] fill-white transition"
    >
      <svg
        className="size-[16px] fill-[#626C7F] transition-colors dark:fill-white md:size-[24px]"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M12 1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 1 1-1.5 0v-1.5A.75.75 0 0 1 12 1.5Zm0 15a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-1.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm9.75-2.25a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 1 0 0 1.5h1.5ZM12 19.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 1 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Zm-8.25-6.75a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 1 0 0 1.5h1.5Zm.969-8.031a.75.75 0 0 1 1.062 0l1.5 1.5a.751.751 0 0 1-1.062 1.062l-1.5-1.5a.75.75 0 0 1 0-1.062Zm1.062 14.562a.75.75 0 1 1-1.062-1.06l1.5-1.5a.75.75 0 1 1 1.062 1.06l-1.5 1.5Zm13.5-14.562a.75.75 0 0 0-1.062 0l-1.5 1.5a.751.751 0 0 0 1.062 1.062l1.5-1.5a.75.75 0 0 0 0-1.062Zm-1.062 14.562a.75.75 0 0 0 1.062-1.06l-1.5-1.5a.75.75 0 0 0-1.062 1.06l1.5 1.5Z" />
      </svg>
      <div className="flex h-[20px] w-[32px] items-center justify-center rounded-[14.5px] border border-[rgba(0,0,0,0.2)] bg-[#A729F5] transition-colors md:h-[28px] md:w-[48px]">
        <div className="size-[12px] -translate-x-1.5 rounded-full bg-white transition dark:translate-x-1.5 md:size-[20px] md:-translate-x-2 md:dark:translate-x-2"></div>
      </div>
      <svg
        className="size-[16px] fill-[#626C7F] transition-colors dark:fill-white md:size-[24px]"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M11.775 4.522A7.5 7.5 0 1 1 4.898 16.09c2.104-.57 4.974-1.953 6.24-5.326.828-2.211.876-4.408.637-6.241ZM20.184 12a8.997 8.997 0 0 0-9.315-8.994.75.75 0 0 0-.713.888c.345 1.821.42 4.092-.424 6.342-1.2 3.201-4.203 4.26-6.115 4.606a.75.75 0 0 0-.542 1.066A9 9 0 0 0 20.184 12Z" />
      </svg>
    </button>
  );
}
