import Field from "@/components/ui/FormField";
import PasswordField from "@/components/ui/PasswordField";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AnimatedContainer from "@/components/ui/AnimatedContainer";
import { useLoginMutation } from "../../mutations/useLoginMutation";
import {
  loginSchema,
  type LoginFormData,
} from "@/features/auth/schemas/login.schema";

export default function LoginPage() {
  const login = useLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = (data: LoginFormData) => {
    login.mutate(data);
  };

  return (
    <AnimatedContainer className="w-full flex justify-center">
      <div className="bg-[#17352E] text-[#D6F2C2] w-full max-w-md p-12 rounded-2xl">
        <h1 className="text-center text-3xl tracking-wide mb-10">Log In</h1>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
          <Field label="EMAIL" error={errors.email}>
            <input
              autoComplete="new-email"
              className="bg-transparent outline-none p-2 text-[#D6F2C2]"
              {...register("email")}
            />
          </Field>

          <PasswordField
            label="PASSWORD"
            inputProps={{
              ...register("password"),
              autoComplete: "new-password",
            }}
            error={errors.password}
          />
          <button
            type="submit"
            className="bg-[#D6F2C2] text-black rounded-full py-3
          transition-all duration-200 hover:bg-[#c9eab4] hover:shadow-lg
          active:translate-y-0  disabled:opacity-60 disabled:hover:bg-[#D6F2C2]
          disabled:hover:shadow-none disabled:cursor-not-allowed"
            disabled={login.isPending || !isValid}
          >
            {login.isPending ? "Logging In" : "Submit"}
          </button>
        </form>
        <div className="mt-8 text-center text-sm text-[#D6F2C2]/70 flex flex-col md:flex-row justify-center gap-2">
          <p>Forgot password?</p>
          <Link
            to="/password-reset"
            className="font-medium text-[#D6F2C2] underline underline-offset-4 hover:opacity-80"
          >
            Click here to reset
          </Link>
        </div>
        <div className="mt-8 text-center text-sm text-[#D6F2C2]/70 flex flex-col md:flex-row justify-center gap-2">
          <p>Don't have an account?</p>
          <Link
            to="/signup"
            className="font-medium text-[#D6F2C2] underline underline-offset-4 hover:opacity-80"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </AnimatedContainer>
  );
}
