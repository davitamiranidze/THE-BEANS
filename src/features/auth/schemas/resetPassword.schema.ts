import { z } from "zod";

export const resetPasswordSchema = z
  .object({
    password: z.string().min(1, "Password is required"),
    repeatPassword: z.string().min(1, "Password repeat is required"),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords do not match",
    path: ["repeatPassword"],
  });

export type resetPasswordFormData = z.infer<typeof resetPasswordSchema>;
