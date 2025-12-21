import { FooterContent } from "@/sections/Footer/components/FooterContent";
import { SocialLinks } from "@/sections/Footer/components/SocialLinks";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";

export const Footer = () => {
  return (
    <section className="relative bg-[linear-gradient(rgb(0,0,0)_0%,rgb(0,0,0)_100%)] box-border caret-transparent">
      <div className="relative box-border caret-transparent flex flex-wrap max-w-[767px] mx-auto md:flex-nowrap md:max-w-[1140px]">
        <div className="relative box-border caret-transparent flex min-h-px w-full">
          <div className="relative content-start box-border caret-transparent flex flex-wrap w-full p-2.5">
            <FooterContent />
            <SocialLinks />
            <FooterBottom />
          </div>
        </div>
      </div>
    </section>
  );
};
