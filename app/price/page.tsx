import React from "react";
import Hero from "./Hero";
import Price from "./Price";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ScrollReveal from "@/components/ScrollReveal";

const page = () => {
  return (
    <div>
      <Hero />
      <ScrollReveal>
        <Price />
      </ScrollReveal>
      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>
      <ScrollReveal>
        <FAQ />
      </ScrollReveal>
    </div>
  );
};

export default page;
