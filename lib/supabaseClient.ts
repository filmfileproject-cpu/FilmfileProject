import { createClient } from '@supabase/supabase-js';

// These variables are available via process.env because you set them up in Vercel
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase URL or Anon Key. Check Vercel Environment Variables!");
}

// Create and export the Supabase Client for use throughout the app
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
