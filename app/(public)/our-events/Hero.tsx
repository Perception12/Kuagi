import React from "react";
import Image from "next/image";
import HeroImage1 from "@/assets/event_hero1.png";
import HeroImage2 from "@/assets/event_hero2.png";
import TrendingBanner from "@/assets/trending_banner.png";
import SubHeading from "@/components/SubHeading";

const Hero = () => {
  return (
    <section className="relative bg-lightblue md:h-[calc(100vh-16rem)]">
      <div className="relative container mx-auto flex flex-col lg:flex-row gap-12 items-center justify-center h-full px-8 md:px-16">
        <div className="flex flex-col items-start  flex-1">
          <SubHeading className="text-start mt-8 lg:mt-0 lg:text-7xl !text-darkergrey bricolage-grotesque-bold">
            Events
          </SubHeading>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="flex-1 relative lg:flex">
            <Image src={HeroImage1} alt="price plans hero image" className="" />
            <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-2/5 flex items-center justify-center">
              <Image
                src={TrendingBanner}
                alt="hero-illustration"
                className="object-cover "
                width={70}
              />
            </div>
          </div>

          <div className="flex-1 relative lg:flex">
            <Image src={HeroImage2} alt="price plans hero image" className="" />

            <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-2/5 flex items-center justify-center">
              <Image
                src={TrendingBanner}
                alt="hero-illustration"
                className="object-cover "
                width={70}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
