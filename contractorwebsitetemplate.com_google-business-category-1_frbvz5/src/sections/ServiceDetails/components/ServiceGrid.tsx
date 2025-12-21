import { ServiceCard } from "@/sections/ServiceDetails/components/ServiceCard";

export const ServiceGrid = () => {
  return (
    <section className="relative box-border caret-transparent w-full mb-[30px]">
      <div className="relative box-border caret-transparent flex flex-wrap max-w-[767px] mx-auto md:flex-nowrap md:max-w-[1140px]">
        <ServiceCard
          href="https://contractorwebsitetemplate.com/google-business-category-1/page-1-sub-gbp-category-1/"
          imageUrl="https://c.animaapp.com/mjfqi6l8cAeBpe/assets/DEMO-PIC-Add-Pic-Of-Service-2.jpg"
          imageAlt="Filler Pic 2"
          title="Service Under Category 1"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
          variant="-mt-5 mx-[5px]"
        />
        <ServiceCard
          href="https://contractorwebsitetemplate.com/google-business-category-1/page-2-sub-gbp-category-1/"
          imageUrl="https://c.animaapp.com/mjfqi6l8cAeBpe/assets/DEMO-PIC-Add-Pic-Of-Service.jpg"
          imageAlt="Filler Pic"
          title="Service Under Category 1"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
          variant="md:mt-0 mt-[5px] mx-[5px]"
          hasStroke={true}
        />
        <ServiceCard
          href="https://contractorwebsitetemplate.com/google-business-category-1/page-3-sub-gbp-category-1/"
          imageUrl="https://c.animaapp.com/mjfqi6l8cAeBpe/assets/DEMO-PIC-Add-Pic-Of-Service-2.jpg"
          imageAlt="Filler Pic 2"
          title="Service Under Category 1"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
          variant="m-[5px]"
        />
      </div>
    </section>
  );
};
