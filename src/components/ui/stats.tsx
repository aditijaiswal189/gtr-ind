"use client";
import React from "react";
import { FileText, Users, Star, UserCheck } from "lucide-react";

interface Stat {
  icon: React.ReactNode;
  number: string;
  label: string;
  color: string; // still uses specific utility class (e.g., bg-red-50)
}

const stats: Stat[] = [
  {
    icon: <FileText className="w-12 h-12" />,
    number: "100+",
    label: "Successful Visas",
    color: "bg-red-50",
  },
  {
    icon: <Users className="w-12 h-12" />,
    number: "14+",
    label: "Start Up Visa",
    color: "bg-blue-50",
  },
  {
    icon: <Star className="w-12 h-12" />,
    number: "95 %",
    label: "Happy clients",
    color: "bg-green-50",
  },
  {
    icon: <UserCheck className="w-12 h-12" />,
    number: "Top 1",
    label: "Consultants in Saskatchewan",
    color: "bg-yellow-50",
  },
];

const StatCard: React.FC<Stat> = ({ icon, number, label, color }) => (
  <div className="flex items-center p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
    <div className={`${color} p-4 rounded-full mr-4`}>
      <span className="text-primary">{icon}</span>
    </div>
    <div>
      <h3 className="text-4xl font-bold mb-1 text-foreground">{number}</h3>
      <p className="text-muted-foreground">{label}</p>
    </div>
  </div>
);

export const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      {/* <SectionHeader
        title="Our Achievements"
        subtitle="We are proud of our accomplishments"
      /> */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};
