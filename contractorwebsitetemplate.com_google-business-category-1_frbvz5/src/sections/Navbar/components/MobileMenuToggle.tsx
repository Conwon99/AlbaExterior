export const MobileMenuToggle = () => {
  return (
    <button
      type="button"
      aria-label="hamburger-icon"
      className="relative text-white bg-red-700 caret-transparent block float-right text-center text-nowrap w-[45px] z-10 border-red-700 p-2 rounded-[3px] border-[6px] border-solid md:static md:hidden md:w-auto md:z-auto md:border md:px-4 md:rounded-[10px]"
    >
      <span className="bg-white box-border caret-transparent block h-px text-nowrap w-full mb-1 md:inline md:h-auto md:w-auto md:mb-0"></span>
      <span className="bg-white box-border caret-transparent block h-px text-nowrap w-full mb-1 md:inline md:h-auto md:w-auto md:mb-0"></span>
      <span className="bg-white box-border caret-transparent block h-px text-nowrap w-full md:inline md:h-auto md:w-auto"></span>
    </button>
  );
};
