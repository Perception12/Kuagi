import React from "react";
import Image from "next/image";
import SubHeading from "./SubHeading";
import { partners_data } from "@/data";



const Partners = () => {
  return (
    <div className=" container mx-auto mt-20 flex flex-col gap-8 items-center justify-center p-4">
      <SubHeading>Our Partners</SubHeading>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {partners_data.map((item, index) => (
          <Image src={item.img} alt={item.alt} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Partners;
