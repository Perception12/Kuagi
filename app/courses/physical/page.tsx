import SubHeading from "@/components/SubHeading";
import React from "react";
import DataCard from "../DataCard";
import { physicalCourseData } from "@/data";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

const page = () => {
  return (
    <section className="mt-6 lg:mt-12 flex flex-col gap-6 w-full">
      <div className="flex flex-col gap-4 mb-6">
        <SubHeading className="text-start lg:text-6xl">
          Physical Courses
        </SubHeading>

        <p className="max-w-[600px] text-mediumgrey text-base lg:text-xl">
          We are dedicated to nurturing the next generation of tech leaders
          through comprehensive and cutting-edge education programs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
        {physicalCourseData.map((data, index) => (
          <DataCard data={data} key={index} courseType="physical" />
        ))}
      </div>

      <Testimonials />
      <FAQ />
    </section>
  );
};

export default page;
