import React from 'react';
import { BookOpen, Award, GraduationCap, Brain } from 'lucide-react';

const Coaching = () => {
  const courses = [
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "TOEFL",
      description: "Scoring parameters in each of the modules."
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "PTE Coaching",
      description: "We provide PTE online coaching classes."
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "IELTS Coaching",
      description: "Scoring method the band of 0-9."
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "GMAT",
      description: "Master in management or business oriented studies."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img
              src="https://images.pexels.com/photos/4778621/pexels-photo-4778621.jpeg"
              alt="Students studying"
              className="rounded-lg shadow-xl"
            />
          </div>
          
          <div className="lg:w-1/2">
            <div className="mb-8">
              <span className="text-red-600 font-semibold">VALUE FOR VISA COACHING</span>
              <h2 className="text-4xl font-bold mt-2 mb-4">Benefits Of Visa Online</h2>
              <h3 className="text-3xl font-bold mb-6">Coaching & Preparation</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {courses.map((course, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-red-600 mb-4">
                    {course.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{course.title}</h4>
                  <p className="text-gray-600">{course.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coaching;