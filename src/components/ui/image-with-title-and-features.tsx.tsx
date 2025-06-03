import React from "react";
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
} from "lucide-react";
import { SectionHeader } from "./section-header";
import { CardColor, HorizontalCard } from "./horizontal-card";

export const ImageWithTitleAndFeatures: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <SectionHeader title="WHAT WE OFFER" subtitle="Our Services" />

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
    title: "IMMIGRATE",
    description:
      "Exploring Canada for immigration is an exciting and life-altering choice. Renowned for its quality of life, cultural diversity, and opportunities, let's find your best immigration fit.",
    features: [
      {
        icon: <Send className="w-4 h-4" />,
        title: "Express Entry",
        description: "Express program to fastrack",
        href: "/immigration/express-entry/federal-skilled-worker",
      },
      {
        icon: <PlaneTakeoff className="w-4 h-4" />,
        title: "Provincial Nominee Programs",
        description: "PNP programs for immigration",
        href: "/immigration/provincial-nominee-programs/alberta(aaip)",
      },
      {
        icon: <MessageSquare className="w-4 h-4" />,
        title: "Challenges",
        description: "Overcome immigration challenges",
        href: "/immigration/overcome-immigration-challenges",
      },
    ],
    icon: <Plane className="w-6 h-6 text-white bg-primary-red" />,

    imageUrl: "/images/n/immigrationhome1.avif",
    imagePosition: "left",
    color: "red" as CardColor,
  },
  {
    title: "Business",
    description:
      "Expanding or starting a business in Canada taps into a robust economy and a skilled workforce while enjoying a supportive business environment with your family",
    features: [
      {
        icon: <Handshake className="w-4 h-4" />,
        title: "Quebec Enterpreneur Program",
        description: "Strategic test planning",
        href: "/business/quebec/quebec-enterpreneur-program",
      },
      {
        icon: <BriefcaseBusiness className="w-4 h-4" />,
        title: "Provincial Business Programs",
        description: "Exam simulation",
        href: "/business/provincial-business-programs/alberta-immigration-aaip",
      },

      {
        icon: <Briefcase className="w-4 h-4" />,
        title: "Federal Programs",
        description: "Interactive sessions",
        href: "/business/federal-programs/start-up-visa(suv)",
      },
    ],
    icon: <Briefcase className="w-6 h-6 text-white bg-primary-blue" />,

    imageUrl: "/images/n/businesshome1.png",

    imagePosition: "right",
    color: "blue" as CardColor,
  },
  {
    title: "Study",
    description:
      "Studying in Canada promises world-class education, rich cultural diversity, and a pathway to a promising future, all within a welcoming and inclusive environment.",
    features: [
      {
        icon: <Brain className="w-4 h-4" />,
        title: "Designated Learning Institutions",
        description: "To streamline the process",
        href: "/study/programs/designated-learning-institution(dli)",
      },
      {
        icon: <Notebook className="w-4 h-4" />,
        title: "Student Direct Stream",
        description: "Helping students directly",
        href: "/study/programs/student-direct-stream(sds)",
      },
      {
        icon: <LibraryBig className="w-4 h-4" />,
        title: "Study in Canada",
        description: "Dream to study in canada",
        href: "/study/programs/study-in-canada",
      },
      {
        icon: <NotebookTabs className="w-4 h-4" />,
        title: "Study to PR",
        description: "helping students",
        href: "/study/others/study-to-pr",
      },
      {
        icon: <GraduationCap className="w-4 h-4" />,
        title: "Post Graduation WP",
        description: "Help in Post graduation Courses",
        href: "/study/programs/post-graduate-wp",
      },
    ],
    icon: <GraduationCap className="w-6 h-6 bg-primary-green text-white" />,
    imageUrl: "/images/n/studyhome1.jpg",
    imagePosition: "left",
    color: "green" as CardColor,
  },
  {
    title: "Work & Jobs",
    description:
      "Canada offers diverse work opportunities, fostering career growth and global experiences in a vibrant, welcoming country for skilled professionals and temporary workers.",
    features: [
      {
        icon: <Network className="w-4 h-4" />,
        title: "For Employers",
        description: "Hiring good candidates",
        href: "/work-and-jobs/jobs/for-employers",
      },
      {
        icon: <Briefcase className="w-4 h-4" />,
        title: "International Mobility Program",
        description: "IMP offers services for mobility",
        href: "/work-and-jobs/work/international-mobility-program(imp)",
      },
      {
        icon: <Contact className="w-4 h-4" />,
        title: "Work Permit",
        description: "Get Work Permit seemlesly",
        href: "/work-and-jobs/work/work-permit",
      },
      {
        icon: <ChartNetwork className="w-4 h-4" />,
        title: "In Demand Jobs",
        description: "Get full information about jobs in demand",
        href: "/work-and-jobs/jobs/in-demand-jobs",
      },
      {
        icon: <BriefcaseBusiness className="w-4 h-4" />,
        title: "LMIA",
        description: "LMIA job and map",
        href: "/work-and-jobs/work/lmia",
      },
      {
        icon: <PersonStanding className="w-4 h-4" />,
        title: "TEER Categories",
        description: "Get full information about jobs in demand",
        href: "/work-and-jobs/jobs/teer-categories-noc-codes",
      },
    ],
    icon: <Network className="w-6 h-6 text-white bg-primary-yellow" />,
    imageUrl: "/images/n/m/worknjobhome.jpg",
    imagePosition: "right",
    color: "yellow" as CardColor,
  },
];
