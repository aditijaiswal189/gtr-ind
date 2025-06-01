import { features } from "@/app/(pages)/about-us/about/about/page";
import { CtaWithFeaturesRightImage } from "@/components/ui/cta-with-features-right-image";
import { FeatureGrid4, FeatureItemData } from "@/components/ui/feature-grid4";
import {
  Feature2WithImage,
  FeatureItemProps,
} from "@/components/ui/features-2-with-image";
import { Hero2 } from "@/components/ui/hero2";
import { commonProps } from "@/constant/commonProps";
import {
  Award,
  BookOpen,
  Briefcase,
  FileText,
  Globe2,
  GraduationCap,
  Heart,
  Notebook,
  PenTool,
  Plane,
  Send,
  TrendingUp,
  UserCheck,
  UserPlus,
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
export const streamsConfig: FeatureItemData[] = [
  {
    icon: <UserCheck />,
    title: "Foreign Worker stream",
    description:
      "If you are a skilled foreign worker with a job offer in Ontario.",
  },
  {
    icon: <GraduationCap />,
    title: "Masters Graduate stream",
    description:
      "If you have a Masters from an Ontario university, you can apply to the following streams.",
  },
  {
    icon: <BookOpen />,
    title: "International Student stream",
    description: "If you are a recent graduate with a job offer in Ontario.",
  },
  {
    icon: <Award />,
    title: "PhD Graduate stream",
    description:
      "If you have a PhD degree from an Ontario university, you can apply to the following streams.",
  },
  {
    icon: <TrendingUp />,
    title: "In-Demand Skills stream",
    description:
      "If you are a foreign worker in an in-demand occupation with a job offer in Ontario.",
  },
  {
    icon: <Send />,
    title: "Ontario’s Express Entry Streams",
    description:
      "To qualify, you must have an Express Entry profile and receive a notification of interest from Ontario.",
  },
  {
    icon: <Briefcase />,
    title: "OINP Entrepreneur Stream",
    description:
      "If you are a foreign entrepreneur with a great business idea, apply to establish or grow a business in the province.",
  },
  {
    icon: <UserPlus />,
    title: "Human Capital Priorities stream",
    description:
      "Apply for the Human Capital Priorities stream if you have the required skilled work experience, education and language abilities.",
  },
  {
    icon: <PenTool />,
    title: "Skilled Trades stream",
    description:
      "Apply for the Skilled Trades stream if you are a foreign worker with Ontario work experience in an eligible skilled trade.",
  },
  {
    icon: <Globe2 />,
    title: "French-Speaking Skilled Worker stream",
    description:
      "Apply for the French-Speaking Skilled Worker stream if you are a French-speaking foreign worker with strong English language abilities.",
  },
];
const Ontario: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <Hero2
        badgeText="GreenTech Resources"
        title="Ontario Immigrant Nominee Program (OINP)"
        description="Ontario, the most populous province in Canada, is known for its diverse landscapes, vibrant cities, and robust economy. Home to the country’s largest city, Toronto, as well as the national capital, Ottawa, Ontario is a cultural and economic hub"
        imageUrl="/images/n/ontariopnp.png"
        primaryCta={commonProps?.primaryCta}
        secondaryCta={commonProps?.secondaryCta}
      />
      <FeatureGrid4
        title="Ontario Immigrant Nominee Program (OINP)"
        description="For individuals aspiring to immigrate to Ontario, the Ontario Immigrant Nominee Program (OINP) plays a crucial role. This program allows the province to nominate individuals for permanent residence in Canada based on their skills, work experience, and ability to contribute to the local economy.

The OINP has various streams, including those for skilled workers, entrepreneurs, and international students, providing diverse opportunities for immigrants to establish themselves in Ontario and contribute to its continued growth and prosperity."
        features={streamsConfig}
      />
      <FeatureGrid4
        title=" Benefits for your family "
        description="With Ontario Immigrant Nominee Program, your entire family, including your spouse and children under 22 years of age (at the time of submitting the provincial nomination application), can submit for Canada Permanent Resident to enjoy most of the benefits like Canada."
        features={features2}
      />
      <Feature2WithImage
        heading={
          <>
            Ontario Immigrant Nominee Program
            <span className="text-primary pl-2">(OINP)</span>
          </>
        }
        subheading="  During the wait for permanent residency, your family can apply to come, work and study in Canada"
        features={cards}
        imageSrc="/images/hero/e.avif"
        imageAlt="Fox in the wild"
      />
      <FeatureGrid4
        title=" (OINP)"
        description="When you become Canada Permanent Resident"
        features={features3}
      />
      <CtaWithFeaturesRightImage
        badgeText="OINP"
        title=" GreenTech Resource Worldwide Canada"
        subtitle="Ontario Immigrant Nominee Program"
        features={features}
      />
    </div>
  );
};

export default Ontario;
