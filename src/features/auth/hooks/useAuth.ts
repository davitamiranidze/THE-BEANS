import { useQuery } from "@tanstack/react-query";
import { authKeys } from "../authKeys";
import { supabase } from "@/lib/supabaseClient";
import type { Session } from "@supabase/supabase-js";

async function getSession(): Promise<Session | null> {
  const { data, error } = await supabase.auth.getSession();
  if (error) throw error;
  return data.session;
}

export function useAuth() {
  const {
    data: session,
    isLoading,
    error,
  } = useQuery({
    queryKey: authKeys.session,
    queryFn: getSession,
    staleTime: Infinity,
    gcTime: Infinity,
    retry: false,
  });

  return {
    session: session ?? null,
    user: session?.user ?? null,
    loading: isLoading,
    error,
  };
}
