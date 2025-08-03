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
import { Pen} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";



export function EventEditDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild className="self-end">
        <Pen className="inline mr-1" />
      </DialogTrigger>
      <form>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Event</DialogTitle>
            <DialogDescription>
              Add a new event. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="event-title">Title</Label>
              <Input id="event-title" placeholder="Enter title..." name="event-title" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="event-image">Image</Label>
              <Input id="event-image" type="file" name="image" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="event-date">Date</Label>
              <Textarea id="event-date" placeholder="Enter date" name="event-date" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="event-description">Description</Label>
              <Input id="event-description" placeholder="Enter description..." name="event-description" />
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
