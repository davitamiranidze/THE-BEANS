import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type SignUpFormData, signUpSchema } from "../../schemas/signup.schema";
import { FaGoogle } from "react-icons/fa";
import Field from "@/components/ui/FormField";
import { Link } from "react-router-dom";
import { useSignUpMutation } from "../../mutations/useSignUpMutation";
import PasswordField from "@/components/ui/PasswordField";
import { motion } from "framer-motion";

export default function SignUpPage() {
  const signUp = useSignUpMutation();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: SignUpFormData) => {
    signUp.mutate(data);
  };

  return (
    <motion.div
      className="bg-[#17352E] text-[#D6F2C2] w-full max-w-md p-12 rounded-2xl"
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h1 className="text-center text-3xl tracking-wide mb-10">Sign Up</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <Field label="EMAIL" error={errors.email}>
          <input
            type="email"
            {...register("email")}
            autoComplete="email"
            className="bg-transparent outline-none p-2 text-[#D6F2C2] w-full"
          />
        </Field>

        <PasswordField
          label="PASSWORD"
          error={errors.password}
          inputProps={{
            ...register("password"),
            autoComplete: "new-password",
          }}
        />

        <PasswordField
          label="REPEAT PASSWORD"
          error={errors.confirmPassword}
          inputProps={{
            ...register("confirmPassword"),
            autoComplete: "new-password",
          }}
        />

        <button
          type="submit"
          className="bg-[#D6F2C2] text-black rounded-full py-3
          transition-all duration-200 hover:bg-[#c9eab4] hover:shadow-lg
          active:translate-y-0 disabled:opacity-60 disabled:hover:bg-[#D6F2C2]
          disabled:hover:shadow-none disabled:cursor-not-allowed"
          disabled={signUp.isPending || !isValid}
        >
          {signUp.isPending ? "Creating..." : "Submit"}
        </button>

        <span className="text-xs uppercase tracking-widest text-[#D6F2C2]/60 text-center">
          OR
        </span>

        <button
          type="button"
          className="w-full flex items-center justify-center gap-3
          rounded-full border border-[#D6F2C2]/40
          py-3 text-[#D6F2C2]
          transition hover:bg-[#D6F2C2]/10"
        >
          <FaGoogle className="text-lg" />
          <span className="text-sm tracking-wide">Continue with Google</span>
        </button>
      </form>

      <div className="mt-8 text-center text-sm text-[#D6F2C2]/70">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-medium text-[#D6F2C2] underline underline-offset-4 hover:opacity-80"
        >
          Log in
        </Link>
      </div>
    </motion.div>
  );
}
