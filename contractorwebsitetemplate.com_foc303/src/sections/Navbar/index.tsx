import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";
import { DesktopMenu } from "@/sections/Navbar/components/DesktopMenu";

export const Navbar = () => {
  return (
    <section className="relative box-border caret-transparent px-0 py-[15px] md:pl-[30px] md:pr-5 md:py-2.5">
      <div className="relative box-border caret-transparent flex flex-wrap max-w-[1300px] mx-auto md:flex-nowrap">
        <NavbarLogo />
        <div className="relative box-border caret-transparent flex min-h-px w-6/12 md:w-4/5">
          <div className="relative content-center items-center box-border caret-transparent flex flex-wrap justify-evenly w-full px-[15px]">
            <div className="relative box-border caret-transparent w-full z-[15]">
              <div className="box-border caret-transparent">
                <nav className="box-border caret-transparent">
                  <button
                    type="button"
                    aria-label="hamburger-icon"
                    className="relative text-white bg-red-700 caret-transparent block float-right text-center text-nowrap w-[45px] z-10 border-red-700 p-2 rounded-[3px] border-[6px] border-solid md:static md:hidden md:w-auto md:z-auto md:border md:px-4 md:rounded-[10px]"
                  >
                    <span className="bg-white box-border caret-transparent block h-px text-nowrap w-full mb-1 md:inline md:h-auto md:w-auto md:mb-0"></span>
                    <span className="bg-white box-border caret-transparent block h-px text-nowrap w-full mb-1 md:inline md:h-auto md:w-auto md:mb-0"></span>
                    <span className="bg-white box-border caret-transparent block h-px text-nowrap w-full md:inline md:h-auto md:w-auto"></span>
                  </button>
                  <DesktopMenu />
                  <div className="fixed bg-zinc-800/50 box-border caret-transparent block h-full w-full z-[14] pb-2.5 -left-full top-0 md:static md:bg-transparent md:hidden md:h-auto md:w-auto md:z-auto md:pb-0 md:left-auto md:top-auto"></div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
