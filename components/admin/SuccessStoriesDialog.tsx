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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAuth } from "@/context/authcontext";
import axios from "axios";
import { toast } from "sonner";
import { useState } from "react";

const storySelect = [
  {
    value: "Job Created",
    label: "Job Created",
  },
  {
    value: "Project Awarded",
    label: "Project Awarded",
  },
  {
    value: "Startups & Business Empowered",
    label: "Startups & Business Empowered",
  },
  {
    value: "Hub Subscribers",
    label: "Hub Subscribers",
  },
  {
    value: "Access to Skill Empowerment",
    label: "Student Trained",
  },
];

export function SuccessStoriesDialog() {
  const [loading, setLoading] = useState(false);
  const [caption, setCaption] = useState("");
  const [count, setCount] = useState("");
  const [icon, setIcon] = useState("");

  const { token } = useAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      caption,
      count,
      icon,
    };

    try {
      setLoading(true);
      await axios.post("https://api.kuagi.ng/api/success-stories", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Success story added successfully");
    } catch (error) {
      setLoading(false);
      console.error("Error saving:", error);
      toast.error("Failed to save success story");
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
            <DialogTitle>Add Success Story</DialogTitle>
            <DialogDescription>
              Add a new success story. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <Select
              onValueChange={(value) => {
                setCaption(value);
                setIcon(value);
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Success Story" />
              </SelectTrigger>
              <SelectContent>
                {storySelect.map((story) => (
                  <SelectItem key={story.value} value={story.value}>
                    {story.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="grid gap-3">
              <Label htmlFor="success-figure">Figure</Label>
              <Input
                id="success-figure"
                placeholder="Enter figure..."
                name="success-figure"
                onChange={(e) => setCount(e.target.value)}
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
