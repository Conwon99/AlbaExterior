import { ContactForm } from "@/sections/ContactSection/components/ContactForm";

export const ContactSection = () => {
  return (
    <section className="relative bg-[linear-gradient(rgb(85,85,85)_0%,rgb(95,98,100)_100%)] box-border caret-transparent pb-[60px]">
      <div className="relative box-border caret-transparent flex flex-wrap max-w-[767px] mx-auto md:flex-nowrap md:max-w-[1140px]">
        <div className="relative box-border caret-transparent flex min-h-px w-full md:w-[19.999%]">
          <div className="relative content-start box-border caret-transparent flex flex-wrap w-full"></div>
        </div>
        <div className="relative box-border caret-transparent flex min-h-px w-full md:w-[59.667%]">
          <div className="relative content-start bg-[linear-gradient(160deg,rgb(0,0,0)_0%,rgb(8,8,8)_100%)] shadow-[rgba(0,0,0,0.5)_0px_0px_10px_0px] box-border caret-transparent flex flex-wrap w-full -mt-20 p-[30px] rounded-lg border-[3px] border-solid border-white">
            <div className="absolute bg-zinc-600 box-border caret-transparent opacity-50 rounded-lg inset-0"></div>
            <div className="relative box-border caret-transparent text-center w-full mb-5">
              <div className="box-border caret-transparent mt-[-115px]">
                <img
                  src="https://c.animaapp.com/mjfo8f47q1cuST/assets/Untitled-design-20-300x300-1-150x150.png"
                  alt="Filler Logo 2"
                  sizes="(max-width: 150px) 100vw, 150px"
                  className="aspect-[auto_150_/_150] box-border caret-transparent inline-block max-w-full w-[150px]"
                />
              </div>
            </div>
            <div className="relative box-border caret-transparent w-full mb-5">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent">
                  <div className="box-border caret-transparent h-2.5"></div>
                </div>
              </div>
            </div>
            <div className="relative text-white text-[35px] font-medium box-border caret-transparent leading-[35px] text-center w-full mb-5 font-roboto md:leading-[42px]">
              <div className="box-border caret-transparent leading-[35px] md:leading-[42px]">
                <p className="box-border caret-transparent leading-[35px] mb-[14.4px] md:leading-[42px]">
                  Get A Free Estimate On (Service)
                </p>
              </div>
            </div>
            <div className="relative text-white box-border caret-transparent text-center w-full mb-5 font-roboto">
              <div className="box-border caret-transparent">
                <p className="box-border caret-transparent mb-[14.4px]">
                  Fill out the quick form below to schedule a no-pressure,
                  no-obligation quote on the cost of our (Service Area) +
                  (Service Povided)
                </p>
              </div>
            </div>
            <div className="relative text-white box-border caret-transparent text-center w-full mb-5 font-roboto">
              <div className="box-border caret-transparent">
                <p className="box-border caret-transparent mb-[14.4px]">
                  <strong className="font-bold box-border caret-transparent">
                    Need to contact us right away? Call Us:{" "}
                    <a
                      href="tel://addnumber"
                      className="text-pink-600 box-border caret-transparent hover:text-slate-700 hover:border-slate-700"
                    >
                      (000) 555-5555
                    </a>
                  </strong>
                  <br className="box-border caret-transparent" />
                  or simply fill out the form below.
                </p>
              </div>
            </div>
            <div className="relative text-white box-border caret-transparent w-full font-roboto">
              <div className="box-border caret-transparent">
                <div role="form" className="box-border caret-transparent">
                  <span className="box-border caret-transparent"></span>
                  <div className="box-border caret-transparent">
                    <div className="box-border caret-transparent hidden"></div>
                    <div className="box-border caret-transparent"></div>
                    <div className="box-border caret-transparent">
                      <div className="box-border caret-transparent"></div>
                    </div>
                    <div className="box-border caret-transparent">
                      <ContactForm />
                    </div>
                    <div className="box-border caret-transparent">
                      <div className="box-border caret-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative box-border caret-transparent flex min-h-px w-full md:w-1/5">
          <div className="relative content-start box-border caret-transparent flex flex-wrap w-full"></div>
        </div>
      </div>
    </section>
  );
};
