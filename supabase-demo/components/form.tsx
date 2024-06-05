'use client';

import { createPost, updatePost } from "@/actions/posts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "./ui/textarea";
import { useRouter } from "next/navigation";
import { Tables } from "@/types/database";
import { log } from "console";


const formSchema = z.object({
  body: z.string().min(1).max(50),
})

export default function FormComponent({
  defaultValues
}: {
  defaultValues?: Tables<'posts'>;
}) {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues || {
      body: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (defaultValues) {
      return updatePost(defaultValues.id, values.body).then(() => {
        router.refresh();
      });
    } else {
      return createPost(values.body).then(() => {
        router.refresh();
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 p-4 border rounded-md bg-muted/30 mt-6"
      >
        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <FormLabel>本文</FormLabel>
              <FormControl>
                <Textarea placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={form.formState.isSubmitting}
          type="submit">送信</Button>
      </form>
    </Form>
  )
}