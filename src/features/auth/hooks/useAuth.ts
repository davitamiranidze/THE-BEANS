import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabaseClient";
import { authKeys } from "../authKeys";

async function getSession(): Promise<Session | null> {
  const { data, error } = await supabase.auth.getSession();
  if (error) throw error;
  return data.session;
}

export function useAuth() {
  const queryClient = useQueryClient();

  const {
    data: session,
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: authKeys.session,
    queryFn: getSession,
    staleTime: Infinity,
    gcTime: Infinity,
    retry: false,
  });

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      queryClient.setQueryData(authKeys.session, session);
    });

    return () => subscription.unsubscribe();
  }, [queryClient]);

  return {
    session: session ?? null,
    user: session?.user ?? null,
    loading,
    error,
  };
}
