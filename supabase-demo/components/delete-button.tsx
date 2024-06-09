'use client';

import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { deletePost } from "@/actions/post";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

type Props = {
  postId: number;
}

export const DeleteButton: React.FC<Props> = ({ postId }) => {
  const router = useRouter();
  const { toast } = useToast();
  console.log('DeleteButton', postId);
  return (
    <Button onClick={
      () => {
        deletePost(postId).then(() => {
          router.refresh();
          toast({
            title: "削除しました！",
          });
        });
      }}
      size="icon" variant="ghost">
      <Trash size={16} />削除
      <span className="sr-only">記事を削除</span>
    </Button>
  )
}