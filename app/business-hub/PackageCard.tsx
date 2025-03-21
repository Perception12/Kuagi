"use client";
import React from "react";
import type { SeminarData } from "@/data";
import CheckIcon from "@/assets/icons/ic_check_fill.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const PackageCard: React.FC<{ data: SeminarData }> = ({ data }) => {
  const navigator = useRouter();

  return (
    <div className="flex flex-col max-w-[500px] p-8 gap-8 bg-white border rounded-2xl">
      <h2 className="text-2xl font-bold">{data.name}:</h2>
      <p>{data.description}</p>
      <div className="flex flex-col gap-2">
        {data.benefits.map((benefit, index) => (
          <span key={index} className="flex flex-2 gap-2 items-start">
            <Image src={CheckIcon} alt="check icon" className="shrink-0" />
            <p>{benefit}</p>
          </span>
        ))}
      </div>
      <Button
        onClick={() => navigator.push(`/business-hub/${data.name}`)}
        className="mt-auto"
      >
        Learn More
      </Button>
    </div>
  );
};

export default PackageCard;
