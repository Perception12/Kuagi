import React from "react";
import Hero from "./Hero";
import Packages from "./Packages";
import FAQ from "@/components/FAQ";
import ScrollReveal from "@/components/ScrollReveal";

const page = () => {
  return (
    <div>
      <Hero />
      <Packages />

      <ScrollReveal>
        <FAQ />
      </ScrollReveal>
    </div>
  );
};

export default page;
