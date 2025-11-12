"use client"

import type React from "react"

import { type ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useState, useRef } from "react"
import Image from "next/image"
import type { StaticImageData } from "next/image"

interface EditableDataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  onSave?: (updatedRow: TData) => void
  onDelete?: (rowId: string) => void
}

export function EditableDataTable<TData extends { id: string; image?: string | StaticImageData }, TValue>({
  columns,
  data,
  onSave,
  onDelete,
}: EditableDataTableProps<TData, TValue>) {
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editedData, setEditedData] = useState<Partial<TData>>({})
  const [originalIndex, setOriginalIndex] = useState<number | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  const handleEditStart = (row: TData, index: number) => {
    setEditingId(row.id)
    setEditedData({ ...row })
    setOriginalIndex(index)
  }

  const handleSave = () => {
    if (editingId && onSave) {
      onSave(editedData as TData)
    }
    setEditingId(null)
    setEditedData({})
    setOriginalIndex(null)
  }

  const handleCancel = () => {
    setEditingId(null)
    setEditedData({})
    setOriginalIndex(null)
  }

  const handleDelete = (rowId: string) => {
    if (onDelete) {
      onDelete(rowId)
    }
  }

  const handleCellChange = (key: keyof TData, value: any) => {
    setEditedData((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        handleCellChange("image" as keyof TData, reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const triggerImageUpload = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="">
      <Table className="rounded-lg overflow-hidden">
        <TableHeader className="bg-lightblue h-16 ">
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
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody className="">
          {table.getRowModel().rows?.length ? (
            <>
              {table.getRowModel().rows.map((row, visibleIndex) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className={editingId === row.id ? "bg-blue-50" : ""}
                >
                  {row.getVisibleCells().map((cell, cellIdx, arr) => {
                    const isActionCell = cell.column.id === "actions"
                    const isEditingRow = editingId === row.id
                    const isSerialNumberCell = cell.column.id === "S/N"
                    const isImageCell = cell.column.id === "image"
                    const displayIndex = isEditingRow && originalIndex !== null ? originalIndex + 1 : visibleIndex + 1

                    return (
                      <TableCell
                        key={cell.id}
                        className={[cellIdx === 0 ? "pl-6" : "", cellIdx === arr.length - 1 ? "pr-6" : ""].join(" ")}
                      >
                        {isActionCell ? (
                          <div className="flex gap-2 text-right justify-end">
                            {isEditingRow ? (
                              <>
                                <button
                                  className="py-2 text-green-600 hover:text-green-700 cursor-pointer"
                                  onClick={handleSave}
                                  title="Save"
                                >
                                  ✓
                                </button>
                                <button
                                  className="py-2 text-red-600 hover:text-red-700 cursor-pointer"
                                  onClick={handleCancel}
                                  title="Cancel"
                                >
                                  ✕
                                </button>
                              </>
                            ) : (
                              <>
                                <button
                                  className="py-2 text-primary cursor-pointer hover:opacity-70"
                                  onClick={() => handleEditStart(row.original as TData, visibleIndex)}
                                  title="Edit"
                                >
                                  ✎
                                </button>
                                <button
                                  className="py-2 text-red-600 hover:text-red-700 cursor-pointer"
                                  onClick={() => handleDelete(row.original.id)}
                                  title="Delete"
                                >
                                  🗑
                                </button>
                              </>
                            )}
                          </div>
                        ) : isSerialNumberCell ? (
                          <div>{displayIndex}</div>
                        ) : isImageCell && isEditingRow ? (
                          <div className="flex flex-col gap-2 items-center">
                            <div className="relative">
                              <Image
                                src={
                                  (editedData.image as string | StaticImageData) ||
                                  (row.original.image as string | StaticImageData) ||
                                  "/placeholder.svg" ||
                                  "/placeholder.svg"
                                }
                                alt="Hero"
                                width={60}
                                height={60}
                                style={{ objectFit: "cover", borderRadius: "8px" }}
                              />
                            </div>
                            <button
                              onClick={triggerImageUpload}
                              className="text-xs px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
                            >
                              Upload
                            </button>
                            <input
                              ref={fileInputRef}
                              type="file"
                              accept="image/*"
                              onChange={handleImageUpload}
                              className="hidden"
                            />
                          </div>
                        ) : isEditingRow ? (
                          <input
                            type="text"
                            value={(editedData[cell.column.id as keyof TData] as string) || ""}
                            onChange={(e) => handleCellChange(cell.column.id as keyof TData, e.target.value)}
                            className="w-full px-2 py-1 border border-gray-300 rounded"
                            autoFocus={cellIdx === 2}
                          />
                        ) : (
                          flexRender(cell.column.columnDef.cell, cell.getContext())
                        )}
                      </TableCell>
                    )
                  })}
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
