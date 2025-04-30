import React from 'react';
import { BookOpen, Award, GraduationCap, Brain } from 'lucide-react';

const Coaching = () => {
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
            <img
              src="https://images.pexels.com/photos/4778621/pexels-photo-4778621.jpeg"
              alt="Students studying"
              className="rounded-lg shadow-xl"
            />
          </div>

          <div className="lg:w-1/2">
            <div className="mb-8">
              {/* <span className="text-primary font-semibold">
                Services 
              </span> */}
              <h2 className="text-4xl font-bold mt-2 mb-4">
                STUDY
              </h2>
              {/* <h3 className="text-3xl font-bold mb-6">
                Coaching & Preparation
              </h3> */}
            </div>

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

export default Coaching;
// import {
//     BookOpen,
//     Award,
//     GraduationCap,
//     Brain,
//   } from "lucide-react";
// import ImageWithCards from "./image-with-cards";
// import Container from "./container";
  
//   const CoachingSection = () => {
//     const cards = [
//       {
//         icon: <BookOpen className="w-12 h-12" />,
//         title: "TOEFL",
//         description: "Scoring parameters in each of the modules.",
//       },
//       {
//         icon: <Award className="w-12 h-12" />,
//         title: "PTE Coaching",
//         description: "We provide PTE online coaching classes.",
//       },
//       {
//         icon: <GraduationCap className="w-12 h-12" />,
//         title: "IELTS Coaching",
//         description: "Scoring method the band of 0-9.",
//       },
//       {
//         icon: <Brain className="w-12 h-12" />,
//         title: "GMAT",
//         description: "Master in management or business oriented studies.",
//       },
//     ];
  
//     return (
//         <>
//         <Container  className="border-blue bg-blue"><ImageWithCards
//         imageUrl="https://images.pexels.com/photos/4778621/pexels-photo-4778621.jpeg"
//         imageAlt="Students learning"
//         imagePosition="left"
//         label="STUDY IN CANADA"
//         heading="Study"
//         subheading=""
//         cards={cards}
//       /></Container>
      
      
//       <ImageWithCards
//         imageUrl="https://images.pexels.com/photos/4778621/pexels-photo-4778621.jpeg"
//         imageAlt="Students learning"
//         imagePosition="right"
//         label="STUDY IN CANADA"
//         heading="Study"
//         subheading=""
//         cards={cards}
//       />
// </>
//     );
//   };
  
//   export default CoachingSection;
  

//   import React from 'react';
// import Card from './Card';
// import { BookOpen, Award, GraduationCap, Brain, BookMarked, Headphones, PenTool, Timer, Target, Presentation, Users, LineChart, BookCheck, MessageSquare, Lightbulb, TrendingUp } from 'lucide-react';
// import { CardColor } from './Card';

// const CardSection: React.FC = () => {
//   const cards = [
//     {
//       title: 'TOEFL',
//       description: 'Scoring parameters in each of the modules. Comprehensive preparation for international English proficiency.',
//       features: [
//         {
//           icon: <BookMarked className="w-4 h-4" />,
//           title: 'Reading Skills',
//           description: 'Academic text comprehension'
//         },
//         {
//           icon: <Headphones className="w-4 h-4" />,
//           title: 'Listening',
//           description: 'Native speaker practice'
//         },
//         {
//           icon: <PenTool className="w-4 h-4" />,
//           title: 'Writing',
//           description: 'Essay structure mastery'
//         },
//         {
//           icon: <MessageSquare className="w-4 h-4" />,
//           title: 'Speaking',
//           description: 'Fluency development'
//         }
//       ],
//       icon: <BookOpen className="w-6 h-6 text-red-600" />,
//       imageUrl: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       imagePosition: 'left',
//       color: 'red' as CardColor,
//     },
//     {
//       title: 'PTE Coaching',
//       description: 'We provide PTE online coaching classes. Expert guidance for all segments of the Pearson Test of English.',
//       features: [
//         {
//           icon: <Timer className="w-4 h-4" />,
//           title: 'Time Management',
//           description: 'Strategic test planning'
//         },
//         {
//           icon: <Target className="w-4 h-4" />,
//           title: 'Score Analysis',
//           description: 'Performance tracking'
//         },
//         {
//           icon: <Presentation className="w-4 h-4" />,
//           title: 'Mock Tests',
//           description: 'Exam simulation'
//         },
//         {
//           icon: <Users className="w-4 h-4" />,
//           title: 'Group Practice',
//           description: 'Interactive sessions'
//         }
//       ],
//       icon: <Award className="w-6 h-6 text-blue-600" />,
//       imageUrl: 'https://images.pexels.com/photos/4144101/pexels-photo-4144101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       imagePosition: 'right',
//       color: 'blue' as CardColor,
//     },
//     {
//       title: 'IELTS Coaching',
//       description: 'Scoring method the band of 0-9. Personalized strategies to improve listening, reading, writing, and speaking skills.',
//       features: [
//         {
//           icon: <BookCheck className="w-4 h-4" />,
//           title: 'Band Scoring',
//           description: 'Score improvement tips'
//         },
//         {
//           icon: <MessageSquare className="w-4 h-4" />,
//           title: 'Speaking Tasks',
//           description: 'Interview preparation'
//         },
//         {
//           icon: <PenTool className="w-4 h-4" />,
//           title: 'Writing Tasks',
//           description: 'Essay techniques'
//         },
//         {
//           icon: <Headphones className="w-4 h-4" />,
//           title: 'Listening Skills',
//           description: 'Audio comprehension'
//         }
//       ],
//       icon: <GraduationCap className="w-6 h-6 text-green-600" />,
//       imageUrl: 'https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       imagePosition: 'left',
//       color: 'green' as CardColor,
//     },
//     {
//       title: 'GMAT',
//       description: 'Master in management or business oriented studies. Comprehensive preparation for analytical writing, integrated reasoning, and more.',
//       features: [
//         {
//           icon: <Lightbulb className="w-4 h-4" />,
//           title: 'Quantitative',
//           description: 'Math problem solving'
//         },
//         {
//           icon: <BookMarked className="w-4 h-4" />,
//           title: 'Verbal',
//           description: 'Critical reasoning'
//         },
//         {
//           icon: <TrendingUp className="w-4 h-4" />,
//           title: 'Integrated',
//           description: 'Data interpretation'
//         },
//         {
//           icon: <PenTool className="w-4 h-4" />,
//           title: 'Analytical',
//           description: 'Essay writing skills'
//         }
//       ],
//       icon: <Brain className="w-6 h-6 text-yellow-600" />,
//       imageUrl: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       imagePosition: 'right',
//       color: 'yellow' as CardColor,
//     },
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-12">
//       <div className="mb-12 text-center">
//         <p className="text-sm font-bold tracking-wider uppercase text-red-600">STUDY IN CANADA</p>
//         <h2 className="text-3xl font-bold mt-2">Study</h2>
//       </div>
      
//       <div className="space-y-10">
//         {cards.map((card, index) => (
//           <Card
//             key={index}
//             title={card.title}
//             description={card.description}
//             features={card.features}
//             icon={card.icon}
//             imageUrl={card.imageUrl}
//             imagePosition={card.imagePosition}
//             color={card.color}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CardSection;

// import React from 'react';

// export type CardColor = 'red' | 'blue' | 'green' | 'yellow';

// interface CardProps {
//   title: string;
//   description: string;
//   features: Array<{
//     icon: React.ReactNode;
//     title: string;
//     description: string;
//   }>;
//   icon: React.ReactNode;
//   imageUrl: string;
//   imagePosition: 'left' | 'right';
//   color: CardColor;
// }

// const Card: React.FC<CardProps> = ({
//   title,
//   description,
//   features,
//   icon,
//   imageUrl,
//   imagePosition,
//   color,
// }) => {
//   const colorStyles = {
//     red: {
//       bgLight: 'bg-red-50',
//       bgDark: 'bg-red-600',
//       text: 'text-red-700',
//       accent: 'border-red-500',
//       hover: 'group-hover:bg-red-600',
//       iconBg: 'bg-red-100',
//       featureBg: 'bg-white',
//       featureText: 'text-red-700',
//       featureShadow: 'shadow-red-100',
//     },
//     blue: {
//       bgLight: 'bg-blue-50',
//       bgDark: 'bg-blue-600',
//       text: 'text-blue-700',
//       accent: 'border-blue-500',
//       hover: 'group-hover:bg-blue-600',
//       iconBg: 'bg-blue-100',
//       featureBg: 'bg-white',
//       featureText: 'text-blue-700',
//       featureShadow: 'shadow-blue-100',
//     },
//     green: {
//       bgLight: 'bg-green-50',
//       bgDark: 'bg-green-600',
//       text: 'text-green-700',
//       accent: 'border-green-500',
//       hover: 'group-hover:bg-green-600',
//       iconBg: 'bg-green-100',
//       featureBg: 'bg-white',
//       featureText: 'text-green-700',
//       featureShadow: 'shadow-green-100',
//     },
//     yellow: {
//       bgLight: 'bg-yellow-50',
//       bgDark: 'bg-yellow-600',
//       text: 'text-yellow-700',
//       accent: 'border-yellow-500',
//       hover: 'group-hover:bg-yellow-600',
//       iconBg: 'bg-yellow-100',
//       featureBg: 'bg-white',
//       featureText: 'text-yellow-700',
//       featureShadow: 'shadow-yellow-100',
//     },
//   };

//   const { bgLight, text, accent, iconBg, featureBg, featureText, featureShadow } = colorStyles[color];

//   return (
//     <div className={`relative overflow-hidden rounded-lg shadow-md group transition-all duration-300 hover:shadow-lg ${bgLight}`}>
//       <div className={`flex flex-col md:flex-row ${imagePosition === 'right' ? 'md:flex-row-reverse' : ''}`}>
//         {/* Image Section */}
//         <div className="md:w-1/2 overflow-hidden h-64 md:h-auto">
//           <img 
//             src={imageUrl} 
//             alt={title} 
//             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//           />
//         </div>
        
//         {/* Content Section */}
//         <div className="md:w-1/2 p-8 flex flex-col justify-center">
//           <div className="text-center">
//             <div className="flex justify-center mb-4">
//               <div className={`inline-flex items-center justify-center p-3 rounded-full ${iconBg}`}>
//                 {icon}
//               </div>
//             </div>
//             <h3 className={`text-2xl font-bold mb-3 ${text}`}>{title}</h3>
//             <p className="text-gray-600 mb-8 max-w-md mx-auto">{description}</p>
            
//             {/* Features Grid */}
//             <div className="grid grid-cols-2 gap-4 mb-6">
//               {features.map((feature, index) => (
//                 <div 
//                   key={index}
//                   className={`${featureBg} p-4 rounded-lg shadow-md ${featureShadow} hover:shadow-lg transition-shadow duration-300`}
//                 >
//                   <div className={`${featureText} mb-2 flex justify-center`}>
//                     {feature.icon}
//                   </div>
//                   <h4 className={`text-sm font-semibold mb-1 ${featureText}`}>
//                     {feature.title}
//                   </h4>
//                   <p className="text-gray-600 text-xs">
//                     {feature.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
            
//             <div className={`w-16 h-1 mx-auto ${accent}`}></div>
//           </div>
//         </div>
//       </div>
      
//       {/* Decorative corner accent */}
//       <div className={`absolute ${imagePosition === 'right' ? 'left-0 top-0 border-l-4 border-t-4' : 'right-0 top-0 border-r-4 border-t-4'} w-12 h-12 ${accent} opacity-50`}></div>
//     </div>
//   );
// };

// export default Card;



