import React from 'react';
import {
  BookOpen,
  Award,
  GraduationCap,
  Brain,
  BookMarked,
  Headphones,
  PenTool,
  Timer,
  Target,
  Presentation,
  Users,
  LineChart,
  BookCheck,
  MessageSquare,
  Lightbulb,
  TrendingUp,
  Plane,
  PlaneTakeoff,
  Send,
  Briefcase,
  BriefcaseBusiness,
  Factory,
  Handshake,
} from 'lucide-react';
import HorizontalCard, { CardColor } from './horizontal-card';


const Coaching2: React.FC = () => {
  const cards = [
    {
      title: 'IMMIGRATE',
      description:
        "Exploring Canada for immigration is an exciting and life-altering choice. Renowned for its quality of life, cultural diversity, and opportunities, let's find your best immigration fit.",
      features: [
          { icon: <Send className="w-4 h-4" />, title: 'Express Entry', description: 'Express program to fastrack' },
          { icon: <PlaneTakeoff className="w-4 h-4" />, title: 'Provincial Nominee Programs', description: 'PNP programs for immigration' },
          { icon: <Plane className="w-4 h-4" />, title: 'Immigration', description: 'Immigrate to Canada' },
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
        { icon: <Factory className="w-4 h-4" />, title: 'Quebec Investor', description: 'Performance tracking' },
        { icon: <Briefcase className="w-4 h-4" />, title: 'Federal Programs', description: 'Interactive sessions' },
      ],
      icon: <Briefcase className="w-6 h-6 text-white bg-primary-blue" />,
    //   imageUrl: 'https://images.pexels.com/photos/4144101/pexels-photo-4144101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageUrl: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      
    imagePosition: 'right',
      color: 'blue' as CardColor,
    },
    {
      title: 'IELTS Coaching',
      description:
        'Scoring method the band of 0-9. Personalized strategies to improve listening, reading, writing, and speaking skills.',
      features: [
        { icon: <BookCheck className="w-4 h-4" />, title: 'Band Scoring', description: 'Score improvement tips' },
        { icon: <MessageSquare className="w-4 h-4" />, title: 'Speaking Tasks', description: 'Interview preparation' },
        { icon: <PenTool className="w-4 h-4" />, title: 'Writing Tasks', description: 'Essay techniques' },
        { icon: <Headphones className="w-4 h-4" />, title: 'Listening Skills', description: 'Audio comprehension' },
      ],
      icon: <GraduationCap className="w-6 h-6 bg-primary-green text-white" />,
      imageUrl: 'https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      imagePosition: 'left',
      color: 'green' as CardColor,
    },
    {
      title: 'GMAT',
      description:
        'Master in management or business oriented studies. Comprehensive preparation for analytical writing, integrated reasoning, and more.',
      features: [
        { icon: <Lightbulb className="w-4 h-4" />, title: 'Quantitative', description: 'Math problem solving' },
        { icon: <BookMarked className="w-4 h-4" />, title: 'Verbal', description: 'Critical reasoning' },
        { icon: <TrendingUp className="w-4 h-4" />, title: 'Integrated', description: 'Data interpretation' },
        { icon: <PenTool className="w-4 h-4" />, title: 'Analytical', description: 'Essay writing skills' },
      ],
      icon: <Brain className="w-6 h-6 text-white bg-primary-yellow" />,
      imageUrl: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      imagePosition: 'right',
      color: 'yellow' as CardColor,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <p className="text-sm font-bold tracking-wider uppercase">What we Offer</p>
        <h2 className="text-3xl font-bold mt-2  text-primary-red">OUR SERVICES</h2>
      </div>

      <div className="space-y-10">
        {cards.map((card, index) => (
          <HorizontalCard
            key={index}
            title={card.title}
            description={card.description}
            features={card.features}
            icon={card.icon}
            imageUrl={card.imageUrl}
            imagePosition={card.imagePosition}
            color={card.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Coaching2;
