import ButtonTheme from '@/app/components/ButtonTheme';

import OptionBox from '@/app/components/OptionBox';
import Selected from '@/app/components/Selected';
import ProgressBar from './components/ProgressBar';
import ButtonSubmit from './components/ButtonSubmit';
import Welcome from './components/Welcome';
import Option from './components/Option';
import Summary from './components/Summary';
import SummaryBox from './components/SummaryBox';

export default function Home() {
  return (
    <div className="mx-auto flex size-full min-h-dvh max-w-[375px] flex-col items-center justify-center md:min-h-screen md:w-fit md:max-w-[1160px] xl:w-full">
      <div className="flex size-full min-h-full flex-col items-center justify-center p-[24px] md:px-0 md:py-[40px]">
        <div className="flex h-[56px] w-full justify-between">
          <Selected />
          <ButtonTheme />
        </div>
        <div className="mt-[58px] flex w-full flex-col justify-between gap-[40px] md:mt-[85px] md:gap-[64px] xl:flex-row">
          <div className="flex flex-col justify-between gap-[24px] md:w-[453px] md:gap-[40px] xl:max-h-[452px]">
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
  );
}
