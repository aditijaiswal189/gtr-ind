"use client";
import React from "react";
import {
  Briefcase,
  Globe2,
  GraduationCap,
  Users2,
  FileCheck,
  HeartHandshake,
} from "lucide-react";
import { SectionHeader } from "./section-header";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Briefcase className="w-12 h-12" />,
    title: "Business Immigration",
    description:
      "Comprehensive solutions for entrepreneurs and businesses looking to expand globally.",
  },
  {
    icon: <Users2 className="w-12 h-12" />,
    title: "Family Sponsorship",
    description:
      "Unite with your loved ones through our family sponsorship programs.",
  },
  {
    icon: <GraduationCap className="w-12 h-12" />,
    title: "Student Visas",
    description:
      "Pursue your educational dreams with our student visa services.",
  },
  {
    icon: <Globe2 className="w-12 h-12" />,
    title: "Skilled Migration",
    description:
      "Navigate skilled migration pathways with our expert guidance.",
  },
  {
    icon: <FileCheck className="w-12 h-12" />,
    title: "Visa Processing",
    description:
      "Efficient and accurate visa application processing services.",
  },
  {
    icon: <HeartHandshake className="w-12 h-12" />,
    title: "Settlement Services",
    description:
      "Comprehensive support for settling in your new country.",
  },
];

const ServiceCard: React.FC<Service> = ({ icon, title, description }) => (
  <div className="bg-card p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="text-primary mb-6">{icon}</div>
    <h3 className="text-xl font-bold mb-4 text-foreground">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

export const Services: React.FC = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
        
           <SectionHeader
                  title=" Our Immigration Services"
                  subtitle="We offer a comprehensive range of immigration and visa services to meet your needs"
                />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};
