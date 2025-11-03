import React from "react";
import Boxcard from "@/components/admin/Boxcard";
import { BadgeCheck, Image, Calendar, Handshake, MessageSquareText, FileQuestion } from "lucide-react";

const page = () => {
  return (
    <div className="bg-lightblue min-h-[calc(100vh-6rem)] w-full py-16">
      <div className="bg-white rounded-2xl mx-16 mb-16 flex flex-col   gap-8 p-6">

      <h1 className="text-xl lg:text-3xl font-bold mx-16 leading-relaxed">Landing page</h1>

      <div className="flex flex-wrap justify-center lg:justify-start lg:ml-16 items-center gap-12 w-full">
        <Boxcard
          description="Hero Section"
          Icon={Image}
          href="/admin/landing-page/data"
        />
        <Boxcard
          description="Who we are"
          Icon={Calendar}
          href="/admin/landing-page/data"
        />
        <Boxcard
          description="Success Story"
          Icon={BadgeCheck}
          href="/admin/landing-page/data"
        />
        <Boxcard
        description="Partners"
        Icon={Handshake}
        href="/admin/landing-page/data"
      />
      <Boxcard
      description="Testimonials"
      Icon={MessageSquareText}
      href="/admin/landing-page/data"
    />
    <Boxcard
      description="FAQs"
      Icon={FileQuestion}
      href="/admin/landing-page/data"
    />
      </div>
      </div>
    </div>
  );
};

export default page;
