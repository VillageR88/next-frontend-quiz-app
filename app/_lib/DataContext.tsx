'use client';

import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';
import { Selection } from '@/app/_lib/interfaces';

export const bgColors = {
  HTML: 'bg-[#FFF1E9]',
  CSS: 'bg-[#E0FDEF]',
  JavaScript: 'bg-[#EBF0FF]',
  Accessibility: 'bg-[#F6E7FF]',
};

export const DataContext = createContext(
  {} as {
    selection: Selection | null;
    setSelection: Dispatch<SetStateAction<Selection | null>>;
    progress: number;
    setProgress: Dispatch<SetStateAction<number>>;
  },
);

export default function DataProvider({ children }: { children: ReactNode }) {
  const [selection, setSelection] = useState<Selection | null>(null);
  const [progress, setProgress] = useState<number>(0);

  return (
    <DataContext.Provider
      value={{
        selection,
        setSelection,
        progress,
        setProgress,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
