import SubHeading from "@/components/SubHeading";
import React from "react";
import { innovativeServices } from "@/data";
import Image from "next/image";

const Services = () => {
  return (
    <section className="mt-16 flex flex-col gap-6">
      <SubHeading>Our Services</SubHeading>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {innovativeServices.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center gap-4 min-h-[280px] p-4 ${
              index % 2 === 0
                ? "bg-primary text-white"
                : " bg-lightblue text-darkergrey"
            }`}
          >
            <Image src={service.icon} alt="kuagi services" width={50} height={50} />
            <h2 className="text-xl font-bold">{service.title}</h2>
            <p className="text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
