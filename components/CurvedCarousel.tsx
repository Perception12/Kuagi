"use client";

import Image from "next/image";
import Image1 from "@/assets/img_business1.png";
import Image2 from "@/assets/img_business2.png";
import Image3 from "@/assets/img_business3.png";
import Image4 from "@/assets/img_business3.png";
import Image5 from "@/assets/img_business3.png";
import Slider from "react-infinite-logo-slider";


const images = [Image1, Image2, Image3, Image4, Image5];



export default function CurvedCarousel() {
  return (
    <Slider 
      width="30%"
      duration={40}
      pauseOnHover={false}
      blurBorders={false}
      blurBorderColor={'#fff'}>


      {images.map((image, index) => (
      <Slider.Slide key={index}>
        <Image src={image} alt="slider" width={400} height={300} className="object-cover rounded-lg" />
      </Slider.Slide>
      ))}

    </Slider>
  );
}