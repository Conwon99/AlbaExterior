import { ServiceIntroContent } from "@/sections/ServiceIntro/components/ServiceIntroContent";
import { ContactForm } from "@/components/ContactForm";

export const ServiceIntro = () => {
  return (
    <section className="relative box-border caret-transparent">
      <div className="relative box-border caret-transparent flex flex-wrap max-w-[767px] mx-auto md:flex-nowrap md:max-w-[1140px]">
        <div className="relative box-border caret-transparent flex min-h-px w-full">
          <div className="relative content-start box-border caret-transparent flex flex-wrap w-full p-2.5">
            <section className="relative box-border caret-transparent w-full">
              <div className="relative box-border caret-transparent flex flex-wrap max-w-[767px] mx-auto md:flex-nowrap md:max-w-[1140px]">
                <ServiceIntroContent />
                <ContactForm />
              </div>
            </section>
            <div className="relative box-border caret-transparent w-full">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent">
                  <div className="box-border caret-transparent h-[30px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
