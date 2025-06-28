import { DataTable } from "@/components/admin/DataTable";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { pricePlanColumns, price_plan } from "./columns";

async function getSharedSpacePlan(): Promise<price_plan[]> {
  // Simulate fetching data from an API or database
  const data: price_plan[] = [
    {
      id: "sp-plan-1",
      plan: "Standard Plan",
      dailyPrice: 20,
      weeklyPrice: 100,
      monthlyPrice: 350,
    },
    {
      id: "sp-plan-2",
      plan: "Premium Plan",
      dailyPrice: 30,
      weeklyPrice: 150,
      monthlyPrice: 500,

    },
    {
      id: "sp-plan-3",
      plan: "Super Pro",
      dailyPrice: 50,
      weeklyPrice: 250,
      monthlyPrice: 800,
   
    },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

async function getVirtualOfficePlan(): Promise<price_plan[]> {
  // Simulate fetching data from an API or database
  const data: price_plan[] = [
    {
      id: "vo-plan-1",
      plan: "Standard Plan",
      dailyPrice: 10,
      weeklyPrice: 50,
      monthlyPrice: 150,
    },
    {
      id: "vo-plan-2",
      plan: "Premium Plan",
      dailyPrice: 15,
      weeklyPrice: 75,
      monthlyPrice: 225,
    },
    {
      id: "vo-plan-3",
      plan: "Super Pro",
      dailyPrice: 25,
      weeklyPrice: 125,
      monthlyPrice: 375,
    },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

async function getMeetUpPlan(): Promise<price_plan[]> {
  // Simulate fetching data from an API or database
  const data: price_plan[] = [
    {
      id: "mu-plan-1",
      plan: "Standard Plan",
      dailyPrice: 50,
      weeklyPrice: 300,
      monthlyPrice: 1000,
    },
    {
      id: "mu-plan-2",
      plan: "Premium Plan",
      dailyPrice: 80,
      weeklyPrice: 450,
      monthlyPrice: 1500,
    },
    {
      id: "mu-plan-3",
      plan: "Super Pro",
      dailyPrice: 120,
      weeklyPrice: 700,
      monthlyPrice: 2200,
    },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

export default async function page() {
  const fetchedSharedSpacePlan = await getSharedSpacePlan();
  const fetchedVirtualOfficePlan = await getVirtualOfficePlan();
  const fetchedMeetUpPlan = await getMeetUpPlan();
  return (
    <div className="flex flex-col gap-8 p-6 bg-lightblue h-full">
      <div className="flex flex-col gap-4 bg-white p-8 rounded-md shadow-sm">
        <h1 className="text-2xl font-bold">Price Plan (Shared Space)</h1>
        <DataTable columns={pricePlanColumns} data={fetchedSharedSpacePlan} />
        <Button className="w-fit ml-auto px-4 rounded-md" size={"sm"}>
          {" "}
          <Plus className="text-white inline" /> Add
        </Button>
      </div>

      <div className="flex flex-col gap-4 bg-white p-8 rounded-md shadow-sm">
        <h1 className="text-2xl font-bold">Price Plan (Virtual Office)</h1>
        <DataTable columns={pricePlanColumns} data={fetchedVirtualOfficePlan} />
        <Button className="w-fit ml-auto px-4 rounded-md" size={"sm"}>
          {" "}
          <Plus className="text-white inline" /> Add
        </Button>
      </div>

      <div className="flex flex-col gap-4 bg-white p-8 rounded-md shadow-sm">
        <h1 className="text-2xl font-bold">Price Plan (Meet Up)</h1>
        <DataTable columns={pricePlanColumns} data={fetchedMeetUpPlan} />
        <Button className="w-fit ml-auto px-4 rounded-md" size={"sm"}>
          {" "}
          <Plus className="text-white inline" /> Add
        </Button>
      </div>
    </div>
  );
}
