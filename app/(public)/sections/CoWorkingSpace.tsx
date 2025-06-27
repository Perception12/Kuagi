import React from "react";
import AboutUs from "@/components/AboutUs";
import SuccessSection from "@/components/SuccessSection";
import ClassCTA from "@/components/ClassCTA";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import EventSection from "@/components/EventSection";
import Reachout from "@/components/Reachout";
import ScrollReveal from "@/components/ScrollReveal";
import CTA from "../CTA";

const CoWorkingSpace = () => {
  return (
    <section className="mt-20 w-full">
      <AboutUs />

      <ScrollReveal>
        <SuccessSection />
      </ScrollReveal>

      <ScrollReveal>
        <ClassCTA />
      </ScrollReveal>

      <ScrollReveal>
        <Partners />
      </ScrollReveal>

      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>

      <ScrollReveal>
        <FAQ />
      </ScrollReveal>

      <ScrollReveal>
        <EventSection />
      </ScrollReveal>

      <ScrollReveal>
        <Reachout />
      </ScrollReveal>

      <ScrollReveal>
        <CTA />
      </ScrollReveal>
    </section>
  );
};

export default CoWorkingSpace;
