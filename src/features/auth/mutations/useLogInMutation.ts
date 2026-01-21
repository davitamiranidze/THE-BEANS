import { useMutation } from "@tanstack/react-query";
import { supabase } from "@/lib/supabaseClient";
import type { LoginFormData } from "../schemas/login.schema";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

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
      toast.success("Welcome back 👋");
      navigate("/", { replace: true });
    },

    onError: (error: Error) => {
      const msg = (error?.message || "").toLowerCase();

      if (msg.includes("email not confirmed")) {
        toast.error("Please verify your email before logging in.");
        navigate("/verify-email");
        return;
      }

      if (msg.includes("invalid login credentials")) {
        toast.error("Invalid email or password.");
        return;
      }

      toast.error(error?.message || "Login failed");
    },
  });
}
