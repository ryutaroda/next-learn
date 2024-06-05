'use server'

import { createClient } from "@/lib/supabase/server";

export const createPost = async (body: string) => {
  const supabase = createClient();
  const {data: {user}} = await supabase.auth.getUser();

  if(!body) {
    throw new Error('Invalid body');
  }

  if (!user) {
    throw new Error('Unauthorized');
  }

  return supabase
  .from('posts')
  .insert({ body, userId: user.id});

}

export const updatePost = async (id: number, body: string) => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!body) {
    throw new Error('Body is required');
  }

  if (!user) {
    throw new Error('Unauthorized');
  }

  return supabase
    .from('posts')
    .update({
      body,
      userId: user.id,
    })
    .eq('id', id);
};

export const deletePost = async (id: number) => {
  const supabase = createClient();
  const {data: {user}} = await supabase.auth.getUser();

  if (!user) {
    throw new Error('Unauthorized');
  }

  return supabase.from('posts').delete().eq('id', id).eq('userId', user.id);
}