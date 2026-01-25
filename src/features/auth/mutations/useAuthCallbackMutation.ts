import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { supabase } from "@/lib/supabaseClient";
import { authKeys } from "../authKeys";

export function useAuthCallbackMutation() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const hash = new URLSearchParams(window.location.hash.slice(1));
      const search = new URLSearchParams(window.location.search);

      const type = hash.get("type") ?? search.get("type");

      const { data, error } = await supabase.auth.getSession();
      if (error) throw error;

      return { session: data.session, type };
    },

    onSuccess: ({ session, type }) => {
      // 1️⃣ Password recovery flow
      if (type === "recovery") {
        toast.success("You can now reset your password");
        navigate("/reset-password", { replace: true });
        return;
      }

      // 2️⃣ Google OAuth → already logged in
      if (session) {
        queryClient.setQueryData(authKeys.session, session);
        toast.success("Logged in successfully");
        navigate("/", { replace: true });
        return;
      }

      // 3️⃣ Email signup confirm → go login
      toast.success("Email verified! You can now log in");
      navigate("/login", { replace: true });
    },

    onError: () => {
      toast.error("Something went wrong");
      navigate("/login", { replace: true });
    },
  });
}
