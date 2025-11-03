import React from "react";

import { DataTable } from "@/components/admin/DataTable";
import {
  faq,
  faqColumns,
  hero,
  heroColumns,
  recentColumns,
  SolutionColumns,
} from "./columns";

import img_women4tech from "@/assets/women4Tech1.png";
import { apiRequest } from "@/lib/api";
import { FAQS } from "@/lib/api_routes";
import { InnovativeFAQDialog } from "@/components/admin/InnovatifFAQDialog";
import { InnovativeHeroDialog } from "@/components/admin/InnovativeHeroDialog";
import { InnovativeSolutionDialog } from "@/components/admin/InnovativeSolutionDialog";
import { InnovativeRecentDialog } from "@/components/admin/InnovativeRecentDialog";

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
  const fetchedFAQData = await getFAQData();

  return (
    <div className="flex flex-col gap-8 p-6 bg-lightblue h-full">
      <div className="flex flex-col gap-4 bg-white p-8 rounded-md shadow-sm">
        <h1 className="text-2xl font-bold">Hero Section</h1>
        <DataTable columns={heroColumns} data={fetchedHeroData} />
       <InnovativeHeroDialog/>
      </div>

      <div className="flex flex-col gap-4 bg-white p-8 rounded-md shadow-sm">
        <h1 className="text-2xl font-bold">Innovative ICT Solutions</h1>
        <DataTable columns={SolutionColumns} data={fetchedHeroData} />
        <InnovativeSolutionDialog/>
      </div>

      <div className="flex flex-col gap-4 bg-white p-8 rounded-md shadow-sm">
        <h1 className="text-2xl font-bold">Some Recent Projects</h1>
        <DataTable columns={recentColumns} data={fetchedHeroData} />
        <InnovativeRecentDialog/>
      </div>

      <div className="flex flex-col gap-4 bg-white p-8 rounded-md shadow-sm">
        <h1 className="text-2xl font-bold">FAQ</h1>
        <DataTable columns={faqColumns} data={fetchedFAQData} />
        <InnovativeFAQDialog/>
      </div>
    </div>
  );
}
