import React from 'react';
import { FileCheck, Building2, FileText, Plane } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: 1,
      icon: <FileCheck className="w-8 h-8" />,
      title: "Choose your visa type",
      description: "Determine the Visa type for your travel purpose.",
      color: "bg-red-500"
    },
    {
      number: 2,
      icon: <Building2 className="w-8 h-8" />,
      title: "Contact our branches",
      description: "Start your transaction by applying to our branches.",
      color: "bg-emerald-500"
    },
    {
      number: 3,
      icon: <FileText className="w-8 h-8" />,
      title: "Submit All Your Documents",
      description: "Collect all the required documents the process.",
      color: "bg-blue-500"
    },
    {
      number: 4,
      icon: <Plane className="w-8 h-8" />,
      title: "Passport delivery",
      description: "Receive your visa, which is finalized after application.",
      color: "bg-yellow-500"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className={`${step.color} w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4`}>
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gray-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;