"use client";
import React from "react";
import { Input } from "@/components/ui/input";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

import { useDebouncedCallback } from "use-debounce";

function SearchInput({
  className = "",
  placeHolder = "Search...",
}: {
  className?: string;
  placeHolder?: string;
}) {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const { replace, back } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", "1");

    if (term.length >= 3) {
      params.set("q", term);
      replace(`/search?${params.toString()}`);

    } else {
      params.delete("q");
      if (
        document.referrer &&
        new URL(document.referrer).origin === window.location.origin
      ) {
        back(); // از داخل سایت اومده، برگرد عقب
      } else {
        replace("/"); // از بیرون اومده، برش گردون به هوم
      }
    }
  }, 100);
  return (
    <div>
      <Input
        className={`${className}`}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder={placeHolder}
        defaultValue={searchParams.get("q")?.toString()}
      />

      
    </div>
  );
}

export default SearchInput;
