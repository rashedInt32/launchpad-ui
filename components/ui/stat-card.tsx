import { cn } from "@/lib/utils";
import type { Stat } from "@/lib/types/food";

interface StatCardProps extends Stat {
  className?: string;
}

export function StatCard({ icon: Icon, number, label, color, className }: StatCardProps) {
  return (
    <div className={cn("text-center group", className)}>
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
        <div className={cn("inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4", color)}>
          <Icon className="w-6 h-6" />
        </div>
        <div className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
          {number}
        </div>
        <div className="text-sm lg:text-base text-gray-600 font-medium">
          {label}
        </div>
      </div>
    </div>
  );
}