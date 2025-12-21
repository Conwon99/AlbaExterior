export const FooterBottom = () => {
  return (
    <section className="relative box-border caret-transparent w-full">
      <div className="relative box-border caret-transparent flex flex-wrap max-w-[767px] mx-auto md:flex-nowrap md:max-w-[1140px]">
        <div className="relative box-border caret-transparent flex min-h-px w-full md:w-[49.821%]">
          <div className="relative content-start box-border caret-transparent flex flex-wrap w-full p-2.5">
            <div className="relative text-white box-border caret-transparent text-center w-full font-roboto">
              <div className="box-border caret-transparent">
                <p className="box-border caret-transparent mb-[14.4px]">
                  ©2024 Alba Exteriors All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative box-border caret-transparent hidden min-h-px min-w-0 w-full md:flex md:min-w-[auto] md:w-[20.09%]">
          <div className="relative content-start box-border caret-transparent flex flex-wrap min-h-0 min-w-0 w-full md:min-h-[auto] md:min-w-[auto]"></div>
        </div>
        <div className="relative box-border caret-transparent flex min-h-px w-full md:w-[15%]">
          <div className="relative content-start box-border caret-transparent flex flex-wrap w-full p-2.5">
            <div className="relative box-border caret-transparent text-center w-full font-roboto">
              <div className="box-border caret-transparent">
                <p className="box-border caret-transparent mb-[14.4px]">
                  <a
                    href="/privacy-policy"
                    className="text-cyan-500 box-border caret-transparent hover:text-cyan-400"
                  >
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative box-border caret-transparent flex min-h-px w-full md:w-[15.044%]">
          <div className="relative content-start box-border caret-transparent flex flex-wrap w-full p-2.5">
            <div className="relative box-border caret-transparent text-center w-full font-roboto">
              <div className="box-border caret-transparent">
                <p className="box-border caret-transparent mb-[14.4px]">
                  <a
                    href="/terms-conditions"
                    className="text-cyan-500 box-border caret-transparent hover:text-cyan-400"
                  >
                    Terms &amp; Conditions
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

