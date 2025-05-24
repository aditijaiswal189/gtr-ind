import { BlogSection } from "@/components/ui/blog-section";
import { ContactUs } from "@/components/ui/contact-us";
import { ContentWithImage } from "@/components/ui/content-with-Image";
import { ContentWithImageDynamicCounter } from "@/components/ui/content-with-image-dynamic-counter";
import { CountriesSection } from "@/components/ui/countries-section";
import { CtaWith4Features } from "@/components/ui/cta-with-4-features";
import { FAQ } from "@/components/ui/FAQ";
import { Feature1Animated } from "@/components/ui/feature1-animated";

import { Features2 } from "@/components/ui/features2";
import { Footer } from "@/components/ui/footer";
import { HeroSection } from "@/components/ui/hero";
import { ImageWithTitleAndFeatures } from "@/components/ui/image-with-title-and-features.tsx";
import { ImgWith4Features } from "@/components/ui/img-with-4-features";
import { Newsletter, NewsletterConfig } from "@/components/ui/news-letter";
import { Pricing } from "@/components/ui/pricing";
import { Process } from "@/components/ui/process";
import { Services } from "@/components/ui/services";
import { Stats } from "@/components/ui/stats";
import { Testimonials } from "@/components/ui/testimonials";
import { TopBar } from "@/components/ui/top-bar";
import {
  Briefcase,
  Contact,
  Globe,
  Notebook,
  Plane,
  UserCheck,
} from "lucide-react";
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
    badge: { value: "15+", label: "Years Exp." },
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

const aboutNewsletterConfig: NewsletterConfig = {
  label: "Connect with us",
  heading: "Book a session today and start changing your life!",
  placeholder: "Enter your email",
  buttonText: "Book an appointment",
  imageSrc:
    "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
  imageAlt: "Woman reading newsletter",
};
// export const services: Props[] = [
//   {
//     title: "Immigrate to Canada",
//     description:
//       "Exploring Canada for immigration is an exciting and life-altering choice. Renowned for its quality of life, cultural diversity, and opportunities, let's find your best immigration fit.",
//     icon: <UserCheck size={32} />,
//   },
//   {
//     title: "Work in Canada",
//     description:
//       "Canada offers diverse work opportunities, fostering career growth and global experiences in a vibrant, welcoming country for skilled professionals and temporary workers.",
//     icon: <FileCheck size={32} />,
//   },
//   {
//     title: "Business in Canada",
//     description:
//       "Expanding or starting a business in Canada taps into a robust economy and a skilled workforce while enjoying a supportive business environment with your family",
//     icon: <Globe size={32} />,
//   },
//   {
//     title: "Study in Canada",
//     description:
//       "Studying in Canada promises world-class education, rich cultural diversity, and a pathway to a promising future, all within a welcoming and inclusive environment.",
//     icon: <Notebook size={32} />,
//   },
//   {
//     title: "Sponsor family to Canada",
//     description:
//       "We specialize in facilitating the compassionate reuniting of your loved ones through Canada's immigration policies, ensuring that your family can be together in Canada.",
//     icon: <Briefcase size={32} />,
//   },
//   {
//     title: "Not sure?",
//     description:
//       "Feeling uncertain about your immigration journey? Our experienced team of GreenTech Resource Worldwide Canada is here to provide expert guidance and support you!",
//     highlighted: true,
//     buttonText: "Book Consultation",
//     icon: <Plane size={32} />,
//   },
// ];
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

const Page: React.FC = () => {
  return (
    <div>
      <h1 className="text-center text-3xl">Blog Card</h1>

      <BlogSection />

      <h1 className="text-center text-3xl">Hero Section</h1>

      <HeroSection />
      <h1 className="text-center text-3xl">ImageWithTitleAndFeatures</h1>

      <ImageWithTitleAndFeatures />
      <h1 className="text-center text-3xl">CountriesSection</h1>

      <CountriesSection />
      <h1 className="text-center text-3xl">Features2</h1>
      <Features2 />
      <h1 className="text-center text-3xl">Blog Section</h1>
      <BlogSection />
      <h1 className="text-center text-3xl">Testimonials</h1>
      <Testimonials />
      <h1 className="text-center text-3xl">TopBar</h1>

      <TopBar />
      <h1 className="text-center text-3xl">ContentWithImage</h1>
      <ContentWithImage />
      <h1 className="text-center text-3xl">CtaWith4Features</h1>

      <CtaWith4Features features={aboutFeatures} imageUrl="/images/ceo.jpg" />
      <h1 className="text-center text-3xl">Contact Us</h1>

      <ContactUs />
      <h1 className="text-center text-3xl">FAQ2</h1>
      {/* <FAQ2/> */}
      <h1 className="text-center text-3xl">FAQ</h1>
      <FAQ />
      <h1 className="text-center text-3xl">ImgWith4Features</h1>
      <ImgWith4Features />
      <h1 className="text-center text-3xl">Newsletter</h1>

      <Newsletter config={aboutNewsletterConfig} />
      <h1 className="text-center text-3xl">Pricing</h1>

      <Pricing />
      <h1 className="text-center text-3xl">Process</h1>

      <Process />
      <h1 className="text-center text-3xl">Services</h1>
      <Services />
      <h1 className="text-center text-3xl">Stats</h1>

      <Stats />
      <h1 className="text-center text-3xl">Feature1Animated</h1>
      <Feature1Animated featureItems={featureItems} />
      <h1 className="text-center text-3xl">ContentWithImageDynamicCounter</h1>
      <ContentWithImageDynamicCounter featuresConfig={featuresConfig} />
      <h1 className="text-center text-3xl">FeaturesWithLastFilled</h1>
      {/* <FeaturesWithLastFilled
        services={services}
        sectionTitle="We Provide Recruitment, Immigration and Settlement Services"
        sectionSubtitle="Our goal is to provide customers with the best service, for us to help customers
  overcome their barriers and obtain Permanent Residensy in Canada"
      /> */}
      <Footer />
    </div>
  );
};

export default Page;
