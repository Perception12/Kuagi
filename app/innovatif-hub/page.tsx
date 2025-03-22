import React from "react";
import Hero from "./Hero";
import RobotImg from "@/assets/img_robot.png";
import Image from "next/image";
import InnovatifCard from "./InnovatifCard";
import { innovativeSolutions } from "@/data";
import Services from "./Services";
import WorkingProcess from "./WorkingProcess";

const page = () => {
  return (
    <div>
      <Hero />

      <section className="flex flex-col items-center justify-center md:flex-row gap-8 mt-16">
        <div className="flex-1 lg:pl-16">
          <InnovatifCard
            title={innovativeSolutions.name}
            services={innovativeSolutions.services}
          />
        </div>
        <div className="flex-1">
          <Image src={RobotImg} alt="robot" className="" />
        </div>
      </section>

      <Services />
      <WorkingProcess />
    </div>
  );
};

export default page;
