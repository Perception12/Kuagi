import React from "react";
import Hero from "./Hero";
import Price from "./Price";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

const page = () => {
  return (
    <div>
      <Hero />
      <Price />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default page;
