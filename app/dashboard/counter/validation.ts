
import { z } from "zod";

export const CounterSchema = z.object({
    title: z.string().min(3, "Counter title must be at least 3 characters"),
    end: z.number().min(1, "Counter end value must be at least 1"),
    suffix: z.string().min(1, "Counter suffix must be at least 1 character"),
    icon: z.string().min(3, "Counter icon must be at least 3 characters"),
});

export type CounterFormData = z.infer<typeof CounterSchema>;