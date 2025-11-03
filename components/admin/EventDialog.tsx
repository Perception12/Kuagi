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



export function EventDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild className="self-end">
        <Button variant="outline" className="bg-primary text-white">
          {" "}
          <Plus className="inline" /> Add
        </Button>
      </DialogTrigger>
      <form>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Event</DialogTitle>
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
              <Label htmlFor="event-title">Type</Label>
              <select name="title" id="event-title">
                <option>Upcoming</option>
                <option>Past</option>
              </select>
            </div>
            
            <div className="grid gap-3">
              <Label htmlFor="calender-title">Date</Label>
              <Input
                id="event-date"
                type="date"
                name="date"
                className="w-full border border-input rounded-md px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
            
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
