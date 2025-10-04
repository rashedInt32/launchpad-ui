import { cn } from "@/lib/utils";
import type { FeatureCard } from "@/lib/types/food";

interface FeatureCardProps extends FeatureCard {
  className?: string;
  variant?: "default" | "dark";
}

export function FeatureCard({ 
  icon, 
  title, 
  description, 
  className,
  variant = "default" 
}: FeatureCardProps) {
  return (
    <div className={cn(
      "text-center p-6 rounded-2xl",
      variant === "default" ? "bg-white shadow-lg" : "bg-gray-800",
      className
    )}>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className={cn(
        "text-xl font-semibold mb-2",
        variant === "default" ? "text-gray-800" : "text-orange-500"
      )}>
        {title}
      </h3>
      <p className={cn(
        "text-sm",
        variant === "default" ? "text-gray-600" : "text-gray-400"
      )}>
        {description}
      </p>
    </div>
  );
}