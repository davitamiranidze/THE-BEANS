import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { useResendSignupEmailMutation } from "@/features/auth/mutations/useResendSignupEmailMutation";
import AnimatedContainer from "@/components/ui/AnimatedContainer";

export default function VerifyEmailPage() {
  const location = useLocation();
  const email = location.state?.email as string | undefined;

  const [cooldown, setCooldown] = useState(0);

  const resendMutation = useResendSignupEmailMutation();

  const resendEmail = async () => {
    if (!email || cooldown > 0 || resendMutation.isPending) return;

    try {
      await resendMutation.mutateAsync(email);
      toast.success("Email sent successfully", { duration: 4000 });
      setCooldown(60);
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setInterval(
      () => setCooldown((p) => Math.max(0, p - 1)),
      1000,
    );
    return () => clearInterval(timer);
  }, [cooldown]);

  return (
    <AnimatedContainer className="w-full flex justify-center">
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
          disabled={!email || resendMutation.isPending || cooldown > 0}
          className="
          w-full rounded-full border border-[#D6F2C2]/40 py-3
          transition hover:bg-[#D6F2C2]/10
          disabled:opacity-60 disabled:cursor-not-allowed
        "
        >
          {resendMutation.isPending
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
    </AnimatedContainer>
  );
}
