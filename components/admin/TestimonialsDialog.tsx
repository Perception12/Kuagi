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
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { apiRequest } from "@/lib/api";
import { TESTIMONIALS } from "@/lib/api_routes";
import { useAuth } from "@/context/authcontext";

export function TestimonialsDialog() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false); // 1. Dialog open state

  const { token } = useAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    try {
      setLoading(true);

      await apiRequest({
        url: TESTIMONIALS.create(),
        data: formData,
        token,
        isFormData: true,
      });

      toast.success("testimonial added successfully");
      setOpen(false);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setLoading(false);
      toast.error("Failed to add testimonial");
    }
  };

  useEffect(() => {
    if (open) setLoading(false);
  }, [open]); // Reset loading state when dialog opens

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="self-end">
        <Button variant="outline">
          {" "}
          <Plus className="inline" /> Add
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <DialogHeader>
            <DialogTitle>Add Testimonial</DialogTitle>
            <DialogDescription>
              Add a new testimonial. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="youtube-url">Youtube Preview URL</Label>
              <Input
                id="youtube-url"
                placeholder="Enter youtube link"
                name="youtube-url"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="testimonial-name">Name</Label>
              <Input
                id="testimonial-name"
                placeholder="Enter name of the commenter"
                name="testimonial-name"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="testimonial-image">Image</Label>
              <Input id="testimonial-image" type="file" name="image" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="testimonial-comment">Comment</Label>
              <Textarea
                id="testimonial-comment"
                placeholder="Enter comment..."
                name="testimonial-comment"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button disabled={loading} type="submit">
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
