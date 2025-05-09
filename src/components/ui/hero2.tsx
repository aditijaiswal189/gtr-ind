// components/ui/hero.tsx
import Link from "next/link";


interface Hero2Props {
  badgeText?: string;
  title: string;
  description: string;
  imageUrl: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  sectionHeader?: {
    title?: string;
    subtitle?: string;
  };
}

export const Hero2: React.FC<Hero2Props> = ({
  badgeText = "GreenTech Resources",
  title,
  description,
  imageUrl,
  primaryCta,
  secondaryCta,
}) => {
  return (
    <div className="relative flex flex-col-reverse min-h-screen py-16 lg:pt-0 lg:flex-col lg:pb-0">

      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src={imageUrl}
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          {badgeText && (
            <p className="inline-block px-3 py-px mb-10 text-xs font-semibold tracking-wider text-primary uppercase rounded-full bg-teal-accent-400">
              <span className="text-primary">{badgeText}</span>
            </p>
          )}
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            {title}
          </h2>
          <p className="pr-5 mb-10 text-base text-gray-700 md:text-lg">
            {description}
          </p>

          <div className="flex items-center">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
