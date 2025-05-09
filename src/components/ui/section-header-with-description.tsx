import React from "react";

interface SectionHeaderWithDescriptionProps {
  badgeText?: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  align?: "center" | "left";
}

export const SectionHeaderWithDescription: React.FC<SectionHeaderWithDescriptionProps> = ({
  badgeText = "Badge",
  title,
  subtitle,
  align = "center",
}) => {
  const alignment = align === "center" ? "text-center md:mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl mb-10 ${alignment}`}>
      {badgeText && (
        <p className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-[var(--primary)] uppercase rounded-full bg-[color-mix(in srgb, var(--primary) 10%, transparent)]">
          {badgeText}
        </p>
      )}
      <h2 className="max-w-xl mb-6 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <div className="text-base text-[var(--muted-foreground)] md:text-lg">
          {subtitle}
        </div>
      )}
    </div>
  );
};
