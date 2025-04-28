import CurvedCarousel from "@/components/CurvedCarousel";
import SubHeading from "@/components/SubHeading";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-lightblue to-white p-8 md:mb-16 flex flex-col gap-12 md:h-[calc(90vh-5rem)]">
      <div className="flex flex-col items-center justify-center gap-4 flex-2">
        <SubHeading className="text-center max-w-[850px] lg:text-5xl">
          Sustainable solution that supports and empower businesses
        </SubHeading>

        <p className="max-w-[468px] text-center text-mediumgrey">
          The Business Hub is to offer a sustainable solution that supports and
          empower business owners/Startups in Kwara State.
        </p>
      </div>
      <div className="container mx-auto relative flex justify-center items-center overflow-hidden">
        <CurvedCarousel />
        {/* Top ellipse */}
        <div className="absolute w-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-6 bg-white ellipse pointer-events-none" />

        {/* Bottom ellipse */}
        <div className="absolute w-full bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 h-6 bg-white ellipse pointer-events-none" />
      </div>
    </section>
  );
};

export default Hero;
