import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "glass" | "elevated";
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    const baseClasses = "rounded-xl border transition-all duration-300";
    
    const variants = {
      default: "border-gray-700/50 bg-black/80 backdrop-blur-xl",
      glass: "border-gray-700/30 bg-black/40 backdrop-blur-md hover:bg-black/60",
      elevated: "border-gray-700/50 bg-black/80 backdrop-blur-xl shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-500/30"
    };

    return (
      <div
        ref={ref}
        className={cn(baseClasses, variants[variant], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export { Card }; 