import React from "react";
import { ComponentType, SVGProps } from "react";

export interface StepItemProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

interface StepItemWithNumberProps extends StepItemProps {
  number: number;
  totalSteps: number;
}

/**
 * Renders one step:
 *  • vertical connector line (top hidden for first, bottom hidden for last)
 *  • numbered circle
 *  • icon circle using Lucide icon
 *  • title + description
 */
export const StepItem: React.FC<StepItemWithNumberProps> = ({
  number,
  totalSteps,
  icon: Icon,
  title,
  description,
}) => {
  const isFirst = number === 1;
  const isLast = number === totalSteps;

  return (
    <div className="flex">
      {/* vertical line + number */}
      <div className="flex flex-col items-center mr-6">
        <div
          className={`w-px h-10 sm:h-full bg-primary/10 transition-opacity ${
            isFirst ? "opacity-0" : ""
          }`}
        />
        <div>
          <div
            className="
              flex items-center justify-center
              w-8 h-8 mb-2 text-xs font-medium border rounded-full
              text-primary border-primary/20
            "
          >
            {number}
          </div>
        </div>
        <div
          className={`w-px h-full bg-[var(--border)] transition-opacity ${
            isLast ? "opacity-0" : ""
          }`}
        />
      </div>

      {/* content */}
      <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
        {/* icon circle */}
        <div className="sm:mr-5">
          <div
            className="
              flex items-center justify-center
              w-16 h-16 my-3 rounded-full
              bg-primary/10
              sm:w-24 sm:h-24
            "
          >
            <Icon className="w-12 h-12 text-primary sm:w-16 sm:h-16" />
          </div>
        </div>
        {/* text */}
        <div>
          <p className="text-xl font-semibold sm:text-base text-[var(--foreground)]">
            {title}
          </p>
          <p className="text-sm text-[var(--muted-foreground)]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export interface StepSectionProps {
  badgeText?: string;
  heading: React.ReactNode;
  subheading?: string;
  steps: StepItemProps[];
}

export const StepsWithHeadingImageList: React.FC<StepSectionProps> = ({
  badgeText,
  heading,
  subheading,
  steps,
}) => (
  <section
    className="
      px-[var(--section-padding-x)] py-[var(--section-padding-y)]
      mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-3xl
      md:px-24 lg:px-8 lg:py-20
    "
  >
    {/* header */}
    <div className="max-w-2xl mx-auto mb-12 text-center">
      {badgeText && (
        <p
          className="
            inline-block px-3 py-px mb-4 text-xs font-semibold uppercase
            rounded-full bg-[var(--secondary)] text-[var(--secondary-foreground)]
          "
        >
          {badgeText}
        </p>
      )}
      <h2
        className="
          mb-4 font-sans text-3xl font-bold tracking-tight leading-none
          text-[var(--foreground)] sm:text-4xl
        "
      >
        {heading}
      </h2>
      {subheading && (
        <p className="text-base text-[var(--muted-foreground)] md:text-lg">
          {subheading}
        </p>
      )}
    </div>

    {/* steps list */}
    <div className="grid gap-8 max-w-2xl mx-auto">
      {steps.map((s, i) => (
        <StepItem key={i} number={i + 1} totalSteps={steps.length} {...s} />
      ))}
    </div>
  </section>
);
