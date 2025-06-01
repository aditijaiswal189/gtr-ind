import { features } from "@/app/(pages)/about-us/about/about/page";
import { Hero2 } from "@/components/ui/hero2";
import React from "react";
import { CtaWithFeaturesRightImage } from "@/components/ui/cta-with-features-right-image";
import { FeatureGrid4, FeatureItemData } from "@/components/ui/feature-grid4";
import { Feature3 } from "@/components/ui/feature3";
import {
  Feature2WithImage,
  FeatureItemProps,
} from "@/components/ui/features-2-with-image";
import { StepsWithHeadingImageList } from "@/components/ui/steps-with-heading-image-list";
import {
  Award,
  Briefcase,
  ClipboardCheck,
  Compass,
  FileCheck,
  FileText,
  Heart,
  Lightbulb,
  Notebook,
  NotebookIcon,
  Plane,
} from "lucide-react";
import { commonProps } from "@/constant/commonProps";
const features5 = [
  {
    icon: "Briefcase" as const,
    title: "Base Category: ",
    description:
      "Designed for experienced entrepreneurs who intend to establish or take over a business in B.C. and settle in the province permanently.",
  },
  {
    icon: "Notebook" as const,
    title: "Regional Pilot:",
    description:
      "This stream focuses on attracting entrepreneurs to smaller regional communities in B.C., promoting economic growth outside urban centers.",
  },
  {
    icon: "FileText" as const,
    title: "Strategic Projects: ",
    description:
      "This category is aimed at foreign companies wanting to expand their operations into British Columbia by establishing a new office or business.",
  },
];

const cards2: FeatureItemProps[] = [
  {
    icon: <Plane />,
    title: "Skills Immigration",
    description: `The Skilled Worker stream is for experienced workers in a professional, management, technical, trade or other occupations to gain permanent residence in B.C.`,
  },
  {
    icon: <NotebookIcon />,
    title: "Entrepreneur Immigration",
    description: `British Columbia Provincial Nominee Program (BC PNP) Entrepreneur Immigration (EI) is a way for international entrepreneurs wishing to immigrate to British Columbia (B.C.) to set up businesses that support innovation and economic growth in the province.`,
  },
];
const cards3: FeatureItemProps[] = [
  {
    icon: <Plane />,
    title: "Temporary to permanent",
    description: `  This stream operates as a "temporary to permanent" immigration route, meaning that successful applicants initially come to B.C. as temporary residents. Once they have successfully started and operated a business in the province, they can apply for permanent residency.`,
  },
  {
    icon: <NotebookIcon />,
    title: "Ideal for",
    description: `This immigration stream is ideal for individuals who are ready to invest in and actively manage a business in British Columbia. Furthermore, it provides several streams tailored to different entrepreneurial profiles, allowing flexibility based on the applicant's goals and qualifications.`,
  },
];

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
export interface StepConfigList {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}
const steps: StepConfigList[] = [
  {
    icon: ClipboardCheck,
    title: "Full time job Offer",
    description:
      "Firstly, you must have an indeterminate, full-time job offer from a B.C. employer. An indeterminate job offer means there is no defined end date, ensuring long-term employment. Additionally, your job offer must fall under one of the following National Occupational Classification (NOC) TEER categories: 0, 1, 2, or 3.",
  },
  {
    icon: Lightbulb,
    title: "Qualified",
    description:
      "Moreover, you should be fully qualified to perform the duties associated with your job role. Along with this, you must possess at least two years of full-time (or equivalent) work experience within one of the eligible NOC TEER 0, 1, 2, or 3 categories. In terms of language requirements, you are also expected to meet the minimum language proficiency set by the program.",
  },
  {
    icon: Award,
    title: "Wage Offer",
    description:
      "Furthermore, your wage offer must align with British Columbia's wage rates for the specific occupation you are applying for. Finally, it is crucial to demonstrate that you have sufficient funds to support yourself and any dependents you may have.",
  },
  {
    icon: FileCheck,
    title: "Faster route",
    description:
      "It’s worth noting that this stream also offers an Express Entry BC option, which provides a faster route to immigration for eligible candidates.",
  },
  {
    icon: Compass,
    title: "Job Offer",
    description:
      "Interestingly, if your job offer falls under a priority technology occupation or NOC 41200 (university professors and lecturers), it does not need to be indeterminate.",
  },
  {
    icon: Briefcase,
    title: "Unique Opportunity",
    description:
      "In summary, the British Columbia Provincial Nominee Program offers a unique opportunity for skilled workers to establish their future in B.C., provided they meet the job offer, work experience, language, and financial requirements.",
  },
];

