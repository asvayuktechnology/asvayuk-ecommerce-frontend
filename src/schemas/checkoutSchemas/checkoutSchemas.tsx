import { z } from "zod";

export const checkoutSchema = z.object({
  // Personal Details
  firstName: z
    .string()
    .trim()
    .min(2, "First name must be at least 2 characters"),
  lastName: z
    .string()
    .trim()
    .min(2, "Last name must be at least 2 characters"),
  email: z.string().trim().email("Invalid email address"),
  contact: z
    .string()
    .trim()
    .min(7, "Phone number is too short")
    .max(15, "Phone number is too long"),

  // Shipping Details
  address: z.string().trim().min(5, "Address is required"),
  zipCode: z
    .string()
    .trim()
    .regex(/^\d{4,6}$/, "Invalid zip code"),
  country: z.string().trim().min(1, "Country is required"),
  state: z.string().trim().min(1, "State is required"),
  city: z.string().trim().min(1, "City is required"),

  // Payment
  paymentMethod: z.enum(["Cash", "Card", "RazorPay"], {
    message: "Please select a payment method", // ✅ use 'message', not 'required_error'
  }),
});

// ✅ export type for React Hook Form
export type CheckoutFormValues = z.infer<typeof checkoutSchema>;
