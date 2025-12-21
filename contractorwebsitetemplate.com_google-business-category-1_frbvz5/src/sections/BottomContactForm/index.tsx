import { ContactFormSection } from "@/sections/BottomContactForm/components/ContactFormSection";

export const BottomContactForm = () => {
  return (
    <section className="relative bg-[linear-gradient(rgb(255,255,255)_0%,rgb(85,85,85)_100%)] box-border caret-transparent pb-[60px]">
      <div className="relative box-border caret-transparent flex flex-wrap max-w-[767px] mx-auto md:flex-nowrap md:max-w-[1140px]">
        <div className="relative box-border caret-transparent flex min-h-px w-full md:w-[19.999%]">
          <div className="relative content-start box-border caret-transparent flex flex-wrap w-full"></div>
        </div>
        <div className="relative box-border caret-transparent flex min-h-px w-full md:w-[59.667%]">
          <ContactFormSection />
        </div>
        <div className="relative box-border caret-transparent flex min-h-px w-full md:w-1/5">
          <div className="relative content-start box-border caret-transparent flex flex-wrap w-full"></div>
        </div>
      </div>
    </section>
  );
};
