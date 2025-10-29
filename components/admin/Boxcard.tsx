import React from "react";
import {
  Card,
  CardDescription,
} from "@/components/ui/card";

interface OverviewCardProps {
  description: string;
  value?: number;
  Icon?: React.ElementType; // Optional icon component
  btn_text?: string;
}

const Boxcard: React.FC<OverviewCardProps> = ({
  description,
  value,
  Icon,
  btn_text,
}) => {
  return (
    <Card className="relative shadow-md w-64 h-72 mx-auto">
        <CardDescription className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        
          {(value &&  <div style={{ color: "#5ECBA2" }} className="w-28 h-28 bg-[#DDF5EF] text-5xl rounded-full flex items-center justify-center ">{value}</div>) ?? (Icon && <div className="w-28 h-28 bg-[#DDF5EF] rounded-full flex items-center justify-center"><Icon style={{ color: "#5ECBA2" }} className="w-12 h-12" /></div>)}
          <div className="text-black font-bold text-xl">
          {description}
          </div>
        </CardDescription>

      
    </Card>
  );
};

export default Boxcard;