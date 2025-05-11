import React from 'react'
import { Check } from 'lucide-react'

export interface FeatureItemListProps {
  /** Main text of the feature */
  text: string
  /** Optionally override the icon (defaults to a checkmark) */
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export const FeatureItem: React.FC<FeatureItemListProps> = ({
  text,
  Icon = Check,
}) => (
  <li className="flex items-start">
    <Icon
      className="w-5 h-5 flex-shrink-0 mt-[2px] text-primary"
    />
    <span className="ml-2 text-[var(--foreground)]">{text}</span>
  </li>
)


export interface FeatureListProps {
  /** Array of feature items */
  features: FeatureItemListProps[]
  /** How many columns on md+ (default 2) */
  columns?: number
}

export const FeatureList: React.FC<FeatureListProps> = ({
  features,
  columns = 2,
}) => {
  // Tailwind class for lg:grid-cols-{columns}
  const lgCols = `lg:grid-cols-${columns}`

  return (
    <ul
      className={`
        grid gap-3 sm:gap-2
        sm:grid-cols-2 ${lgCols}
      `}
    >
      {features.map((f, i) => (
        <FeatureItem key={i} {...f} />
      ))}
    </ul>
  )
}


export interface ContentSectionProps {
  badgeText?: string
  heading: React.ReactNode
  subheading?: string
  features: FeatureItemListProps[]
  imageSrc: string
  imageAlt?: string
}

export const FeatureListWithImage: React.FC<ContentSectionProps> = ({
  badgeText,
  heading,
  subheading,
  features,
  imageSrc,
  imageAlt = '',
}) => (
  <section
    className="
      px-[var(--section-padding-x)] py-[var(--section-padding-y)]
      mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl
      md:px-24 lg:px-8 lg:py-20
    "
  >
    <div className="grid gap-5 lg:grid-cols-2">
      {/* Text & features */}
      <div className="flex flex-col justify-center">
        <div className="max-w-xl mb-6">
          <h2
            className="
              mb-4 font-sans text-3xl font-bold tracking-tight
              text-[var(--foreground)] sm:text-4xl sm:leading-none
            "
          >
            {heading}
          </h2>
          {subheading && (
            <p className="mb-4 text-base text-[var(--muted-foreground)] md:text-lg">
              {subheading}
            </p>
          )}
        </div>

        {badgeText && (
          <p
            className="
              mb-3 text-sm font-bold tracking-widest uppercase
              text-primary"
          >
            {badgeText}
          </p>
        )}

        <FeatureList features={features} columns={2} />
      </div>

      {/* Image */}
      <div>
        <img
          className="
            object-cover w-full h-56 rounded shadow-lg
            sm:h-96
          "
          src={imageSrc}
          alt={imageAlt}
        />
      </div>
    </div>
  </section>
)

