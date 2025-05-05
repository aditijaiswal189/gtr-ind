import React from "react";
import { cn } from "@/lib/utils"; // Optional: for conditional class merging if you're using ShadCN

interface SectionHeaderProps {
  title: string;
  subtitle: React.ReactNode;
  description?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  description,
  className = "",
}) => {
  return (
    <div className={cn("text-center mb-16", className)}>
      <p className="text-sm font-bold tracking-wider text-red-600 uppercase mb-3">
        {title}
      </p>
      <h2 className="text-4xl font-bold text-gray-900">{subtitle}</h2>
      {description && (
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-base">
          {description}
        </p>
      )}
    </div>
  );
};


