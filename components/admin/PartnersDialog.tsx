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
import { useAuth } from "@/context/authcontext";
import axios from "axios";
import { Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function PartnersDialog() {
  const [loading, setLoading] = useState(false);

  const { token } = useAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    formData.append("page", "partners");
    try {
      setLoading(true);
      await axios.post("https://api.kuagi.ng/api/partners", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Partner added successfully");
    } catch (error) {
      setLoading(false);
      console.error("Error uploading:", error);
      toast.error("Failed to add partner");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild className="self-end">
        <Button variant="outline">
          {" "}
          <Plus className="inline" /> Add
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <DialogHeader>
            <DialogTitle>Add New Partner</DialogTitle>
            <DialogDescription>
              Add a new partner to your organization. Click save when
              you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="partner-image">Image</Label>
              <Input id="partner-image" type="file" name="image" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="partner-title">Description</Label>
              <Input
                id="partner-title"
                placeholder="Enter description..."
                name="name"
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
