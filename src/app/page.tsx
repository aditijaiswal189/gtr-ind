import BlogSection from '@/components/ui/blog-section';
import { Button } from '@/components/ui/button';
import Coaching from '@/components/ui/coaching';
import Coaching2 from '@/components/ui/coaching2';
import Contact from '@/components/ui/contact-us';
import CountriesSection from '@/components/ui/countries-section';
// import Faq from '@/components/ui/FAQ';
import Features from '@/components/ui/features';
import Features2 from '@/components/ui/features2';
import Footer from '@/components/ui/footer';
import Header from '@/components/ui/header-bolt';
import Hero from '@/components/ui/hero';
// import Hero from '@/components/ui/hero';
import HorizontalCard from '@/components/ui/horizontal-card';
import Navbar from '@/components/ui/navbar';
import Newsletter from '@/components/ui/news-letter';
import Pricing from '@/components/ui/pricing';
import Process from '@/components/ui/process';
import Services from '@/components/ui/services';
import Stats from '@/components/ui/stats';
import Testimonials from '@/components/ui/testimonials';
// import UpdatedMobileNavbar from '@/components/ui/updated-mobile-navbar';
import React from 'react';


function App() {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      {/* <Navbar/> */}
      <Header />
      <Hero />
      {/* <Features /> */}
      {/* <HorizontalCard/> */}
      {/* <Coaching/> */}
      <Coaching2/>


      {/* <Faq/> */}
      {/* <Newsletter/>
      <Pricing/>
      <Process/>
      <Stats/>
      <Services />
      <Testimonials />
      */}
      {/* <Contact /> */}
      <BlogSection/>
      <CountriesSection/>
      <Features2/>
      <Footer />
    </div>
  );
}

export default App;