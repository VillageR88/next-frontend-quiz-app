import ButtonTheme from '@/app/components/ButtonTheme';
import Image from 'next/image';
import patternBackgroundDesktopLight from '@/public/assets/images/pattern-background-desktop-light.svg';
import patternBackgroundDesktopDark from '@/public/assets/images/pattern-background-desktop-dark.svg';
import OptionBox from '@/app/components/OptionBox';
import Selected from '@/app/components/Selected';
import ProgressBar from './components/ProgressBar';
import ButtonSubmit from './components/ButtonSubmit';
import Welcome from './components/Welcome';
import Option from './components/Option';
import SummaryBox from './components/SummaryBox';

export default async function Home() {
  return (
    <div className="flex size-full min-h-screen items-center">
      <Image
        className="imageBackground bg-[#F4F6FA] dark:opacity-0"
        src={(await patternBackgroundDesktopLight) as string}
        alt="background pattern"
      />
      <Image
        className="imageBackground bg-[#313E51] opacity-0 dark:opacity-100"
        src={(await patternBackgroundDesktopDark) as string}
        alt="background pattern"
      />
      <div className="relative mx-auto flex size-full min-h-screen max-w-[1160px] items-center">
        <div className="size-full h-[960px] max-h-screen pb-[280px] pt-[97px]">
          <div className="flex h-[56px] w-full justify-between">
            <Selected />
            <ButtonTheme />
          </div>
          <div className="mt-[85px] flex h-[564px] w-full justify-between">
            <div className="flex h-[452px] max-h-full w-[453px] flex-col justify-between">
              <Welcome />
              <Option />
              <ProgressBar />
            </div>
            <div className="flex h-full flex-col justify-start gap-[32px]">
              <OptionBox />
              <SummaryBox />
              <ButtonSubmit />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
