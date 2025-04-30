import React from 'react';
import { Settings, Smartphone, Users, HeadphonesIcon } from 'lucide-react';

const Features2 = () => {
  const features = [
    {
      icon: <Settings className="w-16 h-16" />,
      title: "Easy to Customize",
      description: "Our services are easily customizable to meet your specific immigration needs and requirements."
    },
    {
      icon: <Smartphone className="w-16 h-16" />,
      title: "Responsive & Ready",
      description: "Access our services and support from any device, anywhere in the world."
    },
    {
      icon: <Users className="w-16 h-16" />,
      title: "Intuitive Process",
      description: "Our streamlined immigration process is designed to be clear and easy to follow."
    },
    {
      icon: <HeadphonesIcon className="w-16 h-16" />,
      title: "Legendary Support",
      description: "24/7 dedicated support to assist you throughout your immigration journey."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 hover:transform hover:scale-105 transition-transform duration-300">
              <div className="text-red-600 mb-6 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features2;