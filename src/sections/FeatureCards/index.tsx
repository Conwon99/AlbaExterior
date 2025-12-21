import React from "react";

export const FeatureCards = () => {
  return (
    <section className="relative bg-cyan-600 box-border caret-transparent">
      <div className="relative box-border caret-transparent flex flex-wrap mx-auto md:flex-nowrap">
        <div className="relative box-border caret-transparent flex min-h-px w-full md:w-[33.333%]">
          <div className="relative content-start box-border caret-transparent flex flex-wrap w-full p-6 border-solid shadow-lg border-b border-cyan-700">
            <div className="box-border caret-transparent relative text-center w-full">
              <div className="box-border caret-transparent">
                <h4 className="text-white text-xl font-semibold box-border caret-transparent leading-6 font-kanit md:text-2xl md:leading-7">
                  Fully Insured
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="relative box-border caret-transparent flex min-h-px w-full md:w-[33.333%]">
          <div className="relative content-start box-border caret-transparent flex flex-wrap w-full p-6 border-solid shadow-lg border-b border-cyan-700">
            <div className="box-border caret-transparent relative text-center w-full">
              <div className="box-border caret-transparent">
                <h4 className="text-white text-xl font-semibold box-border caret-transparent leading-6 font-kanit md:text-2xl md:leading-7">
                  Professional Service
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="relative box-border caret-transparent flex min-h-px w-full md:w-[33.333%]">
          <div className="relative content-start box-border caret-transparent flex flex-wrap w-full p-6 border-solid shadow-lg border-b border-cyan-700">
            <div className="box-border caret-transparent relative text-center w-full">
              <div className="box-border caret-transparent">
                <h4 className="text-white text-xl font-semibold box-border caret-transparent leading-6 font-kanit md:text-2xl md:leading-7">
                  Quality Guaranteed
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

