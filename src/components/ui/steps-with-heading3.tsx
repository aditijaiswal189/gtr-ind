import React from 'react'
// import { ArrowRight } from 'lucide-react'
// import Link from 'next/link'

export interface StepItemProps {
  number: number
  title: string
  description: string
  ctaText?: string
  ctaHref?: string
}

export const StepItem: React.FC<StepItemProps> = ({
  number,
  title,
  description,
//   ctaText = 'Learn more',
//   ctaHref = '#',
}) => (
  <div className="sm:text-center">
    {/* Circle with step number */}
    <div
      className="
        flex items-center justify-center
        w-24 h-24 mb-4 text-5xl font-extrabold rounded-full
        text-primary bg-[var(--secondary)]
        sm:mx-auto
      "
    >
      {number}
    </div>

    {/* Title */}
    <h6 className="mb-2 font-semibold leading-5 text-[var(--foreground)]">
      {title}
    </h6>

    {/* Description */}
    <p className="max-w-md mb-3 text-sm text-[var(--muted-foreground)] sm:mx-auto">
      {description}
    </p>

    
  </div>
)



export interface StepSectionProps {
  badgeText?: string
  heading: React.ReactNode
  subheading?: string
  steps: Omit<StepItemProps, 'number'>[]
}

export const StepsWithHeading3: React.FC<StepSectionProps> = ({
  badgeText,
  heading,
  subheading,
  steps,
}) => (
  <section
    className="
      px-[var(--section-padding-x)] py-[var(--section-padding-y)]
      mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl
      md:px-24 lg:px-8 lg:py-12
    "
  >
    {/* Header */}
    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      {badgeText && (
        <p
          className="
            inline-block px-3 py-px mb-4 text-xs font-semibold uppercase
            rounded-full bg-primary/10 text-primary
          "
        >
          {badgeText}
        </p>
      )}
      <h2
        className="
          max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight
          text-[var(--foreground)] sm:text-4xl md:mx-auto
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

    {/* Steps grid */}
    <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
      {steps.map((step, i) => (
        <StepItem key={i} number={i + 1} {...step} />
      ))}
    </div>
  </section>
)
