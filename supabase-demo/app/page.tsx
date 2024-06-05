import { signInWithPassword } from "@/actions/auth";
import { deletePost } from "@/actions/posts";
import { DeleteButton } from "@/components/delete-button";
import Form from "@/components/form";
import { Button } from "@/components/ui/button";
import { currentUser } from "@/data/auth";
import { getPosts } from "@/data/posts";
import { format } from "date-fns";
import { Delete, Edit, Trash } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const posts = await getPosts();
  const user = await currentUser();

  if (!posts) {
    return null;
  }

  return (
    <main className="container max-w-2xl">
      {user && <Form />}

      <div className="space-y-2 container my-6">
        {
          posts.map((post) => (
            <div className="p-4 border rounded shadow-sm" key={post.id}>
              <h2>{post.body}</h2>
              <p>{format(post.createdAt, 'yyyy/MM/dd')}</p>
              <div className="pt-0 mt-4 bg-muted text-muted-foreground border-t  flex gap-2">
                <DeleteButton postId={post.id} />
                <Button size="icon" variant="ghost">
                  <Link href={`/posts/${post.id}/edit`}>
                    <Edit size={16} />
                    <span className="sr-only">編集</span>
                  </Link>
                </Button>
              </div>
            </div>
          ))
        }
      </div>

    </main>
  );
}
