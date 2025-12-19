export type ProcessStepProps = {
  stepNumber: string;
  title: string;
  content: React.ReactNode;
  containerVariant: string;
  gridVariant: string;
  imageVariant: string;
};

export const ProcessStep = (props: ProcessStepProps) => {
  return (
    <div
      className={`text-sm box-border caret-transparent clear-both flex float-none leading-[20.3px] min-h-px min-w-0 break-words mx-auto md:text-[17px] md:clear-none md:float-left md:leading-[24.65px] md:min-w-[auto] md:mx-0 ${props.containerVariant}`}
    >
      <div
        className={`text-sm bg-no-repeat bg-cover box-border caret-transparent flex flex-col grow justify-center leading-[20.3px] max-w-full min-h-[350px] min-w-px break-words w-full m-5 p-5 md:text-[17px] md:leading-[24.65px] md:px-[100px] md:py-[150px] ${props.gridVariant}`}
      >
        <div className="text-sm box-border caret-transparent leading-[20.3px] min-h-0 min-w-0 break-words w-full md:text-[17px] md:leading-[24.65px] md:min-h-[auto] md:min-w-[auto] before:accent-auto before:box-border before:caret-transparent before:text-black before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[20.3px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-figtree before:md:text-[17px] before:md:leading-[24.65px] after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-black after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[20.3px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-figtree after:md:text-[17px] after:md:leading-[24.65px]">
          <div
            className={`text-sm box-border caret-transparent clear-both flex grow-0 float-none leading-[20.3px] min-h-px break-words w-full mx-auto md:text-[17px] md:clear-none md:grow md:float-left md:leading-[24.65px] md:mx-0 ${props.imageVariant}`}
          >
            <div
              className={`text-sm bg-white box-border caret-transparent flex flex-col grow justify-center leading-[20.3px] max-w-full min-h-0 min-w-px break-words w-full p-2.5 md:text-[17px] md:leading-[24.65px] md:min-h-[auto] ${props.imageVariant === "md:w-[45%]" ? "md:p-[15px]" : "md:p-5"}`}
            >
              <div className="text-sm box-border caret-transparent leading-[20.3px] min-h-0 min-w-0 break-words w-full md:text-[17px] md:leading-[24.65px] md:min-h-[auto] md:min-w-[auto] before:accent-auto before:box-border before:caret-transparent before:text-black before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[20.3px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-figtree before:md:text-[17px] before:md:leading-[24.65px] after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-black after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[20.3px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-figtree after:md:text-[17px] after:md:leading-[24.65px]">
                <div className="text-sm box-border caret-transparent flex flex-col leading-[20.3px] break-words mt-5 mx-5 md:text-[17px] md:leading-[24.65px] before:accent-auto before:box-border before:caret-transparent before:text-black before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[20.3px] before:list-outside before:list-disc before:min-h-0 before:min-w-0 before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-figtree before:md:text-[17px] before:md:leading-[24.65px] before:md:min-h-[auto] before:md:min-w-[auto] after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-black after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[20.3px] after:list-outside after:list-disc after:min-h-0 after:min-w-0 after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-figtree after:md:text-[17px] after:md:leading-[24.65px] after:md:min-h-[auto] after:md:min-w-[auto]">
                  <div className="text-sm box-border caret-transparent leading-[20.3px] min-h-0 min-w-0 break-words text-left md:text-[17px] md:leading-[24.65px] md:min-h-[auto] md:min-w-[auto]">
                    <div className="text-sm box-border caret-transparent leading-[20.3px] break-words md:text-[17px] md:leading-[24.65px]">
                      <div className="text-sm box-border caret-transparent leading-[20.3px] break-words md:text-[17px] md:leading-[24.65px]">
                        <div className="text-sm box-border caret-transparent leading-[20.3px] break-words md:text-[17px] md:leading-[24.65px]">
                          <h5 className="text-cyan-600 text-base italic font-semibold box-border caret-transparent clear-both tracking-[2px] leading-[22.4px] break-words uppercase font-kanit">
                            {props.stepNumber}
                          </h5>
                          <h3 className="text-neutral-900 text-[25px] italic font-bold box-border caret-transparent clear-both leading-[35px] break-words uppercase font-kanit md:text-3xl md:leading-[42px]">
                            {props.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-sm box-border caret-transparent leading-[20.3px] min-h-0 min-w-0 break-words md:text-[17px] md:leading-[24.65px] md:min-h-[auto] md:min-w-[auto] before:accent-auto before:box-border before:caret-transparent before:text-black before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[20.3px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-figtree before:md:text-[17px] before:md:leading-[24.65px] after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-black after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[20.3px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-figtree after:md:text-[17px] after:md:leading-[24.65px]">
                <div className="text-sm box-border caret-transparent leading-[20.3px] break-words m-5 md:text-[17px] md:leading-[24.65px] before:accent-auto before:box-border before:caret-transparent before:text-black before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[20.3px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-figtree before:md:text-[17px] before:md:leading-[24.65px] after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-black after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[20.3px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-figtree after:md:text-[17px] after:md:leading-[24.65px]">
                  <div
                    role="tablist"
                    className="text-sm box-border caret-transparent leading-[20.3px] break-words md:text-[17px] md:leading-[24.65px]"
                  >
                    <div className="text-sm box-border caret-transparent leading-[20.3px] break-words mb-2.5 md:text-[17px] md:leading-[24.65px]">
                      <div
                        role="tab"
                        className="text-sm bg-neutral-100 box-border caret-transparent table leading-[20.3px] break-words p-[15px] md:text-[17px] md:leading-[24.65px]"
                      >
                        <div className="text-sm box-border caret-transparent table-cell leading-[14px] break-words align-middle md:text-[17px] md:leading-[17px]">
                          <i className="text-base font-black box-border caret-transparent block h-[18px] leading-[18px] break-words text-center w-[18px] font-font_awesome_5_free before:accent-auto before:box-border before:caret-transparent before:text-black before:text-base before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[18px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_5_free"></i>
                        </div>
                        <h5 className="text-neutral-900 text-sm italic font-bold box-border caret-transparent clear-both table-cell leading-[19.6px] break-words uppercase align-middle w-full pl-5 font-kanit">
                          Read more
                        </h5>
                      </div>
                      <div className="text-sm bg-transparent box-border caret-transparent hidden leading-[20.3px] break-words p-5 md:text-[17px] md:leading-[24.65px] before:accent-auto before:box-border before:caret-transparent before:text-black before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[20.3px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-figtree before:md:text-[17px] before:md:leading-[24.65px] after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-black after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[20.3px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-figtree after:md:text-[17px] after:md:leading-[24.65px]">
                        {props.content}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`text-sm box-border caret-transparent clear-both hidden grow float-none leading-[20.3px] min-h-px break-words w-auto mx-auto md:text-[17px] md:clear-none md:flex md:float-left md:leading-[24.65px] md:mx-0 ${props.imageVariant}`}
          >
            <div className="text-sm box-border caret-transparent flex flex-col grow justify-center leading-[20.3px] max-w-full min-h-0 min-w-px break-words w-full md:text-[17px] md:leading-[24.65px] md:min-h-[auto]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
