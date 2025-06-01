import { features } from "@/app/(pages)/about-us/about/about/page";
import { CtaWithFeaturesRightImage } from "@/components/ui/cta-with-features-right-image";
import { FeatureGrid4, FeatureItemData } from "@/components/ui/feature-grid4";
import { Feature3 } from "@/components/ui/feature3";
import {
  FeatureItemPropsList,
  FeatureList,
} from "@/components/ui/features-list";
import { Hero2 } from "@/components/ui/hero2";
import { commonProps } from "@/constant/commonProps";
import { Briefcase, Heart, Notebook, Plane, Smile, Star } from "lucide-react";
import React from "react";

const items: FeatureItemPropsList[] = [
  {
    icon: Star,
    text: " Enroll in a study program at a designated learning institution in Canada.",
  },

  {
    icon: Briefcase,
    text: "Ensure compliance with immigration and study regulations during your study period.Working under Post-Graduation Work Permit (PGWP)",
  },
  {
    icon: Notebook,
    text: "After completing your study program in Canada, apply for a Post-Graduation Work Permit (PGWP). PGWP allows you to work in Canada for a specific duration after graduation (8 months to 3 years, depending on your program).",
  },
  {
    icon: Smile,
    text: " Accumulating work experience in Canada can enhance your chances of obtaining permanent residency.",
  },
];
const features2: FeatureItemData[] = [
  {
    title: "Federal Skilled Worker (FSW)",
    description:
      "Participate in the Canadian Express Entry system, where you compete with other candidates to receive an Invitation to Apply for permanent residency. Express Entry uses a ranking system based on various factors, including age, education, work experience, and language proficiency in English or French",
    icon: <Plane />,
  },
  {
    title: "Canadian Experience Class (CEC)",
    description:
      "If you have sufficient work experience in Canada and meet the criteria of the Canadian Experience Class program, you can apply for permanent residency through this pathway.CEC is often a favorable choice for individuals with Canadian work experience",
    icon: <Notebook />,
  },

  {
    title: "Provincial Nominee Program (PNP)",
    description:
      "If you intend to settle in a specific province or territory of Canada, consider the Provincial Nominee Program (PNP). Each province has its own unique requirements and criteria. If you are nominated through a PNP stream, you will have the opportunity to apply for provincial nomination and qualify for permanent residency",
    icon: <Briefcase />,
  },
  {
    title: "Other pathways to Canada PR",
    description:
      "Explore other immigration options, such as Family Sponsorship, the Start-Up Visa (SUV) program, and more. Consulting with GTR Worldwide to navigate the complex process of Canadian immigration and choose the best option for your personal circumstances and objectives.",
    icon: <Heart />,
  },
];
const features3 = [
  {
    icon: "Briefcase" as const,
    title: "",
    description: "",
  },
  {
    icon: "Notebook" as const,
    title: "",
    description: "",
  },
  {
    icon: "Layers" as const,
    title: "",
    description: "",
  },
  {
    icon: "BriefcaseBusiness" as const,
    title: "",
    description: "",
  },
  {
    icon: "Network" as const,
    title: "",
    description: "",
  },
  {
    icon: "Map" as const,
    title: "",
    description: "",
  },
];
const StudyToPR: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <Hero2
        badgeText="GreenTech Resources"
        title="Pathway from Study to PR"
        description="
Canada provides several pathways for international students to transition from study to permanent residency (PR)"
        imageUrl="/images/n/stydyhome.png"
        primaryCta={commonProps?.primaryCta}
        secondaryCta={commonProps?.secondaryCta}
      />
      <FeatureList
        badgeText="Completion of a Study Program in Canada "
        heading={
          <>
            Common Pathway for International Students to Become
            <span className="text-primary"> Permanent Residents in Canada</span>
          </>
        }
        subheading="You should also demonstrate the benefit of their activities to Canada's culture, society, and economy and show groundwork in Canada, like establishing business contacts, accommodation, and business location for self-employed individuals."
        items={items}
      />
      <FeatureGrid4
        title="GET Permanent Residency through Popular Routes"
        description="Find out more and book a consultation call with us."
        features={features2}
      />
      <Feature3
        badgeText="Study to PR"
        heading="Where is it easy to apply for permanent residency for
"
        highlighted="post-graduate students?"
        description="
The competition in Canada’s Express Entry system is currently very high, and the required scores for receiving an Invitation to Apply (ITA) for permanent residency through the Canadian Experience Class (CEC) or Federal Skilled Worker (FSW) programs are quite competitive. Some provinces and territories in Canada offer Post-Graduation Immigration Programs specifically for international students. These programs typically require that international students have completed a study program in the respective province or territory and meet specific requirements. "
        items={features3}
      />
      <CtaWithFeaturesRightImage
        badgeText="Pathway from Study to PR"
        title=" GreenTech Resource Worldwide Canada"
        subtitle="If you’re interested, consider reaching out to GTR Worldwide to learn more about the specific criteria for nomination"
        features={features}
      />
    </div>
  );
};

export default StudyToPR;
