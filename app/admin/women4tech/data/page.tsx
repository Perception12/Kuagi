import React from "react";
import { hero, heroColumns, mission, missionColumns, oneOfUs, oneOfUsColumns } from "./columns";
import { DataTable } from "@/components/admin/DataTable";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import img_women4tech from "@/assets/women4Tech1.png";
import WomenMission from "@/assets/women_mission.png"
import { WHeroDialog } from "@/components/admin/WHeroDialogue";
import { MissionDialog } from "@/components/admin/MissionDialog";
import { OneOfUsDialog } from "@/components/admin/OneOfUsDialog";

async function getHeroData(): Promise<hero[]> {
  // Simulate fetching data from an API or database
  const data: hero[] = [
    {
      id: "hero-1",
      image: img_women4tech,
      title: "Her Ideas, Our Future",
      description: "Championing a movement where women don’t just participate in technology .....",
    },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

async function getMissionData(): Promise<mission[]> {
  // Simulate fetching data from an API or database
  const data: mission[] = [
    {
      id: "mission-1",
      image: WomenMission,
      title: "We are dedicated to empowering......",
      description: "Championing a movement where women don’t just participate in technology .....",
    },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

async function getOneOfUsData(): Promise<oneOfUs[]> {
  // Simulate fetching data for "One of Us" section
    const data: oneOfUs[] = [
        {
        id: "oneOfUs-1",
        name: "Jane Doe",
        image: img_women4tech,
        comment: "Learnt a lot here. They were patient to introduce Google to me since I am old schooL"
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
  const fetchedMissionData = await getMissionData();
  const fetchedOneOfUsData = await getOneOfUsData();
  return (
    <div className="flex flex-col gap-8 p-6 bg-lightblue h-full">
      <div className="flex flex-col gap-4 bg-white p-8 rounded-md shadow-sm">
        <h1 className="text-3xl font-bold opacity-80 mb-8">Hero Section</h1>
        <DataTable columns={heroColumns} data={fetchedHeroData} />
        <WHeroDialog/>
      </div>
      <div className="flex flex-col gap-4 bg-white p-8 rounded-md shadow-sm">
        <h1 className="text-3xl font-bold opacity-80 mb-8">Our Mission</h1>
        <DataTable columns={missionColumns} data={fetchedMissionData} />
        <MissionDialog/>
      </div>

      <div className="flex flex-col gap-4 bg-white p-8 rounded-md shadow-sm">
        <h1 className="text-3xl font-bold opacity-80 mb-8">One of Us Says</h1>
        <DataTable columns={oneOfUsColumns} data={fetchedOneOfUsData} />
        <OneOfUsDialog/>
      </div>
    </div>
  );
}
