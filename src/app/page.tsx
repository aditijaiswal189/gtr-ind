
import { BlogSection } from '@/components/ui/blog-section';
import { Footer } from '@/components/ui/footer';
// import {HeaderHome } from '@/components/ui/header-home';
import { HeroSection } from '@/components/ui/hero';
import { ImageWithTitleAndFeatures } from '@/components/ui/image-with-title-and-features.tsx';
import { CountriesSection } from '@/components/ui/countries-section';
import { Testimonials } from '@/components/ui/testimonials';
import React from 'react';
import Timeline from '@/components/ui/timeline';
import { HeaderHome } from '@/components/ui/header-home';




export default function App() {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <HeaderHome />
      {/* <MegaMenuBar/> */}
      <HeroSection />
      <ImageWithTitleAndFeatures />
      <CountriesSection/>
<Timeline  />
      
      <BlogSection/>
      <Testimonials />
      <Footer />
    </div>
  );
}

