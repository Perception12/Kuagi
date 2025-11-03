import React from "react";
import Boxcard from "@/components/admin/Boxcard";
import {  FileQuestion } from "lucide-react";
import { PiPackageLight } from 'react-icons/pi';
import { FaRegCalendarAlt } from 'react-icons/fa';

const page = () => {
  return (
    <div className="bg-lightblue min-h-[calc(100vh-6rem)] w-full py-16">
      <div className="bg-white rounded-2xl mx-16 mb-16 flex flex-col  gap-8 p-6">

      <h1 className="text-xl lg:text-3xl font-bold mx-16 leading-relaxed">Business Hub</h1>

      <div className="flex flex-wrap justify-center lg:justify-start lg:ml-16 items-center gap-12 w-full">
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
