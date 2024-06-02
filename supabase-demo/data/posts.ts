import { createClient } from '@/lib/supabase/server';
import 'server-only';

export const getPosts = async () => {
  const supabase = createClient();
  const { data: posts, error } = await supabase.from('posts').select('*');

  return posts;
}