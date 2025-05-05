// service-card.tsx
import { Briefcase, FileCheck, Globe, Plane, UserCheck } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
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

export const FeaturesWithLastFilled =() => {
  return(
  <div className="px-20 bg-background">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
    {services.map((svc, idx) => (
      <FeaturesCard key={idx} {...svc} />
    ))}
  </div>
  </div>
  )
}

const  services: Props[] = [
  {
    title: 'Immigration Consulting',
    description:
      'Expert guidance on all immigration pathways, including skilled migration, family sponsorship, and humanitarian programs.',
    icon: <UserCheck size={32} />,
  },
  {
    title: 'Visa Processing',
    description:
      'End-to-end assistance with visa applications, ensuring accurate documentation and timely submission.',
    icon: <FileCheck size={32} />,
  },
  {
    title: 'Global Mobility',
    description:
      'Solutions for businesses and individuals looking to relocate or expand operations internationally.',
    icon: <Globe size={32} />,
  },
  {
    title: 'Business Immigration',
    description:
      'Specialized services for entrepreneurs, investors, and businesses seeking to establish presence abroad.',
    icon: <Briefcase  size={32} />,
  },
  {
    title: 'Student Visas',
    description:
      'Comprehensive support for international students pursuing education opportunities worldwide.',
    icon: <Plane size={32} />,
  },
  {
    title: 'Get Started Today',
    description:
      'Schedule a consultation with our immigration experts to discuss your visa and immigration needs.',
    highlighted: true,
    buttonText: 'Book Consultation',
    icon: <Plane size={32} />,
  },
]
