import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

type ProductCard = {
  id: string;
  title: string;
  description: string;
  img: string;
};

function ProductCard(props : ProductCard) {
  return (
    <Card key={props.id} className="h-64">
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardContent className="relative w-36 h-36 z-10 flex items-center justify-center w-full">
        {/* <Image
                          src={props.img}
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
}

export default ProductCard;
