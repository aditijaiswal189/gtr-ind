import { features } from "@/app/(pages)/about-us/about/about/page";
import { CtaWithFeaturesRightImage } from "@/components/ui/cta-with-features-right-image";
import { FeatureGrid4, FeatureItemData } from "@/components/ui/feature-grid4";
import { Feature1Animated } from "@/components/ui/feature1-animated";
import { Hero2 } from "@/components/ui/hero2";
import { commonProps } from "@/constant/commonProps";
import {
  Briefcase,
  Globe,
  Heart,
  Notebook,
  Plane,
  UserCheck,
} from "lucide-react";
import React, { ReactNode } from "react";

const features2: FeatureItemData[] = [
  {
    title: "Sponsoring a spouse or partner",
    description: "",
    icon: <Plane />,
  },
  {
    title: " Sponsoring parents and grandparents",
    description: "",
    icon: <Notebook />,
  },
  {
    title: "Sponsoring dependent children",

    description: "",
    icon: <Briefcase />,
  },
  {
    title: "Sponsoring other family members",
    description: "",
    icon: <Heart />,
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
    title: "Requirements for Sponsor",
    description:
      "You must be a Canadian citizen or permanent resident and meet specific financial requirements to ensure your ability to support the sponsored family members.Sponsors commit to providing financial support to the sponsored family members for a specific period.",
    link: "/",
    icon: <UserCheck className="w-16 h-16 text-primary lg:w-20 lg:h-20" />,
  },

  {
    title: "Requirements for Sponsor's Family Members",
    description:
      "Sponsored family members must also meet specific eligibility criteria depending on the program. For example, in the case of sponsoring a spouse, the marriage or common-law partnership must be genuine, and for sponsoring parents and grandparents, they must pass a medical examination.",
    link: "/",
    icon: <Globe className="w-16 h-16 text-primary lg:w-20 lg:h-20" />,
  },
];
const FamilySponsorship: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <Hero2
        badgeText="GreenTech Resources"
        title="Family Sponsor"
        description="
The program allows eligible individuals to sponsor their close family members for permanent residency in Canada"
        imageUrl="/images/n/familysponsor.png"
        primaryCta={commonProps?.primaryCta}
        secondaryCta={commonProps?.secondaryCta}
      />
      <FeatureGrid4
        title="Family Sponsor "
        description="
Other than the regular visa application programs, people can also apply for a visa or even permanent residence under certain sponsorship programs which allow eligible individuals to sponsor their close family members for permanent residency in Canada.

Types of Family Sponsorship in Canada:"
        features={features2}
      />
      <Feature1Animated featureItems={featureItems} />
      <CtaWithFeaturesRightImage
        badgeText="Family Sponsor"
        title=" GreenTech Resource Worldwide Canada"
        subtitle="You may receive additional points if you have family members who are Canadian citizens or permanent residents. This can increase your chances of receiving an Invitation to Apply (ITA) from the province or the Canadian government.
Family Sponsor"
        features={features}
      />
    </div>
  );
};

export default FamilySponsorship;
