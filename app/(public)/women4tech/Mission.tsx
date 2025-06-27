import React from "react";
import MissionImage from "@/assets/women_mission.png";
import Image from "next/image";
import SubHeading from "@/components/SubHeading";
import { Button } from "@/components/ui/button";

const Mission = () => {
  return (
    <div className="container mx-auto py-20 flex items-center justify-center px-8 lg:px-16 flex-col lg:flex-row gap-6">
      <div className="flex-1 hidden lg:flex w-full items-center justify-center">
        <Image src={MissionImage} alt="mission image" className="max-w-[501px]" />
      </div>
      <div className="flex-1 flex flex-col items-start justify-center gap-6 lg:gap-12p-8 md:px-16">
        <SubHeading className="!text-black lg:text-6xl">Our Mission</SubHeading>

        <p className="text-mediumgrey">
          Our mission is to empower female voices in technology by providing
          mentorship, resources, opportunities, including hosting X spaces where
          meaningful connections and guidance from champions within the industry
          as we work to close the gender gap and foster a more inclusive digital
          world.
        </p>

        <Button>Become a Member</Button>
      </div>
    </div>
  );
};

export default Mission;
