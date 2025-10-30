"use client"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="">
      <Table className="rounded-lg overflow-hidden">
        <TableHeader
        className="bg-lightblue h-16 "
        >
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header, headerIdx, arr) => {
                return (
                  <TableHead
                    key={header.id}
                    className={[
                      "opacity-80",
                      headerIdx === 0 ? "pl-6" : "",
                      headerIdx === arr.length - 1 ? "pr-6" : "",
                    ].join(" ")}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody
        className=""
        >
          {table.getRowModel().rows?.length ? (
            <>
              <TableRow>
                <TableCell colSpan={columns.length} className="h-4 p-0" />
              </TableRow>
              {table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                
              >
                {row.getVisibleCells().map((cell, cellIdx, arr) => (
                  <TableCell
                    key={cell.id}
                    className={[
                      cellIdx === 0 ? "pl-6" : "",
                      cellIdx === arr.length - 1 ? "pr-6" : "",
                    ].join(" ")}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
              ))}
            </>
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}