import React from "react";
import InnovatifCard from "./InnovatifCard";
import { innovativeSolutions } from "@/data";
import SubHeading from "@/components/SubHeading";
import { workingProcess } from "@/data";
import ScrollReveal from "@/components/ScrollReveal";

const WorkingProcess = () => {
  return (
    <section className="flex flex-col items-center lg:px-16 justify-center gap-8 mt-16">
      <ScrollReveal>
        <SubHeading>Our Working Process</SubHeading>
      </ScrollReveal>

      <div className="flex w-full flex-col md:flex-row gap-8">
        <div className="flex-1">
          <InnovatifCard
            title={innovativeSolutions.name}
            services={innovativeSolutions.services}
          />
        </div>
        <div className="flex-2 grid md:grid-cols-2 gap-8">
          {workingProcess.map((process, index) => (
            <ScrollReveal key={index}>
              <div
                key={index}
                className={`flex flex-col items-center justify-center gap-4 p-4 bg-lightblue text-darkergrey`}
              >
                <SubHeading className="self-start lg:text-5xl">
                  0{index + 1}
                </SubHeading>
                <h2 className="text-xl font-bold">{process.title}</h2>
                <p className="text-center">{process.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
