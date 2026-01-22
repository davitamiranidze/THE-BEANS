import { z } from "zod";

export const passwordResetSchema = z.object({
  email: z.email("Enter a valid email").min(1, "Email is required"),
});

export type PasswordResetFormData = z.infer<typeof passwordResetSchema>;
