import React from "react";
import { Check } from "lucide-react";

export interface FeatureList4GridProps {
  /** Lucide icon component */
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  bullets?: string[];
  ctaText?: string;
  ctaHref?: string;
}

export const FeatureItem: React.FC<FeatureList4GridProps> = ({
  icon: Icon,
  title,
  description,
  bullets = [],
}) => (
  <div className="flex flex-col sm:flex-row">
    {/* Icon circle */}
    <div className="sm:mr-4">
      <div
        className="
          flex items-center justify-center
          w-12 h-12 mb-4 rounded-full
          bg-primary/10
          sm:w-12 sm:h-12
        "
      >
        <Icon className="w-8 h-8 text-primary sm:w-8 sm:h-8" />
      </div>
    </div>

    {/* Content */}
    <div>
      <h6 className="mb-2 text-lg font-semibold text-[var(--foreground)]">
        {title}
      </h6>
      <p className="mb-3 text-sm text-[var(--muted-foreground)]">
        {description}
      </p>

      {/* Optional bullet list */}
      {bullets.length > 0 && (
        <ul className="mb-4 -ml-1 space-y-2">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start">
              <Check className="w-5 h-5 mt-px text-primary flex-shrink-0" />
              <span className="ml-1 text-[var(--foreground)]">{b}</span>
            </li>
          ))}
        </ul>
      )}

      {/* CTA */}
      {/* <a
        href={ctaHref}
        className="
          inline-flex items-center font-semibold
          text-[var(--accent)] transition-colors duration-200
          hover:text-[var(--accent-foreground)]
        "
      >
        {ctaText}
        <ArrowRight className="w-4 h-4 ml-2" />
      </a> */}
    </div>
  </div>
);

export interface FeatureSectionProps {
  heading: React.ReactNode;
  subheading?: string;
  items: FeatureList4GridProps[];
}

export const FeatureWithList4Grid: React.FC<FeatureSectionProps> = ({
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
    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
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

    {/* Grid */}
    <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, idx) => (
        <FeatureItem key={idx} {...item} />
      ))}
    </div>
  </section>
);
