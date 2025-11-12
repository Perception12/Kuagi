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

export function MeetUpDialog() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [open, setOpen] = useState(false);
  const { token } = useAuth();

  // ✅ useApiCrud handles form submission, toast, loading & success state
  const { handleSubmit, loading } = useApiCrud({
    url: "/api/proxy/api/virtual-offices",
    token,
    onSuccess: () => {
      setOpen(false);
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="self-end">
        <Button
          type="button"
          variant="outline"
          className="bg-primary text-white"
          onClick={() => setOpen(true)} // ✅ manually opens dialog
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
              "Meet Up price added successfully 🎉"
            )
          }
          encType="multipart/form-data"
        >
          <DialogHeader>
            <DialogTitle>Add New Meet Up Price</DialogTitle>
            <DialogDescription>
              Add a new Meet Up price to your Co-Working-space page. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4">
          

            <div className="grid gap-3">
              <Label htmlFor="meetup-plan">Plan</Label>
              <select
                id="meetup-plan"
                name="plan"
                className="border border-input rounded-md px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                required
              >
                <option value="Standard">Standard Plan</option>
                <option value="Super">Super Plan</option>
                <option value="Premium">Premium Plan</option>
              </select>
            </div>

            <div className="grid gap-3">
              <Label htmlFor="meetup-dailyprice">Daily Price</Label>
              <Input
                id="meetup-dailyprice"
                placeholder="Enter Daily Price..."
                name="daily_price"
                required
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="meetup-weeklyprice">Weekly Price</Label>
              <Input
                id="meetup-weeklyprice"
                placeholder="Enter Weekly Price..."
                name="weekly_price"
                required
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="meetup-monthlyprice">Monthly Price</Label>
              <Input
                id="meetup-monthlyprice"
                placeholder="Enter Monthly Price..."
                name="monthly_price"
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
