import React from "react"

export interface FeatureItemProps {
  icon: React.ReactElement<{ className?: string }>
  title: string
  description: string
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  icon,
  title,
  description,
}) => (
  <div>
    <div
      className="
        flex items-center justify-center
        w-12 h-12 mb-4 rounded-full
        bg-primary/10 text-primary
      "
    >
      {/* enforce icon sizing */}
      {React.cloneElement(icon, { className: "w-6 h-6" })}
    </div>
    <h6 className="mb-2 font-semibold leading-5 text-[var(--foreground)]">
      {title}
    </h6>
    <p className="text-sm text-[var(--muted-foreground)]">{description}</p>
  </div>
)

export interface ContentSectionProps {
  heading: React.ReactNode
  subheading: string
  features: FeatureItemProps[]
  imageSrc: string
  imageAlt?: string
}

export const Feature2WithImage: React.FC<ContentSectionProps> = ({
  heading,
  subheading,
  features,
  imageSrc,
  imageAlt = "",
}) => (
  <section
    id="first-section"
    className="
      px-[var(--section-padding-x)] py-[var(--section-padding-y)]
      mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl
      lg:px-8 lg:py-20
    "
  >
    <div className="grid gap-12 lg:grid-cols-2">
      {/* text + features */}
      <div className="flex flex-col justify-center">
        <div className="max-w-xl mb-6">
          <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl sm:leading-none">
            {heading}
          </h2>
          <p className="text-base text-[var(--muted-foreground)] md:text-lg">
            {subheading}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {features.map((f, i) => (
            <FeatureItem key={i} {...f} />
          ))}
        </div>
      </div>

      {/* image */}
      <div>
        <img
          className="object-cover w-full h-56 rounded-lg shadow-lg sm:h-96"
          src={imageSrc}
          alt={imageAlt}
        />
      </div>
    </div>
  </section>
)
