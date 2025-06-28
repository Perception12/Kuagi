"use client";
import Action from "@/components/admin/Action";
import { ColumnDef } from "@tanstack/react-table";
import Image, { StaticImageData } from "next/image";
import { Badge } from "@/components/ui/badge";

export interface Course {
  id: string;
  title: string;
  image: StaticImageData | string;
  duration: string;
  frequency: string;
  price: string;
  status: "available" | "unavailable";
}

export const courseColumn: ColumnDef<Course>[] = [
  {
    accessorKey: "title",
    header: "Course Title",
    cell: ({ row }) => (
      <div className="flex items-center space-x-2">
        <Image
          src={row.original.image}
          alt={row.original.title}
          width={40}
          height={40}
          className="rounded"
        />
        <span>{row.original.title}</span>
      </div>
    ),
  },
  { accessorKey: "duration", header: "Duration" },
  { accessorKey: "frequency", header: "Frequency" },
  { accessorKey: "price", header: "Price" },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <Badge
          variant={status === "available" ? "default" : "destructive"}
          className="capitalize"
        >
          {status}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="text-right">Actions</div>,
    cell: ({ row }) => <Action row={row} />,
  },
];
