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
import { useAuth } from "@/context/authcontext";
import { apiRequest } from "@/lib/api";
import { GENERAL_INFO } from "@/lib/api_routes";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export function WhoWeAreDialog() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false); // 1. Dialog open state

  const { token } = useAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      formData.append("page", "who-we-are");
      try {
        setLoading(true);
        await apiRequest({
          url: GENERAL_INFO.create(),
          data: formData,
          token,
          isFormData: true,
        });
        toast.success("Hero added successfully");
        setOpen(false); // 3. Close dialog on success
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        setLoading(false);
        toast.error("Failed to add hero");
      }
    };
  
    useEffect(() => {
      if (open) setLoading(false);
    }, [open]); // Reset loading state when dialog opens

  return (
    <Dialog open={open} onOpenChange={setOpen}> {/* 2. Controlled dialog */}
      <DialogTrigger asChild className="self-end">
        <Button variant="outline">
          {" "}
          <Plus className="inline" /> Add
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <DialogHeader>
            <DialogTitle>Add New About</DialogTitle>
            <DialogDescription>
              Add a new about to your landing page. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="about-image">Image</Label>
              <Input id="about-image" type="file" name="image" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="about-title">Title</Label>
              <Input
                id="about-title"
                placeholder="Enter title..."
                name="heading"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="about-figure">Description</Label>
              <Input
                id="about-figure"
                placeholder="Enter description..."
                name="subheading"
              />
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
