import { features } from "@/app/(pages)/about-us/about/about/page";
import { StepConfigList } from "@/app/(pages)/about-us/about/book-appointment/page";
import { CtaWithFeaturesRightImage } from "@/components/ui/cta-with-features-right-image";
import { FeatureGrid4, FeatureItemData } from "@/components/ui/feature-grid4";
import {
  FeatureItemPropsList,
  FeatureList,
} from "@/components/ui/features-list";
import { Hero2 } from "@/components/ui/hero2";
import { StepsWithHeadingImageList } from "@/components/ui/steps-with-heading-image-list";
import { commonProps } from "@/constant/commonProps";
import {
  Award,
  Briefcase,
  Compass,
  Contact,
  FileCheck,
  Globe,
  Heart,
  Lightbulb,
  Notebook,
  Plane,
  Smile,
  Star,
} from "lucide-react";
import React from "react";

const features2: FeatureItemData[] = [
  {
    title: "Closed Work Permit",
    description:
      "Closed Work Permit requires foreign nationals to work for a specific company in Canada",
    icon: <Plane />,
  },
  {
    title: "Open Work Permit",
    description:
      "Open Work Permit allows foreign nationals to work anywhere in Canada and for any employer or in any field.Open work permits are often issued to foreign nationals with family members living, studying, or working in Canada",
    icon: <Notebook />,
  },

  {
    title: "Intra-Company Work Permit",
    description:
      "Intra-Company Transfer is used for special cases, such as foreign employees of a parent company with a branch in Canada.",
    icon: <Briefcase />,
  },
  {
    title: "Post-Graduation Work Permit",
    description:
      "Post-Graduation Work Permit is designed for international students who have graduated from Canadian universities, colleges, or vocational schools.This permit allows them to work in Canada for a specified period after completing their studies",
    icon: <Heart />,
  },
];

const items: FeatureItemPropsList[] = [
  {
    icon: Star,
    text: "A valid passport.",
  },
  {
    icon: Briefcase,
    text: "The job offer letter from your Canadian employer, if required.",
  },
  {
    icon: Plane,
    text: "A Labor Market Impact Assessment (LMIA), if required.",
  },
  { icon: Contact, text: "Educational credentials and qualifications." },
  { icon: Notebook, text: "Proof of financial support." },
  { icon: Smile, text: "Passport-sized photos." },
  {
    icon: Award,
    text: "Other supporting documents specific to your application",
  },
];
const steps: StepConfigList[] = [
  {
    icon: Lightbulb,
    title: "Identify the type of work permit you need",
    description:
      "Identifying the type of work permit you need is a crucial step in the process of working legally in a foreign country, such as Canada. The choice of work permit largely depends on the nature and duration of your intended employment. Understanding the various categories and requirements for work permits is essential to ensure you meet the specific criteria and regulations that apply to your situation.",
  },
  {
    icon: Globe,
    title: "Research and consult",
    description:
      "It's important to research and consult with immigration authorities as GTR Worldwide to determine the right work permit for your needs. Ensuring that you have the correct work permit is not only a legal requirement but also crucial for your overall work experience, your rights, and your ability to take advantage of other opportunities, such as pathways to permanent residency in Canada",
  },
  {
    icon: Plane,
    title: "Job Offer",
    description:
      "Get a Job Offer/ Provincial Nomination . You'll typically need a job offer from a Canadian employer before applying for a work permit (LMIA/ JAL process may needed).",
  },
  {
    icon: Award,
    title: " Foreigners can apply",
    description:
      "Foreigners can apply for a work permit in Canada without a job offer under specific circumstances. One of the primary pathways to obtaining a work permit without a job offer is through Canada's Express Entry system and Provincial Nominee Programs (PNPs).",
  },
  {
    icon: FileCheck,
    title: "Gather the Documents",
    description:
      "Once you have completed the application form and gathered all necessary documents, submit your application through your online account. Ensure that you have included all relevant information and supporting materials. Properly submitting the documents accurately is key to a successful work permit application in Canada",
  },
  {
    icon: Compass,
    title: "Pay the required fees",
    description:
      "Pay the required fees and wait for your application to be processed. Processing times can vary depending on the type of work permit and your home country. You may be asked for an interview or additional documentation to support your application.",
  },
  {
    icon: Briefcase,
    title: "Receive Decision",
    description:
      "You will receive a decision regarding your work permit application. If approved, you will receive a Port of Entry (POE) Letter of Introduction or a Temporary Resident Visa (TRV) in your passport, depending on your country of residence.",
  },
];
const WorkPermit: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <Hero2
        badgeText="GreenTech Resources"
        title="Work Permits (WP)"
        description="Working in Canada typically requires foreign nationals to obtain a work permit.  There are several different types of work permits available in Canada"
        imageUrl="/images/n/m/fstp.jpeg"
        primaryCta={commonProps?.primaryCta}
        secondaryCta={commonProps?.secondaryCta}
      />

      <FeatureGrid4
        title="Types of Work Permits"
        description="Working in Canada typically requires foreign nationals to obtain a work permit. There are several different types of work permits available in Canada. Here are some common types"
        features={features2}
      />
      <FeatureList
        badgeText=" Work Permit"
        heading={
          <>
            Documents required for
            {/* <br className="hidden md:block" /> */}
            <span className="text-primary"> Application</span>
          </>
        }
        subheading="Collect all necessary documents to support your application. These documents may include:"
        items={items}
      />
      <StepsWithHeadingImageList
        badgeText="Steps to Apply"
        heading="How to apply for a Work Permit"
        subheading="Applying for a work permit in Canada can be a multi-step process, depending on your situation and the type of work permit you require. Here are the general steps to follow"
        steps={steps}
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

export default WorkPermit;
