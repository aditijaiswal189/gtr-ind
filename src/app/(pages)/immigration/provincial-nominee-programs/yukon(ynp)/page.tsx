import { features } from "@/app/(pages)/about-us/about/about/page"
import { CtaWithFeaturesRightImage } from "@/components/ui/cta-with-features-right-image"
import { FeatureGrid4, FeatureItemData } from "@/components/ui/feature-grid4"
import { Feature1Animated } from "@/components/ui/feature1-animated"
import { Feature3 } from "@/components/ui/feature3"
import {
  Feature2WithImage,
  FeatureItemProps,
} from "@/components/ui/features-2-with-image"
import { Hero2 } from "@/components/ui/hero2"
import { commonProps } from "@/constant/commonProps"
import {
  Briefcase,
  FileText,
  Globe,
  Heart,
  Notebook,
  Plane,
  UserCheck,
} from "lucide-react"
import React, { ReactNode } from "react"

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
const featuresYukon: FeatureItemData[] = [
  {
    title: "Job Offer:",
    description: "You must have a valid job offer from a Yukon employer.",
    icon: <Plane />,
  },
  {
    title: "Language Proficiency: ",
    description:
      "For jobs in NOC 0 & A, a minimum Canadian Language Benchmark (CLB) level of 7 is required, and for NOC B jobs, a minimum of CLB 5 is needed.",
    icon: <Notebook />,
  },

  {
    title: "Work Experience:",
    description:
      " A minimum of 1 year of relevant work experience in the field is mandatory.",
    icon: <Briefcase />,
  },
  {
    title: "Education: ",
    description:
      "You must possess a minimum of high school education or equivalent, as required by the job profile.",
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
interface FeatureItem {
  title: string
  description: string
  link: string
  icon: ReactNode
}
const featureItemsAni: FeatureItem[] = [
  {
    title: " Yukon Nominee Program (YNP)",
    description:
      "The Yukon Nominee Program allows employers to hire long-term employees. Foreign workers, called nominees, nominated to work under the Yukon Nominee Program are accepted with the expectation that they'll live in Yukon over the long term.",
    link: "/",
    icon: <UserCheck className="w-16 h-16 text-primary lg:w-20 lg:h-20" />,
  },
  {
    title: "Yukon Business Nominee Program.",
    description:
      "Apply to run your own business in Yukon (foreign entrepreneurs),a Provincial Nominee Program (PNP), is a collection of immigration pathways enabling foreign nationals to become Canadian permanent residents.",
    link: "/",
    icon: <Globe className="w-16 h-16 text-primary lg:w-20 lg:h-20" />,
  },
]

const newConfig = [
  {
    icon: "Briefcase" as const,
    title: "Language Proficiency: ",
    description:
      "A minimum Canadian Language Benchmark (CLB) level of 4 is required to demonstrate proficiency in English or French.",
  },
  {
    icon: "Notebook" as const,
    title: "Education: ",
    description:
      "Applicants must have completed at least a high school level education.",
  },
  {
    icon: "Layers" as const,
    title: "Business Experience:",
    description:
      "You must have a minimum of 5 years of business ownership or management experience.",
  },
  {
    icon: "Notebook" as const,
    title: " Investment: ",
    description:
      "Applicants are required to make a minimum investment of CA$300,000 into a Yukon business.",
  },
  {
    icon: "Briefcase" as const,
    title: "Personal Net Worth: ",
    description:
      "You need to demonstrate a personal net worth of at least CA$500,000.",
  },
  {
    icon: "BriefcaseBusiness" as const,
    title: "Follow up",
    description:
      "Eligible entrepreneurs can leverage the Yukon Provincial Nominee Program to obtain permanent residency while growing their business in the Yukon.",
  },
]
const YukonYNP: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <Hero2
        badgeText="GreenTech Resources"
        title="Yukon Provincial Nominee Program (YNP)"
        description="
Yukon, a territory in northwestern Canada, is known for its vast wilderness and rugged landscapes. Dominated by pristine wilderness, Yukon is home to stunning mountain ranges, expansive forests, and the iconic Yukon River. The capital, Whitehorse, is a small city with a vibrant cultural scene and serves as a gateway to the territory’s outdoor adventures."
        imageUrl="/images/hero/t.avif"
        primaryCta={commonProps?.primaryCta}
        secondaryCta={commonProps?.secondaryCta}
      />
      <Feature1Animated featureItems={featureItemsAni} />
      <FeatureGrid4
        title=" Yukon Nominee Program (YNP) Requirements"
        description="The Yukon Provincial Nominee Program (YNP) provides a great opportunity for skilled foreign workers to secure permanent residence in Canada. Similar to other provinces, Yukon requires skilled professionals to meet labor market needs. YNP is designed to fill those gaps by nominating qualified candidates for Canadian permanent residency.By meeting these criteria, candidates can take advantage of Yukon’s streamlined path to Canadian permanent residency through the Yukon Nominee Program."
        features={featuresYukon}
      />

      <Feature3
        badgeText="YNP"
        heading="Yukon Business Nominee Program Requirements:"
        highlighted=""
        description="The Yukon Provincial Nominee Program (YNP) offers entrepreneurs an opportunity to obtain permanent residency in Canada by establishing a business in the Yukon territory. This stream is designed for experienced business owners and managers looking to invest and contribute to the local economy."
        items={newConfig}
      />
      <FeatureGrid4
        title=" Benefits for your family "
        description="With Yukon Provincial Nominee Program (YNP), your entire family, including your spouse and children under 22 years of age (at the time of submitting the provincial nomination application), can submit for Canada Permanent Resident to enjoy most of the benefits like Canada."
        features={features2}
      />
      <Feature2WithImage
        heading={
          <>
            Yukon Provincial Nominee Program
            <span className="text-primary pl-2">(YNP)</span>
          </>
        }
        subheading="  During the wait for permanent residency, your family can apply to come, work and study in Canada"
        features={cards}
        imageSrc="/images/hero/e.avif"
        imageAlt="Fox in the wild"
      />
      <FeatureGrid4
        title="Yukon Provincial Nominee Program (YNP)"
        description="When you become Canada Permanent Resident"
        features={features3}
      />
      <CtaWithFeaturesRightImage
        badgeText="Yukon Provincial Nominee Program (YNP)"
        title=" GreenTech Resource Worldwide Canada"
        subtitle=""
        features={features}
      />
    </div>
  )
}
export default YukonYNP
