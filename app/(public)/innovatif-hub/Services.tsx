import SubHeading from "@/components/SubHeading";
import React from "react";
import { innovativeServices } from "@/data";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const Services = () => {
  return (
    <section className="container mx-auto p-8 lg:px-16 mt-20 flex flex-col gap-6">
      <ScrollReveal>
        <SubHeading>Our Services</SubHeading>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {innovativeServices.map((service, index) => (
          <ScrollReveal className="h-full" key={index}>
            <div
              key={index}
              className={`flex flex-col items-center justify-center h-full gap-4 min-h-[280px] p-4 ${
                index % 2 === 0
                  ? "bg-primary text-white"
                  : " bg-lightblue text-darkergrey"
              }`}
            >
              <Image
                src={service.icon}
                alt="kuagi services"
                width={50}
                height={50}
              />
              <h2 className="text-xl font-bold">{service.title}</h2>
              <p className="text-center">{service.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Services;
