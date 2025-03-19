import React, { Dispatch, SetStateAction } from "react";
import Image, { StaticImageData } from "next/image";

interface HeroOptionsProps {
  icon: StaticImageData;
  title: string;
  icon_width?: number;
  isActive?: boolean;
  optionNumber: number;
  setSection?: Dispatch<SetStateAction<number>>;
}

const HeroOptions: React.FC<HeroOptionsProps> = ({
  icon,
  title,
  icon_width,
  isActive = false,
  optionNumber,
  setSection,
}) => {
  return (
    <div
      className="flex flex-col items-center justify-center cursor-pointer"
      onClick={() => setSection && setSection(optionNumber)}
    >
      <div className="flex gap-2 items-center justify-center">
        <Image
          src={icon}
          alt="icon"
          width={icon_width}
          className="hidden md:flex"
        />
        <p className="text-sm md:text-base">{title}</p>
      </div>

      <div
        className={`w-full h-[2px] ${
          isActive && "bg-primary"
        } rounded-full mt-2`}
      ></div>
    </div>
  );
};

export default HeroOptions;
