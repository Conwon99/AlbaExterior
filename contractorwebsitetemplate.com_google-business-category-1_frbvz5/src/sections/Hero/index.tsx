import { HeroContent } from "@/sections/Hero/components/HeroContent";

export const Hero = () => {
  return (
    <section className="relative bg-scroll bg-[url('https://contractorwebsitetemplate.com/wp-content/uploads/2024/06/Copy-of-HOME-PAGE-3.jpg')] bg-cover box-border caret-transparent bg-bottom md:bg-fixed">
      <div className="absolute bg-black box-border caret-transparent opacity-40 inset-0"></div>
      <div className="relative items-center box-border caret-transparent flex flex-wrap max-w-[767px] min-h-[500px] mx-auto md:flex-nowrap md:max-w-[1140px]">
        <div className="relative box-border caret-transparent flex min-h-px w-full">
          <div className="relative content-start box-border caret-transparent flex flex-wrap w-full p-2.5">
            <HeroContent />
          </div>
        </div>
      </div>
    </section>
  );
};
