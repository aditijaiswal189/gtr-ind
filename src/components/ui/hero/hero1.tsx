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

// const heroSlides: SlideData[] = [
//   {
//     id: 1,
//     imageUrl:
//       "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     alt: "Business professionals in discussion",
//     title: "Business in Canada",
//     subtitle:
//       "C11, Start Up Visa, PNP Entrepreneur minimum investment of $100K .Talk to our experts",
//     buttonText: "Book an Appointment",
//     buttonLink: "/about-us/about/book-appointment",
//   },
//   {
//     id: 2,
//     imageUrl:
//       "https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     alt: "Business professionals in discussion",
//     title: "Study in Canada",
//     subtitle:
//       "Studying in Canada offers a world-class education, diverse cultural experiences, and excellent opportunities for personal and professional growth",
//     buttonText: "Book an Appointment",
//     buttonLink: "/about-us/about/book-appointment",
//   },
//   {
//     id: 3,
//     imageUrl: "/images/hero/d.avif",
//     alt: "Business professionals in discussion",
//     title: "Work in Canada",
//     subtitle:
//       "Working in Canada offers a wide array of opportunities for skilled workers from around the world",
//     buttonText: "Book an Appointment",
//     buttonLink: "/about-us/about/book-appointment",
//   },
//   {
//     id: 4,
//     imageUrl:
//       "https://images.pexels.com/photos/3205570/pexels-photo-3205570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     alt: "Business professionals in discussion",
//     title: "Immigrate to Canada",
//     subtitle:
//       "Invest and build your business while ensuring Canadian permanent residency for your family",
//     buttonText: "Book an Appointment",
//     buttonLink: "/about-us/about/book-appointment",
//   },
// ];

//  <Hero1 slides={heroSlides} autoplaySpeed={6000} />
