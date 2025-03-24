import SubHeading from "@/components/SubHeading";
import React from "react";
import PackageCard from "./PackageCard";
import { seminarData } from "@/data";
import ScrollReveal from "@/components/ScrollReveal";

const Packages = () => {
  return (
    <section className="mt-16 flex flex-col gap-6 bg-verylightgreen pt-8 lg:p-8">
      <ScrollReveal>
        <SubHeading>Seminar Packages</SubHeading>
      </ScrollReveal>

      <ScrollReveal>
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8">
          {seminarData.map((data, index) => (
            <PackageCard key={index} data={data} />
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Packages;
