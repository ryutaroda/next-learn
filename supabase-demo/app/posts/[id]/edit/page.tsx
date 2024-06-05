import Form from "@/components/form"
import { getPost } from "@/data/posts";

export default async function Page({
  params: { id },
}: {
  params: {
    id: string
  }
}) {
  const postId = Number(id);
  const post = await getPost(postId);
  return (
    <div>
      <Form defaultValues={post} />
    </div>
  )
}