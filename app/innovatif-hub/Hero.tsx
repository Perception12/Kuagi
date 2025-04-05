import SubHeading from "@/components/SubHeading";
import React from "react";
import HeroImage from "@/assets/img_innovatif.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative flex bg-lightblue pt-16 md:h-[calc(90vh-5rem)]">
      <div className="relative mx-auto container flex items-center justify-center p-8 lg:py-0 lg:px-16 gap-4">
        <div className="flex flex-col items-start gap-6 flex-2">
          <SubHeading className="text-center lg:text-start max-w-[800px] lg:text-3xl xl:text-5xl">
            Your partner in digital transformation, revolutionizing IT solutions
            for a connected world
          </SubHeading>

          <p className="max-w-[468px] text-center lg:text-start text-mediumgrey">
            Kuagi Innovatif Hub is to offer a sustainable IT solution that
            supports and empower business owners/Startups.
          </p>
        </div>

        <div className="flex-1 hidden lg:flex h-full items-end justify-end">
          <Image src={HeroImage} alt="Kuagi Innovatif Hub" className="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
