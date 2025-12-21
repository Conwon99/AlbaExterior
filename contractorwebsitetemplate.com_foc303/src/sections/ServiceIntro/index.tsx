import { ServiceQuestionList } from "@/sections/ServiceIntro/components/ServiceQuestionList";

export const ServiceIntro = () => {
  return (
    <section className="relative box-border caret-transparent">
      <div className="relative box-border caret-transparent flex flex-wrap max-w-[767px] mx-auto md:flex-nowrap md:max-w-[1140px]">
        <div className="relative box-border caret-transparent flex min-h-px w-full">
          <div className="relative content-start box-border caret-transparent flex flex-wrap w-full p-2.5">
            <div className="relative box-border caret-transparent w-full mb-5">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent">
                  <div className="box-border caret-transparent h-[50px]"></div>
                </div>
              </div>
            </div>
            <div className="relative box-border caret-transparent text-center w-full mb-5">
              <div className="box-border caret-transparent">
                <h2 className="text-[26px] font-semibold box-border caret-transparent leading-[26px] font-roboto md:text-[34px] md:leading-[34px]">
                  Looking For A (Service Provided) In (City or Area)?
                </h2>
              </div>
            </div>
            <div className="relative box-border caret-transparent w-full mb-5">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent">
                  <div className="box-border caret-transparent h-2.5 md:h-[25px]"></div>
                </div>
              </div>
            </div>
            <ServiceQuestionList />
            <div className="relative box-border caret-transparent w-full mb-5">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent">
                  <div className="box-border caret-transparent h-10"></div>
                </div>
              </div>
            </div>
            <div className="relative box-border caret-transparent text-center w-full mb-5">
              <div className="box-border caret-transparent">
                <h2 className="text-[25px] font-semibold box-border caret-transparent leading-[25px] stroke-black font-roboto md:text-[33px] md:leading-[33px]">
                  Welcome to (Business Name)
                  <br className="text-[25px] box-border caret-transparent leading-[25px] stroke-black md:text-[33px] md:leading-[33px]" />
                  We Make Are Awesome At (Service-GBP Primary Category) In
                  (Area)
                </h2>
              </div>
            </div>
            <div className="relative box-border caret-transparent text-center w-full mb-5">
              <div className="box-border caret-transparent">
                <img
                  src="https://c.animaapp.com/mjfo8f47q1cuST/assets/cropped-Screenshot_2023-04-10_at_1.41.12_PM-removebg-preview-4-300x100.png"
                  alt="Filler Logo"
                  sizes="(max-width: 300px) 100vw, 300px"
                  className="aspect-[auto_300_/_100] box-border caret-transparent inline-block max-w-full w-[300px]"
                />
              </div>
            </div>
            <div className="relative box-border caret-transparent w-full mb-5">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent">
                  <div className="box-border caret-transparent h-2.5 md:h-5"></div>
                </div>
              </div>
            </div>
            <div className="relative box-border caret-transparent text-center w-full mb-5">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent">
                  <a
                    href="https://getbizzyllc.com/"
                    className="text-white font-medium bg-red-700 shadow-[rgba(0,0,0,0.5)_0px_0px_10px_0px] box-border caret-transparent inline-block fill-white leading-4 px-[30px] py-[15px] rounded-[10px] border-2 border-solid font-roboto hover:bg-zinc-600"
                  >
                    <span className="box-border caret-transparent gap-x-2.5 flex fill-white justify-center gap-y-2.5">
                      <span className="items-center box-border caret-transparent flex fill-white">
                        <img
                          src="https://c.animaapp.com/mjfo8f47q1cuST/assets/icon-1.svg"
                          alt="Icon"
                          className="box-border caret-transparent h-4 w-4"
                        />
                      </span>
                      <span className="box-border caret-transparent block fill-white">
                        {" "}
                        Get This Website Built
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
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
