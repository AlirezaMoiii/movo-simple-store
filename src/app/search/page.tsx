import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { products } from "../lib/placeholder-data";

function page() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 my-4">
      {products.map(pr => {

        return(
          <Card key={pr.id} className="h-64">
          <CardHeader>
            <CardTitle>Product title</CardTitle>
            <CardDescription>Product Description</CardDescription>
          </CardHeader>
              <CardContent className="relative w-36 h-36 z-10 flex items-center justify-center w-full">
                {/* <Image
                  src={pr.images[0]}
                  fill
                  className="object-contain"
                  alt={`${pr.title} image`}
                /> */}
                Product Image
              </CardContent>
          <CardFooter>
            <p>Product Footer (Buy - Like)</p>
          </CardFooter>
        </Card>
        )
      })}
     
    </div>
  );
}

export default page;
