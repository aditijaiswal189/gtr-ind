"use client";
import { fadeIn } from "@/lib/animation";
import React from "react";

// import { fadeIn } from "../../utils/animations";
export interface SlideData {
  id: number;
  imageUrl: string;
  alt: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}
interface HeroImageProps {
  slides: SlideData[];
  currentIndex: number;
}

const HeroImage: React.FC<HeroImageProps> = ({ slides, currentIndex }) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 ${fadeIn} ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.imageUrl}
            alt={slide.alt}
            className="object-cover w-full h-full"
          />
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-20"></div>
        </div>
      ))}
    </div>
  );
};

export default HeroImage;
