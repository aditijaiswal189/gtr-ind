"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export interface FAQItem {
  title: string;
  content: React.ReactNode;
}

export interface FAQSectionProps {
  badgeIcon?: React.ReactNode;
  heading: React.ReactNode;
  subheading?: React.ReactNode;
  items: FAQItem[];
}

const Item: React.FC<FAQItem> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full border border-border rounded shadow-sm overflow-hidden">
      <button
        type="button"
        aria-label="Toggle"
        className="flex items-center justify-between w-full p-4 bg-card hover:bg-muted transition-colors focus:outline-none"
        onClick={() => setIsOpen((o) => !o)}
      >
        <span className="text-lg font-medium text-foreground">{title}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-muted-foreground" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        )}
      </button>
      {isOpen && (
        <div className="bg-muted">
          <div className="p-4 pt-0 text-muted-foreground whitespace-normal break-words">
            {content}
          </div>
        </div>
      )}
    </div>
  );
};

export const FAQSection: React.FC<FAQSectionProps> = ({
  badgeIcon,
  heading,
  subheading,
  items,
}) => (
  <section className="px-[var(--section-padding-x)] py-[var(--section-padding-y)]">
    {/* Single fixed-width wrapper */}
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center mb-12 text-center">
        {badgeIcon && (
          <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-full bg-muted">
            {badgeIcon}
          </div>
        )}
        <h2 className="mb-4 font-sans text-3xl font-bold leading-none tracking-tight text-foreground sm:text-4xl">
          {heading}
        </h2>
        {subheading && (
          <p className="text-base text-muted-foreground md:text-lg">
            {subheading}
          </p>
        )}
      </div>

      {/* FAQ items */}
      <div className="space-y-4">
        {items.map((faq) => (
          <Item key={faq.title} {...faq} />
        ))}
      </div>
    </div>
  </section>
);
