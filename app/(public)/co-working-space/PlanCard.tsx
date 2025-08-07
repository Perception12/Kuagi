import React from "react";
import { useState } from "react";
import type { PricePlan } from "@/data";
import SubHeading from "@/components/SubHeading";
import { Button } from "@/components/ui/button";
import CheckIcon from "@/assets/icons/ic_check_fill.png";
import Image from "next/image";

const PlanCard: React.FC<{ data: PricePlan; planId: number }> = ({
  data,
  planId,
}) => {
  const [subscriptionIndex, setSubscriptionIndex] = useState<number>(0);

  return (
    <div className="flex flex-col gap-8 p-8 border max-w-[350px] lg:w-[350px] rounded-3xl">
      <div
        className={`bg-lightgrey w-fit p-2 px-4 rounded-md ${
          planId == 0 ? "text-red" : planId == 1 ? "text-yellow" : "text-green"
        } `}
      >
        {data.name}
      </div>

      <div className="flex gap-4">
        {data.subscriptions.map((subscription, index) => (
          <p
            key={index}
            onClick={() => {
              setSubscriptionIndex(index);
            }}
            className={`cursor-pointer ${
              subscriptionIndex == index && "text-primary"
            }`}
          >
            {subscription.name}
          </p>
        ))}
      </div>

      <SubHeading className="text-start !text-darkergrey">
        {data.subscriptions[subscriptionIndex].price}
      </SubHeading>

      <div className="flex flex-col gap-4">
        {data.subscriptions[subscriptionIndex].benefits.map(
          (benefit, index) => (
            <div key={index} className="flex gap-2 items-start">
              <Image src={CheckIcon} alt="checkbox" />
              {benefit}
            </div>
          )
        )}
      </div>

      <div className="mt-auto w-full">
        <Button className="w-full">Subscribe</Button>
      </div>
    </div>
  );
};

export default PlanCard;
