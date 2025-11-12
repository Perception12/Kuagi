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
import { useRef, useState } from "react";
import { useAuth } from "@/context/authcontext";
import { useApiCrud } from "@/hooks/useApiCrud";
import IconLaptop from "@/assets/icons/ic_laptop.png";
import IconAward from "@/assets/icons/ic_award.png";
import IconTrained from "@/assets/icons/ic_trained.png";
import IconBusiness from "@/assets/icons/ic_business.png";
import IconStudents from "@/assets/icons/ic_students.png";
import IconWeb from "@/assets/icons/ic_web.png";

const storySelect = [
  { value: "Job Created", label: "Job Created", icon: IconLaptop },
  { value: "Project Awarded", label: "Project Awarded", icon: IconAward },
  { value: "Startups & Business Empowered", label: "Startups & Business Empowered", icon: IconBusiness },
  { value: "Hub Subscribers", label: "Hub Subscribers", icon: IconWeb},
  { value: "Access to Skill Empowerment", label: "Access to Skill Empowerment", icon: IconStudents },
  { value: "Student Trained", label: "Student Trained", icon: IconTrained },
];

export function SuccessStoriesDialog() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [open, setOpen] = useState(false);
  const [caption, setCaption] = useState("");
  const [count, setCount] = useState("");
  const [icon, setIcon] = useState("");

  const { token } = useAuth();

  // ✅ Centralized API handling using your shared CRUD hook
  const { handleSubmit, loading } = useApiCrud({
    url: "/api/proxy/api/success-stories",
    token,
    onSuccess: () => {
      setOpen(false);
      setCaption("");
      setCount("");
      setIcon("");
    },
  });

  // ✅ Submit handler (delegated to useApiCrud)
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData();
    data.append("caption", caption);
    data.append("count", count);
    data.append("icon", icon);

    handleSubmit(
      formRef as React.RefObject<HTMLFormElement>,
      e,
      "POST",
      "Success story added successfully 🎉"
      // data
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="self-end">
        <Button
          variant="outline"
          className="bg-primary text-white"
          onClick={() => setOpen(true)}
        >
          <Plus className="inline" /> Add
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <form
          ref={formRef}
          onSubmit={onSubmit}
          className="flex flex-col gap-6"
          encType="multipart/form-data"
        >
          <DialogHeader>
            <DialogTitle>Add Success Story</DialogTitle>
            <DialogDescription>
              Add a new success story. Click save when you’re done.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4">
            {/* Select success story type */}
            <div className="grid gap-3">
              {/* <Label htmlFor="success-type">Story Type</Label> */}
              <Select
                onValueChange={(value) => {
                  setCaption(value);
                  setIcon(value);
                }}
              >
                <SelectTrigger id="success-type" className="w-full">
                  <SelectValue placeholder="Select a success story" />
                </SelectTrigger>
                <SelectContent>
                  {storySelect.map((story) => (
                    <SelectItem key={story.value} value={story.value}>
                      {story.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Count / figure input */}
            <div className="grid gap-3">
              <Label htmlFor="success-count">Figure</Label>
              <Input
                id="success-count"
                placeholder="Enter figure..."
                name="count"
                value={count}
                onChange={(e) => setCount(e.target.value)}
                required
              />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
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
