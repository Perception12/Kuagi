import React from "react";
import { Button } from "./ui/button";
import CTALeft from "@/assets/cta_left.png";
import CTARight from "@/assets/cta_right.png";
import Image from "next/image";
import SubHeading from "./SubHeading";

const ClassCTA = () => {
  return (
    <div className="mt-20 mx-5 rounded-3xl bg-primary p-8 py-24 text-white relative overflow-hidden max-h-[400px] flex items-center justify-center lg:px-24">
      <div className="relative w-full items-center  gap-6 justify-center flex flex-col z-10">
        <SubHeading className="text-white text-4xl lg:!text-5xl bricolage-grotesque-bold">Explore Our Classes</SubHeading>
        <p className="max-w-[485px] text-center">
          Stay ahead in the rapidly evolving tech landscape, and open the doors
          to exciting career opportunities.
        </p>
        <Button className="text-primary bg-white hover:text-white">view class plan</Button>
      </div>

      <div className="absolute hidden lg:block bottom-0 left-0">
        <Image src={CTALeft} alt="cta image left" />
      </div>

      <div className="absolute z-1 bottom-0 right-0">
        <Image src={CTARight} alt="cta image right" className="opacity-50 lg:opacity-100" />
      </div>
    </div>
  );
};

export default ClassCTA;
