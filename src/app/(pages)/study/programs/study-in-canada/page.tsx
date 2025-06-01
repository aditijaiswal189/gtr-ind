import { features } from "@/app/(pages)/about-us/about/about/page";
import { CtaWithFeaturesRightImage } from "@/components/ui/cta-with-features-right-image";
import { Feature1Animated } from "@/components/ui/feature1-animated";
import { Feature3 } from "@/components/ui/feature3";
import {
  FeatureItemPropsList,
  FeatureList,
} from "@/components/ui/features-list";
import { Hero2 } from "@/components/ui/hero2";
import { commonProps } from "@/constant/commonProps";
import {
  Briefcase,
  Globe,
  Notebook,
  NotebookPenIcon,
  Smile,
  Star,
  UserCheck,
} from "lucide-react";

import React, { ReactNode } from "react";

const features3 = [
  {
    icon: "Briefcase" as const,
    title: "Immigration Opportunities for Post-Graduated",
    description:
      "Canada offers various immigration pathways for international students to transition to permanent residency, making it an attractive destination for those seeking long-term opportunities.",
  },
  {
    icon: "Notebook" as const,
    title: "Diverse Campuses and Programs",
    description:
      "Canadian campuses are incredibly diverse, with students and faculty from all over the world. This multicultural environment enriches the academic and social experience. Canadian institutions offer a wide range of programs at various levels, from undergraduate to doctoral degrees, in fields like STEM, business, arts, and humanities",
  },
  {
    icon: "Layers" as const,
    title: "International High Quality Education",
    description:
      "Canada is known for its top-notch educational institutions. Many universities and colleges consistently rank among the best globally. Canadian degrees and diplomas are recognized and respected worldwide.",
  },
];
const features4 = [
  {
    icon: "Briefcase" as const,
    title: "On-Campus Work:",
    description:
      " As an international student, you are generally allowed to work on-campus without a work permit.",
  },

  {
    icon: "Notebook" as const,
    title: "Off-Campus Work:",
    description:
      "You may also be eligible for off-campus work permits, which allow you to work off-campus while studying. To qualify, you must have a valid study permit and be enrolled full-time at a designated learning institution.",
  },
  {
    icon: "Layers" as const,
    title: "Co-op and Internship Programs: ",
    description:
      "Many Canadian institutions offer co-op and internship programs, which provide opportunities for hands-on work experience related to your field of study. These programs are an excellent way to gain practical skills and make valuable industry connections.",
  },
];
const items: FeatureItemPropsList[] = [
  {
    icon: Star,
    text: "Financial Planning- Determine your sources of funding for your studies. Calculate tuition fees, living expenses, health insurance, and other costs. Explore scholarships and part-time work opportunities to support your finances",
  },
  {
    icon: Briefcase,
    text: "Gather information and apply to schools-Research information about schools and programs in Canada. Apply to the institutions you're interested in and participate in the admissions process",
  },
  {
    icon: Notebook,
    text: "Learn about life and culture in Canada- Prepare yourself for life in Canada by learning about its culture, social norms, and local customs to help you integrate more easily when you arrive in the country",
  },
  {
    icon: Smile,
    text: "Accommodation and travel planning-Plan your accommodation and travel arrangements. Consider options like dormitories, homestays, or renting an apartment. Book your flights, understand the immigration procedures, and establish a travel schedule to Canada",
  },
  {
    icon: NotebookPenIcon,
    text: "Apply for a study permit-After receiving acceptance from a Canadian school, you'll need to apply for a Study Permit, which allows you to study in Canada",
  },
];

interface FeatureItem {
  title: string;
  description: string;
  link: string;
  icon: ReactNode;
}
const featureItems: FeatureItem[] = [
  {
    title: "Eligibility",
    description:
      "After completing a program of study at a designated learning institution in Canada, you may be eligible for a Post-Graduation Work Permit (PGWP).The length of the PGWP depends on the duration of your program and can be valid for up to three years.",
    link: "/",
    icon: <UserCheck className="w-16 h-16 text-primary lg:w-20 lg:h-20" />,
  },
  {
    title: "Pathway from Study to PR",
    description:
      "Canada provides several pathways for international students to transition from study to permanent residency (PR) as Express Entry (CEC), PNPs, International Post Graduated Entrepreneurs.Consult GreenTech Resources Worldwide Canada experts to understand specific requirements and eligibility for these pathways based on your circumstances.",
    link: "/",
    icon: <Globe className="w-16 h-16 text-primary lg:w-20 lg:h-20" />,
  },
];
const StudyInCanada: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <Hero2
        badgeText="GreenTech Resources"
        title="Studying in Canada"
        description="Studying in Canada offers a world-class education, diverse cultural experiences, and excellent opportunities for personal and professional growth"
        imageUrl="/images/n/studyincanada.png"
        primaryCta={commonProps?.primaryCta}
        secondaryCta={commonProps?.secondaryCta}
      />
      <Feature3
        badgeText="Study"
        heading="Study in "
        highlighted="Canada"
        description="Studying in Canada offers a world-class education, diverse cultural experiences, and excellent opportunities for personal and professional growth"
        items={features3}
      />
      <Feature3
        badgeText="Work"
        heading="Study in"
        highlighted="Canada"
        description=" Working While Studying &
Post-Graduation Work Permit (PGWP)"
        items={features4}
      />
      <FeatureList
        badgeText="Study in Canada "
        heading={
          <>
            Plan your studies in
            {/* <br className="hidden md:block" /> */}
            <span className="text-primary"> Canada</span>
          </>
        }
        subheading="
To plan your studies in Canada, you need to prepare a series of important steps
Set goals and choose a program
Define your objectives for studying in Canada. What degree do you want, and what do you aim to achieve after graduation? Select a program and a suitable school that align with your goals. Canada offers a variety of quality institutions and programs."
        items={items}
      />
      <Feature1Animated featureItems={featureItems} />
      <CtaWithFeaturesRightImage
        badgeText="Study in Canada"
        title=" GreenTech Resource Worldwide Canada"
        subtitle="Canada has one of the best education systems in the world "
        features={features}
      />
    </div>
  );
};

export default StudyInCanada;
