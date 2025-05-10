
import { Feature3 } from '@/components/ui/feature3';
import { Feature4 } from '@/components/ui/feature4';
import { Feature2WithImage, FeatureItemProps } from '@/components/ui/features-2-with-image';
import { FeaturesWithLastFilled, Props } from '@/components/ui/features-with-last-filled';
import { Hero2 } from '@/components/ui/hero2';

import { BookOpen, Briefcase, FileCheck, Globe, Notebook, Plane, UserCheck } from 'lucide-react';

import React from 'react';
export const features = [
    {

        
      icon: "Briefcase" as const,
      title: "Working for a company or organization in Canada",
      description: `A "job offer" that can earn you additional points within the Comprehensive Ranking System (CRS). If you receive a job offer from a company or organization in Canada, you can gain extra points and increase your likelihood of being invited to participate in the program.`
    },
    {
        


      icon: "Notebook" as const,
      title: "Nomination from a province or territory",
      description: "If you receive a nomination from a province or territory through the Provincial Nominee Program (PNP), your CRS score will significantly increase, giving you priority in receiving an invitation to join Express Entry",
    },
    {
        


      icon: "Layers" as const,
      title: "French-Language Advantage",
      description: "Proficiency in French, in addition to English, is highly valued by Canada. Demonstrating strong French language skills through recognized tests can earn extra points in the Comprehensive Ranking System (CRS). This boosts your chances of receiving an Invitation to Apply (ITA) for permanent residency in Canada",
    },
  ];
  export const services: Props[] = [
    {
      title: "Profile Assessment",
      description:
        "Our RCIC and expert team can evaluate your qualifications, work experience, and personal circumstances to identify areas where you can improve your CRS score",
      icon: <UserCheck size={32} />,
    },
    {
      title: "Language Proficiency",
      description:
        "We can provide guidance on improving your language skills in English and/or French, as higher language test scores can significantly boost your CRS points.",
      icon: <FileCheck size={32} />,
    },
    {
      title: "Educational credential assessment",
      description:
        "We can help you navigate the process of obtaining an ECA for your foreign educational credentials, which can add points to your CRS score.",
      icon: <Globe size={32} />,
    },
    {
      title: "Secure a Job Offers",
      description:
        "We can assist in searching for job in Canada, which can be worth a substantial number of CRS points. We can also help you understand the requirements for a valid job offer, resume preparation and interview coaching.",
      icon: <Notebook size={32} />,
    },
    {
      title: "Provincial Nominee Programs (PNPs)",
      description:
        "We can advise on PNPs and help you prepare for provincial nominations, which can add valuable points to your CRS score.",
      icon: <Briefcase size={32} />,
    },
    {
      title: "Claim extra score for family connection",
      description:
        "If you have a sibling in Canada who is a citizen or permanent resident, we can help you understand how to claim additional points for this family connection.Book a consultation today to  secure your family's future in Canada.",
      highlighted: true,
      buttonText: "Book Consultation",
      icon: <Plane size={32} />,
    },
  ];

  const cards: FeatureItemProps[] = [
    {
      icon: <BookOpen />,
      title: 'No Connection to Canada Required',
      description:
        'This program does not require a connection to Canada, making it an ideal immigration option for foreign citizens living outside of Canada. You do not need to be currently living in Canada, have any immediate family members residing in the country, nor have previous work or educational experiences in Canada.',
    },
    {
      icon: <Notebook />,
      title: 'Language Proficiency',
      description:
        'However, this program has high requirements for work experience, educational qualifications, age, and language proficiency in English/French. All applicants for the Federal Skilled Worker Program (FSW) must have at least one year of work experience in a specialized field',
    },
  ];

 
 const FederalSkilledWorker: React.FC = () => {
    return (
         <div className="min-h-screen bg-white flex gap-12 flex-col">
                <Hero2 badgeText='GreenTech Resources' title='Federal Skilled Worker Program (FSWP)' description='You are a talented individual with a proven track record, and this is your quickest route to migrate and thrive in Canada.' imageUrl='/images/hero/c.avif' primaryCta={{ label: "Federal Skilled Trade", href: "/" }} secondaryCta={{ label: "Learn More", href: "/" }}/>
                <Feature4
  badge=" Eligible Criteria"
  heading="Federal Skilled Worker"
  highlight="(Express Entry)"
  description="Skilled workers with work experience abroad must meet the following conditions"
  features={[
    {
        

      icon: "Globe",
      title: "WORK EXPERIENCE",
      description: "Have work experience in occupations classified under NOC skill levels 0, A, B in Canada's National Occupational Classification (NOC) system for a minimum of 1 year (not necessarily accumulated in Canada) within the last 10 years",
    //   link: "/global"
    },
    {
      icon: "Rocket",
      title: "LANGUAGE",
      description: "Meet the minimum language requirements (English/French): At least CLB/NCLC 7",
    },
    {
      icon: "Notebook",
      title: "EDUCATION",
      description: "Hold an educational credential assessed as equivalent to a Canadian degree",
    },
    {
      icon: "Users",
      title: "CRS",
      description: "Pass the initial screening with a score of 67 points or higher.",
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
      subheading="Federal Skilled Worker Program"
      features={cards}
      imageSrc="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
      imageAlt="Fox in the wild"
    />
  
   

<Feature3
badgeText='Express Entry'
  heading="Factors that increase your chance to receive Invitation to Apply (ITA) in the "
  highlighted="Express Entry Program"
  description="Through Express Entry, candidates and their family can participate and compete for points to receive an ITA – Invitation to Apply from the Canadian government to immigrate and work in the country."
  items={features}
/>
 <FeaturesWithLastFilled
        services={services}
        sectionTitle="Factors that increase your chance to receive Invitation to Apply (ITA) in the Express Entry Program"
        sectionSubtitle="Through Express Entry, candidates and their family can participate and compete for points to receive an ITA – Invitation to Apply from the Canadian government to immigrate and work in the country."
      />
                </div>
    );
};

export default FederalSkilledWorker;