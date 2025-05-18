import Link from "next/link";
import { categories } from "./landingCategories"

import Image from "next/image";
function Categories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 z-30 w-[90vw] -mx-24 mt-48">
      {categories.map((cat) => {
        return (
          <div
            key={cat.title}
            className="border bg-white min-h-48 flex flex-col justify-between items-start p-4 min-h-80 shadow-md"
          >
            <h1 className="font-bold">{cat.title}</h1>
            <div className="relative w-80 aspect-[3/1] self-center ">
              <Image
                src={cat.img}
                fill
                className="object-contain"
                alt={`${cat.title} image`}
              />
            </div>
            <div>
              <Link href={cat.href} className="text-sm text-blue-600">
              discover more
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Categories