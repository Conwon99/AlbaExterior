import { FeatureCard } from "@/components/FeatureCard";

export const FeatureGrid = () => {
  return (
    <section className="relative box-border caret-transparent w-full">
      <div className="relative box-border caret-transparent flex flex-wrap mx-auto md:flex-nowrap">
        <FeatureCard
          variant=""
          title="We Are The Solution"
          description="Describe a feature as to why you are the solution to there problem. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa"
        />
        <FeatureCard
          variant=""
          title="We Are The Solution"
          description="Describe a feature as to why you are the solution to there problem. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa"
        />
        <FeatureCard
          variant=""
          title="We Are The Solution"
          description="Describe a feature as to why you are the solution to there problem. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa"
        />
      </div>
    </section>
  );
};
