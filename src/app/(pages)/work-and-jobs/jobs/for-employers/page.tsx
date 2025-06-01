import { features } from "@/app/(pages)/about-us/about/about/page";
import { CtaWithFeaturesRightImage } from "@/components/ui/cta-with-features-right-image";
import {
  FeatureItemListProps,
  FeatureListWithImage,
} from "@/components/ui/feature-list-with-image";
import { Hero2 } from "@/components/ui/hero2";
import { commonProps } from "@/constant/commonProps";
import {
  CheckSquare,
  Contact,
  Globe2,
  Notebook,
  Star,
  Zap,
} from "lucide-react";
import React from "react";
export const featuresConfig: FeatureItemListProps[] = [
  {
    text: "Ensure of PNP/LMIA registration for employers",
    Icon: Star,
  },
  {
    text: "Planning, searching, and screening suitable candidates",
    Icon: CheckSquare,
  },
  { text: "Streamlining the interview process", Icon: Globe2 },
  { text: "Assessing your hiring requirements", Icon: Contact },

  {
    text: "Assisting with employment offers",
    Icon: Notebook,
  },
  {
    text: "Handling PNP/LMIA and work permit procedures for candidates",
    Icon: Zap,
  },
  {
    text: "Guiding candidates through settlement processes",
    Icon: Globe2,
  },
];
const ForEmployers: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <Hero2
        badgeText="GreenTech Resources"
        title="Are you looking for LMIA/PNP applicants?"
        description="Hiring foreign workers adds fresh skills and perspectives, enhancing business innovation and diversity"
        imageUrl="/images/n/suv.avif"
        primaryCta={commonProps?.primaryCta}
        secondaryCta={commonProps?.secondaryCta}
      />
      <FeatureListWithImage
        badgeText="Supports for Employers"
        heading={
          <>
            LMIA/PNP
            <br className="hidden md:block" />
            <span className="relative px-1">
              <div className="absolute inset-x-0 bottom-0 h-3 -skew-x-12 bg-primary/10" />
              <span className="relative text-primary">applicants</span>
            </span>
          </>
        }
        subheading="Hiring foreign workers adds fresh skills and perspectives, enhancing business innovation and diversity. GreenTech Resource Worldwide Canada provides FREE CONSULTANT and comprehensive support for employers"
        features={featuresConfig}
        imageSrc="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg"
        imageAlt="Lazy fox in nature"
      />

      <CtaWithFeaturesRightImage
        badgeText="Support for Employers"
        title=" GreenTech Resource Worldwide Canada"
        subtitle=""
        features={features}
      />
    </div>
  );
};

export default ForEmployers;
