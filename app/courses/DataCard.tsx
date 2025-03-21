"use client";
import React from "react";
import type { CourseData } from "@/data";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const DataCard: React.FC<{ data: CourseData; courseType: string }> = ({
  data,
  courseType,
}) => {
  const navigator = useRouter();

  return (
    <div className="flex flex-col gap-8 p-8 border border-darkergrey lg:w-[380px] rounded-3xl">
      {/* Image */}
      <div className="relative flex items-center justify-center">
        <Image
          src={data.image}
          alt={data.topic}
          className="max-h-[160px] object-cover"
        />
        <div
          className={`absolute bottom-0 -right-8 p-2 rounded-tl-2xl ${
            data.availability
              ? "bg-lightgreen text-green"
              : "bg-lightyellow text-yellow"
          } `}
        >
          {data.availability ? "Available" : "Coming Soon"}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl">{data.topic}</h2>
        <span className="flex gap-2">
          <p className="text-mediumgrey">Course Duration:</p> {data.duration}
        </span>
        <span className="flex gap-2">
          <p className="text-mediumgrey">Class Times:</p> {data.classTime}
        </span>
      </div>

      <div className="flex justify-between items-center gap-4 mt-auto">
        <Button
          onClick={() =>
            navigator.push(`${courseType}/${encodeURIComponent(data.topic)}`)
          }
          className="bg-white border border-darkergrey text-darkergrey hover:text-white rounded-full"
        >
          Learn More
        </Button>
        <h3 className="font-semibold text-xl">{data.price}</h3>
      </div>
    </div>
  );
};

export default DataCard;
