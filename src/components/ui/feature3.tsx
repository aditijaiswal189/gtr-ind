"use client";

import React from "react";
import * as Icons from "lucide-react";

interface FeatureItem {
  icon: keyof typeof Icons;
  title: string;
  description: string;
}

interface FeatureProps {
    badgeText:string,
  heading: string;
  highlighted: string;
  description?: string;
  items: FeatureItem[];
}

export const Feature3: React.FC<FeatureProps> = ({
    badgeText,
  heading,
  highlighted,
  description,
  items,
}) => {
  return (
    <div className="px-[var(--section-padding-x)] py-[var(--section-padding-y)] mx-auto max-w-6xl">
      <div className="max-w-2xl mb-10 sm:mx-auto text-center">
      {badgeText && (
            <p className="inline-block px-3 py-px mb-5 text-xs font-semibold tracking-wider text-primary uppercase rounded-full bg-teal-accent-400">
              <span className="text-primary">{badgeText}</span>
            </p>
          )}
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {heading}{" "}
          <span className="inline-block text-primary">{highlighted}</span>
        </h2>
        {description && (
          <p className="mt-4 text-muted-foreground text-base">{description}</p>
        )}
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => {
          const Icon = Icons[item.icon] as React.ElementType;
          return (
            <div key={index} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center p-2 justify-center">
                <Icon className="w-6 h-6  text-primary" />
              </div>
              <div>
                <h6 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h6>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
