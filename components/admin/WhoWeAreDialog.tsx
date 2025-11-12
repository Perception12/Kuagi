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

export function WhoWeAreDialog() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [open, setOpen] = useState(false);
  const { token } = useAuth();

  // ✅ UseApiCrud hook for cleaner API handling
  const { handleSubmit, loading } = useApiCrud({
    url: "/api/proxy/api/general-info",
    token,
    onSuccess: () => setOpen(false),
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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

      <DialogContent className="sm:max-w-[425px]">
        <form
          ref={formRef}
          onSubmit={(e) =>
            handleSubmit(
              formRef as React.RefObject<HTMLFormElement>,
              e,
              "POST",
              "About section added successfully 🎉"
            )
          }
          encType="multipart/form-data"
          className="flex flex-col gap-6"
        >
          <DialogHeader>
            <DialogTitle>Add New About</DialogTitle>
            <DialogDescription>
              Add a new “Who We Are” section to your landing page. Click save when you’re done.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4">
            {/* Image upload */}
            <div className="grid gap-3">
              <Label htmlFor="about-image">Image</Label>
              <Input id="about-image" type="file" name="image" />
            </div>

            {/* Title */}
            <div className="grid gap-3">
              <Label htmlFor="about-title">Title</Label>
              <Input
                id="about-title"
                placeholder="Enter title..."
                name="heading"
                required
              />
            </div>

            {/* Description */}
            <div className="grid gap-3">
              <Label htmlFor="about-description">Description</Label>
              <Input
                id="about-description"
                placeholder="Enter description..."
                name="subheading"
                required
              />
            </div>

            {/* Hidden input for API field */}
            <input type="hidden" name="page" value="who-we-are" />
          </div>

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
