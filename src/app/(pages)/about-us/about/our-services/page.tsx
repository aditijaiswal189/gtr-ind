import { Hero2 } from "@/components/ui/hero2"
import React from "react"

// data/services-data.tsx
import {
  Briefcase,
  FileCheck,
  Globe,
  Notebook,
  Plane,
  UserCheck,
} from "lucide-react"
import {
  FeaturesWithLastFilled,
  Props,
} from "@/components/ui/features-with-last-filled"
import { Newsletter, NewsletterConfig } from "@/components/ui/news-letter"
import { commonProps } from "@/constant/commonProps"

export const services: Props[] = [
  {
    title: "Immigrate to Canada",
    description:
      "Exploring Canada for immigration is an exciting and life-altering choice. Renowned for its quality of life, cultural diversity, and opportunities, let's find your best immigration fit.",
    icon: <UserCheck size={32} />,
    href: "/immigration/express-entry/federal-skilled-worker",
  },
  {
    title: "Work in Canada",
    description:
      "Canada offers diverse work opportunities, fostering career growth and global experiences in a vibrant, welcoming country for skilled professionals and temporary workers.",
    icon: <FileCheck size={32} />,
    href: "/work-and-jobs/work/work-permit",
  },
  {
    title: "Business in Canada",
    description:
      "Expanding or starting a business in Canada taps into a robust economy and a skilled workforce while enjoying a supportive business environment with your family",
    icon: <Globe size={32} />,
    href: "/business/quebec/quebec-investor",
  },
  {
    title: "Study in Canada",
    description:
      "Studying in Canada promises world-class education, rich cultural diversity, and a pathway to a promising future, all within a welcoming and inclusive environment.",
    icon: <Notebook size={32} />,
    href: "/study/programs/study-in-canada",
  },
  {
    title: "Sponsor family to Canada",
    description:
      "We specialize in facilitating the compassionate reuniting of your loved ones through Canada's immigration policies, ensuring that your family can be together in Canada.",
    icon: <Briefcase size={32} />,
    href: "/other-services/programs/family-sponsorship",
  },
  {
    title: "Not sure?",
    description:
      "Feeling uncertain about your immigration journey? Our experienced team of GreenTech Resource Worldwide Canada is here to provide expert guidance and support you!",
    highlighted: true,
    buttonText: "Book Consultation",
    href: "/about-us/about/book-appointment",
    icon: <Plane size={32} />,
  },
]

const aboutNewsletterConfig: NewsletterConfig = {
  label: "Connect with us",
  heading: "Book a session today and start changing your life!",
  placeholder: "Enter your email",
  buttonText: "Book an appointment",
  imageSrc: "/images/hero/g.avif",
  imageAlt: "Woman reading newsletter",
}

const OurServices: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-white flex gap-12 flex-col">
        <Hero2
          badgeText="GreenTech Resources"
          title="Our Services"
          description="GreenTech Resources & GreenTech Resource Worldwide Canada is ranked as the 3rd top recruitment agency and immigration consultant in Saskatchewan."
          imageUrl="/images/download.jfif"
          // imageUrl='https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
          primaryCta={commonProps?.primaryCta}
          secondaryCta={commonProps?.secondaryCta}
        />
        <FeaturesWithLastFilled
          services={services}
          sectionTitle="We Provide Recruitment, Immigration and Settlement Services"
          sectionSubtitle="Our goal is to provide customers with the best service, for us to help customers
overcome their barriers and obtain Permanent Residensy in Canada"
        />
      </div>
      <Newsletter config={aboutNewsletterConfig} />
    </>
  )
}

export default OurServices
