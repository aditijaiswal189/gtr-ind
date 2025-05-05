
import { BlogSection } from '@/components/ui/blog-section';
import { Features2 } from '@/components/ui/features2';
import { Footer } from '@/components/ui/footer';
import {HeaderHome } from '@/components/ui/header-home';

import { HeroSection } from '@/components/ui/hero';
import { ImageWithTitleAndFeatures } from '@/components/ui/image-with-title-and-features.tsx';
import { CountriesSection } from '@/components/ui/countries-section';
import { ContactUs } from '@/components/ui/contact-us';
import { ContentWithImageDynamicCounter } from '@/components/ui/content-with-image-dynamic-counter';
import { FAQ } from '@/components/ui/FAQ';
import { FAQ2 } from '@/components/ui/FAQ2';
import {  Feature1Animated } from '@/components/ui/feature1-animated';
import { FeaturesWithLastFilled } from '@/components/ui/features-with-last-filled';




import { Newsletter } from '@/components/ui/news-letter';
import { Pricing } from '@/components/ui/pricing';
import { Process } from '@/components/ui/process';
import { Services } from '@/components/ui/services';
import { Stats } from '@/components/ui/stats';
import { TopBar } from '@/components/ui/top-bar';
import { Testimonials } from '@/components/ui/testimonials';
import React from 'react';
import { ImgWith4Features } from '@/components/ui/img-with-4-features';
import { ContentWithImage } from '@/components/ui/content-with-Image';
import { CtaWith4Features } from '@/components/ui/cta-with-4-features';


export default function App() {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <HeaderHome />
   
      
      <HeroSection />
      <ImageWithTitleAndFeatures />
      <CountriesSection/>
      <Features2/>
      <BlogSection/>
      <Testimonials />
      <Footer />
     


      
    </div>
  );
}

