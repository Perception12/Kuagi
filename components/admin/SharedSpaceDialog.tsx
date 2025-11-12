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


export function SharedSpaceDialog() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [open, setOpen] = useState(false);
  const { token } = useAuth();

  // 🧩 useApiCrud: Handles submit, validation, toast, etc.
  const { handleSubmit, loading } = useApiCrud({
    url: "/api/proxy/api/workspace-plans",
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
          onClick={() => setOpen(true)}
        >
          <Plus className="inline mr-2" /> Add
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <form
          ref={formRef}
          encType="multipart/form-data"
          onSubmit={(e) => {
            handleSubmit(
              formRef as React.RefObject<HTMLFormElement>,
              e,
              "POST",
              "Shared space price added successfully 🎉"
            );
          }}
        >
          <DialogHeader>
            <DialogTitle>Add New Shared Space Price</DialogTitle>
            <DialogDescription>
              Add a new shared space pricing plan to your Co-Working Space page. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4">
            {/* Plan Selection */}
            <div className="grid gap-3">
              <Label htmlFor="sharedspace-plan">Plan</Label>
              <select
                id="sharedspace-plan"
                name="plan"
                className="border border-input rounded-md px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                required
              >
                <option value="">Select a plan</option>
                <option value="Standard">Standard Plan</option>
                <option value="Super">Super Plan</option>
                <option value="Premium">Premium Plan</option>
              </select>
            </div>

            {/* Daily Price */}
            <div className="grid gap-3">
              <Label htmlFor="sharedspace-dailyprice">Daily Price</Label>
              <Input
                id="sharedspace-dailyprice"
                placeholder="Enter daily price..."
                name="daily_price"
                type="number"
                required
              />
            </div>

            {/* Weekly Price */}
            <div className="grid gap-3">
              <Label htmlFor="sharedspace-weeklyprice">Weekly Price</Label>
              <Input
                id="sharedspace-weeklyprice"
                placeholder="Enter weekly price..."
                name="weekly_price"
                type="number"
                required
              />
            </div>

            {/* Monthly Price */}
            <div className="grid gap-3">
              <Label htmlFor="sharedspace-monthlyprice">Monthly Price</Label>
              <Input
                id="sharedspace-monthlyprice"
                placeholder="Enter monthly price..."
                name="monthly_price"
                type="number"
                required
              />
            </div>
          </div>

          <DialogFooter className="pt-4">
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
