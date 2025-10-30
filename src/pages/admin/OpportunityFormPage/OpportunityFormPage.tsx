import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { useWizard } from "@/hooks";
import { useDirection } from "@/hooks/useDirection";
import {
  WizardShell,
  WizardContent,
  WizardFooter,
} from "@/components/wizard/ui";
import { mapStepsToUI } from "@/components/wizard";
import { wizardStepVariants } from "@/lib/animations";
import { opportunityWizardConfig } from "./config/wizardConfig";
import {
  opportunityFormSchema,
  type OpportunityFormData,
} from "./schemas/opportunitySchema";
import { OpportunityInfoStep } from "./components/OpportunityInfoStep";
import { LocalizationStep } from "./components/LocalizationStep";

const OpportunityFormPage = () => {
  const { id } = useParams();
  const isEditMode = id && id !== "new";
  const { direction } = useDirection();

  // React Hook Form setup
  const form = useForm<OpportunityFormData>({
    resolver: zodResolver(opportunityFormSchema),
    mode: "onChange",
    defaultValues: {
      opportunityTitle: "",
      localizationTarget: 0,
    },
  });

  // Validation functions
  const validateStep1 = async () => {
    return await form.trigger(["opportunityTitle"]);
  };

  const validateStep2 = async () => {
    return await form.trigger(["localizationTarget"]);
  };

  // Wizard setup
  const ctx = useWizard(opportunityWizardConfig);

  // Update context values
  useEffect(() => {
    ctx.values.validateStep1 = validateStep1;
    ctx.values.validateStep2 = validateStep2;
    ctx.values.formData = form.getValues();
  }, [form.watch()]);

  const [stepsUi, setStepsUi] = useState<
    Awaited<ReturnType<typeof mapStepsToUI>>
  >([]);

  useEffect(() => {
    mapStepsToUI(
      ctx.steps,
      ctx.activeStep.id,
      ctx.activeStepIndex,
      ctx.values
    ).then(setStepsUi);
  }, [ctx.activeStepIndex]);

  return (
    <div className="h-screen bg-background">
      {/* Wrap everything in FormProvider so RHF inputs can access form context */}
      <FormProvider {...form}>
        <WizardShell
          stepsUi={stepsUi}
          activeStepId={ctx.activeStep.id}
          progressPercent={ctx.progressPercent}
          footerSlot={
            <WizardFooter
              actions={ctx.getActions()}
              onActionClick={ctx.runAction}
            />
          }
        >
          <WizardContent
            title="New Opportunity"
            badges={[
              {
                label: `Draft`,
                variant: "gray",
              },
            ]}
          >
            {/* Step Content Component with Animations */}
            <StepContent stepId={ctx.activeStep.id} direction={direction} />
          </WizardContent>
        </WizardShell>
      </FormProvider>
    </div>
  );
};

/**
 * StepContent - Returns the appropriate step component based on stepId
 * Note: No need to pass form prop - RHF components use useFormContext()
 */
interface StepContentProps {
  stepId: string;
  direction: "ltr" | "rtl";
}

function StepContent({ stepId, direction }: StepContentProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={stepId}
        variants={wizardStepVariants(direction)}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {stepId === "opportunity-info" && <OpportunityInfoStep />}
        {stepId === "localization" && <LocalizationStep />}
        {stepId !== "opportunity-info" && stepId !== "localization" && (
          <div>Unknown step: {stepId}</div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

export default OpportunityFormPage;
