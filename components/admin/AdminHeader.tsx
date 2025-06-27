import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "../ui/button";
import { BellDot, Settings } from "lucide-react";
import { SearchForm } from "./SearchForm";

const AdminHeader = () => {
  return (
    <header className="flex sticky top-0 h-(--header-height) shrink-0 items-center gap-2 py-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height) bg-white z-10">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">Welcome Back</h1>
        <div className="ml-auto flex items-center gap-2">
          <SearchForm className="w-full sm:ml-auto sm:w-auto" />
          <Button variant="ghost" asChild size="sm" className="hidden sm:flex">
            <a href="/admin/notifications">
              <BellDot className="!h-5 !w-5" />
            </a>
          </Button>
          <Button variant="ghost" asChild size="sm" className="hidden sm:flex">
            <a href="/admin/notifications">
              <Settings className="!h-5 !w-5" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
