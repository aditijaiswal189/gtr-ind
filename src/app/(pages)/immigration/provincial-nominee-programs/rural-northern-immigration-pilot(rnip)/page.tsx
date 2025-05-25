import { features } from "@/app/(pages)/about-us/about/about/page"
import { CtaWithFeaturesRightImage } from "@/components/ui/cta-with-features-right-image"
import { FeatureGrid4, FeatureItemData } from "@/components/ui/feature-grid4"
import {
  Feature2WithImage,
  FeatureItemProps,
} from "@/components/ui/features-2-with-image"
import { Hero2 } from "@/components/ui/hero2"
import { StepsWithHeadingImageList } from "@/components/ui/steps-with-heading-image-list"
import { commonProps } from "@/constant/commonProps"
import {
  Award,
  Briefcase,
  Compass,
  FileCheck,
  FileText,
  Heart,
  Lightbulb,
  Notebook,
  Plane,
} from "lucide-react"
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
const featuresLink: FeatureItemData[] = [
  {
    title: "Vernon, BC",
    description: "https://rnip-vernon-northok.ca/",
  },
  {
    title: "Claresholm, AB",
    description: "www.claresholm.ca",
  },
  {
    title: " North Bay, ON",
    description: "https://northbayrnip.ca/",
  },
  {
    title: "Sudbury, ON ",
    description: "https://investsudbury.ca/why-sudbury/move-to-sudbury/rnip/",
  },

  {
    title: "Moose Jaw, SK",
    description: "https://www.moosejawrnip.ca/",
  },
  {
    title: "Altona/Rhineland, MB",
    description: "www.seedrgpa.com",
  },
  {
    title: "Brandon, MB",
    description: "www.economicdevelopmentbrandon.com",
  },
  {
    title: "Thunder Bay, ON",
    description: "https://gotothunderbay.ca/",
  },
  {
    title: "Sault Ste. Marie, ON",
    description: "www.welcometossm.com",
  },
  {
    title: "Timmins, ON",
    description: "www.timminsedc.com",
  },
  {
    title: "West Kootenay (Trail, Castlegar, Rossland, Nelson), BC",
    description: "https://wk-rnip.ca/",
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
export interface StepConfigList {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
}
const stepsRural: StepConfigList[] = [
  {
    icon: Lightbulb,
    title: "Meet the Eligibility Requirements",
    description:
      "Before applying for the Rural and Northern Immigration Pilot, you must meet both the IRCC (Immigration, Refugees, and Citizenship Canada) eligibility requirements and the community-specific requirements. These general criteria include aspects like work experience, language proficiency, and education. Additionally, each participating community will have its own requirements, such as residency, specific skill sets, or the ability to integrate into the local community.",
  },
  {
    icon: Award,
    title: "Find an Eligible Job in a Participating Community",
    description:
      "The next step is to find an eligible job with an employer in one of the participating RNIP communities. It’s important to ensure the job offer is full-time, permanent, and meets the wage standards of that community. Only specific jobs are considered eligible under the RNIP, so it’s crucial that the position aligns with the community’s labor needs.",
  },
  {
    icon: FileCheck,
    title: "Submit Your Application for a Community Recommendation",
    description:
      "After securing a job offer, you will need to apply for a community recommendation. Each community participating in the Rural and Northern Immigration Pilot has its own process for evaluating candidates. In addition to standard requirements, they may assess your intent to live in the community, local connections, or family ties before issuing a recommendation.",
  },
  {
    icon: Compass,
    title: "Apply for Permanent Residence",
    description:
      "Once you receive a community recommendation, you can then apply for permanent residence through the IRCC. While the community recommendation significantly strengthens your application, you will still need to meet general IRCC criteria. Upon submission, your application will be reviewed, and if approved, you will be on your way to obtaining permanent residence in Canada.",
  },
]
const RuralNorthernImmigrationPilot: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <Hero2
        badgeText="GreenTech Resources"
        title="Rural and Northern Immigration Pilot (RNIP)
"
        description="The Rural and Northern Immigration Pilot is a community-driven program. It’s designed to spread the benefits of economic immigration to smaller communities by creating a path to permanent residence for skilled foreign workers who want to work and live in one of the participating communities."
        imageUrl="/images/hero/q.avif"
        primaryCta={commonProps?.primaryCta}
        secondaryCta={commonProps?.secondaryCta}
      />

      <FeatureGrid4
        title="Rural and Northern Immigration Pilot (RNIP) "
        description="
The Rural and Northern Immigration Pilot is a community-driven program. It’s designed to spread the benefits of economic immigration to smaller communities by creating a path to permanent residence for skilled foreign workers who want to work and live in one of the participating communities.
Participating communities
"
        features={featuresLink}
      />
      <StepsWithHeadingImageList
        badgeText="Provincial Nominee Programs"
        heading="RNIP Process"
        subheading="The Rural and Northern Immigration Pilot (RNIP) is a unique, community-driven immigration program designed to attract skilled workers to rural and northern communities in Canada. If you’re looking to gain permanent residence in Canada through this program, follow these step-by-step guidelines to ensure a successful application:"
        steps={stepsRural}
      />

      <FeatureGrid4
        title=" Benefits for your family "
        description="With Rural and Northern Immigration Pilot (RNIP), your entire family, including your spouse and children under 22 years of age (at the time of submitting the provincial nomination application), can submit for Canada Permanent Resident to enjoy most of the benefits like Canada."
        features={features2}
      />
      <Feature2WithImage
        heading={
          <>
            Rural and Northern Immigration Pilot
            <span className="text-primary pl-2">(RNIP)</span>
          </>
        }
        subheading="  During the wait for permanent residency, your family can apply to come, work and study in Canada"
        features={cards}
        imageSrc="/images/hero/e.avif"
        imageAlt="Fox in the wild"
      />
      <FeatureGrid4
        title="Rural and Northern Immigration Pilot (RNIP)"
        description="When you become Canada Permanent Resident"
        features={features3}
      />
      <CtaWithFeaturesRightImage
        badgeText="Rural and Northern Immigration Pilot (RNIP)"
        title=" GreenTech Resource Worldwide Canada"
        subtitle=""
        features={features}
      />
    </div>
  )
}

export default RuralNorthernImmigrationPilot
