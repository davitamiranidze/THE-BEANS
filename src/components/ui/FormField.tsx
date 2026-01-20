import type { FieldError } from "react-hook-form";

type FieldProps = {
  label: string;
  error?: FieldError;
  children: React.ReactNode;
};

export default function Field({ label, error, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs tracking-widest">{label}</label>

      {children}

      <div className="h-px bg-[#D6F2C2]/40" />

      {error && <p className="text-sm text-red-300">{error.message}</p>}
    </div>
  );
}
