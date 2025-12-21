import React from "react";

type ServiceItem = {
  title: string;
  description: string;
  path: string;
};

// Helper function to generate image URL from service title
const getServiceImageUrl = (title: string): string => {
  const filename = title
    .toLowerCase()
    .replace(/\s+/g, '')
    .replace(/&/g, '')
    .replace(/[^a-z0-9]/g, '');
  
  const serviceImageMap: { [key: string]: string } = {
    'roofcleaning': '/services/roofcleaning.png',
    'drivewaycleaning': '/services/drivewaycleaning.png',
    'patiocleaning': '/services/patiocleaning.jpg',
    'softwashing': '/services/softwashing1.jpg',
    'pressurewashing': '/services/pressurewashing.png',
    'guttercleaning': '/services/guttercleaning.jpg',
    'upvccleaning': '/services/upvccleaning.jpg',
    'conservatorycleaning': '/services/conservatorycleaning.png',
  };
  
  return serviceImageMap[filename] || `/services/${filename}.jpg`;
};

const services: ServiceItem[] = [
  {
    title: "Roof Cleaning",
    description: "Professional roof cleaning with biocide treatment to safely remove moss, algae, and grime while protecting your roof for the long term. Our expert team uses specialized equipment and eco-friendly solutions to restore your roof's appearance and extend its lifespan.",
    path: "/roof-cleaning",
  },
  {
    title: "Driveway Cleaning",
    description: "Professional driveway cleaning to remove oil stains, moss, algae, and debris, restoring your driveway to its original appearance and improving curb appeal. We use high-pressure washing techniques to effectively clean concrete, block paving, and tarmac surfaces.",
    path: "/driveway-cleaning",
  },
  {
    title: "Patio Cleaning",
    description: "Professional patio cleaning to remove moss, algae, and stains from your outdoor living space, making it safe, clean, and inviting. Our thorough cleaning process ensures your patio is ready for entertaining and family use throughout the year.",
    path: "/patio-cleaning",
  },
  {
    title: "Soft Washing",
    description: "Gentle, effective soft washing for render and roughcast that removes algae and carbon using chemicals applied at low pressure, ensuring no damage to your property. Perfect for delicate surfaces that require careful treatment to maintain their integrity.",
    path: "/soft-washing",
  },
  {
    title: "Pressure Washing",
    description: "High-pressure cleaning services for hard surfaces to remove dirt, grime, and stains effectively using professional-grade equipment. Ideal for driveways, patios, paths, and other hard-wearing surfaces that can withstand high-pressure treatment.",
    path: "/pressure-washing",
  },
  {
    title: "Gutter Cleaning",
    description: "Professional gutter cleaning to remove leaves, debris, and blockages, preventing water damage and protecting your property from overflow and foundation issues. Regular gutter maintenance is essential for protecting your home's structure and preventing costly repairs.",
    path: "/gutter-cleaning",
  },
  {
    title: "uPVC Cleaning",
    description: "Professional uPVC cleaning for windows, doors, frames, and fascias to remove dirt, algae, and stains, restoring your uPVC to its original bright white appearance. Our specialized cleaning methods ensure your uPVC looks like new without causing any damage.",
    path: "/upvc-cleaning",
  },
  {
    title: "Conservatory Cleaning",
    description: "Professional conservatory cleaning including roof, windows, frames, and gutters to maximize natural light and keep your conservatory looking pristine. We provide comprehensive cleaning services to maintain the beauty and functionality of your conservatory.",
    path: "/conservatory-cleaning",
  },
];

export const ServicesList = () => {
  return (
    <div className="text-sm box-border caret-transparent leading-[20.3px] break-words w-full md:text-[17px] md:leading-[24.65px]">
      {services.map((service, index) => {
        const isEven = index % 2 === 0;
        const imageUrl = getServiceImageUrl(service.title);
        
        return (
          <div
            key={index}
            className="text-sm box-border caret-transparent flex flex-col md:flex-row items-center gap-8 leading-[20.3px] break-words mb-12 md:text-[17px] md:leading-[24.65px] md:mb-16 last:mb-0"
          >
            {/* Image - Left for even, Right for odd */}
            {isEven ? (
              <>
                <div className="text-sm box-border caret-transparent flex flex-col leading-[20.3px] break-words w-full md:text-[17px] md:leading-[24.65px] md:w-1/2">
                  <div
                    className="text-sm bg-no-repeat bg-cover bg-center box-border caret-transparent block leading-[20.3px] break-words w-full h-[300px] rounded-lg shadow-lg md:text-[17px] md:h-[400px] md:leading-[24.65px]"
                    style={{
                      backgroundImage: `url('${encodeURI(imageUrl)}')`,
                    }}
                  />
                </div>
                <div className="text-sm box-border caret-transparent flex flex-col leading-[20.3px] break-words w-full md:text-[17px] md:leading-[24.65px] md:w-1/2">
                  <h3 className="text-neutral-900 text-2xl italic font-bold box-border caret-transparent leading-[32px] break-words uppercase font-kanit mb-4 md:text-3xl md:leading-[42px]">
                    {service.title}
                  </h3>
                  <p className="text-neutral-700 text-base box-border caret-transparent leading-[24px] break-words mb-6 md:text-lg md:leading-[26px]">
                    {service.description}
                  </p>
                  <a
                    href={service.path}
                    className="text-white text-base font-bold box-border caret-transparent inline-flex items-center justify-center tracking-wide leading-normal text-center align-middle bg-cyan-500 hover:bg-cyan-400 hover:shadow-lg transition-all overflow-hidden px-6 py-3 rounded-md shadow-lg whitespace-nowrap md:px-8 md:py-4 md:text-lg w-fit"
                  >
                    Learn More
                  </a>
                </div>
              </>
            ) : (
              <>
                <div className="text-sm box-border caret-transparent flex flex-col leading-[20.3px] break-words w-full md:text-[17px] md:leading-[24.65px] md:w-1/2 order-2 md:order-1">
                  <h3 className="text-neutral-900 text-2xl italic font-bold box-border caret-transparent leading-[32px] break-words uppercase font-kanit mb-4 md:text-3xl md:leading-[42px]">
                    {service.title}
                  </h3>
                  <p className="text-neutral-700 text-base box-border caret-transparent leading-[24px] break-words mb-6 md:text-lg md:leading-[26px]">
                    {service.description}
                  </p>
                  <a
                    href={service.path}
                    className="text-white text-base font-bold box-border caret-transparent inline-flex items-center justify-center tracking-wide leading-normal text-center align-middle bg-cyan-500 hover:bg-cyan-400 hover:shadow-lg transition-all overflow-hidden px-6 py-3 rounded-md shadow-lg whitespace-nowrap md:px-8 md:py-4 md:text-lg w-fit"
                  >
                    Learn More
                  </a>
                </div>
                <div className="text-sm box-border caret-transparent flex flex-col leading-[20.3px] break-words w-full md:text-[17px] md:leading-[24.65px] md:w-1/2 order-1 md:order-2">
                  <div
                    className="text-sm bg-no-repeat bg-cover bg-center box-border caret-transparent block leading-[20.3px] break-words w-full h-[300px] rounded-lg shadow-lg md:text-[17px] md:h-[400px] md:leading-[24.65px]"
                    style={{
                      backgroundImage: `url('${encodeURI(imageUrl)}')`,
                    }}
                  />
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

