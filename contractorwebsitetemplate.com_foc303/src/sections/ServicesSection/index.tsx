import { ServiceCard } from "@/sections/ServicesSection/components/ServiceCard";

export const ServicesSection = () => {
  return (
    <section className="relative bg-[linear-gradient(rgb(200,25,24)_0%,rgb(200,25,24)_100%)] box-border caret-transparent py-[60px]">
      <div className="relative box-border caret-transparent flex flex-wrap max-w-[767px] mx-auto md:flex-nowrap md:max-w-[1140px]">
        <div className="relative box-border caret-transparent flex min-h-px w-full">
          <div className="relative content-start box-border caret-transparent flex flex-wrap w-full p-2.5">
            <div className="relative box-border caret-transparent text-center w-full mb-5">
              <div className="box-border caret-transparent mt-[-127px]">
                <img
                  src="https://c.animaapp.com/mjfo8f47q1cuST/assets/Untitled-design-20-300x300-1-150x150.png"
                  alt="Filler Logo 2"
                  sizes="(max-width: 150px) 100vw, 150px"
                  className="aspect-[auto_150_/_150] box-border caret-transparent inline-block max-w-full w-[150px]"
                />
              </div>
            </div>
            <div className="relative box-border caret-transparent w-full mb-5">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent flex text-center py-0.5">
                  <span className="border-t-red-700 box-border caret-transparent flex w-[60px] mx-auto border-t-[3px]"></span>
                </div>
              </div>
            </div>
            <section className="relative box-border caret-transparent w-full mb-[30px]">
              <div className="relative box-border caret-transparent flex flex-wrap max-w-[767px] mx-auto md:flex-nowrap md:max-w-[1140px]">
                <div className="relative box-border caret-transparent flex min-h-px w-full">
                  <div className="relative content-start bg-[linear-gradient(rgb(255,255,255)_0%,rgb(255,255,255)_100%)] shadow-[rgba(0,0,0,0.2)_0px_0px_10px_0px] box-border caret-transparent flex flex-wrap w-full mb-[5px] mx-2.5 p-5 rounded-[20px] md:mb-0 md:mx-[5px]">
                    <div className="relative box-border caret-transparent text-center w-full mb-5">
                      <div className="box-border caret-transparent">
                        <h2 className="text-[27px] font-semibold box-border caret-transparent leading-[27px] font-roboto md:text-[28px] md:leading-7">
                          (Service Area) + (Service-GBP Primary Category) Expert
                          Friendly Service
                        </h2>
                      </div>
                    </div>
                    <div className="relative text-lg box-border caret-transparent leading-[27px] text-center w-full font-roboto md:text-[21px] md:leading-[31.5px]">
                      <div className="text-lg box-border caret-transparent leading-[27px] md:text-[21px] md:leading-[31.5px]">
                        <p className="text-lg box-border caret-transparent leading-[27px] mb-[14.4px] md:text-[21px] md:leading-[31.5px]">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Ut elit tellus, luctus nec ullamcorper mattis,
                          pulvinar dapibus leo. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit. Lorem ipsum dolor sit
                          amet, consectetuer adipiscing elit. Aenean commodo
                          ligula eget dolor. Aenean massa. Cum sociis natoque
                          penatibus et magnis dis parturient montes, nascetur
                          ridiculus mus. 
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="relative box-border caret-transparent w-full mb-[30px]">
              <div className="relative box-border caret-transparent flex flex-wrap max-w-[767px] mx-auto md:flex-nowrap md:max-w-[1140px]">
                <div className="relative box-border caret-transparent flex min-h-px w-full md:w-[33.333%]">
                  <ServiceCard
                    variant=""
                    imageUrl="https://c.animaapp.com/mjfo8f47q1cuST/assets/DEMO-PIC-Add-Pic-Of-Service.jpg"
                    imageAlt="Filler Pic"
                    title="Secondary GBP Category 1"
                    description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "
                    href="https://contractorwebsitetemplate.com/google-business-category-1/"
                  />
                </div>
                <div className="relative box-border caret-transparent flex min-h-px w-full md:w-[33.333%]">
                  <ServiceCard
                    variant="mb-[5px] mx-2.5 md:mb-0 md:mx-[5px]"
                    imageUrl="https://c.animaapp.com/mjfo8f47q1cuST/assets/DEMO-PIC-Add-Pic-Of-Service-2.jpg"
                    imageAlt="Filler Pic 2"
                    title="Secondary GBP Category 2"
                    description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "
                    href="https://contractorwebsitetemplate.com/google-business-category-2/"
                    hasStroke={true}
                  />
                </div>
                <div className="relative box-border caret-transparent flex min-h-px w-full md:w-[33.333%]">
                  <ServiceCard
                    variant=""
                    imageUrl="https://c.animaapp.com/mjfo8f47q1cuST/assets/DEMO-PIC-Add-Pic-Of-Service.jpg"
                    imageAlt="Filler Pic"
                    title="Secondary GBP Category 3"
                    description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "
                    href="https://contractorwebsitetemplate.com/google-business-category-3/"
                  />
                </div>
              </div>
            </section>
            <section className="relative box-border caret-transparent w-full mb-[30px]">
              <div className="relative box-border caret-transparent flex flex-wrap max-w-[767px] mx-auto md:flex-nowrap md:max-w-[1140px]">
                <div className="relative box-border caret-transparent flex min-h-px w-full md:w-[33.333%]">
                  <ServiceCard
                    variant="-mt-5 mx-[5px] md:mt-0"
                    imageUrl="https://c.animaapp.com/mjfo8f47q1cuST/assets/DEMO-PIC-Add-Pic-Of-Service-2.jpg"
                    imageAlt="Filler Pic 2"
                    title="Main Service Provided"
                    description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "
                    href="https://contractorwebsitetemplate.com/main-service-provided-1/"
                  />
                </div>
                <div className="relative box-border caret-transparent flex min-h-px w-full md:w-[33.333%]">
                  <ServiceCard
                    variant="mt-[5px] mx-[5px] md:mt-0"
                    imageUrl="https://c.animaapp.com/mjfo8f47q1cuST/assets/DEMO-PIC-Add-Pic-Of-Service.jpg"
                    imageAlt="Filler Pic"
                    title="Main Service Provided"
                    description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "
                    href="https://contractorwebsitetemplate.com/main-service-provided-2/"
                    hasStroke={true}
                  />
                </div>
                <div className="relative box-border caret-transparent flex min-h-px w-full md:w-[33.333%]">
                  <ServiceCard
                    variant="m-[5px] md:my-0"
                    imageUrl="https://c.animaapp.com/mjfo8f47q1cuST/assets/DEMO-PIC-Add-Pic-Of-Service-2.jpg"
                    imageAlt="Filler Pic 2"
                    title="Main Service Provided"
                    description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "
                    href="https://contractorwebsitetemplate.com/main-service-3/"
                  />
                </div>
              </div>
            </section>
            <section className="relative box-border caret-transparent w-full mb-[30px]">
              <div className="relative box-border caret-transparent flex flex-wrap max-w-[767px] mx-auto md:flex-nowrap md:max-w-[1140px]">
                <div className="relative box-border caret-transparent flex min-h-px w-full md:w-[33.333%]">
                  <ServiceCard
                    variant="mb-[5px] mx-[5px] md:mb-0"
                    imageUrl="https://c.animaapp.com/mjfo8f47q1cuST/assets/DEMO-PIC-Add-Pic-Of-Service.jpg"
                    imageAlt="Filler Pic"
                    title="Secondary GBP Category 4"
                    description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "
                  />
                </div>
                <div className="relative box-border caret-transparent flex min-h-px w-full md:w-[33.333%]">
                  <ServiceCard
                    variant=""
                    imageUrl="https://c.animaapp.com/mjfo8f47q1cuST/assets/DEMO-PIC-Add-Pic-Of-Service-2.jpg"
                    imageAlt="Filler Pic 2"
                    title="Secondary GBP Category 5"
                    description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "
                    href="https://contractorwebsitetemplate.com/service-gbp-5/"
                    hasStroke={true}
                  />
                </div>
                <div className="relative box-border caret-transparent flex min-h-px w-full md:w-[33.333%]">
                  <ServiceCard
                    variant=""
                    imageUrl="https://c.animaapp.com/mjfo8f47q1cuST/assets/DEMO-PIC-Add-Pic-Of-Service.jpg"
                    imageAlt="Filler Pic"
                    title="Main Service Provided"
                    description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
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
