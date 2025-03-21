import React from "react";
import Image, { StaticImageData } from "next/image";
import { Button } from "./ui/button";
import SubHeading from "./SubHeading";

interface SectionCardProps {
  title: string;
  image: StaticImageData;
  children: React.ReactNode;
  buttonText: string;
}

const SectionCard: React.FC<SectionCardProps> = ({
  title,
  image,
  children,
  buttonText,
}) => {
  return (
    <div className="w-full bg-lightgrey p-4 md:px-24 flex items-center justify-around gap-8 lg:gap-0 flex-col lg:flex-row">
        
      <div className="flex-1 flex">
        <Image src={image} alt="who we are Image" className="object-cover rounded-2xl" />
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <SubHeading className="text-start">{title}</SubHeading>
        {children}
        <Button className="w-fit">{buttonText}</Button>
      </div>
    </div>
  );
};

export default SectionCard;
