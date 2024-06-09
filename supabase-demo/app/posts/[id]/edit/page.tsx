import Form from "@/components/form"
import { currentUser } from "@/datas/auth";
import { getPost, getPostByAuthor } from "@/datas/post";
import { log } from "console";
import { redirect } from "next/navigation";

export default async function Page({
  params: { id },
}: {
  params: {
    id: string
  }
}) {
  const user = await currentUser();

  if (!user) {
    redirect(`/`);
  }

  const post = await getPostByAuthor(Number(id), user.id);

  log(post);

  if (!post) {
    redirect(`/`);
  }

  return (
    <div className="container max-w-2xl">
      <Form defaultValues={post || undefined} />
    </div>
  )
}