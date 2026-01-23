export default function PasswordResetSent() {
  return (
    <div>
      <h1 className="text-center text-3xl tracking-wide mb-6">
        Check your email
      </h1>

      <p className="text-sm text-[#D6F2C2]/80 mb-8 text-center">
        If an account exists for that email, we sent a password reset link.
      </p>

      <div className="grid gap-3">
        <button
          type="button"
          className="bg-[#D6F2C2] text-black rounded-full py-3 w-full disabled:opacity-60"
        >
          Resend email
        </button>

        <button
          type="button"
          className="bg-[#D6F2C2] text-black rounded-full py-3 w-full disabled:opacity-60"
        >
          Change email
        </button>

        <a
          href="/login"
          className="text-center underline text-[#D6F2C2]/90 hover:text-[#D6F2C2]"
        >
          Back to login
        </a>
      </div>
    </div>
  );
}
