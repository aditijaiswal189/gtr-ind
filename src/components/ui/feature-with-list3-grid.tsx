import React from "react";
import { Check } from "lucide-react";

export interface FeatureWithListProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  bullets: string[];
  ctaText?: string;
  ctaHref?: string;
}

export const FeatureItem: React.FC<FeatureWithListProps> = ({
  icon: Icon,
  title,
  description,
  bullets,
}) => (
  <div className="flex flex-col sm:flex-row px-10">
    {/* Icon Circle */}
    <div className="sm:mr-4">
      <div
        className="
          flex items-center justify-center
          w-16 h-16 mb-4 rounded-full
          bg-primary/10
          sm:w-24 sm:h-24
        "
      >
        <Icon className="w-8 h-8 text-primary sm:w-16 sm:h-16" />
      </div>
    </div>

    {/* Text */}
    <div>
      <h6 className="mb-2 font-semibold leading-5 text-[var(--foreground)]">
        {title}
      </h6>
      <p className="mb-3 text-sm text-[var(--muted-foreground)]">
        {description}
      </p>

      {/* Bullet list */}
      <ul className="mb-4 -ml-1 space-y-2">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start">
            <Check className="w-5 h-5 mt-px text-primary flex-shrink-0" />
            <span className="ml-1 text-[var(--foreground)]">{b}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      {/* <a
        href={ctaHref}
        className="
          inline-flex items-center font-semibold
          transition-colors duration-200
          text-[var(--accent)] hover:text-[var(--accent-foreground)]
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
  items: FeatureWithListProps[];
}

export const FeatureWithList3Grid: React.FC<FeatureSectionProps> = ({
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

    {/* Grid of features */}
    <div className="grid max-w-md gap-8 px-10 row-gap-10 sm:mx-auto lg:max-w-full lg:grid-cols-2">
      {items.map((item, idx) => (
        <FeatureItem key={idx} {...item} />
      ))}
    </div>
  </section>
);

{
  /* <FeatureSection
    heading="Connect with Québec’s top support services"
    subheading="Whether you need accelerators, incubators or specialized transfers, we’ve got you covered."
    items={featuresConfig}
  /> */
}

// import {
//   Briefcase,
//   Notebook,
//   Layers,
//   UserCheck,
//   User,
//   Key,
// } from 'lucide-react'
// import { FeatureItemProps } from '@/components/FeatureItem'

// export const featuresConfig: FeatureItemProps[] = [
//   {
//     icon: Briefcase,
//     title: 'Business Accelerator',
//     description:
//       'An organization with an establishment in Québec that offers support services to individuals whose business projects are designed to grow innovative businesses. In particular, it must provide a service for seeking financing​.',
//     bullets: ['Computers', 'Health', 'Reference'],
//     ctaHref: '/accelerator',
//   },
//   {
//     icon: Notebook,
//     title: 'Business Incubator',
//     description:
//       'An organization with an establishment in Québec that offers coaching services to people whose business projects are designed to start innovative businesses.',
//     bullets: ['Ideation', 'Mentorship', 'Networking'],
//     ctaHref: '/incubator',
//   },
//   {
//     icon: Layers,
//     title: 'University Entrepreneurship Center',
//     description:
//       'An organization managed by an institution of higher learning incorporated under the laws of Québec or another province of Canada, offering coaching services to entrepreneurs.',
//     bullets: ['Workshops', 'Funding', 'Collaboration'],
//     ctaHref: '/university',
//   },
//   {
//     icon: UserCheck,
//     title: 'Intra-Company Transfer Executive',
//     description:
//       'For employees in a senior managerial role, directing the company or a significant component.',
//     bullets: ['Executive assessment', 'Documentation', 'Visa support'],
//     ctaHref: '/transfer-exec',
//   },
//   {
//     icon: User,
//     title: 'Intra-Company Transfer Managerial',
//     description:
//       'For employees responsible for supervising employees or managing the organization or a department.',
//     bullets: ['Managerial training', 'Policy guidance', 'Submission'],
//     ctaHref: '/transfer-manager',
//   },
//   {
//     icon: Key,
//     title: 'Intra-Company Transfer Specialized Knowledge',
//     description:
//       "For employees with proprietary knowledge or expertise essential to the company's operations.",
//     bullets: ['Skill validation', 'Knowledge transfer', 'Application'],
//     ctaHref: '/transfer-specialized',
//   },
// ]
