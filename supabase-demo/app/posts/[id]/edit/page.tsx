import Form from "@/components/form"
import { getPost } from "@/data/posts";

export default async function Page({
  params: { id },
}: {
  params: {
    id: string
  }
}) {
  const post = await getPost(Number(id));

  return (
    <div>
      <Form defaultValues={post || undefined} />
    </div>
  )
}