"use client";
import { motion } from 'framer-motion';
import { SectionHeader } from './section-header';
import React from 'react';
import { Award, BookOpen, Brain, GraduationCap } from 'lucide-react';

interface Country {
  name: string;
  flag: string;
  description: React.ReactNode | string;
}

const countries: Country[] = [
  { name: 'Canada', flag: 'https://flagcdn.com/w320/ca.png', description: 'Average time to resolve a cyber.' },
  { name: 'India', flag: 'https://flagcdn.com/w320/in.png', description: 'Average time to resolve a cyber.' },
  { name: 'Vietnam', flag: 'https://flagcdn.com/w320/vn.png', description: <>
    Average time to resolve a cyber.
 


    </> }
  // { name: 'Australia', flag: 'https://flagcdn.com/w320/au.png', description: 'Average time to resolve a cyber.' },
  // { name: 'United States', flag: 'https://flagcdn.com/w320/us.png', description: 'Average time to resolve a cyber.' },
  // { name: 'Dubai', flag: 'https://flagcdn.com/w320/ae.png', description: 'Average time to resolve a cyber.' },
];

export const CountriesSection = () => {
  return (
    <div className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="COUNTRIES WE OFFER"
          subtitle={
            <>
              Countries We Support
              <br />
              For Immigration
            </>
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4"> <motion.div
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
                  <h3 className="text-xl font-semibold text-foreground">
                    {country.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {country.description}
                  </p>
                </div>
              </div>
              <div><div className="grid grid-cols-1 md:grid-cols-1 gap-2">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="bg-card text-card-foreground p-4 rounded-lg  hover:shadow-xl transition-shadow"
                >
                  {/* <div className="text-primary mb-2">{course.icon}</div> */}
                  <h4 className="text-lg font-bold mb-2">{course.title}</h4>
                  <p className="text-muted-foreground">{course.description}</p>
                </div>
              ))}
            </div></div>
              </div> 
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
const courses = [
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Immigration',
    description: 'We provide immigration facilities for students.',
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: 'Services',
    description: 'Services we offer for students.',
  },
  // {
  //   icon: <GraduationCap className="w-12 h-12" />,
  //   title: 'IELTS Coaching',
  //   description: 'Scoring method the band of 0-9.',
  // },
  // {
  //   icon: <Brain className="w-12 h-12" />,
  //   title: 'GMAT',
  //   description: 'Master in management or business oriented studies.',
  // },
];