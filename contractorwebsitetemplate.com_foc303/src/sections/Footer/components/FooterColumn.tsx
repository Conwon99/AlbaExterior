export type FooterColumnProps = {
  title: string;
  variant: string;
  logoUrl?: string;
  logoAlt?: string;
  description?: string;
  email?: string;
  emailLabel?: string;
  phone?: string;
  phoneLabel?: string;
  address?: string;
  hoursTitle?: string;
  hoursContent?: React.ReactNode;
  mapEmbedUrl?: string;
};

export const FooterColumn = (props: FooterColumnProps) => {
  return (
    <div className="relative box-border caret-transparent flex min-h-px w-full md:w-[33.333%]">
      <div className="relative content-start box-border caret-transparent flex flex-wrap w-full p-2.5">
        <div className="relative box-border caret-transparent w-full mb-5">
          <div className="box-border caret-transparent">
            <p className="text-white text-[26px] font-semibold box-border caret-transparent leading-[26px] font-roboto_condensed">
              {props.title}
            </p>
          </div>
        </div>

        {props.variant === "who-we-are" && (
          <>
            <div className="relative box-border caret-transparent w-full mb-5">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent">
                  <div className="box-border caret-transparent h-2.5"></div>
                </div>
              </div>
            </div>
            <div className="relative box-border caret-transparent text-center w-full mb-5">
              <div className="box-border caret-transparent">
                <a
                  href="https://contractorwebsitetemplate.com/home-1/"
                  className="text-pink-600 box-border caret-transparent inline-block hover:text-slate-700 hover:border-slate-700"
                >
                  <img
                    src={props.logoUrl}
                    alt={props.logoAlt}
                    sizes="(max-width: 150px) 100vw, 150px"
                    className="aspect-[auto_150_/_150] box-border caret-transparent inline-block max-w-full w-[150px]"
                  />
                </a>
              </div>
            </div>
            <div className="relative text-white box-border caret-transparent text-center w-full font-ruda">
              <div className="box-border caret-transparent">
                <p className="box-border caret-transparent mb-[14.4px]">
                  {props.description}
                </p>
              </div>
            </div>
          </>
        )}

        {props.variant === "contact-us" && (
          <>
            <div className="relative text-white box-border caret-transparent w-full mb-5 font-roboto">
              <div className="box-border caret-transparent">
                <p className="box-border caret-transparent mb-[14.4px]">
                  {props.emailLabel}{" "}
                  <a
                    href={`mailto://${props.email}`}
                    className="text-pink-600 box-border caret-transparent hover:text-slate-700 hover:border-slate-700"
                  >
                    {props.email}
                  </a>
                </p>
                <p className="box-border caret-transparent mb-[14.4px]">
                  <span className="box-border caret-transparent">
                    {props.phoneLabel}
                    <a
                      href={`tel://${props.phone}`}
                      className="text-pink-600 box-border caret-transparent hover:text-slate-700 hover:border-slate-700"
                    >
                      {" "}
                      {props.phone}
                    </a>
                  </span>
                </p>
                <p className="box-border caret-transparent mb-[14.4px]">
                  <span className="box-border caret-transparent">
                    Address: {props.address}
                  </span>
                </p>
              </div>
            </div>
            <div className="relative text-white text-[15px] box-border caret-transparent leading-[22.5px] w-full font-roboto">
              <div className="box-border caret-transparent">
                <p className="box-border caret-transparent mb-[14.4px]">
                  <strong className="font-bold box-border caret-transparent">
                    {props.hoursTitle}
                  </strong>
                </p>
                <p className="box-border caret-transparent mb-[14.4px]">
                  {props.hoursContent}
                </p>
              </div>
            </div>
          </>
        )}

        {props.variant === "service-area" && (
          <div className="relative box-border caret-transparent w-full">
            <div className="box-border caret-transparent">
              <iframe
                src={props.mapEmbedUrl}
                className="box-border caret-transparent h-[400px] leading-4 max-w-full w-full"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
