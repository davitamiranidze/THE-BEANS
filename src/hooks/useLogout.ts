import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { supabase } from "@/lib/supabaseClient";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["auth", "logout"],
    mutationFn: async () => {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    },
    onSuccess: async () => {
      toast("Logged out");

      // clear cached user/session queries (adjust keys to your app)
      await queryClient.invalidateQueries({ queryKey: ["auth"] });
      await queryClient.invalidateQueries({ queryKey: ["session"] });
      await queryClient.invalidateQueries({ queryKey: ["user"] });

      // optional: nuke everything
      // queryClient.clear();

      navigate("/login", { replace: true });
    },
    onError: (err: Error) => {
      toast.error(err?.message || "Logout failed");
    },
  });
}
