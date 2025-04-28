"use client";

import Image from "next/image";
import Image1 from "@/assets/img_business1.png";
import Image2 from "@/assets/img_business2.png";
import Image3 from "@/assets/img_business3.png";

const images = [Image1, Image2, Image3];

export default function CurvedCarousel() {
  return (
    <div className="flex gap-6">

      {images.map((image, index) => (
        <Image src={image} key={index} alt="slider" className="object-cover" />
      ))}

    </div>
  );
}
