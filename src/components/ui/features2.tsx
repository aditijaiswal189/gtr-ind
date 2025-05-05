import React from 'react';
import { Smartphone, Laptop, Book, HeadphonesIcon } from 'lucide-react';
import { SectionHeader } from './section-header';

export const Features2 = () => {
  const features = [
    {
      icon: <Smartphone className="w-16 h-16" />,
      title: "Establish business in Canada",
      description: "We provide guidance on how to start and grow your business in Canada.",
    },
    {
      icon: <Laptop className="w-16 h-16" />,
      title: "Secure a job in Canada​",
      description: "We help you find the right job in Canada that matches your skills and experience.",
    },
    {
      icon: <Book className="w-16 h-16" />,
      title: "Visa refusal? We can assist",
      description: "We offer expert advice and support for visa refusals to help you reapply successfully.",
    },
    {
      icon: <HeadphonesIcon className="w-16 h-16" />,
      title: "Book a consultation with RCIC",
      description: "Schedule a consultation with our Registered Canadian executive",
    },
  ];

  return (
    <section className="py-20 bg-background">
     <SectionHeader
  title="Our Services"
  subtitle="Services we offer"
  
/>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 transition-transform duration-300 hover:scale-105 text-foreground"
            >
              <div className="mb-6 flex justify-center text-primary">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


