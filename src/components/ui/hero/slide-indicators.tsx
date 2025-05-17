import React from "react";
import { SlideData } from "./hero-image";

interface SlideIndicatorsProps {
  slides: SlideData[];
  currentIndex: number;
  onSelect: (index: number) => void;
}

const SlideIndicators: React.FC<SlideIndicatorsProps> = ({
  slides,
  currentIndex,
  onSelect,
}) => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 flex space-x-2">
      {slides.map((_, index) => (
        <button
          key={index}
          className={`h-2 w-2 md:h-3 md:w-3 rounded-full transition-all duration-300 ${
            index === currentIndex
              ? "bg-red-600 scale-125"
              : "bg-white/50 hover:bg-white/80"
          }`}
          onClick={() => onSelect(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default SlideIndicators;
