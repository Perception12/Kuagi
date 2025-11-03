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
import { useAuth } from "@/context/authcontext";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { GENERAL_INFO } from "@/lib/api_routes";
import { apiRequest } from "@/lib/api";

export function VirtualSpaceDialog() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false); // 1. Dialog open state

  const { token } = useAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("page", "co-working-space");
    try {
      setLoading(true);
      await apiRequest({
        url: GENERAL_INFO.create(),
        data: formData,
        token,
        isFormData: true,
      });
      toast.success("Virtual Office added successfully");
      setOpen(false); // 3. Close dialog on success
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setLoading(false);
      toast.error("Failed to Virtual Office");
    }
  };

  useEffect(() => {
    if (open) setLoading(false);
  }, [open]); // Reset loading state when dialog opens

  return (
    <Dialog open={open} onOpenChange={setOpen}> {/* 2. Controlled dialog */}
      <DialogTrigger asChild className="self-end">
        <Button variant="outline" className="bg-primary text-white">
          {" "}
          <Plus className="inline" /> Add
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <DialogHeader>
            <DialogTitle>Add New Virtual Office Price</DialogTitle>
            <DialogDescription>
              Add a new VirtualOffice Price to your Co-Working-space page. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="virtualspace-plan">Plan</Label>
              <select id="virtualspace-plan" name="virtualspace-plan">
    <option value="Standard">Standard plan</option>
    <option value="Super">Super plan</option>
    <option value="premium">Premium plan</option>
  </select>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="virtualspace-dailyprice">Daily Price</Label>
              <Input
                id="virtualspace-dailyprice"
                placeholder="Enter Dailyprice..."
                name="virtualspace-dailyprice"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="virtualspace-weeklyprice">Weekly Price</Label>
              <Input
                id="virtualspace-weeklyprice"
                placeholder="Enter Weekly Price..."
                name="virtualspace-weeklyprice"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="virtualspace-weeklyprice">Monthly Price</Label>
              <Input
                id="virtualspace-monthlyprice"
                placeholder="Enter Monthly Price..."
                name="virtualspace-monthlyprice"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" disabled={loading}>
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
