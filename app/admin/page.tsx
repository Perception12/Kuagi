import React from "react";
import { LayoutDashboard } from "lucide-react";
import OverviewCard from "@/components/admin/OverviewCard";
import { UserRoundPlus, Calendar, Code, BriefcaseBusiness } from "lucide-react";

const page = () => {
  return (
    <div className="flex flex-col gap-8 p-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="flex gap-8 p-4 bg-primary text-white rounded-md items-center">
        <LayoutDashboard className="w-12 h-12" />
        <p>
          You can efficiently manage your co-working space, monitor bookings,
          and edit information on your website in real-time. Gain insights into
          availability, revenue performance, and community engagement all from
          one intuitive dashboard.
        </p>
      </div>

      <div className=" flex gap-4 w-full">
        <OverviewCard
          description="Total Partners"
          value={20}
          Icon={UserRoundPlus}
          btn_text="Download CSV"
        />
        <OverviewCard
          description="Total Members"
          value={30}
          Icon={UserRoundPlus}
          btn_text="Download CSV"
        />
      </div>

      <div className="flex gap-4 w-full">
        <OverviewCard
          description="Total Courses"
          value={50}
          Icon={Code}
        />
        <OverviewCard
          description="Total Events"
          value={1000}
          Icon={Calendar}
        />
        <OverviewCard
          description="Total Projects"
          value={1000}
          Icon={BriefcaseBusiness}
        />
      </div>
    </div>
  );
};

export default page;
