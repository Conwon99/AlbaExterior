import { FooterColumn } from "@/sections/Footer/components/FooterColumn";
import { SocialLinks } from "@/sections/Footer/components/SocialLinks";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";

export const Footer = () => {
  return (
    <section className="relative bg-[linear-gradient(rgb(0,0,0)_0%,rgb(0,0,0)_100%)] box-border caret-transparent">
      <div className="relative box-border caret-transparent flex flex-wrap max-w-[1300px] mx-auto md:flex-nowrap">
        <div className="relative box-border caret-transparent flex min-h-px w-full">
          <div className="relative content-start box-border caret-transparent flex flex-wrap w-full p-2.5">
            <section className="relative box-border caret-transparent w-full">
              <div className="relative box-border caret-transparent flex flex-wrap max-w-[1300px] mx-auto md:flex-nowrap">
                <FooterColumn
                  title="Who We Are"
                  variant="who-we-are"
                  logoUrl="/alba-logo.png"
                  logoAlt="Alba Exteriors Logo"
                  description="Alba Exteriors is a professional exterior cleaning company based in Paisley, serving Scotland. We are dedicated to customer satisfaction and reliability, specializing in pressure washing and softwashing services. Our services include pressure washing for driveways, patios, and hard surfaces, as well as gentle softwashing for render, walls, and delicate surfaces to remove algae, moss, and grime without causing damage."
                />
                <FooterColumn
                  title="Contact Us"
                  variant="contact-us"
                  email="info@albaexteriors.co.uk"
                  emailLabel="Email Us:"
                  phone="0141 123 4567"
                  phoneLabel="Call Us:"
                  address="Paisley, Scotland"
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
                      Saturday 9:00AM – 2:00PM
                      <br />
                      Sunday – Closed
                    </>
                  }
                />
                <FooterColumn
                  title="Service Area"
                  variant="service-area"
                  mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2280.1234567890123!2d-4.4321!3d55.8456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDUwJzQ0LjIiTiA0wrAyNicwNS42Ilc!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
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
