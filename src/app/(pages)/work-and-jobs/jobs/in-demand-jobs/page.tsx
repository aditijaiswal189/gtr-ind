import { features } from "@/app/(pages)/about-us/about/about/page";
import { CtaWithFeaturesRightImage } from "@/components/ui/cta-with-features-right-image";
import { FeatureWithListProps } from "@/components/ui/feature-with-list3-grid";
import {
  FeatureList4GridProps,
  FeatureWithList4Grid,
} from "@/components/ui/feature-with-list4-grid";
import { Hero2 } from "@/components/ui/hero2";
import {
  Briefcase,
  Globe2,
  Globe2Icon,
  LifeBuoy,
  Navigation,
  Network,
  NotebookPen,
  NotebookTabsIcon,
} from "lucide-react";
import React from "react";

export const featuresConfig2: FeatureList4GridProps[] = [
  {
    icon: Globe2,
    title: " Saskatchewan",
    description: "List of jobs",
    bullets: [
      "Restaurant manager",
      "Food service supervisor",
      "Cooks and chefs",
      "Sales professionals",
      "Book keeper",
      "Admin assistant",

      "Pharmacy technical assistant",
    ],
  },
  {
    icon: LifeBuoy,
    title: "LMIA",
    description: "List of jobs",
    bullets: [
      "Cashiers",
      "Beauty products sale professional",
      "Post office clerk",
      "Shipper receiver",
      "Retail store stocker",
      "Retail store supervisor",
    ],
  },
  {
    icon: Navigation,
    title: "Others",
    description: "List of jobs",
    bullets: [
      "Construction helper",
      "Welders",
      "Meat processing plant worker",
      "Meat cutters",
      "Truck drivers",
    ],
  },
  {
    icon: Briefcase,
    title: "Healthcare",
    description: "List of jobs",
    bullets: [
      "Medical laboratory technologists",
      "Healthcare technicians",
      "Pharmacists",
      "Nurses",
      "Doctors",
    ],
  },
  {
    icon: Globe2,
    title: "IT",
    description: "List of jobs",
    bullets: [
      "Network engineers",
      "IT managers",
      "Cybersecurity experts",
      "Data analysts",
      "Software developers",
    ],
  },
  {
    icon: LifeBuoy,
    title: "Skilled Trades",
    description: "List of jobs",
    bullets: [
      "Carpenters",
      "Construction workers",
      "Welders",
      "Plumbers",
      "Electricians",
    ],
  },
  {
    icon: Navigation,
    title: "Transportation and Logistics",
    description: "List of jobs",
    bullets: ["Warehouse workers", "Logistic staffs", "Truck drivers"],
  },
  {
    icon: NotebookPen,
    title: "Education ",
    description: "List of jobs",
    bullets: [
      "Special education professionals",
      "Educational administrators",
      "Teachers",
    ],
  },

  {
    icon: Briefcase,
    title: "Business and Management",
    description: "List of jobs",
    bullets: [
      "Marketing specialist",
      "Project managers",
      "Management consultants",
      "Business analysts",
    ],
  },

  {
    icon: NotebookTabsIcon,
    title: "Agriculture/ Agri-food",
    description: "List of jobs",
    bullets: [
      "Farm managers",
      "Agricultural inspectors",
      "Food processors",
      "Farm workers",
    ],
  },

  {
    icon: Globe2Icon,
    title: "Engineering",
    description: "List of jobs",
    bullets: [
      "Civil engineers",
      "Mechanical engineers",
      "Electrical engineers",
      "Environmental engineers",
    ],
  },
  {
    icon: Network,
    title: "Hospitality and Tourism",
    description: "List of jobs",
    bullets: [
      "Event planners",
      "Travel agents",
      "Tour guides",
      "Hotel staffs",
      "Chefs and Cooks",
    ],
  },
];
export const featuresConfig3: FeatureWithListProps[] = [];
const InDemandJobs: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <Hero2
        badgeText="GreenTech Resources"
        title="We are hiring - JAL/LMIA available"
        description="GreenTech Resources Worldwide Canada's partners currently have a demand for hiring foreign workers for the following positions.
Please contact us to submit your application and arrange for interviews"
        imageUrl="/images/hero/n.avif"
        primaryCta={{
          label: "Work Permit",
          href: "/work-and-jobs/work/work-permit",
        }}
        secondaryCta={{
          label: "Learn More",
          href: "/about-us/about/book-appointment",
        }}
      />

      <FeatureWithList4Grid
        heading="We are hiring"
        subheading="Jobs in high demand in Canada.The list of jobs available in Canada"
        items={featuresConfig2}
      />

      <CtaWithFeaturesRightImage
        badgeText="About Us"
        title=" GreenTech Resource Worldwide Canada"
        subtitle=""
        features={features}
      />
    </div>
  );
};

export default InDemandJobs;
