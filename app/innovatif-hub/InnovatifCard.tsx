import React from "react";
import type { InnovativeSolution } from "@/data";
import CheckIcon from "@/assets/icons/ic_check_fill.png"
import Image from "next/image";
import { Button } from "@/components/ui/button";

const InnovatifCard: React.FC<{
  title: string;
  services: InnovativeSolution[];
}> = ({ title, services }) => {
  return (
    <div className="flex flex-col max-w-[450px] p-8 gap-12 bg-lightblue border rounded-2xl">
      <h2 className="text-2xl font-semibold">{title}</h2>
      
      <div className="flex flex-col gap-8">
        {services.map((service, index) => (
          <span key={index} className="flex flex-2 gap-2 items-start">
            <Image src={CheckIcon} alt="check icon" className="shrink-0" />
            <div className="">
                <h3 className="font-semibold">{service.title}</h3>
                <p className="text-sm">{service.description}</p>
            </div>
          </span>
        ))}
      </div>
      <Button
        className="mt-auto"
      >
        Learn More
      </Button>
    </div>
  );
};

export default InnovatifCard;
