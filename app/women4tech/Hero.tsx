import React from "react";
import Image from "next/image";
import HeroIllustration from "@/assets/pana.png";
import HeroPlant1 from "@/assets/hero-plant1.png";
import HeroPlant2 from "@/assets/hero-plant2.png";
import SubHeading from "@/components/SubHeading";

const Hero = () => {
  return (
    <section className="relative bg-lightblue pb-32 pt-8 md:py-32 flex flex-col md:h-[calc(100vh-5rem)]">
      {/* Content */}
      <div className="relative container mx-auto flex items-center justify-center h-full p-8 md:px-16">
        <div className="flex flex-col items-start gap-6 lg:gap-12 flex-1">
          <SubHeading className="text-start lg:text-7xl !text-darkergrey bricolage-grotesque-bold">
            Her Ideas <br />
            Our Future
          </SubHeading>

          <p className="max-w-[581px] text-mediumgrey">
            Championing a movement where women don’t just participate in
            technology—they lead, innovate, and transform industries. Together,
            we create a future powered by diversity, resilience, and
            groundbreaking ideas.
          </p>
        </div>

        <div className="flex-1 hidden lg:flex w-full items-center justify-center">
          <Image
            src={HeroIllustration}
            alt="price plans hero image"
            className=""
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0">
        <Image src={HeroPlant1} alt="hero-illustration" />
      </div>

      <div className="absolute top-0 right-0">
        <Image src={HeroPlant2} alt="hero-illustration" />
      </div>

    </section>
  );
};

export default Hero;
