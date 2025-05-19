"use client";
import React, { useState, useCallback } from "react";
import HeroImage, { SlideData } from "./hero-image";
import useInterval from "@/hooks/use-interval";
import HeroContent from "./hero-content";
import SlideIndicators from "./slide-indicators";

interface Hero1Props {
  slides: SlideData[];
  autoplaySpeed?: number;
}

const Hero1: React.FC<Hero1Props> = ({
  slides,

  autoplaySpeed = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  const selectSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Setup interval for automatic slide change
  useInterval(nextSlide, autoplaySpeed);

  const { title, subtitle, buttonText, buttonLink } = slides[currentIndex];
  return (
    <section className="relative h-screen max-h-[800px] w-full overflow-hidden">
      {/* Background Images */}
      <HeroImage slides={slides} currentIndex={currentIndex} />

      {/* Geometric accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full z-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-red-600/20 clip-diagonal"></div>
      </div>

      {/* Content */}
      <HeroContent
        title={title}
        subtitle={subtitle}
        buttonText={buttonText}
        buttonLink={buttonLink}
      />

      {/* Slide Indicators */}
      <SlideIndicators
        slides={slides}
        currentIndex={currentIndex}
        onSelect={selectSlide}
      />
    </section>
  );
};

export default Hero1;
