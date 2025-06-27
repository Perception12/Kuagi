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
    <Card className="shadow-none w-full max-w-[250px]">
      <CardHeader>
        <CardDescription className="flex items-center justify-between">
          {description}
          {Icon && <Icon className="w-5 h-5 text-primary" />}
        </CardDescription>
        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          {value}
        </CardTitle>
      </CardHeader>
      {btn_text && (
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <Button size={"sm"} className="w-full">
            {btn_text}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default OverviewCard;
