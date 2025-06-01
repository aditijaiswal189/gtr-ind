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
    title: "Opportunities",
    description:
      "Whether you're a skilled worker, recent graduate, or entrepreneur, NL PNP provides several opportunities to fast-track your Canadian permanent residency. Here’s an overview of the five available Category.",
  },
  {
    icon: "Globe" as const,
    title: "International Graduate Entrepreneur Category",
    description:
      "Graduates of post-secondary institutions in Newfoundland and Labrador who have already started or purchased a business in the province can apply under this stream. It’s designed for those who have shown a commitment to the local economy and want to continue growing their business.",
  },
  {
    icon: "Repeat" as const,
    title: "International Entrepreneur Category",
    description:
      "This stream is for experienced business owners or senior managers who wish to establish or purchase a business in Newfoundland and actively manage it. Applicants must meet minimum investment and business ownership requirements.",
  },
  {
    icon: "Briefcase" as const,
    title: "International Graduate Category",
    description:
      "Recent graduates from recognized post-secondary institutions in Canada may qualify under this category if they have a valid job offer related to their field of study from a Newfoundland employer.",
  },
  {
    icon: "GraduationCap" as const,
    title: "Skilled Worker Category",
    description:
      "The Skilled Worker Category targets individuals with specialized skills who have a full-time job offer from a Newfoundland and Labrador employer. Applicants must have relevant experience and meet the labor market needs of the province.",
  },
  {
    icon: "Award" as const,
    title: "Newfoundland and Labrador Express Entry Skilled Worker",
    description:
      "This stream is for highly skilled workers with a valid job offer from a Newfoundland employer and who are eligible under the federal Express Entry system. It’s one of the fastest ways to immigrate to the province.",
  },
];
const NewFoundlandAndLabrador: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <Hero2
        badgeText="GreenTech Resources"
        title="Newfoundland Provincial Nominee Program (NL PNP)"
        description="Newfoundland and Labrador is the easternmost province of Canada. Situated in the country’s Atlantic region, it is composed of the insular region of
Newfoundland and the continental region of Labrador to the northwest"
        imageUrl="/images/n/newbrunswick1.png"
        primaryCta={commonProps?.primaryCta}
        secondaryCta={commonProps?.secondaryCta}
      />

      <Feature3
        badgeText="NL PNP"
        heading=" Newfoundland Provincial Nominee Program"
        highlighted="Program"
        description=" 
The Newfoundland Provincial Nominee Program (NL PNP) offers five immigration pathways for individuals wishing to settle in the beautiful province of Newfoundland and Labrador. "
        items={featuresNew}
      />
      <FeatureGrid4
        title=" Benefits for your family "
        description="With Newfoundland Provincial Nominee Program (NL PNP) , your entire family, including your spouse and children under 22 years of age (at the time of submitting the provincial nomination application), can submit for Canada Permanent Resident to enjoy most of the benefits like Canada."
        features={features2}
      />
      <Feature2WithImage
        heading={
          <>
            Newfoundland Provincial Nominee Program
            <span className="text-primary pl-2"> (NL PNP) </span>
          </>
        }
        subheading="  During the wait for permanent residency, your family can apply to come, work and study in Canada"
        features={cards}
        imageSrc="/images/hero/e.avif"
        imageAlt="Fox in the wild"
      />
      <FeatureGrid4
        title="Newfoundland Provincial Nominee Program (NL PNP) "
        description="When you become Canada Permanent Resident"
        features={features3}
      />
      <CtaWithFeaturesRightImage
        badgeText="Newfoundland Provincial Nominee Program (NL PNP) "
        title=" GreenTech Resource Worldwide Canada"
        subtitle=""
        features={features}
      />
    </div>
  );
};

export default NewFoundlandAndLabrador;
