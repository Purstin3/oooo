import { cva, type VariantProps } from "class-variance-authority";
import { TrendingDown, TrendingUp, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const badgeDeltaVariants = cva(
  "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
  {
    variants: {
      deltaType: {
        increase: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
        moderateIncrease: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
        decrease: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
        moderateDecrease: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
        unchanged: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
      },
      size: {
        sm: "text-xs",
        md: "text-sm",
      },
    },
    defaultVariants: {
      deltaType: "unchanged",
      size: "sm",
    },
  }
);

export interface BadgeDeltaProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeDeltaVariants> {
  showIcon?: boolean;
}

export function BadgeDelta({
  className,
  deltaType,
  size,
  showIcon = true,
  children,
  ...props
}: BadgeDeltaProps) {
  return (
    <span
      className={cn(badgeDeltaVariants({ deltaType, size }), className)}
      {...props}
    >
      {showIcon && (
        <>
          {deltaType === "increase" || deltaType === "moderateIncrease" ? (
            <TrendingUp className="mr-1 h-3 w-3" />
          ) : deltaType === "decrease" || deltaType === "moderateDecrease" ? (
            <TrendingDown className="mr-1 h-3 w-3" />
          ) : (
            <Minus className="mr-1 h-3 w-3" />
          )}
        </>
      )}
      {children}
    </span>
  );
}