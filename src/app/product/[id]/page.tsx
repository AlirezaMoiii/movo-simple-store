import Header from "../../ui/product/Header";
import Slider from "../../ui/product/Slider";

import { Heart, Share2 } from "lucide-react";

import { Button } from "@/components/ui/button";

import SeparatorLine from "../../ui/common/SeparatorLine";

import { products } from "../../lib/placeholder-data";

import { CommentBox } from "../../ui/common/CommentBox";

import { CommentType } from "../../ui/common/CommentBox";
import { fetchProductByID, fetchProductComments, fetchProductImages, fetchProductLikeCount } from "@/app/lib/data";

const sampleComment: CommentType = {
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
      replies: [
        {
          id: "2",
          name: "Melina Rose",
          text: "Yeah that was awesome.",
          date: new Date(Date.now() - 30 * 60 * 1000),
        },
      ],
    },
  ],
};

type Params = Promise<{
  id: string;
}>

async function page(props: {params: Params}) {
  const params = await props.params;
  const id = params.id;
  const [product, comments, likes] = await Promise.all([
    fetchProductByID(id),
    fetchProductComments(id),
    fetchProductLikeCount(id),
])

console.log(comments)
  
  return (
    <div>
      <Header title={product.name}/>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <Slider />
          <div className="flex flex-row justify-between cursor-pointer text-neutral-500 md:justify-evenly md:my-6">
            <div className="flex flex-col items-center">
              <Heart className="!hover:text-red-500" />
              <span className="text-sm">{likes}</span>
            </div>

            <div className=" flex flex-col items-center gap-4">
              <p className="text-black text-2xl">${product.price}</p>
              <Button className="cursor-pointer">Add to card</Button>
            </div>

            <div className="flex flex-col items-center">
              <Share2 />
              <span className="text-sm">83103</span>
            </div>
          </div>
        </div>

        <div>
          <SeparatorLine />
          <div>
            <h1 className="text-xl font-bold">Description</h1>
            <div className="flex flex-col gap-2">{product.description}</div>
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
      </div>

      <div>
        <h1 className="text-xl font-bold">Comments</h1>
        {
          comments.length ?  <CommentBox comment={sampleComment} /> 
          :
          <h1>No comments yet!</h1>
        }
       
      </div>
    </div>
  );
}

export default page;
