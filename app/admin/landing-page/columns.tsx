"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image, { StaticImageData } from "next/image";
import { Pen, Trash2 } from "lucide-react";
import type { Row } from "@tanstack/react-table";

type image_t = string | StaticImageData;

export type hero = {
  id: string;
  image: image_t;
  title: string;
  description: string;
};

export type whoWeAre = {
  id: string;
  image: image_t;
  title: string;
  description: string;
};

export type success = {
  id: string;
  image: image_t;
  title: string;
  figure: string;
};

export type partners = {
  id: string;
  image: image_t;
  description: string;
};

export type testimonials = {
  id: string;
  youtube_preview_url: string;
  name: string;
  image: image_t;
  comment: string;
};

export type faq = {
  id: string;
  questions: string;
  answers: string;
};

const Action = <T extends { id: string }>({ row }: { row: Row<T> }) => {
  return (
    <div className="flex gap-4 text-right justify-end">
      <button
        className="py-2 text-primary cursor-pointer"
        onClick={() => console.log(`Edit ${row.original.id}`)}
      >
        <Pen className="inline mr-1" />
      </button>

      <button
        className="py-2 text-primary cursor-pointer"
        onClick={() => console.log(`Delete ${row.original.id}`)}
      >
        <Trash2 className="inline mr-1" />
      </button>
    </div>
  );
};

export const heroColumns: ColumnDef<hero>[] = [
  {
    accessorKey: "image",
    header: "Image",
    size: 100,
    cell: ({ getValue }) => {
      const value = getValue() as string | StaticImageData;
      if (!value) return null;
      // If value is a string, use it as src. If it's an object, it's likely StaticImageData.
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
  },
  {
    accessorKey: "description",
    header: "Description",
    size: 300,
  },

  {
    id: "actions",
    header: () => <div className="text-right">Actions</div>,
    size: 120, // Set your desired width in px
    cell: ({ row }) => <Action<hero> row={row} />,
  },
];

export const whoWeAreColumns: ColumnDef<whoWeAre>[] = [
  {
    accessorKey: "image",
    header: "Image",
    size: 100,
    cell: ({ getValue }) => {
      const value = getValue() as string | StaticImageData;
      if (!value) return null;
      // If value is a string, use it as src. If it's an object, it's likely StaticImageData.
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
  },
  {
    accessorKey: "description",
    header: "Description",
    size: 300,
  },
  {
    id: "actions",
    size: 120, // Set your desired width in px
    header: () => <div className="text-right">Actions</div>,
    cell: ({ row }) => <Action<hero> row={row} />,
  },
];

export const successColumns: ColumnDef<success>[] = [
  {
    accessorKey: "image",
    header: "Image",
    size: 100,
    cell: ({ getValue }) => {
      const value = getValue() as string | StaticImageData;
      if (!value) return null;
      // If value is a string, use it as src. If it's an object, it's likely StaticImageData.
      return (
        <div className="flex items-center justify-center bg-lightblue rounded-full p-2 w-fit ">
          <Image
            src={typeof value === "string" ? value : value}
            alt="Hero"
            width={20}
            height={20}
            className="rounded-full object-fill"
          />
        </div>
      );
    },
  },
  {
    accessorKey: "title",
    header: "Title",
    size: 200,
  },
  {
    accessorKey: "figure",
    header: "Figure",
    size: 100,
  },
  {
    id: "actions",
    header: () => <div className="text-right">Actions</div>,
    size: 120, // Set your desired width in px
    cell: ({ row }) => <Action<success> row={row} />,
  },
];

export const partnersColumns: ColumnDef<partners>[] = [
  {
    accessorKey: "image",
    header: "Image",
    size: 100,
    cell: ({ getValue }) => {
      const value = getValue() as string | StaticImageData;
      if (!value) return null;
      // If value is a string, use it as src. If it's an object, it's likely StaticImageData.
      return (
        <Image
          src={typeof value === "string" ? value : value}
          alt="partners"
          width={50}
          height={60}
          className="rounded-md object-cover"
        />
      );
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    size: 300,
  },
  {
    id: "actions",
    header: () => <div className="text-right">Actions</div>,
    size: 120, // Set your desired width in px
    cell: ({ row }) => <Action<partners> row={row} />,
  },
];

export const testimonialsColumns: ColumnDef<testimonials>[] = [
  {
    accessorKey: "youtube_preview_url",
    header: "YouTube Preview URL",
    size: 200,
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
      // If value is a string, use it as src. If it's an object, it's likely StaticImageData.
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
    cell: ({ row }) => <Action<testimonials> row={row} />,
  },
];

export const faqColumns: ColumnDef<faq>[] = [
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
    cell: ({ row }) => <Action<faq> row={row} />,
  },
];
