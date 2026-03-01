
import { z } from "zod";

export const EventSchema = z.object({
    title: z.string().min(2, "title must be at least 3 characters"),
    location: z.string().min(3, "location must be at least 1 character"),
    imageFile: z.any().refine((files) => files?.length === 1, "Image is required image size must be 600 * 370 pixels")
        .refine((files) => files?.[0]?.size <= 2 * 1024 * 1024, "Max file size is 2MB")
        .refine((files) =>
            ["image/jpeg", "image/png", "image/webp"].includes(files?.[0]?.type),
            "Only JPG, PNG, WEBP allowed"),
    eventDate: z.string().min(1, "Event date is required")
        .refine((date) => !isNaN(Date.parse(date)), "Invalid date"),
    startTime: z.string().min(1, "Start time is required"),
    endTime: z.string().min(1, "End time is required"),

})
    .refine((data) => {
        const start = new Date(`${data.eventDate}T${data.startTime}`);
        const end = new Date(`${data.eventDate}T${data.endTime}`);
        return end > start;
    }, {
        message: "End time must be greater than start time",
        path: ["endTime"],
    });

export type EventFormData = z.infer<typeof EventSchema>;


export const EditEventSchema = z.object({
    title: z.string().min(2, "title must be at least 3 characters"),
    location: z.string().min(3, "location must be at least 1 character"),
    imageFile: z.any().optional().refine((files) => !files || files.length === 0 || files.length === 1,
        "Only one file allowed")
        .refine((files) => !files || files.length === 0 || files[0]?.size <= 2 * 1024 * 1024,
            "Max file size is 2MB")
        .refine((files) => !files || files.length === 0 ||
            ["image/jpeg", "image/png", "image/webp"].includes(files[0]?.type),
            "Only JPG, PNG, WEBP allowed"),
    eventDate: z.string().min(1, "Event date is required")
        .refine((date) => !isNaN(Date.parse(date)), "Invalid date"),
    startTime: z.string().min(1, "Start time is required"),
    endTime: z.string().min(1, "End time is required"),

})
    .refine((data) => {
        const start = new Date(`${data.eventDate}T${data.startTime}`);
        const end = new Date(`${data.eventDate}T${data.endTime}`);
        return end > start;
    }, {
        message: "End time must be greater than start time",
        path: ["endTime"],
    });

export type EditEventFormData = z.infer<typeof EditEventSchema>;