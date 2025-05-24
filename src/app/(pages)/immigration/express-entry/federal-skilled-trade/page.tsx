import { FeaturesWithLastFilled } from "@/components/ui/features-with-last-filled";
import { Hero2 } from "@/components/ui/hero2";
import React from "react";
import { FeatureGrid4, FeatureItemData } from "@/components/ui/feature-grid4";
import {
  Terminal,
  RefreshCw,
  DollarSign,
  Cloud,
  Map,
  HelpCircle,
  Zap,
  Heart,
  BookOpen,
  Notebook,
} from "lucide-react";
import { Feature3 } from "@/components/ui/feature3";
import { Feature4 } from "@/components/ui/feature4";
import {
  Feature2WithImage,
  FeatureItemProps,
} from "@/components/ui/features-2-with-image";
import { services } from "@/app/(pages)/about-us/about/our-services/page";
// import { Feature3 } from '@/components/ui/feature3';

const features: FeatureItemData[] = [
  {
    title: "Electricians",
    description:
      "Electricians install, maintain, and repair electrical systems",
    icon: <Terminal />,
  },
  {
    title: "Plumbers",
    description:
      "Plumbers work on water and drainage systems in residential, commercial, and industrial settings",
    icon: <RefreshCw />,
  },
  {
    title: "Welders",
    description:
      " Welders join and cut metal parts using various welding techniques",
    icon: <DollarSign />,
  },
  {
    title: "Carpenters",
    description:
      " Carpenters construct, renovate, and repair wooden structures and frameworks",
    icon: <Cloud />,
  },
  {
    title: "Machinists",
    description:
      "Machinists operate machine tools to produce precision parts and instruments",
    icon: <Map />,
  },
  {
    title: "Constuction managers",
    description:
      "Construction managers oversee and coordinate construction projects, ensuring they are completed on time and within budget",
    icon: <HelpCircle />,
  },
  {
    title: "Heavy-Duty Equipment Mechanics",
    description:
      "These mechanics maintain and repair heavy machinery used in construction, manufacturing, and transportation.",
    icon: <Zap />,
  },
  {
    title: "Automotive service technicians",
    description:
      "Automotive service technicians diagnose and repair problems in vehicles",
    icon: <Heart />,
  },
  {
    title: " Crane Operators",
    description:
      "Crane operators operate cranes to lift and move heavy materials",
    icon: <Heart />,
  },
  {
    title: "Chefs, cooks, butchers and bakers",
    description:
      "prepare and cook a wide variety of foods; package meat products; create and bake a diverse range of bread, pastries, and desserts",
    icon: <Heart />,
  },
];
const features2 = [
  {
    icon: "Briefcase" as const,
    title: "Working for a company or organization in Canada",
    description: `A "job offer" that can earn you additional points within the Comprehensive Ranking System (CRS). If you receive a job offer from a company or organization in Canada, you can gain extra points and increase your likelihood of being invited to participate in the program.`,
  },
  {
    icon: "Notebook" as const,
    title: "Nomination from a province or territory",
    description:
      "If you receive a nomination from a province or territory through the Provincial Nominee Program (PNP), your CRS score will significantly increase, giving you priority in receiving an invitation to join Express Entry",
  },
  {
    icon: "Layers" as const,
    title: "French-Language Advantage",
    description:
      "Proficiency in French, in addition to English, is highly valued by Canada. Demonstrating strong French language skills through recognized tests can earn extra points in the Comprehensive Ranking System (CRS). This boosts your chances of receiving an Invitation to Apply (ITA) for permanent residency in Canada",
  },
];

const cards: FeatureItemProps[] = [
  {
    icon: <BookOpen />,
    title: "Benefits",
    description:
      "This program does not require a connection to Canada, making it an ideal immigration option for foreign citizens living outside of Canada. ",
  },
  {
    icon: <Notebook />,
    title: "Residency",
    description:
      "You do not need to be currently living in Canada, have any immediate family members residing in the country, nor have previous work or educational experiences in Canada.",
  },
];

const FederalSkilledTrade: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <Hero2
        badgeText="GreenTech Resources"
        title="Federal Skilled Trade Program (FSTP)"
        description="You are a talented individual with a proven track record, and this is your quickest route to migrate and thrive in Canada."
        imageUrl="/images/hero/d.avif"
        primaryCta={{
          label: "Federal Skilled Worker",
          href: "/immigration/express-entry/federal-skilled-worker",
        }}
        secondaryCta={{
          label: "Learn More",
          href: "/about-us/about/book-appointment",
        }}
      />

      <Feature4
        badge=" Eligible Criteria"
        heading="Federal Skilled Trade"
        highlight="(Express Entry)"
        description="To be eligible, you must meet all the minimum requirements for your skilled trades work experience,
job offer or certificate of qualification and language ability "
        features={[
          {
            icon: "Globe",
            title: "SKILLED TRADES WORK EXPERIENCE",
            description:
              " Have at least 2 years of full-time work experience (or an equal amount of part-time work experience) in a skilled trade within the 5 years before you apply.Meet the job requirements for that skilled trade as set out in the National Occupational Classification (NOC)",
            //   link: "/global"
          },
          {
            icon: "Notebook",
            title: "Language",
            description:
              " At least CLB/NCLC 4 for Reading and Writing, and CLB/NCLC 5 for Listening and Speaking in order to be eligible for Federal Skilled Trades Program",
          },
          {
            icon: "Rocket",
            title: " Job Offer or Certificate of Qualification",
            description:
              "You must have a valid job offer of full-time employment for a total period of at least 1 year or certificate of qualification in your skilled trade issued by a Canadian provincial, territorial or federal authority. This certificate is issued by the provincial or territorial body that governs trades in their province or territory, or a federal authority. To get a certificate, the provincial, territorial or federal authority must assess your training, trade experience and skills to decide if you’re eligible to write a certification exam.",
          },

          {
            icon: "Users",
            title: "  CRS",
            description:
              "Pass the initial screening with a score of 67 points. Before applying, candidates should carefully review the program requirements and ensure they meet the necessary qualifications. Additionally, individuals in skilled trades may also consider seeking employment through the Provincial Nominee Program (PNP) if a particular province has a demand for their skills.",
          },
        ]}
      />
      <Feature2WithImage
        heading={
          <>
            Express
            <span className="text-primary pl-2">Entry</span>
          </>
        }
        subheading="Federal Skilled Trade Program"
        features={cards}
        imageSrc="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        imageAlt="Fox in the wild"
      />
      <Feature3
        badgeText="Express Entry"
        heading="Factors that increase your chance to receive Invitation to Apply (ITA) in the "
        highlighted="Express Entry Program"
        description="Through Express Entry, candidates and their family can participate and compete for points to receive an ITA – Invitation to Apply from the Canadian government to immigrate and work in the country."
        items={features2}
      />
      <FeatureGrid4
        title="Federal Skilled Trades"
        description="Common SKilled Trades"
        features={features}
      />
      <FeaturesWithLastFilled
        services={services}
        sectionTitle="Factors that increase your chance to receive Invitation to Apply (ITA) in the Express Entry Program"
        sectionSubtitle="Through Express Entry, candidates and their family can participate and compete for points to receive an ITA – Invitation to Apply from the Canadian government to immigrate and work in the country."
      />
    </div>
  );
};

export default FederalSkilledTrade;
