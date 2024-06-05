import { signInWithPassword, signOut } from "@/actions/auth";
import { Button } from "./ui/button";
import { currentUser } from "@/data/auth";

export default async function Header() {
  const user = await currentUser();
  return (
    <header className="container justify-between border-b h-16 flex items-center">
      <p>Supabase Demo</p>
      {user ?
        <form action={signOut}>
          <Button variant={"outline"} type="submit">ログアウト</Button>
        </form>
        :
        <form action={signInWithPassword}>
          <Button type="submit">ログイン</Button>
        </form>
      }

    </header>
  )
}