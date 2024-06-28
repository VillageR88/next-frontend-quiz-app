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
import Summary from './components/Summary';
import SummaryBox from './components/SummaryBox';

export default async function Home() {
  return (
    <div className="flex h-screen min-h-full items-center xl:w-full">
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
      <div className="relative mx-auto flex h-full max-w-[1160px] flex-col items-center xl:w-full">
        <div className="flex size-full min-h-[1024px] flex-col items-center justify-center xl:min-h-[960px]">
          <div className="flex h-[56px] w-full justify-between pt-[40px]">
            <Selected />
            <ButtonTheme />
          </div>
          <div className="mt-[85px] flex min-h-[564px] w-full flex-col justify-between gap-[64px] xl:flex-row">
            <div className="flex h-[452px] max-h-full w-[453px] flex-col justify-between">
              <Welcome />
              <Option />
              <Summary />
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
