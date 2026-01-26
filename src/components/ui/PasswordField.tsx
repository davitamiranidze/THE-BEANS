import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import type { FieldError } from "react-hook-form";

type PasswordFieldProps = {
  label: string;
  error?: FieldError;
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
};

export default function PasswordField({
  label,
  error,
  inputProps,
}: PasswordFieldProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs tracking-widest">{label}</label>

      <div className="relative">
        <input
          {...inputProps}
          type={visible ? "text" : "password"}
          className="
            w-full bg-transparent outline-none
            p-2 pr-10 text-[#D6F2C2]
          "
        />

        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          className="
            absolute right-2 top-1/2 -translate-y-1/2
            text-[#D6F2C2]/70 hover:text-[#D6F2C2]
          "
          aria-label={visible ? "Hide password" : "Show password"}
        >
          {visible ? <FiEye /> : <FiEyeOff />}
        </button>
      </div>

      <div className="h-px bg-[#D6F2C2]/40" />

      {error && <p className="text-sm text-red-300">{error.message}</p>}
    </div>
  );
}