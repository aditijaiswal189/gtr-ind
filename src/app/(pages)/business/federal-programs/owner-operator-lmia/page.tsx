import { features } from "@/app/(pages)/about-us/about/about/page";
import { CtaWithFeaturesRightImage } from "@/components/ui/cta-with-features-right-image";
import { FeatureGrid4, FeatureItemData } from "@/components/ui/feature-grid4";
import { Feature3 } from "@/components/ui/feature3";
import {
  Feature2WithImage,
  FeatureItemProps,
} from "@/components/ui/features-2-with-image";
import { Hero2 } from "@/components/ui/hero2";
import { StepsWithHeadingImageList } from "@/components/ui/steps-with-heading-image-list";
import { commonProps } from "@/constant/commonProps";
import {
  Award,
  Briefcase,
  ClipboardCheck,
  Compass,
  FileCheck,
  Heart,
  Lightbulb,
  Notebook,
  Terminal,
} from "lucide-react";
import React from "react";

const cards: FeatureItemProps[] = [
  {
    icon: <Briefcase />,
    title: "Labour Market Impact Assessment",
    description:
      "A Labour Market Impact Assessment (LMIA) is a document that an employer in Canada may need to get before hiring a foreign worker.",
  },
  {
    icon: <Notebook />,
    title: "Benefits",
    description:
      "A positive LMIA will show that there is a need for a foreign worker to fill the job. It will also show that no Canadian worker or permanent resident is available to do the job. A positive LMIA is sometimes called a confirmation letter.",
  },
];
const features2: FeatureItemData[] = [
  {
    title: "Job Offer",
    description: "A job offer letter,",
    icon: <Terminal />,
  },
  {
    title: "Contract",
    description: "A contract is required",
    icon: <Notebook />,
  },
  {
    title: "LMIA",
    description: "A copy of the LMIA,",
    icon: <Heart />,
  },
  {
    title: "Number",
    description: "The LMIA number.",
    icon: <Heart />,
  },
];
const features3 = [
  {
    icon: "Briefcase" as const,
    title: "Launch Business",
    description:
      " Foreign nationals that have an established business in their home country or in several countries and are looking to launch their business in Canada by obtaining an Owner Operator LMIA",
  },
  {
    icon: "Notebook" as const,
    title: "Financial Assets",
    description:
      "Foreign nationals who have the financial assets to launch a new business in Canada and be approved for an Owner Operator LMIA;",
  },
  {
    icon: "Layers" as const,
    title: "Owner Operator LMIA",
    description:
      " Foreign nationals who have the financial assets to purchase an existing business in Canada to become the Owner Operator and be approved for an Owner Operator LMIA.",
  },
];
export interface StepConfigList {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}
const steps: StepConfigList[] = [
  {
    icon: ClipboardCheck,
    title: "Temporary Foreign Worker",
    description:
      "Structure ownership relationships between the Company and Temporary Foreign Worker",
  },
  {
    icon: Lightbulb,
    title: "LMIA application",
    description:
      "Submit Owner Operator LMIA application to the Government of Canada",
  },
  {
    icon: Award,
    title: "Work Permit",
    description:
      " Apply for and receive Work Permit at Canada Land Border Crossing based on LMIA",
  },
  {
    icon: FileCheck,
    title: "Apply",
    description: " Apply for Express Entry Federal Skilled Worker",
  },
  {
    icon: Compass,
    title: "Invitation",
    description: " Invitation to apply for Permanent Residence",
  },
  {
    icon: Briefcase,
    title: "Application",
    description: "Application for Permanent Residence",
  },
];
const OwnerOperatorLMIA: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <Hero2
        badgeText="GreenTech Resources"
        title="Owner Operator LMIA"
        description="The Owner Operator Labour Market Impact Assessment (LMIA) pathway is a great option for foreign nationals who are looking to become permanent residents and settle in Canada as business owners and operators"
        imageUrl="/images/n/owneroperatorlmia.jpg"
        primaryCta={commonProps?.primaryCta}
        secondaryCta={commonProps?.secondaryCta}
      />
      <FeatureGrid4
        title="Federal Skilled Trades"
        description="Common SKilled Trades"
        features={features2}
      />

      <Feature2WithImage
        heading={
          <>
            Owner Operator
            <span className="text-primary pl-2">LMIA</span>
          </>
        }
        subheading="If the employer needs an LMIA, they must apply for one. Once an employer gets the LMIA, the worker can apply for a work permit. To apply for a work permit, a worker needs:"
        features={cards}
        imageSrc="/images/n/quebecselfemployed.png"
        imageAlt="Fox in the wild"
      />
      <Feature3
        badgeText="LMIA"
        heading="What is Owner Operator"
        highlighted="LMIA"
        description="The Owner Operator Labour Market Impact Assessment (LMIA) pathway is a great option for foreign nationals who are looking to become permanent residents and settle in Canada as business owners and operators. To facilitate admission into Canada under the Owner Operator LMIA stream, a foreign national must have a controlling share (50.1%+) in an existing Canadian business or launch their own business in Canada in which they have a controlling interest. The Owner Operator LMIA pathway is most suitable for three types of individuals looking to become permanent residents of Canada."
        items={features3}
      />
      <StepsWithHeadingImageList
        badgeText="SUV"
        heading="Start Up Visa"
        subheading="Canada Immigration Program that allows talented entrepreneurs and their family from abroad to come, establish and manage new businesses in Canada with Work / Visitor/ Study Permit while waiting for Permanent residency"
        steps={steps}
      />
      <CtaWithFeaturesRightImage
        badgeText="Owner Operator LMIA"
        title=" GreenTech Resource Worldwide Canada"
        subtitle="GreenTech Resource Worldwide Canada can help with all the resource and support during the process to help you choose the right place to settle in Canada and support you with launching or purchasing your business. "
        features={features}
      />
    </div>
  );
};

export default OwnerOperatorLMIA;
