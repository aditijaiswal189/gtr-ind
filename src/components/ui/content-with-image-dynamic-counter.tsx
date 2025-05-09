"use client";
import React from "react";
import { StatCounter } from "./stat-counter";


import { CheckCircle } from "lucide-react";





interface FeaturesConfig {
  intro: {
    eyebrow: string;
    heading: string;
    text: string;
  };
  images: {
    main: string;
    overlay?: string;
    badge?: {
      value: string;
      label: string;
    };
  };
  stats: {
    label: string;
    end: number;
    suffix?: string;
  }[];
}

export const ContentWithImageDynamicCounter: React.FC<{ featuresConfig: FeaturesConfig }> = ({ featuresConfig }) => {
  const { intro, images, stats} = featuresConfig;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block text-primary font-semibold mb-2">
            {intro.eyebrow}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {intro.heading}
          </h2>
          <p className="max-w-3xl mx-auto text-muted-foreground md:text-lg">
            {intro.text}
          </p>
        </div>

        <div className="flex flex-col justify-between md:flex-row items-center mb-16">
          <div className="ml-10 md:w-1/4 mb-8 md:mb-0 relative">
            <div className="relative">
              <img
                src={images.main}
                alt="Visa consultant with client"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 hidden md:block">
                <img
                  src={images.overlay || '/fallback-image.jpg'}
                  alt="Passport and documents"
                  className="w-40 h-40 object-cover rounded-lg shadow-xl border-4 border-background"
                />
              </div>
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-lg hidden md:flex">
                <span className="text-primary-foreground font-bold text-3xl">
                  {images.badge?.value}
                </span>
                <span className="text-primary-foreground text-xs absolute bottom-5">
                  {images.badge?.label}
                </span>
              </div>
            </div>
          </div>

          <div className="mr-10 md:w-2/4 md:pl-12">
            <p className="text-foreground mb-6">
              
              Our firm brings expertise and personalized attention to every case. 
              We have successfully processed thousands of visa applications for clients 
              from over 100 countries, maintaining a success rate that exceeds industry standards.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {stats.map(({ label, end, suffix }, i) => (
                <div key={i} className="flex items-center">
                  <StatCounter
                    end={end}
                    suffix={suffix}
                    className="text-4xl font-bold text-primary"
                  />
                  <span className="ml-4 text-foreground font-medium">
                    {label.split(' ').map((w, idx) => (
                      <React.Fragment key={idx}>
                        {w}
                        <br />
                      </React.Fragment>
                    ))}
                  </span>
                </div>
              ))}
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[

                'Free Immigration Assessment',
                'Expert Document Preparation',
                'Visa Application Assistance',
                'Job Placement Services',
                'Settlement Services',
                'Appeal Support',
              ].map((service, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle
                    size={18}
                    className="text-primary mt-1 mr-2 flex-shrink-0"
                  />
                  <span className="text-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      
      </div>
    </section>
  );
};




//  interface ServiceItem {
//   title: string;
//   description: string;
//   icon: ReactNode;
//   highlighted?: boolean;
//   buttonText?: string;
// }


