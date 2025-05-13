import { features } from "@/app/(pages)/about-us/about/about/page";
import { CtaWithFeaturesRightImage } from "@/components/ui/cta-with-features-right-image";
import { Feature1Animated } from "@/components/ui/feature1-animated";
import { Feature3 } from "@/components/ui/feature3";
import {
  Feature2WithImage,
  FeatureItemProps,
} from "@/components/ui/features-2-with-image";
import { Hero2 } from "@/components/ui/hero2";
import {
  Briefcase,
  FileText,
  Globe,
  Notebook,
  Plane,
  UserCheck,
} from "lucide-react";
import React, { ReactNode } from "react";
interface FeatureItem {
  title: string;
  description: string;
  link: string;
  icon: ReactNode;
}

const featureItems: FeatureItem[] = [
  {
    title: "Why Now Is the Best Time to Apply",
    description:
      "The demand for skilled workers in Atlantic Canada has never been higher, and the AIPP offers a unique opportunity for individuals looking to immigrate. With the program now being a permanent fixture in Canada’s immigration system, there is no better time to explore the opportunities that await you in the Atlantic provinces.",
    link: "/",
    icon: <UserCheck className="w-16 h-16 text-primary lg:w-20 lg:h-20" />,
  },
  {
    title: "Are you planning to move to Canada?",
    description:
      " If so, the Atlantic Immigration Pilot Program (AIPP) could be the perfect opportunity to make your dreams of living in Canada a reality. The AIPP provides an easier, faster immigration route for skilled workers and international graduates seeking to settle in Canada’s Atlantic provinces. Through this program, even those who are not Canadian citizens or permanent residents can apply online, which expedites the immigration process while reducing application costs.",
    link: "/",
    icon: <Notebook className="w-16 h-16 text-primary lg:w-20 lg:h-20" />,
  },
  {
    title: "Why Choose the Atlantic Immigration Pilot Program?",
    description:
      "The AIPP is a strategic initiative launched by the Canadian government to stimulate economic growth in the Atlantic Provinces, which include New Brunswick, Newfoundland and Labrador, Nova Scotia, and Prince Edward Island. These provinces have a high demand for skilled workers, and the AIPP aims to fill these gaps by attracting foreign talent. This initiative not only supports the local economies but also provides immigrants with a streamlined pathway to permanent residency in Canada.",
    link: "/",
    icon: <Plane className="w-16 h-16 text-primary lg:w-20 lg:h-20" />,
  },
  {
    title: "Faster processing times",
    description:
      "With faster processing times and lower application costs, the AIPP offers a unique and efficient way for outland candidates to secure permanent residency. In fact, the opportunities available through this program are currently higher than in any other province. Whether you’re a skilled worker or an international graduate, the AIPP opens doors to a stable and prosperous future in Canada",
    link: "/",
    icon: <Globe className="w-16 h-16 text-primary lg:w-20 lg:h-20" />,
  },
];

const cards: FeatureItemProps[] = [
  {
    icon: <Briefcase />,
    title: "A Brief History of the Atlantic Immigration Pilot Program",
    description: `The AIPP was introduced in 2017 as a pilot project to address labor shortages and boost economic growth in the Atlantic region. It has since become a highly successful initiative, with increasing numbers of immigrants being invited to apply each year. Under Canada’s Immigration Level Plan for 2021, the government aimed to invite 6,250 immigrants to apply for permanent residency through the AIPP. This marked a significant increase in the program’s capacity, reflecting the growing demand for skilled workers in the Atlantic provinces.`,
  },
  {
    icon: <FileText />,
    title: "AIPP Becomes Permanent",
    description: `Due to the overwhelming success of the pilot program, the Canadian government announced that the AIPP would become a permanent immigration program starting January 1, 2022. This transition from pilot to permanent status ensures that the Atlantic provinces will continue to benefit from the influx of skilled immigrants, and it solidifies the AIPP as a reliable and attractive option for those seeking permanent residency in Canada.`,
  },
];
const features3 = [
  {
    icon: "Briefcase" as const,
    title: "Atlantic High-Skilled Program (AHSP)",
    description:
      " For individuals with a job offer in a management, professional, or technical/skilled trade position.",
  },
  {
    icon: "Notebook" as const,
    title: "Atlantic Intermediate-Skilled Program (AISP) ",
    description:
      "For individuals with a job offer in a position that requires a high school education and/or specific job training. ",
  },
  {
    icon: "Layers" as const,
    title: "Atlantic International Graduate Program (AIGP)",
    description:
      " For international graduates who have completed their education in one of the Atlantic provinces.",
  },
];
const AtlanticImmigration: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <Hero2
        badgeText="GreenTech Resources"
        title="Atlantic Immigration (AIPP)"
        description="New Brunswick | Newfoundland and Labrador | Nova Scotia | Prince Edward Island"
        imageUrl="/images/hero/h.avif"
        primaryCta={{
          label: "Alberta (AAIP)",
          href: "/immigration/provincial-nominee-programs/alberta(aaip)",
        }}
        secondaryCta={{
          label: "Learn More",
          href: "/about-us/about/book-appointment",
        }}
      />
      <Feature1Animated featureItems={featureItems} />
      <Feature2WithImage
        heading={
          <>
            Atlantic Immigration Pilot Program
            <span className="text-primary pl-2"> AIPP opportunities</span>
          </>
        }
        subheading="Atlantic Immigration Pilot Program (AIPP) Opportunities: Your Path to Permanent Residency in Canada"
        features={cards}
        imageSrc="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        imageAlt="Fox in the wild"
      />
      <Feature3
        badgeText="AIPP"
        heading="How the AIPP"
        highlighted=" Works"
        description="The AIPP is employer-driven, meaning that candidates must first secure a job offer from a designated employer in one of the Atlantic provinces. Once the job offer is in place, candidates can apply for permanent residency through the AIPP. The program is divided into three categories:"
        items={features3}
      />
      <CtaWithFeaturesRightImage
        badgeText="About Us"
        title=" GreenTech Resource Worldwide Canada"
        subtitle="Each program has its specific requirements; please contact GTR Worldwide for personalized guidance."
        features={features}
      />
    </div>
  );
};

export default AtlanticImmigration;
