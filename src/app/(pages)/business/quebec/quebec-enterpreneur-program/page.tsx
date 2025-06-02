import { Cta4FeaturesWithoutImage } from "@/components/ui/cta4-features-without-image";
import { Feature3 } from "@/components/ui/feature3";
import { Feature2WithImage } from "@/components/ui/features-2-with-image";
import {
  FeatureItemPropsList,
  FeatureList,
} from "@/components/ui/features-list";
import type { Cta4FeatureItemProps } from "@/components/ui/cta4-features-without-image";
import { Hero2 } from "@/components/ui/hero2";
import { StepsWithHeading3 } from "@/components/ui/steps-with-heading3";
import { Award, Briefcase, Heart, Notebook, Smile, Star } from "lucide-react";
import React from "react";
import { Users, ClipboardCheck, MapPin, FileCheck } from "lucide-react";
import { commonProps } from "@/constant/commonProps";

const items: FeatureItemPropsList[] = [
  {
    icon: Star,
    text: " Want to start and operate an innovative business in Québec",
  },
  {
    icon: Smile,
    text: "Have received a service offer from an organization that is committed to supporting you",
  },
  { icon: Award, text: "Have qualified business plan" },

  { icon: Heart, text: "Obtain enough points in the program’s selection grid" },
  {
    icon: Notebook,
    text: "Obtain an attestation of learning about democratic values ",
  },
];
const features2 = [
  {
    icon: "Briefcase" as const,
    title: "  Business Accelerator",
    description: `An organization with an establishment in Québec that offers support services to individuals whose business projects are designed to grow innovative businesses. In particular, it must provide a service for seeking financing​.`,
  },
  {
    icon: "Notebook" as const,
    title: "Business Incobator",
    description:
      "An organization with an establishment in Québec that offers coaching services to people whose business projects are designed to start innovative businesses",
  },
  {
    icon: "Layers" as const,
    title: "University Entrepreneurship Center",
    description:
      "An organization managed by an institution of higher learning incorporated under the laws of Québec or another province of Canada. It may also be an organization affiliated with such an institution that offers coaching services to entrepreneurs",
  },
];

const cards = [
  {
    icon: <Briefcase />,
    title: "About",
    description:
      "While the federal Immigrant Investor Program of Canada has been terminated, Quebec still offer investor immigration programs. This program require participants to invest a significant amount in the province in exchange for permanent residency.",
  },
  {
    icon: <Notebook />,
    title: "Quebec",
    description:
      "Successful candidates will receive a Québec Selection Certificate (CSQ) and can apply for Canadian permanent residency. Applicants must have a legally acquired net worth of at least CAD 900,000 and have experience in managing a business.",
  },
];

const steps = [
  {
    title: "Preparing and completing the required forms and documents",
    description:
      "Prepare the required forms and documents and complete the process ",
  },
  {
    title: "Paying your application review fee",
    description:
      "The fees are adjusted on January 1 of each year.Principal applicant: $1,176. Wife or husband, spouse or common-law partner: $186 .Each dependent child: $186",
  },
  {
    title: "Send your complete application by mail, in one envelope ",
    description:
      "Direction du regroupement familial et de l’enregistrement Ministère de l’Immigration, de la Francisation et de l’Intégration 285, rue Notre-Dame Ouest, 4e étage Montréal (Québec) H2Y 1T8 CANADA",
  },
];

export const items2: Cta4FeatureItemProps[] = [
  {
    icon: Users,
    title: "Connect to Supporting Organizations",
    description:
      "We can help you identify and connect with the appropriate supporting organizations in Québec, such as business accelerators, business incubators, or university entrepreneurship centers. We facilitate introductions and guide you on how to access their resources and support.",
    ctaHref: "/",
  },
  {
    icon: ClipboardCheck,
    title: "Business Plan Coaching",
    description:
      "Our Business Immigration Team experts assist in developing a strong, comprehensive business plan—crucial for the Québec immigration process. We also provide interview coaching to help you perform at your best during your immigration interview.",
    ctaHref: "/",
  },
  {
    icon: MapPin,
    title: "Guidance on Provincial Requirements",
    description:
      "Québec has specific immigration requirements. We guide you through completing your Québec Selection Certificate (CSQ) application, calculate your points under the Québec immigration system, and ensure you meet the minimum eligibility thresholds.",
    ctaHref: "/",
  },
  {
    icon: FileCheck,
    title: "Application Completion",
    description:
      "Our RCIC navigators help you assemble and submit all required documentation correctly. From forms to supporting materials, we provide ongoing support so you’re fully prepared and informed at every stage of the application process.",
    ctaHref: "/",
  },
];

const QuEnterpreneurProgram: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <Hero2
        badgeText="GreenTech Resources"
        title="Québec Entrepreneur Program"
        description="The Québec Entrepreneur Program is tailored for individuals interested in owning and managing a business in Quebec"
        imageUrl="/images/n/quebecenterpreneur.jpeg"
        primaryCta={commonProps?.primaryCta}
        secondaryCta={commonProps?.secondaryCta}
      />

      <FeatureList
        badgeText="Eligibility
               "
        heading={
          <>
            Quebec Enterpreneur Program
            {/* <br className="hidden md:block" /> */}
            <span className="text-primary"> (QEP)</span>
          </>
        }
        subheading="With the Québec Entrepreneur Program, you can develop your project either alone or with up to three other people applying to this program for the same project.

To immigrate to Québec as an entrepreneur, starting and operating an innovative business, you must meet the following conditions."
        items={items}
      />
      <Feature2WithImage
        heading={
          <>
            Quebec Enterpreneur Program
            <span className="text-primary pl-2">(QEP)</span>
          </>
        }
        subheading="Quebec’s dynamic cities, picturesque landscapes, and strong economy make it an appealing choice for immigration. "
        features={cards}
        imageSrc="/images/n/quebecselfemployed.png"
        imageAlt="Fox in the wild"
      />

      <Feature3
        badgeText="Express Entry"
        heading="Supporting Organizations"
        highlighted="Quebec Business Program"
        description="To establish and run an innovative business in Québec, you are required to collaborate with a support organization, which could be a business accelerator, business incubator, or a university entrepreneurship center"
        items={features2}
      />

      <StepsWithHeading3
        badgeText="Quebec"
        heading={
          <>
            <span className="relative inline-block">
              <span className="relative">Steps for applying</span>
            </span>
          </>
        }
        subheading="Here are the steps for applying for permanent selection under Québec Entrepreneur Program"
        steps={steps}
      />

      <Cta4FeaturesWithoutImage
        badgeText="Québec Entrepreneur Program"
        heading="What can we help you?"
        subheading="It’s important to choose a reputable and licensed immigration agent or consultant who is knowledgeable about the Québec immigration programs to ensure that applicants receive accurate and up-to-date information and guidance throughout the process. 

GreenTech Resources Worldwide Canada can assist with Québec immigration by providing a range of valuable services to applicants looking to immigrate to Québec as entrepreneurs

"
        items={items2}
      />
    </div>
  );
};

export default QuEnterpreneurProgram;
