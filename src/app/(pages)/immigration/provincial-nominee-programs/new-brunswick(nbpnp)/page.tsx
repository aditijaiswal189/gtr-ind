import { features } from "@/app/(pages)/about-us/about/about/page";
import { CtaWithFeaturesRightImage } from "@/components/ui/cta-with-features-right-image";
import { FeatureGrid4, FeatureItemData } from "@/components/ui/feature-grid4";
import { Feature3 } from "@/components/ui/feature3";
import {
  Feature2WithImage,
  FeatureItemProps,
} from "@/components/ui/features-2-with-image";
import { Hero2 } from "@/components/ui/hero2";
import { commonProps } from "@/constant/commonProps";
import { Briefcase, FileText, Heart, Notebook, Plane } from "lucide-react";
import React from "react";

const cards: FeatureItemProps[] = [
  {
    icon: <Briefcase />,
    title: "Education",
    description: `Free access to elementary and highschool`,
  },
  {
    icon: <FileText />,
    title: "Legal protection",
    description: `Legal protection under Canadian laws`,
  },
];
const features2: FeatureItemData[] = [
  {
    title: "Access to Healthcare",
    description:
      "As permanent residents, your family will enjoy access to Canada’s world-class healthcare system, similar to Canadian citizens.",
    icon: <Plane />,
  },
  {
    title: "Education and Job Opportunities",
    description:
      "Your children can access top-notch education at public schools, with the possibility of reduced tuition fees for higher education.Freedom to live and work in any province or territory, with access to a diverse job market.",
    icon: <Notebook />,
  },
  {
    title: "Social Benefits",
    description:
      "Your family will benefit from social services like employment insurance and pension plans, helping you to secure your future.",
    icon: <Briefcase />,
  },
  {
    title: "Path to Citizenship:",
    description:
      "Provincial nomination opens the door for your entire family to eventually apply for Canadian citizenship, enjoying full rights and privileges.",
    icon: <Heart />,
  },
];
const features3: FeatureItemData[] = [
  {
    title: "Freedom to Live, Work, and Study Anywhere in Canada",
    description:
      "As a permanent resident, you have the right to live, study, and work across any province or territory in Canada without restrictions. Whether you want to settle in bustling cities like Toronto and Vancouver or prefer the quiet charm of smaller towns, Canada offers you complete flexibility.",
    icon: <Plane />,
  },
  {
    title: "Access to Social Welfare Benefits and Employment",
    description:
      "Canada’s robust social welfare system ensures that permanent residents have access to essential services such as healthcare, education, and other social programs. This support system provides a strong safety net for residents and their families. They are free to work for any employer in Canada, in any profession. This opens up diverse job opportunities in a thriving economy, helping you build a successful career.",
    icon: <Notebook />,
  },
  {
    title: "Reduced University Tuition Fees",
    description:
      "As a permanent resident, you’ll benefit from significantly lower tuition fees compared to international students. In fact, permanent residents pay only about one-third of what international students are charged, and there are no restrictions on schools or programs you can choose.",
    icon: <Briefcase />,
  },
  {
    title: "Pathway to Canadian Citizenship",
    description:
      "After fulfilling the residency requirements, permanent residents become eligible to apply for Canadian citizenship. Once you gain citizenship, you’ll hold the 6th most powerful passport globally, granting visa-free or direct ETA access to 185 countries, allowing you to travel with ease across the world.",
    icon: <Heart />,
  },
];

