import { useMutation } from "@tanstack/react-query";
import { supabase } from "@/lib/supabaseClient";
import type { SignUpFormData } from "../schemas/signup.schema";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

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
      toast.success(
        "If an account exists for this email,please log in. Otherwise check your email for verification",
        { duration: 10000 },
      );

      navigate("/verify-email", {
        state: { email: form.email },
        replace: true,
      });
    },
    onError: (error: Error) => {
      toast.error(error.message || "Sign up failed");
    },
  });
}
