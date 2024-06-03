'use server'

import { createClient } from "@/lib/supabase/server";

export const createPost = async (data: FormData) => {
  const body = data.get('body') as string;

  const supabase = createClient();

  const {data: {user}} = await supabase.auth.getUser();

  if(!body) {
    throw new Error('Invalid body');
  }

  if (!user) {
    throw new Error('Unauthorized');
  }

  return supabase.from('posts').insert({
    body,
    userId: user.id,
  });

}