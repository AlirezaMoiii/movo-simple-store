import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { products } from "../lib/placeholder-data";

import { fetchSearchResults } from "../lib/data";
import { Button } from "@/components/ui/button";

type PageProps = Promise<{
  searchParams?: {
    q?: string;
    page?: string;
  };
}>;

async function page(props: PageProps) {
  const { searchParams } = await props;

  const query = searchParams?.q || "";
  const page = searchParams?.page || "1";
  const data = await fetchSearchResults(query);

  console.log(data);

  console.log(query);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 my-4">
      <h1>Search results for: {query}</h1>
      {data ? data.map((pr) => {
        return (
          <Card key={pr.id} className="h-64">
            <CardHeader>
              <CardTitle>{pr.name}</CardTitle>
              <CardDescription>{pr.description}</CardDescription>
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
               <Button>Add to card</Button>
            </CardFooter>
          </Card>
        );
      }) : <h1>We couldnt find anything</h1>}
    </div>
  );
}

export default page;
