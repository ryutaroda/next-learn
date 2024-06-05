import { signInWithPassword, signOut } from "@/actions/auth";
import { Button } from "./ui/button";
import { currentUser } from "@/data/auth";
import Link from "next/link";

export default async function Header() {
  const user = await currentUser();
  return (
    <header className="container justify-between border-b h-16 flex items-center">
      <Link href='/'>Supabase Demo</Link>
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