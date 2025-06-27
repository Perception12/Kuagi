import React from "react";
import { women4TechData } from "@/data";
import Image from "next/image";
import Reachout from "@/components/Reachout";
import ScrollReveal from "@/components/ScrollReveal";

const Women4Tech = () => {
  return (
    <>
      <div className="mt-20 w-full container mx-auto px-8 lg:px-16">
        {/* Event Section */}
        <div className="grid lg:grid-cols-2 gap-24 justify-center items-center">
          {women4TechData.map((item, index) => (
            <ScrollReveal key={index}>
              <div className="flex flex-col gap-6">
                <Image
                  src={item.image}
                  alt="event image"
                  className="w-full object-cover rounded-t-3xl"
                />
                <p>{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
      <ScrollReveal>
        <Reachout />
      </ScrollReveal>
    </>
  );
};

export default Women4Tech;
