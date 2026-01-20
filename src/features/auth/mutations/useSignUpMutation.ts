import { useMutation } from "@tanstack/react-query";
import { supabase } from "@/lib/supabaseClient";
import type { SignUpFormData } from "../schemas/signup.schema";
import { useNavigate } from "react-router-dom";
import { showToast } from "@/components/ui/CustomToast";

export function useSignUpMutation() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (form: SignUpFormData) => {
      const { data, error } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) throw error;
      return data;
    },

    onSuccess: (_data, form) => {
      showToast(
        "If an account exists for this email,please log in. Otherwise check your email for verification",
        "success"
      );

      navigate("/verify-email", {
        state: { email: form.email },
        replace: true,
      });
    },
  });
}
