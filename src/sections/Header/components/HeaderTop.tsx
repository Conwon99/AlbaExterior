import { Logo } from "@/components/Logo";
import { ContactInfo } from "@/sections/Header/components/ContactInfo";

export const HeaderTop = () => {
  return (
    <div className="relative text-sm items-center bg-neutral-900 box-border caret-transparent flex justify-center leading-[20.3px] break-words pt-6 pb-5 px-0 md:text-[17px] md:leading-[24.65px] md:pt-0 md:pb-0 md:px-5">
      <div className="static text-sm box-border caret-transparent grow leading-[20.3px] max-w-[1300px] break-words mx-auto md:relative md:text-[17px] md:leading-[24.65px]">
        <div className="text-sm box-border caret-transparent block flex-wrap leading-[20.3px] break-words w-full md:text-[17px] md:flex md:leading-[24.65px]">
          <Logo />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};
