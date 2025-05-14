import { features } from "@/app/(pages)/about-us/about/about/page";
import { CtaWithFeaturesRightImage } from "@/components/ui/cta-with-features-right-image";
import { FeatureGrid4, FeatureItemData } from "@/components/ui/feature-grid4";
import { Feature3 } from "@/components/ui/feature3";
import {
  Feature2WithImage,
  FeatureItemProps,
} from "@/components/ui/features-2-with-image";
import { Hero2 } from "@/components/ui/hero2";
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
    title: "Northwest Territories Employer Driven Program",
    description: "Express Entry System for Skilled Workers",
  },
  {
    icon: "Globe" as const,
    title: "Skilled Worker",
    description: "Entry Level/Semi-Skilled Occupations",
  },
  {
    icon: "Repeat" as const,
    title: "Northwest Territories Business Immigration Program",
    description: "Business Stream",
  },
];

export const NorthwestTerritories: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <div className="min-h-screen bg-white flex gap-12 flex-col">
        <Hero2
          badgeText="GreenTech Resources"
          title="The Northwest Territories"
          description="The northwest territories of Canada, or the Territoires du Nord-Ouest, are the Canadian federation’s federally recognized territory."
          imageUrl="/images/hero/l.avif"
          primaryCta={{
            label: "Alberta (AAIP)",
            href: "/immigration/provincial-nominee-programs/alberta(aaip)",
          }}
          secondaryCta={{
            label: "Learn More",
            href: "/about-us/about/book-appointment",
          }}
        />
        <FeatureGrid4
          title=" Benefits for your family "
          description="With
                The Northwest Territories Program, your entire family, including your spouse and children under 22 years of age (at the time of submitting the provincial nomination application), can submit for Canada Permanent Resident to enjoy most of the benefits like Canada."
          features={features2}
        />
        <Feature3
          badgeText="NBPNP"
          heading="The Northwest Territories"
          highlighted=" Program"
          description="In terms of its land, it is the second-largest territory of Canada. In terms of its population, the northwest territories have the highest population among all the three federal territories of northern Canada. The Northwest Territories accepts applications under two programs, one of which has three distinct streams"
          items={featuresNew}
        />
        <Feature2WithImage
          heading={
            <>
              The Northwest Territories Program{" "}
              <span className="text-primary pl-2">(NBPNP)</span>
            </>
          }
          subheading="  During the wait for permanent residency, your family can apply to come, work and study in Canada"
          features={cards}
          imageSrc="/images/hero/e.avif"
          imageAlt="Fox in the wild"
        />
        <FeatureGrid4
          title=" The Northwest Territories Program (NBPNP)"
          description="When you become Canada Permanent Resident"
          features={features3}
        />
        <CtaWithFeaturesRightImage
          badgeText="(NBPNP)"
          title=" GreenTech Resource Worldwide Canada"
          subtitle=""
          features={features}
        />
      </div>
    </div>
  );
};

export default NorthwestTerritories;
