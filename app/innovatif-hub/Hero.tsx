import SubHeading from "@/components/SubHeading";
import React from "react";
import HeroImage from "@/assets/img_innovatif.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative flex bg-lightblue pt-16 md:h-[calc(100vh-5rem)]">
      <div className="flex relative items-center lg:items-start justify-center h-full p-8 lg:px-32 flex-col gap-4 flex-2">
        <SubHeading className="text-center lg:text-start max-w-[800px] lg:text-3xl xl:text-5xl">
          Your partner in digital transformation, revolutionizing IT solutions
          for a connected world
        </SubHeading>

        <p className="max-w-[468px] text-sm lg:text-base text-center lg:text-start text-mediumgrey">
          Kuagi Innovatif Hub is to offer a sustainable IT solution that
          supports and empower business owners/Startups.
        </p>
      </div>

      <div className="flex-1 hidden lg:flex justify-end h-full items-end relative">
        <Image
          src={HeroImage}
          alt="Kuagi Innovatif Hub"
          className="absolute bottom-0 right-0 max-w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
