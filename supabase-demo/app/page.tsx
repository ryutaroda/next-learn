import Form from "@/components/form";
import { currentUser } from "@/datas/auth";
import { getPosts } from "@/datas/post";
import PostCard from "@/components/post-card";

export default async function Home({
  searchParams: {
    keyword
  }
}: {
  searchParams: {
    keyword?: string
  }
}) {
  const posts = await getPosts(keyword);
  const user = await currentUser();

  if (!posts) {
    return null;
  }

  return (
    <main className="container max-w-2xl">
      {user && <Form />}

      {posts.length > 0 ? (
        <div className="space-y-2 my-6">
          {
            posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))
          }
        </div>
      ) : (
        keyword ? (
          <p className="text-muted-foreground text-center my-10">
            {keyword} に該当する記事はありません
          </p>
        ) : (
          <p className="text-muted-foreground text-center my-10">
            記事はありません
          </p>
        )
      )}

    </main>
  );
}
