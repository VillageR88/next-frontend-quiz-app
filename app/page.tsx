import ButtonTheme from './components/ButtonTheme';
import Image from 'next/image';
import patternBackgroundDesktopLight from '@/public/assets/images/pattern-background-desktop-light.svg';
import patternBackgroundDesktopDark from '@/public/assets/images/pattern-background-desktop-dark.svg';

const ChoiceBar = () => {
  return (
    <button
      type="button"
      className="flex h-[96px] w-full rounded-[24px] bg-white shadow-[0_10px_50px_-15px_rgba(143,160,193,0.5)] transition dark:bg-[#3B4D66] dark:shadow-none"
    ></button>
  );
};

export default function Home() {
  const items = {
    line1: 'Welcome to the',
    line2: 'Frontend Quiz!',
    line3: 'Pick a subject to get started.',
  };
  return (
    <div className="flex size-full min-h-screen items-center">
      <Image
        className="imageBackground bg-[#F4F6FA] dark:opacity-0"
        src={patternBackgroundDesktopLight as string}
        alt="background pattern"
      />
      <Image
        className="imageBackground bg-[#313E51] opacity-0 dark:opacity-100"
        src={patternBackgroundDesktopDark as string}
        alt="background pattern"
      />
      <div className="relative mx-auto flex size-full min-h-screen max-w-[1160px] items-center">
        <div className="size-full h-[960px] max-h-screen pb-[280px] pt-[97px]">
          <div className="flex justify-end">
            <ButtonTheme />
          </div>
          <div className="mt-[99px] flex h-[456px] w-full justify-between">
            <div className="h-full w-[453px]">
              <section className="flex flex-col">
                <span className="text-[64px] font-light leading-[100%] text-[#313E51] transition dark:text-white">
                  {items.line1}
                </span>
                <span className="mt-[8px] text-[64px] font-medium leading-[100%] text-[#313E51] transition dark:text-white">
                  {items.line2}
                </span>
                <span className="mt-[48px] text-[20px] italic leading-[150%] text-[#626C7F] transition dark:text-[#ABC1E1]">
                  {items.line3}
                </span>
              </section>
            </div>
            <div className="flex h-full w-[564px] flex-col justify-between">
              <ChoiceBar />
              <ChoiceBar />
              <ChoiceBar />
              <ChoiceBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
