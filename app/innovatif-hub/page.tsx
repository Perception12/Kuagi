import React from "react";
import Hero from "./Hero";
import RobotImg from "@/assets/img_robot.png";
import Image from "next/image";
import InnovatifCard from "./InnovatifCard";
import { innovativeSolutions } from "@/data";
import Services from "./Services";
import WorkingProcess from "./WorkingProcess";
import ScrollReveal from "@/components/ScrollReveal";

const page = () => {
  return (
    <div>
      <Hero />

      <ScrollReveal>
        <section className="container mx-auto p-8 lg:px-16 flex flex-col items-center w-full md:flex-row gap-8 mt-16">
          <div className="flex-1">
            <InnovatifCard
              title={innovativeSolutions.name}
              services={innovativeSolutions.services}
            />
          </div>
          <div className="flex-1">
            <Image src={RobotImg} alt="robot" className="" />
          </div>
        </section>
      </ScrollReveal>

      <Services />
      <WorkingProcess />
    </div>
  );
};

export default page;
