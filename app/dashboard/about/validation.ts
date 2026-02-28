
import { z } from "zod";

export const AboutSchema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters"),
    imageFile: z.any().optional().refine((files) => !files || files.length === 0 || files.length === 1,
        "Only one file allowed")
        .refine((files) => !files || files.length === 0 || files[0]?.size <= 2 * 1024 * 1024,
            "Max file size is 2MB")
        .refine((files) => !files || files.length === 0 ||
            ["image/jpeg", "image/png", "image/webp"].includes(files[0]?.type),
            "Only JPG, PNG, WEBP allowed"),
    subTitle: z.string().min(10, "Subtitle must be at least 10 characters"),
    description: z.string().min(100, "Description must be at least 100 characters"),
});

export type AboutFormData = z.infer<typeof AboutSchema>;