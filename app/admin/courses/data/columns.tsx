"use client";
import Action from "@/components/admin/Action";
import { ColumnDef } from "@tanstack/react-table";
import Image, { StaticImageData } from "next/image";
import { Badge } from "@/components/ui/badge";

type image_t = string | StaticImageData;

export interface Course {
  id: string;
  title: string;
  image: StaticImageData | string;
  duration: string;
  frequency: string;
  price: string;
  status: "available" | "unavailable";
}

export type about = {
  id: string;
  title: string;
  description: string;
}

export type faq = {
  id: string;
  questions: string;
  answers: string;
};

export type testimonials = {
  id: string;
  youtube_preview_url: string;
  name: string;
  image: image_t;
  comment: string;
};

export const courseColumn: ColumnDef<Course>[] = [
  {
    accessorKey: "S/N",
    header: "S/N",
    size: 50,
  },
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


export const AboutColumns: ColumnDef<about>[] = [
  {
    accessorKey: "S/N",
    header: "S/N",
    size: 50,
  },
  {
    accessorKey: "title",
    header: "Title",
    size: 200,
  },
  {
    accessorKey: "description",
    header: "Description",
    size: 300,
  },
  {
    accessorKey: "cover",
    header: "Will cover",
    size: 300,
  },
  {
    id: "actions",
    header: () => <div className="text-right">Actions</div>,
    size: 120,
    cell: ({ row }) => (
      <Action<about>
        row={row}
        // editDialog={<EditHeroDialog type="landing-page" name="Landing Page Hero" />}
      />
    ),
  },
];

export const faqColumns: ColumnDef<faq>[] = [
  {
    accessorKey: "S/N",
    header: "S/N",
    size: 50,
  },
  {
    accessorKey: "questions",
    header: "Questions",
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
    accessorKey: "answers",
    header: "Answers",
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
    cell: ({ row }) => <Action<faq> row={row} 
    // editDialog={<FAQEditDialog key={row.id} />} 
    />,
  },
];

export const testimonialsColumns: ColumnDef<testimonials>[] = [
  {
    accessorKey: "S/N",
    header: "S/N",
    size: 50,
  },
  {
    accessorKey: "youtube_preview_url",
    header: "YouTube Preview URL",
    size: 50,
  },
  {
    accessorKey: "name",
    header: "Name",
    size: 200,
    cell: ({ getValue }) => {
      const value = getValue() as string;
      if (!value) return null;
      return (
        <span
          title={value}
          className="block max-w-[200px] whitespace-normal break-words"
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
          alt="Hero"
          width={50}
          height={50}
          className="rounded-full object-cover"
        />
      );
    },
  },
  {
    accessorKey: "comment",
    header: "Comment",
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
    cell: ({ row }) => <Action<testimonials> row={row} 
    // editDialog={<TestimonialsEditDialog key={row.id} />}
     />,
  },
];