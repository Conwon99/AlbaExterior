import { MobileMenuToggle } from "@/sections/Navbar/components/MobileMenuToggle";
import { NavbarLinks } from "@/sections/Navbar/components/NavbarLinks";

export const NavbarMenu = () => {
  return (
    <nav className="box-border caret-transparent">
      <MobileMenuToggle />
      <NavbarLinks />
      <div className="fixed bg-zinc-800/50 box-border caret-transparent block h-full w-full z-[14] pb-2.5 -left-full top-0 md:static md:bg-transparent md:hidden md:h-auto md:w-auto md:z-auto md:pb-0 md:left-auto md:top-auto"></div>
    </nav>
  );
};
