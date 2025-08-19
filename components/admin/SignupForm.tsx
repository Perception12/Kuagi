"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { apiRequest } from "@/lib/api";
import { AUTH } from "@/lib/api_routes";
import { toast } from "sonner";
import { useState } from "react";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      setLoading(true);
      await apiRequest({
        url: AUTH.register(),
        method: "post",
        data: formData,
        isFormData: true,
      });

      router.push("/auth/login"); // Redirect after successful signup
      toast.success("Signup successful!");
      setLoading(false);
    } catch (error) {
      setLoading(false)
      toast.error("Signup failed. Please check your details.");
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Register</CardTitle>
          <CardDescription>Sign up with your Google account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6">
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="password_confirmation">
                      Confirm Password
                    </Label>
                  </div>
                  <Input
                    id="password_confirmation"
                    name="password_confirmation"
                    type="password"
                    required
                  />
                </div>
                <Button disabled={loading} type="submit" className="w-full">
                  Sign Up
                </Button>
              </div>
              <div className="text-center text-sm flex items-center justify-center gap-2">
                Already have an account?
                <p
                  onClick={() => router.push("/auth/login")}
                  className="underline underline-offset-4 cursor-pointer"
                >
                  Log in
                </p>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
