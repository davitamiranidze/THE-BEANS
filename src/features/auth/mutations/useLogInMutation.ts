import { useMutation } from "@tanstack/react-query";
import { supabase } from "@/lib/supabaseClient";
import type { LoginFormData } from "../schemas/login.schema";
import { useNavigate } from "react-router-dom";
import { showToast } from "@/components/ui/CustomToast";

export function useLoginMutation() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (form: LoginFormData) => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: form.email,
        password: form.password,
      });

      if (error) throw error;

      return data;
    },

    onSuccess: () => {
      showToast("Welcome back 👋", "success");
      navigate("/", { replace: true });
    },

    onError: (error: any) => {
      const msg = (error?.message || "").toLowerCase();

      if (msg.includes("email not confirmed")) {
        showToast("Please verify your email before logging in.", "info");
        navigate("/verify-email");
        return;
      }

      if (msg.includes("invalid login credentials")) {
        showToast("Invalid email or password.", "error");
        return;
      }

      showToast(error?.message || "Login failed", "error");
    },
  });
}
