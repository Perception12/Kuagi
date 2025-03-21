import React from "react";
import Hero from "./Hero";
import Packages from "./Packages";
import FAQ from "@/components/FAQ";

const page = () => {
  return (
   <div>
    <Hero />
    <Packages />
    <FAQ />
   </div>
  );
};

export default page;
