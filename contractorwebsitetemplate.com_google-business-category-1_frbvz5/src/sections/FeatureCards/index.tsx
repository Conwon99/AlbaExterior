import { FeatureCard } from "@/sections/FeatureCards/components/FeatureCard";

export const FeatureCards = () => {
  return (
    <section className="relative bg-scroll bg-stone-900/40 bg-[url('https://contractorwebsitetemplate.com/wp-content/uploads/2024/06/DIY-Junk-Removal-SEO-19-1-1.png')] bg-cover box-border caret-transparent bg-center md:bg-fixed">
      <div className="absolute bg-black box-border caret-transparent opacity-20 inset-0"></div>
      <div className="relative items-center box-border caret-transparent flex flex-wrap max-w-[767px] min-h-[600px] mx-auto md:flex-nowrap md:max-w-[1140px]">
        <div className="relative box-border caret-transparent flex min-h-px w-full">
          <div className="relative content-start box-border caret-transparent flex flex-wrap w-full p-2.5">
            <div className="relative box-border caret-transparent w-full mb-5">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent">
                  <div className="box-border caret-transparent h-[60px]"></div>
                </div>
              </div>
            </div>
            <section className="relative box-border caret-transparent w-full">
              <div className="relative box-border caret-transparent flex flex-wrap mx-auto md:flex-nowrap">
                <FeatureCard
                  title="We Are The Solution"
                  description="Describe a feature as to why you are the solution to there problem. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa"
                />
                <FeatureCard
                  title="We Are The Solution"
                  description="Describe a feature as to why you are the solution to there problem. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa"
                />
                <FeatureCard
                  title="We Are The Solution"
                  description="Describe a feature as to why you are the solution to there problem. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa"
                />
              </div>
            </section>
            <div className="relative box-border caret-transparent w-full mb-5">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent">
                  <div className="box-border caret-transparent h-[30px]"></div>
                </div>
              </div>
            </div>
            <div className="relative box-border caret-transparent text-center w-full mb-5">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent">
                  <a
                    href="https://www.skool.com/contractors-in-house-agency/about"
                    className="text-white font-medium bg-red-700 shadow-[rgba(0,0,0,0.5)_0px_0px_10px_0px] box-border caret-transparent inline-block fill-white leading-4 px-[30px] py-[15px] rounded-[10px] border-2 border-solid font-roboto hover:bg-zinc-600"
                  >
                    <span className="box-border caret-transparent gap-x-2.5 flex fill-white justify-center gap-y-2.5">
                      <span className="items-center box-border caret-transparent flex fill-white">
                        <img
                          src="https://c.animaapp.com/mjfqi6l8cAeBpe/assets/icon-1.svg"
                          alt="Icon"
                          className="box-border caret-transparent h-4 w-4"
                        />
                      </span>
                      <span className="box-border caret-transparent block fill-white">
                        Get Templates Here
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative box-border caret-transparent w-full mb-5">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent">
                  <div className="box-border caret-transparent h-[30px]"></div>
                </div>
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
