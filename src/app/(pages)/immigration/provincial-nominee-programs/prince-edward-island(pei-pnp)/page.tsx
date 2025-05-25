import { features } from "@/app/(pages)/about-us/about/about/page"
import { CtaWithFeaturesRightImage } from "@/components/ui/cta-with-features-right-image"
import { FeatureGrid4, FeatureItemData } from "@/components/ui/feature-grid4"
import { Feature3 } from "@/components/ui/feature3"
import {
  Feature2WithImage,
  FeatureItemProps,
} from "@/components/ui/features-2-with-image"
import { Hero2 } from "@/components/ui/hero2"
import { commonProps } from "@/constant/commonProps"
import { Briefcase, FileText, Heart, Notebook, Plane } from "lucide-react"
import React from "react"

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
]
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
]
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
]
export const featuresNew = [
  {
    icon: "Send" as const,
    title: "Prince Edward Island Express Entry",
    description:
      "If you are part of the Express Entry system and interested in living and working in PEI, this stream allows you to be nominated by the province. You’ll need to meet the eligibility criteria, such as having skilled work experience and demonstrating a genuine interest in settling on the island.",
  },

  {
    icon: "Globe" as const,
    title: "Labour Impact Category",
    description:
      "This category is designed for individuals who already have a valid job offer from a PEI employer. It focuses on skilled workers, critical workers, and international graduates with the skills and experience needed in the island’s growing industries. By fulfilling the labor market needs of PEI, you can fast-track your path to permanent residency.",
  },
  {
    icon: "Repeat" as const,
    title: "Business Impact Category",
    description:
      "Entrepreneurs looking to start or invest in a business in Prince Edward Island can apply through the Business Impact Category. This stream encourages individuals to actively manage and operate a business in the province, contributing to its economic growth. The business category is ideal for those ready to invest and bring innovative ideas to PEI.",
  },
]
export const featuresNew2 = [
  {
    icon: "Briefcase" as const,
    title: " PEI PNP Express Entry",
    description:
      "The PEI PNP Express Entry stream is for candidates already in the Express Entry pool who wish to live and work in Prince Edward Island. If you meet the eligibility criteria for skilled work and show a genuine intent to settle in PEI, this stream can fast-track your application for permanent residency. A provincial nomination from PEI gives you additional points under the Express Entry system, boosting your chances of receiving an invitation to apply for Canadian permanent residency.",
  },
  {
    icon: "Network" as const,
    title: " Labour Impact Category",
    description:
      "The Labour Impact Category is ideal for skilled workers and graduates who have a valid job offer from a PEI employer. This category is divided into three streams: Skilled Worker Stream, for individuals with the skills and experience needed in PEI’s labor market.Critical Worker Stream, for workers in occupations facing shortages.International Graduate Stream, for recent graduates of PEI post-secondary institutions with job offers in the province.This category allows candidates to work and live in PEI while contributing to its growing economy.",
  },
  {
    icon: "Notebook" as const,
    title: "Business Impact Category",
    description:
      "The Business Impact Category is designed for experienced entrepreneurs and business owners who are ready to invest in and manage a business in PEI. This stream provides a pathway for those looking to establish or buy a business in the province and contribute to its economic development. Successful applicants must demonstrate the financial capacity and management experience needed to run a business in PEI, as well as a commitment to actively managing the enterprise.",
  },
]
const PrinceEdwardIsland: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <Hero2
        badgeText="GreenTech Resources"
        title="Prince Edward Island Provincial Nominee Program (PNP)
"
        description="Prince Edward Island (PEI) is one of the thirteen provinces and territories of Canada. It is the smallest province in terms of land area and population, but the most densely populated."
        imageUrl="/images/hero/o.avif"
        primaryCta={commonProps?.primaryCta}
        secondaryCta={commonProps?.secondaryCta}
      />
      <Feature3
        badgeText="PNP"
        heading="Prince Edward Island Provincial Nominee Program 
"
        highlighted="Program"
        description="Prince Edward Island (PEI), often referred to as the “Garden of the Gulf”, “Birthplace of Confederation”, and “Cradle of Confederation”, is one of Canada’s most scenic and historic provinces. As one of the three Maritime provinces and part of the four Atlantic provinces, PEI offers stunning coastal views, a high quality of life, and a welcoming community. The island’s capital and largest city, Charlottetown, is the heart of its cultural and economic activities.

For those looking to make Prince Edward Island their new home, there are three primary immigration pathways to explore:"
        items={featuresNew}
      />
      <Feature3
        badgeText="PNP"
        heading="Prince Edward Island PNP 
"
        highlighted=" Programs"
        description="Prince Edward Island (PEI), known for its stunning landscapes and welcoming communities, offers a Provincial Nominee Program (PNP) designed to attract skilled workers, entrepreneurs, and graduates. The PEI PNP provides several immigration streams, each tailored to meet the province’s economic needs and help individuals and families settle in this beautiful island province. Here are the key streams under the PEI PNP:"
        items={featuresNew2}
      />
      <FeatureGrid4
        title=" Benefits for your family "
        description="With Prince Edward Island Provincial Nominee Program (PNP)​, your entire family, including your spouse and children under 22 years of age (at the time of submitting the provincial nomination application), can submit for Canada Permanent Resident to enjoy most of the benefits like Canada."
        features={features2}
      />
      <Feature2WithImage
        heading={
          <>
            Prince Edward Island Provincial Nominee Program
            <span className="text-primary pl-2">(PNP)</span>
          </>
        }
        subheading="  During the wait for permanent residency, your family can apply to come, work and study in Canada"
        features={cards}
        imageSrc="/images/hero/e.avif"
        imageAlt="Fox in the wild"
      />
      <FeatureGrid4
        title="Prince Edward Island Provincial Nominee Program (PNP)​"
        description="When you become Canada Permanent Resident"
        features={features3}
      />
      <CtaWithFeaturesRightImage
        badgeText="Prince Edward Island Provincial Nominee Program (PNP)​"
        title=" GreenTech Resource Worldwide Canada"
        subtitle=""
        features={features}
      />
    </div>
  )
}

export default PrinceEdwardIsland
