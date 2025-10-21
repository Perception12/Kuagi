import SubHeading from "@/components/SubHeading";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroIllustration from "@/assets/img_price_hero.png";
import { priceHeroData } from "@/data";

const Hero = () => {
  return (
    <section className="relative lg:mx-32 bg-lightblue pb-32 pt-8 md:py-16 flex flex-col md:h-[calc(90vh-11rem)]">
      {/* Content */}
      <div className="relative container mx-auto flex flex-start justify-between p-8 md:px-16">
        <div className="flex flex-col items-start gap-6 flex-2">
          <SubHeading className="text-start lg:text-6xl !text-darkergrey">
            Flexible <br /> Work Environment
          </SubHeading>

          <p className="max-w-[468px] text-mediumgrey">
            Are you a freelancer, entrepreneur, or remote worker? our co-working
            space provides the ideal environment for collaboration, creativity,
            and productivity.
          </p>

          <Button>Check out our space</Button>
        </div>

        <div className="flex-1 hidden lg:flex items-end justify-end">
          <Image src={HeroIllustration} alt="price plans hero image" />
        </div>
      </div>

      {/* Page Options - Positioned to Overlap Image and Background */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20 w-full lg:w-4/5">
        <div className="flex flex-col lg:flex-row items-center justify-between bg-white w-full rounded-3xl shadow-sm gap-6 p-4">
          {/* Options */}
          {priceHeroData.map((data, index) => (
            <div
              key={index}
              className="flex gap-2 items-center justify-center w-full"
            >
              <Image src={data.icon} alt={data.description} />
            
              <p>{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
