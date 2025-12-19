import React from "react";

export const BeforeAfterSection = () => {
  return (
    <div className="relative text-sm items-center box-border caret-transparent flex justify-center leading-[20.3px] break-words px-5 py-10 md:text-[17px] md:leading-[24.65px] md:px-5 md:py-16">
      <div className="text-sm box-border caret-transparent grow leading-[20.3px] max-w-[1300px] break-words mx-auto md:text-[17px] md:leading-[24.65px]">
        <div className="text-sm box-border caret-transparent flex flex-col items-center text-center leading-[20.3px] break-words mb-8 md:text-[17px] md:leading-[24.65px] md:mb-12">
          <h5 className="text-cyan-600 text-base italic font-semibold box-border caret-transparent clear-both tracking-[2px] leading-[22.4px] break-words uppercase font-kanit mb-2">
            Alba Exteriors
          </h5>
          <h3 className="text-neutral-900 text-[25px] italic font-bold box-border caret-transparent clear-both leading-[35px] break-words uppercase font-kanit md:text-3xl md:leading-[42px]">
            Before & After
          </h3>
        </div>
        
        <div className="text-sm box-border caret-transparent grid grid-cols-1 gap-6 leading-[20.3px] break-words md:text-[17px] md:grid-cols-2 md:gap-8 md:leading-[24.65px]">
          {/* Before Image */}
          <div className="text-sm box-border caret-transparent flex flex-col leading-[20.3px] break-words md:text-[17px] md:leading-[24.65px]">
            <div className="text-sm box-border caret-transparent relative leading-[20.3px] break-words overflow-hidden rounded-lg shadow-lg md:text-[17px] md:leading-[24.65px]">
              <div
                className="text-sm bg-no-repeat bg-cover bg-center box-border caret-transparent block leading-[20.3px] break-words w-full h-[400px] md:text-[17px] md:h-[500px] md:leading-[24.65px]"
                style={{
                  backgroundImage: `url('${encodeURI("/before.jpg")}')`,
                }}
              />
              <div className="text-sm box-border caret-transparent absolute bottom-0 left-0 right-0 bg-black/70 leading-[20.3px] break-words px-4 py-3 md:text-[17px] md:leading-[24.65px] md:px-5 md:py-4">
                <h4 className="text-white text-xl italic font-bold box-border caret-transparent leading-[28px] break-words uppercase font-kanit md:text-2xl md:leading-[32px]">
                  Before
                </h4>
              </div>
            </div>
          </div>

          {/* After Image */}
          <div className="text-sm box-border caret-transparent flex flex-col leading-[20.3px] break-words md:text-[17px] md:leading-[24.65px]">
            <div className="text-sm box-border caret-transparent relative leading-[20.3px] break-words overflow-hidden rounded-lg shadow-lg md:text-[17px] md:leading-[24.65px]">
              <div
                className="text-sm bg-no-repeat bg-cover bg-center box-border caret-transparent block leading-[20.3px] break-words w-full h-[400px] md:text-[17px] md:h-[500px] md:leading-[24.65px]"
                style={{
                  backgroundImage: `url('${encodeURI("/softwashing1.jpg")}')`,
                }}
              />
              <div className="text-sm box-border caret-transparent absolute bottom-0 left-0 right-0 bg-cyan-600/90 leading-[20.3px] break-words px-4 py-3 md:text-[17px] md:leading-[24.65px] md:px-5 md:py-4">
                <h4 className="text-white text-xl italic font-bold box-border caret-transparent leading-[28px] break-words uppercase font-kanit md:text-2xl md:leading-[32px]">
                  After
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
