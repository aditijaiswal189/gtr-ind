import { features } from "@/app/(pages)/about-us/about/about/page";
import { CtaWithFeaturesRightImage } from "@/components/ui/cta-with-features-right-image";
import { Feature3 } from "@/components/ui/feature3";
import { Hero2 } from "@/components/ui/hero2";
import { commonProps } from "@/constant/commonProps";
import React from "react";

const features3 = [
  {
    icon: "Briefcase" as const,
    title: "Temporary",
    description:
      "Visitor Visa allows individuals to enter Canada temporarily for tourism, visiting family or friends, or conducting short-term business activities. It is one of the most common types of visas sought by people worldwide who wish to experience Canada’s breathtaking landscapes, visit loved ones, or attend business meetings and events.",
  },
  {
    icon: "Notebook" as const,
    title: "Who Needs a Visitor Visa?",
    description:
      "Most foreign nationals who are not from visa-exempt countries require a visitor visa to enter Canada. Visa-exempt countries, such as the United States, many European nations, and certain countries in the Asia-Pacific region, do not require their citizens to obtain a visitor visa. However, travelers from these countries must apply for an Electronic Travel Authorization (eTA) if they plan to arrive by air.",
  },
  {
    icon: "Layers" as const,
    title: "Different Purposes of a Visitor Visa",
    description:
      "It is essential to distinguish the Canadian Visitor Visa from other immigration or travel documents, like work permits or study permits. The visitor visa is specifically for temporary stays and does not allow the holder to work or study long-term in Canada. Below are the key purposes for which one can apply for a visitor visa:",
  },

  {
    icon: "NotebookPenIcon" as const,
    title: "Tourism:",
    description:
      "One of the primary reasons individuals apply for a visitor visa is to explore Canada’s iconic destinations, such as Banff National Park, Niagara Falls, and the vibrant cities of Toronto, Vancouver, and Montreal. Whether enjoying natural beauty, cultural attractions, or recreational activities, a visitor visa allows people to travel throughout the country for leisure.",
  },
  {
    icon: "Map" as const,
    title: "Visiting Family or Friends: ",
    description:
      "Many apply for a visitor visa to visit family members or friends living in Canada. This visa is commonly used by parents, relatives, or friends who want to spend time with loved ones and celebrate occasions such as weddings, holidays, or family reunions.",
  },
  {
    icon: "Globe" as const,
    title: "Business Purposes: ",
    description:
      "The visitor visa also covers short-term business activities like attending conferences, business meetings, negotiations, or seminars. However, individuals looking to work or engage in long-term business ventures must apply for a separate work permit",
  },
];
const features4 = [
  {
    icon: "Briefcase" as const,
    title: "Key Steps",
    description:
      "The process of applying for a Canadian Visitor Visa involves several key steps. First, applicants need to determine whether they require a visa to enter Canada based on their citizenship. If a visa is needed, the next step is to gather the necessary documents, which typically include a valid passport, proof of financial support, a letter of invitation (if applicable), and travel itinerary. Applicants may also need to provide proof of ties to their home country, such as employment, property, or family connections, to demonstrate their intent to return.",
  },
  {
    icon: "Notebook" as const,
    title: "Documents prepared",
    description:
      "Once the documents are prepared, applicants can fill out the online visa application form through the official website of the Immigration, Refugees, and Citizenship Canada (IRCC). The application form will prompt individuals to enter personal information, details about their trip, and other relevant information. It's crucial to ensure accuracy in the application, as any discrepancies could lead to delays or denials.",
  },
  {
    icon: "Layers" as const,
    title: "After submitting",
    description:
      "After submitting the application, applicants will be required to pay the necessary visa fees. Processing times vary, but applicants are advised to apply well in advance of their planned travel date. If the application is approved, a visa will be stamped in the passport, allowing the individual to travel to Canada for the specified period.",
  },
];
const Visitor: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <Hero2
        badgeText="GreenTech Resources"
        title="Visitor Visa"
        description="Canada, known for its breathtaking landscapes, vibrant cities, and welcoming atmosphere, has become an increasingly popular destination for tourists worldwide. If you're considering a visit to the Great White North, you may need to acquaint yourself with the process of obtaining a Canadian Visitor Visa, also known as a Temporary Resident Visa (TRV)"
        imageUrl="/images/n/visitorvisa.png"
        primaryCta={commonProps?.primaryCta}
        secondaryCta={commonProps?.secondaryCta}
      />
      <Feature3
        badgeText="Features"
        heading="Understanding the Canadian "
        highlighted="Visitor Visa"
        description=""
        items={features3}
      />
      <Feature3
        badgeText="Features"
        heading="Understanding the Canadian "
        highlighted="Visitor Visa"
        description=""
        items={features4}
      />

      <CtaWithFeaturesRightImage
        badgeText="PLAN YOUR VISIT TO CANADA"
        title="Seeking Canadian Visitor Visa"
        subtitle="Canada, known for its breathtaking landscapes, vibrant cities, and welcoming atmosphere, has become an increasingly popular destination for tourists worldwide."
        features={features}
      />
    </div>
  );
};

export default Visitor;
