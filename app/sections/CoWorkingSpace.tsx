import React from "react";
import WhoWeAre from "@/assets/img_who_we_are.png";
import SectionCard from "@/components/SectionCard";
import SuccessSection from "@/components/SuccessSection";
import ClassCTA from "@/components/ClassCTA";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import EventSection from "@/components/EventSection";
import Reachout from "@/components/Reachout";

const CoWorkingSpace = () => {
  return (
    <div className="mt-20 w-full">
      <SectionCard
        image={WhoWeAre}
        buttonText="Become a Kuagite"
        title="Who We Are"
      >
        <p>
          Kuagi Resources is a tech community that offers IT Solutions, Tech
          Community Services, Hub and Co-working space and IT Trainings.
        </p>
        <p>
          We are building a vibrant community where people can become better at
          innovation, learn new technologies, meet new people, find support, and
          pursue their passion together.
        </p>
      </SectionCard>

      <SuccessSection />
      <ClassCTA />
      <Partners />
      <Testimonials />
      <FAQ />
      <EventSection />
      <Reachout />
    </div>
  );
};

export default CoWorkingSpace;
