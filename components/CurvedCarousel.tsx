"use client";
import Image from "next/image";
import Image1 from "@/assets/img_business1.png";
import Image2 from "@/assets/img_business2.png";
import Image3 from "@/assets/img_business3.png";

const images = [Image1, Image2, Image3];

export default function CurvedCarousel() {
  return (
    <div className="relative justify-center items-center hidden lg:flex">
      <div className="relative flex justify-center perspective">
        <div className="flex curved-container w-full">
          {images.map((src, index) => (
            <div key={index} className="curved-item w-full">
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                width={300}
                height={200}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
