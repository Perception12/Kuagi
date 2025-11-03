import React from "react";
import Boxcard from "@/components/admin/Boxcard";
import { MessageCircle, Image, BookImage, Handshake, Antenna } from "lucide-react";

const page = () => {
  return (
    <div className="bg-lightblue min-h-[calc(100vh-6rem)] w-full py-16">
      <div className="bg-white rounded-2xl mx-16 mb-16 flex flex-col  gap-8 p-6">

      <h1 className="text-xl lg:text-3xl font-bold mx-16 leading-relaxed">Women4tech</h1>

      <div className="flex flex-wrap justify-center lg:justify-start lg:ml-16 items-center gap-12 w-full">
        <Boxcard
          description="Hero Section"
          Icon={Image}
          href="/admin/women4tech/data"
        />
        <Boxcard
          description="Mission"
          Icon={Antenna}
          href="/admin/women4tech/data"
        />
        <Boxcard
          description="Catalogue"
          Icon={BookImage}
          href="/admin/women4tech/data"
        />
        <Boxcard
        description="Comment"
        Icon={MessageCircle}
        href="/admin/women4tech/data"
      />
      </div>
      </div>
    </div>
  );
};

export default page;
