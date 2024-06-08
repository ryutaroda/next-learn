import { signInWithPassword, signOut } from "@/actions/auth";
import { Button } from "./ui/button";
import { currentUser } from "@/datas/auth";
import Link from "next/link";
import SearchForm from "./search-form";

export default async function Header() {
  const user = await currentUser();
  return (
    <header className="container justify-between border-b h-16 flex items-center">
      <Link href='/'>Supabase Demo</Link>

      <SearchForm />

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