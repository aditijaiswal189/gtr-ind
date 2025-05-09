"use client";

import React from "react";
// import PricingCard, { PricingPlan } from "./PricingCard";
// import DecorativeBackground from "./DecorativeBackground";
// import { AlertTriangle } from "lucide-react";

export interface PricingSectionConfig {
  heading?: React.ReactNode;
  subtitle?: string;
  description: string;
  showBanner?: boolean;
  bannerText?: string;
  linkHref?: string;
  linkText?: string;
  plans: PricingPlan[];
}

// interface PricingSectionProps extends PricingSectionConfig {}

const PricingSection: React.FC<PricingSectionConfig> = ({
  heading = "",
  subtitle,
  description = "Choose the plan that's right for you and start your journey today.",
  showBanner = true,
  // bannerText = "🚨 Last Chance for Lifetime Access to Shuffle! 🚨",
  linkHref = "#",
  linkText = "View all features comparison →",
  plans,
}) => {
  return (
    <section className="relative overflow-hidden px-[var(--section-padding-x)] py-[var(--section-padding-y)] bg-background text-foreground">
      <DecorativeBackground />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          {showBanner && (
            <div className="flex justify-center mb-4">
              {/* <div 
              className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium inline-flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                {bannerText}
              </div> */}
            </div>
          )}

          {subtitle && (
            <p className="inline-block px-3 py-2 mb-4 text-xs font-semibold tracking-wider text-primary uppercase rounded-full bg-[color-mix(in srgb, var(--primary) 10%, transparent)]">
              {subtitle}
            </p>
          )}

          <h2 className="text-3xl font-bold mb-3 text-foreground">
            {heading}
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="flex flex-col px-16  space-y-4 mt-8">
          {plans.map((plan, index) => (
            <div key={index}>
              <PricingCard plan={plan} />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href={linkHref}
            className="text-primary hover:text-primary/80 font-medium transition-colors"
          >
            {linkText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;


export interface PricingPlan {
  title: string;
  description: string;
  price: number | 'free';
  isPopular?: boolean;
}

interface PricingCardProps {
  plan: PricingPlan;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  const { title, description, price } = plan;

  return (
    <div className="flex items-center bg-card rounded-lg py-6 px-16 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden relative">
      <div className="flex-1">
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      <div className="ml-8">
        {price === 'free' ? (
          <div className="text-3xl font-bold text-primary">Free</div>
        ) : (
          <div className="flex items-baseline">
            <span className="text-3xl font-bold text-primary">${price}</span>
          </div>
        )}
      </div>
    </div>
  );
};


const DecorativeBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -right-40 top-[20%] w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute left-0 top-[10%] w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute right-[20%] bottom-[10%] w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-20"></div>

      {/* Decorative lines */}
      <svg
        className="absolute top-[10%] left-[20%] w-[300px] h-[300px] text-border opacity-20"
        viewBox="0 0 200 200"
      >
        <path
          d="M 0,50 C 50,0 150,0 200,50 S 200,150 150,200 S 50,200 0,150 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>

      <svg
        className="absolute bottom-[10%] right-[20%] w-[300px] h-[300px] text-border opacity-20"
        viewBox="0 0 200 200"
      >
        <path
          d="M 0,100 C 50,0 150,0 200,100 S 150,200 100,200 S 0,150 0,100 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};
