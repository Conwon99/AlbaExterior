export const DesktopMenu = () => {
  return (
    <div className="text-sm box-border caret-transparent hidden leading-[20.3px] break-words md:text-[17px] md:block md:leading-[24.65px]">
      <div className="text-sm box-border caret-transparent leading-[20.3px] break-words text-center md:text-[17px] md:leading-[24.65px]">
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
      </div>
      <div className="text-sm box-border caret-transparent leading-[20.3px] break-words md:text-[17px] md:leading-[24.65px]"></div>
      <ul className="relative text-[0px] box-border caret-transparent hidden leading-[0px] list-none break-words text-center mt-5 pl-0 md:flex md:items-center md:mt-0 md:text-right before:accent-auto before:box-border before:caret-transparent before:clear-both before:text-black before:table before:text-[0px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[0px] before:list-outside before:list-none before:break-words before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-figtree after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-black after:table after:text-[0px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[0px] after:list-outside after:list-none after:break-words after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:visible after:border-separate after:font-figtree">
        <li className="relative text-base box-border caret-transparent list-item leading-[23.2px] break-words mx-0 my-[5px] md:mx-[15px] md:my-0">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("hero");
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="text-cyan-600 font-semibold box-border caret-transparent block tracking-[1px] leading-4 break-words uppercase py-[5px] hover:text-sky-300 transition-colors"
          >
            <span className="text-sky-300 box-border caret-transparent break-words w-full">
              Home
            </span>
          </a>
        </li>
        <li className="relative text-base box-border caret-transparent list-item leading-[23.2px] break-words mx-0 my-[5px] md:mx-[15px] md:my-0">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("about");
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="text-cyan-600 font-semibold box-border caret-transparent block tracking-[1px] leading-4 break-words uppercase py-[5px] hover:text-sky-300 transition-colors"
          >
            <span className="text-white box-border caret-transparent break-words w-full">
              About
            </span>
          </a>
        </li>
        <li className="relative text-base box-border caret-transparent list-item leading-[23.2px] break-words mx-0 my-[5px] md:mx-[15px] md:my-0">
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("services");
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="text-cyan-600 font-semibold box-border caret-transparent block tracking-[1px] leading-4 break-words uppercase py-[5px] hover:text-sky-300 transition-colors"
          >
            <span className="text-white box-border caret-transparent break-words w-full">
              Services
            </span>
          </a>
        </li>
        <li className="relative text-base box-border caret-transparent list-item leading-[23.2px] break-words mx-0 my-[5px] md:mx-[15px] md:my-0">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="text-cyan-600 font-semibold box-border caret-transparent block tracking-[1px] leading-4 break-words uppercase py-[5px] hover:text-sky-300 transition-colors"
          >
            <span className="text-white box-border caret-transparent break-words w-full">
              Contact
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};
