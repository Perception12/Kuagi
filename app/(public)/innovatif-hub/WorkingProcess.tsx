import React from "react";
import SubHeading from "@/components/SubHeading";
import { workingProcess } from "@/data";
import ScrollReveal from "@/components/ScrollReveal";
import Workprocess from "@/assets/working-process.png";
import Image from "next/image";


const WorkingProcess = () => {
  return (
    <section className="container mx-auto p-8 lg:px-16 flex flex-col items-center justify-center gap-8 mt-20">
      <ScrollReveal>
        <SubHeading>Our Working Process</SubHeading>
      </ScrollReveal>

      <div className="flex w-full flex-col md:flex-row gap-8">
        <div className="flex-1">
        <div className="flex flex-col max-w-[450px] relative  border rounded-2xl overflow-hidden">
<Image src={Workprocess} alt="" className="w-full h-auto" />
<div className="absolute flex flex-col justify-center items-center gap-12 top-0 bottom-0 left-0 right-0 inset-x-4  bg-primary/70 rounded-xl p-4 text-white text-center">
  <h1 className="text-bold text-lg">Reasons to Choose Us</h1>
  <p className="flex flex-col justify-center items-center gap-4">
  <span> 
  We establish a reputation for reliability and dependability, by delivering consistent, high quality services and solutions.
  </span>
<span>
We provide innovative solutions that address our client’s unique challenges and help them stay ahead of the competition.
</span>
<span>
By fostering a culture of collaboration and teamwork, we can work closely with client to understand their needs, co-create solutions, and achieve shared goals.
</span>
  </p>
</div>
        </div>
        </div>

        <div className="flex-2 grid md:grid-cols-2 gap-8">
          {workingProcess.map((process, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center gap-4 p-4 bg-lightblue text-darkergrey`}
            >
              <SubHeading className="self-start lg:text-5xl">
                0{index + 1}
              </SubHeading>
              <h2 className="text-xl font-bold">{process.title}</h2>
              <p className="text-center">{process.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
