import React, { useState, useEffect } from "react";

// Sample images and content from Pexels
const slides = [
  {
    image: "/images/hero/g.avif",
    title: "Business in Canada",
    subtitle:
      "C11, Start Up Visa, PNP Entrepreneur minimum investment of $100K.Talk to our experts",
  },
  {
    image: "/images/hero/f.avif",
    title: "Study in Canada",
    subtitle:
      "Studying in Canada offers a world-class education, diverse cultural experiences, and excellent opportunities for personal and professional growth",
  },
  {
    image: "/images/hero/d.avif",
    title: "Work in Canada",
    subtitle:
      "Working in Canada offers a wide array of opportunities for skilled workers from around the world",
  },
  {
    image: "/images/hero/e.avif",
    title: "Immigrate to Canada",
    subtitle:
      "Invest and build your business while ensuring Canadian permanent residency for your family",
    buttonText: "Book an Appointment",
  },
];

const HeroSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // Auto-rotate images every 5 seconds if not paused
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Images and Text Overlay */}
      <div className="w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out 
              ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for better text contrast */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center pl-10  text-white">
              <h2 className="text-4xl  md:text-6xl font-bold mb-10 transform transition-all duration-1000 translate-y-0">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl pr-24 transform transition-all duration-1000 translate-y-0">
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute bottom-5 left-0 right-0 z-20 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 
              ${
                index === currentIndex
                  ? "bg-primary"
                  : "bg-white/50 hover:bg-white/70"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
