import { supabase } from "@/lib/supabaseClient";
import { useMutation } from "@tanstack/react-query";

export function usePasswordResetMutation() {
  return useMutation({
    mutationFn: async (email: string) => {
      const { error } = await supabase.auth.resetPasswordForEmail(email);
      if (error) throw error;
      return true;
    },
  });
}
