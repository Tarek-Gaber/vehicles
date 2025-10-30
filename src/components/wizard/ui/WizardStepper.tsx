import { Check, XCircle, Minus } from "@untitledui/icons";
import { cn } from "@/lib/utils";
import type { StepUIConfig } from "../core/types";

export interface WizardStepperProps {
  items: StepUIConfig[];
  activeId: string;
  onItemClick?(id: string): void;
  className?: string;
}

/**
 * WizardStepper - Vertical step navigation list
 * RTL-aware: Uses start-* positioning and gap-* for spacing
 */
export function WizardStepper({
  items,
  activeId,
  onItemClick,
  className,
}: WizardStepperProps) {
  return (
    <nav
      role="list"
      aria-label="Wizard steps"
      className={cn("flex flex-col gap-1", className)}
    >
      {items.map((item, index) => {
        const isActive = item.id === activeId;
        const isClickable = item.clickable && onItemClick && !isActive;
        const showConnector = index < items.length - 1;

        return (
          <div key={item.id} className="relative">
            <button
              type="button"
              disabled={!isClickable}
              onClick={() => isClickable && onItemClick(item.id)}
              aria-current={isActive ? "step" : undefined}
              aria-disabled={item.status === "disabled"}
              className={cn(
                "flex w-full items-start gap-3 rounded-lg pb-6 text-start transition-colors",
                isClickable && "cursor-pointer",
                !isClickable && "cursor-default"
              )}
            >
              {/* Status Icon/Number */}
              <div className="relative shrink-0">
                <StepIcon status={item.status} />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div
                  className={cn(
                    "font-semibold transition-colors leading-6",
                    isActive && "text-primary-700 dark:text-primary-400",
                    item.status === "completed" &&
                      "text-gray-700 dark:text-gray-400",
                    item.status === "error" && "text-red-700 dark:text-red-400",
                    item.status === "disabled" && "text-muted-foreground/50",
                    item.status === "pending" &&
                      "text-gray-700 dark:text-gray-400",
                    item.status === "skipped" && "text-muted-foreground"
                  )}
                >
                  {item.title}
                </div>
                {item.subtitle && (
                  <div className="text-gray-600 leading-6">{item.subtitle}</div>
                )}
              </div>
            </button>

            {/* Connector Line */}
            {showConnector && (
              <div
                className="absolute top-[33px] start-[15px] w-[2px] h-[calc(100%-31px)] bg-[#E9EAEB] rounded-full"
                aria-hidden="true"
              />
            )}
          </div>
        );
      })}
    </nav>
  );
}

/**
 * StepIcon - Renders the appropriate icon based on step status
 */
function StepIcon({ status }: { status: StepUIConfig["status"] }) {
  const baseClasses = "flex size-8 items-center justify-center rounded-full";

  switch (status) {
    case "completed":
      return (
        <div
          className={cn(
            baseClasses,
            "bg-primary text-primary-foreground dark:bg-primary-950/40 dark:text-primary-400"
          )}
        >
          <Check className="size-4" />
        </div>
      );

    case "error":
      return (
        <div
          className={cn(
            baseClasses,
            "bg-red-100 text-red-700 dark:bg-red-950/40 dark:text-red-400"
          )}
        >
          <XCircle className="size-4" />
        </div>
      );

    case "skipped":
      return (
        <div
          className={cn(
            baseClasses,
            "bg-muted text-muted-foreground border border-border"
          )}
        >
          <Minus className="size-4" />
        </div>
      );

    case "active":
      return (
        <div
          className={cn(
            baseClasses,
            "size-7.5 bg-primary text-primary-foreground ring-2 ring-primary-600 border border-[2px] border-white",
            "dark:bg-primary-950/40 dark:text-primary-400 dark:ring-primary-400/30"
          )}
        >
          <span className="w-[10px] h-[10px] rounded-full bg-primary-foreground"></span>
        </div>
      );

    case "disabled":
      return (
        <div
          className={cn(
            baseClasses,
            "bg-muted/50 text-muted-foreground/50 border border-border/50"
          )}
        >
          <span className="w-[10px] h-[10px] rounded-full bg-muted/50"></span>
        </div>
      );

    case "pending":
    default:
      return (
        <div
          className={cn(
            baseClasses,
            "bg-white border border-[2px] border-[#E9EAEB]"
          )}
        >
          <span className="w-[10px] h-[10px] rounded-full bg-[#E9EAEB]"></span>
        </div>
      );
  }
}
