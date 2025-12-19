import { FooterContactInfo } from "@/sections/Footer/components/FooterContactInfo";
import { FooterMap } from "@/sections/Footer/components/FooterMap";

export const FooterContent = () => {
  return (
    <div className="relative text-sm items-center bg-white box-border caret-transparent flex justify-center leading-[20.3px] break-words p-5 md:text-[17px] md:leading-[24.65px] md:py-[100px]">
      <div className="text-sm box-border caret-transparent grow leading-[20.3px] max-w-[1300px] break-words mx-auto md:text-[17px] md:leading-[24.65px] before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[20.3px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-figtree before:md:text-[17px] before:md:leading-[24.65px] after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-neutral-900 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[20.3px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-figtree after:md:text-[17px] after:md:leading-[24.65px]">
        <div className="text-sm box-border caret-transparent block flex-wrap leading-[20.3px] break-words w-full md:text-[17px] md:flex md:leading-[24.65px]">
          <FooterContactInfo />
          <FooterMap />
        </div>
      </div>
    </div>
  );
};
