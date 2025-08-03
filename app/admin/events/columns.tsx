"use client";

import Action from "@/components/admin/Action";
import { ColumnDef } from "@tanstack/react-table";
import Image, { StaticImageData } from "next/image";
import { Badge } from "@/components/ui/badge";
import { EventEditDialog } from "@/components/admin/EventEditDialog";

type image_t = string | StaticImageData;

export type event = {
  id: string;
  title: string;
  image: image_t;
  type: "upcoming" | "past";
  date: string;
  description: string;
};

export const eventColumns: ColumnDef<event>[] = [
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
    accessorKey: "image",
    header: "Image",
    size: 100,
    cell: ({ getValue }) => {
      const value = getValue() as string | StaticImageData;
      if (!value) return null;
      return (
        <Image
          src={typeof value === "string" ? value : value}
          alt="Event"
          width={60}
          height={60}
          style={{ objectFit: "cover", borderRadius: "8px" }}
        />
      );
    },
  },
  {
    accessorKey: "type",
    header: "Type",
    size: 150,
    cell: ({ getValue }) => {
      const value = getValue() as string;
      if (!value) return null;
      return <Badge className="" variant={value == 'upcoming' ? "default" : "destructive"}>{value}</Badge>;
    },
  },
  {
    accessorKey: "date",
    header: "Date",
    size: 150,
    cell: ({ getValue }) => {
      const value = getValue() as string;
      if (!value) return null;
      return <span>{new Date(value).toLocaleDateString()}</span>;
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
          className="block max-w-[400px] whitespace-normal break-words"
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
    cell: ({ row }) => <Action<event> row={row} editDialog={<EventEditDialog key={row.id} />} />,
  },
];
