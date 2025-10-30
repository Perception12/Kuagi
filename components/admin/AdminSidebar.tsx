"use client";
import {
  Calendar,
  LayoutDashboard,
  ImagePlus,
  Venus,
  Network,
  SquareUserRound,
  Boxes,
  BriefcaseBusiness,
  Info,
  LogOut,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/context/authcontext";

// Menu items.
const appItems = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Landing Page",
    url: "/admin/landing-page",
    icon: ImagePlus,
  },
  {
    title: "Women4Tech",
    url: "/admin/women4tech",
    icon: Venus,
  },
  {
    title: "Events",
    url: "/admin/events",
    icon: Calendar,
  },
  {
    title: "Co-working Space",
    url: "/admin/co-working-space",
    icon: Network,
  },
  {
    title: "Courses",
    url: "/admin/courses",
    icon: SquareUserRound,
  },
  {
    title: "Business Hub",
    url: "/admin/business-hub",
    icon: BriefcaseBusiness,
  },
  {
    title: "Innovatif Hub",
    url: "/admin/innovatif-hub",
    icon: Boxes,
  },
  
  
];



const footerItems = [
  {
    title: "Help",
    url: "#",
    icon: Info,
  },
  {
    title: "Logout",
    url: "#",
    icon: LogOut,
  },
];

export function AppSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const { logout } = useAuth();
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5 cursor-pointer"
            >
              <Image
                src={Logo}
                alt="logo"
                className="h-32 cursor-pointer"
              />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu
            className="gap-4"
            >
              {appItems.map((item) => {
                const isRoot = item.url === "/admin";
                const isActive = isRoot
                  ? pathname === item.url
                  : pathname === item.url || pathname.startsWith(`${item.url}/`);
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      className={`cursor-pointer ${isActive ? 'text-black opacity-100 border-l-4 border-primary' : 'opacity-50 hover:opacity-75'}`}
                      onClick={() => router.push(item.url)}
                      asChild
                    >
                      <div className="flex gap-4 ml-6 items-center text-xl">
                        <item.icon />
                        <span>{item.title}</span>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu
        className="gap-4 opacity-50"
        >
          {footerItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                onClick={() =>
                  item.title == "Logout" ? logout() : router.push(item.url)
                }
                className="cursor-pointer"
                asChild
              >
                <div className="flex gap-4  ml-6 items-center text-xl">
                  <item.icon />
                  <span>{item.title}</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
