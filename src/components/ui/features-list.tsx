
import React from 'react'
import { Check } from 'lucide-react'

export interface FeatureSectionProps {
  badgeText: string
  heading: React.ReactNode
  subheading: string
  items: FeatureItemProps[]
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({
  badgeText,
  heading,
  subheading,
  items,
}) => (
  <section
    className="
      px-[var(--section-padding-x)] py-[var(--section-padding-y)]
      mx-auto max-w-screen-xl
    "
  >
    {/* header */}
    <div className="max-w-xl mb-10 mx-auto text-center">
      <span
        className="
          inline-block px-3 py-px mb-4 text-xs font-semibold uppercase rounded-full
          bg-[var(--secondary)] text-[var(--primary)]
        "
      >
        {badgeText}
      </span>
      <h2
        className="
          mb-6 font-sans text-3xl font-bold tracking-tight
          text-[var(--foreground)]
          sm:text-4xl
        "
      >
        {heading}
      </h2>
      <p className="text-base text-[var(--muted-foreground)] md:text-lg">
        {subheading}
      </p>
    </div>

    {/* list of features */}
    <div className="max-w-lg space-y-3 mx-auto lg:max-w-xl">
      {items.map((item, idx) => (
        <FeatureItem key={idx} {...item} />
      ))}
    </div>
  </section>
)


export interface FeatureItemProps {
  /** Icon component (Lucide icon) */
  icon?: React.ElementType
  /** Text for this feature */
  text: string
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  icon: Icon = Check,
  text,
}) => (
  <div
    className="
      flex items-center p-2 border rounded shadow
      transition-colors duration-200 group hover:bg-[var(--accent)] hover:border-[var(--accent)]
    "
  >
    <div className="mr-2 text-[var(--primary)] group-hover:text-white">
      <Icon className="w-6 h-6" />
    </div>
    <span className="text-[var(--foreground)] group-hover:text-white">
      {text}
    </span>
  </div>
)
