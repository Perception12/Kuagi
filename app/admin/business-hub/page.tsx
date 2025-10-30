import React from "react";
import Boxcard from "@/components/admin/Boxcard";
import {  FileQuestion } from "lucide-react";
import { PiPackageLight } from 'react-icons/pi';
import { FaRegCalendarAlt } from 'react-icons/fa';

const page = () => {
  return (
    <div className="relative bg-lightblue h-full w-full">
      <div className="absolute bg-white rounded-2xl m-16 flex flex-col  gap-8 p-6">

      <h1 className="text-3xl font-bold mx-16 leading-relaxed">Business Hub</h1>

      <div className="flex flex-wrap justify-center items-center gap-12 w-full">
        <Boxcard
        description="Packages"
        Icon={PiPackageLight}
        href="/admin/business-hub/data"
      />
      <Boxcard
      description="Calender"
      Icon={FaRegCalendarAlt}
      href="/admin/business-hub/data"
    />
    <Boxcard
      description="FAQs"
      Icon={FileQuestion}
      href="/admin/business-hub/data"
    />
      </div>
      </div>
    </div>
  );
};

export default page;
