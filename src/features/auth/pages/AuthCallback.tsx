import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function AuthCallbackPage() {
  const navigate = useNavigate();
  const ranRef = useRef(false);

  useEffect(() => {
    if (ranRef.current) return;
    ranRef.current = true;

    toast.success("Email verified, You can now log in", { duration: 4000 });
    navigate("/login", { replace: true });
  }, [navigate]);

  return (
    <div className="min-h-screen grid place-items-center">
      Verifying...
    </div>
  );
}
