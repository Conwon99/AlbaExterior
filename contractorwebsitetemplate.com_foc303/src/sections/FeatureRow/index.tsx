import { FeatureCard } from "@/components/FeatureCard";

export const FeatureRow = () => {
  return (
    <section className="relative bg-[linear-gradient(rgb(200,25,24)_0%,rgb(200,25,24)_100%)] box-border caret-transparent">
      <div className="relative box-border caret-transparent flex flex-wrap mx-auto md:flex-nowrap">
        <FeatureCard
          variant="shadow-[rgb(0,0,0)_0px_0px_10px_0px] border-b"
          title="Feature"
        />
        <FeatureCard
          variant="shadow-[rgb(0,0,0)_0px_0px_10px_0px] border-b"
          title="Feature"
        />
        <FeatureCard
          variant="shadow-[rgb(0,0,0)_0px_0px_10px_0px] border-b"
          title="Feature"
        />
      </div>
    </section>
  );
};
