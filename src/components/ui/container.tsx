import React from "react";
import clsx from "clsx";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div
      className={clsx(
        " m-4  rounded-lg border-2",
        className // supports "border-blue", etc.
      )}
    >
      {children}
    </div>
  );
};

export default Container;


// import React from 'react';
// import Card from './Card';
// import { BookOpen, Award, GraduationCap, Brain } from 'lucide-react';
// import { CardColor } from './Card';

// const CardSection: React.FC = () => {
//   const cards = [
//     {
//       title: 'TOEFL',
//       description: 'Scoring parameters in each of the modules. Comprehensive preparation for international English proficiency.',
//       icon: <BookOpen className="w-6 h-6 text-red-600" />,
//       imageUrl: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       imagePosition: 'left',
//       color: 'red' as CardColor,
//     },
//     {
//       title: 'PTE Coaching',
//       description: 'We provide PTE online coaching classes. Expert guidance for all segments of the Pearson Test of English.',
//       icon: <Award className="w-6 h-6 text-blue-600" />,
//       imageUrl: 'https://images.pexels.com/photos/4144101/pexels-photo-4144101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       imagePosition: 'right',
//       color: 'blue' as CardColor,
//     },
//     {
//       title: 'IELTS Coaching',
//       description: 'Scoring method the band of 0-9. Personalized strategies to improve listening, reading, writing, and speaking skills.',
//       icon: <GraduationCap className="w-6 h-6 text-green-600" />,
//       imageUrl: 'https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       imagePosition: 'left',
//       color: 'green' as CardColor,
//     },
//     {
//       title: 'GMAT',
//       description: 'Master in management or business oriented studies. Comprehensive preparation for analytical writing, integrated reasoning, and more.',
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
//   icon: React.ReactNode;
//   imageUrl: string;
//   imagePosition: 'left' | 'right';
//   color: CardColor;
// }

// const Card: React.FC<CardProps> = ({
//   title,
//   description,
//   icon,
//   imageUrl,
//   imagePosition,
//   color,
// }) => {
//   // Color mapping for different card styles
//   const colorStyles = {
//     red: {
//       bgLight: 'bg-red-50',
//       bgDark: 'bg-red-600',
//       text: 'text-red-700',
//       accent: 'border-red-500',
//       hover: 'group-hover:bg-red-600',
//       iconBg: 'bg-red-100',
//     },
//     blue: {
//       bgLight: 'bg-blue-50',
//       bgDark: 'bg-blue-600',
//       text: 'text-blue-700',
//       accent: 'border-blue-500',
//       hover: 'group-hover:bg-blue-600',
//       iconBg: 'bg-blue-100',
//     },
//     green: {
//       bgLight: 'bg-green-50',
//       bgDark: 'bg-green-600',
//       text: 'text-green-700',
//       accent: 'border-green-500',
//       hover: 'group-hover:bg-green-600',
//       iconBg: 'bg-green-100',
//     },
//     yellow: {
//       bgLight: 'bg-yellow-50',
//       bgDark: 'bg-yellow-600',
//       text: 'text-yellow-700',
//       accent: 'border-yellow-500',
//       hover: 'group-hover:bg-yellow-600',
//       iconBg: 'bg-yellow-100',
//     },
//   };

//   const { bgLight, text, accent, iconBg } = colorStyles[color];

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
//         <div className="md:w-1/2 p-6 flex flex-col justify-center">
//           <div 
//             className={`text-content ${imagePosition === 'right' ? 'md:text-right' : 'text-left'}`}
//           >
//             <div className={`inline-flex items-center justify-center p-3 rounded-full ${iconBg} mb-4`}>
//               {icon}
//             </div>
//             <h3 className={`text-xl font-bold mb-2 ${text}`}>{title}</h3>
//             <p className="text-gray-600">{description}</p>
//             <div className={`mt-6 w-16 h-1 ${imagePosition === 'right' ? 'md:ml-auto' : 'ml-0'} ${accent}`}></div>
//           </div>
//         </div>
//       </div>
      
//       {/* Decorative corner accent */}
//       <div className={`absolute ${imagePosition === 'right' ? 'left-0 top-0 border-l-4 border-t-4' : 'right-0 top-0 border-r-4 border-t-4'} w-12 h-12 ${accent} opacity-50`}></div>
//     </div>
//   );
// };

// export default Card;