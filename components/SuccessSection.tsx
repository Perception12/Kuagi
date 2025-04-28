import React from "react";
import Image from "next/image";
import SuccessImage from "@/assets/success_img.png"; // Add your center image
import SuccessCard from "./SuccessCard";
import SubHeading from "./SubHeading";
import { successData } from "@/data";


const SuccessSection = () => {
  return (
    <section className="my-40 flex flex-col items-center justify-center w-full">
      <SubHeading>Our Success Story</SubHeading>

      {/* Grid Container */}
      <div className="parent mt-10 items-center justify-center w-full">
        {successData.map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-center ${item.className} div${index+1}`}
          >
            <SuccessCard
              description={item.description}
              icon={item.icon}
              numbers={item.numbers}
            />
          </div>
        ))}

        {/* Center Image */}
        <div className="w-full items-center hidden lg:flex row-span-2 justify-center div7">
          <Image
            src={SuccessImage}
            alt="Success Story"
            className="rounded-lg w-full"
            width={200}
            height={200}
          />
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;
