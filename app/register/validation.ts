
import { z } from "zod";

export const registerUserSchema = z.object({
    username: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    firstName: z.string().min(3, "First name must be at least 3 characters"),
    lastName: z.string().min(3, "Last name must be at least 3 characters"),
    avatar: z.any().refine((files) => files?.length === 1, "Avatar is required")
        .refine((files) => files?.[0]?.size <= 2 * 1024 * 1024, "Max file size is 2MB")
        .refine((files) => ["image/jpeg", "image/png", "image/webp"].includes(files?.[0]?.type),
            "Only JPG, PNG, WEBP allowed"
        ),
    designation: z.string().min(3, "Designation must be at least 3 characters"),
    description: z.string().min(100, "Description must be at least 100 characters"),
});

export type RegisterUserFormData = z.infer<typeof registerUserSchema>;