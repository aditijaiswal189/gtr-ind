import { ContentWithImageDynamicCounter } from "@/components/ui/content-with-image-dynamic-counter";
import { CtaWithFeaturesRightImage } from "@/components/ui/cta-with-features-right-image";
import { Feature1Animated } from "@/components/ui/feature1-animated";
import { Hero2 } from "@/components/ui/hero2";
import { Stats } from "@/components/ui/stats";
import { Globe, UserCheck } from "lucide-react";
import React, { ReactNode } from "react";
import { features } from "../about/page";

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
const WhyChooseUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <Hero2
        badgeText="GreenTech Resources"
        title="Why Choose Us?"
        description="GreenTech Resources & GreenTech Resource Worldwide Canada is ranked as the 3rd top recruitment agency and immigration consultant in Saskatchewan."
        // imageUrl='https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
        imageUrl="/images/pic1.webp"
        primaryCta={{
          label: "About us",
          href: "/about-us/about/why-choose-us",
        }}
        secondaryCta={{
          label: "Learn More",
          href: "/about-us/about/book-appointment",
        }}
      />
      <ContentWithImageDynamicCounter featuresConfig={featuresConfig} />
      <Feature1Animated featureItems={featureItems} />
      <CtaWithFeaturesRightImage
        badgeText="Why Choose Us"
        title=" GreenTech Resource Worldwide Canada"
        subtitle=""
        features={features}
      />
      <Stats />
    </div>
  );
};

export default WhyChooseUs;
