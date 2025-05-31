import { categories } from "./landingCategories";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
function Categories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 z-30 w-[90vw] -mx-24 mt-48 -mb-24">
      {categories.map((cat) => {
        return (
          <Card key={cat.title}>
            <CardHeader>
              <CardTitle>{cat.title}</CardTitle>
              <CardDescription>{cat.description}</CardDescription>
            </CardHeader>
            <CardContent className="relative w-36 h-36 z-10 flex items-center justify-center w-full">
              <Image
                src="https://lb822zgtkz.ufs.sh/f/pcF4wu0lx1e34A9KXtyIqvxRhQojGdZMlkT5Az9asB7VDPJS"
                fill
                className="object-contain"
                alt={`${cat.title} image`}
              />
            </CardContent>
            <CardFooter>
              <Button className="cursor-pointer">discover more</Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}

export default Categories;
