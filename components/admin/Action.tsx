import { Row } from "@tanstack/react-table";
import { Pen, Trash2 } from "lucide-react";

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

export default Action;