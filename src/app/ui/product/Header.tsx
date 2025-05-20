"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import StarRating from "../layout/common/StarRating";

import { products } from "@/app/lib/placeholder-data";


function Header() {
  return (
    <div className="mt-4 flex flex-col gap-1.5">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2 items-center cursor-pointer">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="flex flex-col text-sm">
            <p className="font-bold">{products[0].brand}</p>
            <p className="text-neutral-500 cursor-pointer">see the store</p>
          </div>
        </div>

        <StarRating
          maxRating={5}
          average={4.3}
          color="#fff220"
          onRate={(val) => console.log("امتیاز ثبت شده:", val)}
        />
      </div>

      <div>{/* rating */}</div>

      <div>
        {/* product description */}
        <p className="line-clamp-3 text-sm">{products[0].description}</p>
      </div>
    </div>
  );
}

export default Header;
