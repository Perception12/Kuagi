import React from "react";

import { DataTable } from "@/components/admin/DataTable";
import {
  hero,
  heroColumns,
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


export default async function page() {
  const fetchedHeroData = await getHeroData();

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
    </div>
  );
}
