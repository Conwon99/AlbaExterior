import { ProcessStep } from "@/sections/ProcessSteps/components/ProcessStep";

export type ProcessStepRowProps = {
  step1Title: string;
  step1Description: string;
  step2Title: string;
  step2Description: string;
};

export const ProcessStepRow = (props: ProcessStepRowProps) => {
  return (
    <section className="relative box-border caret-transparent w-full my-[5px]">
      <div className="relative box-border caret-transparent flex flex-wrap max-w-[767px] mx-auto md:flex-nowrap md:max-w-[1140px]">
        <ProcessStep
          title={props.step1Title}
          description={props.step1Description}
        />
        <ProcessStep
          title={props.step2Title}
          description={props.step2Description}
        />
      </div>
    </section>
  );
};
