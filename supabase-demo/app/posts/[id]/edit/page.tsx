import Form from "@/components/form"
import { getPost } from "@/datas/post";

export default async function Page({
  params: { id },
}: {
  params: {
    id: string
  }
}) {
  const post = await getPost(Number(id));

  return (
    <div className="container max-w-2xl">
      <Form defaultValues={post || undefined} />
    </div>
  )
}