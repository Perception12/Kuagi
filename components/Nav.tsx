"use client";
import React from "react";
import Logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import ListItem from "./ListItem";

const Nav: React.FC = () => {
  const menus = [
    {
      name: "Kuagi Acad",
      link: "#",
      components: [
        {
          title: "Alert Dialog",
          href: "/docs/primitives/alert-dialog",
          description:
            "A modal dialog that interrupts the user with important content and expects a response.",
        },
        {
          title: "Hover Card",
          href: "/docs/primitives/hover-card",
          description:
            "For sighted users to preview content available behind a link.",
        },
      ],
    },
    {
      name: "Kuagi Business Hub",
      link: "#",
    },
    {
      name: "Kuagi Innovative Hub",
      link: "#",
    },
    {
      name: "Contact us",
      link: "#",
    },
  ];

  return (
    // Nav bar
    <nav className="w-full mx-auto">
      <div className="container mx-auto py-3 flex justify-between items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-6">
            <div>
              <Image src={Logo} alt="logo" />
            </div>

            <div className="grid gap-2 py-6 w-full">
              {menus.map((menu, index) => (
                <Link
                  key={index}
                  href={menu.link}
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  prefetch={false}
                >
                  {menu.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>

        <div>
          <Image src={Logo} alt="logo" width={150} className="hidden lg:flex" />
        </div>
        {/* Navigation Menu */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {/* Check if navigatio menu has dropdown and display accordingly */}
            {menus.map((menu, index) =>
              menu.components ? (
                <NavigationMenuItem key={index}>
                  <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {menu.components?.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={menu.link}
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                      prefetch={false}
                    >
                      {menu.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>
        <Button onClick={() => {}}>Partner with us</Button>
      </div>
    </nav>
  );
};

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

export default Nav;
