import { features } from "@/app/(pages)/about-us/about/about/page";
import { CtaWithFeaturesRightImage } from "@/components/ui/cta-with-features-right-image";
import { Feature3 } from "@/components/ui/feature3";
import {
  Feature2WithImage,
  FeatureItemProps,
} from "@/components/ui/features-2-with-image";
import { Hero2 } from "@/components/ui/hero2";
import { commonProps } from "@/constant/commonProps";
import { Briefcase, Notebook } from "lucide-react";
import React from "react";
const features2 = [
  {
    icon: "Briefcase" as const,
    title: " Intra-Company Transfer Executive",
    description:
      "For employees in a senior managerial role, directing the company or a significant component",
  },
  {
    icon: "Notebook" as const,
    title: "Intra-Company Transfer Managerial",
    description:
      "For employees responsible for supervising employees or managing the organization or a department",
  },
  {
    icon: "Layers" as const,
    title: "Intra-Company Transfer Specialized Knowledge",
    description:
      "For employees with proprietary knowledge or expertise essential to the company's operations",
  },
];
const cards: FeatureItemProps[] = [
  {
    icon: <Briefcase />,
    title: "Intra-company transfers",
    description:
      "This program is designed to facilitate the temporary relocation of employees who possess specialized knowledge, skills, or expertise, and it's a valuable tool for global businesses to foster expertise exchange and streamline international operations.The Intra-company transfers stream offers an alternative route for foreign nationals to obtain a work permit without needing an LMIA.",
  },
  {
    icon: <Notebook />,
    title: "   Eligibility",
    description:
      "To qualify for the ICT program, the applicant should be an essential employee in a managerial, executive, or specialized knowledge position.. Applicants need to provide relevant documentation, including an offer of employment, describing the intra-company transfer, the foreign and Canadian positions, and the employee's qualifications.",
  },
];
const IntraCompanyTransfer: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <Hero2
        badgeText="GreenTech Resources"
        title="Intra-Company Transfer (ICT)"
        description="The Intra-Company Transfer (ICT) program in Canada allows multinational companies to transfer key personnel from their foreign operations to their Canadian branches, subsidiaries, or affiliates"
        imageUrl="/images/n/ict.jpeg"
        primaryCta={commonProps?.primaryCta}
        secondaryCta={commonProps?.secondaryCta}
      />

      <Feature3
        badgeText="Business"
        heading="Types of"
        highlighted="Intra-Company Transfer"
        description="To establish and run an innovative business in Québec, you are required to collaborate with a support organization, which could be a business accelerator, business incubator, or a university entrepreneurship center"
        items={features2}
      />
      <Feature2WithImage
        heading={
          <>
            Business Programs
            <span className="text-primary pl-2">(ICT)</span>
          </>
        }
        subheading="Intra Company Transfer"
        features={cards}
        imageSrc="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        imageAlt="Fox in the wild"
      />

      <CtaWithFeaturesRightImage
        badgeText="Intra Company Transfer"
        title=" GreenTech Resource Worldwide Canada"
        subtitle=""
        features={features}
      />
    </div>
  );
};
export default IntraCompanyTransfer;
