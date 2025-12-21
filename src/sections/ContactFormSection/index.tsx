import { ContactForm } from "@/sections/ContactFormSection/components/ContactForm";

export const ContactFormSection = () => {
  return (
    <div id="contact" className="relative text-sm items-center box-border caret-transparent flex justify-center leading-[20.3px] break-words px-4 pt-0 pb-[50px] md:text-[17px] md:leading-[24.65px] md:px-5 md:pt-0 md:pb-[100px]">
      <div className="relative text-sm box-border caret-transparent grow leading-[20.3px] max-w-[1200px] break-words z-[2] mx-auto md:text-[17px] md:leading-[24.65px]">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
          <div className="text-sm box-border caret-transparent flex flex-col leading-[20.3px] break-words md:text-[17px] md:leading-[24.65px]">
            <div className="text-sm box-border caret-transparent leading-[20.3px] break-words w-full mb-6 md:text-[17px] md:leading-[24.65px]">
              <div className="text-sm box-border caret-transparent leading-[20.3px] break-words text-center md:text-[17px] md:leading-[24.65px]">
                <h3 className="text-neutral-900 text-[25px] italic font-bold box-border caret-transparent clear-both leading-[35px] break-words uppercase mt-0 mb-2 font-kanit md:text-[35px] md:leading-[49px]">
                  Send us a message
                </h3>
                <p className="text-neutral-700 text-sm box-border caret-transparent leading-[20.3px] break-words md:text-[17px] md:leading-[24.65px]">
                  Fill in our contact form and we will get back to you.
                </p>
              </div>
            </div>
            <div className="text-sm box-border caret-transparent leading-[20.3px] break-words w-full md:text-[17px] md:leading-[24.65px]">
              <ContactForm />
              <iframe
                src="about://blank"
                name="gform_ajax_frame_1"
                title="This iframe contains the logic required to handle Ajax powered Gravity Forms."
                className="text-sm box-border caret-transparent hidden h-0 leading-[20.3px] max-w-full break-words w-0 border-zinc-100 md:text-[17px] md:leading-[24.65px]"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
