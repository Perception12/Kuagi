"use client";
import SubHeading from "@/components/SubHeading";
import React from "react";
import { pricePlansData } from "@/data";
import { useState, useEffect } from "react";
import PlanCard from "./PlanCard";

const Price = () => {
  const [priceData, setPriceData] = useState<typeof pricePlansData>([]);
  const [dataIndex, setDataIndex] = useState(0);

  useEffect(() => {
    const getData = () => {
      setPriceData(pricePlansData);
    };
    getData();
  }, []);

  return (
    <section className="mt-48 md:mt-24 flex flex-col gap-6">
      <SubHeading>Price Plans</SubHeading>

      <div className="bg-lightgrey flex items-center justify-around w-full p-4">
        {priceData && priceData.map((data, index) => (
          <div
            key={index}
            onClick={() => setDataIndex(index)}
            className={`px-4 md:px-8 py-4 text-sm md:text-base bg-white text-mediumgrey rounded-full cursor-pointer lg:w-[250px] text-center ${
              dataIndex == index && "text-primary border border-primary"
            }`}
          >
            {data.title}
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center lg:flex-row gap-4 justify-around">
        {priceData && priceData[dataIndex]?.plans.map((data, index) => (
            <PlanCard key={index} data={data} planId = {index} />
        ))}
      </div>
    </section>
  );
};

export default Price;
