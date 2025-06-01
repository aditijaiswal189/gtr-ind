import { features } from "@/app/(pages)/about-us/about/about/page";
import { CtaWithFeaturesRightImage } from "@/components/ui/cta-with-features-right-image";
import { FeatureGrid4, FeatureItemData } from "@/components/ui/feature-grid4";
import { Feature3 } from "@/components/ui/feature3";
import {
  Feature2WithImage,
  FeatureItemProps,
} from "@/components/ui/features-2-with-image";
import { Hero2 } from "@/components/ui/hero2";
import { StepsWithHeadingImageList } from "@/components/ui/steps-with-heading-image-list";
import { commonProps } from "@/constant/commonProps";
import {
  Award,
  Briefcase,
  Compass,
  FileCheck,
  FileText,
  Heart,
  Lightbulb,
  Notebook,
  Plane,
} from "lucide-react";
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
const cardsFour: FeatureItemProps[] = [
  {
    icon: <Briefcase />,
    title: "Capital",
    description: `This category is for experienced farmers with considerable capital `,
  },

  {
    icon: <FileText />,
    title: "Invest",
    description: `And looking to invest in a farming operation and settle in the province of Saskatchewan.`,
  },
];
const cardsOne: FeatureItemProps[] = [
  {
    icon: <Briefcase />,
    title: "Latest Announcement",
    description: ` Latest announcement from the province of Saskatchewan Effective February
      18, 2025, the Saskatchewan Immigrant Nominee Program (SINP) paused all new
      Job Approval Forms (JAFs).`,
  },
  {
    icon: <FileText />,
    title:
      " Are you looking to immigrate to Canada and contribute to a thriving community?",
    description: ` The Saskatchewan Provincial Nominee
      Program (SINP) offers a direct pathway to Canadian permanent residency. As
      an approved provincial program, SINP is designed to attract skilled
      individuals and families with experience to settle and work in
      Saskatchewan.`,
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
const typesConfigKey: FeatureItemData[] = [
  {
    icon: <Plane />,
    title: "International Skilled Worker",
    description:
      "For skilled foreign workers with a job offer in Saskatchewan.",
  },
  {
    icon: <Notebook />,
    title: "Saskatchewan Work Experience",
    description:
      "For foreign workers currently living and working in Saskatchewan.",
  },
  {
    icon: <Briefcase />,
    title: "Entrepreneur Stream",
    description:
      "For individuals who wish to invest and manage a business in Saskatchewan.",
  },
  {
    icon: <Heart />,
    title: "Farm Owner & Operator",
    description:
      "For experienced farmers with capital looking to own or operate a farm.",
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
const stepsTwo: StepConfigList[] = [
  {
    icon: Lightbulb,
    title: "  Skilled Workers: ",
    description:
      "For individuals with qualifying education, work experience, and language skills.",
  },
  {
    icon: Award,
    title: "Trade Workers:",
    description: " For skilled tradespeople who meet specific criteria.",
  },

  {
    icon: FileCheck,
    title: "Family Sponsorship:",
    description:
      "For Canadian citizens and permanent residents sponsoring family members.",
  },
  {
    icon: Compass,
    title: "Entrepreneurs:",
    description:
      "For those looking to start or buy a business in the province.",
  },
  {
    icon: Briefcase,
    title: "Investors: ",
    description: "For individuals who invest in Saskatchewan’s economy.",
  },
];
const featuresConf = [
  {
    icon: "Briefcase" as const,
    title: "  Faster Processing: ",
    description:
      "Saskatchewan Provincial Nominee Program SINP offers an expedited nomination process, which can significantly speed up your application for Canadian permanent residency.",
  },
  {
    icon: "Notebook" as const,

    title: "Opportunity to Contribute: ",
    description:
      "By immigrating through Saskatchewan Provincial Nominee Program (SINP), you can contribute your skills and expertise to Saskatchewan’s economy and communities.",
  },
  {
    icon: "Layers" as const,

    title: "Integration and Community: ",
    description:
      "SINP provides a supportive environment for newcomers to settle and integrate into Canadian society.",
  },
];
const featuresTypesTwo = [
  {
    icon: "BriefcaseBusiness" as const,
    title: " Existing Work Permit",
    description:
      "Individuals who have been working in Saskatchewan for at least six months under a valid work permit are eligible to apply for SINP.",
  },

  {
    icon: "Map" as const,
    title: "Health Professionals",
    description:
      "Individuals who have worked as a physician, a nurse, or any other health profession in Saskatchewan for at least six months can apply for SINP.",
  },
  {
    icon: "Layers" as const,
    title: "Long Haul Truck Driver ",
    description:
      "Individuals who are currently working for an approved trucking firm in Saskatchewan must have a minimum of six months experience in Saskatchewan for their current employer to be considered for SINP.",
  },
  {
    icon: "NotebookPenIcon" as const,
    title: "Hospitality Sector",
    description:
      " Under this sub-category those individuals that are currently working in Saskatchewan as food counter attendants, food and beverage servers, kitchen helpers, or housekeeping and cleaning staff for at least six months are eligible. The employer must receive approval from the Province of Saskatchewan before the applicant begins to work in Canada.",
  },

  {
    icon: "Briefcase" as const,
    title: "Students",
    description:
      "International students who have graduated from a recognized post-secondary institution in Canada and have worked in Saskatchewan for at least twenty- four months can apply for SINP. If the students have graduated from an eligible designated learning institute in Saskatchewan, they can apply for provincial nomination after working for a Saskatchewan based employer for 6 months.",
  },
  {
    icon: "Notebook" as const,
    title: "Agriculture Talent Pathway",
    description:
      "You must have a valid job offer for a permanent, full-time agricultural sector job in Saskatchewan. You must have completed at least secondary school (high school) or a higher level of education. You must attest to your intention to live and work in Saskatchewan.",
  },
];
const featuresTypesThree = [
  {
    icon: "BriefcaseBusiness" as const,
    title: " The Saskatchewan Entrepreneur stream is a three-stage process:",
    description:
      " Expression of interest; Invitation to submit an application; Nomination;",
  },

  {
    icon: "Layers" as const,
    title: "Temporary Work Permit",
    description:
      "Successful candidates initially come to Canada on a temporary work permit. They become eligible to apply for nomination after a minimum of 6 months spent establishing their business.Candidates who meet requirements must sign a Business Performance Agreement (BPA).",
  },

  {
    icon: "NotebookPenIcon" as const,
    title: "Minimum Entry Criteria:",
    description:
      " Have a minimum net worth of $500,000 CAD. Have at least three years of business management or entrepreneurial experience gained within the past 10 years. Have the intention to invest at least $300,000 CAD if your business is located in Regina or Saskatoon. If it is located anyhwere else, you only need to make a $200,000 investment",
  },

  {
    icon: "Map" as const,
    title: "Business Establishment Plan Requirements: ",
    description:
      "Your plan to start a business in Saskatchewan. Your ownership of minimum one-third of the business unless you invest at least $1,000,000 CAD in the business. Your commitment to play an active and ongoing role in the daily management of the business. The creation of two jobs for permanent residents or citizens of Canada in Saskatchewan if your new business is in Regina or Saskatoon",
  },

  {
    icon: "Briefcase" as const,
    title: "Letter of support",
    description:
      "The SINP will then issue a letter to support a work permit application.If the work permit application is successful, candidates come to Canada and begin establishing their business.",
  },
  {
    icon: "Notebook" as const,
    title: "After 6 months",
    description:
      "After 6 months, candidates become eligible to apply for the provincial nomination for permanent residence. They must also meet the terms of the BPA.",
  },
];
const featuresTypesOne = [
  {
    icon: "BriefcaseBusiness" as const,
    title: " International Skilled Worker – Employment Offer",
    description:
      "Under this sub-category, applicants who are a skilled worker are eligible to apply for provincial nomination if they have a job offer from an eligible Saskatchewan employer. If the applicant has a job offer for an occupation classified at NOC level 0, A, B or a designated trade in Saskatchewan, it will add 30 points for applicant under SINP points grid.",
  },
  {
    icon: "NotebookPenIcon" as const,
    title: "International Skilled Worker – Occupations In-Demand",
    description:
      "Under this sub-category, applicants who are highly skilled and have experience in an in-demand occupation in Saskatchewan are eligible to apply even if they do not have a job offer. All in-demand occupations that are eligible under the SINP’s Express Entry and Occupation In-Demand sub- categories are rated Skill Level A or B or Skill Type 0 under Canada’s National occupational Classification, or NOC.",
  },

  {
    icon: "Map" as const,
    title: "International Skilled Worker – Saskatchewan Express Entry",
    description:
      "Under this sub-category the province nominates individuals who are already in immigration, Refugees and Citizenship Canada’s (IRCC) Express Entry pool and have a skilled work experience in an in-demand occupation in Saskatchewan.",
  },
  {
    icon: "Layers" as const,
    title: "International Worker - Agriculture Talent Pathway",
    description:
      "You must have a valid job offer for a permanent, full-time agricultural sector job in Saskatchewan. You must have completed at least secondary school (high school) or a higher level of education. You must attest to your intention to live and work in Saskatchewan.",
  },
  {
    icon: "Briefcase" as const,
    title: "International Worker - Health Talent Pathway",
    description:
      "You must have an offer for an eligible permanent, full-time health sector job in Saskatchewan. Attest to your intent to work and reside in Saskatchewan. Have a post-secondary education that relates to the job you've been offered (Master's or Bachelor's degree; or a three-year degree at a university or college; or a diploma that requires two years at a university, college, trade or technical school, or other post-secondary institution).",
  },
  {
    icon: "Notebook" as const,
    title: "International Worker - Tech Talent Pathway",
    description:
      "You must have an offer for an eligible permanent, full-time technology or innovation sector job in Saskatchewan. Attest to your intent to work and reside in Saskatchewan. Have a post-secondary education that relates to the job you've been offered (Master's or Bachelor's degree; or a three-year degree at a university or college; or a diploma that requires two years at a university, college, trade or technical school, or other post-secondary institution).",
  },
];
const SaskatchewanImmigrantNomineeProgram: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <Hero2
        badgeText="GreenTech Resources"
        title="Saskatchewan Immigrant Nominee Program (SINP)"
        description="
    Saskatchewan, situated in the heart of Canada, is renowned for its vast prairies and expansive fields. It is an ideal destination for newcomers to Canada, offering a cost-effective lifestyle and a diverse, culturally rich community."
        imageUrl="/images/n/sinp.jpg"
        primaryCta={commonProps?.primaryCta}
        secondaryCta={commonProps?.secondaryCta}
      />

      <Feature2WithImage
        heading={
          <>
            Saskatchewan Immigrant Nominee Program
            <span className="text-primary pl-2">(SINP)</span>
          </>
        }
        subheading="The Saskatchewan Provincial Nominee Program (SINP): Your Gateway to Canada"
        features={cardsOne}
        imageSrc="/images/hero/e.avif"
        imageAlt="Fox in the wild"
      />
      <StepsWithHeadingImageList
        badgeText="Your Gateway to Canada"
        heading="The Saskatchewan Provincial Nominee Program (SINP) "
        subheading="
    Are you looking to immigrate to Canada and contribute to a thriving community? The Saskatchewan Provincial Nominee Program (SINP) offers a direct pathway to Canadian permanent residency. As an approved provincial program, SINP is designed to attract skilled individuals and families with experience to settle and work in Saskatchewan.
    
    A Variety of Streams to Suit Your Needs
    
    SINP encompasses several streams to cater to different skillsets and circumstances:
    "
        steps={stepsTwo}
      />
      <Feature3
        badgeText="Benefits"
        heading="Choosing Saskatchewan Provincial Nominee"
        highlighted="Program SINP"
        description="SINP offers an expedited nomination process, which can significantly speed up your application"
        items={featuresConf}
      />
      <FeatureGrid4
        title="Ready to Start Your Journey?"
        description="If you’re interested in learning more about the Saskatchewan Provincial Nominee Program  SINP and whether you qualify, visit the official Saskatchewan Immigration website for detailed information and application guidelines"
        features={typesConfigKey}
      />
      <Feature3
        badgeText="Types"
        heading="International Skilled "
        highlighted="Worker"
        description="
    Under this category applications from skilled international workers will be accepted, who plan to live and work in the province of Saskatchewan. applicants will get points on the basis of which they can be nominated under one of three sub-categories."
        items={featuresTypesOne}
      />
      <Feature3
        badgeText="Types"
        heading=" Saskatchewan Work "
        highlighted="Experience"
        description="
    Under this category all foreign workers who are currently living in Saskatchewan are eligible to apply for SINP. The Saskatchewan Experience Category accepts applications under the following sub-categories:"
        items={featuresTypesTwo}
      />
      <Feature3
        badgeText="Types"
        heading=" Entrepreneur"
        highlighted=""
        description="
    This category is for individuals who wish to invest management talent and capital in Saskatchewan by establishing, acquiring, or partnering in a business the province. Candidates are expected to take on an active management role in the business. This sub-category functions on an Expression of Interest model.
    The Saskatchewan Entrepreneur Stream allows candidates and their families to start, obtain or partner in a business in the province. Candidates must be actively involved in managing the business and live in Saskatchewan.
    "
        items={featuresTypesThree}
      />
      <FeatureGrid4
        title=" Benefits for your family "
        description="With Saskatchewan Immigrant Nominee Program (SINP), your entire family, including your spouse and children under 22 years of age (at the time of submitting the provincial nomination application), can submit for Canada Permanent Resident to enjoy most of the benefits like Canada."
        features={features2}
      />
      <Feature2WithImage
        heading={
          <>
            Farm Owner and
            <span className="text-primary pl-2">Operator</span>
          </>
        }
        subheading="Types of Saskatchewan Provincial Nominee Program  SINP"
        features={cardsFour}
        imageSrc="/images/hero/l.avif"
        imageAlt="Fox in the wild"
      />
      <Feature2WithImage
        heading={
          <>
            Saskatchewan Immigrant Nominee Program
            <span className="text-primary pl-2">(SINP)</span>
          </>
        }
        subheading="  During the wait for permanent residency, your family can apply to come, work and study in Canada"
        features={cards}
        imageSrc="/images/hero/e.avif"
        imageAlt="Fox in the wild"
      />
      <FeatureGrid4
        title="Saskatchewan Immigrant Nominee Program (SINP)"
        description="When you become Canada Permanent Resident"
        features={features3}
      />
      <CtaWithFeaturesRightImage
        badgeText="Saskatchewan Immigrant Nominee Program (SINP)"
        title=" GreenTech Resource Worldwide Canada"
        subtitle="Saskatchewan is very successful with immigration. The province welcomes between 3,000 and 4,000 newcomers each year. That number has now grown to 15,000. This is especially impressive considering that Saskatchewan’s population is just over 1 million. The province is one of Canada’s most popular destinations for newcomers."
        features={features}
      />
    </div>
  );
};

export default SaskatchewanImmigrantNomineeProgram;
