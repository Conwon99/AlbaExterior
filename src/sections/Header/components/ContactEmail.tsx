import { MessageCircle } from "lucide-react";

export const ContactEmail = () => {
  return (
    <div className="text-sm box-border caret-transparent clear-both flex grow float-none leading-[20.3px] min-h-px break-words w-auto mx-auto md:text-[17px] md:clear-none md:float-none md:leading-[24.65px] md:w-auto md:mx-0">
      <div className="text-sm box-border caret-transparent flex flex-col grow justify-center leading-[20.3px] max-w-full min-w-px break-words w-full md:text-[17px] md:leading-[24.65px]">
        <div className="text-sm box-border caret-transparent leading-[20.3px] break-words md:text-[17px] md:leading-[24.65px]">
          <div className="text-sm box-border caret-transparent leading-[20.3px] break-words mb-5 mx-5 md:text-[17px] md:mb-0 md:mx-0 md:leading-[24.65px]">
            <div className="text-sm box-border caret-transparent leading-[20.3px] break-words flex justify-center md:text-[17px] md:justify-start md:leading-[24.65px]">
              <a
                href="/contact"
                title="Message us"
                role="button"
                aria-label="Message us"
                className="relative text-white text-base font-bold box-border caret-transparent inline-flex items-center gap-2.5 justify-center tracking-wide leading-normal text-center align-middle bg-cyan-500 hover:bg-cyan-400 hover:shadow-lg transition-all overflow-hidden px-6 py-3.5 rounded-md shadow-lg whitespace-nowrap md:px-7 md:py-4"
              >
                <MessageCircle className="w-5 h-5 flex-shrink-0 stroke-[2.5] text-white" />
                <span className="text-white box-border caret-transparent uppercase whitespace-nowrap">
                  Message us
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
