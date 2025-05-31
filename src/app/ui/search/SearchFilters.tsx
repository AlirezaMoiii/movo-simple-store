"use client";

import { Slider } from "@/components/ui/slider";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { useState } from "react";

function SearchFilters() {
  const [range, setRange] = useState<number[]>([20, 80]);

  return (
    <div>
      <div className="flex flex-col gap-4 max-w-[100%] px-4 py-2">
        <div>
          <h1 className="text-primary text-lg">Search Filters</h1>
        </div>
        <div className="flex flex-col gap-1">
          <p>
            selected range ${range[0].toLocaleString()} - $
            {range[1].toLocaleString()}
          </p>
          <Slider
            value={range}
            onValueChange={(val) => setRange(val)}
            defaultValue={[33]}
            max={100}
            step={1}
          />
        </div>

        <div className="flex flex-col gap-1">
          <p>Sort By</p>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Pick something.." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
              <SelectItem value="most-relevant">Most relevant</SelectItem>
              <SelectItem value="best">Best (by user rating)</SelectItem>
              <SelectItem value="worst">Worst (by user rating)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-row justify-between items-center gap-4">
          <Button variant={"secondary"}>Resest</Button>
          <Button variant={"default"}>Submit</Button>
        </div>
      </div>
    </div>
  );
}

export default SearchFilters;
