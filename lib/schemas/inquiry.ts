import { z } from "zod";

export const inquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  parent: z.string().min(1, "Parent name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Valid email is required"),
  className: z.string().min(1, "Class information is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type InquirySchema = z.infer<typeof inquirySchema>;
