"use client";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/admin/AdminSidebar";
import "@/app/globals.css";
import AdminHeader from "@/components/admin/AdminHeader";
import { useAuth } from "@/context/authcontext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Spinner from "@/components/Spinner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const { isAuthenticated, loading } = useAuth();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/auth/login");
    }
  }, [isAuthenticated, router, loading]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner />
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <SidebarProvider>
      <AppSidebar />

      <main className="w-full">
        <AdminHeader />
        {children}
      </main>
    </SidebarProvider>
  );
}
