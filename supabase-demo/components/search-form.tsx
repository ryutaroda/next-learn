// 'use client';
import { redirect } from "next/navigation";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

export default function SearchForm() {
  return (
    <form
    className="flex gap-1"
    action={async(data: FormData) => {
      'use server';
      const keyword = data.get('keyword');
      redirect(`/?keyword=${keyword}`);
    }}>
      <Input type="text" name="keyword" className="flex-1" />
      <Button variant="outline" size="icon">
        <Search size={20} />
        <span className="sr-only">検索</span>
      </Button>
    </form>
  )
}