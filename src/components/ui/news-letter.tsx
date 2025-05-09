"use client";
import React from "react";

// Configurable props for newsletter
export interface NewsletterConfig {
  label: string;
  heading: string;
  placeholder: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

interface NewsletterProps {
  config: NewsletterConfig;
}

// Reusable Input + Button form
interface EmailFormProps {
  placeholder: string;
  buttonText: string;
}

const EmailForm: React.FC<EmailFormProps> = ({ placeholder, buttonText }) => (
  <div className="flex max-w-md">
    <input
      type="email"
      placeholder={placeholder}
      className="flex-1 px-4 py-3 rounded-l-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
    />
    <button className="px-3 py-3 bg-primary text-primary-foreground rounded-r-lg hover:bg-primary/90 transition-colors">
      {buttonText}
    </button>
  </div>
);

export const Newsletter: React.FC<NewsletterProps> = ({ config }) => {
  const { label, heading, placeholder, buttonText, imageSrc, imageAlt } = config;

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <span className="text-sm uppercase tracking-wider text-muted-foreground">
              {label}
            </span>
            <h2 className="text-3xl font-bold mt-2 mb-4 text-foreground">
              {heading}
            </h2>
            <EmailForm placeholder={placeholder} buttonText={buttonText} />
          </div>

          <div className="lg:w-1/2 lg:pl-12">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
