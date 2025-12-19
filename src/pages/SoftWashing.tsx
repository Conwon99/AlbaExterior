import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { CallButton } from "@/components/CallButton";
import { ContactFormSection } from "@/sections/ContactFormSection";
import { SoftwashingSection } from "@/sections/SoftwashingSection";

export const SoftWashing = () => {
  return (
    <>
      <Header />
      <div
        role="main"
        className="text-sm bg-white box-border caret-transparent leading-[20.3px] break-words md:text-[17px] md:leading-[24.65px]"
      >
        {/* Hero Section with Background Image */}
        <div className="relative text-sm box-border caret-transparent flex items-center justify-center leading-[20.3px] break-words h-[400px] md:text-[17px] md:h-[500px] md:leading-[24.65px] overflow-hidden">
          <div
            className="absolute inset-0 bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url('${encodeURI("/softwashing1.jpg")}')`,
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative text-sm box-border caret-transparent z-10 leading-[20.3px] break-words text-center md:text-[17px] md:leading-[24.65px]">
            <h1 className="text-white text-4xl italic font-bold box-border caret-transparent leading-[50px] break-words uppercase font-kanit md:text-6xl md:leading-[70px] drop-shadow-lg">
              Soft Washing
            </h1>
          </div>
        </div>

        <SoftwashingSection />
        <div className="text-sm box-border caret-transparent leading-[20.3px] break-words mx-auto md:text-[17px] md:leading-[24.65px] before:accent-auto before:box-border before:caret-transparent before:text-black before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[20.3px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-figtree before:md:text-[17px] before:md:leading-[24.65px] after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-black after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[20.3px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-figtree after:md:text-[17px] after:md:leading-[24.65px]">
          <ContactFormSection />
        </div>
      </div>
      <Footer />
      <CallButton />
    </>
  );
};

