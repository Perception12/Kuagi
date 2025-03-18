import Image, { StaticImageData } from "next/image";
import React from "react";
import { Card } from "./ui/card";

interface SuccessCardProps {
  icon: StaticImageData;
  numbers: string;
  description: string;
  className?: string;
}

const SuccessCard: React.FC<SuccessCardProps> = ({
  icon,
  numbers,
  description,
  className,
}) => {
  return (
    <Card
      className={`flex flex-col items-center p-6 shadow-none ${className} w-[200px]`}
    >
      <div className="bg-secondary rounded-full w-[50px] h-[50px] flex items-center justify-center">
        <Image src={icon} alt={description} width={20} className="object-cover" />
      </div>
      <h3 className="text-3xl font-bold mt-4">{numbers}</h3>
      <p className="text-muted-foreground text-sm text-center">{description}</p>
    </Card>
  );
};

export default SuccessCard;
