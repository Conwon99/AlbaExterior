import { ProcessStepRow } from "@/sections/ProcessSteps/components/ProcessStepRow";

export const ProcessSteps = () => {
  return (
    <section className="relative bg-white box-border caret-transparent py-20">
      <div className="relative box-border caret-transparent flex flex-wrap max-w-[767px] mx-auto md:flex-nowrap md:max-w-[1140px]">
        <div className="relative box-border caret-transparent flex min-h-px w-full">
          <div className="relative content-start box-border caret-transparent flex flex-wrap w-full p-2.5">
            <div className="relative box-border caret-transparent text-center w-full mb-5">
              <div className="box-border caret-transparent mt-[-174px]">
                <img
                  src="https://c.animaapp.com/mjfqi6l8cAeBpe/assets/Untitled-design-20-300x300-1-150x150.png"
                  alt="Filler Logo 2"
                  sizes="(max-width: 150px) 100vw, 150px"
                  className="aspect-[auto_150_/_150] box-border caret-transparent inline-block max-w-full w-[150px]"
                />
              </div>
            </div>
            <div className="relative box-border caret-transparent text-center w-full mb-5">
              <div className="box-border caret-transparent">
                <h2 className="text-[32px] font-bold box-border caret-transparent leading-8 font-roboto">
                  How Our (Service/GBP Secondary Category-1) Works (What
                  Customer Can Expect)
                </h2>
              </div>
            </div>
            <div className="relative text-lg box-border caret-transparent leading-[27px] text-center w-full mb-5 font-roboto">
              <div className="box-border caret-transparent">
                <p className="box-border caret-transparent mb-[14.4px]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur.
                </p>
              </div>
            </div>
            <div className="relative box-border caret-transparent w-full mb-5">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent flex text-center py-0.5">
                  <span className="border-t-red-700 box-border caret-transparent flex w-[60px] mx-auto border-t-[3px]"></span>
                </div>
              </div>
            </div>
            <ProcessStepRow
              step1Title="Step 1: Reach Out to Us"
              step1Description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur"
              step2Title="Step 2: Schedule (Service)"
              step2Description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur"
            />
            <ProcessStepRow
              step1Title="Step 3: We Do The Work (Service)"
              step1Description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur"
              step2Title="Step 4: We Make Sure You're Happy"
              step2Description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur"
            />
            <div className="relative box-border caret-transparent w-full mb-5">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent">
                  <div className="box-border caret-transparent h-5"></div>
                </div>
              </div>
            </div>
            <div className="relative box-border caret-transparent text-center w-full mb-5">
              <div className="box-border caret-transparent">
                <img
                  src="https://c.animaapp.com/mjfqi6l8cAeBpe/assets/cropped-Screenshot_2023-04-10_at_1.41.12_PM-removebg-preview-4-300x100.png"
                  alt="Filler Logo"
                  sizes="(max-width: 300px) 100vw, 300px"
                  className="aspect-[auto_300_/_100] box-border caret-transparent inline-block max-w-full w-[300px]"
                />
              </div>
            </div>
            <div className="relative box-border caret-transparent w-full">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent">
                  <div className="box-border caret-transparent h-2.5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
