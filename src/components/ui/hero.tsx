import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gray-900 z-0">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1600')] opacity-20 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-gray-900/70"></div>
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute border border-gray-700 rounded-full"
              style={{
                width: `${Math.random() * 200 + 50}px`,
                height: `${Math.random() * 200 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.3 + 0.1,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Red diagonal stripe */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600 -skew-x-12 translate-x-1/3 z-0"></div>

      <div className="relative z-10 min-h-[90vh] flex flex-col justify-center">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-20">
          <div className="max-w-3xl text-white">
            <div className="inline-block px-4 py-2 mb-6 bg-red-600 text-white text-sm font-semibold rounded-md">
              Your Most Trusted Partners
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Immigration & Visa Consulting Here...
            </h1>
            
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl">
              We are the world's leading provider of immigration and visa consulting services. 
              With over 15 years of experience, we help you navigate the complex immigration process.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-3 rounded-md flex items-center transition-all duration-300 transform hover:translate-x-1">
                Learn More 
                <ArrowRight size={20} className="ml-2" />
              </button>
              
              <button className="bg-transparent hover:bg-white/10 border border-white/30 text-white font-medium px-8 py-3 rounded-md transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;