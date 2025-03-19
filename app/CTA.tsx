import SubHeading from "@/components/SubHeading";
import React from "react";
import NetImage from "@/assets/img_net.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <div className="mt-12 relative bg-cta w-full flex items-center justify-center h-64 text-white lg:px-24">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={NetImage}
          alt="Background"
          className="object-cover w-full h-full opacity-80"
        />
      </div>
      <div className="flex flex-col gap-6 h-full w-full bg-gradient-to-b from-cta-800 to-cta z-5 p-4 items-center justify-center">
        <SubHeading className="text-white">
          Ready to join our dynamic community?
        </SubHeading>

        <p className="max-w-[500px] text-center">Join us today and become part of a dynamic community dedicated to shaping the future of technology.</p>

        <Button className="py-6 px-12" >Join</Button>
      </div>
    </div>
  );
};

export default CTA;
