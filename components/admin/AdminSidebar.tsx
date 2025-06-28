"use client";
import {
  Calendar,
  Home,
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
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Menu items.
const appItems = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: Home,
  },
];

const pageItems = [
  {
    title: "Landing Page",
    url: "/admin/landing-page",
    icon: ImagePlus,
  },
  {
    title: "Events",
    url: "/admin/events",
    icon: Calendar,
  },
  {
    title: "Women4Tech",
    url: "/admin/women4tech",
    icon: Venus,
  },
];

const hubItems = [
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

const plansItems = [
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
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Image
                src={Logo}
                alt="logo"
                className="max-w-[120px] cursor-pointer"
              />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {appItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => router.push(item.url)}
                    asChild
                  >
                    <div className="flex gap-2 items-center" >
                      <item.icon />
                      <span>{item.title}</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Pages</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {pageItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => router.push(item.url)}
                    asChild
                  >
                    <div className="flex gap-2 items-center" >
                      <item.icon />
                      <span>{item.title}</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Hubs</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {hubItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => router.push(item.url)}
                    asChild
                  >
                    <div className="flex gap-2 items-center" >
                      <item.icon />
                      <span>{item.title}</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Plans</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {plansItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => router.push(item.url)}
                    asChild
                  >
                    <div className="flex gap-2 items-center" >
                      <item.icon />
                      <span>{item.title}</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          {footerItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton onClick={() => router.push(item.url)} asChild>
                <div className="flex gap-2 items-center" >
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
