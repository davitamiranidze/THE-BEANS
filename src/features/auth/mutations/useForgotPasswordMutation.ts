import { supabase } from "@/lib/supabaseClient";
import { useMutation } from "@tanstack/react-query";

export function useForgotPasswordMutation() {
  return useMutation({
    mutationFn: async (email: string) => {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/callback`,
      });
      if (error) throw error;
      return true;
    },
  });
}
