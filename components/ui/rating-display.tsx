import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingDisplayProps {
  rating: number;
  className?: string;
  showNumber?: boolean;
  size?: "sm" | "md" | "lg";
}

export function RatingDisplay({ 
  rating, 
  className, 
  showNumber = false,
  size = "md" 
}: RatingDisplayProps) {
  const sizeClasses = {
    sm: "w-3 h-3",
    md: "w-4 h-4", 
    lg: "w-5 h-5"
  };

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={cn(
            sizeClasses[size],
            i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          )} 
        />
      ))}
      {showNumber && (
        <span className="ml-1 text-sm font-medium">{rating}</span>
      )}
    </div>
  );
}