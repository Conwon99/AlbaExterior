export type ServiceCardProps = {
  href: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  variant: string;
  hasStroke?: boolean;
};

export const ServiceCard = (props: ServiceCardProps) => {
  return (
    <div className="relative box-border caret-transparent flex min-h-px w-full md:w-[33.333%]">
      <div
        className={`relative content-start bg-[linear-gradient(rgb(255,255,255)_0%,rgb(255,255,255)_100%)] shadow-[rgba(0,0,0,0.2)_0px_0px_10px_0px] box-border caret-transparent flex flex-wrap w-full p-5 rounded-[20px] ${props.variant}`}
      >
        <div className="relative box-border caret-transparent w-full mb-5">
          <div className="box-border caret-transparent">
            <div className="box-border caret-transparent text-center">
              <figure className="box-border caret-transparent inline-block w-full mb-[9px] mx-auto md:mx-0">
                <a
                  href={props.href}
                  className="text-pink-600 box-border caret-transparent hover:text-slate-700 hover:border-slate-700"
                >
                  <img
                    src={props.imageUrl}
                    alt={props.imageAlt}
                    sizes="(max-width: 500px) 100vw, 500px"
                    className="aspect-[auto_500_/_500] box-border caret-transparent leading-[0px] max-w-full w-[500px]"
                  />
                </a>
              </figure>
              <div className="box-border caret-transparent w-full">
                <h3
                  className={`text-[22px] font-medium box-border caret-transparent leading-[26.4px] ${props.hasStroke ? "stroke-black" : ""} mt-2 mb-4 font-roboto md:text-2xl md:leading-[28.8px]`}
                >
                  <a
                    href={props.href}
                    className={`text-[22px] box-border caret-transparent leading-[26.4px] ${props.hasStroke ? "stroke-black" : ""} md:text-2xl md:leading-[28.8px]`}
                  >
                    {props.title}
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="relative text-[15px] box-border caret-transparent leading-[22.5px] text-center w-full font-roboto">
          <div className="box-border caret-transparent">
            <p className="box-border caret-transparent mb-[14.4px]">
              {props.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
