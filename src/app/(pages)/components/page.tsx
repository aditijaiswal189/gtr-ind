
import { BlogSection } from '@/components/ui/blog-section';
import { ContactUs } from '@/components/ui/contact-us';
import { ContentWithImage } from '@/components/ui/content-with-Image';
import { ContentWithImageDynamicCounter } from '@/components/ui/content-with-image-dynamic-counter';
import { CountriesSection } from '@/components/ui/countries-section';
import { CtaWith4Features } from '@/components/ui/cta-with-4-features';
import { FAQ } from '@/components/ui/FAQ';
import { FAQ2 } from '@/components/ui/FAQ2';
import { Feature1Animated } from '@/components/ui/feature1-animated';
import { FeaturesWithLastFilled } from '@/components/ui/features-with-last-filled';
import { Features2 } from '@/components/ui/features2';
import { Footer } from '@/components/ui/footer';
import { HeaderHome } from '@/components/ui/header-home';
import { HeroSection } from '@/components/ui/hero';
import { ImageWithTitleAndFeatures } from '@/components/ui/image-with-title-and-features.tsx';
import { ImgWith4Features } from '@/components/ui/img-with-4-features';
import { Newsletter } from '@/components/ui/news-letter';
import { Pricing } from '@/components/ui/pricing';
import { Process } from '@/components/ui/process';
import { Services } from '@/components/ui/services';
import { Stats } from '@/components/ui/stats';
import { Testimonials } from '@/components/ui/testimonials';
import { TopBar } from '@/components/ui/top-bar';
import React from 'react';

const Page: React.FC = () => {
    return (
        <div>
            <h1 className='text-center text-3xl'>Blog Card</h1>
            
            
            <BlogSection/>
            
            
            <h1 className='text-center text-3xl'>Hero Section</h1>
       
      <HeroSection />
      <h1 className='text-center text-3xl'>ImageWithTitleAndFeatures</h1>
           
      <ImageWithTitleAndFeatures />
      <h1 className='text-center text-3xl'>CountriesSection</h1>
     
      <CountriesSection/>
      <h1 className='text-center text-3xl'>Features2</h1>
      <Features2/>
      <h1 className='text-center text-3xl'>Blog Section</h1>
      <BlogSection/>
      <h1 className='text-center text-3xl'>Testimonials</h1>
      <Testimonials />
      <h1 className='text-center text-3xl'>TopBar</h1>
      

      <TopBar/>
      <h1 className='text-center text-3xl'>ContentWithImage</h1>
            <ContentWithImage/>
      <h1 className='text-center text-3xl'>CtaWith4Features</h1>

            <CtaWith4Features/>
      <h1 className='text-center text-3xl'>Contact Us</h1>
   
            <ContactUs />
            <h1 className='text-center text-3xl'>FAQ2</h1>
<FAQ2/>
      <h1 className='text-center text-3xl'>FAQ</h1>
      <FAQ/>
      <h1 className='text-center text-3xl'>ImgWith4Features</h1>
      <ImgWith4Features />
      <h1 className='text-center text-3xl'>Newsletter</h1>
    
     
      <Newsletter/>
      <h1 className='text-center text-3xl'>Pricing</h1>
      
      <Pricing/>
      <h1 className='text-center text-3xl'>Process</h1>
    
      <Process/>
      <h1 className='text-center text-3xl'>Services</h1>
      <Services />
      <h1 className='text-center text-3xl'>Stats</h1>
     
      <Stats/>
      <h1 className='text-center text-3xl'>Feature1Animated</h1>
      <Feature1Animated/>
      <h1 className='text-center text-3xl'>ContentWithImageDynamicCounter</h1>
  <ContentWithImageDynamicCounter/>
      <h1 className='text-center text-3xl'>FeaturesWithLastFilled</h1>
  <FeaturesWithLastFilled/>
      <Footer />
        </div>
    );
};

export default Page;