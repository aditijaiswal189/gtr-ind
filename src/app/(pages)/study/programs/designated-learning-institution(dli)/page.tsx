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
import { commonProps } from "@/constant/commonProps";
import { Briefcase, FileText, Notebook, Star } from "lucide-react";
import React from "react";

const cards: FeatureItemProps[] = [
  {
    icon: <Briefcase />,
    title: "Apply for a study permit",
    description: ` To apply for a study permit, you need an acceptance letter from a designated learning institution. A designated learning institution is a school approved by a provincial or territorial government to host international students.
All primary and secondary schools in Canada are designated learning institutions.`,
  },

  {
    icon: <FileText />,
    title: "Why do I need DLI Number?",
    description: `Applicants must provide the Designated Learning Institution number (DLI #) for their school of choice. The DLI number is the number that begins with the letter “O” on the study permit application form.Sometimes, institutions may lose their designated status. Depending on when the status is lost, the international student may be affected.
DLI`,
  },
];
const items: FeatureItemPropsList[] = [
  {
    icon: Star,
    text: " Students at a primary or secondary institution. These schools are all automatically designated, and no DLI number is provided.",
  },
  {
    icon: Briefcase,
    text: "- A family member of a foreign national whose application for a work permit or a study permit is approved in writing before the foreign national enters Canada. In this case, the family member may obtain an open study permit.",
  },
  {
    icon: Notebook,
    text: "Some institutions in Quebec are designated by the provincial government, but do not have a unique DLI number",
  },
];
const DesignatedLearningInstitution: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <Hero2
        badgeText="GreenTech Resources"
        title="Designated Learning Institution (DLI)"
        description="
Apply for a study permit, you need an acceptance letter from a designated learning institution. A designated learning institution is a school approved by a provincial or territorial government to host international students."
        imageUrl="/images/n/designatedstudy.png"
        primaryCta={commonProps?.primaryCta}
        secondaryCta={commonProps?.secondaryCta}
      />
      <Feature2WithImage
        heading={
          <>
            Designated Learning Institution
            <span className="text-primary pl-2">(DLI)</span>
          </>
        }
        subheading="Book a consultation today to explore immigration options and secure your family's future in Canada."
        features={cards}
        imageSrc="/images/n/quebecselfemployed.png"
        imageAlt="Fox in the wild"
      />
      <FeatureList
        badgeText="Study"
        heading={
          <>
            Designated Learning Institution
            {/* <br className="hidden md:block" /> */}
            <span className="text-primary">(DLI) </span>
          </>
        }
        subheading="In certain cases, students may be exempt from providing a letter from a DLI, or from providing a DLI number in their application. These cases may include, but are not limited to"
        items={items}
      />

      <CtaWithFeaturesRightImage
        badgeText="Designated Learning Institution (DLI)"
        title=" GreenTech Resource Worldwide Canada"
        subtitle="Immigration policies can change over time, so it’s essential to stay updated with us for the latest information from the respective provincial or territorial immigration authorities. Consult GreenTech Resources Worldwide Canada experts to understand specific requirements and eligibility for these pathways based on your circumstances"
        features={features}
      />
    </div>
  );
};

export default DesignatedLearningInstitution;
