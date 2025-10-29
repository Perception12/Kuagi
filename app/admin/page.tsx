import React from "react";
import { LayoutDashboard } from "lucide-react";
import Boxcard from "@/components/admin/Boxcard";
import OverviewCard from "@/components/admin/OverviewCard";
import { UserRoundPlus, Calendar, Code, BriefcaseBusiness } from "lucide-react";

const page = () => {
  return (
    <div className="flex flex-col gap-8 p-6">
      <h1 className="text-3xl font-bold mx-8">Dashboard</h1>

      <div className="flex mx-8 gap-8 p-4 bg-primary text-white rounded-md items-center">
        <LayoutDashboard className="w-12 h-12" />
        <p>
          You can efficiently manage your co-working space, monitor bookings,
          and edit information on your website in real-time. Gain insights into
          availability, revenue performance, and community engagement all from
          one intuitive dashboard.
        </p>
      </div>

      <div className="flex flex-col gap-4 w-full">
        <OverviewCard
          description="Partners"
          value={20}
          Icon={UserRoundPlus}
          btn_text="Download CSV"
        />
        <OverviewCard
          description="Members"
          value={30}
          Icon={UserRoundPlus}
          btn_text="Download CSV"
        />
      </div>

      <div className="flex flex-wrap gap-4 w-full">
        <Boxcard
          description="Courses"
          value={12}
          Icon={Code}
        />
        <Boxcard
          description="Events"
          value={9}
          Icon={Calendar}
        />
        <Boxcard
          description="Projects"
          value={7}
          Icon={BriefcaseBusiness}
        />
      </div>
    </div>
  );
};

export default page;
