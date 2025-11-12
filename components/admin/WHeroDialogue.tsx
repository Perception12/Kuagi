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

export function WHeroDialog() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [open, setOpen] = useState(false);
  const { token } = useAuth();

  // ✅ Centralized CRUD logic using useApiCrud (just like EventDialog)
  const { handleSubmit, loading } = useApiCrud({
    url: "/api/proxy/api/general-info",
    token,
    onSuccess: () => {
      setOpen(false); // Close only after successful save
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
            handleSubmit(formRef as React.RefObject<HTMLFormElement>, e, "POST", "Hero added successfully 🎉")
          }
          className="flex flex-col gap-6"
        >
          <DialogHeader>
            <DialogTitle>Add New Hero</DialogTitle>
            <DialogDescription>
              Add a new hero section to your Women4Tech page. Click save when
              you’re done.
            </DialogDescription>
          </DialogHeader>

          {/* Input Fields */}
          <div className="grid gap-4">
            {/* Image Upload */}
            <div className="grid gap-3">
              <Label htmlFor="image">Image</Label>
              <Input id="image" type="file" name="image_url" required />
            </div>

            {/* Title */}
            <div className="grid gap-3">
              <Label htmlFor="heading">Title</Label>
              <Input
                id="heading"
                name="heading"
                placeholder="Enter title..."
                required
              />
            </div>

            {/* Description */}
            <div className="grid gap-3">
              <Label htmlFor="subheading">Description</Label>
              <Input
                id="subheading"
                name="subheading"
                placeholder="Enter description..."
                required
              />
            </div>

            {/* Hidden Page Field */}
            <input type="hidden" name="page" value="women4tech" />
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
