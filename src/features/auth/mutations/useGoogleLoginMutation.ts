import { supabase } from "@/lib/supabaseClient";
import { useMutation } from "@tanstack/react-query";

export function useGoogleLoginMutation() {
  return useMutation({
    mutationFn: async () => {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) throw error;
      // no return needed – browser will redirect
    },
  });
}
