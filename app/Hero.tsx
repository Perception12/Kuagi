import Image from "next/image";
import HeroOptions from "../components/HeroOptions";
import { heroOptionsData, heroData } from "@/data";
import React, { SetStateAction, Dispatch } from "react";

interface HeroProps {
  section: number;
  setSection: Dispatch<SetStateAction<number>>;
}

const Hero: React.FC<HeroProps> = ({ section, setSection }) => {
  return (
    <section className="relative bg-muted py-32 flex flex-col items-center justify-center h-[calc(90vh-5rem)]">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0">
        <Image
          alt="background"
          src={heroData[section - 1].image}
          layout="fill"
          objectFit="cover"
          className=""
        />
        {heroData[section - 1].heading && (
          <div className="absolute inset-0 bg-primary opacity-75"></div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 container">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="flex flex-col items-center gap-6 text-center">
            <p className="text-white lg:text-xl">
              {heroData[section - 1]?.subheading}
            </p>

            <h1 className="mb-6 text-2xl font-bold text-white lg:text-5xl bricolage-grotesque">
              {heroData[section - 1]?.subheading}
            </h1>
          </div>
        </div>
      </div>

      {/* Page Options - Positioned to Overlap Image and Background */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20 w-full lg:w-3/5">
        <div className="flex items-center justify-center bg-white rounded-3xl shadow-sm py-6 px-8 gap-8">
          {heroOptionsData.map((option, index) => (
            <HeroOptions
              key={index}
              icon={option.icon}
              title={option.title}
              icon_width={option.icon_width}
              isActive={section == option.optionNumber}
              optionNumber={option.optionNumber}
              setSection={setSection}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
