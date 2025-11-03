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
import { useAuth } from "@/context/authcontext";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { GENERAL_INFO } from "@/lib/api_routes";
import { apiRequest } from "@/lib/api";

export function CoursesDialog() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false); // 1. Dialog open state

  const { token } = useAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("page", "courses");
    try {
      setLoading(true);
      await apiRequest({
        url: GENERAL_INFO.create(),
        data: formData,
        token,
        isFormData: true,
      });
      toast.success("Course added successfully");
      setOpen(false); // 3. Close dialog on success
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setLoading(false);
      toast.error("Failed to add Course");
    }
  };

  useEffect(() => {
    if (open) setLoading(false);
  }, [open]); // Reset loading state when dialog opens

  return (
    <Dialog open={open} onOpenChange={setOpen}> {/* 2. Controlled dialog */}
      <DialogTrigger asChild className="self-end">
        <Button variant="outline" className="bg-primary text-white">
          {" "}
          <Plus className="inline" /> Add
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <DialogHeader>
            <DialogTitle>Add New Course</DialogTitle>
            <DialogDescription>
              Add a new Course to your Course page. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="course-image">Image and Course name</Label>
              <Input id="course-image" type="file" name="image" />
              <Input type="text" id="course-name" placeholder="Course name"  />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="course-duration">Duration</Label>
              <Input
                id="course-duration"
                placeholder="Enter Course duration..."
                name="course-duration"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="course-frequency">Frequency</Label>
              <Input
                id="course-frequencyn"
                placeholder="Enter Course Frequency..."
                name="course-frequency"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="course-price">Price</Label>
              <Input
                id="course-price"
                placeholder="Enter Course Frequency..."
                name="course-price"
                type="number"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="course-availability">Status</Label>
              <select id="course-availability" name="course-availability">
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
              </select>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" disabled={loading}>
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
