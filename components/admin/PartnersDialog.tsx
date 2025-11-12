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

export function PartnersDialog() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [open, setOpen] = useState(false);
  const { token } = useAuth();

  // 🔥 useApiCrud handles POST request, validation & toast messages
  const { handleSubmit, loading } = useApiCrud({
    url: "/api/proxy/api/our-partners",
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
              "Partner added successfully 🎉"
            )
          }
          encType="multipart/form-data"
        >
          <DialogHeader>
            <DialogTitle>Add New Partner</DialogTitle>
            <DialogDescription>
              Add a new partner. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4">
            {/* Partner Image */}
            <div className="grid gap-3">
              <Label htmlFor="partner-image">Image</Label>
              <Input id="partner-image" type="file" name="image" />
            </div>

            {/* Partner Name */}
            <div className="grid gap-3">
              <Label htmlFor="partner-name">Name</Label>
              <Input
                id="partner-name"
                placeholder="Enter partner name..."
                name="name"
                required
              />
            </div>

            {/* Partner Description */}
            <div className="grid gap-3">
              <Label htmlFor="partner-company">Company</Label>
              <Input
                id="partner-company"
                placeholder="Enter partner company..."
                name="company"
                required
              />
            </div>

            {/* Optional Website / Link */}
            <div className="grid gap-3">
              <Label htmlFor="partner-website">Website (optional)</Label>
              <Input
                id="partner-website"
                placeholder="https://example.com"
                name="website_url"
                type="url"
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
