import {
  Cta4FeatureItemProps,
  Cta4FeaturesWithoutImage,
} from "@/components/ui/cta4-features-without-image";
import {
  FeatureItemListProps,
  FeatureListWithImage,
} from "@/components/ui/feature-list-with-image";
import {
  FeatureItemPropsList,
  FeatureList,
} from "@/components/ui/features-list";
import { Hero2 } from "@/components/ui/hero2";
import { StepsWithHeadingImageList } from "@/components/ui/steps-with-heading-image-list";
import { StepsWithHeading3 } from "@/components/ui/steps-with-heading3";
import {
  Award,
  CheckSquare,
  ClipboardCheck,
  Compass,
  FileCheck,
  Globe2,
  Lightbulb,
  MapPin,
  Notebook,
  Smile,
  Star,
  Users,
  Zap,
} from "lucide-react";
import React from "react";
export const items2: Cta4FeatureItemProps[] = [
  {
    icon: Users,
    title: "Connect to Supporting Organizations",
    description:
      "We can help you identify and connect with the appropriate supporting organizations in Québec, such as business accelerators, business incubators, or university entrepreneurship centers. We facilitate introductions and guide you on how to access their resources and support.",
    ctaHref: "/",
  },
  {
    icon: ClipboardCheck,
    title: "Business Plan Coaching",
    description:
      "Our Business Immigration Team experts assist in developing a strong, comprehensive business plan—crucial for the Québec immigration process. We also provide interview coaching to help you perform at your best during your immigration interview.",
    ctaHref: "/",
  },
  {
    icon: MapPin,
    title: "Guidance on Provincial Requirements",
    description:
      "Québec has specific immigration requirements. We guide you through completing your Québec Selection Certificate (CSQ) application, calculate your points under the Québec immigration system, and ensure you meet the minimum eligibility thresholds.",
    ctaHref: "/",
  },
  {
    icon: FileCheck,
    title: "Application Completion",
    description:
      "Our RCIC navigators help you assemble and submit all required documentation correctly. From forms to supporting materials, we provide ongoing support so you’re fully prepared and informed at every stage of the application process.",
    ctaHref: "/",
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
    title: "Assessment & Intake",
    description:
      "Conduct an initial assessment based on the intake criteria with Business Immigration experts of GreenTech Resources Worldwide Canada",
  },
  {
    icon: Lightbulb,
    title: "Business Concept & Incubator Selection",
    description:
      "Develop and refine the innovative business concepts. Select a suitable incubator and prepare your pitch deck",
  },
  {
    icon: Award,
    title: "Designated Institution Pitch",
    description:
      "Present and obtain a commitment – Letter of Support from a designated Canadian organization",
  },
  {
    icon: FileCheck,
    title: "Apply TR and PR",
    description:
      "Meet eligibility requirements to submit your Temporary Residency (TR) and Permanent Residency (PR) applications under the SUV program",
  },
  {
    icon: Compass,
    title: "Start Your Journey in Canada",
    description:
      "Personalize the settings as you wish with intuitive instructions and helpful guides",
  },
];

