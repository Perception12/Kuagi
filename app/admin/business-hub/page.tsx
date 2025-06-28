import React from "react";

import { DataTable } from "@/components/admin/DataTable";
import {
  calendar,
  calendarColumns,
  hero,
  heroColumns,
  packages,
  packagesColumns,
} from "./columns";

import img_women4tech from "@/assets/women4Tech1.png";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

async function getHeroData(): Promise<hero[]> {
  // Simulate fetching data from an API or database
  const data: hero[] = [
    {
      id: "hero-1",
      image: img_women4tech,
      title: "Her Ideas, Our Future",
      description:
        "Championing a movement where women don’t just participate in technology .....",
    },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

async function getPackagesData(): Promise<packages[]> {
  // Simulate fetching data from an API or database
  const data: packages[] = [
    {
      id: "package-1",
      title: "Starter Package",
      description: ["Access to basic resources", "Community support"],
    },
    {
      id: "package-2",
      title: "Advanced Package",
      description: [
        "All Basic features",
        "Exclusive webinars",
        "Mentorship programs",
      ],
    },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

async function getCalendarData(): Promise<calendar[]> {
  // Simulate fetching data for calendar
  const data: calendar[] = [
    {
      id: "calendar-1",
      day: "Monday",
      time: "10:00 AM",
      topic: "Business Hub Meet",
      venue: "Twitter Space",
    },
    {
      id: "calendar-2",
      day: "Wednesday",
      time: "2:00 PM",
      topic: "Quick Recap",
      venue: "Kuagi Resources",
    },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

export default async function page() {
  const fetchedHeroData = await getHeroData();
  const fetchedPackagesData = await getPackagesData();
  const fetchedCalendarData = await getCalendarData();
  return (
    <div className="flex flex-col gap-8 p-6 bg-lightblue h-full">
      <div className="flex flex-col gap-4 bg-white p-8 rounded-md shadow-sm">
        <h1 className="text-2xl font-bold">Hero Section</h1>
        <DataTable columns={heroColumns} data={fetchedHeroData} />
        <Button className="w-fit ml-auto px-4 rounded-md" size={"sm"}>
          {" "}
          <Plus className="text-white inline" /> Add
        </Button>
      </div>

      <div className="flex flex-col gap-4 bg-white p-8 rounded-md shadow-sm">
        <h1 className="text-2xl font-bold">Seminar Packages</h1>
        <DataTable columns={packagesColumns} data={fetchedPackagesData} />
        <Button className="w-fit ml-auto px-4 rounded-md" size={"sm"}>
          {" "}
          <Plus className="text-white inline" /> Add
        </Button>
      </div>

      <div className="flex flex-col gap-4 bg-white p-8 rounded-md shadow-sm">
        <h1 className="text-2xl font-bold">Our Calendar</h1>
        <DataTable columns={calendarColumns} data={fetchedCalendarData} />
        <Button className="w-fit ml-auto px-4 rounded-md" size={"sm"}>
          {" "}
          <Plus className="text-white inline" /> Add
        </Button>
      </div>
    </div>
  );
}
