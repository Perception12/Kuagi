import React from "react";
import Boxcard from "@/components/admin/Boxcard";
import {  MessageSquareText, FileQuestion } from "lucide-react";
import { HiOutlineDesktopComputer } from 'react-icons/hi';

const page = () => {
  return (
    <div className="bg-lightblue min-h-[calc(100vh-6rem)] w-full py-16">
      <div className="bg-white rounded-2xl mx-4 lg:mx-16 mb-16 flex flex-col  gap-8 p-6">

      <h1 className="text-xl lg:text-3xl font-bold mx:4 lg:mx-16 leading-relaxed">Courses</h1>

      <div className="flex flex-wrap justify-center lg:justify-start lg:ml-16 items-center gap-12 w-full">
        <Boxcard
        description="Courses"
        Icon={HiOutlineDesktopComputer}
        href="/admin/courses/data"
      />
      <Boxcard
      description="Testimonials"
      Icon={MessageSquareText}
      href="/admin/courses/data"
    />
    <Boxcard
      description="FAQs"
      Icon={FileQuestion}
      href="/admin/courses/data"
    />
      </div>
      </div>
    </div>
  );
};

export default page;
