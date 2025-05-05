import Image from 'next/image';
import React from 'react';

export const Newsletter = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <span className="text-sm text-gray-600 uppercase tracking-wider">Newsletter</span>
            <h2 className="text-3xl font-bold mt-2 mb-4">
              Subscribe to the free newsletter to receive the latest news & case studies!
            </h2>
            <div className="flex max-w-md">
              <input
                type="email"
                placeholder="Your e-mail address"
                className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button className="px-6 py-3 bg-red-600 text-white rounded-r-lg hover:bg-red-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 lg:pl-12">
            <Image
              src="https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Newsletter illustration"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

