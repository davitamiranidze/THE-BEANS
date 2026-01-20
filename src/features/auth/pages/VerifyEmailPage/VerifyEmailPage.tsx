import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

export default function VerifyEmailPage() {
  const location = useLocation();
  const email = location.state?.email as string | undefined;

  const [sending, setSending] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  const resendEmail = async () => {
    if (!email || cooldown > 0 || sending) return;

    setSending(true);

    const { error } = await supabase.auth.resend({
      type: "signup",
      email,
    });

    setSending(false);

    if (error) {
      toast.error(error.message || "Something went wrong");
      return;
    }

    toast.success("Email sent successfully", { duration: 4000 });
    setCooldown(60);
  };

  useEffect(() => {
    if (cooldown <= 0) return;

    const timer = setInterval(() => {
      setCooldown((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [cooldown]);

  return (
    <div className="bg-[#17352E] text-[#D6F2C2] max-w-md w-full rounded-2xl p-10 text-center space-y-6">
      <h1 className="text-2xl">Check your email</h1>

      <p className="text-sm text-[#D6F2C2]/80">
        We’ve sent you a confirmation link
        {email && (
          <>
            {" "}
            to <span className="font-medium">{email}</span>
          </>
        )}
        <br />
        Click it to activate your account.
      </p>

      <p className="text-xs text-[#D6F2C2]/60">
        Didn’t see it? Check your spam or junk folder.
      </p>

      <button
        onClick={resendEmail}
        disabled={!email || sending || cooldown > 0}
        className="
          w-full rounded-full border border-[#D6F2C2]/40 py-3
          transition hover:bg-[#D6F2C2]/10
          disabled:opacity-60 disabled:cursor-not-allowed
        "
      >
        {sending
          ? "Sending..."
          : cooldown > 0
          ? `Resend email (${cooldown}s)`
          : "Resend email"}
      </button>

      <Link
        to="/login"
        className="block text-sm underline underline-offset-4 hover:opacity-80"
      >
        Back to login
      </Link>
    </div>
  );
}
