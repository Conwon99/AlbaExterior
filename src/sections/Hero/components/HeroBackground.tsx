import React, { useState, useEffect } from "react";

export const HeroBackground = () => {
  const images = [
    "/imgs/hero1.jpg",
    "/imgs/herox.jpg",
    "/imgs/softwash2.jpg",
    "/imgs/softwash3.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="absolute text-sm box-border caret-transparent leading-[20.3px] break-words z-0 overflow-hidden inset-0 md:text-[17px] md:leading-[24.65px]">
      <div className="relative text-neutral-400 text-[13px] caret-transparent h-[743px] leading-[18.85px] break-words w-full font-helvetica md:h-[695px]">
        <div className="relative caret-transparent break-words">
          <div className="relative caret-transparent h-[743px] break-words w-full z-[2] md:h-[695px]">
            <div className="relative caret-transparent h-full break-words overflow-hidden">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute caret-transparent h-[743px] break-words w-full z-[2] overflow-hidden left-0 top-0 md:h-[695px] bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    backgroundImage: `url('${encodeURI(image)}')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
