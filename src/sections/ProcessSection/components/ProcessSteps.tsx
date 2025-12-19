import { ProcessStep } from "@/sections/ProcessSection/components/ProcessStep";

export const ProcessSteps = () => {
  return (
    <div className="text-sm box-border caret-transparent block flex-wrap leading-[20.3px] break-words w-full md:text-[17px] md:flex md:leading-[24.65px]">
      <ProcessStep
        stepNumber="Step 01"
        title="Roof & Drone Inspection"
        content={
          <ul>
            <li>
              As part of our quote, we’ll do a thorough drone inspection of your
              roof.
            </li>
            <li>
              We’ll check that the roof is in good shape and ready for cleaning.
              If we spot any damage, we’ll let you know what needs fixing before
              we get started.
            </li>
            <li>
              We’ll discuss and advise you on the best cleaning methods for your
              roof.
            </li>
            <li>
              We use a drone for the survey and either a cherry picker or a
              tower to access and clean the roof, ensuring we never have to step
              directly on it.
            </li>
            <li>
              Different cleaning methods have different outcomes and prices.
              We’ll estimate your roof area and give you a clear price. Once we
              agree on the method and cost, we’ll sort out:
            </li>
            <li>A safety and risk assessment</li>
            <li>A detailed plan of how we’ll do the work</li>
          </ul>
        }
        containerVariant="text-sm box-border caret-transparent clear-both flex grow-0 float-none leading-[20.3px] min-h-px min-w-0 break-words w-full mx-auto md:text-[17px] md:clear-none md:grow md:float-left md:leading-[24.65px] md:min-w-[auto] md:mx-0"
        gridVariant="text-sm bg-[url('https://www.bzexteriorcleaning.co.uk/wp-content/uploads/image0-2.jpeg')] bg-no-repeat bg-cover box-border caret-transparent flex flex-col grow justify-center leading-[20.3px] max-w-full min-h-[350px] min-w-px break-words w-full bg-[position:left_50%] m-5 p-5 md:text-[17px] md:leading-[24.65px] md:px-[100px] md:py-[150px]"
        imageVariant="md:w-[45%]"
      />
    </div>
  );
};
