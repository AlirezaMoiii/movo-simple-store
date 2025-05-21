import Header from "../ui/product/Header";
import Slider from "../ui/product/Slider";

import { Heart, Share2 } from "lucide-react";

import { Button } from "@/components/ui/button";

import SeparatorLine from "../ui/common/SeparatorLine";

import { products } from "../lib/placeholder-data";

import { CommentBox } from "../ui/common/CommentBox";

const sampleComment = {
  id: "1",
  name: "Ryan Jackson",
  avatarUrl: "",
  text: "It's a comment just for test!",
  date: new Date(Date.now() - 60 * 60 * 1000), // یک ساعت پیش
  replies: [
    {
      id: "2",
      name: "Melina Rose",
      text: "Yeah that was awesome.",
      date: new Date(Date.now() - 30 * 60 * 1000),
      replies: {
        id: "2",
        name: "Melina Rose",
        text: "Yeah that was awesome.",
        date: new Date(Date.now() - 30 * 60 * 1000),
      },
    },
  ],
};

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
        <SeparatorLine />
        <div>
          <h1 className="text-xl font-bold">Description</h1>
          <div className="flex flex-col gap-2">
            {products[0].description.map((des, i) => (
              <p key={i} className="text-sm">
                -{des}
              </p>
            ))}
          </div>
        </div>

        <SeparatorLine />

        <div>
          <h1 className="text-xl font-bold">Features</h1>
          <div className="flex flex-col gap-2">
            {products[0].features.map((des, i) => (
              <p key={i} className="text-sm">
                -{des}
              </p>
            ))}
          </div>
        </div>

        <SeparatorLine />
      </div>

      <div>
        <h1 className="text-xl font-bold">Comments</h1>
        <CommentBox comment={sampleComment} />
      </div>
    </div>
  );
}

export default page;
