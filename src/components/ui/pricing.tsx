"use client";
import React from "react";
import { Check } from "lucide-react";

interface Package {
  name: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
}

const packages: Package[] = [
  {
    name: "Consulting Package",
    price: "100",
    period: "One-Time Payment",
    features: [
      "Online consulting to any questions",
      "Professional advice on the Immigration",
      "Assessment of your chances",
      "Interview Questions and Answers",
    ],
  },
  {
    name: "Full Package",
    price: "450",
    period: "One-Time Payment",
    features: [
      "Free online support to any questions",
      "Interview preparation and hints",
      "Interview documents",
      "Preparing application by specialist",
    ],
    highlighted: true,
  },
  {
    name: "Family Package",
    price: "590",
    period: "Per Each Person",
    features: [
      "Free online support to any questions",
      "Interview preparation and documents",
      "Full support for all family",
      "Preparing applications for family",
    ],
  },
];

interface PriceCardProps {
  pkg: Package;
}

const PriceCard: React.FC<PriceCardProps> = ({ pkg }) => {
  return (
    <div
      className={`rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 ${
        pkg.highlighted
          ? "bg-card shadow-xl border-2 border-primary"
          : "bg-card shadow-lg border-border"
      }`}
    >
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-4 text-foreground">{pkg.name}</h3>
        <div className="flex items-baseline mb-4">
          <span className="text-4xl font-bold text-primary">$</span>
          <span className="text-5xl font-bold text-foreground">
            {pkg.price}
          </span>
        </div>
        <p className="text-muted-foreground mb-6">{pkg.period}</p>

        <ul className="space-y-4 mb-8">
          {pkg.features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <Check className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" />
              <span className="text-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        <button
          className={`w-full py-3 px-6 rounded-md font-medium transition-colors duration-300 ${
            pkg.highlighted
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "bg-muted text-foreground hover:bg-muted/90"
          }`}
        >
          Start Now
        </button>
      </div>
    </div>
  );
};

export const Pricing: React.FC = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Our Pricing Plans
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect package for your immigration needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <PriceCard key={idx} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};
