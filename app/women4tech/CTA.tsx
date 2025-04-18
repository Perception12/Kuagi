import SubHeading from "@/components/SubHeading";
import React from "react";
import Women4Tech from "@/assets/women4tech_cta.jpeg";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <div className="mt-40 mb-20 relative bg-cta w-full flex items-center justify-center text-white h-[400px]">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={Women4Tech}
          alt="Background"
          className="object-cover w-full h-full"
        />

      </div>

      <div className="flex flex-col z-10 gap-6 bg-cta-700 h-full w-full p-4 lg:px-24 items-center justify-center">
        <SubHeading className="text-white text-4xl lg:text-5xl max-w-800px">
        Join Women4Tech: Empowering Women to Lead in Tech
        </SubHeading>

        <p className="text-center max-w-[1000px]">Be part of a supportive community that fosters growth, mentorship, and leadership opportunities in the tech industry. Together, we can close the gender gap and create a more inclusive future!</p>

        <Button className="py-6 px-12" >Become a Member</Button>
      </div>
    </div>
  );
};

export default CTA;
