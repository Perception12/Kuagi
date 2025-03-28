import SubHeading from "@/components/SubHeading";
import React from "react";
import { onlineCourseData } from "@/data";
import DataCard from "../DataCard";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ScrollReveal from "@/components/ScrollReveal";

const page = () => {
  return (
    <>
      <section className="container mx-auto px-8 lg:px-16 mt-6 lg:mt-12 flex flex-col gap-6">
        <div className="flex flex-col gap-4 mb-6">
          <ScrollReveal>
            <SubHeading className="text-start lg:text-6xl">
              Online Courses
            </SubHeading>
          </ScrollReveal>

          <p className="max-w-[600px] text-mediumgrey text-base lg:text-xl">
            We are dedicated to nurturing the next generation of tech leaders
            through comprehensive and cutting-edge education programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
          {onlineCourseData.map((data, index) => (
            <ScrollReveal key={index}>
              <DataCard data={data} courseType="online" />
            </ScrollReveal>
          ))}
        </div>
      </section>
      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>

      <ScrollReveal>
        <FAQ />
      </ScrollReveal>
    </>
  );
};

export default page;
