"use client";

import { useRouter } from "next/navigation";
import { checkReferrer } from "@/app/lib/utils";
import SearchFilters from "./SearchFilters";
import { MoveLeft } from "lucide-react";

import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";

function Header({ query }: { query: string }) {
  const { back, replace } = useRouter();

  function handleBack() {
    if (checkReferrer()) {
      back();
    } else {
      replace("/");
    }
  }

  return (
    <div className="flex flex-row w-full items-center justify-between">
      <MoveLeft onClick={handleBack} className="cursor-pointer"/>
      <p>results for: {query}</p>

      <div className="block md:hidden">
        <Drawer direction="top">
          <DrawerTrigger>Filters</DrawerTrigger>
          <DrawerContent>
            <SearchFilters />
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}

export default Header;
