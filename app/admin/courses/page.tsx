import React from "react";
import Boxcard from "@/components/admin/Boxcard";
import {  MessageSquareText, FileQuestion } from "lucide-react";
import { HiOutlineDesktopComputer } from 'react-icons/hi';

const page = () => {
  return (
    <div className="relative bg-lightblue h-full w-full">
      <div className="absolute bg-white rounded-2xl m-16 flex flex-col  gap-8 p-6">

      <h1 className="text-3xl font-bold mx-16 leading-relaxed">Landing page</h1>

      <div className="flex flex-wrap justify-center items-center gap-12 w-full">
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
