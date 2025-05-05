"use client";
import React from "react";
import { FileCheck, Building2, FileText, Plane } from "lucide-react";

interface Step {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string; // still accepts Tailwind color classes like bg-red-500
}

const steps: Step[] = [
  {
    number: 1,
    icon: <FileCheck className="w-8 h-8" />,
    title: "Choose your visa type",
    description: "Determine the Visa type for your travel purpose.",
    color: "bg-red-500",
  },
  {
    number: 2,
    icon: <Building2 className="w-8 h-8" />,
    title: "Contact our branches",
    description: "Start your transaction by applying to our branches.",
    color: "bg-emerald-500",
  },
  {
    number: 3,
    icon: <FileText className="w-8 h-8" />,
    title: "Submit Your Documents",
    description: "Collect all the required documents the process.",
    color: "bg-blue-500",
  },
  {
    number: 4,
    icon: <Plane className="w-8 h-8" />,
    title: "Passport delivery",
    description: "Receive your visa, which is finalized after application.",
    color: "bg-yellow-500",
  },
];

const StepCard: React.FC<Step> = ({ number, icon, title, description, color }) => (
  <div className="relative">
    <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className={`${color} w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4`}>
        {number}
      </div>
      <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </div>
);

export const Process: React.FC = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <StepCard {...step} />
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-border"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
