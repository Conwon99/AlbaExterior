import React from "react";

export const ReviewsSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-neutral-700 to-neutral-800 box-border caret-transparent py-10 md:py-16">
      <div className="relative box-border caret-transparent flex flex-wrap max-w-[1300px] mx-auto md:flex-nowrap">
        <div className="relative box-border caret-transparent flex min-h-px w-full">
          <div className="relative content-start box-border caret-transparent flex flex-wrap w-full p-5">
            <div className="relative box-border caret-transparent w-full mb-8">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent h-[30px]"></div>
              </div>
            </div>
            
            <div className="relative text-white text-lg box-border caret-transparent leading-7 text-center w-full mb-6 font-figtree md:text-2xl md:leading-9">
              <div className="text-lg box-border caret-transparent leading-7 md:text-2xl md:leading-9">
                <p className="text-lg box-border caret-transparent leading-7 mb-4 md:text-2xl md:leading-9">
                  Check Out Great Reviews On Our
                </p>
              </div>
            </div>
            
            <div className="relative box-border caret-transparent text-center w-full mb-6">
              <div className="box-border caret-transparent">
                <h3 className="text-cyan-400 text-3xl font-bold box-border caret-transparent leading-9 font-kanit md:text-4xl md:leading-10">
                  Exterior Cleaning Services Paisley and Glasgow
                </h3>
              </div>
            </div>
            
            <div className="relative box-border caret-transparent w-full mb-8">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent flex text-center py-6">
                  <span className="border-t-cyan-400 box-border caret-transparent flex w-[10%] mx-auto border-t-[5px]"></span>
                </div>
              </div>
            </div>
            
            <div className="relative box-border caret-transparent w-full mb-8">
              <div className="box-border caret-transparent flex items-center justify-center gap-4 mb-6">
                <svg className="text-yellow-400 w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                <svg className="text-yellow-400 w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                <svg className="text-yellow-400 w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                <svg className="text-yellow-400 w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                <svg className="text-yellow-400 w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
              <p className="text-white text-center text-lg font-figtree mb-8">
                Rated 5 Stars by Our Customers
              </p>
              
              {/* Reviews Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-neutral-800/50 rounded-lg p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white text-base mb-3 font-figtree">
                    "Excellent service! Alba Exteriors transformed our driveway completely. Professional, punctual, and the results exceeded our expectations. Highly recommend!"
                  </p>
                  <p className="text-cyan-400 text-sm font-semibold">- Sarah M., Paisley</p>
                </div>
                
                <div className="bg-neutral-800/50 rounded-lg p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white text-base mb-3 font-figtree">
                    "The softwashing service was fantastic. Our render looks brand new again! The team was friendly, efficient, and left everything spotless. Will definitely use again."
                  </p>
                  <p className="text-cyan-400 text-sm font-semibold">- James T., Glasgow</p>
                </div>
                
                <div className="bg-neutral-800/50 rounded-lg p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white text-base mb-3 font-figtree">
                    "Outstanding roof cleaning service. They removed all the moss and algae safely, and our roof looks amazing. Professional from start to finish. Worth every penny!"
                  </p>
                  <p className="text-cyan-400 text-sm font-semibold">- Emma L., Paisley</p>
                </div>
              </div>
            </div>
            
            <div className="relative box-border caret-transparent w-full mb-8">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent h-[30px]"></div>
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
                <div className="box-border caret-transparent h-[50px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

