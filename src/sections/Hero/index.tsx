import { HeroBackground } from "@/sections/Hero/components/HeroBackground";
import { HeroContent } from "@/sections/Hero/components/HeroContent";

export const Hero = () => {
  return (
    <div id="hero" className="relative text-sm items-center box-border caret-transparent flex justify-center leading-[20.3px] break-words px-0 py-20 md:text-[17px] md:leading-[24.65px] md:px-5 md:py-32 min-h-[500px] md:min-h-[600px] after:accent-auto after:bg-black/40 after:box-border after:caret-transparent after:text-black after:block after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[20.3px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:z-0 after:border-separate after:inset-0 after:font-figtree after:md:text-[17px] after:md:leading-[24.65px]">
      <HeroBackground />
      <HeroContent />
    </div>
  );
};
