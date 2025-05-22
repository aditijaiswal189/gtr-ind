"use client";
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

import HeroSectionNew from "@/components/ui/hero-new/hero-section-new";

export default function App() {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <TopBar />
      <HeaderHome />
      <HeroSectionNew />

      <ImageWithTitleAndFeatures />
      <CountriesSection />
      <TimelineSection />

      <BlogSection />
      <Testimonials />
      <Footer />
    </div>
  );
}
