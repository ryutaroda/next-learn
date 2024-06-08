'use client';

import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { deletePost } from "@/actions/post";
import { useRouter } from "next/navigation";

type Props = {
  postId: number;
}

export const DeleteButton: React.FC<Props> = ({ postId }) => {
  const router = useRouter();
  return (
    <Button onClick={
      () => {
        deletePost(postId).then(() => {
          router.refresh();
        });
      }}
      size="icon" variant="ghost">
      <Trash size={16} />
      <span className="sr-only">記事を削除</span>
    </Button>
  )
}