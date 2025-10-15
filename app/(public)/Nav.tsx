"use client";
import React, { useState } from "react";
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
import ListItem from "../../components/ListItem";
import { menus } from "@/data";
import { useRouter, usePathname } from "next/navigation";
import { PartnershipForm } from "@/components/PartnershipForm";

const Nav: React.FC = () => {
  const navigator = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full mx-auto h-20 flex items-center sticky top-0 z-50 shadow-sm bg-white opacity-90">
      {/* Mobile Nav */}
      <div className="container mx-auto py-3 flex justify-between items-center px-8 lg:px-16">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-6">
            <div onClick={() => { navigator.push("/"); setIsOpen(false); }} className="cursor-pointer">
              <Image src={Logo} alt="logo" className="max-w-[140px]" />
            </div>

            <div className="flex flex-col gap-2 py-6 w-full">
              {menus.map((menu, index) =>
                menu.components ? (
                  menu.components.map((item, index) => (
                    <Link
                      href={item.href}
                      key={index}
                      onClick={() => setIsOpen(false)}
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100"
                    >
                      {item.title}
                    </Link>
                  ))
                ) : (
                  <Link
                    key={index}
                    href={menu.link}
                    onClick={() => setIsOpen(false)}
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors "
                    prefetch={false}
                  >
                    {menu.name}
                  </Link>
                )
              )}
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop Nav */}
        <div onClick={() => navigator.push("/")} className="cursor-pointer">
          <Image src={Logo} alt="logo" width={150} className="hidden lg:flex" />
        </div>
        {/* Navigation Menu */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {/* Check if navigatio menu has dropdown and display accordingly */}
            {menus.map((menu, index) =>
              menu.components ? (
                <NavSelect menu={menu} key={index} />
              ) : (
                <NavigationMenuItem key={index} className="focus:bg-none hover:bg-none" >
                  <NavigationMenuLink asChild>
                    <Link
                      href={menu.link}
                      className={`group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold transition-colors hover:text-primary
                        ${pathname == menu.link && "text-primary"}
                        `}
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
        <PartnershipForm />
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

type Menu = {
  menu: {
    name: string;
    link: string;
    components: {
      title: string;
      href: string;
      description: string;
    }[];
  };
};

const NavSelect: React.FC<Menu> = ({ menu }) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{menu.name}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[300px] gap-3 p-4 md:grid-cols-1 ">
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
  );
};

export default Nav;
