"use client"
import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, UserCheck, Globe, FileCheck, Briefcase, Plane } from 'lucide-react';
import StatCounter from './stat-counter';

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block text-red-600 font-semibold mb-2">ABOUT OUR COMPANY</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Welcome To Experience Visa Consulting Firm
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 md:text-lg">
            Our firm is a leading provider of immigration and visa services worldwide. 
            We specialize in helping individuals and businesses navigate complex immigration processes.
          </p>
        </div>

        <div className="flex flex-col justify-between md:flex-row items-center mb-16">
          <div className="ml-10 md:w-1/4 mb-8 md:mb-0 relative">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/8867433/pexels-photo-8867433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Visa consultant with client" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 hidden md:block">
                <img 
                  src="https://images.pexels.com/photos/5699516/pexels-photo-5699516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Passport and documents" 
                  className="w-40 h-40 object-cover rounded-lg shadow-xl border-4 border-white"
                />
              </div>
              
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-red-600 rounded-full flex items-center justify-center shadow-lg hidden md:flex">
                <span className="text-white font-bold text-3xl">15+</span>
                <span className="text-white text-xs absolute bottom-5">Years Exp.</span>
              </div>
            </div>
          </div>
          
          <div className="mr-10 md:w-2/4 md:pl-12">
            <p className="text-gray-700 mb-6">
              Our firm brings expertise and personalized attention to every case. 
              We have successfully processed thousands of visa applications for clients 
              from over 100 countries, maintaining a success rate that exceeds industry standards.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="flex items-center">
                <StatCounter
                  end={96}
                  suffix="%"
                  className="text-4xl font-bold text-red-600"
                />
                <span className="ml-4 text-gray-800 font-medium">
                  Success<br />Rate
                </span>
              </div>
              
              <div className="flex items-center">
                <StatCounter
                  end={24}
                  suffix="/7"
                  className="text-4xl font-bold text-red-600"
                />
                <span className="ml-4 text-gray-800 font-medium">
                  Customer<br />Support
                </span>
              </div>
            </div>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Free Immigration Assessment",
                "Expert Document Preparation",
                "Visa Application Assistance",
                "Interview Preparation",
                "Settlement Services",
                "Appeal Support"
              ].map((service, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle size={18} className="text-red-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <ServiceCard 
            icon={<UserCheck size={32} />}
            title="Immigration Consulting"
            description="Expert guidance on all immigration pathways, including skilled migration, family sponsorship, and humanitarian programs."
          />
          
          <ServiceCard 
            icon={<FileCheck size={32} />}
            title="Visa Processing"
            description="End-to-end assistance with visa applications, ensuring accurate documentation and timely submission."
          />
          
          <ServiceCard 
            icon={<Globe size={32} />}
            title="Global Mobility"
            description="Solutions for businesses and individuals looking to relocate or expand operations internationally."
          />
          
          <ServiceCard 
            icon={<Briefcase size={32} />}
            title="Business Immigration"
            description="Specialized services for entrepreneurs, investors, and businesses seeking to establish presence abroad."
          />
          
          <ServiceCard 
            icon={<Plane size={32} />}
            title="Student Visas"
            description="Comprehensive support for international students pursuing education opportunities worldwide."
          />
          
          <ServiceCard 
            highlighted={true}
            title="Get Started Today"
            description="Schedule a consultation with our immigration experts to discuss your visa and immigration needs."
            buttonText="Book Consultation"
          />
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  highlighted?: boolean;
  buttonText?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, highlighted = false, buttonText }) => {
  return (
    <div 
      className={`p-8 rounded-lg transition-all duration-300 h-full flex flex-col
        ${highlighted 
          ? 'bg-gradient-to-br from-red-600 to-red-700 text-white shadow-xl transform hover:-translate-y-1' 
          : 'bg-white border border-gray-200 hover:shadow-lg hover:border-red-200'}`}
    >
      {icon && (
        <div className={`w-16 h-16 rounded-full mb-6 flex items-center justify-center
          ${highlighted ? 'bg-white/20' : 'bg-red-100'}`}>
          <span className={highlighted ? 'text-white' : 'text-red-600'}>
            {icon}
          </span>
        </div>
      )}
      
      <h3 className={`text-xl font-bold mb-4 ${highlighted ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h3>
      
      <p className={`mb-6 ${highlighted ? 'text-white/90' : 'text-gray-600'} flex-grow`}>
        {description}
      </p>
      
      {buttonText ? (
        <button className="mt-auto inline-block bg-white text-red-600 hover:bg-gray-100 font-medium px-6 py-3 rounded-md transition-colors duration-300">
          {buttonText}
        </button>
      ) : (
        <a 
          href="#" 
          className={`mt-auto inline-block font-medium 
            ${highlighted ? 'text-white' : 'text-red-600 hover:text-red-700'}`}
        >
          Learn More →
        </a>
      )}
    </div>
  );
};

export default Features;