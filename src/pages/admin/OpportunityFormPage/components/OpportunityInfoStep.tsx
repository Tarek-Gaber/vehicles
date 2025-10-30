import RHFInput from "@/components/RHFInputs/RHFInput";

/**
 * OpportunityInfoStep - Step 1: Opportunity Information
 * Uses RHFInput components that connect via FormProvider
 */
export function OpportunityInfoStep() {
  return (
    <RHFInput
      name="opportunityTitle"
      label="Opportunity Name"
      placeholder="Enter opportunity name"
      required
    />
  );
}
