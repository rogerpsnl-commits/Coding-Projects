import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

/** Get a human-readable display name from any Supabase user object */
export function getUserDisplayName(user) {
  return (
    user?.user_metadata?.username ||
    user?.user_metadata?.full_name ||
    user?.email?.split('@')[0] ||
    'User'
  )
}

/** Derive a short invite code from the user's UUID */
export function getInviteCode(userId) {
  return (userId || '').replace(/-/g, '').substring(0, 6).toUpperCase()
}
