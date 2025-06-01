import { features } from "@/app/(pages)/about-us/about/about/page";
import { CtaWithFeaturesRightImage } from "@/components/ui/cta-with-features-right-image";
import { FeatureGrid4, FeatureItemData } from "@/components/ui/feature-grid4";
import {
  Feature2WithImage,
  FeatureItemProps,
} from "@/components/ui/features-2-with-image";
import { Hero2 } from "@/components/ui/hero2";
import { commonProps } from "@/constant/commonProps";
import { Briefcase, FileText, Heart, Notebook, Plane } from "lucide-react";
import React from "react";

const cards: FeatureItemProps[] = [
  {
    icon: <Briefcase />,
    title: "Education",
    description: `Free access to elementary and highschool`,
  },
  {
    icon: <FileText />,
    title: "Legal protection",
    description: `Legal protection under Canadian laws`,
  },
];
const cardsNew: FeatureItemProps[] = [
  {
    icon: <Briefcase />,
    title: "MPNP",
    description: `The Manitoba Provincial Nominee Program (MPNP) is a strategic immigration program that allows Manitoba to nominate eligible individuals for permanent residency in Canada. This initiative is designed to meet the province's economic and labor market demands by attracting skilled workers, entrepreneurs, and families ready to contribute to Manitoba's thriving economy.
The MPNP offers several pathways, including Skilled Worker Overseas, Skilled Worker in Manitoba, Business Investor, and International Education streams.`,
  },

  {
    icon: <FileText />,
    title: "IRCC",
    description: `Each stream targets candidates with specific qualifications, skills, and experience aligned with Manitoba’s workforce needs. Once selected, candidates receive a Nomination Certificate, enabling them to apply for Canadian permanent residence through Immigration, Refugees, and Citizenship Canada (IRCC). This program not only addresses labor shortages but also strengthens Manitoba’s population growth and economic development.`,
  },
];
const features2: FeatureItemData[] = [
  {
    title: "Access to Healthcare",
    description:
      "As permanent residents, your family will enjoy access to Canada’s world-class healthcare system, similar to Canadian citizens.",
    icon: <Plane />,
  },
  {
    title: "Education and Job Opportunities",
    description:
      "Your children can access top-notch education at public schools, with the possibility of reduced tuition fees for higher education.Freedom to live and work in any province or territory, with access to a diverse job market.",
    icon: <Notebook />,
  },
  {
    title: "Social Benefits",
    description:
      "Your family will benefit from social services like employment insurance and pension plans, helping you to secure your future.",
    icon: <Briefcase />,
  },
  {
    title: "Path to Citizenship:",
    description:
      "Provincial nomination opens the door for your entire family to eventually apply for Canadian citizenship, enjoying full rights and privileges.",
    icon: <Heart />,
  },
];
const features3: FeatureItemData[] = [
  {
    title: "Freedom to Live, Work, and Study Anywhere in Canada",
    description:
      "As a permanent resident, you have the right to live, study, and work across any province or territory in Canada without restrictions. Whether you want to settle in bustling cities like Toronto and Vancouver or prefer the quiet charm of smaller towns, Canada offers you complete flexibility.",
    icon: <Plane />,
  },
  {
    title: "Access to Social Welfare Benefits and Employment",
    description:
      "Canada’s robust social welfare system ensures that permanent residents have access to essential services such as healthcare, education, and other social programs. This support system provides a strong safety net for residents and their families. They are free to work for any employer in Canada, in any profession. This opens up diverse job opportunities in a thriving economy, helping you build a successful career.",
    icon: <Notebook />,
  },
  {
    title: "Reduced University Tuition Fees",
    description:
      "As a permanent resident, you’ll benefit from significantly lower tuition fees compared to international students. In fact, permanent residents pay only about one-third of what international students are charged, and there are no restrictions on schools or programs you can choose.",
    icon: <Briefcase />,
  },
  {
    title: "Pathway to Canadian Citizenship",
    description:
      "After fulfilling the residency requirements, permanent residents become eligible to apply for Canadian citizenship. Once you gain citizenship, you’ll hold the 6th most powerful passport globally, granting visa-free or direct ETA access to 185 countries, allowing you to travel with ease across the world.",
    icon: <Heart />,
  },
];
const Manitoba: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <Hero2
        badgeText="GreenTech Resources"
        title="Manitoba Provincial Nominee Program (MPNP)"
        description="Manitoba, located in the heart of Canada, is known for its diverse landscapes, including prairies, forests, and lakes. Winnipeg, the provincial capital, is a cultural and economic hub, and Manitoba offers a rich blend of outdoor activities, cultural experiences, and a welcoming community."
        imageUrl="/images/hero/i.avif"
        primaryCta={commonProps?.primaryCta}
        secondaryCta={commonProps?.secondaryCta}
      />
      <Feature2WithImage
        heading={
          <>
            Manitoba Provincial Nominee Program
            <span className="text-primary pl-2">(MPNP)</span>
          </>
        }
        subheading="Manitoba, located in the heart of Canada, is known for its diverse landscapes, including prairies, forests, and lakes."
        features={cardsNew}
        imageSrc="/images/hero/v.avif"
        imageAlt="Fox in the wild"
      />
      <FeatureGrid4
        title=" Benefits for your family "
        description="With Manitoba Provincial Nominee Program (MPNP), your entire family, including your spouse and children under 22 years of age (at the time of submitting the provincial nomination application), can submit for Canada Permanent Resident to enjoy most of the benefits like Canada."
        features={features2}
      />
      <Feature2WithImage
        heading={
          <>
            Manitoba Provincial Nominee Program
            <span className="text-primary pl-2">(MPNP)</span>
          </>
        }
        subheading="  During the wait for permanent residency, your family can apply to come, work and study in Canada"
        features={cards}
        imageSrc="/images/hero/e.avif"
        imageAlt="Fox in the wild"
      />
      <FeatureGrid4
        title=" (MPNP)"
        description="When you become Canada Permanent Resident"
        features={features3}
      />
      <CtaWithFeaturesRightImage
        badgeText="  Manitoba Provincial Nominee Program (MPNP)"
        title=" GreenTech Resource Worldwide Canada"
        subtitle=""
        features={features}
      />
    </div>
  );
};

export default Manitoba;
