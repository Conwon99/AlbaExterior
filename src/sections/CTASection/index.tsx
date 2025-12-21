import React from "react";

export const CTASection = () => {
  return (
    <section className="relative bg-cyan-600 box-border caret-transparent py-10 md:py-16">
      <div className="relative items-center box-border caret-transparent flex flex-wrap max-w-[1300px] min-h-[300px] mx-auto md:flex-nowrap">
        <div className="relative box-border caret-transparent flex min-h-px w-full md:w-[66.666%]">
          <div className="relative content-start box-border caret-transparent flex flex-wrap w-full p-5">
            <div className="relative box-border caret-transparent block min-h-[auto] min-w-[auto] w-full mb-5 md:hidden md:min-h-0 md:min-w-0">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent">
                  <div className="box-border caret-transparent h-2.5 md:h-[50px]"></div>
                </div>
              </div>
            </div>
            <div className="relative text-white text-lg box-border caret-transparent leading-7 text-center w-full font-figtree md:text-xl md:leading-8">
              <div className="text-lg box-border caret-transparent leading-7 md:text-xl md:leading-8">
                <p className="text-lg box-border caret-transparent leading-7 mb-4 md:text-xl md:leading-8">
                  Ready to transform your property's exterior? Contact Alba Exteriors today for professional exterior cleaning services in Paisley and Glasgow. We offer free, no-obligation quotes and guarantee exceptional results on every job.
                </p>
                <p className="text-lg box-border caret-transparent leading-7 md:text-xl md:leading-8">
                  Don't wait - let us help you restore your property to its original beauty. Get in touch now!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative box-border caret-transparent flex min-h-px w-full md:w-[33.333%]">
          <div className="relative content-start box-border caret-transparent flex flex-wrap w-full p-5">
            <div className="relative box-border caret-transparent block min-h-[auto] min-w-[auto] w-full mb-5 md:hidden md:min-h-0 md:min-w-0">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent">
                  <div className="box-border caret-transparent h-2.5 md:h-[50px]"></div>
                </div>
              </div>
            </div>
            <div className="relative box-border caret-transparent text-center w-full mb-5">
              <div className="box-border caret-transparent">
                <a
                  href="/contact"
                  className="text-white font-bold bg-neutral-700 shadow-lg box-border caret-transparent inline-flex items-center gap-2 leading-4 px-8 py-4 rounded-lg border-2 border-neutral-800 font-figtree hover:bg-neutral-600 transition-colors"
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
            <div className="relative box-border caret-transparent block min-h-[auto] min-w-[auto] w-full md:hidden md:min-h-0 md:min-w-0">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent">
                  <div className="box-border caret-transparent h-2.5 md:h-[50px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

