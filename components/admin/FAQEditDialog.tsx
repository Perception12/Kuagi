"use client"
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
import { Pen } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";



export function FAQEditDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild className="self-end">
        <Pen className="inline mr-1" />
      </DialogTrigger>
      <form>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit FAQ</DialogTitle>
            <DialogDescription>
              Edit frequently asked questions. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="faq-question">Question</Label>
              <Input id="faq-question" placeholder="Enter question" name="faq-question" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="faq-answer">Answer</Label>
              <Textarea id="faq-answer" placeholder="Enter Answer..." name="faq-answer" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
