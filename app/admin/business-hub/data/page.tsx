import React from "react";

import { DataTable } from "@/components/admin/DataTable";
import {
  calendar,
  calendarColumns,
  faq,
  faqColumns,
  hero,
  heroColumns,
  packages,
  packagesColumns,
} from "./columns";

import img_women4tech from "@/assets/women4Tech1.png";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { BusinessHeroDialog } from "@/components/admin/BusinessHero";
import { BusinessPackagesDialog } from "@/components/admin/BusinessPackagesDialog";
import { BusinessCalenderDialog } from "@/components/admin/BusinessCalenderDialog";
import { apiRequest } from "@/lib/api";
import {
  FAQS,
  GENERAL_INFO,
  OUR_PARTNERS,
  SUCCESS_STORIES,
} from "@/lib/api_routes";
import { BusinessFAQDialog } from "@/components/admin/BusinessFAQDialog";

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

async function getFAQData(): Promise<faq[]> {
  try {
    const response = await apiRequest({
      url: FAQS.all(),
      method: "get",
    });

    type FAQApiResponseItem = {
      id?: string | number;
      question: string;
      answer: string;
    };

    const data = Array.isArray(response.data.data)
      ? response.data.data.map((item: FAQApiResponseItem) => ({
          id: item.id?.toString() || item.question,
          questions: item.question,
          answers: item.answer,
        }))
      : [];

    return data;
  } catch (error) {
    console.error("Failed to fetch hero data", error);
    return [];
  }
}

export default async function page() {
  const fetchedHeroData = await getHeroData();
  const fetchedPackagesData = await getPackagesData();
  const fetchedCalendarData = await getCalendarData();
  const fetchedFAQData = await getFAQData();
  return (
    <div className="flex flex-col gap-8 p-6 bg-lightblue h-full">
      <div className="flex flex-col gap-4 bg-white p-8 rounded-md shadow-sm">
        <h1 className="text-2xl font-bold">Hero Section</h1>
        <DataTable columns={heroColumns} data={fetchedHeroData} />
        <BusinessHeroDialog/>
      </div>

      <div className="flex flex-col gap-4 bg-white p-8 rounded-md shadow-sm">
        <h1 className="text-2xl font-bold">Seminar Packages</h1>
        <DataTable columns={packagesColumns} data={fetchedPackagesData} />
        <BusinessPackagesDialog/>
      </div>

      <div className="flex flex-col gap-4 bg-white p-8 rounded-md shadow-sm">
        <h1 className="text-2xl font-bold">Our Calendar</h1>
        <DataTable columns={calendarColumns} data={fetchedCalendarData} />
        <BusinessCalenderDialog/>
      </div>

      <div className="flex flex-col gap-4 bg-white p-8 rounded-md shadow-sm">
        <h1 className="text-2xl font-bold">FAQ</h1>
        <DataTable columns={faqColumns} data={fetchedFAQData} />
        <BusinessFAQDialog/>
      </div>
    </div>
  );
}
