import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavigationCardProps {
  to: string;
  title: string;
  number: string;
  variant: "cream" | "red" | "yellow";
  className?: string;
}

const variantStyles = {
  cream: "bg-accent-cream text-accent-cream-foreground hover:bg-accent-cream/80",
  red: "bg-accent-red text-accent-red-foreground hover:bg-accent-red/90",
  yellow: "bg-accent-yellow text-accent-yellow-foreground hover:bg-accent-yellow/90"
};

export function NavigationCard({ to, title, number, variant, className }: NavigationCardProps) {
  return (
    <Link 
      to={to}
      className={cn(
        "group relative block p-6 md:p-8 rounded-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl",
        variantStyles[variant],
        className
      )}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg md:text-xl font-display font-medium">
          {title}
        </h3>
        <span className="text-sm font-mono opacity-70">
          {number}
        </span>
      </div>
      
      <div className="absolute inset-0 rounded-sm border border-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Link>
  );
}