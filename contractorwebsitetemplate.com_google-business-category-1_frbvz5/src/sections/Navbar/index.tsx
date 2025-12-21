import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";
import { NavbarMenu } from "@/sections/Navbar/components/NavbarMenu";

export const Navbar = () => {
  return (
    <section className="relative box-border caret-transparent px-0 py-[15px] md:pl-[30px] md:pr-5 md:py-2.5">
      <div className="relative box-border caret-transparent flex flex-wrap max-w-[1300px] mx-auto md:flex-nowrap">
        <NavbarLogo />
        <div className="relative box-border caret-transparent flex min-h-px w-6/12 md:w-4/5">
          <div className="relative content-center items-center box-border caret-transparent flex flex-wrap justify-evenly w-full px-[15px]">
            <div className="relative box-border caret-transparent w-full z-[15]">
              <div className="box-border caret-transparent">
                <NavbarMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
