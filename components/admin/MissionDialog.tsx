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

export function MissionDialog() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [open, setOpen] = useState(false);
  const { token } = useAuth();

  // ✅ Use the same CRUD handler as EventDialog
  const { handleSubmit, loading } = useApiCrud({
    url: "/api/proxy/api/general-info",
    token,
    onSuccess: () => {
      setOpen(false);
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* Controlled Trigger */}
      <DialogTrigger asChild className="self-end">
        <Button
          type="button"
          variant="outline"
          className="bg-primary text-white"
          onClick={() => setOpen(true)}
        >
          <Plus className="inline" /> Add
        </Button>
      </DialogTrigger>

      {/* Dialog Content */}
      <DialogContent className="sm:max-w-[425px]">
        <form
          ref={formRef}
          onSubmit={(e) =>
            handleSubmit(formRef as React.RefObject<HTMLFormElement>, e, "POST", "Mission added successfully 🎯")
          }
          className="flex flex-col gap-6"
        >
          <DialogHeader>
            <DialogTitle>Add New Mission</DialogTitle>
            <DialogDescription>
              Add a new mission section to your Women4Tech page. Click save when
              you’re done.
            </DialogDescription>
          </DialogHeader>

          {/* Fields */}
          <div className="grid gap-4">
            {/* Image Upload */}
            <div className="grid gap-3">
              <Label htmlFor="mission-image">Image</Label>
              <Input id="mission-image" type="file" name="image_url" required />
            </div>

            {/* Title */}
            <div className="grid gap-3">
              <Label htmlFor="mission-title">Title</Label>
              <Input
                id="mission-title"
                placeholder="Enter title..."
                name="heading"
                required
              />
            </div>

            {/* Description */}
            <div className="grid gap-3">
              <Label htmlFor="mission-description">Description</Label>
              <Input
                id="mission-description"
                placeholder="Enter description..."
                name="content"
                required
              />
            </div>

            {/* Hidden page identifier */}
            <input type="hidden" name="page" value="mission" />
          </div>

          {/* Footer Buttons */}
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
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
