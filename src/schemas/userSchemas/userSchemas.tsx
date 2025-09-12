import { z } from "zod";

export const userSchemas = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  address: z.string().min(2, "Please enter address"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number too long"),
  image: z
    .any()
    .refine((file) => file && file[0] && ["image/jpeg", "image/png"].includes(file[0].type), {
      message: "Only .jpeg and .png images are accepted",
    }),
});
