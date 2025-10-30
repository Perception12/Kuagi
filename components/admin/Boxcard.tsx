import React from "react";
import Link from "next/link";
import {
  Card,
  CardDescription,
} from "@/components/ui/card";

interface OverviewCardProps {
  description: string;
  value?: number;
  Icon?: React.ElementType; // Optional icon component
  btn_text?: string;
  href?: string;
}

const Boxcard: React.FC<OverviewCardProps> = ({
  description,
  value,
  Icon,
  btn_text,
  href,
}) => {
  const content = (
    <Card className="relative shadow-md w-64 h-72 mx-auto cursor-pointer hover:shadow-lg transition">
        <CardDescription className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        
          {(value &&  <div style={{ color: "#5ECBA2" }} className="w-28 h-28 bg-[#DDF5EF] text-5xl rounded-full flex items-center justify-center ">{value}</div>) ?? (Icon && <div className="w-28 h-28 bg-[#DDF5EF] rounded-full flex items-center justify-center"><Icon style={{ color: "#5ECBA2" }} strokeWidth='3' className="w-12 h-12" /></div>)}
          <div className="text-black font-bold text-xl">
          {description}
          </div>
        </CardDescription>

      
    </Card>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
};

export default Boxcard;