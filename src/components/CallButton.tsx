export const CallButton = () => {
  return (
    <a
      aria-label="Call Us: 07368 665616"
      href="tel://+447368665616"
      className="fixed text-sm bg-black box-border caret-transparent flex items-center gap-4 leading-[20.3px] break-words px-5 py-4 rounded-lg shadow-[rgba(0,0,0,0.3)_0px_3px_6px_0px] z-[2147483647] left-5 bottom-[15px] hover:bg-neutral-900 transition-colors md:text-[17px] md:hidden md:leading-[24.65px]"
    >
      {/* Circular Icon with Phone */}
      <div className="relative text-sm box-border caret-transparent flex items-center justify-center leading-[20.3px] break-words w-12 h-12 rounded-full bg-black border-2 border-cyan-600 flex-shrink-0 md:text-[17px] md:leading-[24.65px]">
        <svg
          className="w-6 h-6 text-cyan-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          style={{ transform: "rotate(45deg)" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      </div>
      
      {/* Text Content */}
      <div className="text-sm box-border caret-transparent flex flex-col leading-[20.3px] break-words md:text-[17px] md:leading-[24.65px]">
        <span className="text-neutral-400 text-xs box-border caret-transparent leading-[16px] break-words font-medium uppercase tracking-wide md:text-[17px] md:leading-[24.65px]">
          Call Us Now
        </span>
        <span className="text-neutral-300 text-xl box-border caret-transparent leading-[28px] break-words font-bold md:text-[17px] md:leading-[24.65px]">
          07368 665616
        </span>
      </div>
    </a>
  );
};
