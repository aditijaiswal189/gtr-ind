import { Hero2 } from "@/components/ui/hero2";
import React from "react";
import {
  CheckCircle,
  MapPin,
  FileCheck,
  LifeBuoy,
  Star,
  Smile,
  Award,
  Heart,
  Notebook,
  Briefcase,
} from "lucide-react";
import {
  Cta4FeatureItemProps,
  Cta4FeaturesWithoutImage,
} from "@/components/ui/cta4-features-without-image";
import { StepsWithHeading3 } from "@/components/ui/steps-with-heading3";
import {
  FeatureItemPropsList,
  FeatureList,
} from "@/components/ui/features-list";

export interface FeatureItemProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  ctaHref?: string;
}

export const items2: Cta4FeatureItemProps[] = [
  {
    icon: CheckCircle,
    title: "Obtain legal right to practice",
    description:
      "We can help you understand the program requirements and eligibility criteria specific to the culture, arts, and athletics fields, guide you on how to access the resources and get the legal right to practise in Québec.",
    ctaHref: "/",
  },
  {
    icon: MapPin,
    title: "Guidance on Provincial Requirements",
    description:
      "Québec has specific immigration requirements, and we can provide guidance on how to fulfill these requirements, including the completion of a Québec Selection Certificate (CSQ) application. We assist in calculating the applicant's points under the Québec immigration system, helping to ensure that you meet the minimum required points for eligibility.",
    ctaHref: "/",
  },
  {
    icon: FileCheck,
    title: "Application Completion",
    description:
      "Our RCIC can help applicants navigate the application process, ensuring that all required documentation is correctly completed and submitted. This includes assistance in preparing and organizing the necessary forms and supporting materials.",
    ctaHref: "/",
  },
  {
    icon: LifeBuoy,
    title: "Follow-Up & Ongoing Support",
    description:
      "We provide ongoing support and guidance throughout the application process, ensuring that applicants are well-prepared and informed at every stage.",
    ctaHref: "/",
  },
];
const steps = [
  {
    title: "Preparing and completing the required forms and documents",
    description:
      "Prepare the required forms and documents and complete the process ",
  },
  {
    title: "Paying your application review fee",
    description:
      "The fees are adjusted on January 1 of each year.Principal applicant: $1,176. Wife or husband, spouse or common-law partner: $186 .Each dependent child: $186",
  },
  {
    title: "Send your complete application by mail, in one envelope ",
    description:
      "Direction du regroupement familial et de l’enregistrement Ministère de l’Immigration, de la Francisation et de l’Intégration 285, rue Notre-Dame Ouest, 4e étage Montréal (Québec) H2Y 1T8 CANADA",
  },
];
const items: FeatureItemPropsList[] = [
  {
    icon: Star,
    text: "Settle in Québec to work here.You must practise your profession or business activities in Québec, alone or with others, with or without paid help.",
  },
  {
    icon: Smile,
    text: "You must have a net worth of at least CDN$100,000. You can share this net worth with your spouse or common-law partner who is accompanying you to Québec. You must be able to demonstrate the legal origin and accumulation of your net worth.",
  },
  {
    icon: Award,
    text: "You will need to make a start-up deposit with a financial institution located in the area where you plan to practise your trade or profession:1.Outside the Communauté métropolitaine de Montréal (CMM), the start-up deposit is CDN$25,000.2. On the territory of the CMM, the start-up deposit is CDN$50,000.You will need to make the deposit after you receive the letter that confirms the opening of your file",
  },

  {
    icon: Heart,
    text: "You are awarded points for each factor as education, age language .. and criterion on the grid. You must obtain 63 out of 107 points on the grid to meet the cut-off for factors and criteria that have an elimination threshold.",
  },
  {
    icon: Notebook,
    text: "You must obtain your attestation within a maximum of 60 days after receiving this request",
  },
  {
    icon: Briefcase,
    text: "If you wish to practise a regulated profession or trade in Québec, you must obtain the legal right to practise, even if you have obtained a degree or license outside of Québec",
  },
];

const QuSelfEmployed: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <Hero2
        badgeText="GreenTech Resources"
        title="Québec Self-Employed Program"
        description="Settle in Québec and work for yourself - for those with experience in arts, cultural or athletic activities"
        imageUrl="/images/hero/i.avif"
        primaryCta={{
          label: "Quebec Enterpreneur Program",
          href: "/business/quebec/quebec-enterpreneur-program",
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
            Quebec Self Employed Program
            <span className="text-primary"> (QSEP)</span>
          </>
        }
        subheading="To immigrate to Québec as a self-employed worker, you must meet the following conditions."
        items={items}
      />
      <StepsWithHeading3
        badgeText="Quebec"
        heading={
          <>
            <span className="relative inline-block">
              <span className="relative">Steps for applying</span>
            </span>
          </>
        }
        subheading="Here are the steps for applying for permanent selection under Québec Self Employed Program"
        steps={steps}
      />

      <Cta4FeaturesWithoutImage
        badgeText="Québec Self Employed Program"
        heading="What can we help you?"
        subheading="GTR Worldwide can assist with Québec immigration by providing a range of valuable services to applicants looking to immigrate to Québec as self-employee workers in the fields of culture, arts, and athletics

"
        items={items2}
      />
    </div>
  );
};

export default QuSelfEmployed;