const BritishColumbia: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <Hero2
        badgeText="GreenTech Resources"
        title="British Columbia Provincial Nominee Program (BC PNP)"
        description="British Columbia, located on Canada’s west coast, is renowned for its breathtaking natural beauty, including coastal rainforests and majestic mountain ranges. Vancouver, its largest city, boasts a vibrant multicultural scene, while Victoria, the capital on Vancouver Island, exudes historical charm."
        imageUrl="/images/n/brcolumbia.jpg"
        primaryCta={commonProps?.primaryCta}
        secondaryCta={commonProps?.secondaryCta}
      />
      <StepsWithHeadingImageList
        badgeText="  BC PNP"
        heading="Skill immigration"
        subheading="The British Columbia Provincial Nominee Program (BC PNP) is a pathway to permanent residency for skilled workers and professionals looking to settle in the province of British Columbia. To qualify for this program, it is essential to meet several requirements"
        steps={steps}
      />
      <Feature2WithImage
        heading={
          <>
            Entrepreneur Immigration
            <span className="text-primary pl-2">(BC PNP)</span>
          </>
        }
        subheading="The British Columbia Provincial Nominee Program (BC PNP) offers an exciting pathway for entrepreneurs through its Entrepreneur Immigration stream."
        features={cards3}
        imageSrc="/images/hero/d.avif"
        imageAlt="Fox in the wild"
      />
      <Feature3
        badgeText="Provincial Nominee Programs"
        heading="
    Entrepreneur "
        highlighted="Immigration"
        description="The Entrepreneur Immigration stream under the British Columbia Provincial Nominee Program offers a structured, step-by-step approach to achieving permanent residency by building a successful business in one of Canada’s most dynamic provinces.There are multiple streams under the Entrepreneur Immigration category:"
        items={features5}
      />
      <Feature2WithImage
        heading={
          <>
            British Columbia Provincial Nominee Program
            <span className="text-primary pl-2">(BC PNP)</span>
          </>
        }
        subheading="The BC Provincial Nominee Program (BC PNP) is an economic immigration program. It lets the Province select economic immigrants who will live in B.C. and help fill job vacancies or operate businesses. If you are nominated, you and your family can apply to Immigration, Refugees and Citizenship Canada (IRCC) for permanent residence in Canada.The BC PNP has two main components"
        features={cards2}
        imageSrc="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        imageAlt="Fox in the wild"
      />
      <FeatureGrid4
        title=" Benefits for your family "
        description="With British Columbia Provincial Nominee Program, your entire family, including your spouse and children under 22 years of age (at the time of submitting the provincial nomination application), can submit for Canada Permanent Resident to enjoy most of the benefits like Canada."
        features={features2}
      />
      <Feature2WithImage
        heading={
          <>
            British Columbia Provincial Nominee Program
            <span className="text-primary pl-2">(BC PNP)</span>
          </>
        }
        subheading="  During the wait for permanent residency, your family can apply to come, work and study in Canada"
        features={cards}
        imageSrc="/images/hero/e.avif"
        imageAlt="Fox in the wild"
      />
      <FeatureGrid4
        title=" (BC PNP)"
        description="When you become Canada Permanent Resident"
        features={features3}
      />
      <CtaWithFeaturesRightImage
        badgeText="British Columbia Provincial Nominee Program"
        title=" GreenTech Resource Worldwide Canada"
        subtitle="Each program has its specific requirements; please contact GTR Worldwide for personalized guidance."
        features={features}
      />
    </div>
  );
};

export default BritishColumbia;
