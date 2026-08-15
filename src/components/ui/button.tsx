import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#8FD3C7] disabled:pointer-events-none disabled:opacity-50 tracking-wider uppercase cursor-pointer select-none",
  {
    variants: {
      variant: {
        default:
          "bg-[#1F7A70] text-[#F7F4ED] hover:bg-[#289b8e] shadow-md hover:shadow-[0_0_20px_rgba(31,122,112,0.4)]",
        mint:
          "bg-[#8FD3C7] text-[#0B0F0E] font-semibold hover:bg-[#a6e0d7] shadow-md hover:shadow-[0_0_25px_rgba(143,211,199,0.4)]",
        outline:
          "border border-[rgba(143,211,199,0.25)] text-[#E9DDC8] bg-transparent hover:border-[#8FD3C7] hover:bg-[rgba(143,211,199,0.06)] hover:text-[#F7F4ED]",
        ghost:
          "text-[#A9B2AE] hover:text-[#F7F4ED] hover:bg-[rgba(143,211,199,0.08)]",
        link: "text-[#8FD3C7] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2.5 rounded-none",
        sm: "h-9 px-4 text-xs rounded-none",
        lg: "h-13 px-8 text-base rounded-none",
        icon: "h-10 w-10 rounded-none",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
