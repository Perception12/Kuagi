"use client";
import { ColumnDef } from "@tanstack/react-table";
import Action from "@/components/admin/Action";

export type price_plan = {
  id: string;
  plan: "Standard Plan" | "Premium Plan" | "Super Pro";
  dailyPrice: number;
  weeklyPrice: number;
  monthlyPrice: number;
};

export const pricePlanColumns: ColumnDef<price_plan>[] = [
  {
    accessorKey: "plan",
    header: "Plan",
    size: 150,
    cell: ({ getValue }) => {
      const value = getValue() as string;
      if (!value) return null;
      return <span className="font-semibold">{value}</span>;
    },
  },
  {
    accessorKey: "dailyPrice",
    header: "Daily Price",
    size: 100,
    cell: ({ getValue }) => {
      const value = getValue() as number;
      if (value === undefined) return null;
      return <span>₦{value.toFixed(2)}</span>;
    },
  },
  {
    accessorKey: "weeklyPrice",
    header: "Weekly Price",
    size: 100,
    cell: ({ getValue }) => {
      const value = getValue() as number;
      if (value === undefined) return null;
      return <span>₦{value.toFixed(2)}</span>;
    },
  },
  {
    accessorKey: "monthlyPrice",
    header: "Monthly Price",
    size: 100,
    cell: ({ getValue }) => {
      const value = getValue() as number;
      if (value === undefined) return null;
      return <span>₦{value.toFixed(2)}</span>;
    },
  },
  {
    id: "actions",
    header: () => <div className="text-right">Actions</div>,
    size: 100,
    cell: ({ row }) => <Action<price_plan> row={row} />,
  },
];
