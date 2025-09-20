import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-glow-purple hover:shadow-glow-purple hover:brightness-110 hover:scale-105",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border-2 border-primary/50 bg-transparent text-primary shadow-sm hover:bg-primary/10 hover:border-primary hover:shadow-glow-purple",
        secondary: "bg-secondary text-secondary-foreground shadow-glow-cyan hover:shadow-glow-cyan hover:brightness-110",
        ghost: "hover:bg-accent/20 hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        neon: "bg-gradient-primary text-primary-foreground shadow-neon hover:shadow-neon-lg hover:scale-105 font-bold",
        gaming: "bg-gradient-accent text-accent-foreground shadow-glow-pink hover:shadow-glow-pink hover:scale-105 font-bold",
        glass: "glass text-foreground border border-border/50 hover:bg-card/50 hover:border-primary/50 hover:shadow-glow-purple",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-md px-8 text-base",
        icon: "h-10 w-10",
        xl: "h-14 rounded-lg px-10 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
