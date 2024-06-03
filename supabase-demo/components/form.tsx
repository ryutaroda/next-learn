import { createPost } from "@/actions/posts";

export default function Form() {
  return (
    <form action={createPost}>
      <textarea name="body" />
      <button type="submit">Submit</button>
    </form>
  )
}