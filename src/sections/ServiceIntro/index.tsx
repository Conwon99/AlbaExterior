import React, { useState, useRef, useEffect } from "react";

export const ServiceIntro = () => {
  const questions = [
    "Looking for professional exterior cleaning services in Paisley and Glasgow?",
    "Need to restore your property's exterior to its original appearance?",
    "Want reliable, insured professionals for your cleaning needs?",
    "Seeking expert softwashing or pressure washing services?",
    "Need gutter cleaning or conservatory maintenance?",
    "Looking for eco-friendly cleaning solutions?",
  ];

  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      setSliderPosition(Math.max(0, Math.min(100, percentage)));
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging]);

  return (
    <section className="relative box-border caret-transparent py-10 md:py-16">
      <div className="relative box-border caret-transparent flex flex-wrap max-w-[1300px] mx-auto md:flex-nowrap">
        <div className="relative box-border caret-transparent flex min-h-px w-full">
          <div className="relative content-start box-border caret-transparent flex flex-wrap w-full p-5">
            <div className="relative box-border caret-transparent w-full mb-8">
              <div className="relative box-border caret-transparent flex flex-col md:flex-row gap-8 items-start">
                {/* Left Side - All Text Content */}
                <div className="relative box-border caret-transparent flex flex-col w-full md:w-1/2">
                  <div className="relative box-border caret-transparent text-left w-full mb-6">
                    <h2 className="text-neutral-900 text-2xl font-bold box-border caret-transparent leading-8 font-kanit md:text-4xl md:leading-10">
                      Looking For Professional Exterior Cleaning Services In Paisley and Glasgow?
                    </h2>
                  </div>
                  <div className="relative box-border caret-transparent text-left w-full">
                    <ul className="box-border caret-transparent list-none pl-0">
                      {questions.map((question, index) => (
                        <li key={index} className="relative items-center box-border caret-transparent flex justify-start pb-4">
                          <span className="relative box-border caret-transparent flex pr-3.5 flex-shrink-0">
                            <div className="bg-cyan-600 rounded-full w-6 h-6 flex items-center justify-center">
                              <svg
                                className="text-white h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={3}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                          </span>
                          <span className="text-base self-center box-border caret-transparent block leading-6 pl-2 font-figtree md:text-lg">
                            {question}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Right Side - Before/After Slider */}
                <div className="relative box-border caret-transparent flex flex-col w-full md:w-1/2">
                  <div
                    ref={containerRef}
                    className="relative text-sm box-border caret-transparent w-full leading-[20.3px] break-words overflow-hidden rounded-lg shadow-2xl md:text-[17px] md:leading-[24.65px]"
                    onTouchStart={() => setIsDragging(true)}
                    onTouchEnd={() => setIsDragging(false)}
                    onTouchMove={(e) => {
                      if (!containerRef.current) return;
                      const touch = e.touches[0];
                      const rect = containerRef.current.getBoundingClientRect();
                      const x = touch.clientX - rect.left;
                      const percentage = (x / rect.width) * 100;
                      setSliderPosition(Math.max(0, Math.min(100, percentage)));
                    }}
                  >
                    {/* Before Image (Base Layer) */}
                    <div
                      className="text-sm bg-no-repeat bg-cover bg-center box-border caret-transparent block leading-[20.3px] break-words w-full h-[300px] md:text-[17px] md:h-[400px] md:leading-[24.65px]"
                      style={{
                        backgroundImage: `url('${encodeURI("/before.jpg")}')`,
                      }}
                    />
                    
                    {/* After Image (Top Layer - Clipped) */}
                    <div
                      className="absolute text-sm bg-no-repeat bg-cover bg-center box-border caret-transparent block leading-[20.3px] break-words top-0 left-0 w-full h-[300px] md:text-[17px] md:h-[400px] md:leading-[24.65px]"
                      style={{
                        backgroundImage: `url('${encodeURI("/services/softwashing1.jpg")}')`,
                        clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                        WebkitClipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                      }}
                    />
                    
                    {/* Slider Handle */}
                    <div
                      className="absolute text-sm box-border caret-transparent leading-[20.3px] break-words top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10 md:text-[17px] md:leading-[24.65px]"
                      style={{
                        left: `${sliderPosition}%`,
                        transform: 'translateX(-50%)',
                      }}
                      onMouseDown={handleMouseDown}
                    >
                      {/* Slider Button */}
                      <div className="absolute text-sm box-border caret-transparent leading-[20.3px] break-words top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-ew-resize md:text-[17px] md:leading-[24.65px]">
                        <div className="flex gap-1">
                          <div className="w-1 h-4 bg-cyan-600 rounded"></div>
                          <div className="w-1 h-4 bg-cyan-600 rounded"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Labels */}
                    <div className="absolute text-sm box-border caret-transparent leading-[20.3px] break-words bottom-0 left-0 right-0 flex justify-between px-4 py-3 md:text-[17px] md:leading-[24.65px] md:px-5 md:py-4 pointer-events-none">
                      <div className="text-sm box-border caret-transparent leading-[20.3px] break-words bg-black/70 px-4 py-2 rounded md:text-[17px] md:leading-[24.65px]">
                        <h4 className="text-white text-lg italic font-bold box-border caret-transparent leading-6 break-words uppercase font-kanit md:text-xl md:leading-7">
                          Before
                        </h4>
                      </div>
                      <div className="text-sm box-border caret-transparent leading-[20.3px] break-words bg-cyan-600/90 px-4 py-2 rounded md:text-[17px] md:leading-[24.65px]">
                        <h4 className="text-white text-lg italic font-bold box-border caret-transparent leading-6 break-words uppercase font-kanit md:text-xl md:leading-7">
                          After
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative box-border caret-transparent text-center w-full mb-8 mt-12 md:mt-16">
              <div className="box-border caret-transparent">
                <h2 className="text-neutral-900 text-2xl font-bold box-border caret-transparent leading-8 font-kanit md:text-3xl md:leading-10">
                  Welcome to Alba Exteriors
                  <br />
                  We Are Experts At Exterior Cleaning Services In Paisley and Glasgow
                </h2>
              </div>
            </div>

            <div className="relative box-border caret-transparent text-center w-full mb-8">
              <div className="box-border caret-transparent">
                <img
                  src="/alba-logo.png"
                  alt="Alba Exteriors Logo"
                  title="Alba Exteriors Logo"
                  className="box-border caret-transparent h-auto break-words object-contain max-h-[200px] max-w-[400px] mx-auto md:max-h-[180px] md:max-w-[350px]"
                />
              </div>
            </div>

            <div className="relative box-border caret-transparent text-center w-full mb-8">
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
        </div>
      </div>
    </section>
  );
};

