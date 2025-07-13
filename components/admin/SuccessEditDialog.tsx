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



export function SuccessEditDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild className="self-end">
        <Pen className="inline mr-1" />
      </DialogTrigger>
      <form>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Success Story</DialogTitle>
            <DialogDescription>
              Edit success story. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="success-image">Image</Label>
              <Input id="success-image" type="file" name="image" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="success-title">Title</Label>
              <Input id="success-title" placeholder="Enter title..." name="success-title" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="success-figure">Figure</Label>
              <Input id="success-figure" placeholder="Enter figure..." name="success-figure" />
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
