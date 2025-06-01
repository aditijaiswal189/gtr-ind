import { features } from "@/app/(pages)/about-us/about/about/page";
import { CtaWithFeaturesRightImage } from "@/components/ui/cta-with-features-right-image";
import { FeatureGrid4, FeatureItemData } from "@/components/ui/feature-grid4";
import {
  FeatureItemPropsList,
  FeatureList,
} from "@/components/ui/features-list";
import { Hero2 } from "@/components/ui/hero2";
import { StepsWithHeading3 } from "@/components/ui/steps-with-heading3";
import { commonProps } from "@/constant/commonProps";
import { Award, Briefcase, Heart, Notebook, Plane, Star } from "lucide-react";
import React from "react";
const stepsBenefit = [
  {
    title: "Compliance fee",
    description:
      "Use the Employer portal to submit the employer’s offer. Here a compliance fee of $230 has to be paid by the employer.",
  },
  {
    title: "Conditions",
    description:
      "When hiring a temporary employer with an open work permit, the offer of employment form, and the compliance fee.",
  },
  {
    title: "Next steps",
    description:
      " Next, the employer portal will provide you a number that will help you to complete the work permit application.",
  },
];
const items: FeatureItemPropsList[] = [
  {
    icon: Star,
    text: "Those who have a trade agreement in Canada like CUSMA or CETA",
  },

  {
    icon: Award,
    text: "Those who enter Canada on an open work permit",
  },

  {
    icon: Notebook,
    text: "Those who get transferred to Canada as the employees of a similar company that has branch outside Canada",
  },
];
const features2: FeatureItemData[] = [
  {
    title: "Countryu Agreements",
    description: "County-specific agreements",
    icon: <Plane />,
  },
  {
    title: "Agreements",
    description: "Reciprocal youth exchange agreements",
    icon: <Notebook />,
  },

  {
    description:
      "Allowing international students who studied in Canada an opportunity to work",
    title: "International Students",
    icon: <Briefcase />,
  },
  {
    title: "Circumstances",
    description:
      "Circumstances that are culturally or socially advantageous to Canada",
    icon: <Heart />,
  },
];
const InternationalMobilityPrograms: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <Hero2
        badgeText="GreenTech Resources"
        title="International Mobility Program of Canada"
        description="The IMP or International Mobility Program of Canada provides employers with the chance to hire employees from outside on a momentary work permit to work as laborers without an LMIA or Labour Market Impact Assessment. This opportunity is advantageous to employers as the process of hiring is quick and straightforward."
        imageUrl="/images/n/mobilityprogram.png"
        primaryCta={commonProps?.primaryCta}
        secondaryCta={commonProps?.secondaryCta}
      />

      <FeatureGrid4
        title="International Mobility Program of Canada"
        description="By the International Mobility Program of Canada, various cultural and economic interests of the country are served. Some of the popular forms to which IMP caters are:"
        features={features2}
      />
      <FeatureList
        badgeText="Eligibility
                                    "
        heading={
          <>
            International Mobility Program
            {/* <br className="hidden md:block" /> */}
            <span className="text-primary"> (IMP)</span>
          </>
        }
        subheading="Besides Canada permanent residence, the ones who are eligible for the IMP program are:"
        items={items}
      />
      <StepsWithHeading3
        badgeText="International Mobility Program"
        heading={
          <>
            <span className="relative inline-block">
              How to apply for the
              <span className="relative"> IMP program?</span>
            </span>
          </>
        }
        subheading="The application process for the International Mobility Program is simple. The three steps to get your business immigration for joining the IMP program are:"
        steps={stepsBenefit}
      />

      <CtaWithFeaturesRightImage
        badgeText="About Us"
        title=" GreenTech Resource Worldwide Canada"
        subtitle=""
        features={features}
      />
    </div>
  );
};

export default InternationalMobilityPrograms;
