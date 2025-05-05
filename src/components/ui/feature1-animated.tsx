// Feature.tsx
"use client";
import React from "react";
import { ReactNode } from "react";
import { UserCheck, Globe } from "lucide-react";
import Link from "next/link";

export const Feature1Animated: React.FC = () => (
  <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="grid gap-8 row-gap-5 md:grid-cols-2">
      {featureItems.map((item, idx) => (
        <div
          key={idx}
          className="relative p-px overflow-hidden transition duration-300 transform border-border rounded shadow-sm hover:scale-105 group hover:shadow-xl"
        >
          {/* animated borders */}
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-primary group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-primary group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-primary group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-primary group-hover:scale-y-100" />

          <div className="relative flex flex-col h-full p-5 bg-card rounded-sm lg:items-center lg:flex-row">
            <div className="mb-6 mr-6 lg:mb-0">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-muted lg:w-32 lg:h-32">
                {item.icon}
              </div>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <div>
                <h6 className="mb-2 font-semibold leading-5 text-foreground">
                  {item.title}
                </h6>
                <p className="mb-2 text-sm text-foreground">
                  {item.description}
                </p>
              </div>
              <Link
                href={item.link}
                aria-label={item.title}
                className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-primary hover:text-primary-foreground"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);



interface FeatureItem {
  title: string;
  description: string;
  link: string;
  icon: ReactNode;
}

 const featureItems: FeatureItem[] = [
  {
    title: "The quick, brown fox jumps over a very lazy dog",
    description:
      "Cheese on toast airedale the big cheese. Danish fontina cheesy grin airedale danish fontina taleggio the big cheese macaroni cheese port-salut.",
    link: "/",
    icon: (
      <UserCheck className="w-16 h-16 text-primary lg:w-20 lg:h-20" />
    ),
  },
  {
    title: "Disrupt inspire and think tank, social",
    description:
      "A flower in my garden, a mystery in my panties. Heart attack never stopped old Big Bear. I didn’t even know we were calling him Big Bear. We never had the chance to.",
    link: "/",
    icon: <Globe className="w-16 h-16 text-primary lg:w-20 lg:h-20" />,
  },
];
