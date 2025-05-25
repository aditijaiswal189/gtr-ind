import { features } from "@/app/(pages)/about-us/about/about/page"
import { CtaWithFeaturesRightImage } from "@/components/ui/cta-with-features-right-image"
import { FeatureGrid4, FeatureItemData } from "@/components/ui/feature-grid4"
import {
  Feature2WithImage,
  FeatureItemProps,
} from "@/components/ui/features-2-with-image"
import {
  FeatureItemPropsList,
  FeatureList,
} from "@/components/ui/features-list"
import { Hero2 } from "@/components/ui/hero2"
import { StepsWithHeadingImageList } from "@/components/ui/steps-with-heading-image-list"
import { commonProps } from "@/constant/commonProps"
import {
  Award,
  Briefcase,
  ClipboardCheck,
  Compass,
  FileCheck,
  FileText,
  Heart,
  Lightbulb,
  Notebook,
  Plane,
  Smile,
  Star,
} from "lucide-react"
import React from "react"
const items: FeatureItemPropsList[] = [
  {
    icon: Star,
    text: "Alberta Opportunity Stream",
  },
  { icon: Briefcase, text: "Alberta Express Entry Stream" },
  { icon: Notebook, text: "Accelerated Tech Pathway" },
]
const items2: FeatureItemPropsList[] = [
  { icon: Star, text: "Graduate Entrepreneur Stream" },
  { icon: Briefcase, text: "Foreign Graduate Entrepreneur Stream​" },
  { icon: Notebook, text: "Rural Renewal Stream" },
  { icon: Smile, text: "Rural Entrepreneur Stream​" },
  {
    icon: Award,
    text: "Farm Stream",
  },
]
export interface StepConfigList {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
}
export interface StepMajorConfig {
  badgeText: string
  heading: string
  subheading: string
  steps: StepConfigList[]
}
const stepsMajor = [
  {
    badgeText: "Roadmap",
    heading: "Alberta Opportunity Stream",
    subheading:
      "The Alberta Opportunity Stream (AOS) is designed to help foreign nationals working in Alberta to transition to permanent residency. Alberta Advantage Immigration Program. Follow this guide to ensure you meet the eligibility criteria and successfully navigate the process.",
    steps: [
      {
        icon: ClipboardCheck,
        title: "Eligibility Check",
        description:
          "Before applying, make sure you meet Alberta’s eligibility criteria, which include:Work Experience: You must have valid work experience in Alberta in an eligible occupation.Language Proficiency: Meet the required language benchmarks in either English or French.Occupation: Your job must be in an eligible occupation that supports Alberta's labor market needs.Full-Time Job: A full-time job offer from an employer in Alberta is mandatory.",
      },
      {
        icon: Lightbulb,
        title: "Submit Expression of Interest (EOI)",
        description:
          "If you meet the criteria, the next step is to create an Expression of Interest (EOI) profile online. Provide detailed information about your qualifications, work experience, language proficiency, and other relevant details.",
      },
      {
        icon: Award,
        title: "Receive Notification of Interest (NOI)",
        description:
          "Once your EOI is submitted, the Alberta Immigrant Nominee Program (AINP) may select your profile based on Alberta's labor market needs. If selected, you’ll receive a Notification of Interest (NOI), inviting you to apply for a provincial nomination.",
      },
      {
        icon: FileCheck,
        title: "Apply for Nomination",
        description:
          "After receiving an NOI, you must submit a comprehensive application to the Alberta Immigrant Nominee Program (AINP). Ensure your application includes all necessary documents. If approved, you’ll be awarded a provincial nomination certificate.",
      },
      {
        icon: Compass,
        title: "Apply for Permanent Residency: ",
        description:
          "With your provincial nomination in hand, you can now apply for permanent residency through the federal government’s Express Entry system. The nomination significantly increases your chances of being invited to apply for permanent residency.",
      },
      {
        icon: Briefcase,
        title: "Follow these steps",
        description:
          "Following these steps can help you successfully apply for permanent residency through the Alberta Opportunity Stream. Ensure you meet all the requirements and submit accurate information to avoid delays in your application process.",
      },
    ],
  },
  {
    badgeText: "Roadmap",
    heading: "Alberta express entry",
    subheading:
      "The Alberta Express Entry stream allows eligible candidates to receive a provincial nomination, which boosts their chances of obtaining Canadian permanent residency. Here's a step-by-step guide to help you through the process:",
    steps: [
      {
        icon: ClipboardCheck,
        title: "Eligibility Check",
        description:
          "Before applying, ensure you meet Alberta’s eligibility criteria, which include: Work Experience: You must have relevant work experience in Alberta or in an occupation that supports Alberta's economic needs.Language Proficiency: Demonstrate language proficiency in English or French that meets the Canadian Language Benchmark (CLB) requirements.Occupation: Your job must align with Alberta’s labor market needs. Full-Time Job: A full-time, continuous job offer from an Alberta employer is a mandatory requirement.",
      },
      {
        icon: Lightbulb,
        title: "Submit Expression of Interest (EOI)",
        description:
          "Once you verify your eligibility, create an Expression of Interest (EOI) profile online via the Express Entry system. Include accurate details about your qualifications, work experience, and language proficiency.",
      },
      {
        icon: Award,
        title: "Receive Notification of Interest (NOI)",
        description:
          "If Alberta’s Immigrant Nominee Program (AINP) identifies your profile as a good match for the province’s labor market, you may receive a Notification of Interest (NOI). This NOI allows you to proceed with the provincial nomination application.",
      },
      {
        icon: FileCheck,
        title: "Apply for Nomination",
        description:
          "After receiving the NOI, you must submit a complete application to the Alberta Immigrant Nominee Program (AINP). If your application is successful, Alberta will issue you a provincial nomination certificate, which can be used to strengthen your Express Entry profile.",
      },
      {
        icon: Compass,
        title: "Apply for Permanent Residency: ",
        description:
          "With the provincial nomination certificate, your Comprehensive Ranking System (CRS) score in the Express Entry pool will increase significantly. Use this certificate to apply for permanent residency through the federal Express Entry system, significantly improving your chances of selection.",
      },
      {
        icon: Briefcase,
        title: "Follow these steps",
        description:
          "Following these steps can help you successfully apply for permanent residency through the Alberta Opportunity Stream. Ensure you meet all the requirements and submit accurate information to avoid delays in your application process.",
      },
    ],
  },
  {
    badgeText: "Roadmap",
    heading: "      Alberta Business Immigration Program for Entrepreneur",
    subheading:
      "The Alberta Business Immigration Nominee Program offers pathways for entrepreneurs to establish a business in Alberta and secure permanent residency. Alberta Advantage Immigration Program Here's a detailed guide on how the process works:",
    steps: [
      {
        icon: ClipboardCheck,
        title: "Expression of Interest (EOI) Submission:",
        description:
          "The first step is to submit your Expression of Interest (EOI) to the Alberta Business Immigration Program. This profile outlines your business plans, qualifications, and experience. The program uses this information to assess your potential for success in Alberta.",
      },
      {
        icon: Lightbulb,
        title: " EOI Selection and Invitation:",
        description:
          "Your EOI is evaluated based on criteria such as your business idea, industry experience, investment potential, and economic impact. If your profile stands out, you will receive an Invitation to Apply (ITA), allowing you to proceed to the next stage.",
      },
      {
        icon: Award,
        title: "Business Establishment:",
        description:
          "After receiving an ITA, the next step is to work on establishing your business in Alberta. This involves fulfilling the investment, operational, and legal requirements outlined in the program. You must demonstrate that your business is viable and will contribute to Alberta’s economy.",
      },
      {
        icon: FileCheck,
        title: "Apply for Nomination",
        description:
          "Once your business is successfully established and meets the program’s requirements, you can seek a nomination from Alberta. The provincial nomination is a critical step toward securing permanent residency, as it significantly boosts your application.",
      },
      {
        icon: Compass,
        title: "Apply for Permanent Residency: ",
        description:
          "After receiving your nomination, you can submit your permanent residence application to the federal government. Upon approval, you and your family will be granted permanent residency, allowing you to enjoy the full benefits of living and working in Canada.",
      },
      {
        icon: Briefcase,
        title: "Follow these steps",
        description:
          "Following these steps can help you successfully apply for permanent residency through the Alberta Opportunity Stream. Ensure you meet all the requirements and submit accurate information to avoid delays in your application process.",
      },
    ],
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
const Alberta: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <Hero2
        badgeText="GreenTech Resources"
        title="Alberta Advantage Immigrant Program (AAIP)"
        description="Located in the western heart of Canada, Alberta is renowned for its breathtaking natural landscapes and welcoming immigration program for foreign skilled talents and entrepreneurs."
        imageUrl="/images/hero/d.avif"
        primaryCta={commonProps?.primaryCta}
        secondaryCta={commonProps?.secondaryCta}
      />
      <FeatureList
        badgeText="Provincial Nominee Programs"
        heading={
          <>
            Alberta Advantage Immigrant Program
            {/* <br className="hidden md:block" /> */}
            <span className="text-primary"> (AAIP) </span>
          </>
        }
        subheading="FOR SKILLED WORKERS"
        items={items}
      />
      <FeatureList
        badgeText="Provincial Nominee Programs"
        heading={
          <>
            Alberta Advantage Immigrant Program
            {/* <br className="hidden md:block" /> */}
            <span className="text-primary"> (AAIP) </span>
          </>
        }
        subheading="FOR ENTREPRENEURS"
        items={items2}
      />
      {/* <StepsWithHeadingImageList
           
            steps={steps}
          /> */}
      {stepsMajor.map((section, i) => (
        <StepsWithHeadingImageList
          key={i}
          badgeText={section.badgeText}
          heading={section.heading}
          subheading={section.subheading}
          steps={section.steps}
        />
      ))}

      <FeatureGrid4
        title=" Benefits for your family "
        description="Provincial nomination offers a valuable pathway to Canada Permanent Residency (PR) for you and your entire family. When you receive a provincial nomination, not only do you qualify for PR, but your spouse and dependent children (under 22 years of age at the time of application) can also submit for PR."
        features={features2}
      />
      <Feature2WithImage
        heading={
          <>
            Alberta Advantage Immigrant Program
            <span className="text-primary pl-2">(AAIP)</span>
          </>
        }
        subheading="  During the wait for permanent residency, your family can apply to come, work and study in Canada"
        features={cards}
        imageSrc="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        imageAlt="Fox in the wild"
      />
      <FeatureGrid4
        title=" AAIP"
        description="When you become Canada Permanent Resident"
        features={features3}
      />

      <CtaWithFeaturesRightImage
        badgeText="Alberta Advantage Immigrant Program (AAIP)"
        title=" GreenTech Resource Worldwide Canada"
        subtitle="Each program has its specific requirements; please contact GTR Worldwide for personalized guidance."
        features={features}
      />
    </div>
  )
}

export default Alberta
