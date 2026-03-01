
import { z } from "zod";

export const ContactSchema = z.object({
    name: z.string().min(3, "name must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "number must be at least 10 digit"),
    subject: z.string().min(3, "subject must be at least 3 characters"),
    message: z.string().min(10, "message must be at least 3 characters"),
});

export type ContactFormData = z.infer<typeof ContactSchema>;