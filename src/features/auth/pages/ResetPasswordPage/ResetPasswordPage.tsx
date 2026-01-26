import AnimatedContainer from "@/components/ui/AnimatedContainer";
import PasswordField from "@/components/ui/PasswordField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  resetPasswordSchema,
  type resetPasswordFormData,
} from "../../schemas/resetPassword.schema";

export default function ResetPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<resetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    mode: "onChange",
  });
  return (
    <AnimatedContainer>
      <div className="bg-[#17352E] text-[#D6F2C2] w-full max-w-md p-12 rounded-2xl">
        <h1 className="text-center text-3xl tracking-wide mb-10">
          Reset Password
        </h1>
        <form className="flex flex-col gap-6">
          <PasswordField
            label="New password"
            inputProps={{
              ...register("password"),
              autoComplete: "password",
            }}
            error={errors.password}
          ></PasswordField>
          <PasswordField
            label="Repeat new password"
            inputProps={{
              ...register("repeatPassword"),
              autoComplete: "repeatPassword",
            }}
            error={errors.repeatPassword}
          ></PasswordField>
          <button
            disabled={!isValid}
            type="submit"
            className="bg-[#D6F2C2] text-black rounded-full py-3
          transition-all duration-200 hover:bg-[#c9eab4] hover:shadow-lg
          active:translate-y-0  disabled:opacity-60 disabled:hover:bg-[#D6F2C2]
          disabled:hover:shadow-none disabled:cursor-not-allowed"
          >
            Submit
          </button>
        </form>
      </div>
    </AnimatedContainer>
  );
}
