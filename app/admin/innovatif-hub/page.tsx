import React from "react";
import Boxcard from "@/components/admin/Boxcard";
import { Image, FileQuestion } from "lucide-react";
import { PiPackageLight } from 'react-icons/pi';
import { LuWorkflow } from 'react-icons/lu';
import { AiOutlineProject } from 'react-icons/ai';
const page = () => {
  return (
    <div className="bg-lightblue min-h-[calc(100vh-6rem)] w-full py-16">
      <div className="bg-white rounded-2xl mx-4 lg:mx-16 mb-16 flex flex-col  gap-8 p-6">

      <h1 className="text-xl lg:text-3xl font-bold mx-4 lg:mx-16 leading-loose">Innovative Hub</h1>

      <div className="flex flex-wrap justify-center lg:justify-start lg:ml-16 items-center gap-12 w-full">
        <Boxcard
          description="Hero Section"
          Icon={Image}
          href="/admin/innovatif-hub/data"
        />
        <Boxcard
          description="ICT Solution"
          Icon={PiPackageLight}
          href="/admin/innovatif-hub/data"
        />
        <Boxcard
          description="Our Services"
          Icon={LuWorkflow}
          href="/admin/innovatif-hub/data"
        />
        <Boxcard
        description="Projects"
        Icon={AiOutlineProject}
        href="/admin/innovatif-hub/data"
      />
      
    <Boxcard
      description="FAQs"
      Icon={FileQuestion}
      href="/admin/innovatif-hub/data"
    />
      </div>
      </div>
    </div>
  );
};

export default page;
