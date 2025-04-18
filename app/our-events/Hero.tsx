import React from "react";
import Image from "next/image";
import HeroImage1 from "@/assets/event_hero1.png";
import HeroImage2 from "@/assets/event_hero2.png";
import TrendingBanner from "@/assets/trending_banner.png";
import SubHeading from "@/components/SubHeading";

const Hero = () => {
  return (
    <section className="relative bg-lightblue pb-32 pt-8 md:py-32 flex flex-col md:h-[calc(100vh-5rem)]">
      <div className="relative container mx-auto flex flex-col gap-12 items-center justify-center h-full p-8 md:px-16">
        <div className="flex flex-col items-start gap-6 lg:gap-12 flex-1">
          <SubHeading className="text-start lg:text-7xl !text-darkergrey bricolage-grotesque-bold">
            Events
          </SubHeading>
        </div>

        <div className="flex items-center justify-center gap-12">
          <div className="flex-1 relative hidden lg:flex">
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

          <div className="flex-1 relative hidden lg:flex">
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
