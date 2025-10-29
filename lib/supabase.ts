import { createClient } from '@supabase/supabase-js';

// Get environment variables. Note: We use NEXT_PUBLIC for client-side access.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase URL or Anon Key. Check Vercel Environment Variables!");
}

// Create and export the Supabase Client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    // We set these properties based on common Next.js usage.
    persistSession: true,
  },
});
