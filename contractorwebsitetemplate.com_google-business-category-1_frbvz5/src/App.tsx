import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { ServiceIntro } from "@/sections/ServiceIntro";
import { FeatureCards } from "@/sections/FeatureCards";
import { ServiceDetails } from "@/sections/ServiceDetails";
import { ProcessSteps } from "@/sections/ProcessSteps";
import { BottomContactForm } from "@/sections/BottomContactForm";
import { FinalCTA } from "@/sections/FinalCTA";
import { Footer } from "@/sections/Footer";

export const App = () => {
  return (
    <body className="text-black text-base not-italic normal-nums font-normal accent-auto bg-[linear-gradient(190deg,rgb(255,255,255)_100%,rgb(255,255,255)_100%)] box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-apple_system">
      <div className="box-border caret-transparent clear-both">
        <div className="box-border caret-transparent">
          <Navbar />
        </div>
      </div>
      <div className="box-border caret-transparent">
        <Hero />
        <ServiceIntro />
        <FeatureCards />
        <section className="relative bg-[linear-gradient(rgb(200,25,24)_0%,rgb(200,25,24)_100%)] box-border caret-transparent">
          <div className="relative box-border caret-transparent flex flex-wrap max-w-[767px] mx-auto md:flex-nowrap md:max-w-[1140px]">
            <div className="relative box-border caret-transparent flex min-h-px w-full">
              <div className="relative content-start box-border caret-transparent flex flex-wrap w-full p-2.5">
                <div className="relative box-border caret-transparent text-center w-full">
                  <div className="box-border caret-transparent mt-[-79px]">
                    <img
                      src="https://c.animaapp.com/mjfqi6l8cAeBpe/assets/Untitled-design-20-300x300-1-150x150.png"
                      alt="Filler Logo 2"
                      sizes="(max-width: 150px) 100vw, 150px"
                      className="aspect-[auto_150_/_150] box-border caret-transparent inline-block max-w-full w-[150px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ServiceDetails />
        <ProcessSteps />
        <BottomContactForm />
        <FinalCTA />
      </div>
      <div className="box-border caret-transparent clear-both">
        <div className="box-border caret-transparent">
          <Footer />
        </div>
      </div>
    </body>
  );
};
