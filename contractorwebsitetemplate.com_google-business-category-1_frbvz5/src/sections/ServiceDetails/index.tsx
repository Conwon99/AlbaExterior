import { ServiceDescription } from "@/sections/ServiceDetails/components/ServiceDescription";
import { ServiceGrid } from "@/sections/ServiceDetails/components/ServiceGrid";
import { ServiceContent } from "@/sections/ServiceDetails/components/ServiceContent";

export const ServiceDetails = () => {
  return (
    <section className="relative bg-[linear-gradient(rgb(200,25,24)_0%,rgb(200,25,24)_100%)] box-border caret-transparent py-[60px]">
      <div className="relative box-border caret-transparent flex flex-wrap max-w-[767px] mx-auto md:flex-nowrap md:max-w-[1140px]">
        <div className="relative box-border caret-transparent flex min-h-px w-full">
          <div className="relative content-start box-border caret-transparent flex flex-wrap w-full p-2.5">
            <ServiceDescription />
            <ServiceGrid />
            <ServiceContent />
            <div className="relative box-border caret-transparent text-center w-full mb-5">
              <div className="box-border caret-transparent">
                <h2 className="text-white text-[27px] font-semibold box-border caret-transparent leading-[27px] font-roboto md:text-[28px] md:leading-7">
                  Check Out Our Reviews
                </h2>
              </div>
            </div>
            <div className="relative box-border caret-transparent w-full mb-5 font-roboto">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent"></div>
              </div>
            </div>
            <div className="relative box-border caret-transparent w-full">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent">
                  <div className="box-border caret-transparent h-[50px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
