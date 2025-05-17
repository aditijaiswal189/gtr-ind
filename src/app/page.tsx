import { BlogSection } from "@/components/ui/blog-section";
import { Footer } from "@/components/ui/footer";
// import {HeaderHome } from '@/components/ui/header-home';
// import { HeroSection } from "@/components/ui/hero";
import { ImageWithTitleAndFeatures } from "@/components/ui/image-with-title-and-features.tsx";
import { CountriesSection } from "@/components/ui/countries-section";
import { Testimonials } from "@/components/ui/testimonials";
import React from "react";
import { HeaderHome } from "@/components/ui/header-home";
import { TimelineSection } from "@/components/ui/timeline-section";
import { TopBar } from "@/components/ui/top-bar";
import Hero1 from "@/components/ui/hero/hero1";
import { SlideData } from "@/components/ui/hero/hero-image";

const heroSlides: SlideData[] = [
  {
    id: 1,
    imageUrl:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Business professionals in discussion",
  },
  {
    id: 2,
    imageUrl:
      "https://images.pexels.com/photos/3205570/pexels-photo-3205570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Business team working together",
  },
  {
    id: 3,
    imageUrl: "/images/hero/d.avif",
    alt: "Professional team consulting with client",
  },
  {
    id: 4,
    imageUrl:
      "https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Professionals in a modern office",
  },
];
export default function App() {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <TopBar />
      <HeaderHome />
      {/* <MegaMenuBar/> */}
      {/* <HeroSection /> */}
      <Hero1
        slides={heroSlides}
        title="Business in Canada"
        subtitle="  C11, Start Up Visa, PNP Entrepreneur minimum investment of $100K"
        buttonText="Book an Appointment"
        buttonLink="/about-us/about/book-appointment"
        autoplaySpeed={6000}
      />
      <ImageWithTitleAndFeatures />
      <CountriesSection />
      <TimelineSection />

      <BlogSection />
      <Testimonials />
      <Footer />
    </div>
  );
}
