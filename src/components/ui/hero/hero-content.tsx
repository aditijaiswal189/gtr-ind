"use client";
import React from "react";

import { ArrowRight } from "lucide-react";
import { HeroProps } from "./hero1";
import { buttonHover } from "@/lib/animation";

const HeroContent: React.FC<HeroProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="relative z-30 flex flex-col items-start justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="w-full md:max-w-2xl lg:max-w-3xl">
        <div className="inline-block bg-primary-yellow px-4 py-2 mb-6">
          <p className="text-white font-semibold">
            Recruitment | Immigration | Settlement
          </p>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {title}
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
          {subtitle}
        </p>

        <a
          href={buttonLink}
          className={`${buttonHover} bg-primary-green hover:bg-red-700 text-white px-8 py-3 rounded inline-flex items-center font-medium`}
        >
          {buttonText}
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </div>
  );
};

export default HeroContent;
