import React from "react";

export const WelcomeSection = () => {
  const features = [
    {
      title: "Fully Insured & Trained",
      description: "Our team is fully insured and professionally trained to handle all types of exterior cleaning projects safely and effectively.",
    },
    {
      title: "Quality Work Guaranteed",
      description: "We guarantee exceptional results on every job. Your satisfaction is our priority, and we won't stop until you're happy with the outcome.",
    },
    {
      title: "Customer Satisfaction",
      description: "We pride ourselves on delivering outstanding customer service. Our friendly, professional team is dedicated to exceeding your expectations.",
    },
  ];

  return (
    <section className="relative bg-scroll bg-stone-900/40 bg-no-repeat bg-cover box-border caret-transparent md:bg-fixed" style={{ backgroundImage: "url('/services/pressurewashing.png')" }}>
      <div className="absolute bg-black/50 box-border caret-transparent opacity-60 inset-0 md:bg-black/40"></div>
      <div className="relative items-center box-border caret-transparent flex flex-wrap max-w-[1300px] min-h-[600px] mx-auto md:flex-nowrap">
        <div className="relative box-border caret-transparent flex min-h-px w-full">
          <div className="relative content-start box-border caret-transparent flex flex-wrap w-full p-5">
            <div className="relative box-border caret-transparent w-full mb-8">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent h-[30px]"></div>
              </div>
            </div>
            
            <section className="relative box-border caret-transparent w-full">
              <div className="relative box-border caret-transparent flex flex-wrap mx-auto md:flex-nowrap">
                {features.map((feature, index) => (
                  <div key={index} className="relative box-border caret-transparent flex min-h-px w-full md:w-[33.333%]">
                    <div className="relative content-start box-border caret-transparent flex flex-wrap w-full p-5 border-solid rounded-2xl border-4 border-transparent">
                      <div className="relative bg-cyan-600/90 backdrop-blur-sm rounded-2xl box-border caret-transparent w-full p-6">
                        <div className="relative box-border caret-transparent w-full">
                          <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 text-center">
                            <div className="box-border caret-transparent shrink-0 leading-0">
                              <span className="text-white text-4xl bg-cyan-700 box-border caret-transparent inline-flex items-center justify-center fill-white leading-10 p-5 rounded-full">
                                <svg
                                  className="h-8 w-8"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="box-border caret-transparent grow w-full">
                              <h3 className="text-white text-xl font-bold box-border caret-transparent leading-6 mt-2 mb-4 font-kanit md:text-2xl">
                                {feature.title}
                              </h3>
                              <p className="text-white/90 box-border caret-transparent font-figtree text-base leading-6">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="relative box-border caret-transparent w-full mb-8">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent h-5"></div>
              </div>
            </div>
            
            <div className="relative box-border caret-transparent text-center w-full mb-8">
              <div className="box-border caret-transparent">
                <a
                  href="/contact"
                  className="text-white font-bold bg-cyan-500 shadow-lg box-border caret-transparent inline-flex items-center gap-2 leading-4 px-8 py-4 rounded-lg border-2 border-cyan-600 font-figtree hover:bg-cyan-400 transition-colors"
                >
                  <span className="box-border caret-transparent flex items-center justify-center gap-2">
                    <span className="items-center box-border caret-transparent flex">
                      <svg
                        className="box-border caret-transparent h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                    <span className="box-border caret-transparent block">
                      Get A Free Quote
                    </span>
                  </span>
                </a>
              </div>
            </div>
            
            <div className="relative box-border caret-transparent w-full">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent h-[30px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

