import React from "react";
import { women4TechData } from "@/data";
import Image from "next/image";
import Reachout from "@/components/Reachout";

const Women4Tech = () => {
  return (
    <div className="mt-32 w-full">
      {/* Event Section */}
      <div className="grid lg:grid-cols-2 gap-24 justify-center items-center">
        {women4TechData.map((item, index) => (
          <div key={index} className="flex flex-col gap-6">
            <Image
              src={item.image}
              alt="event image"
              className="w-full object-cover rounded-t-3xl"
            />
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <Reachout />
    </div>
  );
};

export default Women4Tech;
