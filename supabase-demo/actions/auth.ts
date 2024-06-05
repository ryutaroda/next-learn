'use server'
import { createClient } from "@/lib/supabase/server"


export const signInWithPassword = async () => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email: 'ryutaro.kanaoka@gmail.com',
    password: 'TxyL84JaeJwC3XZ',
  })
}

export const signOut = async () => {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();
}

