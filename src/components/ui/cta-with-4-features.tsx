"use client";
import React from "react";
import { CheckCircle, Plane } from "lucide-react";

interface FeatureBoxProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

const FeatureBox: React.FC<FeatureBoxProps> = ({ icon, title, description }) => (
  <div>
    <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-primary/20 text-primary">
      {icon ?? <Plane className="w-6 h-6" />}
    </div>
    <h6 className="mb-2 font-semibold leading-5 text-foreground">{title}</h6>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

export const CtaWith4Features = () => {
  const features = [
    {
      title: "The quick, brown fox jumps over a lazy dog",
      description:
        "Baseball ipsum dolor sit amet cellar rubber win hack tossed. Slugging catcher slide bench league.",
    },
    {
      title: "A flower in my garden, a mystery",
      description:
        "They urge you to put down your sword and come join the winners.",
    },
    {
      title: "Skate ipsum dolor sit amet, alley oop",
      description:
        "If one examines precultural libertarianism, one is faced with a choice: either accept rationalism.",
    },
    {
      title: "The first mate and his Skipper too will",
      description:
        "Those options are already baked in with this model shoot me an email clear blue water.",
    },
  ];

  return (
    <section className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 z-0 w-full h-full bg-muted lg:w-3/4" />
      </div>
      <div className="relative z-10">
        <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
          <div className="grid gap-12 row-gap-6 md:grid-cols-2">
            {features.map((feature, index) => (
              <FeatureBox key={index} title={feature.title} description={feature.description} />
            ))}
          </div>
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              alt="CTA Visual"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
