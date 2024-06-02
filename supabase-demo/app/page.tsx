import { getPosts } from "@/data/posts";
import { format } from "date-fns";

export default async function Home() {
  const posts = await getPosts();

  if (!posts) {
    return null;
  }

  return (
    <main className="space-y-2 container my-6">
      {
        posts.map((post) => (
          <div className="p-4 border rounded shadow-sm" key={post.id}>
            <h2>{post.body}</h2>
            <p>{format(post.createdAt, 'yyyy/MM/dd')}</p>
          </div>
        ))
      }
    </main>
  );
}
