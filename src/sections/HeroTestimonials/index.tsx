import React, { useState } from "react";

export const HeroTestimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      text: "Fantastic pressure washing service! My driveway looks brand new. Very professional and polite team. Highly recommend Alba Exteriors.",
    },
    {
      name: "David P.",
      text: "Can't thank the team enough for the softwashing work on my render. The difference is incredible - removed all the algae and grime without any damage. Excellent service from start to finish.",
    },
    {
      name: "Emma T.",
      text: "Alba Exteriors did a brilliant job on my property. The pressure washing cleaned my driveways perfectly, and the softwashing made my walls look like new. Very courteous and professional. Would definitely use them again!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="absolute text-sm box-border caret-transparent left-0 right-0 bottom-0 leading-[20.3px] break-words z-[3] md:text-[17px] md:leading-[24.65px]" style={{ transform: 'translateY(50%)' }}>
      <div className="text-sm box-border caret-transparent flex justify-center leading-[20.3px] break-words px-5 md:text-[17px] md:leading-[24.65px]">
        <div className="text-sm bg-white box-border caret-transparent flex flex-col items-center leading-[20.3px] break-words p-6 rounded-lg shadow-lg border-2 border-gray-200 max-w-4xl w-full md:text-[17px] md:leading-[24.65px] md:p-8">
          {/* Stars and logos centered */}
          <div className="text-sm box-border caret-transparent flex flex-col items-center justify-center leading-[20.3px] break-words w-full mb-6 md:text-[17px] md:leading-[24.65px] md:mb-8">
            <div className="text-sm box-border caret-transparent flex items-center gap-1 mb-3 leading-[20.3px] break-words md:text-[17px] md:mb-4 md:leading-[24.65px]">
              {/* Facebook Logo */}
              <svg
                className="text-blue-600 w-8 h-8 box-border caret-transparent leading-[20.3px] break-words fill-current md:text-[17px] md:w-10 md:h-10 md:leading-[24.65px]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  fill="currentColor"
                />
              </svg>
              {/* Google Logo */}
              <svg
                className="w-8 h-8 box-border caret-transparent leading-[20.3px] break-words ml-2 md:text-[17px] md:w-10 md:h-10 md:leading-[24.65px]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="text-yellow-400 w-6 h-6 box-border caret-transparent leading-[20.3px] break-words fill-current ml-4 md:text-[17px] md:w-8 md:h-8 md:leading-[24.65px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    fill="currentColor"
                  />
                </svg>
              ))}
            </div>
          </div>

          {/* Testimonial in the center with arrows */}
          <div className="text-sm box-border caret-transparent flex items-center gap-4 leading-[20.3px] break-words w-full justify-center md:text-[17px] md:leading-[24.65px]">
            {/* Left Arrow */}
            <button
              onClick={goToPrevious}
              className="text-sm box-border caret-transparent flex items-center justify-center leading-[20.3px] break-words w-10 h-10 rounded-full bg-cyan-600 text-white hover:bg-cyan-700 transition-colors flex-shrink-0 md:text-[17px] md:leading-[24.65px] md:w-12 md:h-12"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Testimonial Box */}
            <div className="text-sm box-border caret-transparent flex flex-col leading-[20.3px] break-words flex-grow md:text-[17px] md:leading-[24.65px]">
              <div className="text-sm box-border caret-transparent flex items-center mb-4 leading-[20.3px] break-words md:text-[17px] md:leading-[24.65px]">
                <div className="text-sm box-border caret-transparent flex items-center justify-center leading-[20.3px] break-words w-10 h-10 rounded-full bg-cyan-600 text-white font-bold mr-3 md:text-[17px] md:leading-[24.65px] md:w-12 md:h-12">
                  {currentTestimonial.name.charAt(0)}
                </div>
                <div className="text-sm box-border caret-transparent leading-[20.3px] break-words md:text-[17px] md:leading-[24.65px]">
                  <div className="text-sm font-semibold text-neutral-900 box-border caret-transparent leading-[20.3px] break-words md:text-[17px] md:leading-[24.65px]">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-sm text-neutral-600 text-xs box-border caret-transparent leading-[16px] break-words md:text-[15px] md:leading-[18px]">
                    Facebook Review
                  </div>
                </div>
              </div>
              <p className="text-sm text-neutral-700 box-border caret-transparent leading-[22px] break-words italic md:text-[16px] md:leading-[24px]">
                "{currentTestimonial.text}"
              </p>
            </div>

            {/* Right Arrow */}
            <button
              onClick={goToNext}
              className="text-sm box-border caret-transparent flex items-center justify-center leading-[20.3px] break-words w-10 h-10 rounded-full bg-cyan-600 text-white hover:bg-cyan-700 transition-colors flex-shrink-0 md:text-[17px] md:leading-[24.65px] md:w-12 md:h-12"
              aria-label="Next testimonial"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

