import { supabase } from "@/lib/supabaseClient";
import { useMutation } from "@tanstack/react-query";

export function useForgotPasswordMutation() {
  return useMutation({
    mutationFn: async (email: string) => {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/password-reset`,
      });
      if (error) throw error;
      return true;
    },
  });
}
