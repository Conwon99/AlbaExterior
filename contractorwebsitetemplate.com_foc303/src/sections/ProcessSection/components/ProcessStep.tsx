export type ProcessStepProps = {
  title: string;
  description: string;
};

export const ProcessStep = (props: ProcessStepProps) => {
  return (
    <div className="relative content-start bg-[linear-gradient(rgb(200,25,24)_0%,rgb(200,25,24)_100%)] shadow-[rgba(0,0,0,0.2)_0px_0px_10px_0px] box-border caret-transparent flex flex-wrap w-full mb-[5px] mx-2.5 p-2.5 rounded-[10px] border-[3px] border-solid md:mb-0">
      <div className="relative box-border caret-transparent w-full">
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent gap-x-[15px] flex flex-col gap-y-[15px] text-center">
            <div className="box-border caret-transparent shrink-0 leading-[0px]">
              <span className="text-zinc-600 text-[25px] bg-white box-border caret-transparent inline-block fill-zinc-600 leading-[25px] p-[12.5px] rounded-[50%]">
                <i className="relative italic box-border caret-transparent block fill-zinc-600 h-[25px] w-[25px] before:accent-auto before:box-border before:caret-transparent before:text-zinc-600 before:block before:fill-zinc-600 before:text-[25px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[25px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-center before:indent-[0px] before:normal-case before:translate-x-[-12.5px] before:visible before:border-separate before:left-2/4 before:font-elementskit"></i>
              </span>
            </div>
            <div className="box-border caret-transparent grow w-full">
              <h3 className="text-white text-xl font-semibold box-border caret-transparent mt-2 mb-4 font-roboto">
                <span className="box-border caret-transparent">
                  {props.title}
                </span>
              </h3>
              <p className="text-white text-[15px] box-border caret-transparent leading-[22.5px] font-roboto">
                {props.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
