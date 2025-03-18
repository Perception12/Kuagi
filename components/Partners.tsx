import React from "react";
import GDG from "@/assets/partners_gdg.png";
import HAM from "@/assets/partners_ham.png";
import K from "@/assets/partners_k.png";
import NJFP from "@/assets/partners_njfp.png";
import NTC from "@/assets/partners_ntc.png";
import Image from "next/image";

const partners_data = [
  {
    img: GDG,
    alt: "Google developers group",
  },
  {
    img: HAM,
    alt: "Ham Foundation",
  },
  {
    img: K,
    alt: "k",
  },
  {
    img: NJFP,
    alt: "Nigeria Jubilee Fellows Program",
  },
  {
    img: NTC,
    alt: "Nupe tech community",
  },
];

const Partners = () => {
  return (
    <div className="mt-12 flex flex-col gap-6 items-center justify-center p-4">
      <h2 className="text-primary text-3xl font-bold">Our Partners</h2>
      <div className="flex items-center justify-center gap-4">
        {partners_data.map((item, index) => (
          <Image src={item.img} alt={item.alt} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Partners;
