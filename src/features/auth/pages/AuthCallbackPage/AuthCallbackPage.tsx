import { useEffect, useRef } from "react";
import { useAuthCallbackMutation } from "../../mutations/useAuthCallbackMutation";

export default function AuthCallbackPage() {
  const ranRef = useRef(false);
  const authCallback = useAuthCallbackMutation();

  useEffect(() => {
    if (ranRef.current) return;
    ranRef.current = true;

    authCallback.mutate();
  }, [authCallback]);

  return (
    <div className="min-h-screen grid place-items-center">Verifying...</div>
  );
}
