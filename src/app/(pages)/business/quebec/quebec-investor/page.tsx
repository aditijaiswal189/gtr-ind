import { features } from "@/app/(pages)/about-us/about/about/page";
import { CtaWithFeaturesRightImage } from "@/components/ui/cta-with-features-right-image";
import { Feature1Animated } from "@/components/ui/feature1-animated";
import { Feature2WithImage } from "@/components/ui/features-2-with-image";
import {
  FeatureItemPropsList,
  FeatureList,
} from "@/components/ui/features-list";
import { Hero2 } from "@/components/ui/hero2";
import { commonProps } from "@/constant/commonProps";
import {
  Award,
  Briefcase,
  Coffee,
  Globe,
  Heart,
  Notebook,
  Smile,
  Star,
  UserCheck,
  Zap,
} from "lucide-react";
import React, { ReactNode } from "react";

const items: FeatureItemPropsList[] = [
  {
    icon: Star,
    text: "Two years of suitable management or business experience within the five years preceding the application",
  },
  {
    icon: Smile,
    text: "Investment of $1.2 million into a passive government-guaranteed investment for a period of five years bearing no interest",
  },
  { icon: Award, text: "Intend to settle in the province of Quebec" },
  {
    icon: Zap,
    text: "Enter into an investment agreement with a financial intermediary, either an investment broker or a trust company that has signed an agreement with the Ministère de l Immigration, de la Francisation et de l Intégration and IQ Immigrants investisseurs Inc",
  },
  {
    icon: Heart,
    text: "Make a 5 year term investment: You must make a five-year term investment of CDN$1,200,000. The investment must be made with IQ Immigrants Investisseurs inc. The investment is guaranteed by the Gouvernement du Québec.",
  },
  { icon: Coffee, text: "Obtain enough points in the selection grid" },
  {
    icon: Notebook,
    text: "Obtain an attestation of learning about democratic values and Québec values",
  },
];

const cards = [
  {
    icon: <Briefcase />,
    title: "Other Options",
    description:
      "While the federal Immigrant Investor Program of Canada has been terminated, Quebec still offer investor immigration programs. This program require participants to invest a significant amount in the province in exchange for permanent residency.",
  },
  {
    icon: <Notebook />,
    title: "Current Status",
    description:
      "However, the Quebec Immigrant Investor Program QIIP is currently closed to new applicants. It was suspended in 2019 and was supposed to open in April 2023. However, it was announced last March that the program would remain closed until January 2024",
  },
];
interface FeatureItem {
  title: string;
  description: string;
  link: string;
  icon: ReactNode;
}

const featureItems: FeatureItem[] = [
  {
    title: "Consult Us",
    description:
      "Immigration policies can change over time, so it’s essential to stay updated with us for the latest information from the respective provincial or territorial immigration authorities.Consult GreenTech Resources Worldwide Canada experts to understand specific requirements and eligibility for these pathways based on your circumstances",
    link: "/",
    icon: <UserCheck className="w-16 h-16 text-primary lg:w-20 lg:h-20" />,
  },
  {
    title: "Book a consultaion",
    description:
      "As the new applications for this program QIIP are currently on hold.Please contact GreenTech Resources Worldwide Canada for alternative solutions. Book a consultation today to explore immigration options and secure your family's future in Canada.",
    link: "/about-us/about/book-appointment",
    icon: <Globe className="w-16 h-16 text-primary lg:w-20 lg:h-20" />,
  },
];

const QuInvestor: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <Hero2
        badgeText="GreenTech Resources"
        title="Québec Immigrant Investor Program (QIIP)"
        description="This program is designed for high-net-worth individuals who wish to invest in the Quebec economy Applicants must have these qualifications"
        imageUrl="/images/n/quebecimmigrant.jpg"
        primaryCta={commonProps?.primaryCta}
        secondaryCta={commonProps?.secondaryCta}
      />

      <FeatureList
        badgeText="Eligibility
"
        heading={
          <>
            Quebec Immigrant Investor Program
            {/* <br className="hidden md:block" /> */}
            <span className="text-primary"> (QIIP)</span>
          </>
        }
        subheading="Quebec's dynamic cities, picturesque landscapes, and strong economy make it an appealing choice for immigration.
The Business Immigration Programs serve as a bridge for those seeking to contribute to Quebec's vibrant communities and economic development."
        items={items}
      />
      <Feature2WithImage
        heading={
          <>
            Quebec Immigrant Investor Program
            <span className="text-primary pl-2">(QIIP)</span>
          </>
        }
        subheading="Quebec’s dynamic cities, picturesque landscapes, and strong economy make it an appealing choice for immigration. The Business Immigration Programs serve as a bridge for those seeking to contribute to Quebec’s vibrant communities and economic development."
        features={cards}
        imageSrc="/images/n/quebecselfemployed.png"
        imageAlt="Fox in the wild"
      />
      <Feature1Animated featureItems={featureItems} />

      <CtaWithFeaturesRightImage
        badgeText="About Us"
        title=" GreenTech Resource Worldwide Canada"
        subtitle=""
        features={features}
      />
    </div>
  );
};

export default QuInvestor;
