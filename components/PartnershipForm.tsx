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
// import { useAuth } from "@/context/authcontext";
// import { apiRequest } from "@/lib/api";
// import { OUR_PARTNERS } from "@/lib/api_routes";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Textarea } from "./ui/textarea";
import Image from "next/image";
import AttachIcon from "@/assets/icons/ic_attach.png";

export function PartnershipForm() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false); // 1. Dialog open state

//   const { token } = useAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    formData.append("page", "partners");
    try {
      setLoading(true);

    //   await apiRequest({
    //     url: OUR_PARTNERS.create(),
    //     data: formData,
    //     token,
    //     isFormData: true,
    //   });

      toast.success("Partner added successfully");
      setOpen(false);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setLoading(false);
      toast.error("Failed to add partner");
    }
  };

  useEffect(() => {
    if (open) setLoading(false);
  }, [open]); // Reset loading state when dialog opens

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {" "}
      {/* 2. Controlled dialog */}
      <DialogTrigger asChild>
        <Button>
          Partner with us
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <DialogHeader>
            <DialogTitle>Partnership Form</DialogTitle>
            <DialogDescription>
              Please fill this form, we will reach out to you
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="partner-name">Organization/Company Name</Label>
              <Input id="partner-name" type="text" placeholder="Enter organization or company name" name="organization_name" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="partner-email">Email</Label>
              <Input id="partner-email" type="text" placeholder="Enter organization email" name="email" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="partner-number">Phone Number</Label>
              <Input id="partner-number" type="number" placeholder="Enter phone number" name="number" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="partner-nature">Nature of Organization/Company</Label>
              <Input id="partner-nature" type="text" placeholder="Enter nature of organization/company" name="organization_nature" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="partner-reason">Brief Statement of Interest</Label>
              <Textarea id="partner-reason" placeholder="Enter brief statement of interest (reason for joining)" name="statement" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="partner-comment">Additional Comments or Questions</Label>
              <Input
                id="partner-comment"
                placeholder="Got additional comments or questions?"
                name="name"
              />
            </div>
            <div className="flex items-center gap-2 rounded-lg px-2 cursor-pointer">
              <Image alt="attach icon" src={AttachIcon} width={15} />
              <label className="text-primary text-sm cursor-pointer">
                Attach additional files
                <input type="file" name="attachment[]" className="hidden" />
              </label>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" disabled={loading}>
              Submit Now
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
