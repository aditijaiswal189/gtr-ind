import React from 'react';
import { FileText, Users, Star, UserCheck } from 'lucide-react';
import { SectionHeader } from './section-header';

export const Stats = () => {
  const stats = [
    {
      icon: <FileText className="w-12 h-12" />,
      number: "20+",
      label: "Visa Categories",
      color: "bg-red-50"
    },
    {
      icon: <Users className="w-12 h-12" />,
      number: "30K+",
      label: "Visa Process",
      color: "bg-blue-50"
    },
    {
      icon: <Star className="w-12 h-12" />,
      number: "40K+",
      label: "Successful Project",
      color: "bg-green-50"
    },
    {
      icon: <UserCheck className="w-12 h-12" />,
      number: "180K+",
      label: "Pro Consultants",
      color: "bg-yellow-50"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <SectionHeader title="Our Achievements" subtitle="We are proud of our accomplishments" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
              <div className={`${stat.color} p-4 rounded-full mr-4`}>
                <span className="text-red-600">{stat.icon}</span>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-1">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

