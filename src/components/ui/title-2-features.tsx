"use client";

import React from "react";
import * as Icons from "lucide-react";

interface ContentItem {
  title: string;
  description: string;
  icon?: keyof typeof Icons;
  href?: string;
}

interface ContentSectionProps {
  items: ContentItem[];
  heading: string;
  subheading?: string;
  description?: string;
}

const SectionHeader: React.FC<{
  heading: string;
  subheading?: string;
  description?: string;
}> = ({ heading, subheading, description }) => (
  <div className="max-w-2xl mb-10 text-center mx-auto">
    {subheading && (
      <p className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase rounded-full bg-primary/10">
        {subheading}
      </p>
    )}
    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
      {heading}
    </h2>
    {description && <p className="text-base mt-4 text-muted-foreground md:text-lg">{description}</p>}
  </div>
);

export const Content: React.FC<ContentSectionProps> = ({ items, heading, subheading, description }) => {
  return (
    <div className="px-[var(--section-padding-x)] py-[var(--section-padding-y)] mx-auto max-w-screen-xl">
      <SectionHeader heading={heading} subheading={subheading} description={description} />
      <div className="grid gap-8 row-gap-6 md:grid-cols-2">
        {items.map((item, index) => {
          const LucideIcon = item.icon ? Icons[item.icon] : Icons.ArrowRight;
          return (
            <a
              key={index}
              href={item.href || "#"}
              aria-label="View item"
              className="relative block p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-primary group-hover:scale-x-100" />
              <span className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-primary group-hover:scale-y-100" />
              <span className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-primary group-hover:scale-x-100" />
              <span className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-primary group-hover:scale-y-100" />
              <div className="relative flex items-center justify-between p-5 bg-card rounded-sm">
                <div className="pr-4">
                  <h6 className="mb-2 font-semibold leading-5 text-foreground">
                    {item.title}
                  </h6>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <div className="flex items-center justify-center">
                  <LucideIcon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};
