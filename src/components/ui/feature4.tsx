"use client";

import React from "react";
import * as Icons from "lucide-react";

interface FeatureItem {
  icon: keyof typeof Icons;
  title: string;
  description: string;
  link?: string;
}

interface FeatureProps {
  badge?: string;
  heading: string;
  highlight: string;
  description: string;
  features: FeatureItem[];
}

export const Feature4: React.FC<FeatureProps> = ({
  badge = "New",
  heading,
  highlight,
  description,
  features,
}) => {
  return (
    <div className="px-[var(--section-padding-x)] py-[var(--section-padding-y)] mx-auto max-w-screen-xl">
      <div className="max-w-2xl mb-10 text-center mx-auto">
        <p className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase rounded-full bg-primary/10">
          {badge}
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          <span className="relative inline-block text-foreground">{heading}</span>{" "}
          <span className="inline-block text-primary">{highlight}</span>
        </h2>
        <p className="text-base mt-4 text-muted-foreground md:text-lg">
          {description}
        </p>
      </div>

      <div className="grid gap-10 row-gap-10 md:grid-cols-2 lg:grid-cols-2">
        {features.map((item, idx) => {
          const Icon = (Icons[item.icon] as React.ElementType) || Icons.HelpCircle;
          return (
            <div
              key={idx}
              className="max-w-md sm:mx-auto sm:text-center flex flex-col items-center"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary/10">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <h6 className="mb-3 text-xl font-bold text-foreground">
                {item.title}
              </h6>
              <p className="mb-3 text-sm text-muted-foreground">
                {item.description}
              </p>
              {item.link && (
                <a
                  href={item.link}
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-primary hover:text-primary/80"
                >
                  Learn more
                </a>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
