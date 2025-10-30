import React from "react";
import Boxcard from "@/components/admin/Boxcard";
import { FaPeopleRoof } from 'react-icons/fa6';
import { LuMonitorCheck } from 'react-icons/lu';
import { GiExplosiveMeeting } from 'react-icons/gi';

const page = () => {
  return (
    <div className="relative bg-lightblue h-full w-full">
      <div className="absolute bg-white rounded-2xl m-16 flex flex-col  gap-8 p-6">

      <h1 className="text-3xl font-bold mx-16 leading-relaxed">Co-Working Space</h1>

      <div className="flex flex-wrap justify-center items-center gap-12 w-full">
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
