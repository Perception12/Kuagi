"use client";

import Action from "@/components/admin/Action";
import { ColumnDef } from "@tanstack/react-table";
import Image, { StaticImageData } from "next/image";

type image_t = string | StaticImageData;

export type hero = {
  id: string;
  image: image_t;
  title: string;
  description: string;
};

export type packages = {
  id: string;
  title: string;
  description: string[];
};

export type calendar = {
  id: string;
  day:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";
  time: string;
  topic: string;
  venue: string;
};

export const heroColumns: ColumnDef<hero>[] = [
  {
    accessorKey: "image",
    header: "Image",
    size: 100,
    cell: ({ getValue }) => {
      const value = getValue() as string | StaticImageData;
      if (!value) return null;
      return (
        <Image
          src={typeof value === "string" ? value : value}
          alt="Hero"
          width={60}
          height={60}
          style={{ objectFit: "cover", borderRadius: "8px" }}
        />
      );
    },
  },
  {
    accessorKey: "title",
    header: "Title",
    size: 200,
    cell: ({ getValue }) => {
      const value = getValue() as string;
      if (!value) return null;
      return (
        <span
          title={value}
          className="block max-w-[300px] whitespace-normal break-words"
        >
          {value}
        </span>
      );
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    size: 300,
    cell: ({ getValue }) => {
      const value = getValue() as string;
      if (!value) return null;
      return (
        <span
          title={value}
          className="block max-w-[300px] whitespace-normal break-words"
        >
          {value}
        </span>
      );
    },
  },

  {
    id: "actions",
    header: () => <div className="text-right">Actions</div>,
    size: 120,
    cell: ({ row }) => <Action<hero> row={row} />,
  },
];

export const packagesColumns: ColumnDef<packages>[] = [
  {
    accessorKey: "title",
    header: "Title",
    size: 200,
    cell: ({ getValue }) => {
      const value = getValue() as string;
      if (!value) return null;
      return (
        <span
          title={value}
          className="block max-w-[300px] whitespace-normal break-words"
        >
          {value}
        </span>
      );
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    size: 300,
    cell: ({ getValue }) => {
      const value = getValue() as string[];
      if (!value || value.length === 0) return null;
      return (
        <ul className="list-disc">
          {value.map((desc, index) => (
            <li key={index} className="mb-1">
              {desc}
            </li>
          ))}
        </ul>
      );
    },
  },

  {
    id: "actions",
    header: () => <div className="text-right">Actions</div>,
    size: 120,
    cell: ({ row }) => <Action<packages> row={row} />,
  },
];

export const calendarColumns: ColumnDef<calendar>[] = [
  {
    accessorKey: "day",
    header: "Day",
    size: 100,
    cell: ({ getValue }) => {
      const value = getValue() as string;
      return <span>{value}</span>;
    },
  },
  {
    accessorKey: "time",
    header: "Time",
    size: 100,
    cell: ({ getValue }) => {
      const value = getValue() as string;
      return <span>{value}</span>;
    },
  },
  {
    accessorKey: "topic",
    header: "Topic",
    size: 200,
    cell: ({ getValue }) => {
      const value = getValue() as string;
      return <span>{value}</span>;
    },
  },
  {
    accessorKey: "venue",
    header: "Venue",
    size: 200,
    cell: ({ getValue }) => {
      const value = getValue() as string;
      return <span>{value}</span>;
    },
  },

  {
    id: "actions",
    header: () => <div className="text-right">Actions</div>,
    size: 120,
    cell: ({ row }) => <Action<calendar> row={row} />,
  },
];
