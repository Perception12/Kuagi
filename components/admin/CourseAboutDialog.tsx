"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";
import { useRef, useState } from "react";
import { useAuth } from "@/context/authcontext";
import { useApiCrud } from "@/hooks/useApiCrud";

export function CourseAboutDialog() {
  const [items, setItems] = useState([""]);
  const formRef = useRef<HTMLFormElement | null>(null);
  const [open, setOpen] = useState(false);
  const { token } = useAuth();

  // ✅ useApiCrud handles submission, toast, and success state
  const { handleSubmit, loading } = useApiCrud({
    url: "/api/proxy/api/general-info",
    token,
    onSuccess: () => {
      setOpen(false);
    },
  });

  // Add more items to what we will cover
  const addItem = () => {
    setItems([...items, ""]);
  };

  const handleChange = (index: number, value: string) => {
    const newItems = [...items];
    newItems[index] = value;
    setItems(newItems);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="self-end">
        <Button
          type="button"
          variant="outline"
          className="bg-primary text-white"
          onClick={() => setOpen(true)} // ✅ Manually opens the dialog
        >
          <Plus className="inline" /> Add
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <form
          ref={formRef}
          onSubmit={(e) =>
            handleSubmit(
              formRef as React.RefObject<HTMLFormElement>,
              e,
              "POST",
              "About course added successfully 🎉"
            )
          }
        >
          <DialogHeader>
            <DialogTitle>Add New About</DialogTitle>
            <DialogDescription>
              Add new course information. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4">
            {/* Hidden type for API */}
            <input type="hidden" name="page" value="course" />

            <div className="grid gap-3">
              <Label htmlFor="courseabout-title">Title</Label>
              <Input
                id="courseabout-title"
                placeholder="Enter title"
                name="subheading"
                required
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="courseabout-description">Description</Label>
              <Textarea
                id="courseabout-description"
                placeholder="Enter description..."
                name="content"
                required
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="courseabout-description">What we will cover</Label>
              {items.map((item, index) => (
          <div key={index} className="mb-3">
            <input
              type="text"
              value={item}
              name="cover"
              onChange={(e) => handleChange(index, e.target.value)}
              placeholder={`Item ${index + 1}`}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        ))}

        <button
          type="button"
          onClick={addItem}
          className="w-full bg-primary text-white py-2 rounded mb-3 hover:text-black transition"
        >
          ➕ Add More
        </button>

          </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>

            <Button type="submit" disabled={loading}>
              {loading ? "Saving..." : "Save changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
