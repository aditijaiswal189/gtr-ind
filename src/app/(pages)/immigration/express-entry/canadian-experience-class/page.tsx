import { services } from "@/app/(pages)/about-us/about/our-services/page";
import { Feature4 } from "@/components/ui/feature4";
import {
  Feature2WithImage,
  FeatureItemProps,
} from "@/components/ui/features-2-with-image";
import { FeaturesWithLastFilled } from "@/components/ui/features-with-last-filled";
import { Hero2 } from "@/components/ui/hero2";
import { commonProps } from "@/constant/commonProps";
import { Briefcase, Notebook } from "lucide-react";
import React from "react";

const cards: FeatureItemProps[] = [
  {
    icon: <Briefcase />,
    title: "Work Experience",
    description:
      "The Canadian Experience Class (CEC) is an economic immigration program that requires work experience in Canada. Applicants must have a minimum of 12 months of full-time work experience in a skilled occupation in Canada within the last 3 years.",
  },
  {
    icon: <Notebook />,
    title: "Popular Choice",
    description:
      "The CEC Express Entry program is a popular choice for foreign workers who have accumulated work experience in Canada and international students who have found employment in Canada after graduation, all of whom aspire to fulfill their Canadian immigration dreams. This program is not suitable for foreign nationals without any prior work experience in Canada",
  },
];
const CanadianExperienceClass: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <Hero2
        badgeText="GreenTech Resources"
        title="Canadian Experience Class (CEC)"
        description="The Canadian Experience Class (CEC) is an economic immigration program that requires work experience in Canada. Applicants must have a minimum of 12 months of full-time work experience in a skilled occupation in Canada within the last 3 years."
        imageUrl="/images/n/canadianexperience.webp"
        primaryCta={commonProps?.primaryCta}
        secondaryCta={commonProps?.secondaryCta}
      />

      <Feature4
        badge=" Eligible Criteria"
        heading="Canadian Experience Class (CEC)"
        highlight="(Express Entry)"
        description="To be eligible, you must meet all the minimum requirements for your skilled trades work experience,
job offer or certificate of qualification and language ability "
        features={[
          {
            icon: "Briefcase",
            title: " WORK EXPERIENCE",
            description:
              "Work experience in Canada in occupations classified under NOC skill levels 0, A, or B with a minimum of 1 year of experience in the last 3 years",
            //   link: "/global"
          },
          {
            icon: "Notebook",
            title: "Language",
            description:
              "Meet the minimum language proficiency requirements in either English or French-For NOC skill level 0 or A occupations: Minimum CLB/NCLC 7.For NOC skill level B occupations: Minimum CLB/NCLC 5",
          },
          {
            icon: "Users",
            title: "  CRS",
            description:
              "Pass the initial screening with a score of 67 points .Before applying, candidates should carefully review the program requirements and ensure they meet the necessary qualifications. Additionally, individuals in skilled trades may also consider seeking employment through the Provincial Nominee Program (PNP) if a particular province has a demand for their skills.",
          },
          {
            icon: "Notebook",
            title: "Education",
            description:
              "Have a credential issued in Canada or possess a recognized equivalent to a Canadian credential",
          },
        ]}
      />
      <Feature2WithImage
        heading={
          <>
            Express
            <span className="text-primary pl-2">Entry</span>
          </>
        }
        subheading="Canadian Experience Class (CEC)"
        features={cards}
        imageSrc="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        imageAlt="Fox in the wild"
      />

      <FeaturesWithLastFilled
        services={services}
        sectionTitle="Factors that increase your chance to receive Invitation to Apply (ITA) in the Express Entry Program"
        sectionSubtitle="Through Express Entry, candidates and their family can participate and compete for points to receive an ITA – Invitation to Apply from the Canadian government to immigrate and work in the country."
      />
    </div>
  );
};

export default CanadianExperienceClass;
