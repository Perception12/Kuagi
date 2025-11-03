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
import { FAQS } from "@/lib/api_routes";
import { useAuth } from "@/context/authcontext";

export function BusinessCalenderDialog() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false); // 1. Dialog open state

  const [date, setDate] = useState("")
  const [day, setDay] = useState("")

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value
    setDate(selectedDate)

    if (selectedDate) {
      const dateObj = new Date(selectedDate + "T00:00:00")
      const dayName = dateObj.toLocaleDateString("en-US", { weekday: "long" })
      setDay(dayName)
    } else {
      setDay("")
    }
  }

  const { token } = useAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const title = formData.get("faq-title");
    const description = formData.get("faq-description");

    const data = {
      title,
      description,
      type: "course",
    };

    try {
      setLoading(true);

      await apiRequest({
        url: FAQS.create(),
        data,
        token,
        isFormData: true,
      });

      toast.success("Calender added successfully");
      setOpen(false);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setLoading(false);
      toast.error("Failed to add Calender");
    }
  };

  useEffect(() => {
    if (open) setLoading(false);
  }, [open]); // Reset loading state when dialog opens

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="self-end">
        <Button variant="outline" className="bg-primary text-white">
          {" "}
          <Plus className="inline" /> Add
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <DialogHeader>
            <DialogTitle>Add Calender Details</DialogTitle>
            <DialogDescription>
              Add a new Calender Details. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
          <div className="grid gap-3">
              <Label htmlFor="calender-title">Date</Label>
              <Input
                id="date"
                type="date"
                name="date"
                onChange={handleDateChange}
                className="w-full border border-input rounded-md px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="calender-title">Day of Week</Label>
              <div className="w-full border border-input rounded-md px-3 py-2 text-sm bg-muted text-foreground">
              {day || "Select a date"}
              </div>
            </div>

            <div className="grid gap-3">
              <Label htmlFor="calender-title">Time</Label>
              <Input
                id="time"
                type="time"
                name="time"
                className="w-full border border-input rounded-md px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="calender-description">Topic</Label>
              <Input
                id="calender-topic"
                placeholder="Enter Topic"
                name="calender-topic"
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="calender-description">Venue</Label>
              <Input
                id="calender-venue"
                placeholder="Enter Venue"
                name="calender-venue"
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
