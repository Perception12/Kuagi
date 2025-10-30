import React from "react";
import Boxcard from "@/components/admin/Boxcard";
import { Image, FileQuestion } from "lucide-react";
import { PiPackageLight } from 'react-icons/pi';
import { LuWorkflow } from 'react-icons/lu';
import { AiOutlineProject } from 'react-icons/ai';
const page = () => {
  return (
    <div className="relative bg-lightblue h-full w-full">
      <div className="absolute bg-white rounded-2xl m-16 flex flex-col  gap-8 p-6">

      <h1 className="text-3xl font-bold mx-16 leading-loose">Innovative Hub</h1>

      <div className="flex flex-wrap justify-center items-center gap-12 w-full">
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
