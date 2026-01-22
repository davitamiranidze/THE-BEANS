import { supabase } from "@/lib/supabaseClient";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { authKeys } from "../authKeys";

export default function useLogoutMutation() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    },
    onError: (error: Error) => {
      toast.error(error.message || "Logout failed");
      return;
    },
    onSuccess: () => {
      queryClient.setQueryData(authKeys.session, null);
      toast.success("Logged out sucessfully");
      navigate("/login");
    },
  });
}
