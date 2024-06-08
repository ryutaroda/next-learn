import { createClient } from '@/lib/supabase/server';
import 'server-only';

export const getPosts = async (keyword? : string) => {
  const supabase = createClient();
  let query = supabase
  .from('posts')
  .select('*')
  .order('createdAt', { ascending: false });

  if (keyword) {
    query = query.like('body', `%${keyword}%`);
  }

  const { data: posts, error } = await query;

  return posts;
}

export const getPost = async (id: number) => {
  const supabase = createClient();
  const { data, error } = await supabase.from('posts').select().eq('id', id).single();
  return data;
}