// components/ui/service-card.tsx
"use client";

import Link from "next/link";
import React from "react";

export interface Props {
  icon?: React.ReactNode;
  title: string;
  description: string;
  highlighted?: boolean;
  buttonText?: string;
}

const FeaturesCard: React.FC<Props> = ({
  icon,
  title,
  description,
  highlighted = false,
  buttonText,
}) => {
  return (
    <div
      className={`p-8 rounded-lg transition-all duration-300 flex flex-col h-full
        ${
          highlighted
            ? "bg-primary text-primary-foreground shadow-xl transform hover:-translate-y-1"
            : "bg-card border border-border hover:shadow-lg hover:border-primary/20"
        }`}
    >
      {icon && (
        <div
          className={`w-16 h-16 rounded-full mb-6 flex items-center justify-center
            ${highlighted ? "bg-primary-foreground/20" : "bg-muted"}`}
        >
          <span className={highlighted ? "text-primary-foreground" : "text-primary"}>
            {icon}
          </span>
        </div>
      )}

      <h3
        className={`text-xl font-bold mb-4 ${
          highlighted ? "text-primary-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h3>
      <p
        className={`mb-6 flex-grow ${
          highlighted ? "text-primary-foreground/90" : "text-muted-foreground"
        }`}
      >
        {description}
      </p>

      {buttonText ? (
        <button className="mt-auto inline-block bg-card text-primary hover:bg-muted font-medium px-6 py-3 rounded-md transition-colors duration-300">
          {buttonText}
        </button>
      ) : (
        <Link
          href="#"
          className={`mt-auto inline-block font-medium ${
            highlighted
              ? "text-primary-foreground"
              : "text-primary hover:text-primary/90"
          }`}
        >
          Learn More →
        </Link>
      )}
    </div>
  );
};

interface FeaturesWithLastFilledProps {
  services: Props[];
  sectionTitle?: string;
  sectionSubtitle?: string;
}

export const FeaturesWithLastFilled: React.FC<FeaturesWithLastFilledProps> = ({
  services,
  sectionTitle,
  sectionSubtitle,
}) => {
  return (
    <section className="px-4 sm:px-8 lg:px-20 py-16 bg-background">
      {sectionTitle && (
        <div className="text-center mb-12">
          <p className="text-sm font-bold tracking-wider text-primary uppercase mb-3">
            {sectionTitle}
          </p>
          {sectionSubtitle && (
            <h2 className="text-3xl font-bold text-foreground">{sectionSubtitle}</h2>
          )}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((svc, idx) => (
          <FeaturesCard key={idx} {...svc} />
        ))}
      </div>
    </section>
  );
};
