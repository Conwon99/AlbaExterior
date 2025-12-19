import React, { useState, useRef, useEffect } from "react";

export const SoftwashingSection = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      setSliderPosition(Math.max(0, Math.min(100, percentage)));
    };

    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleGlobalMouseMove);
      document.addEventListener("mouseup", handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove);
      document.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="relative text-sm items-center box-border caret-transparent flex justify-center leading-[20.3px] break-words px-5 py-10 md:text-[17px] md:leading-[24.65px] md:px-5 md:py-16">
      <div className="text-sm box-border caret-transparent grow leading-[20.3px] max-w-[1300px] break-words mx-auto md:text-[17px] md:leading-[24.65px]">
        <div className="text-sm box-border caret-transparent flex flex-col items-center text-center leading-[20.3px] break-words mb-8 md:text-[17px] md:leading-[24.65px] md:mb-12">
          <h5 className="text-cyan-600 text-base italic font-semibold box-border caret-transparent clear-both tracking-[2px] leading-[22.4px] break-words uppercase font-kanit mb-2">
            Alba Exteriors
          </h5>
          <h3 className="text-neutral-900 text-[25px] italic font-bold box-border caret-transparent clear-both leading-[35px] break-words uppercase font-kanit md:text-3xl md:leading-[42px]">
            Softwashing
          </h3>
        </div>

        <div className="text-sm box-border caret-transparent flex flex-col md:flex-row gap-8 leading-[20.3px] break-words md:text-[17px] md:leading-[24.65px] md:gap-12">
          {/* Left Side - Text Content */}
          <div className="text-sm box-border caret-transparent flex flex-col leading-[20.3px] break-words w-full md:text-[17px] md:leading-[24.65px] md:w-1/2">
            <div className="text-sm box-border caret-transparent flex flex-col leading-[20.3px] break-words md:text-[17px] md:leading-[24.65px]">
              <p className="text-sm text-neutral-700 box-border caret-transparent leading-[22px] break-words mb-4 md:text-[17px] md:leading-[24px]">
                Softwashing is a gentle, effective cleaning method specifically designed for render and roughcast surfaces. Unlike high-pressure washing, softwashing uses specialized chemicals applied at low pressure to safely remove algae, carbon, moss, and other contaminants without causing any damage to your property.
              </p>
              <p className="text-sm text-neutral-700 box-border caret-transparent leading-[22px] break-words mb-4 md:text-[17px] md:leading-[24px]">
                Our softwashing process ensures that your render and roughcast surfaces are thoroughly cleaned while maintaining their integrity. The low-pressure application combined with professional-grade cleaning solutions effectively breaks down and removes organic growth and staining, leaving your property looking fresh and well-maintained.
              </p>
              <p className="text-sm text-neutral-700 box-border caret-transparent leading-[22px] break-words md:text-[17px] md:leading-[24px]">
                <strong className="text-sm font-bold box-border caret-transparent leading-[22px] break-words md:text-[17px] md:leading-[24px]">
                  Why Choose Softwashing?
                </strong>
              </p>
              <ul className="text-sm text-neutral-700 box-border caret-transparent leading-[22px] break-words mt-2 mb-4 list-disc list-inside md:text-[17px] md:leading-[24px]">
                <li className="text-sm box-border caret-transparent leading-[22px] break-words mb-2 md:text-[17px] md:leading-[24px]">
                  Safe for delicate surfaces like render and roughcast
                </li>
                <li className="text-sm box-border caret-transparent leading-[22px] break-words mb-2 md:text-[17px] md:leading-[24px]">
                  Removes algae, carbon, and moss effectively
                </li>
                <li className="text-sm box-border caret-transparent leading-[22px] break-words mb-2 md:text-[17px] md:leading-[24px]">
                  No damage to your property
                </li>
                <li className="text-sm box-border caret-transparent leading-[22px] break-words md:text-[17px] md:leading-[24px]">
                  Long-lasting results
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side - Image Slider */}
          <div className="text-sm box-border caret-transparent flex flex-col leading-[20.3px] break-words w-full md:text-[17px] md:leading-[24.65px] md:w-1/2">
            <div
              ref={containerRef}
              className="relative text-sm box-border caret-transparent w-full leading-[20.3px] break-words overflow-hidden rounded-lg shadow-2xl md:text-[17px] md:leading-[24.65px]"
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onTouchStart={handleMouseDown}
              onTouchEnd={handleMouseUp}
            >
              {/* After Image (Background) */}
              <div
                className="text-sm bg-no-repeat bg-cover bg-center box-border caret-transparent block leading-[20.3px] break-words w-full h-[400px] md:text-[17px] md:h-[500px] md:leading-[24.65px]"
                style={{
                  backgroundImage: `url('${encodeURI("/services/softwashing1.jpg")}')`,
                }}
              />

              {/* Before Image (Overlay - stacked on top) */}
              <div
                className="absolute text-sm bg-no-repeat bg-cover bg-center box-border caret-transparent block leading-[20.3px] break-words top-0 left-0 h-full md:text-[17px] md:leading-[24.65px]"
                style={{
                  backgroundImage: `url('${encodeURI("/before.jpg")}')`,
                  width: `${sliderPosition}%`,
                  clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                }}
              />

              {/* Slider Line */}
              <div
                className="absolute text-sm box-border caret-transparent block leading-[20.3px] break-words top-0 bottom-0 w-1 bg-white shadow-lg z-10 cursor-ew-resize md:text-[17px] md:leading-[24.65px] md:w-1.5"
                style={{
                  left: `${sliderPosition}%`,
                  transform: "translateX(-50%)",
                }}
                onMouseDown={handleMouseDown}
              >
                {/* Slider Handle */}
                <div className="absolute text-sm box-border caret-transparent flex items-center justify-center leading-[20.3px] break-words top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg cursor-ew-resize md:text-[17px] md:w-14 md:h-14 md:leading-[24.65px]">
                  <div className="text-sm box-border caret-transparent flex items-center leading-[20.3px] break-words gap-1 md:text-[17px] md:leading-[24.65px]">
                    <svg
                      className="w-4 h-4 text-cyan-600 md:w-5 md:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    <svg
                      className="w-4 h-4 text-cyan-600 md:w-5 md:h-5"
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
                  </div>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute text-sm box-border caret-transparent flex justify-between items-end leading-[20.3px] break-words bottom-4 left-4 right-4 md:text-[17px] md:leading-[24.65px] md:bottom-6 md:left-6 md:right-6">
                <div className="text-sm box-border caret-transparent bg-black/70 text-white px-4 py-2 rounded-md leading-[20.3px] break-words md:text-[17px] md:leading-[24.65px] md:px-5 md:py-3">
                  <span className="text-sm font-bold box-border caret-transparent leading-[20.3px] break-words uppercase md:text-[17px] md:leading-[24.65px]">
                    Before
                  </span>
                </div>
                <div className="text-sm box-border caret-transparent bg-cyan-600/90 text-white px-4 py-2 rounded-md leading-[20.3px] break-words md:text-[17px] md:leading-[24.65px] md:px-5 md:py-3">
                  <span className="text-sm font-bold box-border caret-transparent leading-[20.3px] break-words uppercase md:text-[17px] md:leading-[24.65px]">
                    After
                  </span>
                </div>
              </div>
            </div>
            <div className="text-sm box-border caret-transparent text-center leading-[20.3px] break-words mt-4 md:text-[17px] md:leading-[24.65px]">
              <p className="text-sm text-neutral-600 box-border caret-transparent leading-[20px] break-words text-xs md:text-[17px] md:leading-[24px] md:text-sm">
                Drag the slider to see the transformation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

