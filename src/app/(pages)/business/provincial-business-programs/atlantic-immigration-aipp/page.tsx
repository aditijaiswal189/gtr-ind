import { features } from "@/app/(pages)/about-us/about/about/page";
import { CtaWithFeaturesRightImage } from "@/components/ui/cta-with-features-right-image";
import { FeatureGrid4, FeatureItemData } from "@/components/ui/feature-grid4";
import { Feature1Animated } from "@/components/ui/feature1-animated";
import { Feature3 } from "@/components/ui/feature3";
import {
  Feature2WithImage,
  FeatureItemProps,
} from "@/components/ui/features-2-with-image";
import { Hero2 } from "@/components/ui/hero2";
import {
  Briefcase,
  BriefcaseBusiness,
  BriefcaseBusinessIcon,
  ChartNetwork,
  FileText,
  Globe,
  Heart,
  Map,
  Network,
  Notebook,
  NotebookPen,
  Plane,
  UserCheck,
} from "lucide-react";
import React, { ReactNode } from "react";

interface FeatureItem {
  title: string;
  description: string;
  link: string;
  icon: ReactNode;
}
const featureItems: FeatureItem[] = [
  {
    title: "Why Now Is the Best Time to Apply",
    description:
      "The demand for skilled workers in Atlantic Canada has never been higher, and the AIPP offers a unique opportunity for individuals looking to immigrate. With the program now being a permanent fixture in Canada’s immigration system, there is no better time to explore the opportunities that await you in the Atlantic provinces.",
    link: "/",
    icon: <UserCheck className="w-16 h-16 text-primary lg:w-20 lg:h-20" />,
  },
  {
    title: "Are you planning to move to Canada?",
    description:
      " If so, the Atlantic Immigration Pilot Program (AIPP) could be the perfect opportunity to make your dreams of living in Canada a reality. The AIPP provides an easier, faster immigration route for skilled workers and international graduates seeking to settle in Canada’s Atlantic provinces. Through this program, even those who are not Canadian citizens or permanent residents can apply online, which expedites the immigration process while reducing application costs.",
    link: "/",
    icon: <Notebook className="w-16 h-16 text-primary lg:w-20 lg:h-20" />,
  },
  {
    title: "Why Choose the Atlantic Immigration Pilot Program?",
    description:
      "The AIPP is a strategic initiative launched by the Canadian government to stimulate economic growth in the Atlantic Provinces, which include New Brunswick, Newfoundland and Labrador, Nova Scotia, and Prince Edward Island. These provinces have a high demand for skilled workers, and the AIPP aims to fill these gaps by attracting foreign talent. This initiative not only supports the local economies but also provides immigrants with a streamlined pathway to permanent residency in Canada.",
    link: "/",
    icon: <Plane className="w-16 h-16 text-primary lg:w-20 lg:h-20" />,
  },
  {
    title: "Faster processing times",
    description:
      "With faster processing times and lower application costs, the AIPP offers a unique and efficient way for outland candidates to secure permanent residency. In fact, the opportunities available through this program are currently higher than in any other province. Whether you’re a skilled worker or an international graduate, the AIPP opens doors to a stable and prosperous future in Canada",
    link: "/",
    icon: <Globe className="w-16 h-16 text-primary lg:w-20 lg:h-20" />,
  },
];
const featureItemsNew: FeatureItem[] = [
  {
    title: " Prince Edward Island",
    description:
      "Just like the economy of P.E.I features a mix of traditional resources spanning agriculture, fisheries, and tourism. Over the years the province has witnessed lots of developments and changes in the areas of bioscience and advanced manufacturing. As of April 1, 2020, the minimum wage is $12.85 per hour and the provincial government has numerous programs available to help students get into the job market. According to the latest update on the AIP program, Prince Edward Island only accepts AIP applications for the Health Care, Construction and Manufacturing.(excluding NOC.73300)",
    link: "/",
    icon: <UserCheck className="w-16 h-16 text-primary lg:w-20 lg:h-20" />,
  },
  {
    title: "Newfoundland and Labrador",
    description:
      "Fish farming is considered one of the most important economic activities in the province.Retail trade, Manufacturing, and transportation are also considered other significant economic industries.",
    link: "/",
    icon: <Notebook className="w-16 h-16 text-primary lg:w-20 lg:h-20" />,
  },
];

