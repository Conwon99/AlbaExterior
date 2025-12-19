export const ContactEmail = () => {
  return (
    <div className="text-sm box-border caret-transparent clear-both flex grow float-none leading-[20.3px] min-h-px break-words w-auto mx-auto md:text-[17px] md:clear-none md:float-none md:leading-[24.65px] md:w-auto md:mx-0">
      <div className="text-sm box-border caret-transparent flex flex-col grow justify-center leading-[20.3px] max-w-full min-w-px break-words w-full md:text-[17px] md:leading-[24.65px]">
        <div className="text-sm box-border caret-transparent leading-[20.3px] break-words md:text-[17px] md:leading-[24.65px] before:accent-auto before:box-border before:caret-transparent before:text-black before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[20.3px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-figtree before:md:text-[17px] before:md:leading-[24.65px] after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-black after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[20.3px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-figtree after:md:text-[17px] after:md:leading-[24.65px]">
          <div className="text-sm box-border caret-transparent leading-[20.3px] break-words mb-5 mx-5 md:text-[17px] md:mb-0 md:mx-0 md:leading-[24.65px] before:accent-auto before:box-border before:caret-transparent before:text-black before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[20.3px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-figtree before:md:text-[17px] before:md:leading-[24.65px] after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-black after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[20.3px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-figtree after:md:text-[17px] after:md:leading-[24.65px]">
            <div className="text-sm box-border caret-transparent leading-[20.3px] break-words flex justify-center md:text-[17px] md:justify-start md:leading-[24.65px]">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                title="Get A Free Quote"
                role="button"
                aria-label="Get A Free Quote"
                className="relative text-white text-lg font-bold box-border caret-transparent inline-flex items-center justify-center tracking-[2px] leading-[24px] break-words text-center align-middle bg-cyan-600 hover:bg-cyan-700 hover:shadow-lg transition-all overflow-hidden px-8 py-5 rounded-md shadow-md md:text-base md:px-8 md:py-4 md:leading-[22px] after:accent-auto after:box-border after:caret-transparent after:text-white after:block after:text-lg after:not-italic after:normal-nums after:font-bold after:tracking-[2px] after:leading-[24px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:absolute after:text-center after:indent-[0px] after:normal-case after:visible after:z-[1] after:border-separate after:font-figtree md:after:text-base md:after:leading-[22px]"
              >
                <span className="box-border caret-transparent break-words uppercase">
                  Get A Free Quote
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
