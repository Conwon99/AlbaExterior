export type FeatureCardProps = {
  title: string;
  description: string;
};

export const FeatureCard = (props: FeatureCardProps) => {
  return (
    <div className="relative box-border caret-transparent flex min-h-px w-full md:w-[33.333%]">
      <div className="relative content-start box-border caret-transparent flex flex-wrap w-full p-2.5 rounded-[20px] border-[10px] border-solid border-transparent">
        <div className="absolute bg-[linear-gradient(rgb(200,25,24)_0%,rgb(200,25,24)_100%)] box-border caret-transparent rounded-[20px] inset-0"></div>
        <div className="relative box-border caret-transparent w-full">
          <div className="box-border caret-transparent">
            <div className="box-border caret-transparent gap-x-[15px] flex flex-col gap-y-[15px] text-center">
              <div className="box-border caret-transparent shrink-0 leading-[0px]">
                <span className="text-white text-[50px] bg-zinc-600 box-border caret-transparent inline-block fill-white leading-[50px] p-[25px] rounded-[50%]">
                  <i className="relative italic box-border caret-transparent block fill-white h-[50px] w-[50px] before:accent-auto before:box-border before:caret-transparent before:text-white before:block before:fill-white before:text-[50px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[50px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-center before:indent-[0px] before:normal-case before:translate-x-[-25px] before:visible before:border-separate before:left-2/4 before:font-elementskit"></i>
                </span>
              </div>
              <div className="box-border caret-transparent grow w-full">
                <h3 className="text-white text-[25px] font-medium box-border caret-transparent leading-[30px] stroke-black mt-2 mb-4 font-roboto">
                  <span className="box-border caret-transparent stroke-black">
                    {props.title}
                  </span>
                </h3>
                <p className="text-white box-border caret-transparent font-roboto">
                  {props.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
