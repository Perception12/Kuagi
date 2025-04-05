import SubHeading from "@/components/SubHeading";
import React from "react";
import NetImage from "@/assets/img_net.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <div className="mt-40 mb-20 relative bg-cta w-full flex items-center justify-center text-white lg:px-24 h-[400px]">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={NetImage}
          alt="Background"
          className="object-cover w-full h-full opacity-80"
        />
      </div>
      <div className="flex flex-col gap-6 h-full w-full bg-gradient-to-b from-cta-800 to-cta z-5 p-4 items-center justify-center">
        <SubHeading className="text-white text-5xl">
          Ready to join our dynamic community?
        </SubHeading>

        <p className="max-w-[500px] text-center">Join us today and become part of a dynamic community dedicated to shaping the future of technology.</p>

        <Button className="py-6 px-12" >Join</Button>
      </div>
    </div>
  );
};

export default CTA;
