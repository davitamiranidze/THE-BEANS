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
      const { data, error } = await supabase.auth.getSession();
      if (error) throw error;
      return data.session;
    },
    onSuccess: (session) => {
      if (session) {
        queryClient.setQueryData(authKeys.session, session);
        toast.success("Email verified! You can now log in", { duration: 4000 });
      } else {
        // sometimes callback doesn’t give a session; user can just log in
        toast.success("You can now log in", { duration: 3000 });
      }
      navigate("/login", { replace: true });
    },
    onError: () => {
      toast.error("Something went wrong");
      navigate("/login", { replace: true });
    },
  });
}
