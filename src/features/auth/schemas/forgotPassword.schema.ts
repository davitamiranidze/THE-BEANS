import { z } from "zod";

export const forgotPasswordSchema = z.object({
  email: z.email("Enter a valid email").min(1, "Email is required"),
});

export type forgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;
