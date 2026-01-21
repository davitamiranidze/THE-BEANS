import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { supabase } from "@/lib/supabaseClient";

async function finalizeAuthFromUrl() {
  // Works for hash flow (#access_token=...) and also harmless otherwise
  const { data, error } = await supabase.auth.getSession();
  if (error) throw error;
  return data.session; // can be null, that's okay
}

export default function AuthCallbackPage() {
  const navigate = useNavigate();
  const ranRef = useRef(false);

  const finalizeMutation = useMutation({
    mutationFn: finalizeAuthFromUrl,
    onSuccess: () => {
      toast.success("Email verified! You can now log in", { duration: 4000 });
      navigate("/login", { replace: true });
    },
    onError: () => {
      toast.error("something went wrong");
    },
  });

  useEffect(() => {
    if (ranRef.current) return;
    ranRef.current = true;

    finalizeMutation.mutate();
  }, [finalizeMutation]);

  return (
    <div className="min-h-screen grid place-items-center">Verifying...</div>
  );
}
