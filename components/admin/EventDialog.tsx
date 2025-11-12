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

export function EventDialog() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [open, setOpen] = useState(false);
  const { token } = useAuth();

  // 🔥 useApiCrud handles create + validation + toast
  const { handleSubmit, loading } = useApiCrud({
    url: "/api/proxy/api/events",
    token,
    onSuccess: () => {
      setOpen(false);
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="self-end">
        <Button
        type="button" // ✅ Prevent auto form submission on click
        variant="outline"
        className="bg-primary text-white"
        onClick={() => setOpen(true)} // ✅ Explicitly open
        
        >
          <Plus className="inline" /> Add
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <form
          ref={formRef}
          onSubmit={(e) => handleSubmit(formRef as React.RefObject<HTMLFormElement>, e, "POST", "Event added successfully 🎉")}
          encType="multipart/form-data"
        >
          <DialogHeader>
            <DialogTitle>Add New Event</DialogTitle>
            <DialogDescription>
              Add a new event. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="event-title">Title</Label>
              <Input id="event-title" placeholder="Enter title..." name="title" required />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="event-image">Image</Label>
              <Input id="event-image" type="file" name="image" />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="event-caption">Caption</Label>
              <Input id="event-caption" placeholder="Enter caption..." name="caption" required />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="event-status">Status</Label>
              <select
                name="status"
                id="event-status"
                className="border border-input rounded-md px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                required
              >
                <option value="1">Upcoming</option>
                <option value="0">Past</option>
              </select>
            </div>

            <div className="grid gap-3">
              <Label htmlFor="event-date">Date</Label>
              <Input
                id="event-date"
                type="date"
                name="start_date"
                required
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="event-description">Description</Label>
              <Input
                id="event-description"
                placeholder="Enter description..."
                name="description"
                required
              />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
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
