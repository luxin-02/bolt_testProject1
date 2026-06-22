import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

let supabase = null

try {
  if (supabaseUrl && supabaseAnonKey) {
    supabase = createClient(supabaseUrl, supabaseAnonKey)
  } else {
    console.warn('[Supabase] Missing env variables. Auth will use local fallback.')
  }
} catch (e) {
  console.warn('[Supabase] Initialization failed:', e.message)
}

export default supabase
