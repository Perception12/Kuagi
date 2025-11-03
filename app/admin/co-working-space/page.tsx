import React from "react";
import Boxcard from "@/components/admin/Boxcard";
import { FaPeopleRoof } from 'react-icons/fa6';
import { LuMonitorCheck } from 'react-icons/lu';
import { GiExplosiveMeeting } from 'react-icons/gi';

const page = () => {
  return (
    <div className="bg-lightblue min-h-[calc(100vh-6rem)] w-full py-16">
      <div className="bg-white rounded-2xl mx-4 lg:mx-16 mb-16 flex flex-col  gap-8 p-6">

      <h1 className="text-xl lg:text-3xl font-bold mx-4 lg:mx-16 leading-relaxed">Co-Working Space</h1>

      <div className="flex flex-wrap justify-center lg:justify-start lg:ml-16 items-center gap-12 w-full">
        <Boxcard
          description="Shared space"
          Icon={FaPeopleRoof}
          href="/admin/co-working-space/data"
        />
        <Boxcard
          description="Virtual Office"
          Icon={LuMonitorCheck}
          href="/admin/co-working-space/data"
        />
        <Boxcard
          description="Meet Up"
          Icon={GiExplosiveMeeting}
          href="/admin/co-working-space/data"
        />
        
      </div>
      </div>
    </div>
  );
};

export default page;
