import React from 'react';
import {
  GraduationCap,
  Brain,
  MessageSquare,
  Plane,
  PlaneTakeoff,
  Send,
  Briefcase,
  BriefcaseBusiness,
  Handshake,
  Network,
  Contact,
  ChartNetwork,
  Notebook,
  LibraryBig,
  NotebookTabs,
  PersonStanding,
} from 'lucide-react';
import { SectionHeader } from './section-header';
import { CardColor, HorizontalCard } from './horizontal-card';



export const ImageWithTitleAndFeatures: React.FC = () => {

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
       <SectionHeader
  title="WHAT WE OFFER"
  subtitle="Our Services"
  
/>

      <div className="space-y-10">
        {cards.map((card, index) => (
          <HorizontalCard
            key={index}
            title={card.title}
            description={card.description}
            features={card.features}
            icon={card.icon}
            imageUrl={card.imageUrl}
            imagePosition={card.imagePosition as "left" | "right"}
            color={card.color}
          />
        ))}
      </div>
    </div>
  );
};

const cards = [
  {
    title: 'IMMIGRATE',
    description:
      "Exploring Canada for immigration is an exciting and life-altering choice. Renowned for its quality of life, cultural diversity, and opportunities, let's find your best immigration fit.",
    features: [
        { icon: <Send className="w-4 h-4" />, title: 'Express Entry', description: 'Express program to fastrack' },
        { icon: <PlaneTakeoff className="w-4 h-4" />, title: 'Provincial Nominee Programs', description: 'PNP programs for immigration' },
        // { icon: <Plane className="w-4 h-4" />, title: 'Immigration', description: 'Immigrate to Canada' },
      { icon: <MessageSquare className="w-4 h-4" />, title: 'Challenges', description: 'Overcome immigration challenges' },
    ],
    icon: <Plane className="w-6 h-6 text-white bg-primary-red" />,
    imageUrl: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imagePosition: 'left',
    color: 'red' as CardColor,
  },
  {
    title: 'Business',
    description:
      "Expanding or starting a business in Canada taps into a robust economy and a skilled workforce while enjoying a supportive business environment with your family",
    features: [
      { icon: <Handshake className="w-4 h-4" />, title: 'Quebec Enterpreneur Program', description: 'Strategic test planning' },
      { icon: <BriefcaseBusiness className="w-4 h-4" />, title: 'Provincial Business Programs', description: 'Exam simulation' },
      // { icon: <Factory className="w-4 h-4" />, title: 'Quebec Investor', description: 'Performance tracking' },
      { icon: <Briefcase className="w-4 h-4" />, title: 'Federal Programs', description: 'Interactive sessions' },
    ],
    icon: <Briefcase className="w-6 h-6 text-white bg-primary-blue" />,
  //   imageUrl: 'https://images.pexels.com/photos/4144101/pexels-photo-4144101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  imageUrl: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    
  imagePosition: 'right',
    color: 'blue' as CardColor,
  },
  {
    title: 'Study',
    description:
      'Studying in Canada promises world-class education, rich cultural diversity, and a pathway to a promising future, all within a welcoming and inclusive environment.',
    features: [
      { icon: <Brain className="w-4 h-4" />, title: 'Designated Learning Institutions', description: 'To streamline the process' },
      { icon: <Notebook className="w-4 h-4" />, title: 'Student Direct Stream', description: 'Helping students directly' },
      { icon: <LibraryBig className="w-4 h-4" />, title: 'Study in Canada', description: 'Dream to study in canada' },
      { icon: <NotebookTabs className="w-4 h-4" />, title: 'Study to PR', description: 'helping students' },
      { icon: <GraduationCap className="w-4 h-4" />, title: 'Post Graduation WP', description: 'Help in Post graduation Courses' },
    ],
    icon: <GraduationCap className="w-6 h-6 bg-primary-green text-white" />,
    imageUrl: 'https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imagePosition: 'left',
    color: 'green' as CardColor,
  },
  {
    title: 'Work & Jobs',
    description:
      'Canada offers diverse work opportunities, fostering career growth and global experiences in a vibrant, welcoming country for skilled professionals and temporary workers.',
    features: [
      { icon: <Network className="w-4 h-4" />, title: 'For Employers', description: 'Hiring good candidates' },
      { icon: <Briefcase className="w-4 h-4" />, title: 'International Mobility Program', description: 'IMP offers services for mobility' },
      { icon: <Contact className="w-4 h-4" />, title: 'Work Permit', description: 'Get Work Permit seemlesly' },
      { icon: <ChartNetwork className="w-4 h-4" />, title: 'In Demand Jobs', description: 'Get full information about jobs in demand' },
      { icon: <BriefcaseBusiness className="w-4 h-4" />, title: 'LMIA', description: 'LMIA job and map' },
      { icon: <PersonStanding className="w-4 h-4" />, title: 'TEER Categories', description: 'Get full information about jobs in demand' },
    ],
    icon: <Network className="w-6 h-6 text-white bg-primary-yellow" />,
    imageUrl: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imagePosition: 'right',
    color: 'yellow' as CardColor,
  },
];
