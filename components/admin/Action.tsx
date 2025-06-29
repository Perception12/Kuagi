import { Row } from "@tanstack/react-table";
import { Pen, Trash2 } from "lucide-react";

const Action = <T extends { id: string }>({
  row,
  editDialog,
  deleteDialog,
}: {
  row: Row<T>;
  editDialog?: React.JSX.Element;
  deleteDialog?: React.JSX.Element;
}) => {
  return (
    <div className="flex gap-4 text-right justify-end">
      <button
        className="py-2 text-primary cursor-pointer"
        onClick={() => console.log(`Edit ${row.original.id}`)}
      >
        {editDialog || <Pen className="inline mr-1" />}
      </button>

      <button
        className="py-2 text-primary cursor-pointer"
        onClick={() => console.log(`Delete ${row.original.id}`)}
      >
        {deleteDialog || <Trash2 className="inline mr-1" />}
      </button>
    </div>
  );
};

export default Action;
