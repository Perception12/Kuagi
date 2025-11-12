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
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";
import { useRef, useState } from "react";
import { useAuth } from "@/context/authcontext";
import { useApiCrud } from "@/hooks/useApiCrud";

export function CourseTestimonialsDialog() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [open, setOpen] = useState(false);
  const { token } = useAuth();

  // ✅ useApiCrud handles submission, toast, and validation
  const { handleSubmit, loading } = useApiCrud({
    url: "/api/proxy/api/testimonials",
    token,
    onSuccess: () => {
      setOpen(false); // Close after success
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* ✅ Explicit open control */}
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

      {/* ✅ Form content */}
      <DialogContent className="sm:max-w-[425px]">
        <form
          ref={formRef}
          onSubmit={(e) =>
            handleSubmit(
              formRef as React.RefObject<HTMLFormElement>,
              e,
              "POST",
              "Testimonial added successfully 🎉"
            )
          }
          encType="multipart/form-data"
        >
          <DialogHeader>
            <DialogTitle>Add Testimonial</DialogTitle>
            <DialogDescription>
              Add a new testimonial. Click save when you’re done.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4">
            {/* Youtube URL */}
            <div className="grid gap-3">
              <Label htmlFor="testimonial-youtube">YouTube Preview URL</Label>
              <Input
                id="testimonial-youtube"
                placeholder="Enter YouTube link..."
                name="video_ur"
                type="url"
              />
            </div>

            {/* Name */}
            <div className="grid gap-3">
              <Label htmlFor="testimonial-name">Name</Label>
              <Input
                id="testimonial-name"
                placeholder="Enter name of commenter..."
                name="name"
                required
              />
            </div>

            {/* Designation */}
            <div className="grid gap-3">
              <Label htmlFor="testimonial-desognation">Designation</Label>
              <Input
                id="testimonial-Designation"
                placeholder="Enter Designation..."
                name="Designation"
                required
              />
            </div>

             {/* Rating*/}
             <div className="grid gap-3">
              <Label htmlFor="testimonial-ratings">Rating</Label>
              <Input
                id="testimonial-ratings"
                placeholder="Enter rating..."
                name="rating"
                required
              />
            </div>

            {/* Image */}
            <div className="grid gap-3">
              <Label htmlFor="testimonial-image">Image</Label>
              <Input id="testimonial-image" type="file" name="image_url" />
            </div>

            {/* Comment */}
            <div className="grid gap-3">
              <Label htmlFor="testimonial-comment">Comment</Label>
              <Textarea
                id="testimonial-comment"
                placeholder="Enter comment..."
                name="content"
                required
              />
            </div>
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
