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
import { Pen} from "lucide-react";



export function EditHeroDialog({type, name}: { type: string, name: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild className="self-end">
         <Pen className="inline mr-1" />
      </DialogTrigger>
      <form>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{`Edit `}</DialogTitle>
            <DialogDescription>
              {`Edit ${name} section. Click save when you're done.`}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="hero-image">Image</Label>
              <Input id="hero-image" type="file" name="image" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="hero-title">Title</Label>
              <Input id="hero-title" placeholder="Enter title" name="hero-title" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="partner-desc">Description</Label>
              <Input id="hero-description" placeholder="Enter description..." name="hero-description" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" onClick={() => console.log(type)}>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
