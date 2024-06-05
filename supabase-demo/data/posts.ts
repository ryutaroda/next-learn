import { createClient } from '@/lib/supabase/server';
import 'server-only';

export const getPosts = async () => {
  const supabase = createClient();
  const { data: posts, error } = await supabase.from('posts').select('*');

  return posts;
}

export const getPost = async (id: number) => {
  const supabase = createClient();
  const { data, error } = await supabase.from('posts').select().eq('id', id).single();
  return data;
}