import { ServiceCard } from "@/sections/ServicesSection/components/ServiceCard";

export const ServicesSection = () => {
  return (
    <div id="about" className="text-sm box-border caret-transparent leading-[20.3px] break-words mx-auto md:text-[17px] md:leading-[24.65px] before:accent-auto before:box-border before:caret-transparent before:text-black before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[20.3px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-figtree before:md:text-[17px] before:md:leading-[24.65px] after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-black after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[20.3px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-figtree after:md:text-[17px] after:md:leading-[24.65px]">
      <div className="relative text-sm items-center box-border caret-transparent flex justify-center leading-[20.3px] break-words px-0 py-5 md:text-[17px] md:leading-[24.65px] md:px-5 md:py-[100px]">
        <div className="text-sm box-border caret-transparent grow leading-[20.3px] max-w-[1300px] break-words mx-auto md:text-[17px] md:leading-[24.65px] before:accent-auto before:box-border before:caret-transparent before:text-black before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[20.3px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-figtree before:md:text-[17px] before:md:leading-[24.65px] after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-black after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[20.3px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-figtree after:md:text-[17px] after:md:leading-[24.65px]">
          <div className="text-sm box-border caret-transparent flex flex-wrap leading-[20.3px] break-words w-full md:text-[17px] md:leading-[24.65px]">
            <ServiceCard />
            <div className="text-sm box-border caret-transparent flex grow float-left leading-[20.3px] min-h-px break-words w-full mx-auto md:text-[17px] md:leading-[24.65px] md:w-[51%] md:mx-0">
              <div 
                className="text-sm bg-no-repeat bg-cover box-border caret-transparent flex flex-col grow justify-center leading-[20.3px] max-w-full min-h-[350px] min-w-px break-words w-full bg-[position:left_40%] m-5 md:text-[17px] md:leading-[24.65px] md:min-h-[auto] md:bg-[position:left_0%] rounded-lg"
                style={{
                  backgroundImage: `url('${encodeURI("/about.jpg")}')`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
