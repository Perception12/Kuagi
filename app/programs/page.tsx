import SubHeading from "@/components/SubHeading";
import React from "react";
import Image from "next/image";
import "../globals.css";

import { programData } from "@/data";
import Reachout from "@/components/Reachout";

const page = () => {
  return (
    <div className="mt-6 lg:mt-12 flex flex-col gap-6">
      <div className="flex flex-col gap-4 mb-6">
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
          <div key={index} className="rounded-3xl border">
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
        ))}
      </div>

      {/* Reachout */}
      <Reachout />
    </div>
  );
};

export default page;
