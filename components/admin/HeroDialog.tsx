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
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";

export function HeroDialog() {
  const [loading, setLoading] = useState(false);

  const { token } = useAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    
    formData.append("page", "landing-page");
    try {
      setLoading(true);
      await axios.post("https://api.kuagi.ng/api/info", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`,
        },
      });

      toast.success("Hero added successfully");
    } catch (error) {
      setLoading(false);
      console.error("Error adding hero:", error);
      toast.error("Failed to add hero");
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
            <DialogTitle>Add New Hero</DialogTitle>
            <DialogDescription>
              Add a new hero to your landing page. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="hero-image">Image</Label>
              <Input id="hero-image" type="file" name="image" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="hero-title">Title</Label>
              <Input
                id="hero-title"
                placeholder="Enter title..."
                name="heading"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="hero-description">Description</Label>
              <Input
                id="hero-description"
                placeholder="Enter description..."
                name="subheading"
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
