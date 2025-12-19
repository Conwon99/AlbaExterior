import React from "react";

type ProcessGridItem = {
  stepNumber: string;
  title: string;
  description: string;
};

// Helper function to generate image URL from service title
const getServiceImageUrl = (title: string): string => {
  // Convert service title to lowercase, remove spaces and special characters
  const filename = title
    .toLowerCase()
    .replace(/\s+/g, '') // Remove spaces
    .replace(/&/g, '') // Remove &
    .replace(/[^a-z0-9]/g, ''); // Remove any other special characters
  
  // Try common image extensions
  const extensions = ['.png', '.jpg', '.jpeg'];
  
  // For specific services, use exact matches
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

const processSteps: ProcessGridItem[] = [
  {
    stepNumber: "01",
    title: "Roof Cleaning",
    description: "Professional roof cleaning with biocide treatment to safely remove moss, algae, and grime while protecting your roof for the long term.",
  },
  {
    stepNumber: "02",
    title: "Driveway Cleaning",
    description: "Professional driveway cleaning to remove oil stains, moss, algae, and debris, restoring your driveway to its original appearance and improving curb appeal.",
  },
  {
    stepNumber: "03",
    title: "Patio Cleaning",
    description: "Professional patio cleaning to remove moss, algae, and stains from your outdoor living space, making it safe, clean, and inviting.",
  },
  {
    stepNumber: "04",
    title: "Soft Washing",
    description: "Gentle, effective soft washing for render and roughcast that removes algae and carbon using chemicals applied at low pressure, ensuring no damage to your property.",
  },
  {
    stepNumber: "05",
    title: "Pressure Washing",
    description: "High-pressure cleaning services for hard surfaces to remove dirt, grime, and stains effectively using professional-grade equipment.",
  },
  {
    stepNumber: "06",
    title: "Gutter Cleaning",
    description: "Professional gutter cleaning to remove leaves, debris, and blockages, preventing water damage and protecting your property from overflow and foundation issues.",
  },
  {
    stepNumber: "07",
    title: "uPVC Cleaning",
    description: "Professional uPVC cleaning for windows, doors, frames, and fascias to remove dirt, algae, and stains, restoring your uPVC to its original bright white appearance.",
  },
  {
    stepNumber: "08",
    title: "Conservatory Cleaning",
    description: "Professional conservatory cleaning including roof, windows, frames, and gutters to maximize natural light and keep your conservatory looking pristine.",
  },
];

export const ProcessGrid = () => {
  return (
    <div className="text-sm box-border caret-transparent leading-[20.3px] break-words w-full md:text-[17px] md:leading-[24.65px]">
      <div className="text-sm box-border caret-transparent grid grid-cols-1 gap-5 leading-[20.3px] break-words px-5 py-5 md:text-[17px] md:grid-cols-3 md:gap-8 md:leading-[24.65px] md:px-0 md:py-10">
        {processSteps.map((step, index) => {
          const servicePaths: { [key: string]: string } = {
            "Roof Cleaning": "/roof-cleaning",
            "Soft Washing": "/soft-washing",
            "Pressure Washing": "/pressure-washing",
            "Driveway Cleaning": "/driveway-cleaning",
            "Patio Cleaning": "/patio-cleaning",
            "Patio & Driveway Cleaning": "/patio-driveway-cleaning",
            "Gutter Cleaning": "/gutter-cleaning",
            "uPVC Cleaning": "/upvc-cleaning",
            "Conservatory Cleaning": "/conservatory-cleaning",
          };
          const servicePath = servicePaths[step.title] || "/";
          return (
          <a
            key={index}
            href={servicePath}
            className="text-sm box-border caret-transparent relative group leading-[20.3px] break-words overflow-hidden aspect-square block md:text-[17px] md:leading-[24.65px]"
          >
            <div
              className="text-sm bg-no-repeat bg-cover bg-center box-border caret-transparent block leading-[20.3px] break-words w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110 md:text-[17px] md:leading-[24.65px]"
              style={{
                backgroundImage: `url('${encodeURI(getServiceImageUrl(step.title))}')`,
              }}
            >
              {/* Blue overlay at bottom with title - expands on hover */}
              <div className="text-sm box-border caret-transparent absolute bottom-0 left-0 right-0 bg-cyan-600 leading-[20.3px] break-words transition-all duration-300 ease-in-out overflow-hidden md:text-[17px] md:leading-[24.65px]">
                <div className="text-sm box-border caret-transparent flex flex-col leading-[20.3px] break-words px-4 py-3 md:text-[17px] md:leading-[24.65px] md:px-6 md:py-5">
                  <div className="text-sm box-border caret-transparent flex items-center justify-between leading-[20.3px] break-words gap-3 md:text-[17px] md:leading-[24.65px]">
                    <div className="text-sm box-border caret-transparent flex items-center leading-[20.3px] break-words flex-1 min-w-0 overflow-hidden md:text-[17px] md:leading-[24.65px]">
                      <h3 className="text-white text-lg italic font-bold box-border caret-transparent leading-[24px] break-words uppercase font-kanit transition-all duration-300 group-hover:text-2xl group-hover:leading-[32px] md:text-xl md:leading-[28px] md:group-hover:text-3xl md:group-hover:leading-[40px] overflow-hidden text-ellipsis whitespace-nowrap md:whitespace-normal">
                        {step.title}
                      </h3>
                    </div>
                    <svg
                      className="text-white w-5 h-5 box-border caret-transparent leading-[20.3px] break-words transition-transform duration-300 group-hover:rotate-90 flex-shrink-0 md:text-[17px] md:w-6 md:h-6 md:leading-[24.65px]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <p className="text-white text-base box-border caret-transparent leading-[22px] break-words mt-0 max-h-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:max-h-[200px] group-hover:opacity-100 group-hover:mt-3 md:text-lg md:leading-[26px] md:group-hover:mt-4 pr-2">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          </a>
        )})}
      </div>
    </div>
  );
};

