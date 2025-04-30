import Coaching from '@/components/ui/coaching';
import Contact from '@/components/ui/contact-us';
// import Faq from '@/components/ui/FAQ';
import Features from '@/components/ui/features';
import Features2 from '@/components/ui/features2';
import Footer from '@/components/ui/footer';
import Header from '@/components/ui/header-bolt';
import Hero from '@/components/ui/hero';
import Newsletter from '@/components/ui/news-letter';
import Pricing from '@/components/ui/pricing';
import Process from '@/components/ui/process';
import Services from '@/components/ui/services';
import Stats from '@/components/ui/stats';
import Testimonials from '@/components/ui/testimonials';
import React from 'react';


function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Features2/>
      <Coaching/>
      {/* <Faq/> */}
      <Newsletter/>
      <Pricing/>
      <Process/>
      <Stats/>
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;