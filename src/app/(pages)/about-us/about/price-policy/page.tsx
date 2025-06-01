import { Hero2 } from "@/components/ui/hero2";
import { Pricing } from "@/components/ui/pricing";
import PricingSection, {
  PricingSectionConfig,
} from "@/components/ui/pricing-section";
import { commonProps } from "@/constant/commonProps";

import React from "react";

const aboutPricingConfig: PricingSectionConfig[] = [
  {
    heading: "Visitor",
    description: "Pricing plans",
    showBanner: true,
    bannerText: "",
    linkHref: "/pricing",
    linkText: "",
    plans: [
      //   { title: "Student", description: "Best for students", price: "Free" },
      {
        title: "Fresh Applicant",
        description: "Additional $250 for each member",
        price: 500,
        isPopular: true,
      },
      {
        title: "Post-refusal Applicant",
        description: "Additional $250 for each member",
        price: 750,
      },
      {
        title: "Visitor Visa (Extension)",
        description: "Additional $250 for each member",
        price: 500,
      },
      {
        title: "Visitor Visa - Inside Canada",
        description: "Additional $250 for each member",
        price: 500,
      },
      {
        title: "Dependent of Int. Student",
        description: "Additional $250 for each member",
        price: 500,
      },
      {
        title: "Restoration of Visitor Visa",
        description: "Additional $300 for each member",
        price: 750,
      },
    ],
  },
  {
    heading: "Worker",
    description: "Plans",
    showBanner: true,
    bannerText: "",
    linkHref: "/pricing",
    linkText: "",
    plans: [
      {
        title: "No LMIA required",
        description: "",
        price: 2500,
        isPopular: true,
      },
      { title: "LMIA required", description: "", price: 1500 },
      { title: "Spousal Open Work Permit", description: "", price: 1000 },
      { title: " Open Work Permit(Other)", description: "", price: 750 },
      { title: "Bridging Open Work Permit", description: "", price: 750 },
      { title: "Restoration of Worker Visa", description: "", price: 750 },
      { title: "Post-graduation Work Permit", description: "", price: 399 },
    ],
  },
  {
    heading: "Study Permit",
    description: "Plans",
    showBanner: true,
    bannerText: "",
    linkHref: "/pricing",
    linkText: "",
    plans: [
      {
        title: "Fresh Applicant",
        description: "",
        price: 1000,
        isPopular: true,
      },
      { title: "Post-refusal Applicant", description: "", price: 1500 },
      { title: "Study Permit Extension", description: "", price: 500 },
      { title: "Restoration of Student Status", description: "", price: 750 },
    ],
  },
  {
    heading: "Citizenship",
    description: "Plans",
    showBanner: true,
    bannerText: "",
    linkHref: "/pricing",
    linkText: "",
    plans: [
      { title: "Citizenship", description: "", price: 1000, isPopular: true },
    ],
  },
  {
    heading: "PR",
    description: "Plans",
    showBanner: true,
    bannerText: "",
    linkHref: "/pricing",
    linkText: "",
    plans: [
      {
        title: "Express Entry Profile Creation",
        description: "",
        price: 500,
        isPopular: true,
      },
      {
        title: "FSW / FSTW / CEC / PNP - Post ITA",
        description: "Additional CAD 500 for family members",
        price: 3000,
      },
      {
        title: "PNP submission till PR",
        description: "Additional CAD 500 for family members",
        price: 5000,
      },
      { title: "Super Visa", description: "", price: 750 },
      { title: "Post-refusal Applicant", description: "", price: 1000 },
    ],
  },
  {
    heading: "Family Sponsorship",
    description: "Plans",
    showBanner: true,
    bannerText: "",
    linkHref: "/pricing",
    linkText: "",
    plans: [
      {
        title: "Spouse / Partner Outside Canada",
        description: "",
        price: 3500,
        isPopular: true,
      },
      { title: "Spouse / Partner Inside Canada", description: "", price: 3000 },
      { title: "Child Outside Canada", description: "", price: 2000 },
      { title: "Child Inside Canada", description: "", price: 1500 },
      { title: "Parents/Grandparent", description: "", price: 3500 },
    ],
  },
];

const PricePolicy: React.FC = () => {
  return (
    <div>
      <Hero2
        badgeText="GreenTech Resources"
        title="Price Policy"
        description="GreenTech Resources & GreenTech Resource Worldwide Canada is ranked as the 3rd top recruitment agency and immigration consultant in Saskatchewan."
        imageUrl="/images/n/studyincanada.png"
        primaryCta={commonProps?.primaryCta}
        secondaryCta={commonProps?.secondaryCta}
      />
      <Pricing />
      {aboutPricingConfig.map((config, index) => (
        <PricingSection key={index} {...config} />
      ))}
    </div>
  );
};

export default PricePolicy;
