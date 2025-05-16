
import { siteConfig } from "@/config/site";

import { mainNavLinks } from "./links";

// lucide icons
import { ShoppingCart, AlignJustify, X } from "lucide-react";

// shadcn
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Input } from "@/components/ui/input";

import Link from "next/link";
import Image from "next/image";

function MobileNav() {
  return (
    <div className="flex items-center justify-between">
      <div className="header-navbar-btn force-hidden">
        <Drawer direction="left">
          <DrawerTrigger className="md:hidden">
            <AlignJustify className="header-navbar-icon" />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerClose className="flex self-end">
                <X />
              </DrawerClose>
              <DrawerDescription>
                <Input className="mt-2" placeholder="search..." />

                <ul className="mt-4 flex flex-col gap-2">
                  {mainNavLinks.map((link) => {
                    const LinkIcon = link.icon;
                    return (
                      <li
                        key={link.name}
                        className="text-md font-bold capitalize tracking-wide"
                      >
                        <Link href={link.href} className="flex flex-row items-center gap-2">
                          <span><LinkIcon /></span>
                          <span>{link.name}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </DrawerDescription>
            </DrawerHeader>

            <DrawerFooter></DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>

      <div>
        <Image src={siteConfig.logo} width={100} height={100} alt="movo logo" />
      </div>

      <div className="header-navbar-btn">
        <ShoppingCart className="header-navbar-icon" />
      </div>
    </div>
  );
}

export default MobileNav;
