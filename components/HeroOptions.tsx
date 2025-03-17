import React from "react";
import Image, { StaticImageData } from "next/image";

interface HeroOptionsProps {
  icon: StaticImageData;
  title: string;
  icon_width?: number;
  isActive?: boolean;
}

const HeroOptions: React.FC<HeroOptionsProps> = ({
  icon,
  title,
  icon_width,
  isActive = false,
}) => {
  return (
    <div className="flex flex-col items-center justify-center cursor-pointer">
      <div className="flex gap-2 items-center justify-center">
        <Image src={icon} alt="icon" width={icon_width} />
        <p className="text-lg font-semibold">{title}</p>
      </div>

      <div className={`w-full h-[2px] ${isActive && "bg-primary"} rounded-full mt-2`}></div>
    </div>
  );
};

export default HeroOptions;
