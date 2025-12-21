import React, { useState, useRef, useEffect } from "react";

export const BeforeAfterSection = () => {
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
        
        <div className="text-sm box-border caret-transparent flex justify-center leading-[20.3px] break-words md:text-[17px] md:leading-[24.65px]">
          <div
            ref={containerRef}
            className="relative text-sm box-border caret-transparent w-full max-w-4xl leading-[20.3px] break-words overflow-hidden rounded-lg shadow-2xl md:text-[17px] md:leading-[24.65px]"
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
              className="text-sm bg-no-repeat bg-cover bg-center box-border caret-transparent block leading-[20.3px] break-words w-full h-[400px] md:text-[17px] md:h-[600px] md:leading-[24.65px]"
              style={{
                backgroundImage: `url('${encodeURI("/before.jpg")}')`,
              }}
            />
            
            {/* After Image (Top Layer - Clipped) */}
            <div
              className="absolute text-sm bg-no-repeat bg-cover bg-center box-border caret-transparent block leading-[20.3px] break-words top-0 left-0 w-full h-[400px] md:text-[17px] md:h-[600px] md:leading-[24.65px]"
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
                <h4 className="text-white text-xl italic font-bold box-border caret-transparent leading-[28px] break-words uppercase font-kanit md:text-2xl md:leading-[32px]">
                  Before
                </h4>
              </div>
              <div className="text-sm box-border caret-transparent leading-[20.3px] break-words bg-cyan-600/90 px-4 py-2 rounded md:text-[17px] md:leading-[24.65px]">
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
