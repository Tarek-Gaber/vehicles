import { z } from "zod";

// Step 1 schema
export const step1Schema = z.object({
  opportunityTitle: z.string().min(1, "Opportunity name is required"),
});

// Step 2 schema
export const step2Schema = z.object({
  localizationTarget: z
    .number()
    .min(1, "Localization target is required")
    .max(100, "Target must be between 1 and 100"),
});

// Full form schema
export const opportunityFormSchema = z.object({
  ...step1Schema.shape,
  ...step2Schema.shape,
});

export type OpportunityFormData = z.infer<typeof opportunityFormSchema>;