export const featuresConfig: FeatureItemListProps[] = [
  {
    text: "Freedom to live, study, and work across the entire Canadian territory",
    Icon: Star,
  },
  {
    text: "With PR, university tuition fees are only 1/3rd of what international students pay",
    Icon: CheckSquare,
  },
  { text: "No restrictions on schools and programs", Icon: Globe2 },

  {
    text: "Eligibility to apply for Canadian citizenship after the waiting period.",
    Icon: CheckSquare,
  },
  { text: "Access to social welfare", Icon: Zap },
  {
    text: " Qualify to apply for Canadian citizenship( 6th strongest passport globally), enjoy direct ETA access to 185 countries",
    Icon: Globe2,
  },
];
const items: FeatureItemPropsList[] = [
  {
    icon: Star,
    text: " When granted permanent residence: Actively manage business in Canada, essential operations and incorporated in Canada.",
  },
  {
    icon: Smile,
    text: "Qualifying-BusinessWhen committing: Each applicant owns 10%+ voting rights.",
  },
  {
    icon: Award,
    text: "Letter of Support - Obtain a support letter from designated organization: Start-up Incubators, Angel Investor Group or Venture Capital Funds",
  },

  {
    icon: Notebook,
    text: "Language Proficiency- Meet the minimum CLB 5 in either English or French in all 4 skills (listening,reading,writing and speaking)",
  },
];
const stepsBenefit = [
  {
    title: "Direct Path to Permanent Residence (PR CANADA)",
    description:
      "Up to 5 families can live, study and work while PR in process with 1 single business",
  },
  {
    title: " Hassle-free Path",
    description:
      "No minimum investment required,No exploratory trip required, No requirement to invest your own money in the business, No net worth verification",
  },
  {
    title: "    A Secure Choice",
    description:
      "Retain permanent residency status even in the event of business failure",
  },
];

const StartUpVisa: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <Hero2
        badgeText="GreenTech Resources"
        title="Start Up Visa (SUV)"
        description="Start Up Visa Program - Canada Immigration Program that allows talented entrepreneurs and their family from abroad to come, establish and manage new businesses in Canada with Work / Visitor/ Study Permit while waiting for Permanent residency
"
        imageUrl="/images/hero/n.avif"
        primaryCta={{
          label: "Intra Company Transfer",
          href: "/business/federal-programs/intra-company-transfer(ict)",
        }}
        secondaryCta={{
          label: "Learn More",
          href: "/about-us/about/book-appointment",
        }}
      />
      <FeatureList
        badgeText="Eligibility
                              "
        heading={
          <>
            Start Up Visa
            {/* <br className="hidden md:block" /> */}
            <span className="text-primary"> (SUV)</span>
          </>
        }
        subheading="Meeting the program's eligibility criteria and demonstrating the potential for business success in Canada are key factors in the selection process"
        items={items}
      />
      <StepsWithHeading3
        badgeText="SUV Program"
        heading={
          <>
            <span className="relative inline-block">
              <span className="relative">Benefits of Start-Up Visa Canada</span>
            </span>
          </>
        }
        subheading="The Start-Up Visa (SUV) program in Canada offers several benefits to entrepreneurs and innovative start-ups looking to establish themselves in Canada with key benefits
"
        steps={stepsBenefit}
      />
      <FeatureListWithImage
        badgeText="Canada Permanent Resident"
        heading={
          <>
            Benefits for your family
            <br className="hidden md:block" />
            <span className="relative px-1">
              <div className="absolute inset-x-0 bottom-0 h-3 -skew-x-12 bg-primary/10" />
              <span className="relative text-primary">Start Up Visa</span>
            </span>
          </>
        }
        subheading="Your entire family, including your spouse and children under 22 years of age (at the time of submitting the provincial nomination application), will receive a Permanent Resident Card in Canada and enjoy most of the benefits like Canadian citizens."
        features={featuresConfig}
        imageSrc="/images/hero/d.avif"
        imageAlt="Lazy fox in nature"
      />

      <StepsWithHeadingImageList
        badgeText="SUV"
        heading="Start Up Visa"
        subheading="Canada Immigration Program that allows talented entrepreneurs and their family from abroad to come, establish and manage new businesses in Canada with Work / Visitor/ Study Permit while waiting for Permanent residency"
        steps={steps}
      />

      <Cta4FeaturesWithoutImage
        badgeText="Start Up Visa Program"
        heading="What can we help you?"
        subheading="It’s important to choose a reputable and licensed immigration agent or consultant who is knowledgeable about the Start-Up Visa business immigration programs to ensure that applicants receive accurate and up-to-date information and guidance throughout the process. 

We can assist you by providing a range of valuable services
              "
        items={items2}
      />
    </div>
  );
};

export default StartUpVisa;
