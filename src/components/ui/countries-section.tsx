"use client";
import { motion } from 'framer-motion';

interface Country {
  name: string;
  flag: string;
  description: string;
}

const countries: Country[] = [
  {
    name: 'Canada',
    flag: 'https://flagcdn.com/w320/ca.png',
    description: 'Average time to resolve a cyber.'
  },
  {
    name: 'France',
    flag: 'https://flagcdn.com/w320/fr.png',
    description: 'Average time to resolve a cyber.'
  },
  {
    name: 'Australia',
    flag: 'https://flagcdn.com/w320/au.png',
    description: 'Average time to resolve a cyber.'
  },
  {
    name: 'United States',
    flag: 'https://flagcdn.com/w320/us.png',
    description: 'Average time to resolve a cyber.'
  },
  {
    name: 'India',
    flag: 'https://flagcdn.com/w320/in.png',
    description: 'Average time to resolve a cyber.'
  },
  {
    name: 'Dubai',
    flag: 'https://flagcdn.com/w320/ae.png',
    description: 'Average time to resolve a cyber.'
  }
];

const CountriesSection = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-wider text-red-600 uppercase mb-3">
            COUNTRIES WE OFFER
          </p>
          <h2 className="text-4xl font-bold text-gray-900">
            Countries We Support<br />For Immigration
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4">
                <motion.div
                  className="w-16 h-16 overflow-hidden rounded-full"
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={country.flag}
                    alt={`${country.name} flag`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{country.name}</h3>
                  <p className="text-gray-600 text-sm">{country.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountriesSection;