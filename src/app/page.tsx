
import { BlogSection } from '@/components/ui/blog-section';
// import { ContactUs } from '@/components/ui/contact-us';
// import { ContentWithImageDynamicCounter } from '@/components/ui/content-with-image-dynamic-counter';
import { CountriesSection } from '@/components/ui/countries-section';
// import { FAQ } from '@/components/ui/FAQ';
// import { FAQ2 } from '@/components/ui/FAQ2';
// import {  Feature1Animated } from '@/components/ui/feature1-animated';
// import { FeaturesWithLastFilled } from '@/components/ui/features-with-last-filled';


import { Features2 } from '@/components/ui/features2';
import { Footer } from '@/components/ui/footer';
import { HeaderBolt } from '@/components/ui/header-bolt';

import { HeroSection } from '@/components/ui/hero';

// import { ImageWith4Features } from '@/components/ui/image-with-4-features';
import { ImageWithTitleAndFeatures } from '@/components/ui/image-with-title-and-features.tsx';
// import { Newsletter } from '@/components/ui/news-letter';
// import { Pricing } from '@/components/ui/pricing';
// import { Process } from '@/components/ui/process';
// import { Services } from '@/components/ui/services';
// import { Stats } from '@/components/ui/stats';
import { Testimonials } from '@/components/ui/testimonials';
// import { TopBar } from '@/components/ui/top-bar';
import React from 'react';


export default function App() {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
   
      <HeaderBolt />
      <HeroSection />
      {/* <TopBar/> */}
      <ImageWithTitleAndFeatures />
      <CountriesSection/>
      <Features2/>
      <BlogSection/>
      <Testimonials />
      <Footer />
{/* <ContactUs />
<FAQ2/>
      <FAQ/>
      <ImageWith4Features />
     
      <Newsletter/>
      <Pricing/>
      <Process/>
      <Services />
      <Stats/>




      <Feature1Animated/>
      <ImageWith4Features/>
  <ContentWithImageDynamicCounter/>
  <FeaturesWithLastFilled/> */}

      
    </div>
  );
}

