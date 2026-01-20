import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { supabase } from "@/lib/supabaseClient";

export default function AuthCallbackPage() {
  const navigate = useNavigate();
  const ranRef = useRef(false);

  useEffect(() => {
    if (ranRef.current) return;
    ranRef.current = true;

    (async () => {
      // This is the key step for ?code=... links
      const { error } = await supabase.auth.exchangeCodeForSession(
        window.location.href,
      );

      if (error) {
        toast.error("Verification failed. Try again or request a new email.");
        navigate("/login", { replace: true });
        return;
      }

      toast.success("Email verified! You can now log in", { duration: 4000 });
      navigate("/login", { replace: true });
    })();
  }, [navigate]);

  return (
    <div className="min-h-screen grid place-items-center">Verifying...</div>
  );
}
