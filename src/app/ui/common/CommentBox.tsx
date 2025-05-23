// components/CommentBox.tsx
"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MessageCircle, Heart } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { useState } from "react";

export type CommentType = {
  id: string;
  name: string;
  avatarUrl?: string;
  text: string;
  date: Date;
  replies?: CommentType[];
};

export function CommentBox({ comment }: { comment: CommentType }) {
  const [likes, setLikes] = useState(0);
  const [showReplies, setShowReplies] = useState(true);

  return (
    <div className="space-y-4 border rounded-2xl p-4 shadow-sm bg-white md:max-w-[85vh]">
      <div className="flex items-start gap-3">
        <Avatar className="w-10 h-10">
          <AvatarImage src={comment.avatarUrl} />
          <AvatarFallback>{comment.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="font-medium text-black">{comment.name}</span>
            <span className="text-gray-400 text-xs">
              {formatDistanceToNow(comment.date, { addSuffix: true })}
            </span>
          </div>
          <p className="mt-1 text-sm text-gray-800">{comment.text}</p>
          <div className="flex gap-2 mt-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLikes(likes + 1)}
              className="text-gray-500 hover:text-red-500"
            >
              <Heart className="w-4 h-4 mr-1" /> {likes}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowReplies(!showReplies)}
              className="text-gray-500"
            >
              <MessageCircle className="w-4 h-4 mr-1" /> Reply
            </Button>
          </div>

          {showReplies && comment.replies && comment.replies.length > 0 && (
            <div className="pl-6 mt-4 space-y-4 border-l border-gray-200">
              {comment.replies.map((reply) => (
                <CommentBox key={reply.id} comment={reply} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
