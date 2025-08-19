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
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { apiRequest } from "@/lib/api";
import { FAQS } from "@/lib/api_routes";
import { useAuth } from "@/context/authcontext";

export function FAQDialog() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false); // 1. Dialog open state

  const { token } = useAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const question = formData.get("faq-question");
    const answer = formData.get("faq-answer");

    const data = {
      question,
      answer,
      type: "landing-page",
    };

    try {
      setLoading(true);

      await apiRequest({
        url: FAQS.create(),
        data,
        token,
        isFormData: true,
      });

      toast.success("faq added successfully");
      setOpen(false);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setLoading(false);
      toast.error("Failed to add faq");
    }
  };

  useEffect(() => {
    if (open) setLoading(false);
  }, [open]); // Reset loading state when dialog opens

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="self-end">
        <Button variant="outline">
          {" "}
          <Plus className="inline" /> Add
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <DialogHeader>
            <DialogTitle>Add New FAQ</DialogTitle>
            <DialogDescription>
              Add a new frequently asked questions. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="faq-question">Question</Label>
              <Input
                id="faq-question"
                placeholder="Enter question"
                name="faq-question"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="faq-answer">Answer</Label>
              <Textarea
                id="faq-answer"
                placeholder="Enter Answer..."
                name="faq-answer"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button disabled={loading} type="submit">
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
