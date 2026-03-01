
import { z } from "zod";

export const VolunteerSchema = z.object({
    firstName: z.string().min(2, "first Name must be at least 3 characters"),
    lastName: z.string().min(3, "last Name must be at least 1 character"),
    post: z.string().min(3, "post must be at least 3 characters"),
    facebookUrl: z.string().optional(),
    twitterUrl: z.string().optional(),
    instaUrl: z.string().optional(),
    youtubeUrl: z.string().optional(),
    imageFile: z.any().refine((files) => files?.length === 1, "Image is required size must be 300 * 300 pixels")
        .refine((files) => files?.[0]?.size <= 2 * 1024 * 1024, "Max file size is 2MB")
        .refine((files) =>
            ["image/jpeg", "image/png", "image/webp"].includes(files?.[0]?.type),
            "Only JPG, PNG, WEBP allowed")
});

export type VolunteerFormData = z.infer<typeof VolunteerSchema>;

export const EditVolunteerSchema = z.object({
    firstName: z.string().min(2, "first Name must be at least 3 characters"),
    lastName: z.string().min(3, "last Name must be at least 1 character"),
    post: z.string().min(3, "post must be at least 3 characters"),
    facebookUrl: z.string().optional(),
    twitterUrl: z.string().optional(),
    instaUrl: z.string().optional(),
    youtubeUrl: z.string().optional(),
    imageFile: z.any().optional().refine((files) => !files || files.length === 0 || files.length === 1,
        "Only one file allowed")
        .refine((files) => !files || files.length === 0 || files[0]?.size <= 2 * 1024 * 1024,
            "Max file size is 2MB")
        .refine((files) => !files || files.length === 0 ||
            ["image/jpeg", "image/png", "image/webp"].includes(files[0]?.type),
            "Only JPG, PNG, WEBP allowed"),
});

export type EditVolunteerFormData = z.infer<typeof EditVolunteerSchema>;