export const featuresNew = [
  {
    icon: "Send" as const,
    title: "Express Entry Labor Market Stream",
    description:
      "This stream is part of the New Brunswick Provincial Nominee Program Provincial Nominee Program and is aligned with Canada’s Express Entry system. It targets skilled workers who are already in the Express Entry pool and have demonstrated a strong connection to New Brunswick Provincial Nominee Program. Key requirements typically include: A valid Express Entry profile with a Comprehensive Ranking System (CRS) score above the program’s minimum threshold. Relevant work experience and qualifications that meet New Brunswick Provincial Nominee Program's labor market needs. A connection to New Brunswick Provincial Nominee Program, such as having family or previous experience living and working in the province.",
  },
  {
    icon: "Globe" as const,
    title: "Atlantic Pilot Immigration Program",
    description:
      "Although this program is not specific to Manitoba, it is relevant to Canada’s immigration landscape. The Atlantic Pilot Immigration Program is designed to attract skilled workers and international graduates to the Atlantic provinces (Newfoundland and Labrador, Nova Scotia, Prince Edward Island, and New Brunswick Provincial Nominee Program). Key aspects include: The program includes several streams, such as the Atlantic High-Skilled Program, Atlantic Intermediate-Skilled Program, and Atlantic International Graduate Program. Candidates must have a job offer from an employer in one of the Atlantic provinces. The program aims to address labor market needs in these regions and encourage long-term settlement.",
  },
  {
    icon: "Repeat" as const,
    title: "Succession Connect Pilot Program",
    description:
      "The Succession Connect Pilot Program is aimed at facilitating the transition of existing businesses in New Brunswick Provincial Nominee Programto new owners. This program helps address labor shortages by allowing skilled immigrants to take over established businesses. Key features include: The candidate must have a plan to purchase or take over an existing New Brunswick Provincial Nominee Programbusiness. The business must be in good standing and demonstrate a history of profitability. The program focuses on ensuring a smooth transition to maintain the business’s operation and job creation.",
  },
  {
    icon: "Briefcase" as const,
    title: "Skilled Workers with Employer Support",
    description:
      "This stream is designed for skilled workers who have a confirmed job offer from a New Brunswick Provincial Nominee Program employer. It aims to address local labor shortages by facilitating the immigration of workers with skills that are in demand. Key features include: A full-time, permanent job offer from a New Brunswick Provincial Nominee Program employer in a high-demand occupation. The employer must demonstrate efforts to recruit locally before offering the job to an international candidate. Candidates must meet the qualifications and work experience requirements for the job.",
  },
  {
    icon: "GraduationCap" as const,
    title: "Post-Graduate Entrepreneurial Stream",
    description:
      "This stream is intended for recent graduates of recognized New Brunswick Provincial Nominee Programpost-secondary institutions who have the entrepreneurial skills and resources to establish a business in the province. Key aspects include: Graduation from a post-secondary institution in New Brunswick Provincial Nominee Programwithin the last two years. A viable business plan and financial capacity to start and run the business. The business must be located in New Brunswick Provincial Nominee Program and contribute to the local economy.",
  },
  {
    icon: "Award" as const,
    title: "Entrepreneurial Stream",
    description:
      "This stream targets experienced entrepreneurs who wish to start or invest in a business in New Brunswick Provincial Nominee Program. It focuses on individuals who can contribute to the province's economic development. Requirements typically include:A proven track record of successful business ownership or management. A detailed business plan demonstrating the viability and potential economic impact of the business. Sufficient personal net worth and financial resources to support the business and contribute to job creation in New Brunswick Provincial Nominee Program.",
  },
];

const NewBrunswwick: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <Hero2
        badgeText="GreenTech Resources"
        title="New Brunswick Provincial Nominee Program (NBPNP)​"
        description="New Brunswick is one of the thirteen provinces and territories of Canada. It is one of the three Maritime provinces and one of the four Atlantic provinces. It is the only province with both French and English as its official languages."
        imageUrl="/images/n/newbrunswick.jpg"
        primaryCta={commonProps?.primaryCta}
        secondaryCta={commonProps?.secondaryCta}
      />

      <Feature3
        badgeText="NBPNP"
        heading="New Brunswick Provincial Nominee "
        highlighted="Program"
        description="Provincial nominee programs like the New Brunswick Skilled Worker Stream play a crucial role in addressing specific labor market needs in individual provinces, contributing to economic growth, and providing opportunities for skilled immigrants to establish themselves in Canada.
Programs
Here are the details about each program:"
        items={featuresNew}
      />
      <FeatureGrid4
        title=" Benefits for your family "
        description="With New Brunswick Provincial Nominee Program (NBPNP)​, your entire family, including your spouse and children under 22 years of age (at the time of submitting the provincial nomination application), can submit for Canada Permanent Resident to enjoy most of the benefits like Canada."
        features={features2}
      />
      <Feature2WithImage
        heading={
          <>
            New Brunswick Provincial Nominee Program
            <span className="text-primary pl-2">(NBPNP)</span>
          </>
        }
        subheading="  During the wait for permanent residency, your family can apply to come, work and study in Canada"
        features={cards}
        imageSrc="/images/hero/e.avif"
        imageAlt="Fox in the wild"
      />
      <FeatureGrid4
        title="New Brunswick Provincial Nominee Program ​"
        description="When you become Canada Permanent Resident"
        features={features3}
      />
      <CtaWithFeaturesRightImage
        badgeText="New Brunswick Provincial Nominee Program (NBPNP)​"
        title=" GreenTech Resource Worldwide Canada"
        subtitle="New Brunswick is one of the thirteen provinces and territories of Canada. It is one of the three Maritime provinces and one of the four Atlantic provinces. It is the only province with both French and English as its official languages."
        features={features}
      />
    </div>
  );
};

export default NewBrunswwick;
