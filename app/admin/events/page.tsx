import React from "react";
import { eventColumns, event } from "./columns";

import { DataTable } from "@/components/admin/DataTable";
import UpcomingEvent from "@/assets/upcoming_event.png"
import { EventDialog } from "@/components/admin/EventDialog";

async function getEventData(): Promise<event[]> {
  // Simulate fetching data from an API or database
  const data: event[] = [
    {
      id: "event-1",
      title: "Tech ladies Unite 2.0",
      image: UpcomingEvent,
      type: "upcoming",
      date: "2024-05-15",
      description:
        'The workshop titled "Enhancing Creative Thinking in the Workplace" aimed to equip participants with the necessary tools and techniques to foster...',
    },
    {
      id: "event-2",
      title: "Tech ladies Unite 2.0",
      image: UpcomingEvent,
      type: "upcoming",
      date: "2024-05-15",
      description:
        'The workshop titled "Enhancing Creative Thinking in the Workplace" aimed to equip participants with the necessary tools and techniques to foster...',
    },
    {
      id: "event-3",
      title: "Tech ladies Unite 2.0",
      image: UpcomingEvent,
      type: "past",
      date: "2024-05-15",
      description:
        'The workshop titled "Enhancing Creative Thinking in the Workplace" aimed to equip participants with the necessary tools and techniques to foster...',
    },
    {
      id: "event-4",
      title: "Tech ladies Unite 2.0",
      image: UpcomingEvent,
      type: "upcoming",
      date: "2024-05-15",
      description:
        'The workshop titled "Enhancing Creative Thinking in the Workplace" aimed to equip participants with the necessary tools and techniques to foster...',
    },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

export default async function page() {
    const fetchedEventData = await getEventData();
  return <div className="flex flex-col gap-8 p-6 bg-lightblue h-full">
    <div className="flex flex-col gap-4 bg-white p-8 rounded-md shadow-sm">
            <h1 className="text-2xl font-bold">Events</h1>
            <DataTable columns={eventColumns} data={fetchedEventData} />
            <EventDialog />
          </div>
  </div>;
}
