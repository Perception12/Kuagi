import React from "react";
import Hero from "./Hero";
import Packages from "./Packages";
import Calender from "./Calender";
import FAQ from "@/components/FAQ";
import ScrollReveal from "@/components/ScrollReveal";
import CTA from "../CTA";

const page = () => {
  return (
    <div>
      <Hero />
      <Packages />
      <Calender/>

      <ScrollReveal>
        <FAQ />
      </ScrollReveal>

      <ScrollReveal>
        <CTA />
      </ScrollReveal>
    </div>
  );
};

export default page;
