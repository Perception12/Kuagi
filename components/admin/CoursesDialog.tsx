"use client";
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
import { Plus } from "lucide-react";
import { useRef, useState } from "react";
import { useAuth } from "@/context/authcontext";
import { useApiCrud } from "@/hooks/useApiCrud";

export function CoursesDialog() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [open, setOpen] = useState(false);
  const { token } = useAuth();

  // ✅ Use shared CRUD hook
  const { handleSubmit, loading } = useApiCrud({
    url: "/api/proxy/api/courses",
    token,
    onSuccess: () => setOpen(false),
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="self-end">
        <Button variant="outline" className="bg-primary text-white">
          <Plus className="inline" /> Add
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <form
          ref={formRef}
          onSubmit={(e) =>
            handleSubmit(formRef as React.RefObject<HTMLFormElement>, e, "POST", "Course added successfully 🎉")
          }
          encType="multipart/form-data"
          className="flex flex-col gap-6"
        >
          <DialogHeader>
            <DialogTitle>Add New Course</DialogTitle>
            <DialogDescription>
              Add a new course to your page. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4">
            {/* Image + Title */}
            <div className="grid gap-3">
              <Label htmlFor="course-image">Image</Label>
              <Input id="course-image" type="file" name="image" />
              <Label htmlFor="course-title">Course Title</Label>
              <Input
                id="course-title"
                type="text"
                name="title"
                placeholder="Enter course title..."
                required
              />
            </div>

            {/* Duration */}
            <div className="grid gap-3">
              <Label htmlFor="course-duration">Duration</Label>
              <Input
                id="course-duration"
                placeholder="Enter course duration..."
                name="duration"
                required
              />
            </div>

            {/* Frequency */}
            <div className="grid gap-3">
              <Label htmlFor="course-frequency">Frequency</Label>
              <Input
                id="course-frequency"
                placeholder="Enter course frequency..."
                name="frequency"
                required
              />
            </div>

            {/* Price */}
            <div className="grid gap-3">
              <Label htmlFor="course-price">Price</Label>
              <Input
                id="course-price"
                placeholder="Enter course price..."
                name="price"
                required
              />
            </div>

            {/* Status */}
            <div className="grid gap-3">
              <Label htmlFor="course-status">Status</Label>
              <select
                id="course-status"
                name="status"
                className="border border-input rounded-md px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                required
              >
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
              </select>
            </div>

            {/* Type */}
            <div className="grid gap-3">
              <Label htmlFor="course-type">Type</Label>
              <select
                id="course-type"
                name="type"
                className="border border-input rounded-md px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                required
              >
                <option value="online">Online</option>
                <option value="physical">Physical</option>
              </select>
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
