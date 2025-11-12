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

export function OneOfUsDialog() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [open, setOpen] = useState(false);
  const { token } = useAuth();

  // 🔥 useApiCrud simplifies API logic & toasts
  const { handleSubmit, loading } = useApiCrud({
    url: "/api/proxy/api/comments",
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
              "Comment added successfully 🎉",
           
            )
          }
          encType="multipart/form-data"
        >
          <DialogHeader>
            <DialogTitle>Add New One Of Us</DialogTitle>
            <DialogDescription>
              Add a new OneOfUs to your Women4Tech page. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4">
            {/* Name */}
            <div className="grid gap-3">
              <Label htmlFor="oneOfUs-name">Name</Label>
              <Input
                id="oneOfUs-name"
                placeholder="Enter name..."
                name="author_name"
                required
              />
            </div>

            {/* Image */}
            <div className="grid gap-3">
              <Label htmlFor="oneOfUs-image">Image</Label>
              <Input id="oneOfUs-image" type="file" name="author_image" required />
            </div>

            {/* Comment */}
            <div className="grid gap-3">
              <Label htmlFor="oneOfUs-comment">Comment</Label>
              <Input
                id="oneOfUs-comment"
                placeholder="Enter comment..."
                name="content"
                required
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="oneOfUs-designation">Designation</Label>
              <Input
                id="oneOfUs-designation"
                placeholder="Enter designation..."
                name="author_designation"
                required
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="oneOfUs-company">Company</Label>
              <Input
                id="oneOfUs-company"
                placeholder="Enter company..."
                name="author_company"
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
