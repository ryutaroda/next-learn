'use client';

import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Edit, EllipsisVertical, Trash } from "lucide-react";
import Link from "next/link";
import { Tables } from "@/types/database";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { deletePost } from "@/actions/post";
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation";


export default function PostCard({ post } :{post: Tables<'posts'>}) {
  const { toast } = useToast();
  const router = useRouter();
  return (
    <div className="p-4 border flex rounded shadow-sm" key={post.id}>
      <div className="flex-1">
        <h2>{post.body}</h2>
      <p>{format(post.createdAt, 'yyyy/MM/dd')}</p>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size="icon"
            variant="ghost"
          >
            <EllipsisVertical size={20} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem asChild className="gap-2">
            <Link href={`/posts/${post.id}/edit`}>
              <Edit size={16} />編集
              <span className="sr-only">編集</span>
            </Link>
            </DropdownMenuItem>
            <form>
            <DropdownMenuItem className="gap-2" asChild>
              <button
                formAction={async () => {
                  await deletePost(post.id);
                  router.refresh();
                    toast({
                      title: "削除しました！",
                    });
                }}
                type="submit"
              >
                <Trash size={16} />
                削除
              </button>
            </DropdownMenuItem>
          </form>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}