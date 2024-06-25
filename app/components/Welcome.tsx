const items = {
  line1: 'Welcome to the',
  line2: 'Frontend Quiz!',
  line3: 'Pick a subject to get started.',
};

export default function Welcome() {
  return (
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
  );
}
