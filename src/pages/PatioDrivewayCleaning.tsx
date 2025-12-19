import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { CallButton } from "@/components/CallButton";
import { ContactFormSection } from "@/sections/ContactFormSection";

export const PatioDrivewayCleaning = () => {
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
              backgroundImage: `url('${encodeURI("/pressurewashing.png")}')`,
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative text-sm box-border caret-transparent z-10 leading-[20.3px] break-words text-center md:text-[17px] md:leading-[24.65px]">
            <h1 className="text-white text-4xl italic font-bold box-border caret-transparent leading-[50px] break-words uppercase font-kanit md:text-6xl md:leading-[70px] drop-shadow-lg">
              Patio & Driveway Cleaning
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative text-sm items-center box-border caret-transparent flex justify-center leading-[20.3px] break-words px-5 py-10 md:text-[17px] md:leading-[24.65px] md:px-5 md:py-16">
          <div className="text-sm box-border caret-transparent grow leading-[20.3px] max-w-[1300px] break-words mx-auto md:text-[17px] md:leading-[24.65px]">
            <div className="text-sm box-border caret-transparent flex flex-col md:flex-row gap-8 leading-[20.3px] break-words md:text-[17px] md:leading-[24.65px] md:gap-12">
              {/* Left Side - Text Content */}
              <div className="text-sm box-border caret-transparent flex flex-col leading-[20.3px] break-words w-full md:text-[17px] md:leading-[24.65px] md:w-1/2">
                <div className="text-sm box-border caret-transparent flex flex-col leading-[20.3px] break-words md:text-[17px] md:leading-[24.65px]">
                  <p className="text-sm text-neutral-700 box-border caret-transparent leading-[22px] break-words mb-4 md:text-[17px] md:leading-[24px]">
                    Professional patio and driveway cleaning is essential for maintaining the appearance and value of your property. Over time, patios and driveways accumulate dirt, grime, oil stains, moss, and other contaminants that can make your property look unkempt and reduce its curb appeal.
                  </p>
                  <p className="text-sm text-neutral-700 box-border caret-transparent leading-[22px] break-words mb-4 md:text-[17px] md:leading-[24px]">
                    Our professional pressure washing service uses high-pressure equipment to effectively remove years of built-up dirt, stains, and debris from your patios and driveways. We can tackle even the toughest stains, including oil marks, moss growth, and general grime, leaving your hard surfaces looking like new.
                  </p>
                  <p className="text-sm text-neutral-700 box-border caret-transparent leading-[22px] break-words mb-4 md:text-[17px] md:leading-[24px]">
                    <strong className="text-sm font-bold box-border caret-transparent leading-[22px] break-words md:text-[17px] md:leading-[24px]">
                      What We Clean:
                    </strong>
                  </p>
                  <ul className="text-sm text-neutral-700 box-border caret-transparent leading-[22px] break-words mb-4 list-disc list-inside md:text-[17px] md:leading-[24px]">
                    <li className="text-sm box-border caret-transparent leading-[22px] break-words mb-2 md:text-[17px] md:leading-[24px]">
                      Patios and decking
                    </li>
                    <li className="text-sm box-border caret-transparent leading-[22px] break-words mb-2 md:text-[17px] md:leading-[24px]">
                      Driveways and paths
                    </li>
                    <li className="text-sm box-border caret-transparent leading-[22px] break-words mb-2 md:text-[17px] md:leading-[24px]">
                      Oil stains and marks
                    </li>
                    <li className="text-sm box-border caret-transparent leading-[22px] break-words mb-2 md:text-[17px] md:leading-[24px]">
                      Moss and algae removal
                    </li>
                    <li className="text-sm box-border caret-transparent leading-[22px] break-words md:text-[17px] md:leading-[24px]">
                      General dirt and grime removal
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="text-sm box-border caret-transparent flex flex-col leading-[20.3px] break-words w-full md:text-[17px] md:leading-[24.65px] md:w-1/2">
                <div
                  className="text-sm bg-no-repeat bg-cover bg-center box-border caret-transparent block leading-[20.3px] break-words w-full h-[400px] rounded-lg shadow-lg md:text-[17px] md:h-[500px] md:leading-[24.65px]"
                  style={{
                    backgroundImage: `url('${encodeURI("/pressurewashing.png")}')`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-sm box-border caret-transparent leading-[20.3px] break-words mx-auto md:text-[17px] md:leading-[24.65px] before:accent-auto before:box-border before:caret-transparent before:text-black before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[20.3px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-figtree before:md:text-[17px] before:md:leading-[24.65px] after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-black after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[20.3px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-figtree after:md:text-[17px] after:md:leading-[24.65px]">
          <ContactFormSection />
        </div>
      </div>
      <Footer />
      <CallButton />
    </>
  );
};

