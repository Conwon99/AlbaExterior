import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { FeatureRow } from "@/sections/FeatureRow";
import { ServiceIntro } from "@/sections/ServiceIntro";
import { WelcomeSection } from "@/sections/WelcomeSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { DifferentiatorSection } from "@/sections/DifferentiatorSection";
import { ProcessSection } from "@/sections/ProcessSection";
import { ReviewsSection } from "@/sections/ReviewsSection";
import { ContactSection } from "@/sections/ContactSection";
import { CTASection } from "@/sections/CTASection";
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
        <FeatureRow />
        <ServiceIntro />
        <WelcomeSection />
        <ServicesSection />
        <DifferentiatorSection />
        <ProcessSection />
        <ReviewsSection />
        <ContactSection />
        <CTASection />
      </div>
      <div className="box-border caret-transparent clear-both">
        <div className="box-border caret-transparent">
          <Footer />
        </div>
      </div>
    </body>
  );
};
