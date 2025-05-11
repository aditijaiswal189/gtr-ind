import { features } from "@/app/(pages)/about-us/about/about/page";
import { CtaWithFeaturesRightImage } from "@/components/ui/cta-with-features-right-image";
import {
  Feature2WithImage,
  FeatureItemProps,
} from "@/components/ui/features-2-with-image";
import {
  FeatureItemPropsList,
  FeatureList,
} from "@/components/ui/features-list";
import { Hero2 } from "@/components/ui/hero2";
import { Award, Briefcase, Notebook, Smile, Star } from "lucide-react";
import React from "react";
const cards: FeatureItemProps[] = [
  {
    icon: <Briefcase />,
    title: "C 10 Work Permit",
    description:
      "C10 is a job-specific work permit. This indicates that individuals who receive this permit can work exclusively for the specified employer. To obtain the C10 work permit, applicants must secure a job offer from a Canadian employer. Alternatively, foreign professionals may qualify for this work permit if they are entrepreneurs or meet the IRCC criteria for self-employed individuals (in fields of culture, arts, and athletics).",
  },
  {
    icon: <Notebook />,
    title: "Use cases",
    description:
      "This provision is typically used for temporary situations rather than permanent immigration. Foreign professionals can use the C10 work permit to come to Canada and gain valuable work experience. They can then use this experience to apply for permanent residence through Express Entry’s Canadian Experience Class program",
  },
];

const items: FeatureItemPropsList[] = [
  {
    icon: Star,
    text: "A job offer from a Canadian employer is mandatory, except for entrepreneurs and self-employed individuals",
  },
  { icon: Briefcase, text: "Have adequate language skills" },
  { icon: Notebook, text: "Academic qualifications" },
  { icon: Smile, text: "Relevant work experience" },
  {
    icon: Award,
    text: "Proof of significant contributions, awards, patents, academic publications, and a comprehensive business plan is crucial",
  },
];
const SignificantBenefitToCanada: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <Hero2
        badgeText="GreenTech Resources"
        title="Significant Benefit to Canada (C10)"
        description="The Significant Benefit to Canada (C10) program grants temporary resident permits to foreign nationals who can demonstrate that their entry or continued stay in Canada would result in a significant benefit to Canada"
        imageUrl="/images/hero/m.avif"
        primaryCta={{ label: "Start Up Visa", href: "/" }}
        secondaryCta={{ label: "Learn More", href: "/" }}
      />
      <FeatureList
        badgeText="Eligibility
                                    "
        heading={
          <>
            Significant Benefit to Canada
            {/* <br className="hidden md:block" /> */}
            <span className="text-primary"> (C10)</span>
          </>
        }
        subheading="You should also demonstrate the benefit of their activities to Canada's culture, society, and economy and show groundwork in Canada, like establishing business contacts, accommodation, and business location for self-employed individuals."
        items={items}
      />
      <Feature2WithImage
        heading={
          <>
            Business Programs
            <span className="text-primary pl-2">C 10</span>
          </>
        }
        subheading="Significant Benefit To Canada (C 10)"
        features={cards}
        imageSrc="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        imageAlt="Fox in the wild"
      />

      <CtaWithFeaturesRightImage
        badgeText="C10"
        title=" GreenTech Resource Worldwide Canada"
        subtitle=""
        features={features}
      />
    </div>
  );
};

export default SignificantBenefitToCanada;
