import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "outline" | "gradient";
  size?: "sm" | "md" | "lg";
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", size = "md", children, ...props }, ref) => {
    const baseClasses = "inline-flex items-center rounded-full font-medium transition-colors";
    
    const variants = {
      default: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
      secondary: "bg-slate-800/50 text-gray-300 border border-neutral-800/70",
      outline: "border border-gray-700/50 text-gray-300 bg-transparent",
      gradient: "bg-gradient-to-r from-emerald-400/20 to-sky-400/20 text-emerald-400 border border-emerald-500/30"
    };

    const sizes = {
      sm: "px-2 py-1 text-xs",
      md: "px-3 py-1 text-sm",
      lg: "px-4 py-2 text-base"
    };

    return (
      <span
        ref={ref}
        className={cn(baseClasses, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export { Badge }; 