const cards: FeatureItemProps[] = [
  {
    icon: <Briefcase />,
    title: "A Brief History of the Atlantic Immigration Pilot Program",
    description: `The AIPP was introduced in 2017 as a pilot project to address labor shortages and boost economic growth in the Atlantic region. It has since become a highly successful initiative, with increasing numbers of immigrants being invited to apply each year. Under Canada’s Immigration Level Plan for 2021, the government aimed to invite 6,250 immigrants to apply for permanent residency through the AIPP. This marked a significant increase in the program’s capacity, reflecting the growing demand for skilled workers in the Atlantic provinces.`,
  },
  {
    icon: <FileText />,
    title: "AIPP Becomes Permanent",
    description: `Due to the overwhelming success of the pilot program, the Canadian government announced that the AIPP would become a permanent immigration program starting January 1, 2022. This transition from pilot to permanent status ensures that the Atlantic provinces will continue to benefit from the influx of skilled immigrants, and it solidifies the AIPP as a reliable and attractive option for those seeking permanent residency in Canada.`,
  },
];
const features3 = [
  {
    icon: "Briefcase" as const,
    title: "Atlantic High-Skilled Program (AHSP)",
    description:
      " For individuals with a job offer in a management, professional, or technical/skilled trade position.",
  },
  {
    icon: "Notebook" as const,
    title: "Atlantic Intermediate-Skilled Program (AISP) ",
    description:
      "For individuals with a job offer in a position that requires a high school education and/or specific job training. ",
  },
  {
    icon: "Layers" as const,
    title: "Atlantic International Graduate Program (AIGP)",
    description:
      " For international graduates who have completed their education in one of the Atlantic provinces.",
  },
];
const features2: FeatureItemData[] = [
  {
    title: "Cultural Diversity",
    description:
      "New Brunswick, known for its rich cultural diversity and natural beauty, is the only officially bilingual province in Canada. This unique province forms the vital land bridge that connects Atlantic Canada to the rest of North America. It’s a province that boasts a balanced blend of industry and service sectors, making it a key player in Canada's economy.",
    icon: <Plane />,
  },

  {
    title: "A Thriving Goods-Producing Sector",
    description:
      "New Brunswick's goods-producing sector is robust, with industries that play a crucial role in the province’s economy. Agriculture and forestry are among the leading contributors, with fertile lands and vast forests supporting these industries. The province is known for producing high-quality agricultural products and timber, which are in demand both locally and internationally.",
    icon: <Notebook />,
  },
  {
    title: "Food processing",
    description:
      "Food processing is another key industry in New Brunswick, leveraging the province’s agricultural strength to create jobs and products that are exported around the world. The region is particularly known for its seafood processing industry, including lobster, scallops, and salmon, which are some of Canada’s top exports.",
    icon: <NotebookPen />,
  },
  {
    title: "Freight transport",
    description:
      "Freight transport is also a major industry in New Brunswick, with the province serving as a central hub for railways and trucking. Its strategic location as a land bridge makes it an important player in freight transport, connecting Atlantic Canada to the rest of North America.",
    icon: <Network />,
  },
  {
    title: "A Strong Services-Producing Sector",
    description:
      "While the goods-producing sector is significant, most of New Brunswick’s workforce is employed in the services-producing sector. This sector encompasses a wide range of industries, including media, health services, education, and tourism.",
    icon: <BriefcaseBusiness />,
  },
  {
    title: "Media Industry",
    description:
      "New Brunswick’s media industry is growing, with local television, radio, and newspapers playing a vital role in both English and French communities. The province’s tourism sector is also noteworthy, attracting visitors with its picturesque landscapes, rich history, and cultural experiences.",
    icon: <ChartNetwork />,
  },
  {
    title: "Key Industries: Oil and Shipbuilding",
    description:
      "New Brunswick’s economy is further strengthened by its oil and shipbuilding industries. The province is home to Canada’s largest oil refinery, located in Saint John, which plays a significant role in the country's energy sector. Shipbuilding is another key industry, with the province’s shipyards contributing to Canada’s naval and commercial fleets.",
    icon: <BriefcaseBusinessIcon />,
  },
  {
    title: "Latest Update",
    description:
      "According to the latest update from the province of Brunswick, it will only accept applications from foreigners living outside Canada in the fields of health care, construction and education. (excluding NOCs 12200, 13110, 14400, 60020, 60030, 62010, 62020, 63200, 63202, 64100, 64301, 64314, 64409, 94140, 94142).",
    icon: <Map />,
  },
  {
    title: "Why New Brunswick?",
    description:
      "New Brunswick offers a unique blend of natural beauty, cultural richness, and economic opportunity. Its diverse industries provide ample employment opportunities, and the province’s bilingual nature makes it an attractive destination for both Anglophone and Francophone professionals. Whether you're looking for career opportunities in agriculture, forestry, manufacturing, or services, New Brunswick’s dynamic economy is a place where growth and opportunity await.",
    icon: <Briefcase />,
  },
  {
    title: "Explore",
    description:
      "Explore the opportunities in New Brunswick today and discover why this province is not just a gateway to Atlantic Canada, but a thriving center of industry, culture, and innovation.",
    icon: <Heart />,
  },
];
const featuresNew: FeatureItemData[] = [
  {
    title: "A Strong Fishing Industry",
    description:
      "  Fishing is one of the oldest and most important industries in Nova Scotia, with the province being surrounded by the Atlantic Ocean. The waters off its coast are rich in marine life, making the province a leading producer of seafood such as lobster, scallops, and fish. The fishing industry not only provides jobs to thousands of Nova Scotians but also drives the province's export economy, with seafood products in high demand globally.",
    icon: <Plane />,
  },
  {
    title: "A Province with Opportunity",
    description:
      "With a population nearing 1 million, Nova Scotia offers a unique blend of natural beauty, cultural richness, and economic opportunity. The province’s diverse economy, driven by industries such as fishing, forestry, mining, and tourism, provides ample employment opportunities and contributes to its overall growth. Whether you’re looking to explore its stunning landscapes or take advantage of its economic potential, Nova Scotia is a province with a bright future.",
    icon: <Notebook />,
  },
  {
    title: " Strategic Location ",
    description:
      "Halifax’s strategic location on the Atlantic coast has made it one of Canada’s busiest ports, supporting industries such as shipping, trade, and logistics. In addition to its economic significance, Halifax is a major cultural center, with museums, theaters, and festivals that celebrate Nova Scotia’s heritage.",
    icon: <Notebook />,
  },
  {
    title: "Halifax: The Heart of Nova Scotia",
    description:
      "With a population of over 400,000 people, Halifax is Nova Scotia’s largest city and its political capital. As one of Canada’s major seaports, Halifax serves as a key gateway to the Atlantic Ocean, making it a central hub for trade and commerce. The city is known for its vibrant cultural scene, historic landmarks, and bustling waterfront.",
    icon: <Notebook />,
  },
  {
    title: "Forestry and Mining: Key Economic Drivers",
    description:
      "In addition to fishing, forestry and mining play crucial roles in Nova Scotia’s economy. The province’s vast forests provide raw materials for lumber, paper, and other wood products, while its mining sector produces valuable resources such as coal, gypsum, and limestone. These industries contribute significantly to local employment and the province’s export market.",
    icon: <Notebook />,
  },
  {
    title: "Tourism: A Growing Industry",
    description:
      "Nova Scotia’s scenic beauty, rich history, and vibrant culture attract visitors from across Canada and beyond. Domestic tourism is a major economic driver, with travelers coming to explore the province's stunning coastlines, historic landmarks, and charming towns. From the iconic Cabot Trail to the historic sites of Halifax, Nova Scotia offers a wide range of attractions for tourists.",
    icon: <Notebook />,
  },

  {
    title: "Opportunities",
    description:
      "Discover the opportunities Nova Scotia has to offer and experience life in one of Canada’s most dynamic coastal provinces.",
    icon: <Briefcase />,
  },
];
const AtlanticImmigration: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex gap-12 flex-col">
      <Hero2
        badgeText="GreenTech Resources"
        title="Atlantic Immigration (AIPP)"
        description="New Brunswick | Newfoundland and Labrador | Nova Scotia | Prince Edward Island"
        imageUrl="/images/hero/h.avif"
        primaryCta={{
          label: "Alberta (AAIP)",
          href: "/immigration/provincial-nominee-programs/alberta(aaip)",
        }}
        secondaryCta={{
          label: "Learn More",
          href: "/about-us/about/book-appointment",
        }}
      />
      <Feature1Animated featureItems={featureItems} />
      <Feature2WithImage
        heading={
          <>
            Atlantic Immigration Pilot Program
            <span className="text-primary pl-2"> AIPP opportunities</span>
          </>
        }
        subheading="Atlantic Immigration Pilot Program (AIPP) Opportunities: Your Path to Permanent Residency in Canada"
        features={cards}
        imageSrc="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        imageAlt="Fox in the wild"
      />

      <Feature3
        badgeText="AIPP"
        heading="How the AIPP"
        highlighted=" Works"
        description="The AIPP is employer-driven, meaning that candidates must first secure a job offer from a designated employer in one of the Atlantic provinces. Once the job offer is in place, candidates can apply for permanent residency through the AIPP. The program is divided into three categories:"
        items={features3}
      />
      <FeatureGrid4
        title="  Discover New Brunswick:"
        description="New Brunswick, known for its rich cultural diversity and natural beauty, is the only officially bilingual province in Canada."
        features={features2}
      />
      <FeatureGrid4
        title=" Nova Scotia"
        description="Nova Scotia, located on Canada’s eastern coast, boasts a diversified economy and a rich cultural heritage. Known for its stunning landscapes that border both land and sea, this maritime province is a thriving center for industries such as fishing, forestry, mining, and tourism. Its coastal location, combined with a mix of natural resources and scenic beauty, makes Nova Scotia a significant contributor to Canada’s economy."
        features={featuresNew}
      />
      <Feature1Animated featureItems={featureItemsNew} />
      <CtaWithFeaturesRightImage
        badgeText="About Us"
        title=" GreenTech Resource Worldwide Canada"
        subtitle="Each program has its specific requirements; please contact GTR Worldwide for personalized guidance."
        features={features}
      />
    </div>
  );
};

export default AtlanticImmigration;
