export const MobileMenuToggle = () => {
  return (
    <div className="relative text-white text-sm font-semibold box-border caret-transparent inline-block tracking-[1px] leading-[20.3px] break-words uppercase z-[5] p-2 md:text-[17px] md:hidden md:leading-[24.65px]">
      <div className="relative text-sm box-border caret-transparent inline-block h-[19.6px] leading-[20.3px] break-words align-middle w-[19.6px] md:text-[17px] md:h-[23.8px] md:leading-[24.65px] md:w-[23.8px]">
        <img
          src="https://c.animaapp.com/mjbg2zzdHx1neY/assets/icon-1.svg"
          alt="Icon"
          className="absolute text-sm box-border caret-transparent leading-[20.3px] inset-0 md:text-[17px] md:leading-[24.65px]"
        />
      </div>
      <span className="text-sm box-border caret-transparent inline-block leading-[20.3px] break-words align-middle ml-2.5 md:text-[17px] md:leading-[24.65px]">
        Menu
      </span>
    </div>
  );
};
