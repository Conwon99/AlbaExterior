import { ProcessStep } from "@/sections/ProcessSection/components/ProcessStep";

export const ProcessSection = () => {
  return (
    <section className="relative bg-white box-border caret-transparent py-20">
      <div className="relative box-border caret-transparent flex flex-wrap max-w-[767px] mx-auto md:flex-nowrap md:max-w-[1140px]">
        <div className="relative box-border caret-transparent flex min-h-px w-full">
          <div className="relative content-start box-border caret-transparent flex flex-wrap w-full p-2.5">
            <div className="relative box-border caret-transparent text-center w-full mb-5">
              <div className="box-border caret-transparent mt-[-130px]">
                <img
                  src="https://c.animaapp.com/mjfo8f47q1cuST/assets/cropped-Screenshot_2023-04-10_at_1.41.12_PM-removebg-preview-4.png"
                  alt="Filler Logo"
                  sizes="(max-width: 681px) 100vw, 681px"
                  className="aspect-[auto_681_/_227] box-border caret-transparent inline-block max-w-full w-[681px]"
                />
              </div>
            </div>
            <div className="relative box-border caret-transparent text-center w-full mb-5">
              <div className="box-border caret-transparent">
                <h2 className="text-[32px] font-bold box-border caret-transparent leading-8 font-roboto">
                  How Our (Service-Primary GBP Category) Works (What Customer
                  Can Expect)
                </h2>
              </div>
            </div>
            <div className="relative box-border caret-transparent text-center w-full mb-5">
              <div className="box-border caret-transparent">
                <p className="text-xl box-border caret-transparent leading-5 font-roboto md:text-[26px] md:leading-[26px]">
                  Our Process Is Nice And Easy Just Look At Our Four Steps
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
            <section className="relative box-border caret-transparent w-full my-[5px]">
              <div className="relative box-border caret-transparent flex flex-wrap max-w-[767px] mx-auto md:flex-nowrap md:max-w-[1140px]">
                <div className="relative box-border caret-transparent flex min-h-px w-full md:w-6/12">
                  <ProcessStep
                    title="Step 1: Reach Out to Us"
                    description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur"
                  />
                </div>
                <div className="relative box-border caret-transparent flex min-h-px w-full md:w-6/12">
                  <ProcessStep
                    title="Step 2: Schedule (Service)"
                    description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur"
                  />
                </div>
              </div>
            </section>
            <section className="relative box-border caret-transparent w-full my-[5px]">
              <div className="relative box-border caret-transparent flex flex-wrap max-w-[767px] mx-auto md:flex-nowrap md:max-w-[1140px]">
                <div className="relative box-border caret-transparent flex min-h-px w-full md:w-6/12">
                  <ProcessStep
                    title="Step 3: We Provide The Service"
                    description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur"
                  />
                </div>
                <div className="relative box-border caret-transparent flex min-h-px w-full md:w-6/12">
                  <ProcessStep
                    title="Step 4: Inspect The Service"
                    description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};
