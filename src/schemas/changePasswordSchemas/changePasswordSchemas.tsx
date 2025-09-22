import { z } from "zod";

export const changePasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
  currentPassword: z
    .string()
    .min(6, "Current password must be at least 6 characters"),
  newPassword: z.string().min(6, "New password must be at least 6 characters"),
});
