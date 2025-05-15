import { features } from "@/app/(pages)/about-us/about/about/page";
import { CtaWithFeaturesRightImage } from "@/components/ui/cta-with-features-right-image";
import {
  FeatureItemPropsList,
  FeatureList,
} from "@/components/ui/features-list";
import { Hero2 } from "@/components/ui/hero2";
import { Award, Briefcase, Notebook, Smile, Star } from "lucide-react";
import React from "react";

const items: FeatureItemPropsList[] = [
  {
    icon: Briefcase,
    text: "Have been accepted by an eligible post-secondary Designated Learning Institut(DLI)",
  },
  { icon: Notebook, text: "Have paid their tuition for the first year" },
  {
    icon: Smile,
    text: "Have obtained a Guaranteed Investment Certificate (GIC) of $20,635 from one of the financial institutions approved by Immigration, Refugees, and Citizenship Canada to provide this service have completed an upfront medical examination",
  },
  {
    icon: Award,
    text: "Have the minimum-required IELTS level of English language ability of 6.0 in all categories (listening, reading, writing and speaking)",
  },
];
const StudentDirectStream: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <Hero2
        badgeText="GreenTech Resources"
        title="Student Direct Stream (SDS)"
        description="
Student Direct Stream (SDS) is a student permit facilitation program which will offer faster and simpler visa processing to international students best placed to complete their academic studie"
        imageUrl="/images/hero/k.avif"
        primaryCta={{
          label: "Study in Canada",
          href: "/study/programs/study-in-canada",
        }}
        secondaryCta={{
          label: "Learn More",
          href: "/about-us/about/book-appointment",
        }}
      />
      <FeatureList
        badgeText="Study"
        heading={
          <>
            Student direct stream
            {/* <br className="hidden md:block" /> */}
            <span className="text-primary">(SDS)</span>
          </>
        }
        subheading=" In order to be eligible for SDS and benefit from expedited processing, according to High Commission of Canada, students will need to:"
        items={items}
      />
      <CtaWithFeaturesRightImage
        badgeText="Student Direct Stream (SDS)"
        title=" GreenTech Resource Worldwide Canada"
        subtitle="Immigration policies can change over time, so it’s essential to stay updated with us for the latest information from the respective provincial or territorial immigration authorities. Consult GreenTech Resources Worldwide Canada experts to understand specific requirements and eligibility for these pathways based on your circumstances"
        features={features}
      />
    </div>
  );
};

export default StudentDirectStream;
