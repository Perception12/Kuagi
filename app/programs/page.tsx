import SubHeading from "@/components/SubHeading";
import React from "react";
import Image from "next/image";
import "../globals.css";

import { programData } from "@/data";
import Reachout from "@/components/Reachout";
import ScrollReveal from "@/components/ScrollReveal";

const page = () => {
  return (
    <>
      <section className="container mx-auto mt-6 lg:mt-12 flex flex-col gap-6 px-8 lg:px-16">
        <div className="flex flex-col gap-4 py-20  ">
          <SubHeading className="text-start lg:text-6xl">
            Explore Program Options
          </SubHeading>

          <p className="max-w-[600px] text-mediumgrey text-base lg:text-xl">
            We are dedicated to nurturing the next generation of tech leaders
            through comprehensive and cutting-edge education programs.
          </p>
        </div>

        {/* Programs */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {programData.map((program, index) => (
            <ScrollReveal key={index}>
              <div className="rounded-3xl border">
                <Image
                  src={program.image}
                  alt={program.title}
                  className="w-full rounded-t-3xl"
                />
                <div className="p-4 flex flex-col gap-6">
                  <h2 className="font-bold text-2xl">{program.title}</h2>
                  <p>
                    {program.content.length > 100
                      ? `${program.content.slice(0, 150)}...`
                      : program.content}
                  </p>

                  <p className="text-sm text-footer">
                    {program.date} | {program.read_minute}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
      {/* Reachout */}
      <ScrollReveal>
        <Reachout />
      </ScrollReveal>
    </>
  );
};

export default page;
