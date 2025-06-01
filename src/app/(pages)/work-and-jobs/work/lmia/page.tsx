import { features } from "@/app/(pages)/about-us/about/about/page";
import { CtaWithFeaturesRightImage } from "@/components/ui/cta-with-features-right-image";
import { Feature1Animated } from "@/components/ui/feature1-animated";
import { Feature3 } from "@/components/ui/feature3";
import {
  Feature2WithImage,
  FeatureItemProps,
} from "@/components/ui/features-2-with-image";
import { Hero2 } from "@/components/ui/hero2";
import { commonProps } from "@/constant/commonProps";
import { Briefcase, FileText, Globe, UserCheck } from "lucide-react";
import React, { ReactNode } from "react";
interface FeatureItem {
  title: string;
  description: string;
  link: string;
  icon: ReactNode;
}
const featureItems: FeatureItem[] = [
  {
    title: "Permanent Job Offer",
    description:
      "For NOC 0, A, or B position this LMIA job offer is applicable. There’s no requirement of application fee but it won’t provide a work permit. Moreover, it will support your Express Entry application. It may take time between 10-20 days to process.",
    link: "/",
    icon: <UserCheck className="w-16 h-16 text-primary lg:w-20 lg:h-20" />,
  },
  {
    title: "Temporary Job Offer",
    description:
      "For the temporary LMIA job offer, things are a little different. Here an application fee of 1000$ needed to be paid. It basically provides you a work permit and can be used to support your Express Entry application for NOC 0, A, or B positions only. It may take months to process.** There’s a Dual Intent LMIA where you can apply for both LMIAs.",
    link: "/",
    icon: <Globe className="w-16 h-16 text-primary lg:w-20 lg:h-20" />,
  },
];
const cards: FeatureItemProps[] = [
  {
    icon: <Briefcase />,
    title: "LMIA stands for",
    description: `LMIA job offer, where LMIA stands for Labour Market Impact Assessment is well known to those who seeking Canada immigration as a confirm selection. First of all, one must know about LMIA and why it is important for any employer!Labour Market Impact Assessment as it’s reflected by the name, paperwork needed to be done if any Canadian employer wants to hire a foreign national to work for him or her.`,
  },
  {
    icon: <FileText />,
    title: "Law of Canada",
    description: `According to the Canada law, you can not hire someone from outside Canada if there are candidates within Canada. Canada always gives priority to them who living in Canada as a citizen or with work-permit or holding permanent residence. So as you can see it’s quite difficult to get an LMIA and costly as well. Any employer must go through a 3-4 advertisement before applying for the LMIA.`,
  },
];
const features2 = [
  {
    icon: "Briefcase" as const,
    title: "Valid Work Permit",
    description:
      "If you have a valid work permit and work for your employer for more than one year.",
  },
  {
    icon: "Notebook" as const,
    title: "Exemptions",
    description:
      "If your work permit is LMIA exempted under an international agreement like the USA, AUS, etc. or a federal-provincial agreement or the Canadian interest category.",
  },
  {
    icon: "Layers" as const,
    title: "International Students",
    description:
      "In the case of international students with an open work permit, they are free with all these.",
  },
];
const LMIA: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <Hero2
        badgeText="GreenTech Resources"
        title="LMIA"
        description="LMIA job offer, where LMIA stands for Labour Market Impact Assessment .LMIA job offer is basically two types"
        imageUrl="/images/n/lmia.png"
        primaryCta={commonProps?.primaryCta}
        secondaryCta={commonProps?.secondaryCta}
      />
      <Feature1Animated featureItems={featureItems} />
      <Feature2WithImage
        heading={
          <>
            <span className="text-primary pl-2">What is LMIA?</span>
          </>
        }
        subheading="LMIA job offer, where LMIA stands for Labour Market Impact Assessment"
        features={cards}
        imageSrc="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        imageAlt="Fox in the wild"
      />

      <Feature3
        badgeText="LMIA"
        heading=" LMIA exempted "
        highlighted="job offers"
        description="There are some LMIA exempted job offers for the skilled immigrants looking for CANADA PR through Express Entry."
        items={features2}
      />
      <CtaWithFeaturesRightImage
        badgeText="LMIA"
        title=" GreenTech Resource Worldwide Canada"
        subtitle=""
        features={features}
      />
    </div>
  );
};

export default LMIA;
