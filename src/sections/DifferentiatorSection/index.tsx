import React from "react";

export const DifferentiatorSection = () => {
  return (
    <section className="relative box-border caret-transparent py-10 md:py-16">
      <div className="relative box-border caret-transparent flex flex-wrap max-w-[1300px] mx-auto md:flex-nowrap">
        <div className="relative box-border caret-transparent flex min-h-px w-full">
          <div className="relative content-start box-border caret-transparent flex flex-wrap w-full p-5">
            <div className="relative box-border caret-transparent w-full mb-8">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent h-[30px]"></div>
              </div>
            </div>
            
            <div className="relative box-border caret-transparent w-full mb-8">
              <div className="relative box-border caret-transparent flex flex-col md:flex-row gap-8 items-start">
                {/* Left Side - Text */}
                <div className="relative box-border caret-transparent flex flex-col w-full md:w-1/2">
                  <div className="relative box-border caret-transparent text-left w-full mb-6">
                    <h2 className="text-neutral-900 text-2xl font-bold box-border caret-transparent leading-8 font-kanit md:text-4xl md:leading-10">
                      What Makes Us Different From Other Exterior Cleaning Companies In Paisley and Glasgow?
                    </h2>
                  </div>
                  <div className="relative box-border caret-transparent text-left w-full font-figtree">
                    <div className="box-border caret-transparent">
                      <p className="text-neutral-700 text-base box-border caret-transparent mb-4 leading-6 md:text-lg md:leading-7">
                        At Alba Exteriors, we stand out from other exterior cleaning companies in Paisley and Glasgow through our commitment to excellence, attention to detail, and customer-first approach. We use professional-grade equipment and eco-friendly solutions to deliver outstanding results while protecting your property and the environment.
                      </p>
                      <p className="text-neutral-700 text-base box-border caret-transparent mb-4 leading-6 md:text-lg md:leading-7">
                        Our team is fully insured, professionally trained, and dedicated to providing exceptional service on every job. We understand that your property is an important investment, and we treat it with the care and respect it deserves. From initial consultation to final inspection, we ensure complete customer satisfaction.
                      </p>
                      <p className="text-neutral-700 text-base box-border caret-transparent leading-6 md:text-lg md:leading-7">
                        Whether you need pressure washing, softwashing, gutter cleaning, or any other exterior cleaning service, Alba Exteriors delivers reliable, professional results that exceed expectations. Contact us today to experience the difference.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Right Side - Image */}
                <div className="relative box-border caret-transparent flex flex-col w-full md:w-1/2">
                  <div
                    className="text-sm bg-no-repeat bg-cover bg-center box-border caret-transparent block leading-[20.3px] break-words w-full h-[300px] rounded-lg shadow-lg md:text-[17px] md:h-[400px] md:leading-[24.65px]"
                    style={{
                      backgroundImage: `url('${encodeURI("/about.jpg")}')`,
                    }}
                  />
                </div>
              </div>
            </div>
            
            <div className="relative box-border caret-transparent w-full mb-8">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent h-7"></div>
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

