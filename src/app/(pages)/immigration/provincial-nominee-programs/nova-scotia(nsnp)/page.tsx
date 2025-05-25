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
    title: " Nova Scotia Experience: Express Entry",
    description:
      "This stream is designed for highly skilled individuals with experience in Nova Scotia. By connecting to the Express Entry system, this program allows faster processing for those who meet the criteria, such as having skilled work experience and an intent to live in Nova Scotia.",
  },
  {
    icon: "BriefcaseBusiness" as const,
    title: " Nova Scotia Labour Market Priorities",
    description:
      "The Labour Market Priorities stream selects candidates from the Express Entry pool who meet Nova Scotia’s labor market needs. These priorities shift depending on the province’s economic requirements, making it an adaptable option for various professions.",
  },
  {
    icon: "Notebook" as const,
    title: "Nova Scotia Labour Market Priorities for Physicians",
    description:
      "Specifically designed for doctors, this stream addresses the demand for healthcare professionals in Nova Scotia. If you are a physician and meet the qualifications, this program can streamline your immigration process and help you practice in the province.",
  },
  {
    icon: "Map" as const,
    title: "Skilled Worker Stream",
    description:
      "The Skilled Worker Stream targets individuals with a job offer from a Nova Scotia employer. Whether you are a skilled professional, semi-skilled worker, or in an intermediate-skilled occupation, this stream could be the right path for you.",
  },
  {
    icon: "Globe" as const,
    title: "Occupation In-Demand Stream",
    description:
      "Focusing on specific in-demand occupations, this stream is ideal for workers in industries facing labor shortages, such as healthcare or construction. The Occupation In-Demand Stream helps fill critical gaps in Nova Scotia’s workforce.",
  },
  {
    icon: "Repeat" as const,
    title: "International Graduates In-Demand",
    description:
      "This stream is designed for recent international graduates from recognized institutions with job offers in high-demand fields. The International Graduates In-Demand stream focuses on attracting young talent to the province’s growing sectors.",
  },
  {
    icon: "Briefcase" as const,
    title: "Entrepreneur Stream",
    description:
      "For experienced business owners or senior managers, the Entrepreneur Stream offers an opportunity to establish or buy a business in Nova Scotia. This stream is ideal for those who wish to make a significant investment and actively manage their business.",
  },
  {
    icon: "GraduationCap" as const,
    title: "International Graduate Entrepreneur Stream",
    description:
      "Graduates from Nova Scotia institutions who have already started or purchased a business in the province may qualify for the International Graduate Entrepreneur Stream. It encourages graduates to stay and contribute to Nova Scotia’s economy.",
  },
  {
    icon: "Award" as const,
    title: "Physician Stream",
    description:
      "Like the Labour Market Priorities for Physicians, the Physician Stream targets medical professionals with job offers from Nova Scotia’s health authorities. This pathway is designed to fill vital positions in the healthcare sector.",
  },
]

const NovaScotia: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <Hero2
        badgeText="GreenTech Resources"
        title="Nova Scotia Nominee Program (NSNP)
"
        description="Nova Scotia is Canada’s second-smallest province in area, after Prince Edward Island. The province’s mainland is the Nova Scotia peninsula, surrounded by the Atlantic Ocean and including numerous bays and estuaries."
        imageUrl="/images/hero/m.avif"
        primaryCta={commonProps?.primaryCta}
        secondaryCta={commonProps?.secondaryCta}
      />
      <Feature3
        badgeText="Programs"
        heading="The Nova Scotia Nominee Program "
        highlighted="(NSNP)"
        description="Nova Scotia, a picturesque province in eastern Canada, boasts a unique geographical feature: nowhere in Nova Scotia is more than 67 km (42 mi) from the ocean. This close proximity to the Atlantic coastline makes it a haven for beach lovers, sailors, and nature enthusiasts.
The capital city, Halifax, stands out as a vibrant cultural hub. Known for its rich history, Halifax is home to numerous museums, galleries, and live performances. It is also renowned for offering a high standard of living, making it an attractive destination for residents and visitors alike. Whether you're drawn by its arts scene or natural beauty, Halifax promises a thriving, dynamic lifestyle.
Nova Scotia Nominee Program Streams are as follows
The Nova Scotia Nominee Program (NSNP) offers various streams to help individuals and families settle in Nova Scotia. If you’re looking for an immigration pathway, the NSNP provides tailored options depending on your background, work experience, and qualifications. Here are the key streams offered under the Nova Scotia Nominee Program:"
        items={featuresNew}
      />
      <FeatureGrid4
        title=" Benefits for your family "
        description="With Nova Scotia Nominee Program (NSNP), your entire family, including your spouse and children under 22 years of age (at the time of submitting the provincial nomination application), can submit for Canada Permanent Resident to enjoy most of the benefits like Canada."
        features={features2}
      />
      <Feature2WithImage
        heading={
          <>
            Nova Scotia Nominee Program
            <span className="text-primary pl-2">(NSNP)</span>
          </>
        }
        subheading="  During the wait for permanent residency, your family can apply to come, work and study in Canada"
        features={cards}
        imageSrc="/images/hero/e.avif"
        imageAlt="Fox in the wild"
      />
      <FeatureGrid4
        title="Nova Scotia Nominee Program (NSNP)"
        description="When you become Canada Permanent Resident"
        features={features3}
      />
      <CtaWithFeaturesRightImage
        badgeText="Nova Scotia Nominee Program "
        title=" GreenTech Resource Worldwide Canada"
        subtitle=""
        features={features}
      />
    </div>
  )
}

export default NovaScotia
