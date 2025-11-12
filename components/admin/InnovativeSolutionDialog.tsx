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

export function InnovativeSolutionDialog() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [open, setOpen] = useState(false);
  const { token } = useAuth();

  // 🔥 useApiCrud handles submission, validation & toast
  const { handleSubmit, loading } = useApiCrud({
    url: "/api/proxy/api/general-info",
    token,
    onSuccess: () => {
      setOpen(false); // ✅ close dialog on success
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="self-end">
        <Button
          type="button" // ✅ Prevents auto form submission
          variant="outline"
          className="bg-primary text-white"
          onClick={() => setOpen(true)} // ✅ Explicit open trigger
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
              "Hero added successfully 🎉"
            )
          }
          encType="multipart/form-data"
        >
          <DialogHeader>
            <DialogTitle>Add New Hero</DialogTitle>
            <DialogDescription>
              Add a new Innovative solution to your Innovative page. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4">
            {/* Image Upload */}
            <div className="grid gap-3">
              <Label htmlFor="hero-image">Image</Label>
              <Input id="hero-image" type="file" name="image" />
            </div>

            {/* Title */}
            <div className="grid gap-3">
              <Label htmlFor="hero-title">Title</Label>
              <Input
                id="hero-title"
                placeholder="Enter title..."
                name="heading"
                required
              />
            </div>

            {/* Description */}
            <div className="grid gap-3">
              <Label htmlFor="hero-description">Description</Label>
              <Input
                id="hero-description"
                placeholder="Enter description..."
                name="subheading"
                required
              />
            </div>

            {/* Page Identifier */}
            <input type="hidden" name="page" value="innovative-solution" />
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" type="button">
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
