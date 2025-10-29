import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "../ui/button";
import { BellDot, Settings } from "lucide-react";
import { SearchForm } from "./SearchForm";

const AdminHeader = () => {
  return (
    <header className="flex sticky top-0 h-24 shrink-0 items-center gap-2 py-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height) bg-white z-10">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="lg:mx-2 data-[orientation=vertical]:h-4"
        />
        <div className="flex justify-between items-center w-full">

        <div className="flex flex-col gap-2 mx-1">
        <h3 className="text-xl hidden lg:block">Good Morning</h3>
        <h1 className="text-sm font-bold lg:text-3xl">Welcome Back!</h1>
        </div>
          <SearchForm className="" />
        <div className="lg:mr-16 flex items-center gap-2 ">
          <Button variant="ghost" asChild size="sm" className="sm:flex">
            <a href="/admin/notifications">
              <BellDot className="!h-5 !w-5 text-black opacity-100 " strokeWidth={3} />
            </a>
          </Button>
          <Button variant="ghost" asChild size="sm" className="sm:flex">
            <a href="/admin/notifications">
              <Settings className="!h-5 !w-5 text-black opacity-100" strokeWidth={3}/>
            </a>
          </Button>
        </div>
        </div>

      </div>
    </header>
  );
};

export default AdminHeader;
