"use client"
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



export function TestimonialsDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild className="self-end">
        <Button variant="outline">
          {" "}
          <Plus className="inline" /> Add
        </Button>
      </DialogTrigger>
      <form>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Testimonial</DialogTitle>
            <DialogDescription>
              Add a new testimonial. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="youtube-url">Youtube Preview URL</Label>
              <Input id="youtube-url" placeholder="Enter youtube link" name="youtube-url" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="testimonial-name">Name</Label>
              <Input id="testimonial-name" placeholder="Enter name of the commenter" name="testimonial-name" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="testimonial-image">Image</Label>
              <Input id="testimonial-image" type="file" name="image" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="testimonial-comment">Comment</Label>
              <Textarea id="testimonial-comment" placeholder="Enter comment..." name="testimonial-comment" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
