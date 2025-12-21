export const ServicesCTA = () => {
  return (
    <div className="relative text-sm items-center box-border caret-transparent flex justify-center leading-[20.3px] break-words px-5 py-10 md:text-[17px] md:leading-[24.65px] md:px-5 md:py-16">
      <div className="text-sm box-border caret-transparent grow leading-[20.3px] max-w-[1300px] break-words mx-auto md:text-[17px] md:leading-[24.65px]">
        <div className="text-sm box-border caret-transparent flex flex-col items-center text-center leading-[20.3px] break-words md:text-[17px] md:leading-[24.65px]">
          <h3 className="text-neutral-900 text-[25px] italic font-bold box-border caret-transparent clear-both leading-[35px] break-words uppercase mb-4 font-kanit md:text-3xl md:leading-[42px] md:mb-6">
            Ready For Professional Exterior Cleaning?
          </h3>
          <p className="text-sm text-neutral-700 box-border caret-transparent leading-[22px] break-words mb-8 max-w-2xl md:text-[17px] md:leading-[24px]">
            Give us a call to get a free quote.
          </p>
          <div className="text-sm box-border caret-transparent flex flex-col sm:flex-row gap-4 items-center justify-center leading-[20.3px] break-words w-full md:text-[17px] md:leading-[24.65px]">
            <a
              href="tel:+447368665616"
              title="Call 07368 665616"
              role="button"
              aria-label="Call 07368 665616"
              className="relative text-white text-sm font-semibold items-center box-border caret-transparent inline-flex justify-center tracking-[2px] leading-[18px] max-w-full min-h-[45px] break-words text-center uppercase align-middle px-8 py-3 bg-cyan-600 hover:bg-cyan-700 transition-colors rounded-md md:text-[17px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="box-border caret-transparent break-words">
                CALL 07368 665616
              </span>
            </a>
            <a
              href="/contact"
              title="Get A Free Quote"
              role="button"
              aria-label="Get A Free Quote"
              className="relative text-neutral-900 text-sm font-semibold items-center box-border caret-transparent inline-flex justify-center tracking-[2px] leading-[18px] max-w-full min-h-[45px] break-words text-center uppercase align-middle px-8 py-3 border-cyan-600 border-2 hover:bg-cyan-50 transition-colors rounded-md md:text-[17px]"
            >
              <span className="box-border caret-transparent break-words">
                GET A FREE QUOTE
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

