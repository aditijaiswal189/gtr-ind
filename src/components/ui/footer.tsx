import React from 'react';
import { Globe, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6 pr-2">
              {/* <Globe className="w-8 h-8 text-red-600 mr-2" />
              <span className="font-bold text-2xl">VISA<span className="text-red-600">LAND</span></span> */}
              <Image src="/logo3.png"/>
            </div>
            <p className="text-gray-400 mb-6 ">
            Feeling uncertain about your immigration journey? Our experienced team of GreenTech Resource Worldwide Canada is here to provide expert guidance and support you!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Immigration</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Business</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Study</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Work </a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Other Services</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">News</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">LMIA Map</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Jobs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Visitor</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Family sponsorship</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest immigration updates.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 text-white"
              />
              <button
                type="submit"
                className="w-full bg-red-600 text-white font-medium py-2 rounded-md hover:bg-red-700 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Greentech resources. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

