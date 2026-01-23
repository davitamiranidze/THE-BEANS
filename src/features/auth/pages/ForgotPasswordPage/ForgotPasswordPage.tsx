import AnimatedContainer from "@/components/ui/AnimatedContainer";
import Field from "@/components/ui/FormField";
import { useForm } from "react-hook-form";
import {
  passwordResetSchema,
  type PasswordResetFormData,
} from "../../schemas/passwordReset.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForgotPasswordMutation } from "../../mutations/useForgotPasswordMutation";
import { useState } from "react";
import PasswordResetSent from "./PasswordResetSent";

export default function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const forgotPassword = useForgotPasswordMutation();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<PasswordResetFormData>({
    resolver: zodResolver(passwordResetSchema),
    mode: "onChange",
  });

  const onSubmit = (data: PasswordResetFormData) => {
    forgotPassword.mutate(data.email, {
      onSuccess: () => setSubmitted(true),
      onError: () => setSubmitted(true),
    });
  };

  return (
    <AnimatedContainer className="bg-[#17352E] text-[#D6F2C2] w-full max-w-md p-12 rounded-2xl">
      {submitted ? (
        <PasswordResetSent />
      ) : (
        <>
          <h1 className="text-center text-3xl tracking-wide mb-10">
            Forgot Password?
          </h1>
          <p className="text-sm text-[#D6F2C2]/80 mb-10 text-center">
            Please provide the mail associated with your account
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Field label="EMAIL" error={errors.email}>
              <input
                autoComplete="email"
                className="bg-transparent outline-none p-2 text-[#D6F2C2]"
                {...register("email")}
              />
            </Field>
            <div className="mt-10">
              <button
                disabled={!isValid || forgotPassword.isPending}
                type="submit"
                className="bg-[#D6F2C2] text-black rounded-full py-3
          transition-all duration-200 hover:bg-[#c9eab4] hover:shadow-lg
          active:translate-y-0  disabled:opacity-60 disabled:hover:bg-[#D6F2C2]
          disabled:hover:shadow-none disabled:cursor-not-allowed w-full"
              >
                {forgotPassword.isPending ? "Loading" : "Submit"}
              </button>
            </div>
          </form>
        </>
      )}
    </AnimatedContainer>
  );
}
