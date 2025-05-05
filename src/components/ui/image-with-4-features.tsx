import React from 'react';
import { BookOpen, Award, GraduationCap, Brain } from 'lucide-react';
import Image from 'next/image';

export const ImageWith4Features = () => {
  const courses = [
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: 'TOEFL',
      description: 'Scoring parameters in each of the modules.',
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: 'PTE Coaching',
      description: 'We provide PTE online coaching classes.',
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: 'IELTS Coaching',
      description: 'Scoring method the band of 0-9.',
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: 'GMAT',
      description: 'Master in management or business oriented studies.',
    },
  ];

  return (
    <section className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <Image
              src="https://images.pexels.com/photos/4778621/pexels-photo-4778621.jpeg"
              alt="Students studying"
              className="rounded-lg shadow-xl"
            />
          </div>

          <div className="lg:w-1/2">
             
             
             
           

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="bg-card text-card-foreground p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-primary mb-4">{course.icon}</div>
                  <h4 className="text-xl font-bold mb-2">{course.title}</h4>
                  <p className="text-muted-foreground">{course.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

 

