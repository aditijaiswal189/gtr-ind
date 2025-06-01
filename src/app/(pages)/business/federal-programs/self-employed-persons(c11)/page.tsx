import { features } from "@/app/(pages)/about-us/about/about/page";
import { CtaWithFeaturesRightImage } from "@/components/ui/cta-with-features-right-image";
import { Feature1Animated } from "@/components/ui/feature1-animated";
import {
  Feature2WithImage,
  FeatureItemProps,
} from "@/components/ui/features-2-with-image";
import { Hero2 } from "@/components/ui/hero2";
import { commonProps } from "@/constant/commonProps";
import { Briefcase, Globe, Notebook, UserCheck } from "lucide-react";
import React, { ReactNode } from "react";
const cards: FeatureItemProps[] = [
  {
    icon: <Briefcase />,
    title: "IMP program",
    description:
      "IMP program has LMIA exemption that goes with the name “C11”. Exemption code C11 lets entrepreneurs and self-employed individuals apply for a work permit that does not require LMIA.",
  },
  {
    icon: <Notebook />,
    title: "C11 Work Permit",
    description:
      "The C11 work permit is granted if you are business owner or self-employed person with good business plan and can prove the significant bềnits to Canadians from the business.",
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
    title: "Ownership of the business",
    description:
      "Aplicant should own at least 51% of the business. If you have less than it, you must apply for a Worker Visa as an employee (LMIA needed)",
    link: "/",
    icon: <UserCheck className="w-16 h-16 text-primary lg:w-20 lg:h-20" />,
  },
  {
    title: "Significant Benefits",
    description:
      "Prove the significant benefits to Canada (support the economy, job creation, development of a region.. etc; advance Canadian industries with technologies, services)",
    link: "/",
    icon: <Globe className="w-16 h-16 text-primary lg:w-20 lg:h-20" />,
  },
];
const SelfEmployedPersons: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <Hero2
        badgeText="GreenTech Resources"
        title="Federal Self-employed Persons Program (C11)"
        description="The International Mobility Program (IMP) grants the distinctive Canadian work permit visa, the C11 category work permit. It is offered to international business owners and investors who want to operate a business in Canada as self-employed persons."
        imageUrl="/images/n/c11.jpg"
        primaryCta={commonProps?.primaryCta}
        secondaryCta={commonProps?.secondaryCta}
      />
      <Feature2WithImage
        heading={
          <>
            Business Programs
            <span className="text-primary pl-2">C 11</span>
          </>
        }
        subheading=""
        features={cards}
        imageSrc="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        imageAlt="Fox in the wild"
      />
      <Feature1Animated featureItems={featureItems} />
      <CtaWithFeaturesRightImage
        badgeText="Self-employed Persons Program (C11)"
        title=" GreenTech Resource Worldwide Canada"
        subtitle=""
        features={features}
      />
    </div>
  );
};

export default SelfEmployedPersons;
