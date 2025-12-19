export type BeforeAfterCardProps = {
  stage: "Before" | "During" | "After";
  imageVariant: string;
  description: string;
  containerVariant: string;
};

export const BeforeAfterCard = (props: BeforeAfterCardProps) => {
  return (
    <div
      className={`text-sm box-border caret-transparent clear-both flex float-none leading-[20.3px] min-h-px min-w-0 break-words mx-auto md:text-[17px] md:clear-none md:float-left md:leading-[24.65px] md:min-w-[auto] md:mx-0 ${props.containerVariant}`}
    >
      <div className="text-sm box-border caret-transparent flex flex-col grow justify-center leading-[20.3px] max-w-full min-w-px break-words w-full m-0 md:text-[17px] md:leading-[24.65px] md:m-5">
        <div className="text-sm box-border caret-transparent leading-[20.3px] break-words w-full md:text-[17px] md:leading-[24.65px] before:accent-auto before:box-border before:caret-transparent before:text-black before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[20.3px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-figtree before:md:text-[17px] before:md:leading-[24.65px] after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-black after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[20.3px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-figtree after:md:text-[17px] after:md:leading-[24.65px]">
          <div className="text-sm box-border caret-transparent clear-both flex grow float-none leading-[20.3px] min-h-px break-words w-auto mx-auto md:text-[17px] md:clear-none md:float-left md:leading-[24.65px] md:w-full md:mx-0">
            <div
              className={`text-sm bg-no-repeat bg-cover box-border caret-transparent flex flex-col grow justify-center leading-[20.3px] max-w-full min-h-[450px] min-w-px break-words w-full md:text-[17px] md:leading-[24.65px] ${props.imageVariant}`}
            ></div>
          </div>
        </div>
        <div className="text-sm box-border caret-transparent leading-[20.3px] break-words w-full md:text-[17px] md:leading-[24.65px] before:accent-auto before:box-border before:caret-transparent before:text-black before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[20.3px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-figtree before:md:text-[17px] before:md:leading-[24.65px] after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-black after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[20.3px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-figtree after:md:text-[17px] after:md:leading-[24.65px]">
          <div className="text-sm box-border caret-transparent clear-both flex grow float-none leading-[20.3px] min-h-px break-words w-auto mx-auto md:text-[17px] md:clear-none md:float-left md:leading-[24.65px] md:w-full md:mx-0">
            <div className="text-sm bg-zinc-100 box-border caret-transparent flex flex-col grow justify-center leading-[20.3px] max-w-full min-w-px break-words w-full px-0 py-[50px] md:text-[17px] md:leading-[24.65px] md:px-[50px]">
              <div className="text-sm box-border caret-transparent leading-[20.3px] break-words w-full md:text-[17px] md:leading-[24.65px] before:accent-auto before:box-border before:caret-transparent before:text-black before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[20.3px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-figtree before:md:text-[17px] before:md:leading-[24.65px] after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-black after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[20.3px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-figtree after:md:text-[17px] after:md:leading-[24.65px]">
                <div className="text-sm box-border caret-transparent flex flex-col leading-[20.3px] break-words m-5 md:text-[17px] md:leading-[24.65px] before:accent-auto before:box-border before:caret-transparent before:text-black before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[20.3px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-figtree before:md:text-[17px] before:md:leading-[24.65px] after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-black after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[20.3px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-figtree after:md:text-[17px] after:md:leading-[24.65px]">
                  <div className="text-sm box-border caret-transparent leading-[20.3px] break-words text-center md:text-[17px] md:leading-[24.65px] md:text-left">
                    <div className="text-sm box-border caret-transparent leading-[20.3px] break-words text-center md:text-[17px] md:leading-[24.65px] md:text-left">
                      <div className="text-sm box-border caret-transparent leading-[20.3px] break-words text-center md:text-[17px] md:leading-[24.65px] md:text-left">
                        <div className="text-sm box-border caret-transparent leading-[20.3px] break-words text-center md:text-[17px] md:leading-[24.65px] md:text-left">
                          <h3 className="text-neutral-900 text-[25px] italic font-bold box-border caret-transparent clear-both leading-[35px] break-words text-center uppercase mt-[5px] mb-[15px] font-kanit md:text-3xl md:leading-[42px] md:text-left">
                            {props.stage}
                          </h3>
                        </div>
                        <div className="text-sm box-border caret-transparent leading-[20.3px] break-words text-center md:text-[17px] md:leading-[24.65px] md:text-left">
                          <div className="text-sm box-border caret-transparent leading-[20.3px] break-words text-center md:text-[17px] md:leading-[24.65px] md:text-left">
                            <p className="text-sm box-border caret-transparent leading-[20.3px] break-words text-center pb-2.5 md:text-[17px] md:leading-[24.65px] md:text-left">
                              {props.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
