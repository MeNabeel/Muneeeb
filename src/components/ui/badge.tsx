import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold tracking-wider uppercase transition-colors focus:outline-none focus:ring-1 focus:ring-[#8FD3C7]",
  {
    variants: {
      variant: {
        default:
          "border-[rgba(143,211,199,0.3)] bg-[rgba(31,122,112,0.2)] text-[#8FD3C7]",
        mint:
          "border-[#8FD3C7] bg-[#8FD3C7] text-[#0B0F0E]",
        beige:
          "border-[#E9DDC8] bg-[rgba(233,221,200,0.12)] text-[#E9DDC8]",
        outline:
          "border-[rgba(143,211,199,0.25)] text-[#A9B2AE] bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
