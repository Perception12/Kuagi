import React from "react";
import Image from "next/image";
import IconLaptop from "@/assets/icons/ic_laptop.png";
import IconAward from "@/assets/icons/ic_award.png";
import IconTrained from "@/assets/icons/ic_trained.png";
import IconBusiness from "@/assets/icons/ic_business.png";
import IconStudents from "@/assets/icons/ic_students.png";
import IconWeb from "@/assets/icons/ic_web.png";
import SuccessImage from "@/assets/img_success.png"; // Add your center image
import SuccessCard from "./SuccessCard";

const successData = [
  {
    icon: IconLaptop,
    numbers: "200+",
    description: "Job Created",
    className: "lg:col-start-4 lg:col-span-2",
  },
  {
    icon: IconAward,
    numbers: "150+",
    description: "Project Awarded",
    className: "lg:col-start-2 lg:col-end-4",
  },
  {
    icon: IconBusiness,
    numbers: "100+",
    description: "Business Empowered",
    className: "lg:col-start-6 lg:col-end-8",
  },
  {
    icon: IconTrained,
    numbers: "150+",
    description: "Women Trained",
    className: "lg:col-start-2 lg:col-end-4",
  },
  {
    icon: IconWeb,
    numbers: "76+",
    description: "Websites Created",
    className: "lg:col-start-6 lg:col-end-8",
  },
  {
    icon: IconStudents,
    numbers: "300+",
    description: "Students Trained",
    className: "lg:col-start-4 lg:col-span-2",
  },
];

const SuccessSection = () => {
  return (
    <section className="mt-12">
      <h2 className="text-primary text-2xl md:text-3xl text-center font-bold w-full">
        Our Success Story
      </h2>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-2 mt-10 items-center justify-center">
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
