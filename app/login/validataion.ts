
import { z } from "zod";

export const loginUserSchema = z.object({
    username: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

export type LoginUserFormData = z.infer<typeof loginUserSchema>;