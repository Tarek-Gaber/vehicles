import RHFInput from "@/components/RHFInputs/RHFInput";

/**
 * LocalizationStep - Step 2: Localization Details
 * Uses RHFInput components that connect via FormProvider
 */
export function LocalizationStep() {
  return (
    <RHFInput
      name="localizationTarget"
      label="Localization Target (%)"
      type="number"
      placeholder="Enter target percentage"
      required
    />
  );
}
