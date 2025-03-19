import React from "react";
import Image from "next/image";
import SuccessImage from "@/assets/img_success.png"; // Add your center image
import SuccessCard from "./SuccessCard";
import SubHeading from "./SubHeading";
import { successData } from "@/data";


const SuccessSection = () => {
  return (
    <section className="mt-12 flex flex-col items-center justify-center w-full">
      <SubHeading>Our Success Story</SubHeading>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 gap-2 mt-10 items-center justify-center w-full">
        {successData.slice(0, 2).map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-center ${item.className}`}
          >
            <SuccessCard
              description={item.description}
              icon={item.icon}
              numbers={item.numbers}
            />
          </div>
        ))}

        {/* Center Image */}
        <div className="w-full items-center hidden lg:flex row-span-2 justify-center col-start-4 col-span-2">
          <Image
            src={SuccessImage}
            alt="Success Story"
            className="rounded-lg w-full"
            width={200}
            height={200}
          />
        </div>

        {successData.slice(2).map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-center ${item.className}`}
          >
            <SuccessCard
              description={item.description}
              icon={item.icon}
              numbers={item.numbers}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessSection;
