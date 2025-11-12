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
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";
import { useRef, useState } from "react";
import { useAuth } from "@/context/authcontext";
import { useApiCrud } from "@/hooks/useApiCrud";

export function InnovativeFAQDialog() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [open, setOpen] = useState(false);
  const { token } = useAuth();

  // ✅ useApiCrud for consistent CRUD handling
  const { handleSubmit, loading } = useApiCrud({
    url: "/api/proxy/api/faqs",
    token,
    onSuccess: () => {
      setOpen(false); // close only after success
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* ✅ Explicit open control */}
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

      {/* ✅ Form Section */}
      <DialogContent className="sm:max-w-[425px]">
        <form
          ref={formRef}
          onSubmit={(e) =>
            handleSubmit(formRef as React.RefObject<HTMLFormElement>, e, "POST", "FAQ added successfully 🎉")
          }
          className="flex flex-col gap-6"
        >
          <DialogHeader>
            <DialogTitle>Add New FAQ</DialogTitle>
            <DialogDescription>
              Add a new frequently asked question. Click save when you’re done.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4">
            {/* Question */}
            <div className="grid gap-3">
              <Label htmlFor="question">Question</Label>
              <Input
                id="question"
                name="question"
                placeholder="Enter question..."
                required
              />
            </div>

            {/* Answer */}
            <div className="grid gap-3">
              <Label htmlFor="answer">Answer</Label>
              <Textarea
                id="answer"
                name="answer"
                placeholder="Enter answer..."
                required
              />
            </div>

            {/* Optional hidden input for type */}
            <input type="hidden" name="type" value="innovatif-faq" />
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
