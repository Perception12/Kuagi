import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface OverviewCardProps {
  description: string;
  value: number;
  Icon?: React.ElementType; // Optional icon component
  btn_text?: string;
}

const OverviewCard: React.FC<OverviewCardProps> = ({
  description,
  value,
  Icon,
  btn_text,
}) => {
  return (
    <Card className="shadow-md w-[90%] mx-auto flex flex-row item-center justify-between">
      <CardHeader>
        <CardDescription className="flex items-center gap-3">
        
          {Icon && <Icon style={{ color: "#5ECBA2" }} className="w-16 h-16 text-primary p-3  bg-[#DDF5EF] rounded-full" />}
          <div className="flex flex-col text-black">
          {description}
        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          {value}
        </CardTitle>
          </div>
        </CardDescription>
      </CardHeader>
      {btn_text && (
        <CardFooter className="">
          <Button size={"sm"} className="w-full">
            {btn_text}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default OverviewCard;
