import React from "react";
import Image, { StaticImageData } from "next/image";
import { Button } from "./ui/button";
import SubHeading from "./SubHeading";
import ScrollReveal from "./ScrollReveal";

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
    <div className="w-full bg-lightgrey flex items-center justify-center">
      <div className="container flex p-8 md:p-16 gap-8 flex-col lg:flex-row items-center">
        <div className="flex-1 flex">
          <ScrollReveal>
            <Image
              src={image}
              alt="who we are Image"
              className="object-cover w-full rounded-2xl"
            />
          </ScrollReveal>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <ScrollReveal>
            <SubHeading className="text-start">{title}</SubHeading>
            {children}
          </ScrollReveal>

          <ScrollReveal>
            <Button className="w-fit">{buttonText}</Button>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default SectionCard;
