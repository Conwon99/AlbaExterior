import { FooterColumn } from "@/sections/Footer/components/FooterColumn";
import { SocialLinks } from "@/sections/Footer/components/SocialLinks";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";

export const Footer = () => {
  return (
    <section className="relative bg-[linear-gradient(rgb(0,0,0)_0%,rgb(0,0,0)_100%)] box-border caret-transparent">
      <div className="relative box-border caret-transparent flex flex-wrap max-w-[767px] mx-auto md:flex-nowrap md:max-w-[1140px]">
        <div className="relative box-border caret-transparent flex min-h-px w-full">
          <div className="relative content-start box-border caret-transparent flex flex-wrap w-full p-2.5">
            <section className="relative box-border caret-transparent w-full">
              <div className="relative box-border caret-transparent flex flex-wrap max-w-[767px] mx-auto md:flex-nowrap md:max-w-[1140px]">
                <FooterColumn
                  title="Who We Are"
                  variant="who-we-are"
                  logoUrl="https://c.animaapp.com/mjfo8f47q1cuST/assets/Untitled-design-20-300x300-1-150x150.png"
                  logoAlt="Filler Logo 2"
                  description="(BRIEF BUSINESS DESCRIPTION) Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium"
                />
                <FooterColumn
                  title="Contact Us"
                  variant="contact-us"
                  email="israel@izzymarketing.com"
                  emailLabel="Email Us:"
                  phone="(805) 555-5555"
                  phoneLabel="Call Us:"
                  address="BUSINESS ADDRESS"
                  hoursTitle="Hours Of Operation"
                  hoursContent={
                    <>
                      Monday 8:00AM – 5:00PM
                      <br />
                      Tuesday 8:00AM – 5:00PM
                      <br />
                      Wednesday 8:00AM – 5:00PM
                      <br />
                      Thursday 8:00AM – 5:00PM
                      <br />
                      Friday 8:00AM – 5:00PM
                      <br />
                      Saturday 8:00AM – 2:00PM
                      <br />
                      Sunday – Closed
                    </>
                  }
                />
                <FooterColumn
                  title="Service Area (Google Listing)"
                  variant="service-area"
                  mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.754511789593!2d-120.68915602421549!3d35.609121672610684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ecc51798e6aaab%3A0xec84ffad8e223394!2sGet%20Bizzy%20LLC!5e0!3m2!1sen!2sus!4v1739390808279!5m2!1sen!2sus"
                />
              </div>
            </section>
            <SocialLinks />
            <FooterBottom />
          </div>
        </div>
      </div>
    </section>
  );
};
