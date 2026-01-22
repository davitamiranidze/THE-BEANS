import { useMutation } from "@tanstack/react-query";
import { supabase } from "@/lib/supabaseClient";

export function useResendSignupEmailMutation() {
  return useMutation({
    mutationFn: async (email: string) => {
      const { error } = await supabase.auth.resend({
        type: "signup",
        email,
      });
      if (error) throw error;
    },
  });
}
