import Header from "../ui/product/Header"
import Slider from "../ui/product/Slider"

import { Heart, Share2 } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { products } from "../lib/placeholder-data";


function page() {
  return (
    <div>
      <Header />
      <Slider />
      <div className="flex flex-row justify-between cursor-pointer text-neutral-500">
        <div className="flex flex-col items-center">
          <Heart className="!hover:text-red-500" />
          <span className="text-sm">318381</span>
        </div>

        <div className=" flex flex-col items-center gap-4">
          <p className="text-black text-2xl">$2299</p>
          <Button className="cursor-pointer">Add to card</Button>
        </div>

        <div className="flex flex-col items-center">
          <Share2 />
          <span className="text-sm">83103</span>
        </div>
      </div>

      <div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl">description</AccordionTrigger>
            <AccordionContent>
              {products[0].description.map((cont) => (
                <p key={cont}>- {cont}</p>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl">features</AccordionTrigger>
            <AccordionContent>
              {products[0].features.map((cont) => (
                <p key={cont}>- {cont}</p>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default page