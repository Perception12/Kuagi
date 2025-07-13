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
import { Plus } from "lucide-react";



export function HeroDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild className="self-end">
        <Button variant="outline">
          {" "}
          <Plus className="inline" /> Add
        </Button>
      </DialogTrigger>
      <form>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Hero</DialogTitle>
            <DialogDescription>
              Add a new hero to your landing page. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="hero-image">Image</Label>
              <Input id="hero-image" type="file" name="image" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="hero-title">Title</Label>
              <Input id="hero-title" placeholder="Enter title..." name="hero-title" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="hero-figure">Description</Label>
              <Input id="hero-figure" placeholder="Enter description..." name="hero-figure" />
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
