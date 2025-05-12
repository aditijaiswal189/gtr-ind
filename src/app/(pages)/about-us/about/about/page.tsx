import { ContentWithImageDynamicCounter } from "@/components/ui/content-with-image-dynamic-counter";
import { CtaWith4Features } from "@/components/ui/cta-with-4-features";
import { CtaWithFeaturesRightImage } from "@/components/ui/cta-with-features-right-image";
import {
  FeatureWithList3Grid,
  FeatureWithListProps,
} from "@/components/ui/feature-with-list3-grid";
import { Feature1Animated } from "@/components/ui/feature1-animated";
import { Hero2 } from "@/components/ui/hero2";
import { Stats } from "@/components/ui/stats";

import {
  BadgePercent,
  Briefcase,
  BriefcaseBusiness,
  Contact,
  Globe,
  Globe2,
  LifeBuoy,
  Navigation,
  Notebook,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { Plane } from "lucide-react";
import React, { ReactNode } from "react";

interface StatItem {
  label: string;
  end: number;
  suffix?: string;
}
interface FeaturesConfig {
  intro: {
    eyebrow: string;
    heading: string;
    text: string;
  };
  images: {
    main: string;
    overlay?: string;
    badge?: { value: string; label: string };
  };
  stats: StatItem[];
}

const featuresConfig: FeaturesConfig = {
  intro: {
    eyebrow: "GreenTech Resource Worldwide Canada",
    heading: "We Are The Leading Canada Immigration Company",
    text:
      "GreenTech Resource Worldwide Canada is ranked as the 3rd top recruitment agency and immigration consultant " +
      "in Saskatchewan. We are confident in our ability to provide solutions to shorten the journey to the  " +
      "peaceful and beautiful country of Canada for your entire family",
  },
  images: {
    main: "https://images.pexels.com/photos/8867433/pexels-photo-8867433.jpeg",
    overlay:
      "https://images.pexels.com/photos/5699516/pexels-photo-5699516.jpeg",
    badge: { value: "20+", label: "Years Exp." },
  },
  stats: [
    { label: "Success Rate", end: 96, suffix: "%" },
    { label: "Customer Support", end: 24, suffix: "/7" },
  ],
};
interface FeatureItem {
  title: string;
  description: string;
  link: string;
  icon: ReactNode;
}

const featureItems: FeatureItem[] = [
  {
    title: "Head Office in Canada",
    description:
      "2124 Broad St, Regina, Saskatchewan, Canada, S4P 1Y5. We are located in the heart of Regina, Saskatchewan, Canada.",
    link: "/",
    icon: <UserCheck className="w-16 h-16 text-primary lg:w-20 lg:h-20" />,
  },
  {
    title: "Multilingual Support",
    description:
      "The GreenTech Resources Worldwide Canada team serves clients from diverse backgrounds worldwide and can provide support in languages such as Vietnamese, Tagalog, Arabic, Chinese, French, and Spanish.",
    link: "/",
    icon: <Globe className="w-16 h-16 text-primary lg:w-20 lg:h-20" />,
  },
];
const aboutFeatures = [
  {
    title: "About Our Team",
    description:
      "Under the experienced and passionate leadership of Mr. Manoj Goswami – Regulated Canadian Immigration Consultant (RCIC), Founder, CEO of GreenTech Resource Worldwide Canada. Mr. Manoj Goswami is a licensed and registered Regulated Canadian Immigration Consultant (RCIC) with over a decade of experience in recruitment, consulting, and immigration file support. A proud member of professional organizations like CICC and CAPIC.",
    icon: <Contact className="w-6 h-6" />,
  },
  {
    title: "Education and Experience",
    description:
      "He holds an Executive Master of Business Administration from the University of Regina’s Levin School of Business and has studied at prestigious institutions such as the University of Toronto and Ashton College in British Columbia. Manoj boasts a rich portfolio of designations, including P.Ag, PMP, SCMP, CPSM, and CRM, which paved the way for his career as an Immigration Consultant and Foreign Worker Recruiter since 2016. He is a Registered Canadian Immigration Consultant (RCIC).",
    icon: <Plane className="w-6 h-6" />,
  },
  {
    title: "Multilingual Support",
    description:
      "In addition to fluent English, Manoj is proficient in nine languages, including Hindi, Urdu, Nepali, and Bengali. The GreenTech Resources Worldwide Canada team serves clients from diverse backgrounds worldwide and can provide support in languages such as Vietnamese, Tagalog, Arabic, Chinese, French, and Spanish",
    icon: <Notebook className="w-6 h-6" />,
  },
  {
    title: "20+ Years Experience",
    description:
      "We take immense pride in our collaboration with licensed immigration experts certified by RCIC, Manoj Goswami, an immigrant to Canada since the early 2000s, brings nearly two decades of experience to his role.",
    icon: <Briefcase className="w-6 h-6" />,
  },
];
export const features = [
  {
    title: "Government of Canada Licensed",
    description:
      "We are authorized to legally represent our clients files, working directly with the Immigration Department of Canada and the Government of Canada. Our RCIC experts ensure that our clients files are processed accurately, legally, and securely.",
    icon: Plane,
  },
  {
    title: "Proven High Success Rate",
    description:
      "This is achieved through a personalized strategy for each of our clients. Each file is analyzed specifically, identifying strengths and weaknesses that need to be addressed. Our wealth of experience helps us anticipate and provide proactive solutions to shorten processing times and ensure success.",
    icon: BadgePercent,
  },
  {
    title: "Years Of Experience",
    description:
      "GreenTech Resource Worldwide Canada is a Canada-based company led by Immigration Expert Mr. Manoj Goswami, the founder and CEO of the company. With an educational background and over 20 years of working experience in Canada, he and his team have a deep understanding of the labor market, culture, and a profound knowledge of Canadian Immigration and Citizenship laws.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Reasonable cost guaranteed quality",
    description:
      "At GreenTech Resource Worldwide Canada, we offer high-quality immigration services at affordable rates, ensuring your journey towards a new beginning is both accessible and excellent. We have transparent refund policy, emphasizing our commitment to your satisfaction. Your dreams of a new life are well within your reach with GreenTech Resource Worldwide Canada by your side.",
    icon: ShieldCheck,
  },
];

export const featuresConfig2: FeatureWithListProps[] = [
  {
    icon: Globe2,
    title: " Entrepreneurs",
    description: "Providing services for.",
    bullets: [
      "Conduct initial assessment based on intake criteria",
      "Develop & refine the innovative business concepts",
      "Incubator selection",
      "Pitch deck refinement",
      "Pitch coaching",
      "Closed Work Permit for Applicant",
      "Open Work Permit for spouse",
      "Visitor/ Study Permit for dependent children",
      "PR application",
      "Settlement",
    ],
    ctaHref: "/planet",
  },
  {
    icon: LifeBuoy,
    title: "Employers",
    description: "Steps for the",
    bullets: [
      "PNP/LMIA registration for employers",
      "Planning, searching, and screening suitable candidates",
      "Streamlining the interview process",
      "Assisting with employment offers",
      "Handling PNP/LMIA and work permit procedures for candidates",
      "Settlement",
    ],
    ctaHref: "/life",
  },
  {
    icon: Navigation,
    title: "    Students",
    description: "services we provide for",
    bullets: [
      "Study Permit",
      "Post graduation work permit",
      "Open Work Permit for spouses",
      "Visitor/ Study Permit for dependent children",
      "Consulting Pathway to PR",
      "Settlement",
    ],
    ctaHref: "/explore",
  },
  {
    icon: Briefcase,
    title: " Foreign Workers",
    description: "Steps for ",
    bullets: [
      "Recruitment at CIC Canada Jobs",
      "Provincial nomination",
      "Closed work permit for applicant",
      "Open work permit for spouse",
      " Visitor/ Study Permit for dependent children​",
      "PR application",
    ],
    ctaHref: "/contact",
  },
];

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <Hero2
        badgeText="GreenTech Resources"
        title="About Us"
        description="GreenTech Resources & GreenTech Resource Worldwide Canada is ranked as the 3rd top recruitment agency and immigration consultant in Saskatchewan."
        imageUrl="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        primaryCta={{
          label: "Why choose us?",
          href: "/about-us/about/why-choose-us",
        }}
        secondaryCta={{
          label: "Learn More",
          href: "/about-us/about/book-appointment",
        }}
      />
      <ContentWithImageDynamicCounter featuresConfig={featuresConfig} />
      <Feature1Animated featureItems={featureItems} />

      <CtaWith4Features features={aboutFeatures} imageUrl="/images/ceo.jpg" />
      <FeatureWithList3Grid
        heading="Our Services"
        subheading="Services we provide for"
        items={featuresConfig2}
      />
      <CtaWithFeaturesRightImage
        badgeText="About Us"
        title=" GreenTech Resource Worldwide Canada"
        subtitle=""
        features={features}
      />
      <Stats />
    </div>
  );
};

export default AboutPage;
