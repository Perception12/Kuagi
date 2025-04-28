import React from "react";
import Image from "next/image";
import SubHeading from "./SubHeading";
import Slider from "react-infinite-logo-slider";
import { partners_data } from "@/data";

const Partners = () => {
  return (
    <div className="mx-auto my-40 flex flex-col gap-8 items-center justify-center p-4 overflow-x-hidden">
      <SubHeading className="mb-12">Our Partners</SubHeading>
      {/* <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {partners_data.map((item, index) => (
          <Image src={item.img} alt={item.alt} key={index} />
        ))}
      </div> */}
      <Slider
        width="250px"
        duration={40}
        pauseOnHover={true}
        blurBorders={false}
        blurBorderColor={"#fff"}
      >
        {partners_data.map((item, index) => (
          <Slider.Slide key={index}>
            <Image src={item.img} alt={item.alt} key={index} />
          </Slider.Slide>
        ))}
      </Slider>
    </div>
  );
};

export default Partners;
