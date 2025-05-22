import { siteConfig } from "@/config/site";

import { ShoppingCart, Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// shadcn drawer
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

// shadcn navigation
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import Link from "next/link";
import Image from "next/image";

function DesktopNav() {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row items-center gap-4">
        <div className="relative w-24 aspect-[3/1]">
          <Image
            src={siteConfig.logo}
            fill
            className="object-contain"
            alt="Movo logo"
          />
        </div>

        {/* links */}
      
      </div>

      <div className="relative">
        <Input
          placeholder="search.."
          className="md:w-[42vw] xl:w-[25vw] xl:-ml-32 !outline-none"
        />
        <Search className="absolute top-1/2 -translate-y-1/2 right-1 size-4 text-neutral-500" />
      </div>

      <div className="flex flex-row items-center gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <Drawer direction="right">
          <DrawerTrigger>
            {" "}
            <div className="header-navbar-btn">
              <ShoppingCart className="header-navbar-icon" />
            </div>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Your shopping card</DrawerTitle>
              <DrawerDescription>The card is empty.</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose></DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}

export default DesktopNav;
