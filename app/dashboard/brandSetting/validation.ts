
import { z } from "zod";

export const BrandSchema = z.object({
    brandName: z.string().min(3, "Brand name must be at least 3 characters"),
    brandLogo: z.any().optional().refine((files) => !files || files.length === 0 || files.length === 1,
        "Only one file allowed")
        .refine((files) => !files || files.length === 0 || files[0]?.size <= 2 * 1024 * 1024,
            "Max file size is 2MB")
        .refine((files) => !files || files.length === 0 ||
            ["image/jpeg", "image/png", "image/webp"].includes(files[0]?.type),
            "Only JPG, PNG, WEBP allowed"),
    contactEmail: z.string().email("Invalid email address"),
    contactPhone: z.string().min(10, "Contact phone must be at least 10 characters"),
    address: z.string().min(10, "Address must be at least 10 characters"),
});

export type BrandFormData = z.infer<typeof BrandSchema>;