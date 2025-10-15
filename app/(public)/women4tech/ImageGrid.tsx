import React from "react";
import { women4TechImages } from "@/data";
import Image from "next/image";

const ImageGrid = () => {
  return (
    <div className="container mx-auto parent-women4tech py-8 w-full px-8 lg:px-16">
      {women4TechImages.map((item, index) => (
        <div
          key={index}
          className={`div-w${index + 1}`}
        >
          <Image src={item} alt="women4tech" className="w-full object-cover h-[280px]" />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
