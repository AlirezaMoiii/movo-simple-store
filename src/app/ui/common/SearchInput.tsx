"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { checkReferrer } from "@/app/lib/utils";
import { Input } from "@/components/ui/input";

function SearchInput({
  className = "",
  placeHolder = "Search...",
}: {
  className?: string;
  placeHolder?: string;
}) {
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
      if (checkReferrer()) {
        back();
      } else {
        replace("/");
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
