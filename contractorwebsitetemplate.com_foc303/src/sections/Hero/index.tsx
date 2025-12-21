import { HeroButton } from "@/sections/Hero/components/HeroButton";

export const Hero = () => {
  return (
    <section className="relative bg-scroll bg-transparent bg-[url('https://contractorwebsitetemplate.com/wp-content/uploads/2024/06/Copy-of-HOME-PAGE-2.jpg')] bg-cover box-border caret-transparent bg-bottom px-[30px] md:bg-fixed md:px-0">
      <div className="absolute bg-black box-border caret-transparent opacity-[0.33] inset-0"></div>
      <div className="relative items-center box-border caret-transparent flex flex-wrap max-w-[1140px] min-h-[600px] text-center mx-auto md:flex-nowrap">
        <div className="relative box-border caret-transparent flex min-h-px w-full">
          <div className="relative content-start box-border caret-transparent flex flex-wrap w-full p-2.5">
            <div className="relative box-border caret-transparent w-full mb-5">
              <div className="box-border caret-transparent">
                <h1 className="text-white text-[40px] font-bold box-border caret-transparent tracking-[1px] leading-10 font-roboto md:text-6xl md:tracking-[normal] md:leading-[60px]">
                  We Are The Best
                  <br className="text-[40px] box-border caret-transparent tracking-[1px] leading-10 md:text-6xl md:tracking-[normal] md:leading-[60px]" />
                  (Service-GBP Primary Category) In (City)
                </h1>
              </div>
            </div>
            <div className="relative box-border caret-transparent w-full mb-5">
              <div className="box-border caret-transparent p-0 md:px-[10%] md:py-[0%]">
                <p className="text-white text-[19px] font-medium box-border caret-transparent leading-[22.8px] stroke-black font-roboto md:text-2xl md:leading-9">
                  Offering the best (service provided-GBP Primary Category) in
                  (City or location) and the surrounding area (how and what
                  customers will get out of it)
                </p>
              </div>
            </div>
            <div className="relative box-border caret-transparent w-full">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent">
                  <HeroButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
