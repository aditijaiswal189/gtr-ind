import React from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export interface Cta4FeatureItemProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
  ctaText?: string
  ctaHref?: string
}

export const FeatureItem: React.FC<Cta4FeatureItemProps> = ({
  icon: Icon,
  title,
  description,
  ctaText = 'Learn more',
  ctaHref = '/about-us/about/book-appointment',
}) => (
  <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
    <div>
      {/* Icon circle */}
      <div
        className="
          flex items-center justify-center
          w-16 h-16 mb-4 rounded-full
          bg-primary/10
        "
      >
        <Icon className="w-6 h-8 text-primary" />
      </div>

      {/* Title & description */}
      <h6 className="mb-2 font-semibold leading-5 text-[var(--foreground)]">
        {title}
      </h6>
      <p className="mb-3 text-sm text-[var(--muted-foreground)]">
        {description}
      </p>
    </div>

    {/* CTA */}
    <Link
      href={ctaHref}
      className="
        inline-flex items-center font-semibold
        transition-colors duration-200
        text-primary hover:text-primary/80
      "
    >
      {ctaText}
      <ArrowRight className="w-4 h-4 ml-2" />
    </Link>
  </div>
)


export interface FeatureSectionProps {
  badgeText?: string
  heading: React.ReactNode
  subheading?: string
  items: Cta4FeatureItemProps[]
}

export const Cta4FeaturesWithoutImage: React.FC<FeatureSectionProps> = ({
  badgeText,
  heading,
  subheading,
  items,
}) => (
  <section
    className="
      px-[var(--section-padding-x)] py-[var(--section-padding-y)]
      mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl
      md:px-24 lg:px-8 lg:py-20
    "
  >
    {/* Header */}
    <div className="max-w-3xl mb-10 md:mx-auto sm:text-center lg:max-w-3xl md:mb-12">
      {badgeText && (
        <span
          className="
            inline-block px-3 py-2  mb-4 text-xs font-semibold uppercase rounded-full
            bg-primary/10 text-primary
          "
        >
          {badgeText}
        </span>
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

    {/* Grid of items */}
    <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, idx) => (
        <FeatureItem key={idx} {...item} />
      ))}
    </div>
  </section>
)
