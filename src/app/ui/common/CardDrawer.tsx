import React from "react";
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

function CardDrawer({children}: {children: React.ReactNode}) {
  return (
    <div>
      <Drawer direction="right">
        <DrawerTrigger>
          {" "}
          <div className="header-navbar-btn">
            {children}
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
  );
}

export default CardDrawer;
